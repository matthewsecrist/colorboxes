export const rgbToHex = color => {
  let [r, g, b] = color
    .substring(4, color.length - 1)
    .replace(/ /g, '')
    .split(',')
    .map(n => Number(n))

  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

const componentToHex = c => {
  let hex = c.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}
