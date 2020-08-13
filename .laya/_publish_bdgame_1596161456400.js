// v1.7.0
const ideModuleDir = global.ideModuleDir;
const workSpaceDir = global.workSpaceDir;

//引用插件模块
const gulp = require(ideModuleDir + "gulp");
const fs = require("fs");
const path = require("path");
const revCollector = require(ideModuleDir + 'gulp-rev-collector');

let copyLibsTask = ["copyPlatformLibsJsFile"];
let packfiletask = ["packfile"];

let 
    config,
    releaseDir;
let versionCon; // 版本管理version.json
let commandSuffix,
	layarepublicPath;

gulp.task("preCreate_BD", copyLibsTask, function() {
	releaseDir = global.releaseDir;
	config = global.config;
	commandSuffix = global.commandSuffix;
	layarepublicPath = global.layarepublicPath;
});

gulp.task("copyPlatformFile_BD", ["preCreate_BD"], function() {
	let adapterPath = path.join(layarepublicPath, "LayaAirProjectPack", "lib", "data", "bdfiles");
	// 如果新建项目时已经点击了"微信/百度小游戏bin目录快速调试"，不再拷贝
	let isHadBdFiles =
		fs.existsSync(path.join(workSpaceDir, "bin", "game.js")) &&
		fs.existsSync(path.join(workSpaceDir, "bin", "game.json")) &&
		fs.existsSync(path.join(workSpaceDir, "bin", "project.swan.json")) &&
		fs.existsSync(path.join(workSpaceDir, "bin", "swan-game-adapter.js"));
	if (isHadBdFiles) {
		return;
	}
	let isHasPublish = 
		fs.existsSync(path.join(releaseDir, "game.js")) &&
		fs.existsSync(path.join(releaseDir, "game.json")) &&
		fs.existsSync(path.join(releaseDir, "project.swan.json")) &&
		fs.existsSync(path.join(releaseDir, "swan-game-adapter.js"));
	if (isHasPublish) {
		return;
	}
	let stream = gulp.src(adapterPath + "/*.*");
	return stream.pipe(gulp.dest(releaseDir));
});

gulp.task("modifyFile_BD", packfiletask, function() {
	if (config.version) {
		let versionPath = releaseDir + "/version.json";
		versionCon = fs.readFileSync(versionPath, "utf8");
		versionCon = JSON.parse(versionCon);
	}
	let indexJsStr = (versionCon && versionCon["index.js"]) ? versionCon["index.js"] :  "index.js";
	// 百度小游戏项目，修改index.js
	let filePath = path.join(releaseDir, indexJsStr);
	if (!fs.existsSync(filePath)) {
		return;
	}
	let fileContent = fs.readFileSync(filePath, "utf8");
	fileContent = fileContent.replace(/loadLib(\(['"])/gm, "require$1./");
	fs.writeFileSync(filePath, fileContent, "utf8");
});

// 开放域的情况下，合并game.js和index.js，并删除game.js
gulp.task("openData_BD", ["modifyFile_BD"], function (cb) {
	if (config.openDataZone) {
		let versionCon;
		if (config.version) {
			let versionPath = releaseDir + "/version.json";
			versionCon = fs.readFileSync(versionPath, "utf8");
			versionCon = JSON.parse(versionCon);
		}
		let indexJsStr = (versionCon && versionCon["index.js"]) ? versionCon["index.js"] :  "index.js";
		let indexPath = path.join(releaseDir, indexJsStr);
		let indexjs = readFile(indexPath);
		let gamejs = readFile(releaseDir + "/game.js");
		if (gamejs && indexjs) {
			gamejs = gamejs.replace(`require("index.js")`, indexjs);
			fs.writeFileSync(indexPath, gamejs, 'utf-8');
		}
		return cb();
	}
	cb();
});

function readFile(path) {
	if (fs.existsSync(path)) {
		return fs.readFileSync(path, "utf-8");
	}
	return null;
}

gulp.task("modifyMinJs_BD", ["openData_BD"], function() {
	if (!config.useMinJsLibs) {
		return;
	}
	let fileJsPath = path.join(releaseDir, "game.js");
	let content = fs.readFileSync(fileJsPath, "utf-8");
	content = content.replace("laya.bdmini.js", "min/laya.bdmini.min.js");
	fs.writeFileSync(fileJsPath, content, 'utf-8');
});

gulp.task("version_BD", ["modifyMinJs_BD"], function() {
	if (config.version) {
		let versionPath = releaseDir + "/version.json";
		let gameJSPath = releaseDir + "/game.js";
		let srcList = [versionPath, gameJSPath];
		return gulp.src(srcList)
			.pipe(revCollector())
			.pipe(gulp.dest(releaseDir));
	}
});

gulp.task("optimizeOpen_BD", ["version_BD"], function(cb) {
	let bdOptimize = config.bdOptimize;
	if (!bdOptimize || !bdOptimize.useOptimizeOpen) {
		return cb();
	}
	// 首屏加载优化(秒开)，修改game.json
	let filePath = path.join(releaseDir, "game.json");
	if (!fs.existsSync(filePath)) {
		return cb();
	}
	let fileContent = fs.readFileSync(filePath, "utf8");
	let fileConObj = JSON.parse(fileContent);
	if (bdOptimize.preloadRes) {
		fileConObj.preloadResources = bdOptimize.preloadResList;
	} else {
		delete fileConObj.preloadResources;
	}

	fs.writeFileSync(filePath, JSON.stringify(fileConObj, null, 4), "utf8");
	return cb();
});

gulp.task("buildBDProj", ["optimizeOpen_BD"], function() {
	console.log("all tasks completed");
});