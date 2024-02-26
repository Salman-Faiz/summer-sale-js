// get elementValue function
function getValue(elementId){

    const getValueString=document.getElementById(elementId).innerText;
    const getValueNumber =parseFloat(getValueString);
    return getValueNumber;
}
// ?SET VALUE
function setValue(destinationId,FinalValue){
    const setValueString=document.getElementById(destinationId);
    setValueString.innerText=FinalValue2digit=FinalValue;

    
}
function discountPrice(totalPrice,discount) {

    const afterDiscount= (totalPrice*discount)/100;
    const FinalTotalValue=totalPrice-afterDiscount;
    return FinalTotalValue;
    
}
// DYNAMIC HTML
    function addNewItems(productName,productPrice){

        const newItem = document.getElementById('itemList');
        const p =document.createElement('p');
        // CHILDelement Coount
        const count=newItem.childElementCount;
        // p.innerHTML=productName + ' ' + productPrice;
        p.innerHTML=`${count +1} .  ${productName} ${productPrice}`
        newItem.appendChild(p);
        
    }