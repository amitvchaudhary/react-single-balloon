function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor(colors: []) {
  if(Array.isArray(colors) && colors.length) {
    return colors[random(0, colors.length)];
  } else {
    return null
  }
}

export {
  random,
  randomColor,
}