import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../layout.scss";

function UserVotes(props) {
  const votes = props.voteAverage;
  return (
    <div className="progressBar">
      <div className="progressBox">
        <CircularProgressbar
          value={votes}
          maxValue={10}
          text={`${votes * 10}%`}
          background={true}
          strokeWidth={12}
          styles={buildStyles({
            textColor: "#14ff00",
            pathTransitionDuration: 0.5,
            pathColor: "#14ff00",
            trailColor: "rgba(0,0,0,0)",
            backgroundColor: "rgba(255,255,255, 0.1)",
          })}
        />
      </div>
      <span className="progressText"> Avaliação dos usuários</span>
    </div>
  );
}

export default UserVotes;
