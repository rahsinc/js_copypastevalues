/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

/*Copies the shipping information text field values into the billing information text fields upon checkbox select*/
function billingFunction(){
  if (document.getElementById('same').checked){
    document.getElementById('billingName').value = shippingName.value;
    document.getElementById('billingZip').value = shippingZip.value;
  }
  /*nulls the billing information values upon checkbox select*/
  else{
    document.getElementById('billingName').value = null;
    document.getElementById('billingZip').value = null;
  }
}
