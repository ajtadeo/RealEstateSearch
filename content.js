if (checkURL(window.location.href) == true){
  var address = document.getElementsByClassName("ListingHeaderstyle__AddressStreet-sc-1h7il48-7")[0].innerHTML;
  var cityState = document.getElementsByClassName("ListingHeaderstyle__AddressCityStateZip-sc-1h7il48-8 kFPKLe")[0].innerHTML;

  if (address == undefined || cityState == undefined ){
    console.log("error!");
    throw(new Error('Address not found on this page.'));
  } else {
    var index = address.search("<br>");
    address = address.substring(0, index);
    var fullAddress = address + ' ' + cityState;
    chrome.storage.local.set({fullAddress}, function() {
      console.log('Address is set to ' + fullAddress);
    });

    var price = document.getElementsByClassName("NumberFormatWithStyle__NumberFormatStyled-sc-1yvv7lw-0")[0].innerHTML;
    chrome.storage.local.set({price}, function() {
      console.log('Address is set to ' + price);
    });
    
  }
}

function checkURL(url){
  urlSubstr = url.substring(0, 54);
  if (urlSubstr != "https://www.roofstock.com/investment-property-details/"){
    console.log('Wrong url!');
    // console.log(urlSubstr);
    return false;
  }
  return true;
}
