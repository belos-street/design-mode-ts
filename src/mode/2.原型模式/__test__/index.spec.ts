import { Employee } from '../index'
import { describe, expect, it } from 'vitest'

describe('idnex test', () => {
  it('test emp1', () => {
    const emp1 = new Employee('jz', 20)
    expect(emp1.say()).toBe(`my name is jz, and i am 20 years old.`)
  })
})