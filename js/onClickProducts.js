// click events

var total=0;
function onClickProducts(productId){
    const getValueFromProduct=getValue(productId);
  
     total=total+getValueFromProduct;
   
    setValue('totalPrice',total);
    // discount price set
    const afterDiscountPrice=discountPrice(total,20);
    setValue('FinalTotal',afterDiscountPrice);
   
}
