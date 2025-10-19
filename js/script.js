$(document).ready(function () {
  $(".sec-soft-1").slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 800,
    responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
    ],
  });
});

// Form Validation

var fname_Error = document.getElementById("fname_Error");
var lname_Error = document.getElementById("lname_Error");
var email_Error = document.getElementById("email_Error");
var phone_Error = document.getElementById("phone_Error");
var textarea_Error = document.getElementById("textarea_Error");
var message = document.getElementById("message");

// First Name

function validatefName() {
  var firstname = document.getElementById("fname").value;

  if (firstname.length == 0) {
    fname_Error.style.display = "block";
    fname_Error.innerHTML = "**First Name is required**";
    fname_Error.style.color = "rgb(255, 114, 114)";
    fname_Error.style.fontSize = "22px";
    fname_Error.style.marginBottom = "20px";
    fname_Error.style.fontWeight = "bold";
    setTimeout(function () {
      fname_Error.style.display = "none";
    }, 10000);
    return false;
  } else {
    fname_Error.style.display = "block";
    fname_Error.innerHTML = 'Success <i class="fa-solid fa-circle-check"></i>';
    fname_Error.style.color = "rgb(255, 114, 114)";
    fname_Error.style.fontSize = "22px";
    fname_Error.style.marginBottom = "20px";
    fname_Error.style.fontWeight = "bold";
    setTimeout(function () {
      fname_Error.style.display = "none";
    }, 10000);
    return true;
  }
}

// Last Name

function validatelName() {
  var lastname = document.getElementById("lname").value;

  if (lastname.length == 0) {
    lname_Error.style.display = "block";
    lname_Error.innerHTML = "**Last Name is required**";
    lname_Error.style.color = "rgb(255, 114, 114)";
    lname_Error.style.fontSize = "22px";
    lname_Error.style.marginBottom = "20px";
    lname_Error.style.fontWeight = "bold";
    setTimeout(function () {
      lname_Error.style.display = "none";
    }, 10000);
    return false;
  } else {
    lname_Error.style.display = "block";
    lname_Error.innerHTML = 'Success <i class="fa-solid fa-circle-check"></i>';
    lname_Error.style.color = "rgb(255, 114, 114)";
    lname_Error.style.fontSize = "22px";
    lname_Error.style.marginBottom = "20px";
    lname_Error.style.fontWeight = "bold";
    setTimeout(function () {
      lname_Error.style.display = "none";
    }, 10000);
    return true;
  }
}

// Email Id

function validateEmail() {
  var emailId = document.getElementById("email").value;

  if (emailId.length == 0) {
    email_Error.style.display = "block";
    email_Error.innerHTML = "**Email Id is required**";
    email_Error.style.color = "rgb(255, 114, 114)";
    email_Error.style.fontSize = "22px";
    email_Error.style.marginBottom = "20px";
    email_Error.style.fontWeight = "bold";
    setTimeout(function () {
      email_Error.style.display = "none";
    }, 10000);
    return false;
  }
  if (
    !emailId.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    email_Error.style.display = "block";
    email_Error.innerHTML = "**Invalid Email Id**";
    email_Error.style.color = "rgb(255, 114, 114)";
    email_Error.style.fontSize = "22px";
    email_Error.style.marginBottom = "20px";
    email_Error.style.fontWeight = "bold";
    setTimeout(function () {
      email_Error.style.display = "none";
    }, 10000);
    return false;
  } else {
    email_Error.style.display = "block";
    email_Error.innerHTML = 'Success <i class="fa-solid fa-circle-check"></i>';
    email_Error.style.color = "rgb(255, 114, 114)";
    email_Error.style.fontSize = "22px";
    email_Error.style.marginBottom = "20px";
    email_Error.style.fontWeight = "bold";
    setTimeout(function () {
      email_Error.style.display = "none";
    }, 10000);
    return true;
  }
}

// Phone Number

