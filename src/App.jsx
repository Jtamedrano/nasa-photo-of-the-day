import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";

const StyledNasaImageCont = styled.div`
  max-width: 100vw;
  height: 75vh;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

function App() {
  const [data, setData] = useState([]);

  const link =
    "https://api.nasa.gov/planetary/apod?api_key=XVgsy6reEThF99jzG5kuJgVhRUo6Al3ktPEBgdHj";
  useEffect(() => {
    Axios.get(link)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="App">
      <p>Nasa Photo Of The Day</p>
      <StyledNasaImageCont>
        <img src={data.url} alt={data.title} />
        <p>
          <em>{data.title}</em>
        </p>
      </StyledNasaImageCont>
    </div>
  );
}

export default App;
