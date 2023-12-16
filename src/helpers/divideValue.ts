export const divideValue = (value: number) => {
  return `${[...String(value)][0]},${[...String(value)][1]}`
}