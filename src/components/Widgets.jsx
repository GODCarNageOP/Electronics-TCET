import React, { useContext } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Tilt } from "react-tilt";
import { DarkModeContext } from "../context/DarkModeContext";
import { Link } from "react-router-dom";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';


const Widgets = ({ type }) => {
  let data;

  //temporary
  const amount = "Updated";

  switch (type) {
    case "user":
      data = {
        title: "STUDENTS",
        isMoney: false,
        link: "/",
        tag: "See all Students",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon p-1 self-end"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "FACULTY",
        isMoney: false,
        link: "/",
        tag: "View all Faculty",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon p-1 self-end"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EVENTS",
        isMoney: false,
        link: "/events",
        tag: "View all Events",
        icon: (
          <EventAvailableOutlinedIcon
            className="icon p-1 self-end"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green", border: "1px solid green"}}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "ATTENDANCE",
        isMoney: false,
        link: "/profile",
        tag: "See Details",
        icon: (
          <SchoolOutlinedIcon
            className="icon p-1 self-end"
            style={{
              backgroundColor: "rgb(153, 102, 255, 0.2)",
              color: "rgb(153, 102, 255)",
              border: "1px solid rgb(153, 102, 255)"
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  const { darkMode } = useContext(DarkModeContext);
  return (
    <Tilt className={darkMode ? "dark flex sm:w-1/5 w-full justify-between border h-[130px] p-3 rounded-lg" : "widget flex sm:w-1/5 w-full justify-between border h-[130px] p-3 rounded-lg"}>
      <div className="left flex flex-col justify-between">
        <div className="title font-bold text-lg text-gray-600">
          {data.title}
        </div>
        <div className="counter text-md">
          {data.isMoney && "$"} {amount}
        </div>
        <Link to={data.link}>
        <div className="link underline underline-offset-2 cursor-pointer">{data.tag}</div>
        </Link>
      </div>
      <div
        className={`right flex flex-col justify-between text-blue-500`}
      >
        <div className="percentage flex items-center cursor-pointer">
         <InfoOutlinedIcon/>
        </div>

        {data.icon}
      </div>
    </Tilt>
  );
};

export default Widgets;
