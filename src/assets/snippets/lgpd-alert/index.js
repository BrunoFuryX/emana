
// Get cookie function
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);

    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// call getCokkie function and set into exists variable
var exists = getCookie('CookieAlertBase');

// check if cookie is active
if (exists != 'true') {

    jQuery("body").addClass("show-cookies-alert");

    jQuery(".cookies-alert, .cookies-alert__close").on("click", function (e) {
        if (e.target === e.currentTarget) {
            jQuery("body").removeClass("show-cookies-alert");
            window.sessionStorage.setItem("cookies-alert", 1);
        }
    });

    document.cookie = "CookieAlertBase=true";
};