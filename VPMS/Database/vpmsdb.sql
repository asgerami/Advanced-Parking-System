SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `tbladmin` (
  `ID` int(10) NOT NULL,
  `AdminName` varchar(120) DEFAULT NULL,
  `UserName` varchar(120) DEFAULT NULL,
  `MobileNumber` bigint(10) DEFAULT NULL,
  `Email` varchar(200) DEFAULT NULL,
  `Password` varchar(120) DEFAULT NULL,
  `AdminRegdate` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `tbladmin` (`ID`, `AdminName`, `UserName`, `MobileNumber`, `Email`, `Password`, `AdminRegdate`) VALUES
(1, 'Admin', 'admin', 7898799798, 'tester1@gmail.com', 'f925916e2754e5e03f75dd58a5733251', '2019-07-05 05:38:23');

CREATE TABLE `tblcategory` (
  `ID` int(10) NOT NULL,
  `VehicleCat` varchar(120) DEFAULT NULL,
  `CreationDate` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `tblcategory` (`ID`, `VehicleCat`, `CreationDate`) VALUES
(1, 'Four Wheeler Vehicle', '2022-05-01 11:06:50'),
(2, 'Two Wheeler Vehicle', '2022-03-02 11:07:09'),
(4, 'Bicycles', '2022-05-03 11:31:17');


CREATE TABLE `tblregusers` (
  `ID` int(5) NOT NULL,
  `FirstName` varchar(250) DEFAULT NULL,
  `LastName` varchar(250) DEFAULT NULL,
  `MobileNumber` bigint(10) DEFAULT NULL,
  `Email` varchar(250) DEFAULT NULL,
  `Password` varchar(250) DEFAULT NULL,
  `RegDate` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `tblregusers` (`ID`, `FirstName`, `LastName`, `MobileNumber`, `Email`, `Password`, `RegDate`) VALUES
(2, 'Amir', 'Asgerami', 1234567890, 'asgeramiis@gmail.com', 'f925916e2754e5e03f75dd58a5733251', '2022-05-10 18:05:56');


CREATE TABLE `tblvehicle` (
  `ID` int(10) NOT NULL,
  `ParkingNumber` varchar(120) DEFAULT NULL,
  `VehicleCategory` varchar(120) NOT NULL,
  `VehicleCompanyname` varchar(120) DEFAULT NULL,
  `RegistrationNumber` varchar(120) DEFAULT NULL,
  `OwnerName` varchar(120) DEFAULT NULL,
  `OwnerContactNumber` bigint(10) DEFAULT NULL,
  `InTime` timestamp NULL DEFAULT current_timestamp(),
  `OutTime` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `ParkingCharge` varchar(120) NOT NULL,
  `Remark` mediumtext NOT NULL,
  `Status` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `tblvehicle` (`ID`, `ParkingNumber`, `VehicleCategory`, `VehicleCompanyname`, `RegistrationNumber`, `OwnerName`, `OwnerContactNumber`, `InTime`, `OutTime`, `ParkingCharge`, `Remark`, `Status`) VALUES
(1, '521796069', 'Two Wheeler Category', 'Hyundai', 'AA-678787', 'Chube Amare', 0987987987, '2022-05-09 05:58:38', '2022-05-09 11:38:04', '50 Birr.', 'NA', 'Out'),
(2, '469052796', 'Two Wheeler Vehicle', 'Honda', 'OR-895623', 'Chala', 0989898989, '2022-05-06 08:58:38', '2022-05-07 11:09:33', '35 Birr.', 'NA', 'Out'),
(3, '734465023', 'Four Wheeler Vehicle', 'Toyota', 'AA-562389', 'Abay', 0945123697, '2022-05-06 08:58:38', '2022-05-06 08:59:36', '50 Birr.', 'Vehicle Out', 'Out'),
(4, '432190880', 'Two Wheeler Vehicle', 'Hero Honda', 'AA-451236', 'Harun', 0934567890, '2022-05-06 08:58:38', '2022-05-10 18:07:00', '35 Birr.', 'Vehicle Out', 'Out'),
(5, '323009894', 'Two Wheeler Vehicle', 'Activa', 'AM-C55776', 'Abeni', 0954654654, '2022-05-06 08:58:38', '2022-05-06 08:59:24', '', '', ''),
(6, '522578915', 'Two Wheeler Vehicle', 'Apache', 'AA-895623', 'Mengistu', 0978999879, '2022-05-06 08:58:38', '2022-05-09 04:43:50', '', '', ''),
(7, '917725207', 'Four Wheeler Vehicle', 'Jetour', 'AA-A12323', 'Abebe', 0934567890, '2022-05-07 11:03:05', '2022-05-09 04:43:55', '50 Birr.', 'ljlkjlk', 'Out');


ALTER TABLE `tbladmin`
  ADD PRIMARY KEY (`ID`);

ALTER TABLE `tblcategory`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `VehicleCat` (`VehicleCat`);

ALTER TABLE `tblregusers`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `MobileNumber` (`MobileNumber`);

ALTER TABLE `tblvehicle`
  ADD PRIMARY KEY (`ID`);

ALTER TABLE `tbladmin`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `tblcategory`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;


ALTER TABLE `tblregusers`
  MODIFY `ID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
ALTER TABLE `tblvehicle`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;