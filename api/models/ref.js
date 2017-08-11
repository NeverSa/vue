/**
 * Created by zongchaoyang on 2017/8/1.
 */
var { sequelize } = require("../config/db");
var User = sequelize.import("./user");
var Org=sequelize.import("./org");
var Activety=sequelize.import("./activty");
var Sale=sequelize.import("./sale");




/*
User.getActivety().then(res=>{
    console.log(res)
})
*/

sequelize.sync({ force: false });


/*Org.create({
    OrgName:"餐厅1"

})*/

/*
Activety.create({
    OrgID:"cd6fecc4-35cd-423f-9f65-31dcee28c1aa",
    ActiveDes:"和大家回家啊大神",
    ActiveType:"新"
})
*/

