export const asyncFunctions = [
  () => {
    console.log('fn1')
    return Promise.resolve(1)
  },
  () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
  }),
]
export const reduce = (memo, value) => {
  console.log('reduce')
  return memo * value
}

export const initialValue = 1