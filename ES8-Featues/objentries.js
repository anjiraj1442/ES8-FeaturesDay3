//Object.entries() method that accepts an object and returns own enumerable string-keyed property [key, value] pairs of the object.
const phone = {
     samsung: 1000,
     vivo: 2000,
     
 };
 
 const user = Object.entries(phone);
 
 console.log(user);