import Axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import "./App.css";
import DatePickerForm from "./App/DatePickerForm";
import Image from "./App/Image";

const StyledNasaImageCont = styled.div`
  max-width: 100vw;
  height: 75vh;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .imageText {
    width: 75%;
    min-width: 500px;
    margin: 0 auto 2em;
  }
`;

function App() {
  const [nasaData, setNasaData] = useState([]);
  const [date, setDate] = useState("");

  useMemo(() => {
    Axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=XVgsy6reEThF99jzG5kuJgVhRUo6Al3ktPEBgdHj"
    )
      .then((res) => {
        setNasaData(res.data);
      })
      .catch((err) => console.warn(err));
  }, []);
  console.log(nasaData);

  useEffect(() => {
    console.log(date);
    Axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=XVgsy6reEThF99jzG5kuJgVhRUo6Al3ktPEBgdHj&date=" +
        date
    )
      .then((res) => {
        console.log(res.data);
        setNasaData(res.data);
      })
      .catch((err) => console.warn(err));
  }, [date]);

  return (
    <div className="App">
      <h1>Nasa Photo Of The Day</h1>
      <StyledNasaImageCont>
        <DatePickerForm
          date={date}
          setDate={(i) => {
            setDate(i);
          }}
        />
        <div className="imageText">
          <p>
            <small>Please enter 2 digit month and day & 4 digit year</small>
          </p>
          {nasaData.media_type === "image" ? <Image data={nasaData} /> : null}
          <h2>
            <em>{nasaData.title}</em>
          </h2>
          <p>{nasaData.explanation}</p>
        </div>
      </StyledNasaImageCont>
    </div>
  );
}

export default App;
