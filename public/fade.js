export default function fadeOut() {
	console.log("animate function called");

	// Make sure the GSAP library and its plugins are loaded
	if (!window.gsap || !window.ScrollTrigger) {
		console.error("GSAP or ScrollTrigger is not loaded");
		return;
	}

	// Register the ScrollTrigger plugin
	window.gsap.registerPlugin(window.ScrollTrigger);

	// Get all the h1 elements
	const fadeElements = document.querySelectorAll(".fade-out");

	// Loop through each h1 element
	fadeElements.forEach((element) => {
		// Use the GSAP library to animate the h1 element
		window.gsap.to(element, {
			opacity: "0",
			scrollTrigger: {
				trigger: element,
				start: "top 50px",
				end: "top top",
				scrub: true,
			},
		});
	});
}
