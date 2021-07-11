import { promiseReduce  } from './promiseReduce'

import { asyncFunctions, reduce, initialValue } from './data'

const log = jest.spyOn(global.console, 'log');

describe("promiseReduce", () => {
  it("Initial requirements", async () => {
    await expect(promiseReduce(asyncFunctions, reduce, initialValue)).resolves.toBe(2)
    for (const key of ['fn1', 'reduce', 'fn2', 'reduce']) {
      expect(log).toHaveBeenCalledWith( key )
    }
  });
  it("Has rejected promise", async () => {
    const asyncFunctionsWithReject = asyncFunctions.concat([
      () => {
        console.log('fn-R')
        return Promise.reject(1)
      },
      () => {
        console.log('fn3')
        return Promise.resolve(10)
      },

    ])
    await expect(promiseReduce(asyncFunctionsWithReject, reduce, initialValue)).resolves.toBe(20)
    for (const key of ['fn1', 'reduce', 'fn2', 'reduce', 'fn3', 'reduce']) {
      expect(log).toHaveBeenCalledWith( key )
    }
  });
});
