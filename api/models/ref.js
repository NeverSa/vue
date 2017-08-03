/**
 * Created by zongchaoyang on 2017/8/1.
 */
var { sequelize } = require("../config/db");
var User = sequelize.import("./user");
var Org=sequelize.import("./org");
var Activety=sequelize.import("./activty");

Org.hasMany(Activety, {
    foreignKey: 'org_id',
    targetKey: 'OrgId',
    as: "orgid" //别名，目标模型会混入到源模型后会使用该名称,
});
sequelize.sync({ force: false });
