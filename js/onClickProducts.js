// click events

var total = 0;
function onClickProducts(productName,productId) {
    const getValueFromProduct = getValue(productId);
console.log(getValueFromProduct);
    total = total + getValueFromProduct;
    const total2digits=total.toFixed(2)

    setValue('totalPrice', total2digits);

    setValue('FinalTotal', total2digits);
    addNewItems(productName,getValueFromProduct);
    


    return total;
}

//@@@@@@@@@@@@@@ apply button click///////////////////
function applyBones(inputId) {
    const textValue = document.getElementById(inputId).value;

    // discount price set
    const beforeDiscountTotal = document.getElementById('totalPrice').innerText;
    const afterDiscountPrice = discountPrice(beforeDiscountTotal, 20);
    // setValue('FinalTotal', afterDiscountPrice);
   
    const couponCode='SALE200';
    let textUpperValue= textValue.toString();
    let couponUpperCode=couponCode.toUpperCase();
  

    if (textUpperValue === couponUpperCode) {
        const discountPrice=afterDiscountPrice.toFixed(2)
        setValue('FinalTotal', discountPrice);
      
        // console.log('success', textValue)

    }
    else {

        setValue('totalPrice', beforeDiscountTotal);
    }
   


}
// purchase button click.....*
function purchaseDone(){
    location.href('')
}





