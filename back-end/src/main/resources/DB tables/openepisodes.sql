-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2020 at 09:35 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pharma`
--

-- --------------------------------------------------------

--
-- Table structure for table `openepisodes`
--

CREATE TABLE `openepisodes` (
  `episodeID` int(25) NOT NULL,
  `patientID` int(11) NOT NULL,
  `assessment` varchar(200) NOT NULL,
  `notes` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `openepisodes`
--

INSERT INTO `openepisodes` (`episodeID`, `patientID`, `assessment`, `notes`) VALUES
(1, 2, 'Diabetes', 'Type B'),
(3, 2, 'Pneumonia', 'Active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `openepisodes`
--
ALTER TABLE `openepisodes`
  ADD PRIMARY KEY (`episodeID`),
  ADD KEY `patientID` (`patientID`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `openepisodes`
--
ALTER TABLE `openepisodes`
  MODIFY `episodeID` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `openepisodes`
--
ALTER TABLE `openepisodes`
  ADD CONSTRAINT `patient` FOREIGN KEY (`patientID`) REFERENCES `patient` (`patientID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
