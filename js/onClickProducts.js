// click events

var total = 0;
function onClickProducts(productId) {
    const getValueFromProduct = getValue(productId);

    total = total + getValueFromProduct;

    setValue('totalPrice', total);

    setValue('FinalTotal', total);


    return total;
}

// apply button click
function applyBones(inputId) {
    const textValue = document.getElementById(inputId).value;

    // discount price set
    const beforeDiscountTotal = document.getElementById('totalPrice').innerText;
    const afterDiscountPrice = discountPrice(beforeDiscountTotal, 20);
    setValue('FinalTotal', afterDiscountPrice);

    if (textValue === 'sale200') {

        setValue('FinalTotal', afterDiscountPrice);
        // console.log('success', textValue)

    }
    else {

        setValue('totalPrice', total);
    }


}




