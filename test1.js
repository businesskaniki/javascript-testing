function stringLength(string) {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  } else {
    throw new Error("string characters should not exede 10");
  }
};

module.exports = stringLength;
