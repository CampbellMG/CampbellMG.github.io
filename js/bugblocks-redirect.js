document.addEventListener("DOMContentLoaded", function() {
    var params = decodeURIComponent(document.location.search);
    if (params && params.indexOf("level=") !== -1) {
        window.location.assign("bugblocks://level?id=" + params.split("level=")[1])
    }
});
