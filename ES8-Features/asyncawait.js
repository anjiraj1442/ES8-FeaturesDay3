//asyn and await with example


function reacharge() {
     return new Promise(resolve => {
       setTimeout(() => {
         resolve('enter mobile number');
       }, 2000);
     });
   }
   
   function number() {
     return new Promise(resolve => {
       setTimeout(() => {
         resolve('select the plan');
       }, 3000);
     });
   }
   
   function plan() {
     return new Promise(resolve => {
       setTimeout(() => {
         resolve('recharge succesfull');
       }, 2000);
     });
   }
   
   async function test() {
     const re = await reacharge();
     const nu = await number();
     const pl = await plan();
   
     console.log(`${ re } ${ nu } ${ pl }`);
   }
   
   test();