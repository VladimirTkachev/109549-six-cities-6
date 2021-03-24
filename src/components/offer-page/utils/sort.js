
export const sorterItems = (items) => {
  return items.sort((a, b) => {
    const dateA = a.date;
    const dateB = b.date;

    return new Date(dateB) - new Date(dateA);
  });
};
