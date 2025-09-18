import moment from "moment";

export const formatDate = (dateString: Date) => {
  return moment(dateString).format("DD MMM YYYY");
};

export const formatTime = (dateString: Date) => {
  return moment(dateString).format("hh:mm A");
};
