import React from "react";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Desktop,
  Panel,
} from "react95";

import "./App.css"

import Xan from "./2021_Headshot.jpeg";
import Jo from "./profilePic.png";
import Sam from "./AU.jpg"

export default function Contact() {
  return (
    <main className="Contact">
      {/* <Desktop backgroundStyles={{ background: "blue" }} /> */}
      <Window resizable className="window">
        <WindowHeader className="window-header">
          <span>JoAnn Siciiliano</span>
        </WindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm">
            File
          </Button>
          <Button variant="menu" size="sm">
            Edit
          </Button>
          <Button variant="menu" size="sm" disabled>
            Save
          </Button>
        </Toolbar>
        <WindowContent>
          <span className="DescriptionSpan">
            <img src={Jo} className="ProfilePic" alt="jo profile" />
          </span>
          <p></p>
        </WindowContent>
        <Panel variant="well" className="footer">
          <span className="THCspan">THC Content: </span>
        </Panel>
      </Window>
      <Window resizable className="window">
        <WindowHeader className="window-header">
          <span>Alexander Sherwin</span>
        </WindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm">
            File
          </Button>
          <Button variant="menu" size="sm">
            Edit
          </Button>
          <Button variant="menu" size="sm" disabled>
            Save
          </Button>
        </Toolbar>
        <WindowContent>
          <span className="DescriptionSpan">
            <img src={Xan} className="ProfilePic" alt="Xan profile" />
          </span>
          <p></p>
        </WindowContent>
        <Panel variant="well" className="footer">
          <span className="THCspan">THC Content: 42069 (nice) </span>
        </Panel>
      </Window>
      <Window resizable className="window">
        <WindowHeader className="window-header">
          <span>Sam Gold</span>
        </WindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm">
            File
          </Button>
          <Button variant="menu" size="sm">
            Edit
          </Button>
          <Button variant="menu" size="sm" disabled>
            Save
          </Button>
        </Toolbar>
        <WindowContent>
          <span className="DescriptionSpan">
            <img src={Sam} className="ProfilePic" alt="Sam profile" />
          </span>
            <p></p>
        </WindowContent>
        <Panel variant="well" className="footer">
          <span className="THCspan">THC Content: 0 </span>
        </Panel>
      </Window>
    </main>
  );
}
