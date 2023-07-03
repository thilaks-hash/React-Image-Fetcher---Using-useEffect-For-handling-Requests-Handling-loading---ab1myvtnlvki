import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { Loader } from "./Loader";
import { PhotoFrame } from "./PhotoFrame";
const App = () => {
  const [number, setNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const getPhoto = async () => {
    if (!number) return;
    setIsLoading(true);
    const respone = await fetch(
      ` https://jsonplaceholder.typicode.com/photos/${number}`
    );
    const data = await respone.json();
    console.log(data);
    setPhoto(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getPhoto();
  }, [number]);
  const handleInput = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <input type="number" value={number} onChange={handleInput}></input>
      {isLoading ? (
        <Loader />
      ) : photo ? (
        <PhotoFrame url={photo.url} title={photo.title} />
      ) : null}
    </div>
  );
};

export default App;
