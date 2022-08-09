(function () {
    var item = qt.jQuery("#inp\\:submitJprmCode", qt.jQuery("iframe").get(0).contentWindow.document)[0];
    item.click();
    
    for (i =0 ; i < 10; i++) {
        console.log(i);
    }
         
})();
