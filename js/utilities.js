// get elementValue function
function getValue(elementId){

    const getValueString=document.getElementById(elementId).innerText;
    const getValueNumber =parseFloat(getValueString);
    return getValueNumber;
}

function setValue(destinationId,FinalValue){
    const setValueString=document.getElementById(destinationId);
    setValueString.innerText=FinalValue2digit=FinalValue;

    
}
function discountPrice(totalPrice,discount) {

    const afterDiscount= (totalPrice*discount)/100;
    const FinalTotalValue=totalPrice-afterDiscount;
    return FinalTotalValue;
    
}