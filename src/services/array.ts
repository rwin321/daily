export const findLastArrIndex = (
  arr: any[],
  prop: string,
  condition: any
): number => {
  const ids: number[] = []
  arr.forEach((el, id) => {
    if (el[prop] === condition) {
      ids.push(id)
    }
  })

  return ids.length ? ids[ids.length - 1] : -1
}
