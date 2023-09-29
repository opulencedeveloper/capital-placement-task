export const camelCaseConverter = (key: string): string => {
  let words = [];
  let currentWord = "";
  let prevChar = "";

  for (const char of key) {
    if (char >= "A" && char <= "Z" && prevChar !== "") {
      words.push(currentWord);
      currentWord = char;
    } else {
      currentWord += char.toLowerCase();
    }
    prevChar = char;
  }

  if (currentWord !== "") {
    words.push(currentWord);
  }

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
