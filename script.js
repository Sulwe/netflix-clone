const initSlider = () => {
    const slideBtns = document.querySelectorAll(".slide-button");
    const imageList = document.querySelector(".slider-wrapper .image-list");

    const scrollLeftLimit = imageList.scrollWidth - imageList.clientWidth;

    slideBtns.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const slideAmt = imageList.clientWidth * direction;
            imageList.scrollBy({left: slideAmt, behavior: "smooth"});
        })
    })

    const hideSlideButtons = () => {
        slideBtns[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideBtns[1].style.display = imageList.scrollLeft >= scrollLeftLimit ? "none" : "block";
    }

    imageList.addEventListener("scroll", () => {
        hideSlideButtons();
    })
}

window.addEventListener('load', initSlider);