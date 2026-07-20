import Lenis from 'lenis';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
	const lenis = new Lenis({
		duration: 1.1,
		easing: (t: number) => 1 - Math.pow(1 - t, 3)
	});

	function raf(time: number) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);
}
