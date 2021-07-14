test('dummy test',()=>{
    let fetch = ()=>{
        return 'Oops!'
    }

    expect (fetch()).toBe('Oops!')
})