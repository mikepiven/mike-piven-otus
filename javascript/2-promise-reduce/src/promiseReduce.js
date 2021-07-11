export async function promiseReduce( asyncFunctions, reduce, initialValue ) {
  let result = initialValue
  for ( const fn of asyncFunctions ) {
    try {
      const value = await fn()
      result = reduce( result, value )
    } catch (error) { }
  }
  return Promise.resolve( result )
}
