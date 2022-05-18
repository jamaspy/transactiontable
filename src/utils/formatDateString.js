export const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    time: "short",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
