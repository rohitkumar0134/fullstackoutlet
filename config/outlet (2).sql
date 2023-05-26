-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2023 at 10:00 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `outlet`
--

-- --------------------------------------------------------

--
-- Table structure for table `outlets`
--

CREATE TABLE `outlets` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `bannerimage` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `opentiming` varchar(255) DEFAULT NULL,
  `closetiming` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `youtubeLink` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `outlets`
--

INSERT INTO `outlets` (`id`, `title`, `bannerimage`, `location`, `address`, `category`, `opentiming`, `closetiming`, `description`, `youtubeLink`, `createdAt`, `updatedAt`) VALUES
(2, 'kamlesh', '1685086246889-kamleshIMG_2223.JPEG', '19.1869264,73.0421568', 'chandragan', 'garment', '11:01', '22:01', 'titozz outlets givee u free voucher', 'https://youtu.be/TS7N63zJ81w', '2023-05-26 03:45:49', '2023-05-26 07:31:35'),
(3, 'Hitler', '1685087721386-HitlerIMG_2238.JPEG', '19.1869264,73.0421568', 'suresh nagar', 'saloon', '15:24', '21:28', 'best offer', 'https://youtu.be/TS7N63zJ81w', '2023-05-26 07:55:21', '2023-05-26 07:55:21');

-- --------------------------------------------------------

--
-- Table structure for table `outletsimages`
--

CREATE TABLE `outletsimages` (
  `id` int(11) NOT NULL,
  `outletid` varchar(255) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `outletsimages`
--

INSERT INTO `outletsimages` (`id`, `outletid`, `images`, `createdAt`, `updatedAt`) VALUES
(2, '2', '1685068313070-kamleshIMG_2229.JPEG', '2023-05-26 02:31:53', '2023-05-26 02:31:53'),
(3, '2', '1685087531297-kamleshIMG_2224.JPEG', '2023-05-26 07:52:11', '2023-05-26 07:52:11'),
(4, '3', '1685087776676-HitlerIMG_2224.JPEG', '2023-05-26 07:56:16', '2023-05-26 07:56:16');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(3, 'r1admin', '$2a$10$5UFSP8EplOVLLg8NjvsH8O9s5/U6iAJ2hWKu5J3fUqX11luUt9q7e'),
(7, 'admin', '$2a$10$QdF8NVjVUbjZwdrFUSlOI.qj48k73UuyVDi6HdzNOD4AImRCRnAoO');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `outlets`
--
ALTER TABLE `outlets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `outletsimages`
--
ALTER TABLE `outletsimages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `outlets`
--
ALTER TABLE `outlets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `outletsimages`
--
ALTER TABLE `outletsimages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
