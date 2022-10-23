function fun() {
  alert("Message Submitted");
  document.getElementById("name").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("msg").value = "";
}

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  // var angle = 3.6 * scrolled;
  // document.getElementById("portfolio").style.transform =
  //   "rotate(" + angle + "deg)";
}
