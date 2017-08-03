/**
 * Created by zongchaoyang on 2017/8/3.
 */
var express = require('express');
var router = express.Router();

var { sequelize } = require("../config/db");
var Org = sequelize.import("../models/org");


/*获取所有机构信息*/
router.post('/getalllist', function(req, res, next) {
    Org.findAll({
        attributes: ['OrgId', 'OrgName','ShortAddress','OrgImg','Distribation','ReachOnTime','SendPrice','DeliveryCost']
    }).then((data)=>{
        res.end(JSON.stringify(data))
    });

});

module.exports = router;