function validatePhone() {
  var phoneNo = document.getElementById("phone").value;

  if (phoneNo.length == 0) {
    phone_Error.style.display = "block";
    phone_Error.innerHTML = "**Phone No. is required**";
    phone_Error.style.color = "rgb(255, 114, 114)";
    phone_Error.style.fontSize = "22px";
    phone_Error.style.marginBottom = "20px";
    phone_Error.style.fontWeight = "bold";
    setTimeout(function () {
      phone_Error.style.display = "none";
    }, 10000);
    return false;
  }
  if (phoneNo.length != 10) {
    phone_Error.style.display = "block";
    phone_Error.innerHTML = "**Phone No. should be 10 Numbers**";
    phone_Error.style.color = "rgb(255, 114, 114)";
    phone_Error.style.fontSize = "22px";
    phone_Error.style.marginBottom = "20px";
    phone_Error.style.fontWeight = "bold";
    setTimeout(function () {
      phone_Error.style.display = "none";
    }, 10000);
    return false;
  } else {
    phone_Error.style.display = "block";
    phone_Error.innerHTML = 'Success <i class="fa-solid fa-circle-check"></i>';
    phone_Error.style.color = "rgb(255, 114, 114)";
    phone_Error.style.fontSize = "22px";
    phone_Error.style.marginBottom = "20px";
    phone_Error.style.fontWeight = "bold";
    setTimeout(function () {
      phone_Error.style.display = "none";
    }, 10000);
    return true;
  }
}

// Textarea Box

function validateText() {
  var message = document.getElementById("textarea").value;
  var required = 30;
  var left = required - message.length;

  if (message.length == 0) {
    textarea_Error.style.display = "block";
    textarea_Error.innerHTML = "**Please Enter Your Service Details**";
    textarea_Error.style.color = "rgb(255, 114, 114)";
    textarea_Error.style.fontSize = "22px";
    textarea_Error.style.marginBottom = "20px";
    textarea_Error.style.fontWeight = "bold";
    setTimeout(function () {
      textarea_Error.style.display = "none";
    }, 10000);
    return false;
  }
  if (left > 0) {
    textarea_Error.style.display = "block";
    textarea_Error.innerHTML = left + " more characters required";
    textarea_Error.style.color = "rgb(255, 114, 114)";
    textarea_Error.style.fontSize = "22px";
    textarea_Error.style.marginBottom = "20px";
    textarea_Error.style.fontWeight = "bold";
    setTimeout(function () {
      textarea_Error.style.display = "none";
    }, 10000);
    return false;
  } else {
    textarea_Error.style.display = "block";
    textarea_Error.innerHTML =
      'Success <i class="fa-solid fa-circle-check"></i>';
    textarea_Error.style.color = "rgb(255, 114, 114)";
    textarea_Error.style.fontSize = "22px";
    textarea_Error.style.marginBottom = "20px";
    textarea_Error.style.fontWeight = "bold";
    setTimeout(function () {
      textarea_Error.style.display = "none";
    }, 10000);
    return true;
  }
}

// Onclick Event

function validateForm() {
  if (
    !validatefName() ||
    !validatelName() ||
    !validateEmail() ||
    !validatePhone() ||
    !validateText()
  ) {
    message.style.display = "block";
    message.innerHTML = "**Please Fix Error to Submit**";
    message.style.color = "rgb(255, 114, 114)";
    message.style.fontSize = "22px";
    message.style.marginBottom = "20px";
    message.style.fontWeight = "bold";
    setTimeout(function () {
      message.style.display = "none";
    }, 10000);
    return false;
  } else {
    alert("Your details has been successful submitted, Thank You!");
  }
}

// Scroll Top Button

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// Circle Cursor

const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "30px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "80px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "50px");
  });
});

// Date

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let fullDate = `${day}-${month}-${year}`;
document.getElementById("date").innerHTML = fullDate;

// Color Mode Change

function modeChange() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// SlowScroll

jQuery('a[href^="#"]').on("click", function (t) {
  var e = $($(this).attr("href"));
  e.length &&
    (t.preventDefault(),
    $("html, body").animate(
      {
        scrollTop: e.offset().top,
      },
      1000
    ));
});

// Teletype JS

$(document).ready(function(){
$( function() {
  $( '.type-text' ).teletype( {
   text: [ 'Build', 'Your', 'Awesome','Platform','Here' ],
   typeDelay: 10,
   backDelay: 20
  } );
 } );

});

