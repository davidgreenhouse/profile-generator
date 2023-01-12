const Intern = require('./../lib/intern');

describe('Intern', () => {
    const intern = new Intern('David', 1, 'dgreenhouse96@gmail.com', 'Engineer','FSU')
    describe('getSchool', () => {
        it('It should return School: FSU', () => {
            expect(intern.getSchool()).toEqual('School: FSU')
        })
    })
})