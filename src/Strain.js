import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SingleStrainCard from "./SingleStrainCard";
import { Link } from "react-router-dom";

export default function Strain() {
  const [singlePost, setSinglePost] = useState([]);
  const [hasError, setErrors] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/strains/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSinglePost(data);
      })
      .catch((err) => setErrors(true));
  }, []);
  console.log(singlePost);
  const displayStrainCard = () => {
    return <SingleStrainCard post={singlePost} />;
  };
  return (
    <div className="StrainDiv">
      <span>{displayStrainCard()}</span>
      <Link to="/strains" exact>
        <button className="Button">BACK</button>
      </Link>
    </div>
  );
}
