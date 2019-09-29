export const required = (value) =>
  value ? undefined : 'Oops! Looks like you forgot the name!';
export const emptyLine = (value) =>
  !/^\s*$/.test(value) ? undefined : 'Name cannot be empty!';
