import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SingleStrainCard from "./SingleStrainCard";

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

  return <div className="Strain"></div>;
}
