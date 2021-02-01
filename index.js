alert("Hello, world!");
function rot13(str) {
  const newArr = str.split("");

  return newArr
    .map((el) => {
      return isAlphabetic(el) ? shift13(el) : el;
    })
    .join("");

  function shift13(char) {
    const num = char.charCodeAt();
    const newNum = num + 13 > 90 ? num + 13 - 90 + 64 : num + 13;
    return String.fromCharCode(newNum);
  }

  function isAlphabetic(char) {
    const num = char.charCodeAt();
    return num >= 65 && num <= 90;
  }
}
