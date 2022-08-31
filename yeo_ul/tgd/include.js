
//요소 삽입
function ins(selector) {
    let template = document.querySelector(selector);
    let newContent = document.importNode(template, true);

    return newContent;
}

function sel(selector) {
    let target = document.querySelector(selector);

    return target;
}

//Powered by https://kyung-a.tistory.com/18
window.addEventListener("load", function () {
    var allElements = document.getElementsByTagName("*");
    Array.prototype.forEach.call(allElements, function (el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;

                    //내부 : prepend[앞] append[뒤]
                    //외부 : before[앞] after[뒤]

                    //디스코드 버튼
                    sel("footer").after(ins("#kakao-btn"));

                    //상단 공지바
                    sel("header").before(ins("#noti-top"));

                    //유용한 링크
                    sel("#content-area").prepend(ins("#useful-link"));

                }
            };
            xhttp.open("GET", includePath, true);
            xhttp.send();
        }
    });
});
