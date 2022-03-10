document.getElementById("sixteenGB").addEventListener("click", function () {
//     // console.log("clicked successfully");
//     const memoryCost = document.getElementById("memory-cost");
//     // memoryCost.innerText = parseFloat(memoryCost.innerText) + 200;
//     memoryCost.innerText = 200;
//     // console.log(typeof(memoryCost));
    
//     const bestPrice = document.getElementById("best-price").innerText;
//     const memoryPrice = document.getElementById("memory-cost").innerText;
//     const storagePrice = document.getElementById("storage-cost").innerText;
//     const deliveryPrice = document.getElementById("delivery-cost").innerText;

//     const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
//     // console.log(totalPrice);

//     const total = document.getElementById("total-price");
//     total.innerText = totalPrice;
       
updatePrice("memory-cost", 400);
})

// document.getElementById("eightGB").addEventListener("click", function () {
//     updatePrice("memory-cost", 0)
// })

// document.getElementById("ssd3"),addEventListener("click", function() {
//     updatePrice("storage-cost", 699);
// })

// document.getElementById("paid-delivery").addEventListener("click", function() {
//     updatePrice("delivery-cost", 20);
// })

function onClick(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener("click", function() {
        updatePrice(updateId, price)
    document.getElementById(clickId).style.backgroundColor = "skyblue";
    });
}

onClick("sixteenGB", "memory-cost", 400);
onClick("eightGB", "memory-cost", 0);
onClick("ssd1", "storage-cost", 0);
onClick("ssd2", "storage-cost", 200);
onClick("ssd3", "storage-cost", 400);
onClick("paid-delivery", "delivery-cost", 20);
onClick("free-delivery", "delivery-cost", 20);

function updatePrice(itemId, price) {
        // console.log("clicked successfully");
        const memoryCost = document.getElementById(itemId);
        // memoryCost.innerText = parseFloat(memoryCost.innerText) + 200;
        memoryCost.innerText = price;
        // console.log(typeof(memoryCost));
        
        const bestPrice = document.getElementById("best-price").innerText;
        const memoryPrice = document.getElementById("memory-cost").innerText;
        const storagePrice = document.getElementById("storage-cost").innerText;
        const deliveryPrice = document.getElementById("delivery-cost").innerText;
    
        const totalPrice = parseFloat(bestPrice) +
                           parseFloat(memoryPrice) + 
                           parseFloat(storagePrice) + 
                           parseFloat(deliveryPrice);
        // console.log(totalPrice);
    
        const total = document.getElementById("total-price");
        total.innerText = totalPrice;
}
const fakeCode = "arnobtarafder"

    document.getElementById("apply-button").addEventListener("click", function() {
        const code = document.getElementById("promo-input").value;
    
        const successMessage = document.getElementById("applied-text");
        const failError = document.getElementById("cannot-applied-text");
        // console.log("code clicked lol:)");
        if(code == fakeCode) {
            successMessage.style.display = "block";
            failError.style.display = "none";
                                            
            console.log("matched bro..congratulations!!YAY");
            // console.log("correct");
            const total = document.getElementById("total-price")
            let totalPrice = parseFloat(total.innerText);
    
            document.getElementById("apply-button").style.backgroundColor = "blue";
            document.getElementById("applied-text").style.display = "block"
    
            let discount = (totalPrice * 20)/100;
            totalPrice = totalPrice - discount;
            // return totalPrice;
            total.innerText = totalPrice;
        }else{
            // alert("Please! enter correct coupon code if you have any")
            successMessage.style.display ="none"
            failError.style.display = "block";
            console.log("opps!sorry:)");
        }
    
    }) 










// var n = 0;
/* function verifyCoupon() {
 
     console.log(n + 1);
    console.log("going to verify your secrets lol!")
    const pin = "pHero";
    const typedNumbers = document.getElementById("promo-input").value;

    const successMessage = document.getElementById("applied-text");
    const failError = document.getElementById("cannot-applied-text");

    if(pin == typedNumbers) {
        successMessage.style.display = "block";
        failError.style.display = "none";
        successMessage.appendChild("append")
        window.location.href = "shopping-cart-solution";
        console.log("matched bro..congratulations!!YAY");
    }
    else {
        successMessage.style.display ="none"
        failError.style.display = "block";
        console.log("opps!sorry:)");
    }
} */


// 1 == "1" // true(without type)
// 1 === "1" //false(with type)





/*
document.getElementById("eightGB").addEventListener("click", function () {
    // console.log("clicked successfully");
    const memoryCost = document.getElementById("memory-cost");
    // memoryCost.innerText = parseFloat(memoryCost.innerText) + 200;
    memoryCost.innerText = 100;
    // console.log(typeof(memoryCost));
    
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const storagePrice = document.getElementById("storage-cost").innerText;
    const deliveryPrice = document.getElementById("delivery-cost").innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    // console.log(totalPrice);

    const total = document.getElementById("total-price");
    total.innerText = totalPrice;
})*/