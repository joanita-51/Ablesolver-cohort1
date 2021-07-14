const {evaluation, person, fetchData} = require('./matchers.js')

//using tobe on Person
test('person.firstname toBe Joanita',()=>{
    expect(person.firstname).toBe('Joanita')
})
/* toBe matcher is better for single values but toEqual and toStringEqual are good
for objects since they recursively run through the object keys
//This test willl fail
test('Object values',()=>{
    expect(person).toBe({'firstname':'Joanita',
'lastname':'Nakityo'})
})*/
test('Object values',()=>{
    expect(person).toStrictEqual({'firstname':'Joanita',
'lastname':'Nakityo'})
})
//In JavaScript everything thatvthe if statement will evaluate as false ia considered falsy. so 0, null, undefined, false,[]
test('Test null',()=>{
    expect(null).toBeNull()
})

test('Null toBeFalsy',()=>{
    expect (null).toBeFalsy()
})

test('Empty array is considered false',()=>{
    expect([]).toBeTruthy()
})

//Asynchronous
/*Do not do this
test('Data is sliced bread',()=>{
    function callback(data){
        expect(data).toBe('sliced bread')
    }
    fetchData
})*/

//async/await

/*test('the data is sliced bread',()=>{
    function callback(data){
        try{
            expect(data).toBe('sliced Bread');
            done();
        }catch (error){
            done(error);
        }
    }
    fetchData(callback)
})
test('The data is sliced bread',()=>{
    return fetchData().then(data =>{
        expect(data).toBe('sliced bread')
    })

});*/
test('the data is sliced bread',async ()=>{
    let data = await fetchData()
    expect(data).toBe('sliced bread');
})