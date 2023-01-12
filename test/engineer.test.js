const Engineer = require('./../lib/engineer');

describe('Engineer', () => {
    const engineer = new Engineer('David', 1, 'dgreenhouse96@gmail.com', 'Engineer','davidgreenhouse')
    describe('getGithub', () => {
        it('It should return Github: davidgreenhouse', () => {
            expect(engineer.getGithub()).toEqual(`Github: <a href="https://github.com/davidgreenhouse" target="_blank">davidgreenhouse</a>`)
        })
    })
})