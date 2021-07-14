const HANDLE_NAME = require('../../handleName')
/**
 * Grouping tests
 * For example you might have unit upon which you must test for type, 
 * value and more
 */

describe('Name handling',()=>{
   
    test ('Not Undefined', () =>{
        expect(HANDLE_NAME('Joanita')).not.toBeUndefined()
    })

    test ('Name Joanita toBe Joanita', () =>{
        expect(HANDLE_NAME('Joanita')).toBe('Joanita')
    })
    test ('Name joanita toBe Joanita', () =>{
        expect(HANDLE_NAME('joanita')).toBe('Joanita')
    })
    test ('Name joAnita toBe Joanita', () =>{
        expect(HANDLE_NAME('joAnita')).toBe('Joanita')
    })
    test ('Name Joanita Nakityo toBeFalsy', () =>{
        expect(HANDLE_NAME('Joanita Nakityo')).toBeFalsy()
    })
})