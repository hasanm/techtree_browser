(function () {
    var item = qt.jQuery("#save-bt", qt.jQuery("iframe").get(0).contentWindow.document)[0];
    var anchor = item.getElementsByTagName('a')[0];
    anchor.click();
})();
