import React from "react";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel,
} from "react95";

export default function Contact() {
  return (
    <div className="Contact">
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
            <h1>Contact:</h1>
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
            <h1>Contact:</h1>
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
            <h1>Contact:</h1>
          </span>
          <p></p>
        </WindowContent>
        <Panel variant="well" className="footer">
          <span className="THCspan">THC Content: 0 </span>
        </Panel>
      </Window>
    </div>
  );
}
