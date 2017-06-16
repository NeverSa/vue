/*
SQLyog 企业版 - MySQL GUI v8.14
MySQL - 5.7.18-log : Database - shop
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`shop` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `shop`;

/*Table structure for table `shopactive` */

DROP TABLE IF EXISTS `shopactive`;

CREATE TABLE `shopactive` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `OrgID` int(10) NOT NULL COMMENT '关联ID',
  `ActiveDes` varchar(20) DEFAULT NULL COMMENT '活动描述',
  `ActiveType` varchar(20) DEFAULT NULL COMMENT '活动类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `shopactive` */

insert  into `shopactive`(`id`,`OrgID`,`ActiveDes`,`ActiveType`) values (1,1,'新用户下单立减17.0元','新'),(2,1,'满15减4，满25减7，满65减20','减'),(3,1,'5折！夏季爆款，限时抢','折'),(4,1,'半折优惠','折');

/*Table structure for table `shoporg` */

DROP TABLE IF EXISTS `shoporg`;

CREATE TABLE `shoporg` (
  `OrgID` int(10) NOT NULL AUTO_INCREMENT COMMENT '机构ID',
  `OrgName` varchar(20) NOT NULL COMMENT '机构名称',
  `Address` varchar(20) DEFAULT NULL COMMENT '长地址',
  `ShortAddress` varchar(40) DEFAULT NULL COMMENT '短地址',
  `OrgImg` varchar(40) DEFAULT NULL COMMENT '机构图片',
  `BusinessHours` varchar(20) DEFAULT NULL COMMENT '营业时间',
  `OrgNotice` text COMMENT '机构公告',
  `DeliveryCost` float DEFAULT NULL COMMENT '配送费',
  `Distribation` char(20) DEFAULT NULL COMMENT '配送方式',
  `ReachOnTime` int(2) DEFAULT NULL COMMENT '是否准时达',
  `SendPrice` float DEFAULT NULL COMMENT '起送价',
  `Standard` float DEFAULT NULL COMMENT '消费标准',
  `OrgBrnd` varchar(10) DEFAULT NULL COMMENT '机构标签',
  PRIMARY KEY (`OrgID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 CHECKSUM=1 DELAY_KEY_WRITE=1 ROW_FORMAT=DYNAMIC;

/*Data for the table `shoporg` */

insert  into `shoporg`(`OrgID`,`OrgName`,`Address`,`ShortAddress`,`OrgImg`,`BusinessHours`,`OrgNotice`,`DeliveryCost`,`Distribation`,`ReachOnTime`,`SendPrice`,`Standard`,`OrgBrnd`) values (1,'锡纸诱惑','杭州市余杭区闲林街道53号','阿里巴巴店','3333','9:00/12:00','欢迎光临，用餐高峰期请提前下单谢谢',12,'蜂鸟专送',1,13,14,'品牌');

/*Table structure for table `shopsale` */

DROP TABLE IF EXISTS `shopsale`;

CREATE TABLE `shopsale` (
  `SaleID` int(10) NOT NULL AUTO_INCREMENT,
  `OrgID` int(10) DEFAULT NULL COMMENT '关联外键',
  `SaleName` varchar(20) DEFAULT NULL COMMENT '菜品名称',
  `SaleType` varchar(20) DEFAULT NULL COMMENT '菜品类型',
  `SaleTag` varchar(20) DEFAULT NULL COMMENT '菜品标签',
  `Price` float DEFAULT NULL COMMENT '价格',
  PRIMARY KEY (`SaleID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

/*Data for the table `shopsale` */

insert  into `shopsale`(`SaleID`,`OrgID`,`SaleName`,`SaleType`,`SaleTag`,`Price`) values (1,1,'鱼香肉丝','热销榜',NULL,23),(2,1,'浓香番茄鱼片','热销榜',NULL,25),(3,1,'梅干菜扣肉套餐','热销榜',NULL,11.3),(4,1,'白米饭','副食小吃',NULL,2),(5,1,'千张包','副食小吃',NULL,14),(6,1,'蜜汁鸡翅','副食小吃',NULL,17),(7,1,'鱼香狮子头套餐','平衡套餐',NULL,14),(8,1,'毛豆辣子鸡套餐','平衡套餐',NULL,16),(9,1,'茶树菇老鸭套餐','平衡套餐',NULL,18),(10,1,'茶树菇老鸭套餐','平衡套餐',NULL,11);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
