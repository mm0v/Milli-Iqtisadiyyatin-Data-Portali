var list = document.querySelector(".row");
var fifty = document.querySelector('.fifty');
var hundred = document.querySelector('.hundred');
var hundredFifty = document.querySelector('.hundredfifty');
var twohundred = document.querySelector('.twohundred');
var twohundredfifty = document.querySelector('.twohundredfifty');
var countries = function (a, b) {
    fetch("https://restcountries.com/v3.1/all")
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var li = "";
        data.slice(a, b).map(function (item, index) {
            li += "<div class=\"col-lg-4 col-md-4 col-sm-6 g-4\">\n                           <div class=\"card\">\n                                <img src=\"".concat(item.flags.png, "\" class=\"card-img-top\" alt=\"country flag\">\n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\">").concat(item.name.common, "</h5>\n                                    <p class=\"card-text\">").concat(item.name.official.substring(0, 30), " <a href=\"#\">Read More</a></p>\n                                    <a href=\"").concat(item.maps.googleMaps, "\" class=\"btn btn-primary\">Go somewhere</a>\n                                </div>\n                            </div>\n                        </div>");
        });
        list.innerHTML = li;
    });
};
fifty.onclick = function () {
    countries(0, 50);
};
hundred.onclick = function () {
    countries(50, 100);
};
hundredFifty.onclick = function () {
    countries(100, 150);
};
twohundred.onclick = function () {
    countries(150, 200);
};
twohundredfifty.onclick = function () {
    countries(200, 250);
};
