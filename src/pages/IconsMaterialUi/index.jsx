import React from "react";
import "./IconsMaterialUI.css";
import { Battery0Bar, CarCrash, CarRepairSharp, Cast, CheckBoxOutlineBlank, ChecklistRtlRounded, ChildCare, Code, Coffee, CurrencyPound, DonutLarge, Downloading, FastForward, House, LockClockSharp, MarkAsUnread, People, PlayCircleOutline, PlaylistAddCheckTwoTone, SurfingOutlined, SyncLock, TakeoutDining, Wifi, WorkOutlined } from "@mui/icons-material";

export default function IconsMaterial() {
  return (
    <div className="icons-icons">
      <h1 className="material-h1">MATERIAL UI ICONS</h1>

      <div className="icons-section">
        <div className="row">
          <div className="col-3">
            <CarRepairSharp />
          </div>
          <div className="col-3">
            <ChildCare />
          </div>
          <div className="col-3">
            <CarCrash />
          </div>
          <div className="col-3">
            <House />
          </div>
          <div className="col-3">
            <Cast />
          </div>
          <div className="col-3">
            <CurrencyPound />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <PlayCircleOutline />
          </div>
          <div className="col-3">
            <PlaylistAddCheckTwoTone />
          </div>
          <div className="col-3">
            <DonutLarge />
          </div>
          <div className="col-3">
            <Downloading />
          </div>
          <div className="col-3">
            <People />
          </div>
          <div className="col-3">
            <Wifi />
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <TakeoutDining />
          </div>
          <div className="col-3">
            <CheckBoxOutlineBlank />
          </div>
          <div className="col-3">
            <ChecklistRtlRounded />
          </div>
          <div className="col-3">
            <SyncLock />
          </div>
          <div className="col-3">
            <LockClockSharp />
          </div>
          <div className="col-3">
            <Code />
          </div>
        </div>

        <div className="row m-0">
          <div className="col-3">
            <Coffee />
          </div>
          <div className="col-3">
            <MarkAsUnread />
          </div>
          <div className="col-3">
            <Battery0Bar />
          </div>
          <div className="col-3">
            <SurfingOutlined />
          </div>
          <div className="col-3">
            <WorkOutlined />
          </div>
          <div className="col-3">
            <FastForward />
          </div>
        </div>
      </div>
    </div>
  );
}
