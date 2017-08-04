/**
 * Created by zongchaoyang on 2017/8/3.
 */
var uuid = require('node-uuid');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("org", {
        OrgId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: uuid.v4()
        },
        OrgName: {
            type: DataTypes.STRING,

        },
        OrgBrand:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            comment:"机构标签是否为品牌"
        },
        Address: {
            type: DataTypes.STRING,
        },
        ShortAddress: {
            type: DataTypes.STRING,
        },
        OrgImg: {
            type: DataTypes.STRING,
        },
        BusinessHours: {
            type: DataTypes.DATE,
            comment:"营业时间"
        },
        OrgNotice: {
            type: DataTypes.TEXT,
            comment:"机构公告"
        },
        DeliveryCost: {
            type: DataTypes.FLOAT,
            comment:"配送费",
            defaultValue: 0.00,
        },
        Distribation: {
            type: DataTypes.STRING,
            comment:"配送方式"
        },
        ReachOnTime: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            comment:"是否准时达"
        },
        SendPrice: {
            type: DataTypes.FLOAT,
            defaultValue: 0.00,
            comment:"起送价"
        },
        Standard: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            comment:"消费标准"
        },


    }, {
        underscored: true, //额外字段以下划线来分割
        // createdAt: "created_at",
        // updatedAt: "updated_at",
        timestamps: false, //取消默认生成的createdAt、updatedAt字段
        freezeTableName: true, // Model 对应的表名将与model名相同
        //静态方法，即user模型自带的方法
        classMethods: {
            getAllOgg:function () {
                return "ssss"
            }
        },
        comment: "机构信息类",
        // paranoid: true      //虚拟删除
        //实例方法
        // instanceMethods: instanceMethods
    });
}