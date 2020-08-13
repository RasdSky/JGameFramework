/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----
loadLib("libs/laya.core.js")
loadLib("libs/laya.html.js")
loadLib("libs/fairygui.js")
loadLib("libs/rawinflate.js")
//-----libs-end-------

//protobuf
loadLib("libs/protobuf-library.js");
loadLib("libs/protobuf-bundles.js");
loadLib("js/bundle.js");
