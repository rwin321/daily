export const setPause = (ms: number) =>
  new Promise((res) => {
    setTimeout(() => {
      res('')
    }, ms)
  })
