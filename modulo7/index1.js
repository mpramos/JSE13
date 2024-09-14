function saludar(param1) {
  for (const element of param1) {
    console.log(element);
  }
    
}
let parametros=['😂',2,3,4,5,6]
saludar(parametros)


function sumAllNums() {
    // console.log(arguments)
    let suma=0
    for (const element of arguments) {
      suma+=element
    }
    return suma
   }
   
   console.log(sumAllNums(1, 2, 3, 4));
   console.log(sumAllNums(1, 2, 3, 4,6,7,3,2));

   let sumarTodosElementos=(...args)=>{
    let sum=0        
    for (const element of args) {
             sum+=element   
            }
        return sum
   }

   console.log(sumarTodosElementos(1,2,3,4));
   console.log(sumarTodosElementos(1,2,3,4,5,4,2));
   
   
   (function(n) {
    console.log(n * n)
  })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
  
  let squaredNum = (function(n) {
    console.log(n*n);
    
    // return n * n
  })(10)


//   function square(n) {
//     return n *n
//   }
//   console.log(square(2));
  
  const square =n=> n * n  // -> 4
  console.log(square(2));

  const printFullName = (firstName, lastName='Ramirez') => {
    return `Nombre Completo es : ${firstName} ${lastName}`
  }
  
  console.log(printFullName('Yetayeh'))
  console.log(printFullName('Juan','Gutierrez'))
