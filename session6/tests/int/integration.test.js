let {firstName, fullName} = require('../../integration')

describe ("They must be functions",()=>{
    test('firstName and fullName to be functions',()=>{
        expect( typeof firstName).toBe('function');
        expect( typeof fullName).toBe('function');
    })
})

describe ("Not to be undefined",()=>{
    test('firstName and fullName not toBeUndefined',()=>{
        expect( firstName()).not.toBeUndefined();
        expect( fullName()).not.toBeUndefined();
    })
    test('Data type firstName and fullName toBe string',()=>{
        let fname = firstName()
        let full_name = fullName()
        expect( typeof fname).toBe('string');
        expect( typeof full_name).toBe('string');
    })
})

describe("Integration to test", ()=>{

    test("Full Name to Be at least two names", ()=>{
        let fname = firstName('Joanita')
        //fname = ""

        let full_name = fullName(fname,'Nakityo');
        //'Joanita Nakityo'

        let nameChunks = full_name.split(" ")
        //nameChunks[0]= "Joanita"
        //nameChunks[1]="Nakityo"

        expect(nameChunks.length).toBeGreaterThan(1);
        expect(nameChunks[1]).not.toBe("")
        expect(nameChunks[0]).not.toBe("")
    })
})

