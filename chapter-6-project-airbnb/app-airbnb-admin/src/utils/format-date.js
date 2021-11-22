const format = require("date-format");
export const formatDate = (time) => {
  return format("dd.MM.yyyy", new Date(time));
};
