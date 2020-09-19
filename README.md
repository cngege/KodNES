# KodNES
 KodBox插件：在可道云KodBox上在线玩库中的NES游戏

插件使用https://github.com/bfirsh/jsnes 开源代码,支持在浏览器运行NES游戏
请在KodBox中将此插件文件夹导入到KodBox根目录下的plugins文件夹。

在KodBox插件管理页面,启用插件（如果没有显示插件,请按Ctrl+F5刷新页面）
![此处输入图片的描述][1]

启用插件后，进入到KodBox文件管理页面,双击后缀为.nes的文件开始游玩
默认支持双人游戏

默认键位：
---
键位修改可以在KodNES/static/setup.js中修改
后续可直接在配置插件-插件菜单中修改

|  手柄键   | 玩家1  |  玩家2  |
|  ----  | ----  | ----  |
| 上  | W | 方向键UP |
| 下  | S | 方向键DOWN |
| 左  | A | 方向键LEFT |
| 右  | D | 方向键RIGHT |
| SELECT  | V | 0 |
| START  | B | . |
| A  | K | 3 |
| B  | J | 2 |
| 连发A  | I | 6 |
| 连发B  | U | 5 |

![此处输入图片的描述][2]

（将）支持直接在插件安装面板修改游戏按键映射
![此处输入图片的描述][3]

移动设备支持
--------

1.6版本开始支持移动设备上触摸操作
![移动设备支持][4]


  [1]: https://s1.ax1x.com/2020/08/27/d4eSjH.png
  [2]: https://i.loli.net/2020/08/31/EX6FuHwe3sIWZKP.png
  [3]: https://i.loli.net/2020/08/31/anoYX3QBKe6FM1m.png
  [4]: https://i.loli.net/2020/09/20/aimtI4KpzYJZWX8.jpg