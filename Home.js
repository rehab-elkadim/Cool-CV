// Home.jsx
import React, { useState } from "react";
import Section from "./Section";

const Home = () => {
  return (
    <>
    <h1 id="titlesTitle">Your Cool CV!</h1>
      <Section title="General Information" />
      <Section title="Educational Experience" />
      <Section title="Practical Experience" />
    </>
  );
};

export default Home;
