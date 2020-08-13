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

gulp.task("preCreate_Alipay", copyLibsTask, function() {
	releaseDir = global.releaseDir;
	config = global.config;
	commandSuffix = global.commandSuffix;
	layarepublicPath = global.layarepublicPath;
});

gulp.task("copyPlatformFile_Alipay", ["preCreate_Alipay"], function() {
	let isHasPublish = 
		fs.existsSync(path.join(releaseDir, "game.js")) &&
		fs.existsSync(path.join(releaseDir, "game.json")) &&
		fs.existsSync(path.join(releaseDir, "my-adapter.js"));
	if (isHasPublish) {
		return;
	}
	let AlipayAdapterPath = path.join(layarepublicPath, "LayaAirProjectPack", "lib", "data", "Alipayfiles");
	let copyLibsList = [`${AlipayAdapterPath}/**/*.*`];
	var stream = gulp.src(copyLibsList);
	return stream.pipe(gulp.dest(releaseDir));
});

gulp.task("modifyFile_Alipay", packfiletask, function() {
	// 修改game.json文件
	let gameJsonPath = path.join(releaseDir, "game.json");
	let content = fs.readFileSync(gameJsonPath, "utf8");
	let conJson = JSON.parse(content);
	conJson.screenOrientation = config.AlipayInfo.screenOrientation;
	content = JSON.stringify(conJson, null, 4);
	fs.writeFileSync(gameJsonPath, content, "utf8");

	// 修改game.js
	let filePath = path.join(releaseDir, "game.js");
	// 这个地方，1.x IDE和2.x IDE 不一致
	let fileContent = `require("./my-adapter.js");
require("./libs/laya.Alipaymini.js");\nrequire("./index.js");`;
	fs.writeFileSync(filePath, fileContent, "utf8");

	if (config.version || config.enableVersion) {
		let versionPath = releaseDir + "/version.json";
		versionCon = fs.readFileSync(versionPath, "utf8");
		versionCon = JSON.parse(versionCon);
	}
	// 修改index.js
	let indexJsStr = (versionCon && versionCon["index.js"]) ? versionCon["index.js"] :  "index.js";
	let indexFilePath = path.join(releaseDir, indexJsStr);
	if (!fs.existsSync(indexFilePath)) {
		return;
	}
	let indexFileContent = fs.readFileSync(indexFilePath, "utf8");
	indexFileContent = indexFileContent.replace(/loadLib(\(['"])/gm, "require$1./");
	fs.writeFileSync(indexFilePath, indexFileContent, "utf8");
})

gulp.task("modifyMinJs_Alipay", ["modifyFile_Alipay"], function() {
	if (!config.useMinJsLibs) {
		return;
	}
	let fileJsPath = path.join(releaseDir, "game.js");
	let content = fs.readFileSync(fileJsPath, "utf-8");
	content = content.replace("laya.Alipaymini.js", "min/laya.Alipaymini.min.js");
	fs.writeFileSync(fileJsPath, content, 'utf-8');
});

gulp.task("version_Alipay", ["modifyMinJs_Alipay"], function () {
	if (config.version) {
		let versionPath = releaseDir + "/version.json";
		let gameJSPath = releaseDir + "/game.js";
		let srcList = [versionPath, gameJSPath];
		return gulp.src(srcList)
			.pipe(revCollector())
			.pipe(gulp.dest(releaseDir));
	}
});

gulp.task("buildAlipayProj", ["version_Alipay"], function() {
	console.log("all tasks completed");
});