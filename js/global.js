// Handle hover dropdown functionality for navbar
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

// Prevent hash urls on scroll
$(document).ready(function () {

  const menuBtn = $('.nav-link');

  menuBtn.click(() => {
    // let hash be set before removing it
    setTimeout(() => {
      // call removeHash function after set timeout
      removeHash();
    }, 5); 
  });

  // removeHash function
  // uses HTML5 history API to manipulate the location bar
  function removeHash() {
    history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
  }
});