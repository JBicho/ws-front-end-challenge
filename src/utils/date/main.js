// Converts a given ISO date string to dd/mm/yyyy format
function convertISODate(date) {
  if (!date) return;

  return date.substring(0, 10);
}

export { convertISODate };
