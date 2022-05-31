// Problem: 1
function anaToVori (ana){
  if (typeof ana == "string"){
    return 'We are only Exchange ana to vori';
  }
  let vori = ana / 16;
  return vori;
}
var myAna = anaToVori (32)
console.log(myAna)



// Problem: 2
 function pandaCost (shingaraQuantity, somucaQantity, jilapiQuantity){
   if (typeof shingaraQuantity == 'string'){
     return 'Only Shingara Number'
   }
   if (typeof somucaQantity == 'string'){
     return 'Only Somuca Number'
   }
   if (typeof jilapiQuantity == 'string'){
     return 'Only Jilapi Number'
   }
   const perShingaraPrice = 7;
   const perSomucaPrice = 10;
   const perJilapiPrice = 15;
   const shingara = shingaraQuantity * perShingaraPrice;
   const somuca = somucaQantity * perSomucaPrice;
   const jilapi = jilapiQuantity * perJilapiPrice;
   const totalNasta = shingara + somuca + jilapi;
   return totalNasta;
 }
 const nasta = pandaCost(10,10,10);
 console.log(nasta);



// Problem: 3
function picnicBudget(totalPeople){
 if(totalPeople <= 0){
   return 'Only My Friends'
 }

 let firstPersonBudget = 5000;
 let secondPersonBudget = 4000;
 let thirdPersonBudget = 3000;

 if(100 >= totalPeople && 0<= totalPeople){
     return totalPeople * firstPersonBudget;
 }
 else if(200 >= totalPeople && 100 <= totalPeople){

     let firstBudget100People = 100 * firstPersonBudget;

     let secondPicnicBudget = (totalPeople-100) * secondPersonBudget;

     return firstBudget100People + secondPicnicBudget;

 }
 else{
    firstBudget100People = 100 * firstPersonBudget;
     let secondBudget200People = 100 * secondPersonBudget;
     let totalBudget = (totalPeople-200) * thirdPersonBudget;
     let picnicBudget = firstBudget100People + secondBudget200People + totalBudget;
     return picnicBudget ;
 }
}
console.log(picnicBudget(100));
 


// Problem: 4
function oddFriend(friends){
  if (typeof friends == 'number'){
    return 'Only Odd Friend'
  }

 for(allFriend of friends){
     if(allFriend.length %2 != 0){
         return allFriend;
     }
 }
}

let friends = ['rakibs', 'sakibs', 'nakib', 'rofik', 'jabbar', 'kalam', 'salam', 'jubair', 'hamed'];

console.log(oddFriend(friends))