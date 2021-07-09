import React from "react";

export default function WeedCard({ weed }) {
  return (
    <div className="WeedCard">
      <h1>
        <strong>Name</strong>:{weed.name}
      </h1>
      <ul>
        <li>
          <strong>THC Content</strong>:{weed.thc_content}
        </li>
        <li>
          <strong>Description</strong>:{weed.description}
        </li>
        <li></li>
      </ul>
    </div>
  );
}
