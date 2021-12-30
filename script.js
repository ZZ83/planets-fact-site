function openSlideMenu() {
    const toggle        = document.querySelector('.primary-navigation__inner');
    const toggleMobile  = document.querySelector('.mobile-nav-button__menu');
    if (toggle.classList.contains("primary-navigation__inner--open")) {
        toggle.classList.remove("primary-navigation__inner--open");
    } else {
        toggle.classList.add("primary-navigation__inner--open");
    }
    if (toggleMobile.classList.contains("mobile-nav-button__menu--open")) {
        toggleMobile.classList.remove("mobile-nav-button__menu--open");
    } else {
        toggleMobile.classList.add("mobile-nav-button__menu--open");
    }
}