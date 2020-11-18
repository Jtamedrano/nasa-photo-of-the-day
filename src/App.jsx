import Axios from "axios";
import React, { useEffect, useState } from "react";
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
`;

function App() {
  const [nasaData, setNasaData] = useState([]);
  const [date, setDate] = useState(Date());

  useEffect(() => {
    Axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=XVgsy6reEThF99jzG5kuJgVhRUo6Al3ktPEBgdHj"
    )
      .then((res) => {
        setNasaData(res.data);
      })
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="App">
      <h1>Nasa Photo Of The Day</h1>
      <StyledNasaImageCont>
        <DatePickerForm
          date={date}
          setDate={(i) => {
            let newDate = new Date(i);
            console.log(newDate, newDate.getMonth());
            setDate(newDate);
          }}
        />
        <Image data={nasaData} />
        <p>
          <em>{nasaData.title}</em>
        </p>
      </StyledNasaImageCont>
    </div>
  );
}

export default App;
