//    start from here   ///

function inputIs (typeValue) {
    const totalInput = document.getElementById(typeValue);
    const getValue= totalInput.value;
    const convert = parseFloat (getValue);
    return convert ;
    
}


// butoon working field start from here //

document.getElementById('calculate-button').addEventListener("click", function () {

   const income = inputIs ('income-input')

   const cloth = inputIs ('clothes-cost');

   const rent = inputIs ('rent-cost');

   const food = inputIs ('food-cost');

   const others = inputIs ('others-cost');


   const totalCsot = cloth+rent+food+others;
    /// -----cost calculate ---------///

   const newBalance = income - totalCsot ;
   ///-------- Balance calculate-----///

//                                     //

   /// ----------%&&%-------------///

//            &&  error handeling &&                ///
    const expanse = document.getElementById ('expense-amount')
   const gettext = parseFloat (expanse.innerText);

   const PresentValance = document.getElementById('balance-amount');
   const innretext = parseFloat (PresentValance.innerText);
   
   
   if(isNaN(income) || isNaN(cloth) || isNaN (rent) || isNaN(food)){
    alert ("your number isn't valid") ;
}
else if(income<0 || cloth<0 || rent<0 || food<0){
    alert ("plese input an positive number");
}
else if(newBalance < 0){
    alert("Your cost is bigger then your Income");
}

else{
    
    expanse.innerText = totalCsot ;

    PresentValance.innerText = newBalance; 

 }

   ///---------&&%-expanse and income calculate end here-%&&-----------///


 })    



   ///------------ saving part start from here--------------///

 document.getElementById ('saving-button').addEventListener ("click", function () {


    const get = document.getElementById('save-amount');
    const getInText = get.innerText ;
    const convertNumber = parseFloat (getInText);


    const savingperchant = inputIs ('saving-input')
    const income = inputIs ('income-input')

 
  if ( savingperchant > 0 && income > savingperchant ){
    const perchant =( income / 100 ) * savingperchant ;
    get.innerText = perchant ;
  }

   else if ( savingperchant > income ) {
      alert ( "Your saving amount is bigger then your Income")
  }
  
  else if ( savingperchant < 0 ) {
      alert ('input a positve number')
  }

  else {
      alert ("please input a valid number whith out +,-,*,/,%")
  }

    const getshowblnc = document.getElementById("balance-amount");
    const getiamountinnertext = getshowblnc.innerText ;
    const convertshowblncamount = parseFloat (getiamountinnertext) ;


    const getsaveamount = document.getElementById("save-amount");
    const getamounttext = getsaveamount.innerText ;
    const convertsaveamount = parseFloat (getamounttext) ;

    const Nowblnce = convertshowblncamount - convertsaveamount   ;

    const getRemaining = document.getElementById("remaining-balance");
    const remainningtext = getRemaining.innerText ;
    const converremaining = parseFloat (remainningtext) ;

    if(Nowblnce < 0) {
        alert("sorry! your saving amount is greater than your balance after cost")
    }
    else{
        getRemaining.innerText = Nowblnce ;
    }



 })

