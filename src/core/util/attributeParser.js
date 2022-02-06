import moment from "moment";

function formatDate(date) {
  return moment(date).format("DD MMM YYYY");
}



}

export { formatDate };
