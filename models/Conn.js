/**
 * Created by zongchaoyang on 2017/3/21.
 */
var mysql=require("mysql")
var connection = mysql.createConnection({
  host : 'localhost' ,
  user : 'root' ,
  password : '123456' ,
  database : 'shop'
});

function SelectModel(user){
  this.username = user.username ;
  this.password = user.password ;
}

SelectModel.select = function(selectSql,callback){

  connection.query(selectSql,function(err,res){
    if(err){
    console.log(err)
      return ;
    }

    callback(err,res) ;
  }) ;
} ;
module.exports = SelectModel ;
