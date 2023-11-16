/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 8.0.34 : Database - companyryc
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`companyryc` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `companyryc`;

/*Table structure for table `galery` */

DROP TABLE IF EXISTS `galery`;

CREATE TABLE `galery` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `infoGeneralId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_5ad29b8a50abc44f20e4a2cdde1` (`infoGeneralId`),
  CONSTRAINT `FK_5ad29b8a50abc44f20e4a2cdde1` FOREIGN KEY (`infoGeneralId`) REFERENCES `infogeneral` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `galery` */

LOCK TABLES `galery` WRITE;

insert  into `galery`(`id`,`url`,`infoGeneralId`) values (1,'https://cdn.discordapp.com/attachments/1150635259260584091/1172317403913404476/F14.jpg?ex=655fe0a9&is=654d6ba9&hm=89b0cec649dabfc3d7465513a3a458ec0962811cc649b7d3fd506d2620b19c6d&',1),(2,'https://cdn.discordapp.com/attachments/1150635259260584091/1172317398993477692/F6.jpg?ex=655fe0a8&is=654d6ba8&hm=0a86ea48dc500f2b44c745de8bb2100aa638084071ef8c4cf91ac8dad73db7d3&',1),(3,'https://cdn.discordapp.com/attachments/1150635259260584091/1172317399538749631/F8.jpg?ex=655fe0a8&is=654d6ba8&hm=53186e12e86e8135497a8e721dce8565b29e02979c26886b96ddc72e4da3aba8&',1),(4,'https://cdn.discordapp.com/attachments/1150635259260584091/1172317398695694419/F5.jpg?ex=655fe0a8&is=654d6ba8&hm=7eb52eca6eaf6e15bfe86a2f2bc0c446861445860db3f0ba861aa922b0262116&',1),(5,'https://cdn.discordapp.com/attachments/1150635259260584091/1172317396854395000/F10.jpg?ex=655fe0a8&is=654d6ba8&hm=25849f2dbb3f617001adfc0ebeaada1aaf00bc772002a724aee96b51e73dab66&',1),(6,'https://cdn.discordapp.com/attachments/1150635259260584091/1172317397315756112/F1.jpg?ex=655fe0a8&is=654d6ba8&hm=e97c107717f9d0d88b080e944914382dd38d2531caea6f3a7b14180a54bde8ba&',1),(7,'https://cdn.discordapp.com/attachments/1150635259260584091/1172317397642907789/F2.jpg?ex=655fe0a8&is=654d6ba8&hm=7243915946b3ae23c130f47037e2872ab106367b873e9df0e5f7fe8c571c3aeb&',1),(8,'https://cdn.discordapp.com/attachments/1150635259260584091/1172317398385303572/F4.png?ex=655fe0a8&is=654d6ba8&hm=ab5840265a684f0b2087881de1cf9d40db51e6d0ff063e35d0c242a7d53dfdd7&',1),(9,'https://cdn.discordapp.com/attachments/1150635259260584091/1172317398053965954/F3.jpg?ex=655fe0a8&is=654d6ba8&hm=37f3cbe518ee8c88482b9ce64c97809cc119b5be7dd82b652fdc81e71b8c8819&',1),(10,'https://cdn.discordapp.com/attachments/1150635259260584091/1172317399287074816/F7.jpg?ex=655fe0a8&is=654d6ba8&hm=6f9d62ce9ce0f693e37bc4445737a2a4d068b8f1ef91dec4a0f8dd0366f65dbd&',1),(11,'https://cdn.discordapp.com/attachments/1150635259260584091/1172317399895248906/F9.jpg?ex=655fe0a8&is=654d6ba8&hm=26def4cdba0859dcb7da63a97e4cf455b0009ebfd9a22d2a16629bf122e38e3b&',1),(12,'https://cdn.discordapp.com/attachments/1150635259260584091/1172317403061960765/F11.jpg?ex=655fe0a9&is=654d6ba9&hm=5292fc28109b7aa71d40fdde505e3ab4f46892ff3520a23b09b67460855b2b77&',1),(13,'https://cdn.discordapp.com/attachments/1150635259260584091/1172317402780930169/F15.jpg?ex=655fe0a9&is=654d6ba9&hm=e7e4a7082fbf14406ae753ec0f2c8d8dc482de79ff21c796bca03807565f514b&',1),(14,'https://cdn.discordapp.com/attachments/1150635259260584091/1172317403670122566/F13.jpg?ex=655fe0a9&is=654d6ba9&hm=c123d4ed731a9fb93cf0dc41168aa781d44551181e47797c3ef8caa865116977&',1);

