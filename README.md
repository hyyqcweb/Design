# shop Admin

```bash
                                                 _ooOoo_
                                                 o8888888o
                                                 88" . "88
                                                 (| -_- |)
                                                  O\ = /O
                                              ____/`---'\____
                                            .   ' \\| |// `.
                                             / \\||| : |||// \
                                           / _||||| -:- |||||- \
                                             | | \\\ - /// | |
                                           | \_| ''\---/'' | |
                                            \ .-\__ `-` ___/-. /
                                         ___`. .' /--.--\ `. . __
                                      ."" '< `.___\_<|>_/___.' >'"".
                                     | | : `- \`.;`\ _ /`;.`/ - ` : | |
                                       \ \ `-. \_ __\ /__ _/ .-` / /
                               ======`-.____`-.___\_____/___.-`____.-'======
                                                  `=---='
                      
                               .............................................
                                        佛祖保佑                  永无BUG
                                佛曰:
                                        写字楼里写字间，写字间里程序员；
                                        程序人员写程序，又拿程序换酒钱。
                                        酒醒只在网上坐，酒醉还来网下眠；
                                        酒醉酒醒日复日，网上网下年复年。
                                        但愿老死电脑间，不愿鞠躬老板前；
                                        奔驰宝马贵者趣，公交自行程序员。
                                        别人笑我忒疯癫，我笑自己命太贱；
                                        不见满街漂亮妹，哪个归得程序员？
```

## 开发构建

### 目录结构

```bash
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /public/       # 公共文件，编译时copy至dist目录
│ ├── /components/   # UI组件及UI相关方法
│ │ ├── skin.less    # 全局样式
│ │ └── vars.less    # 全局样式变量
│ ├── /routes/       # 路由组件
│ │ └── app.js       # 路由入口
│ ├── /models/       # 数据模型
│ ├── /services/     # 数据接口
│ ├── /themes/       # 项目样式
│ ├── /mock/         # 数据mock
│ ├── /utils/        # 工具函数
│ │ ├── config.js    # 项目常规配置
│ │ ├── menu.js      # 菜单及面包屑配置
│ │ ├── config.js    # 项目常规配置
│ │ ├── request.js   # 异步请求函数
│ │ └── theme.js     # 项目需要在js中使用到样式变量
│ ├── route.js       # 路由配置
│ ├── index.js       # 入口文件
│ └── index.html     
├── package.json     # 项目信息
├── .eslintrc        # Eslint配置
└── .roadhogrc.js    # roadhog配置
```

文件夹命名说明:

-   components：组件（方法）为单位以文件夹保存，文件夹名组件首字母大写（如`DataTable`），方法首字母小写（如`layer`）,文件夹内主文件与文件夹同名，多文件以`index.js`导出对象（如`./src/components/Layout`）。
-   routes：页面为单位以文件夹保存，文件夹名首字母小写（特殊除外，如`UIElement`）,文件夹内主文件以`index.js`导出，多文件时可建立`components`文件夹（如`./src/routes/dashboard`），如果有子路由，依次按照路由层次建立文件夹（如`./src/routes/UIElement`）。

### 快速开始

克隆项目文件:

```bash
git clone https://github.com/hyyqcweb/Design.git
```

进入目录安装依赖:

```bash
#开始前请确保没有安装roadhog、webpack到NPM全局目录, 国内用户推荐yarn或者cnpm
npm i 或者 yarn install
```

开发：

```bash
npm run build:dll #第一次npm run dev时需运行此命令，使开发时编译更快
npm run dev
打开 http://localhost:9000
```


