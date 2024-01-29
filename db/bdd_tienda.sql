-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: db:3306
-- Tiempo de generación: 08-01-2023 a las 19:32:38
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdd_tienda`
--
CREATE DATABASE IF NOT EXISTS `bdd_tienda` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `bdd_tienda`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_categoria`
--

CREATE TABLE `tbl_categoria` (
  `cat_id` int NOT NULL,
  `cat_nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `cat_estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_compras`
--

CREATE TABLE `tbl_compras` (
  `com_id` int NOT NULL,
  `com_fecha` date NOT NULL,
  `com_stock_compra` int NOT NULL,
  `pro_id` int NOT NULL,
  `prov_id` int NOT NULL,
  `com_descripcion` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `com_total_compra` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `com_estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_menu`
--

CREATE TABLE `tbl_menu` (
  `men_id` int NOT NULL,
  `men_nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `men_link` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `men_icono` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `rol_id` int NOT NULL,
  `men_id_sub_men` int NOT NULL,
  `men_estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_persona`
--

CREATE TABLE `tbl_persona` (
  `per_id` int NOT NULL,
  `per_nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `per_apellido` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `per_correo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `per_clave` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `per_sexo` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `per_fecha_nacimiento` date NOT NULL,
  `rol_id` int NOT NULL,
  `per_estado` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_producto`
--

CREATE TABLE `tbl_producto` (
  `pro_id` int NOT NULL,
  `pro_nombre` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `pro_stock` int NOT NULL,
  `pro_descripcion` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `pro_imagen` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `cat_id` int NOT NULL,
  `prov_id` int NOT NULL,
  `pro_precio` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `pro_estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_proveedor`
--

CREATE TABLE `tbl_proveedor` (
  `prov_id` int NOT NULL,
  `prov_nombre` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `prov_ubicacion` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `prov_estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_rol`
--

CREATE TABLE `tbl_rol` (
  `rol_id` int NOT NULL,
  `rol_nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `rol_estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_venta`
--

CREATE TABLE `tbl_venta` (
  `ven_id` int NOT NULL,
  `per_id_cliente` int NOT NULL,
  `per_id_vendedor` int NOT NULL,
  `ven_subtotal` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `ven_iva` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `ven_total` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `ven_descripcion` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `ven_detalle_venta` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `ven_estado` tinyint(1) NOT NULL
) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_categoria`
--
ALTER TABLE `tbl_categoria`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indices de la tabla `tbl_compras`
--
ALTER TABLE `tbl_compras`
  ADD PRIMARY KEY (`com_id`);

--
-- Indices de la tabla `tbl_menu`
--
ALTER TABLE `tbl_menu`
  ADD PRIMARY KEY (`men_id`);

--
-- Indices de la tabla `tbl_persona`
--
ALTER TABLE `tbl_persona`
  ADD PRIMARY KEY (`per_id`);

--
-- Indices de la tabla `tbl_producto`
--
ALTER TABLE `tbl_producto`
  ADD PRIMARY KEY (`pro_id`);

--
-- Indices de la tabla `tbl_proveedor`
--
ALTER TABLE `tbl_proveedor`
  ADD PRIMARY KEY (`prov_id`);

--
-- Indices de la tabla `tbl_rol`
--
ALTER TABLE `tbl_rol`
  ADD PRIMARY KEY (`rol_id`);

--
-- Indices de la tabla `tbl_venta`
--
ALTER TABLE `tbl_venta`
  ADD PRIMARY KEY (`ven_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_categoria`
--
ALTER TABLE `tbl_categoria`
  MODIFY `cat_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_compras`
--
ALTER TABLE `tbl_compras`
  MODIFY `com_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_menu`
--
ALTER TABLE `tbl_menu`
  MODIFY `men_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_persona`
--
ALTER TABLE `tbl_persona`
  MODIFY `per_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_producto`
--
ALTER TABLE `tbl_producto`
  MODIFY `pro_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_proveedor`
--
ALTER TABLE `tbl_proveedor`
  MODIFY `prov_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_rol`
--
ALTER TABLE `tbl_rol`
  MODIFY `rol_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_venta`
--
ALTER TABLE `tbl_venta`
  MODIFY `ven_id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
