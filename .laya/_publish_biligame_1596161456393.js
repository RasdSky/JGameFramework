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

gulp.task("preCreate_Bili", copyLibsTask, function() {
	releaseDir = global.releaseDir;
	config = global.config;
	commandSuffix = global.commandSuffix;
	layarepublicPath = global.layarepublicPath;
});

gulp.task("copyPlatformFile_Bili", ["preCreate_Bili"], function() {
	let biliAdapterPath = path.join(layarepublicPath, "LayaAirProjectPack", "lib", "data", "bilifiles");
	let isHasPublish = 
		fs.existsSync(path.join(releaseDir, "game.js")) &&
		fs.existsSync(path.join(releaseDir, "game.json")) &&
		fs.existsSync(path.join(releaseDir, "weapp-adapter.js"));
	if (isHasPublish) {
		return;
	}
	let stream = gulp.src(biliAdapterPath + "/*.*");
	return stream.pipe(gulp.dest(releaseDir));
});

gulp.task("modifyFile_Bili", packfiletask, function() {
	// 修改game.json文件
	let gameJsonPath = path.join(releaseDir, "game.json");
	let content = fs.readFileSync(gameJsonPath, "utf8");
	let conJson = JSON.parse(content);
	conJson.deviceOrientation = config.biliInfo.deviceOrientation;
	content = JSON.stringify(conJson, null, 4);
	fs.writeFileSync(gameJsonPath, content, "utf8");

	if (config.version) {
		let versionPath = releaseDir + "/version.json";
		versionCon = fs.readFileSync(versionPath, "utf8");
		versionCon = JSON.parse(versionCon);
	}
	let indexJsStr = (versionCon && versionCon["index.js"]) ? versionCon["index.js"] :  "index.js";
	// bili小游戏项目，修改index.js
	let filePath = path.join(releaseDir, indexJsStr);
	if (!fs.existsSync(filePath)) {
		return;
	}
	let fileContent = fs.readFileSync(filePath, "utf8");
	fileContent = fileContent.replace(/loadLib(\(['"])/gm, "require$1./");
	fs.writeFileSync(filePath, fileContent, "utf8");
});

gulp.task("modifyMinJs_Bili", ["modifyFile_Bili"], function() {
	if (!config.useMinJsLibs) {
		return;
	}
	let fileJsPath = path.join(releaseDir, "game.js");
	let content = fs.readFileSync(fileJsPath, "utf-8");
	content = content.replace("laya.bilimini.js", "min/laya.bilimini.min.js");
	fs.writeFileSync(fileJsPath, content, 'utf-8');
});

gulp.task("version_Bili", ["modifyMinJs_Bili"], function() {
	if (config.version) {
		let versionPath = releaseDir + "/version.json";
		let gameJSPath = releaseDir + "/game.js";
		let srcList = [versionPath, gameJSPath];
		return gulp.src(srcList)
			.pipe(revCollector())
			.pipe(gulp.dest(releaseDir));
	}
});

gulp.task("buildBiliProj", ["version_Bili"], function() {
	console.log("all tasks completed");
});