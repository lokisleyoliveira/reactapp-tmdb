function formatDate(date) {
  const month = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];

  const newDate = new Date(date);

  return `${newDate.getDay()} ${
    month[newDate.getMonth()]
  } ${newDate.getFullYear()}`;
}

export { formatDate };
