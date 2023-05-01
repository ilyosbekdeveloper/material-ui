import React from "react";
import "./Main.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";

export default function Main({ toggleTheme, theme, ...props }) {
  return (
    <div className="main" {...props}>
      <h1>OUR COMPONENTS</h1>
      <Button onClick={() => toggleTheme()} className="themeMode">
        {theme == "dark" ? <WbSunnyIcon /> : <ModeNightIcon />}
      </Button>

      {/* routers */}
      <ul className="main-ul">
        <li>
          <NavLink to={"buttons"}>Buttons</NavLink>
        </li>
        <li>
          <NavLink to={"icons"}>Icons</NavLink>
        </li>
        <li>
          <NavLink to={"datadisplay"}>Data Display</NavLink>
        </li>
        <li>
          <NavLink to={"buttongroup"}>Button Grpoup</NavLink>
        </li>
      </ul>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
