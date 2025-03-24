const menuIcon = document.getElementById("menuIcon");
const navMenuLinks = document.getElementById("navMenuLinks");

const handleMenuOnclick = (event) => {
    navMenuLinks.classList.toggle('isVisible');
}

menuIcon.addEventListener("click", handleMenuOnclick);

document.addEventListener("DOMContentLoaded", () => {
    const liveURL = window.location.href;
    const navMenuLinks = document.getElementById("navMenuLinks");
    const navMenuLinksItems = navMenuLinks.querySelectorAll("li");
    navMenuLinksItems.forEach((item) => {
        const itemURL = item.querySelector("a").href;
        if (liveURL === itemURL) {
            item.classList.add("active");
        }
    })

})