import {describe, expect, it} from "vitest";

import makeSum from ".";

describe('makeSum Unit Test Suites', () => {
  it('should return something', () => {
    expect(makeSum(2, 3)).toBeDefined()
  })

  it('should return 5', () => {
    expect(makeSum(2, 3)).toEqual(5)
  })
})

