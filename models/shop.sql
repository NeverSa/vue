-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-05-14 13:21:52
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `shop`
--

-- --------------------------------------------------------

--
-- 表的结构 `sp_activity`
--

CREATE TABLE IF NOT EXISTS `sp_activity` (
  `shop_id` int(10) NOT NULL COMMENT '外键关联字段',
  `activity_tag` varchar(20) NOT NULL COMMENT '活动类型',
  `activity_des` varchar(40) NOT NULL COMMENT '活动描述',
  `activity_type` int(10) NOT NULL COMMENT '对应csstype',
  KEY `orgid` (`shop_id`),
  KEY `orgid_2` (`shop_id`),
  KEY `shop_id` (`shop_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `sp_activity`
--

INSERT INTO `sp_activity` (`shop_id`, `activity_tag`, `activity_des`, `activity_type`) VALUES
(1, '新', '新用户满20减10元', 0),
(1, '减', '满40减10元', 0),
(1, '特', '新品上市', 0),
(2, '返', '下单即返3元代金券', 0),
(2, '特', '黄金单人餐', 0);

-- --------------------------------------------------------

--
-- 表的结构 `sp_dishes`
--

CREATE TABLE IF NOT EXISTS `sp_dishes` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `dishes_name` varchar(20) NOT NULL COMMENT '菜品名称',
  `dishes_type` varchar(20) NOT NULL COMMENT '菜品类型',
  `dishes_img` varchar(20) NOT NULL COMMENT '菜品名称',
  `shop_id` int(10) NOT NULL COMMENT '所属商家外键关联',
  `dishes_price` float NOT NULL COMMENT '菜品价格',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- 转存表中的数据 `sp_dishes`
--

INSERT INTO `sp_dishes` (`id`, `dishes_name`, `dishes_type`, `dishes_img`, `shop_id`, `dishes_price`) VALUES
(1, '鱼香肉丝', '热销榜', '', 1, 23),
(2, '浓香番茄鱼片', '热销榜', '', 1, 59),
(3, '梅干菜扣肉套餐', '热销榜', '', 1, 28),
(4, '白米饭', '副食小吃', '', 1, 3),
(5, '千张包', '副食小吃', '', 1, 4),
(6, '蜜汁鸡翅', '副食小吃', '', 1, 7),
(7, '鱼香狮子头套餐', '平衡套餐', '', 1, 22),
(8, '毛豆辣子鸡套餐', '平衡套餐', '', 1, 26),
(9, '茶树菇老鸭套餐', '平衡套餐', '', 1, 27);

-- --------------------------------------------------------

--
-- 表的结构 `sp_shop`
--

CREATE TABLE IF NOT EXISTS `sp_shop` (
  `shop_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '商家id',
  `shop_name` varchar(50) DEFAULT NULL COMMENT '商家名称',
  `shop_address` varchar(50) NOT NULL COMMENT '商家地址',
  `shop_brand` varchar(10) NOT NULL COMMENT '商家标注',
  `shop_delivery` varchar(50) NOT NULL COMMENT '配送方式',
  `shop_uptosend` float NOT NULL DEFAULT '0' COMMENT '起送价',
  `shop_deliveryprice` float NOT NULL DEFAULT '0' COMMENT '配送费',
  `shop_img` varchar(50) NOT NULL COMMENT '商家图片',
  `shop_sortaddress` varchar(20) DEFAULT NULL COMMENT '短地址',
  `shop_score` float NOT NULL DEFAULT '2' COMMENT '评分',
  PRIMARY KEY (`shop_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `sp_shop`
--

INSERT INTO `sp_shop` (`shop_id`, `shop_name`, `shop_address`, `shop_brand`, `shop_delivery`, `shop_uptosend`, `shop_deliveryprice`, `shop_img`, `shop_sortaddress`, `shop_score`) VALUES
(1, '乐味轩', '杭州市西湖区文一西路', '品牌', '蜂鸟专送', 25, 10, '', NULL, 2),
(2, '吉祥混度', '杭州市西湖区文二西路', '特权', '蜂鸟专送', 0, 3, 's', '文二西路店', 2);

--
-- 限制导出的表
--

--
-- 限制表 `sp_activity`
--
ALTER TABLE `sp_activity`
  ADD CONSTRAINT `sp_activity_ibfk_1` FOREIGN KEY (`shop_id`) REFERENCES `sp_shop` (`shop_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
