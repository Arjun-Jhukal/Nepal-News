// popup
setInterval(closePopup, 5000);
function closePopup() {
  var popupWrapper = document.querySelector(".popup-wrapper");
  popupWrapper.style.visibility = "hidden";
  popupWrapper.style.opacity = "0";
}

// Dobile-menu

function showMenu() {
  var mobileMenu = document.querySelector(".mobile-menu-wrapper");
  mobileMenu.classList.add("smenu");
}
function hideMenu() {
  var mobileMenu = document.querySelector(".mobile-menu-wrapper");
  mobileMenu.classList.remove("smenu");
}

// Date and time
const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", " Nov", "Dec"];
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const currentDate = new Date();
const day = weekDays[currentDate.getDay()];
const currentmonth = monthName[currentDate.getMonth()];
const monthDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();
const dateToday = day + ", " + currentmonth + " " + monthDay + "," + currentYear;
document.getElementById("dateToday").innerHTML = dateToday;

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("timeToday").innerHTML = d.toLocaleTimeString();
}

// search
function showSearch() {
  var searchBody = document.querySelector(".search-wrapper");
  var mainForm = document.querySelector(".search-form");
  searchBody.classList.add("display-form-body");
  mainForm.style.top = "10%";
}
function closeSearch() {
  var searchBody = document.querySelector(".search-wrapper");
  var mainForm = document.querySelector(".search-form");
  searchBody.classList.remove("display-form-body");
  mainForm.style.top = "-25%";
}

// Back to top + sticky mobile menu and search button

let myButton = document.getElementById("myBtn");
var stickyLines = document.getElementById("sticky-lines");
var stickySearch = document.getElementById("sticky-search");

window.onscroll = function () {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    myButton.style.display = "block";
    stickyLines.style.display = "block";
    stickySearch.style.display = "block";
  } else {
    myButton.style.display = "none";
    stickyLines.style.display = "none";
    stickySearch.style.display = "none";
  }
};
function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// footer menu / Quick Links
var menuItems = document.getElementById("main-menu").innerHTML;
var quickMenu = document.getElementById("quick-menu");
quickMenu.innerHTML = menuItems;
quickMenu.style.color = "#fff";
quickMenu.style.listStyle = "none";
quickMenu.style.lineHeight = "2";

// slider
$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// pagination
let thisPage = 1;
let limit = 12;
let list = document.querySelectorAll(".list .item");

function loadItem() {
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage - 1;
  list.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  listPage();
}
loadItem();
function listPage() {
  let count = Math.ceil(list.length / limit);
  document.querySelector(".pagination").innerHTML = "";

  if (thisPage != 1) {
    let prev = document.createElement("li");
    prev.innerText = "PREV";
    prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
    document.querySelector(".pagination").appendChild(prev);
  }

  for (i = 1; i <= count; i++) {
    let newPage = document.createElement("li");
    newPage.innerText = i;
    if (i == thisPage) {
      newPage.classList.add("active");
    }
    newPage.setAttribute("onclick", "changePage(" + i + ")");
    document.querySelector(".pagination").appendChild(newPage);
  }

  if (thisPage != count) {
    let next = document.createElement("li");
    next.innerText = "NEXT";
    next.setAttribute("onclick", "changePage(" + (thisPage + 1) + ")");
    document.querySelector(".pagination").appendChild(next);
  }
}
function changePage(i) {
  thisPage = i;
  loadItem();
}
