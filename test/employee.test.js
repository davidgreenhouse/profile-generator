const Employee = require('../lib/employee')

describe('Employee', () => {
    const employee = new Employee('David', 1, 'dgreenhouse96@gmail.com', 'Engineer')
    describe('getName', () => {
        it('It should return David', () => {
            expect(employee.getName()).toEqual('David')
        })
    })
    describe('getId', () => {
        it('It should return 1', () => {
            expect(employee.getId()).toEqual(1)
        })
    })
    describe('getEmail', () => {
        it('It should return dgreenhouse96@gmail.com', () => {
            expect(employee.getEmail()).toEqual('dgreenhouse96@gmail.com')
        })
    })
    describe('getRole', () => {
        it('It should return Engineer', () => {
            expect(employee.getRole()).toEqual('Engineer')
        })
    })
})