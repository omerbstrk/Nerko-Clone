const header = document.getElementById('header');

window.onscroll = function () {
    if (window.scrollY > 70) {
        header.classList.add('scroll');
    }
    else {
        header.classList.remove('scroll');
    }
}

const nextBtn = document.getElementById('prevBtn');
const prevBtn = document.getElementById('nextBtn');
const slideround = document.querySelector('#sliderround');
const slidecontainer = document.getElementById('slider');

window.onload = () => {
    let slide = 1;
    nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        slide = slide + 1;
        slider();
        link();
    })

    prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        slide = slide - 1;
        slider();
        link();
    })

    function slider() {

        if (slide == 1) {
            slidecontainer.style.left = "38%"
            slideround.style.width = "18%";
        }

        if (slide == 2) {
            slidecontainer.style.left = "13%"
            slideround.style.width = "37%";
        }

        if (slide == 3) {
            slidecontainer.style.left = "-13%"
            slideround.style.width = "50%";
        }

        if (slide == 4) {
            slidecontainer.style.left = "-38%"
            slideround.style.width = "65%";
        }

        if (slide == 5) {
            slidecontainer.style.left = "-64%"
            slideround.style.width = "80%";
        }
        if (slide == 6) {
            slidecontainer.style.left = "-89%"
            slideround.style.width = "100%";
        }
    }

    function link() {
        if (slide > 5) {
            nextBtn.style.pointerEvents = "none";
            nextBtn.style.backgroundColor = "#3d3c3e";
        }
        else {
            nextBtn.style.pointerEvents = "auto";
            nextBtn.style.backgroundColor = "#7B7583";
        }
        if (slide < 2) {
            prevBtn.style.pointerEvents = "none";
            prevBtn.style.backgroundColor = "#3d3c3e";
        }
        else {
            prevBtn.style.pointerEvents = "auto";
            prevBtn.style.backgroundColor = "#7B7583";
        }
    }
}



document.querySelectorAll(".faq .faqlink").forEach((question) => {
    question.addEventListener("click", function () {
        const faqItem = this.closest(".faq");
        const icon = this.querySelector("i");

        document.querySelectorAll(".faq").forEach((item) => {
            if (item !== faqItem) {
                item.classList.remove("open");
                const otherIcon = item.querySelector("i");
                if (otherIcon) {
                    otherIcon.classList.remove('open');
                }
            }
        });

        faqItem.classList.toggle("open");

        if (faqItem.classList.contains("open")) {
            icon.classList.add('open');
        } else {
            icon.classList.remove('open');
        }
    });
});