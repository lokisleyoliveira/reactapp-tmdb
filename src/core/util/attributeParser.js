import moment from "moment";

function formatDate(date) {
  return moment(date).format("DD MMM YYYY");
}

function runtimeToString(time) {
  const runtime = moment.duration(time, "minutes");

  if (runtime.hours() < 1) return `${runtime.minutes()}m`;
  return `${runtime.hours()}h ${runtime.minutes()}m`;
}

function getCertificationRelease(infos) {
  let found = infos[0];
  for (const element of infos) {
    if (element.iso_3166_1 === "BR") return element;
    if (element.iso_3166_1 === "US") found = element;
  }
  return found;
}

function getCrew(infos) {
  infos.sort((a, b) => {
    if (a.popularity > b.popularity) return -1;
    if (a.popularity < b.popularity) return 1;
    return 0;
  });
  return infos.slice(0, 5);
}

export { formatDate, getCertificationRelease, runtimeToString, getCrew };
