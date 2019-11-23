export const requiredName = (value) =>
  value ? undefined : 'Oops! Looks like you forgot the name!';
export const emptyName = (value) =>
  !/^\s*$/.test(value) ? undefined : "Name can't be empty!";
