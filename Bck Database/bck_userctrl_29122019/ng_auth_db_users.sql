-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: ng_auth_db
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Main Index for User Table',
  `username` varchar(25) NOT NULL COMMENT 'Username',
  `password` varchar(90) NOT NULL COMMENT 'User Password',
  `email` varchar(40) NOT NULL COMMENT 'Email User',
  `image` varchar(60) NOT NULL COMMENT 'User Image',
  `role` varchar(20) NOT NULL COMMENT 'User Role',
  `country` varchar(20) NOT NULL COMMENT 'User Country',
  `description` varchar(60) NOT NULL COMMENT 'User Description',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Creation Date',
  `fullname` varchar(60) NOT NULL COMMENT 'User FullName',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'User Update ',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'annarracci','$2a$10$ODJycn1WGyJr9kBhiPve0OdOcGMcgKhjEu16waPDTOhCdVbXXdUg2','annarracci.71@gmail.com','assets/img/woman.png','USER','Venezuela','This is a System User','2019-12-12 04:21:36','Anna Narracci','2019-12-12 04:21:36'),(4,'gnarracci','$2a$10$Juzqfj8EqobwafEIyNyEbugDYhDA3MqexeU4LIucl0qVUkYHFmNJq','gnarracci@gmail.com','assets/img/gianni.jpg','ADMINISTRATOR','Venezuela','This is a System Administrator','2019-12-12 06:01:39','Gianni Narracci','2019-12-12 06:01:39'),(5,'farizan','$2a$10$DNxiq3vds2LIMvMt59lptuZgBx6SZpxwDx0jzpRyAZHpDFC/AaueW','farizan.13@outlook.es','assets/img/man.png','OBSERVER','Venezuela','This is an Observer User','2019-12-14 02:28:42','Fredyz Ariza','2019-12-14 02:28:42'),(6,'masn','$2a$10$wWNJv7VVSB4RqiVRD2WTvu83/h4.dYOJs/6/6KXjUW/DCDJoWcURC','maria.alejandra.99@gmail.com','assets/img/woman.png','USER','Venezuela','This is an User','2019-12-14 18:10:29','María Sánchez','2019-12-14 18:10:29'),(7,'cmaldonado','$2a$10$K8rz3IMY7AG2mOxb.lr0jeDdkJnSF3De6n7K14io.2PwaY1YP4uDG','c.maldonado.70@gmail.com','assets/img/man.png','ADMINISTRATOR','Venezuela','This is a System Administrator','2019-12-19 12:55:58','Cesar Maldonado','2019-12-19 12:55:58'),(8,'lgonzalez','$2a$10$5oej2V1HLMgwYfslhyshG.14UBkzEHCoOZxUMZzWR89vyjN9H1426','laura.goza..78@outlook.es','assets/img/woman.png','ADMINISTRATOR','Venezuela','This is an Administrator User','2019-12-21 16:20:23','Laura Gonzalez','2019-12-21 16:20:23');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-29  0:37:58
