window.sr = ScrollReveal();
sr.reveal(".dark-overlay", {
  duration: 3000,
  delay: 500,
});

sr.reveal(
  ".chat",
  {
    delay: 500,
    interval: 500,

    distance: "200px",
  },
  4000
);

sr.reveal("h2", {
  viewFactor: 0.2,
  duration: 1500,
  origin: "left",
  distance: "200px",
  reset: true,
});

sr.reveal(".container p", {
  viewFactor: 0.2,
  duration: 1500,
  origin: "right",
  distance: "200px",
  reset: true,
});

sr.reveal("i", {
  duration: 4000,
  viewFactor: 0.0,
  rotate: { x: 0, y: 1000, z: 0 },
});

sr.reveal(".video-container", {
  delay: 200, // Configure delay as needed
  distance: "50px", // Configure distance as needed
  reset: false, // Whether to reset the animation when element is not visible
});
