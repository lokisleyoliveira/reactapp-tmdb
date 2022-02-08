import React, { useState } from "react";
import { Nav, Header, Movies } from "../components/index";
import "./home.scss";

function Home() {
  const [genres, setGenres] = useState([]);

  return (
    <>
      <Nav />
      <Header filter={genres} setFilter={setGenres} />
      <Movies filter={genres} />
    </>
  );
}

export default Home;
