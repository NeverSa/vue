# vue-vux

> 部分模仿饿了嘛，技术栈vue+vuex+vux+mysql+Sequelize

## 项目开始

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# 启动接口api服务
node www.js

# 首次数据库配置
数据库配置文件api/config/db.js，请先手动创建数据库，
第一次执行时将api/models/ref.js文件中的sequelize.sync({ force: false })
改为sequelize.sync({ force: true })会自动同步数据表。