UNLOCK TABLES;

/*Table structure for table `infogeneral` */

DROP TABLE IF EXISTS `infogeneral`;

CREATE TABLE `infogeneral` (
  `id` int NOT NULL AUTO_INCREMENT,
  `logo` varchar(255) NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `imgDescription` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `tel2` varchar(255) NOT NULL,
  `direction` varchar(255) NOT NULL,
  `history` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `infogeneral` */

LOCK TABLES `infogeneral` WRITE;

insert  into `infogeneral`(`id`,`logo`,`companyName`,`description`,`imgDescription`,`correo`,`tel`,`tel2`,`direction`,`history`) values (1,'https://cdn.discordapp.com/attachments/1150635259260584091/1172313195940171888/RYCLOG.png?ex=655fdcbe&is=654d67be&hm=9d70d5c6311173cd243a5c5c74c8d5a2bf2f5bfe704ed700eb99f956877be237&','Climatizadora RYC','Servicio de calefacción Ventilación y Aire Acondicionado','https://cdn.discordapp.com/attachments/1150635259260584091/1173673377047785552/Description.png?ex=6564cf82&is=65525a82&hm=831cf51c848c681a413a491cad409a05c0d139a58b223296f81defaf0085016e&','climatizadoraryc@gmail.com','+506 8837-3941','+506 8970-9802','Nicoya, Guanacaste, Costa Rica','En RYC, acumulamos más de 5 años de experiencia laboral en la industria de la calefacción, ventilación y aire acondicionado. Nos enorgullece ofrecer uno de los servicios líderes en la provincia de Guanacaste');

UNLOCK TABLES;

/*Table structure for table `services` */

DROP TABLE IF EXISTS `services`;

CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `infoGeneralId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_28e5812baaff4b4d9ce1a8033bc` (`infoGeneralId`),
  CONSTRAINT `FK_28e5812baaff4b4d9ce1a8033bc` FOREIGN KEY (`infoGeneralId`) REFERENCES `infogeneral` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `services` */

LOCK TABLES `services` WRITE;

insert  into `services`(`id`,`name`,`description`,`icon`,`infoGeneralId`) values (1,'Venta de equipos de A/C','Venta de todo tipo de equipos desde termómetros digitales, hasta condensadores y mini-splits de la mano de:','https://twyzle-s3-1.s3.amazonaws.com/networks/1/sites/15511/precise-air-conditioning-corp-brands2-720x720.jpg?v=20220301-141857',1),(2,'Reparación De equipos','Reparación de todo tipo de equipos de aire acondicionado','https://twyzle-s3-1.s3.amazonaws.com/networks/1/sites/15511/precise-air-conditioning-corp-reparacion-570x570.jpg',1),(3,'Mantenimientos','Brindamos mantenimiento a todos los equipos de aire acondicionado a todas las marcas del mercado con herramientas de calidad','https://twyzle-s3-1.s3.amazonaws.com/networks/1/sites/15511/precise-air-conditioning-corp-mantenimiento2.jpg',1),(4,'Instalación De Aire Acondicionado','Instalación todo tipo de máquinas como condensadores, mini-splits, y demás','https://www.calderasyreformasvaldemoro.es/wp-content/uploads/2020/07/consejos-aire-acondicionado-1.jpg',1),(5,'Recarga De Aire Acondicionado Automotriz','Recarga de A/C vehicular con refrigerantes de Confianza','https://siempreauto.com/wp-content/uploads/sites/9/2022/06/Recargando-el-aire-acondicionado.jpg?resize=2048,1197',1);

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
