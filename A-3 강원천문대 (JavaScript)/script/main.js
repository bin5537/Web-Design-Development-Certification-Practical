// Popup
const popup = document.querySelector("#popup");
const closeBtn = document.querySelector("#close");
const noticeNum1 = document.querySelector("#notice>ul>li").children[0];

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

noticeNum1.addEventListener("click", () => {
    popup.style.display = "block";
});

// DropDown
const gnb = document.querySelectorAll("li.main");

gnb.forEach(item => {
    item.addEventListener("mouseenter", () => {
        const subMenu = item.querySelector("ul.sub");
        subMenu.style.height = "120px";
    });

    item.addEventListener("mouseleave", () => {
        const subMenu = item.querySelector("ul.sub");
        subMenu.style.height = "0px";
    });
});

// Slide
let slideNum = 2;
const frameLinks = document.querySelectorAll(".frame>a");

frameLinks.forEach((link, index) => {
    if (index > 0) link.style.opacity = "0";
});

setInterval(() => {
    const currentSlide = frameLinks[slideNum - 2];
    const nextSlide = frameLinks[slideNum - 1];

    currentSlide.style.opacity = "0";
    nextSlide.style.opacity = "1";
    slideNum = slideNum === 3 ? 2 : slideNum + 1;

    if (slideNum === 2) {
        frameLinks[2].style.opacity = "0";
        frameLinks[0].style.opacity = "1";
    }
}, 2000);

// NGboard
const contentDivs = document.querySelectorAll(".content>div");
const tabMenu = document.querySelectorAll(".tab>li");
const tags = document.querySelectorAll(".tab>li>a");

tags[0].parentNode.classList.add("on");
contentDivs[0].style.display = "flex";

tags.forEach((tag, index) => {
    tag.addEventListener("click", () => {
        tabMenu.forEach(tab => tab.classList.remove("on"));
        tag.parentNode.classList.add("on");

        contentDivs.forEach((div, divIndex) => {
            div.style.display = divIndex === index ? "flex" : "none";
        });
    });
});
