//Destructure
const calculate =require('./calculate') //Method 1
const {sum, subtract} = require ('./calculate') //Method 2

//Test or Expect matchers
//Assertions
test ('adds 1+2 to equal 3',() =>{
    expect(sum(1,2)).toBe(3);
});

test('adds 0+0 to equal 0', ()=>{
    expect(sum(0,0)).toBe(0)
})

test ('returns false is no argument provided', () =>{
    expect(sum()).toBe(false)
})


test ('returns false if 1 argument provided', () =>{
    expect(sum(2)).toBe(false)
})

//another test # subtraction test
test ('subtracts 4-2 to equal 2',() =>{
    expect(subtract(4,2)).toBe(2);
});
test ('subtracts 4-2 to equal 2',() =>{
    expect(typeof subtract(4,2)).toBe('number');
});
test ('subtracts "4"-2 toBe falsy',() =>{
    expect(subtract("4",2)).toBeFalsy();
});
test ('subtracts "4"-"2" toBe falsy',() =>{
    expect(subtract('4','2')).toBeFalsy();
});
test ('subtracts 4-"2" toBe falsy',() =>{
    expect(subtract(4,"2")).toBeFalsy();
});
test ('subtracts 2-2 toBe falsy',() =>{
    expect(subtract(2,2)).toBeFalsy();
});
test ('subtracts 10-10 toBe 0',() =>{
    expect(subtract(10,10)).toBe(0);
});
