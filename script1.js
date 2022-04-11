// gsap.from('.navbar-brand', {opacity:0, duration:2, y:-50, ease:"bounce.out"});
// gsap.from('.tag', {opacity:0, duration:2, x:-50, delay:1.4});
// gsap.from('.tag', {opacity:0, duration:2, x:50, ease:'bounce.out', stagger:0.6});

gsap.timeline()
.from('.navbar', {scale:0, duration:2})
.from('.navbar-brand', {opacity:0, scale: 0, ease:"back"})
.from('.tag', {opacity:0, y: 10, ease:"back"});
