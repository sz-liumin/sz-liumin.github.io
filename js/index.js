var cnList = ["关于", "博文", "其他"];
var enList = ["About", "Blog", "Other"];
var linkList = ["", "./blogList.html", ""];

window.onload = function () {
    document.getElementsByClassName("navLogo")[0].onclick = function () {
        window.location.href = "./index.html";
    }
    var html = "";
    for (var index = 0; index < cnList.length; index++) {
        html += "<a href='" + this.linkList[index] + "'><div class='navItem' onmouseover='cnText(" + index + ")' onmouseout='enText(" + index + ")'>" + enList[index] + "</div></a>";
    }
    this.document.getElementsByClassName("navParent")[0].innerHTML = html;
}

function cnText(index) {
    document.getElementsByClassName("navItem")[index].innerText = cnList[index];
}

function enText(index) {
    document.getElementsByClassName("navItem")[index].innerText = enList[index];
}

window.onscroll = function () {
    //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //scrollTop就是触发滚轮事件时滚轮的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (this.parseInt(scrollTop) > 100) {
        // console.log("滚动距离" + scrollTop);
        $("#nav").addClass("shade")
    } else {
        // console.log(scrollTop);
        $("#nav").removeClass("shade")
    }
}
