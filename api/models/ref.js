/**
 * Created by zongchaoyang on 2017/8/1.
 */
var { sequelize } = require("../config/db");
var User = sequelize.import("./user");

sequelize.sync({ force: true });
