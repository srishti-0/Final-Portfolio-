   // typing text animation script
   var typed = new Typed(".typing", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

// text animation of name 
anime.timeline({loop: false})
  .add({
    targets: '.text-2 .out',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.text-2',
    opacity: 100,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });