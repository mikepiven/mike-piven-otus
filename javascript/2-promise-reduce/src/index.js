import { promiseReduce } from './promiseReduce'
import { reduce, initialValue, asyncFunctions } from './data'

promiseReduce(asyncFunctions, reduce, initialValue).then(console.log)