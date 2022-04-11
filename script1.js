// gsap.from('.navbar-brand', {opacity:0, duration:2, y:-50, ease:"bounce.out"});
// gsap.from('.tag', {opacity:0, duration:2, x:-50, delay:1.4});
// gsap.from('.tag', {opacity:0, duration:2, x:50, ease:'bounce.out', stagger:0.6});
gsap.registerPlugin(ScrollTrigger);

gsap.timeline()
.from('.navbar', {scale:0, duration:2})
.from('.navbar-brand', {opacity:0, scale: 0, ease:"back"})
.from('.tag', {opacity:0, y: 10, ease:"back"});

const tl = gsap.timeline({
    scrollTrigger: {
     trigger: '.aboutbg',
     markers:true,
     start:"bottom 90%", 
     end:"top 30%",
     scrub:3, 
          }
  
});

gsap.from(".about-text", {
    duration:7,
    y:250,
    opacity:0,
    scrollTrigger:{
        trigger:".aboutbg",
        markers:true,
        start:"bottom 90%", ///start at the top of our trigger and a percentage down the viewpost
        end:"top 30%",
          scrub:6, //4 seconds of smooting
}
});

    