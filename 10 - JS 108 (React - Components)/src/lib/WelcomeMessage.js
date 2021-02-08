function welcomeMessage() {
  let hours = new Date().getHours().toFixed(1);
  if (hours > 5 && hours < 9) {
    return `Guten Morgen!`;
  } else if (hours < 12) {
    return `Guten Vormittag!`;
  } else if (hours < 13) {
    return `Guten Mittag!`;
  } else if (hours < 18) {
    return `Guten Nachmittag!`;
  } else if (hours < 21) {
    return `Guten Abend!`;
  }
  return `Gute Nacht!`;
}
export default welcomeMessage;
