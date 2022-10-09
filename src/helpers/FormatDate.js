export const formatDate = (date) => {
  return new Intl.DateTimeFormat("es-es", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};
