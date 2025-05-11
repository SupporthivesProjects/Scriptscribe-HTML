console.log(window.location.href)
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('.header').addClass('color-header');
    }
    else {
        $('.header').removeClass('color-header');
    }
});
// change src

let countimg = 0;
let toogleBtn = document.querySelector('.navbar-toggler');

toogleBtn.addEventListener('click',()=>{
    if(countimg == 0){
        document.querySelector('.navbar-toggler-icon').src ="./assest/images/x-mark.svg";
      countimg = 1;
    }
    else{
        document.querySelector('.navbar-toggler-icon').src ="./assest/images/Menu-Button.svg";
        countimg = 0;
    }
})

let countimg1 = 0;
let toogleBtn1 = document.querySelector('.shipping-cart');

toogleBtn1.addEventListener('click',()=>{
    if(countimg1 == 0){
        document.querySelector('.shipping-cart img').src ="./assest/images/green-cart-icon.svg";
      countimg1 = 1;
    }
    else{
        document.querySelector('.shipping-cart img').src ="./assest/images/shopping-cart.svg";
        countimg1 = 0;
    }
})


// sldier home page



