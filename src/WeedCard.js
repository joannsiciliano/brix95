import React from "react";
import "./App.css";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import styled from "styled-components";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel,
} from "react95";

export default function WeedCard({ weed }) {
  return (
    <Window resizable className="window">
      <WindowHeader className="window-header">
        <span>{weed.name}</span>
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
          <img src={weed.url} className="weedPic" />
          <h1>Description:</h1>
        </span>
        <p>{weed.description}</p>
      </WindowContent>
      <Panel variant="well" className="footer">
        <span className="THCspan">THC Content: </span>
        {weed.thc_content}
      </Panel>
    </Window>

    // <div className="WeedCard" style={{ fontFamily: "ms_sans_serif_bold" }}>
    //   <h1 style={{ fontFamily: "ms_sans_serif_bold" }}>Name: {weed.name}</h1>
    //   <ul className="WeedCardUL" style={{ fontFamily: "ms_sans_serif_bold" }}>
    //     <li>
    //       <strong>THC Content</strong>:{weed.thc_content}
    //     </li>

    //     <li>Description: {weed.description}</li>
    //   </ul>
    // </div>
  );
}
