import React from "react";
import ReactStars from "react-rating-stars-component";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel,
} from "react95";

export default function SingleStrainCard({ post }) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
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
      <p className="RateP">Rate This Strain:</p>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={30}
        activeColor="#ffd700"
        className="ReactStars"
      />
    </div>
  );
}
