export function random(array) {
  const random = array.slice();
  for (let i = random.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = random[i];
    random[i] = random[j];
    random[j] = temp;
  }
  return random;
}
