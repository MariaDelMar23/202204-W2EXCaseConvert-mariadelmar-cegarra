const snakeCase = (lowerCamelCaseText) => {
  if (lowerCamelCaseText === lowerCamelCaseText[0].toUpperCase()) {
    return "Yhe text starts with a capital letter";
  }

  if (lowerCamelCaseText.includes("-")) {
    return "The text contains dashes";
  }

  if (lowerCamelCaseText.includes("_")) {
    return "The text contains underscores";
  }
  debugger;
  if (lowerCamelCaseText === "") {
    return "You must provide some text";
  }

  const letters = lowerCamelCaseText.split("");
  debugger;
  const snakeCaseText = letters.reduce(
    (accumulator, letter) =>
      accumulator + (letter.toUpperCase() === letter ? `_${letter}` : letter),
    ""
  );
  return snakeCaseText;
};

snakeCase("holaQueAse");
