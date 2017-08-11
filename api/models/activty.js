/**
 * Created by zongchaoyang on 2017/8/3.
 */
var uuid = require('node-uuid');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define("activity", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //非空
            autoIncrement: true, //自动递增
            primaryKey: true, //主键
        },
        ActiveDes: {
            type: DataTypes.STRING,
            comment:"营业时间"
        },
        ActiveType: {
            type: DataTypes.STRING,
            comment:"活动类型"
        }
    }, {
        underscored: true, //额外字段以下划线来分割
        // createdAt: "created_at",
        // updatedAt: "updated_at",
        timestamps: false, //取消默认生成的createdAt、updatedAt字段
        freezeTableName: true, // Model 对应的表名将与model名相同
        comment: "机构活动信息表",
        // paranoid: true      //虚拟删除
        //实例方法
        // instanceMethods: instanceMethods
    });
}