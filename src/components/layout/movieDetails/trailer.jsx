import "./trailer.scss";

function Trailer({ video }) {
  return (
    <>
      <h3 className="videoTitle">{video.type}</h3>
      <iframe
        src={`https://www.youtube.com/embed/${video.key}`}
        title={video.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}

export default Trailer;
