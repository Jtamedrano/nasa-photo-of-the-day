import React from "react";

function Image(props) {
  const { data } = props;

  if (!data) return <p>Loading...</p>;
  return (
    <>
      <img src={data.hdurl} alt={data.title} />
    </>
  );
}

export default Image;
