import React from "react";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel,
} from "react95";

export default function SingleStrainCard({ post }) {
  return (
    <div className="SingleStrainCard">
      <Window resizable className="window">
        <WindowHeader className="window-header">
          <span>{post.name}</span>
        </WindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm">
            Review
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
            <img src={post.url} className="weedPic" />
            <h1>Description:</h1>
          </span>
          <p>{post.description}</p>
        </WindowContent>
        <Panel variant="well" className="footer">
          <span className="THCspan">THC Content: </span>
          {post.thc_content}
        </Panel>
      </Window>
    </div>
  );
}
