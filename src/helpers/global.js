/** truncate character */
export const truncate = (str, character) => {
  return str?.length > character ? str.substr(0, character - 1) + "..." : str;
};
