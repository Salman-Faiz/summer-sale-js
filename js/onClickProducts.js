// click events

var total = 0;
function onClickProducts(productId) {
    const getValueFromProduct = getValue(productId);

    total = total + getValueFromProduct;
    const total2digits=total.toFixed(2)

    setValue('totalPrice', total2digits);

    setValue('FinalTotal', total2digits);


    return total;
}

// apply button click
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




