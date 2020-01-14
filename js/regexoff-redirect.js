document.addEventListener("DOMContentLoaded", function() {
    var params = decodeURIComponent(document.location.search);
    if (params && params.indexOf("pattern=") !== -1) {
        window.location.assign("regexoff://" + params)
    }
});
