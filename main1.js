// //     //    print all even numbers from 1-50
// const evenNumbers = () => {
//   for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//       console.log(i)

//     }
//   }
// };
// evenNumbers();

// A program to calculate the area of a triangle 
// const areaOfTriangle = (base, height) =>{ 
//   return  base * height * 0.5 ;
 
// }
//  areaOfTriangle(3, 4);

// //  A program to print the numbers from 1 to 50
// const print = () => {
//   for (let i = 1; i <= 50; i++) {
//     console.log(i)
//   }
// };
// print();

 //  A program to print the numbers in step of 5 from 15 to 50

 const print = () => {
    for (let i = 15; i <= 50; i+=5) {
   console.log(i);
  }
  console.log("\n" );
  }
  
  print();
  
  //  A program to print the numbers from 15 to 50
  // const printNumber = () => {
  //   for (let i = 15; i <= 50; i++) {
  //     console.log(i)
  //   }
  // };
  // printNumber();
  
  
  
    //  print all odds numbers from 1-50
  let sumTotal =0;
  const oddNumbers = () => {
    for (let i = 1; i < 50; i++) {
      if (i % 2 === 1) {
        
     sumTotal += i;
  
      }
    
    }
    
    console.log(`The total sum of the numbers from 15 to 50 is: ${sumTotal}`);
    console.log("\n");
  }
  
   oddNumbers();
  
  
  //  Write a program to 
  
  const multiply = ()=>{
    for(let i= 2; i<=12; i++){
    for (j=1; j<=12; j++){ 
      console.log(i * j);
    }
    
   console.log("End of loop \n" );
  }
  // console.log("End of loop ");
  
  }
  
  multiply();
  
  