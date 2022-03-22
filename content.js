chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.bgMsg === "URL change detected")
        var address = document.getElementsByClassName("ListingHeaderstyle__AddressStreet-sc-1h7il48-7")[0].innerHTML;
        var cityState = document.getElementsByClassName("ListingHeaderstyle__AddressCityStateZip-sc-1h7il48-8 kFPKLe")[0].innerHTML;
        var index = address.search("<br>");
        address = address.substring(0, index);
        var fullAddress = address + ' ' + cityState;
        // console.log(fullAddress);

        var price = document.getElementsByClassName("NumberFormatWithStyle__NumberFormatStyled-sc-1yvv7lw-0")[0].innerHTML;
        // console.log(price);
        sendResponse({contentMsg: fullAddress + '\n' + price});
    }
  );
