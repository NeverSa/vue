/**
 * Created by zongchaoyang on 2017/8/1.
 */
var { sequelize } = require("../config/db");
var User = sequelize.import("./user");
var Org=sequelize.import("./org");
var Activety=sequelize.import("./activty");


sequelize.sync({ force: false });
/*Org.create({
    OrgName:"餐厅1"

})*/
Activety.create({
    OrgID:"ad302ec5-a3f1-40e4-b71d-29ff0bc060cf",
    ActiveDes:"和大家回家啊大神",
    ActiveType:"新"
})
