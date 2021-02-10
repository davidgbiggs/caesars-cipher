const form = document.querySelector("#cc-form");
const input = document.querySelector("#cc-input");
const ccResult = document.querySelector("#cc-result");

form.addEventListener("submit", checkStr, false);
input.addEventListener("focus", setFocusDirections, false);
// input.addEventListener("blur", setBlurDirections, false);

// function executed for its side effects
function checkStr(event) {
  const inputStr = event.srcElement[0].value;
  ccResult.textContent = "Checking...";
  const res = rot13(inputStr);

  setTimeout(() => {
    if (!res) {
      ccResult.textContent = "You should probably type something.";
    } else {
      ccResult.textContent = res;
    }
  }, 200);

  // pure function, returns converted version of a string.
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
}

function setFocusDirections() {
  ccResult.textContent = "Press enter to evaluate.";
}

function setBlurDirections() {
  ccResult.textContent = "Press tab or select the input.";
}
