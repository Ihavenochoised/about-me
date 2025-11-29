// const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
// function applyTheme () {
//     document.documentElement.setAttribute('data-theme', darkModeQuery.matches ? 'dark' : 'light');
// };
// applyTheme();
// darkModeQuery.addEventListener('change', applyTheme);

/* -------------------------------------------------------- */

const pad = n => n.toString().padStart(2, '0');
const now = new Date();
const times = [now];
for (let i = 1; i < 9; i++) {
	const next = new Date(times[i - 1]);
	next.setSeconds(next.getSeconds() + Math.floor(Math.random() * 8) + 3);
	times.push(next);
}
document.querySelectorAll('#timeStamp').forEach((el, i) => {
	if (times[i]) {
		el.textContent = `${pad(times[i].getHours())}:${pad(
			times[i].getMinutes()
		)}:${pad(times[i].getSeconds())}`;
	}
});
function waitForOpacity(selector) {
    return new Promise(resolve => {
        function check() {
            const el = document.querySelector(selector);
            if (el && parseFloat(getComputedStyle(el).opacity) > 0) {
                resolve(el);
            } else {
                requestAnimationFrame(check);
            }
        }
        check();
    });
}
// Usage with async/await
(async () => {
    const el = await waitForOpacity('#timer');
    for (let i = 5; i > 0; i--) {
        el.innerHTML = `Proceeding in ${i} second${i === 1 ? '' : 's'} ...`;
        await new Promise(r => setTimeout(r, 1000)); // wait 1 second
    }
})();
((duration = 21500) => {
    const bar = document.getElementById('progressBar');
    const steps = 25;
    const interval = duration / steps;
    let i = 0;
    const fill = setInterval(() => {
        bar.style.width = `${(i / steps) * 100}%`;
        i++;
        if (i > steps) clearInterval(fill);
    }, interval);
})();
// ----
