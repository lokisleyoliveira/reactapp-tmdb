import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionFilter } from "../../features/filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function GenreButton({ name, id }) {
  const dispatch = useDispatch();
  const [active, setactive] = useState(false);

  return (
    <>
      <button
        className={active ? "genreButtonActive" : "genreButtonInactive"}
        onClick={() => {
          setactive((prevState) => !prevState);
          dispatch(actionFilter({ id }));
        }}
      >
        {name}
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={active ? "iconXActive" : "iconXInactive"}
        />
      </button>
    </>
  );
}

export default GenreButton;
