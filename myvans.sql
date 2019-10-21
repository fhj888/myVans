# Host: localhost  (Version: 5.5.53)
# Date: 2019-10-21 20:27:21
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "loge"
#

CREATE TABLE `loge` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `userpass` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

#
# Data for table "loge"
#

INSERT INTO `loge` VALUES (1,'冯换菊','fhj888','12332145576'),(2,'111111111111111111111111111111111111111111111111','111111111111111111111111111',NULL),(3,'12345678900','11111111111111111111111111111111111111111',NULL),(4,'11111111111111111111111111111','1111111111111111111111111111',NULL),(5,'222222222222222','1111111111111111',NULL),(6,'33333','33333333',NULL),(7,'werfv','ddddddddddddddddddd',NULL),(8,'drfv','dfrvtg',NULL),(9,'edrtv','cfrtgv',NULL),(10,'xedc','derfc',NULL),(11,'rftg','gth',NULL),(12,'','',NULL),(13,'tttgggggggggggggggggg','gggggggggggggggggggggggggg',NULL),(14,'13649381897','trrrgy',NULL),(15,'ertgy','ftgy',NULL),(16,'rtg','gyhu',NULL),(17,'cdrf','vgty',NULL),(18,'18719506445','fhj888',NULL);
