/**
 * Created by zongchaoyang on 2017/8/3.
 */
var express = require('express');
var router = express.Router();

var { sequelize } = require("../config/db");
var Org = sequelize.import("../models/org");
var Activity=sequelize.import("../models/activty");

/*Org.create({
    OrgName:"餐厅33",
    Address:"文一路",
    ShortAddress:"文一店"

})*/
/*获取所有机构信息*/
router.post('/getalllist', function(req, res, next) {
    Org.findAll({
        attributes: ['OrgId', 'OrgName','ShortAddress','OrgImg','Distribation','ReachOnTime','SendPrice','DeliveryCost']
    }).then((data)=>{
        res.end(JSON.stringify(data))
    });

});
/* @parame
  @id
  根据id获取机构活动信息
*/
router.post("/getactivity",function (req,res,next) {
    let id=req.body.id;
   Activity.findAll({
        where: { OrgID:id }
     }).then(projects => {
       res.end(JSON.stringify(projects))
    })

})
module.exports = router;