
/**
 * Created by zongchaoyang on 2017/5/5.
 */
var express=require('express');
var app =express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//这里解决不同服务的跨域请求
var cors=require("cors")
app.use(cors())
var async=require('async');
var db=require("../models/Conn")

app.use(bodyParser.json());


//获取猜你喜欢列表
app.post('/api/getfoodlists',function (req, res, next) {
    var sql="select id name,dishesname,price from sp_merchants right join sp_sale on sp_merchants.id= sp_sale.orgid WHERE `likeexponent`>1 LIMIT 0,4";
    db.select(sql,function (err,data) {
        res.end(JSON.stringify(data));
    })
});
//获取商品列表
app.post('/api/goods/getlist',function (req, res, next) {
    let id=req.body.id;
    let Result={"Rows":[]};
    let sql=`SELECT SaleType,OrgID FROM shopsale where OrgID=${id} group by SaleType`;
    db.select(sql,function (err,data) {
        if(!err){
            let _index=0
            async.map(data,function(item,callback) {
                let sql = `SELECT SaleType as type, SaleName as name,SaleID,Price as price,conts FROM shopsale where SaleType=\'${item.SaleType}\'`
                Result.Rows.push(item)
                db.select(sql, function (err, data) {
                    Result.Rows[_index].item = data
                    _index++
                    callback(null, Result);
                })
            },function(err,results) {
                res.end(JSON.stringify(Result));
            });
        }
    })
});
//获取单个商家信息
app.post("/api/shop/getoneshop",function(req,res){
    let id=req.body.id;
    let sql =`select * from shoporg where OrgID=${id}.`
    db.select(sql,function(err,data){
        if(!err){
            res.send(JSON.stringify(data))
        }else{
            res.end(JSON.stringify({code:"0"}))
        }
    })
})
//获取商家信息
app.post('/api/shop/getshoplist',function (req,res) {
    var sql="select * from shoporg"
    db.select(sql,function(err,data){
        if(!err){
            res.end(JSON.stringify(data));
        }else{
            res.end(JSON.stringify({code:"0"}))
        }
    })
});

//获取商家活动信息
app.post("/api/shop/getactivity",function(req,res){
    let shopid=req.body.id;
    let sql=`SELECT * FROM shopactive where OrgID=${shopid}.`;
    db.select(sql,function(err,data){
        if(!err){
            res.send(JSON.stringify(data))
        }

    })

})
//根据orgid获取大类和小类
app.post("/api/shop/getOrgType",function (req,res) {
    let type=req.body.type
    let sql=`SELECT * FROM shoporgtype WHERE  BigClass=${type}`;
    db.select(sql,function (err,data) {
        if(!err){
            res.send(JSON.stringify(data))
        }
    })
})
//根据大类和小类获取机构列表
app.post("/api/shop/getOrgTypeByType",function (req,res) {
    let smalltype=req.body.smalltype;
    let bigtype=req.body.bigtype;
    console.log(smalltype)
    let sql=`SELECT * FROM shoporg WHERE  BigClass=${bigtype} AND SmallClass=${smalltype}`;
    console.log(sql)
    db.select(sql,function (err,data) {
        console.log(data)
        if(!err){
            res.send(JSON.stringify(data))
        }
    })
})
//登录接口
app.post("/api/user/login",function(req,res){
    let username=req.body.username;
    let password=req.body.password;
    var sql=`SELECT * FROM sp_user WHERE loginname=\'${username}\' AND password=\'${password}\'`
    db.select(sql,function(err,data){
        console.log(data)
        if(!err){
            if(data.length==0){
                console.log("a")
                res.send(JSON.stringify({"success":false}))
            }else{
                res.send(JSON.stringify({"success":true}))
            }
        }else{
            res.send(JSON.stringify({"success":false}))
        }
    })
})
//配置服务端口
var server = app.listen(3000, function () {
    console.log('Example app listening at');
})
