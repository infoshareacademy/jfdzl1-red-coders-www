C = {
    // Number of days before the cookie expires, and the banner reappears
    cookieDuration : 14,

    // Name of our cookie
    cookieName: 'complianceCookie',

    // Value of cookie
    cookieValue: 'on',

    // Message banner title
    bannerTitle: "Cookies:",

    // Message banner message
    bannerMessage: "This site uses cookies to deliver its services.",

    // Message banner dismiss button
    bannerButton: "Got it!",

    // Link to your cookie policy.
    bannerLinkURL: "./about_cookie.html",

    // Link text
    bannerLinkText: "Read more",

    // Text alignment
    alertAlign: "center",

    // Link text
    buttonClass: "btn btn--white btn--rounded",

    createDiv: function () {
        var banner = $(
            '<div class="col-xs-12 col-sm-4 cookie-div alert alert-dismissible text-'+
            this.alertAlign +' fade in" ' +
            'role="alert" style="position: fixed; bottom: 0; ' +
            'margin-bottom: 0"><strong>' + this.bannerTitle + '</strong> ' +
            this.bannerMessage + ' <a href="' + this.bannerLinkURL + '">' +
            this.bannerLinkText + '</a> <button type="button" class="btn ' +
            this.buttonClass + '" onclick="C.createCookie(C.cookieName, C.cookieValue' +
            ', C.cookieDuration)" data-dismiss="alert" aria-label="Close">' +
            this.bannerButton + '</button></div>'
        )
        $("body").append(banner)
    },

    createCookie: function(name, value, days) {
        // console.log("Create cookie")
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000))
            expires = "; expires=" + date.toGMTString()
        }
        document.cookie = name + "=" + value + expires + "; path=/";

    },

    checkCookie: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i]
            while (c.charAt(0)==' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length)
        }
        return null
    },

    init: function() {
        if (this.checkCookie(this.cookieName) != this.cookieValue)
            this.createDiv()
    }
};

$(document).ready(function() {
    C.init()
});
