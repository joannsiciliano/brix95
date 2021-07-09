import React from "react";

export default function WeedCard({ strain }) {
  return (
    <div className="WeedCard">
      <h3>{strain.name}</h3>
    </div>
  );
}
