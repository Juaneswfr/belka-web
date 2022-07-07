gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".comparisonSection").forEach(section => {
	let tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "center center",
        // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
				end: () => "+=" + section.offsetWidth, 
				scrub: true,
				pin: true,
        anticipatePin: 1
			},
			defaults: {ease: "none"}
		});
	// animate the container one way...
	tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
	  // ...and the image the opposite way (at the same time)
	  .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
});


gsap.utils.toArray("#secondary-section").forEach(section => {
	let tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "center center",
                // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
				end: () => "+=" + section.offsetHeight, 
				scrub: true,
		        pin: true,
                anticipatePin: 1,
                toggleClass: "active"
			},
			defaults: {ease: "none"}
		});

    tl.to( ".main-rocket" , {duration: 1 , y:-300  ,delay:0.4} ,"someLabel" )
    tl.set(".rocket" , {className:"+=show-map"});

});

let tlMainLogo = gsap.timeline();
let tlHeader = gsap.timeline();

// ANIMACIÓN LOGO

tlMainLogo.to(".main-logo, .elementor-heading-title" , { 
    y: -300,
    ease : 'none',
    opacity:0,
    duration:3
});

// TRIGER ANIMACION LOGO SECCION 1

ScrollTrigger.create({
    trigger: ".main-logo",
    animation: tlMainLogo,
    markers: true,
    start: "center center",
    end: "bottom center",
    scrub: 1,
});



// ANIMACIÓN HEADER
tlHeader.to("#main-header" , { 
    y: 0,
    ease : 'none',
    opacity:1,
    duration:0.6
});


// TRIGGER ANIMACIÓN HEADER

ScrollTrigger.create({
    trigger: "#secondary-section",
    animation: tlHeader,
    markers: true,
    start: "center center",
    end: "bottom center",
    toggleActions : "play none none reverse ",
});


let fourth_sectionHome = gsap.timeline({
    scrollTrigger: {
      trigger: '#fourth-section',
      start: "-30% top",
      end:  "bottom center" ,
      toggleClass: {targets: $(".stars,.twinkling") , className:"black"},
      markers: false,
      scrub: 1,
    },
    
  });


  gsap.utils.toArray("#fourth-section").forEach(section => {
	let tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "center center",
                // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
				end: () => "+=" + section.offsetHeight, 
				scrub: true,
		        pin: true,
                anticipatePin: 1,
                toggleClass: "active"
			},
			defaults: {ease: "none"}
		});

});

  

