/**
 * Created by zongchaoyang on 2017/8/8.
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("sale", {
        OrgId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        SaleName: {
            type: DataTypes.STRING,
            allowNull: false,
            comment:"菜品名称"
        },
        SaleType:{
            type: DataTypes.STRING,
            allowNull: false,
            comment:"菜品类型"
        },
        Price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            comment:"菜品价格"
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