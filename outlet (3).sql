-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2023 at 09:25 AM
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
(1, 'Shree Shagun Jewellers ', '1685364720286-Shree Shagun Jewellers IMG_2302.JPEG', '19.1844436,73.0425459', 'Chandragan', 'Jewellery', '10:00', '22:00', '\"Jewelry that Reflects Your Inner Brilliance\"', 'https://youtu.be/TS7', '2023-05-29 12:52:00', '2023-05-29 13:02:14'),
(2, 'Bilal Hair & Beauty Studio', '1685363486491-Bilal Hair & Beauty StudioIMG_2339.JPEG', '19.1837962,73.0521294', 'Near Global School', 'Saloon', '10:00', '23:00', '\"Where Hair and Beauty Dreams Come True\"', 'https://youtu.be/TS', '2023-05-29 12:31:26', '2023-05-29 13:02:51'),
(4, 'New Look Family saloon ', '1685360796306-New Look Family saloon new look.JPEG', '19.186799,73.044652', 'Near Warekar School', 'Saloon', '10:00', '23:00', '\"Where Style and Trends Collide\"', 'https://youtu.be/TS7N6', '2023-05-29 11:46:36', '2023-05-29 12:25:27'),
(5, 'Hitler Family Beauty Lounge', '1685361742705-Hitler Family Beauty Loungehitler.JPEG', '19.187565,73.043642', 'Suresh Nagar', 'Saloon', '10:00', '23:00', '\"Discover Your Signature Look\"', 'https://youtu.be/T', '2023-05-29 12:02:22', '2023-05-29 12:25:09'),
(7, 'Kamlesh', '1685364010963-KamleshIMG_2263.JPEG', '19.1841927,73.0431944', 'Near metro hospital', 'Garment', '10:00', '23:00', '\"Dress to Impress, Shop with Style\"', 'https://youtu.be/TS7N63', '2023-05-29 12:40:10', '2023-05-29 12:42:14');

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
(5, '4', '1685360920828-New Look Family saloon IMG_2236.JPEG', '2023-05-29 11:48:40', '2023-05-29 11:48:40'),
(6, '4', '1685360971786-New Look Family saloon IMG_2234.JPEG', '2023-05-29 11:49:31', '2023-05-29 11:49:31'),
(7, '4', '1685361010037-New Look Family saloon IMG_2227.JPEG', '2023-05-29 11:50:10', '2023-05-29 11:50:10'),
(8, '4', '1685361239546-New Look Family saloon newlookdd.JPEG', '2023-05-29 11:53:59', '2023-05-29 11:53:59'),
(9, '5', '1685363001699-Hitler Family Beauty LoungeIMG_2243.JPEG', '2023-05-29 12:23:21', '2023-05-29 12:23:21'),
(10, '5', '1685363010613-Hitler Family Beauty LoungeIMG_2245.JPEG', '2023-05-29 12:23:30', '2023-05-29 12:23:30'),
(11, '5', '1685363029088-Hitler Family Beauty LoungeIMG_2250.JPEG', '2023-05-29 12:23:49', '2023-05-29 12:23:49'),
(12, '5', '1685363041910-Hitler Family Beauty LoungeIMG_2253.JPEG', '2023-05-29 12:24:01', '2023-05-29 12:24:01'),
(13, '5', '1685363050021-Hitler Family Beauty LoungeIMG_2256.JPEG', '2023-05-29 12:24:10', '2023-05-29 12:24:10'),
(14, '5', '1685363061844-Hitler Family Beauty LoungeIMG_2257.JPEG', '2023-05-29 12:24:21', '2023-05-29 12:24:21'),
(17, '2', '1685363672257-Bilal Hair & Beauty StudioIMG_2352.JPEG', '2023-05-29 12:34:32', '2023-06-06 07:23:07'),
(18, '2', '1685363718791-Bilal Hair & Beauty StudioIMG_2355.JPEG', '2023-05-29 12:35:18', '2023-06-06 07:23:07'),
(19, '2', '1685363731513-Bilal Hair & Beauty StudioIMG_2358.JPEG', '2023-05-29 12:35:31', '2023-06-06 07:23:07'),
(20, '2', '1685363742921-Bilal Hair & Beauty StudioIMG_2361.JPEG', '2023-05-29 12:35:42', '2023-06-06 07:23:07'),
(21, '7', '1685364260339-KamleshIMG_2268.JPEG', '2023-05-29 12:44:20', '2023-05-29 12:44:20'),
(22, '7', '1685364273498-KamleshIMG_2271.JPEG', '2023-05-29 12:44:33', '2023-05-29 12:44:33'),
(23, '7', '1685364306689-KamleshIMG_2275.JPEG', '2023-05-29 12:45:06', '2023-05-29 12:45:06'),
(24, '7', '1685364322458-KamleshIMG_2279.JPEG', '2023-05-29 12:45:22', '2023-05-29 12:45:22'),
(25, '7', '1685364345456-KamleshIMG_2282.JPEG', '2023-05-29 12:45:45', '2023-05-29 12:45:45'),
(26, '7', '1685364356897-KamleshIMG_2283.JPEG', '2023-05-29 12:45:56', '2023-05-29 12:45:56'),
(27, '7', '1685364367826-KamleshIMG_2289.JPEG', '2023-05-29 12:46:07', '2023-05-29 12:46:07'),
(28, '7', '1685364381041-KamleshIMG_2290.JPEG', '2023-05-29 12:46:21', '2023-05-29 12:46:21'),
(29, '7', '1685364389647-KamleshIMG_2293.JPEG', '2023-05-29 12:46:29', '2023-05-29 12:46:29'),
(30, '1', '1685364911556-Shree Shagun Jewellers IMG_2319.JPEG', '2023-05-29 12:55:11', '2023-06-06 07:22:29'),
(31, '1', '1685364958444-Shree Shagun Jewellers IMG_2321.JPEG', '2023-05-29 12:55:58', '2023-06-06 07:22:29'),
(32, '1', '1685364997328-Shree Shagun Jewellers IMG_2325.JPEG', '2023-05-29 12:56:37', '2023-06-06 07:22:29'),
(34, '1', '1685365029345-Shree Shagun Jewellers IMG_2327.JPEG', '2023-05-29 12:57:09', '2023-06-06 07:22:29'),
(35, '1', '1685365069296-Shree Shagun Jewellers IMG_2333.JPEG', '2023-05-29 12:57:49', '2023-06-06 07:22:29'),
(36, '1', '1685365098238-Shree Shagun Jewellers IMG_2337.JPEG', '2023-05-29 12:58:18', '2023-06-06 07:22:29'),
(37, '1', '1685365124275-Shree Shagun Jewellers IMG_2338.JPEG', '2023-05-29 12:58:44', '2023-06-06 07:22:29'),
(38, '1', '1685365155021-Shree Shagun Jewellers IMG_2323.JPEG', '2023-05-29 12:59:15', '2023-06-06 07:22:29'),
(39, '1', '1685365189799-Shree Shagun Jewellers IMG_2309.JPEG', '2023-05-29 12:59:49', '2023-06-06 07:22:29');

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
(3, 'outletadmin', '$2a$10$5UFSP8EplOVLLg8NjvsH8O9s5/U6iAJ2hWKu5J3fUqX11luUt9q7e');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `outletsimages`
--
ALTER TABLE `outletsimages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
