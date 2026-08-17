document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.menu__link').forEach(link => {
		link.onclick = e => {
			e.preventDefault();
			const target = document.querySelector(link.hash);
			if (target) {
				const start = window.scrollY;
				const end = target.offsetTop - 100;
				const duration = 800;
				let t = null;

				const easeInOutCubic = p => p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

				const animate = time => {
					t ??= time;
					const progress = Math.min((time - t) / duration, 1);
					const ease = easeInOutCubic(progress);
					window.scrollTo(0, start + (end - start) * ease);
					progress < 1 && requestAnimationFrame(animate);
				};
				requestAnimationFrame(animate);
			}
		};
	});
});
