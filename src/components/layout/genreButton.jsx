import React, { useState } from "react";

function GenreButton({ name, id, filter, setFilter }) {
  const [active, setactive] = useState(false);

  const applyFilter = () => {
    const finalFilter = [];
    let addId = true;
    for (const filterId of filter) {
      if (filterId === id) {
        addId = false;
      } else {
        finalFilter.push(filterId);
      }
    }
    if (addId) finalFilter.push(id);
    setFilter(finalFilter);
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
