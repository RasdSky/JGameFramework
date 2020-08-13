# JGameFramework
刚接触laya不久,总觉得学习过程中应该留下点什么,还不太完善，后续有时间再慢慢更新吧

## 1.说明
    框架集成了pb，fgui，eslint.
    分离出了框架层代码，方便移植。
## 2.模块说明
### 1.Data 
    数据管理模块（数据和逻辑分离），游戏中数据应该都存在对应data，可以监听data，监听数据变化
### 2.Event
    事件模块，对应的模块可以创建自己的GameEvent对象
### 3.Net
    网路模块，实现了PB协议
### 4.ResMgr
    增加了async/await的支持，方便写逻辑
### 5.SceneMgr
    从逻辑上抽象出Scene的概念，方便管理
### 6.UI
    UI的管理,抽象出Dialog的概念




