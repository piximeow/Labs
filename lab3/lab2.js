function generateKey(length, characters) {
  let key = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = random(0, characters.length - 1);
    key += characters[randomIndex];
  }
  return key;
}
const characters =
  "abcdefghijklmnopqrstuvwxyz0123456789"