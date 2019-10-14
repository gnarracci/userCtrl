-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-10-2019 a las 04:29:09
-- Versión del servidor: 5.7.17
-- Versión de PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ng_auth_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `country`
--

CREATE TABLE `country` (
  `id` int(2) NOT NULL COMMENT 'Id Country',
  `country` varchar(30) DEFAULT NULL COMMENT 'Country Name'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELACIONES PARA LA TABLA `country`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role`
--

CREATE TABLE `role` (
  `id` int(2) NOT NULL COMMENT 'Id Role',
  `role` varchar(20) DEFAULT NULL COMMENT 'Role Name',
  `role_descrip` varchar(100) DEFAULT NULL COMMENT 'Role Description'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELACIONES PARA LA TABLA `role`:
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL COMMENT 'Main Index for User Table',
  `username` varchar(25) NOT NULL COMMENT 'Username',
  `password` varchar(90) NOT NULL COMMENT 'User Password',
  `email` varchar(40) NOT NULL COMMENT 'Email User',
  `image` varchar(60) NOT NULL COMMENT 'User Image',
  `role` varchar(20) NOT NULL COMMENT 'User Role',
  `country` varchar(20) NOT NULL COMMENT 'User Country',
  `description` varchar(60) NOT NULL COMMENT 'User Description',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Creation Date'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- RELACIONES PARA LA TABLA `users`:
--

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `image`, `role`, `country`, `description`, `created_at`) VALUES
(1, 'gnarracci', 'Torino_1976', 'gnarracci@gmail.com', 'assets/img/gianni.jpg', 'ADMINISTRATOR', 'Venezuela', 'Systems Engineer', '2019-10-01 15:26:39'),
(2, 'annarracci', 'gtughrughrt8ghe8ght89gj89tjgf89jg', 'annarracci.71@gmail.com', 'assets/img/usuario-hombre.png', 'USER', 'Venezuela', 'Professional Nurse', '2019-10-01 15:26:47'),
(4, 'farizam', 'Maraca/18', 'franciele.16@hotmail.com', 'assets/img/usuario-hombre.png', 'OBSERVER', 'Venezuela', 'Professional Nurse', '2019-10-01 15:26:58'),
(5, 'masn', 'mariapapita170999', 'maria.alejandra.99@gmail.com', 'assets/img/usuario-hombre.png', 'USER', 'Venezuela', 'System\'s User', '2019-10-01 15:27:09'),
(8, 'psilva', 'ujxvduiogrfigj', 'p.silva.85@gmail.com', 'assets/img/usuario-hombre.png', 'USER', 'Venezuela', 'Pedro is a Test User', '2019-10-01 15:27:17'),
(11, 'testuser', 'test1234', 'test@gmail.com', 'assets/img/usuario-hombre.png', 'ADMINISTRATOR', 'Japan', 'Administrator User', '2019-10-01 17:13:08'),
(13, 'mdaemon', 'mdaemon1234', 'm.daemon.74@gmail.com', 'assets/img/usuario-hombre.png', 'USER', 'France', 'This is an Observer User', '2019-10-02 17:00:21'),
(14, 'mprimera', 'maria1234', 'maria.primera.c@hotmail.com', 'assets/img/usuario-hombre.png', 'USER', 'Venezuela', 'Common User of the WebApp', '2019-10-02 17:02:35'),
(15, 'cmaldonado', 'maldonadoc71', 'cesar.maldonado@gmail.com', 'assets/img/usuario-hombre.png', 'ADMINISTRATOR', 'Venezuela', 'Administrator User of the WebApp', '2019-10-02 17:04:57'),
(16, 'aaddams', 'addams1974', 'ava.addams.84@gmail.com', 'assets/img/usuario-hombre.png', 'OBSERVER', 'France', 'This is an User', '2019-10-05 15:01:09'),
(17, 'jmartinez', 'jmartinez2000', 'jmartinez1970@hotmail.com', 'assets/img/usuario-hombre.png', 'USER', 'Venezuela', 'Mechanic Engineer from Piping Works', '2019-10-05 15:06:03'),
(18, 'jgutierrez', 'jgutierrez1983', 'jgutierrez.83@gmail.com', 'assets/img/usuario-hombre.png', 'ADMINISTRATOR', 'Venezuela', 'User Administrator', '2019-10-06 15:06:10');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `country`
--
ALTER TABLE `country`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT COMMENT 'Id Country';

--
-- AUTO_INCREMENT de la tabla `role`
--
ALTER TABLE `role`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT COMMENT 'Id Role';

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Main Index for User Table', AUTO_INCREMENT=19;


--
-- Metadatos
--
USE `phpmyadmin`;

--
-- Metadatos para la tabla country
--

--
-- Metadatos para la tabla role
--

--
-- Metadatos para la tabla users
--

--
-- Metadatos para la base de datos ng_auth_db
--
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
