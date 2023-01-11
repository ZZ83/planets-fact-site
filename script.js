function openSlideMenu() {
    const toggle           = document.querySelector('.primary-navigation');
    const toggleMobile     = document.querySelector('.mobile-nav-button__menu');
    const mobileNavButton  = document.querySelector('.mobile-nav-button');
    if (toggle.classList.contains("primary-navigation--open")) {
        toggle.classList.remove("primary-navigation--open");
    } else {
        toggle.classList.add("primary-navigation--open");
    }
    if(mobileNavButton.getAttribute("aria-expanded") === "false") {
        mobileNavButton.setAttribute("aria-expanded", true);
    } else {
        mobileNavButton.setAttribute("aria-expanded", false);
    }
    if (toggleMobile.classList.contains("mobile-nav-button__menu--open")) {
        toggleMobile.classList.remove("mobile-nav-button__menu--open");
    } else {
        toggleMobile.classList.add("mobile-nav-button__menu--open");
    }
}
document.querySelector('.mobile-nav-button').addEventListener("click", openSlideMenu);