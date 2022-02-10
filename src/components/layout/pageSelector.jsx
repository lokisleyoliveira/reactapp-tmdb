import "./pageSelector.scss";
import { actionPage } from "../../features/filter";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function PageSelector({ lastPage }) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.pagination.value.page);

  function navigateTo(link) {
    dispatch(actionPage({ page: link }));
  }

  function calculatePageRange(totalElements) {
    const half = Math.floor(totalElements / 2);
    if (page <= half)
      return Array.from({ length: totalElements }, (v, k) => k + 1);
    if (page >= lastPage - half)
      return Array.from(
        { length: totalElements },
        (v, k) => k + lastPage - totalElements + 1
      );
    const rangeList = [];
    let count = page - half;
    for (let index = 0; index < totalElements; index++) {
      rangeList.push(count++);
    }
    return rangeList;
  }

  return (
    <div className="selector">
      <button
        className={page === 1 ? "currentPage" : "otherPage"}
        onClick={() => navigateTo(Math.max(page - 1, 1))}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      {calculatePageRange(5).map((item) => (
        <button
          key={item}
          className={item === page ? "currentPage" : "otherPage"}
          onClick={() => navigateTo(item)}
        >
          {item}
        </button>
      ))}
      <button
        className={page === lastPage ? "currentPage" : "otherPage"}
        onClick={() => navigateTo(Math.min(page + 1, lastPage))}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <button
        className={page === lastPage ? "currentPage" : "otherPage"}
        onClick={() => navigateTo(lastPage)}
      >
        Última
      </button>
    </div>
  );
}

export default PageSelector;
