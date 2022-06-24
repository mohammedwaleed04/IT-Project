// rating

const ACWD_like = document.querySelector(".fa-thumbs-up");
const ACWD_dislike = document.querySelector(".fa-thumbs-down");

ACWD_like.addEventListener("click", () => {
    ACWD_like.classList.toggle("liked");
    ACWD_dislike.classList.remove("disliked");
});

ACWD_dislike.addEventListener("click", () => {
    ACWD_dislike.classList.toggle("disliked");
    ACWD_like.classList.remove("liked");
});

// images

const AC_modal = document.getElementById("modal_div");
const AC_images = document.querySelectorAll(".gp_images");
const AC_modalImage = document.getElementById("modal_img");
const AC_close = document.querySelector(".fa-xmark");

const AC_open = (AC_image) => {
    AC_image.addEventListener("click", () => {
        AC_modal.style.display = "block";
        AC_modalImage.src = AC_image.src;
    });
};

AC_images.forEach(AC_open);

AC_close.addEventListener("click", () => {
    AC_modal.style.display = "none";
});

// Screenshots & Videos

const WD_img = document.getElementById("img");
const WD_vid = document.getElementById("vid");
const WD_screenshots = document.getElementById("screenshots_container");
const WD_videos = document.getElementById("videos_container");
const WD_section_3 = document.getElementById("section_3");

WD_img.addEventListener("click", () => {
    WD_img.style.color = "#33c8f3";
    WD_vid.style.color = "#ffffff";
    WD_videos.style.display = "none";
    WD_screenshots.style = "display: block; display: flex;";
    WD_section_3.style.height = "725px";

});

WD_vid.addEventListener("click", () => {
    WD_vid.style.color = "#33c8f3";
    WD_img.style.color = "#ffffff";
    WD_screenshots.style.display = "none";
    WD_videos.style = "display: block; display: flex;";
    WD_section_3.style.height = "600px";
});

// modal images

const WD_modal = document.getElementById("modal_div");
const WD_images = document.querySelectorAll(".images");
const WD_modalImage = document.getElementById("modal_img");
const WD_close = document.querySelector(".fa-xmark");

const WD_open = (image) => {
    image.addEventListener("click", () => {
        WD_modal.style.display = "block";
        WD_modalImage.src = image.src;
    });
};

WD_images.forEach(WD_open);

WD_close.addEventListener("click", () => {
    WD_modal.style.display = "none";
});

// review section

const WD_rev_box = document.getElementById("comment");
const WD_fullname = document.querySelector("#comment h3");
const WD_headline = document.querySelector("#comment h4");
const WD_review = document.querySelector("#comment p");
const WD_submit = document.getElementById("submit");

WD_submit.addEventListener("click", () => {
    const WD_name_value = document.getElementById("fname").value + " " + document.getElementById("lname").value + " :";
    const WD_headline_value = document.getElementById("title").value;
    const WD_review_value = document.getElementById("rev").value;
    if(WD_name_value != "  :" && WD_headline_value != "" && WD_review_value != "") {
        WD_rev_box.style.display = "block";
        WD_fullname.innerHTML = WD_name_value;
        WD_headline.innerHTML = WD_headline_value;
        WD_review.innerHTML = WD_review_value;
    }
    else {
        alert("All fields are required!");
    }
});