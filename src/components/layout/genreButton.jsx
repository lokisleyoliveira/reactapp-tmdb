import React, { useState } from "react";

function GenreButton({ name, id, filter, setFilter }) {
  const [active, setactive] = useState(false);

  const applyFilter = () => {
    if (filter.find((filterId) => filterId === id))
      setFilter(filter.filter((filterId) => filterId !== id));
    else setFilter((filter) => [...filter, id]);
  };

  return (
    <>
      <button
        className={active ? "genreButtonActive" : "genreButtonInactive"}
        onClick={() => {
          setactive((prevState) => !prevState);
          applyFilter();
          setTimeout(console.log(filter), 1000);
        }}
      >
        {name}
      </button>
    </>
  );
}

export default GenreButton;
