function f() {
    let x = 1
   
    let y = 2
    let z=1
   

  {
    let x = 100
    let y = 200
    const z = 300
    console.log('x in block scope is', x)
   
  }
  console.log('x outside of block scope is', x)
  console.log('y outside of block scope is', y)
  console.log('z outside of block scope is', z)
  }
  
   f()

  