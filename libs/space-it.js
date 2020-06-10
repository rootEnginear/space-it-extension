function _isThaiVowels(char) {
  const vowels = [
    "่",
    "้",
    "๊",
    "๋",
    "ิ",
    "ี",
    "ึ",
    "ื",
    "็",
    "ั",
    "ุ",
    "ู",
    "์",
    "ํ",
  ];

  if (vowels.includes(char)) {
    return true;
  }
  return false;
}

function _removeTrailingSpace(text) {
  if (text[text.length - 1] === " ") {
    return text.slice(0, -1);
  }

  return text;
}

function spacer(sentence) {
  let result = "";

  sentence.split("").forEach((char) => {
    if (char === " ") {
      return;
    }

    if (_isThaiVowels(char)) {
      result = _removeTrailingSpace(result);

      result += char + " ";
      return;
    }

    if (char === "ำ") {
      result = _removeTrailingSpace(result);

      result += "ํ า ";
      return;
    }

    result += char + " ";
  });

  result = _removeTrailingSpace(result);

  return result;
}
