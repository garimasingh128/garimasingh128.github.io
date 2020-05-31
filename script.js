const love_btns = document.querySelectorAll('.love');

love_btns.forEach(love_btn => {
	love_btn.addEventListener('mousedown', (e) => {
		love_btn.style.background = '#fff';
		love_btn.style.color = '#E7273F';
		love_btn.querySelector('.text').innerHTML = '<span class="grey-text">Sent to:</span> GARIMA';

		createHearts(love_btn.querySelector('.icon-container'));
	});

	love_btn.addEventListener('mouseup', (e) => {
		love_btn.style.background = '#E7273F';
		love_btn.style.color = '#fff';
		love_btn.querySelector('.text').innerHTML = 'THANK YOU! <i class="fas fa-redo"></i>';
	});
})

function createHearts(container) {
	// create 5 hearts
	for(let i=0; i<15; i++) {
		setTimeout(() => {
			const heart = document.createElement('span');
			heart.classList.add('heart');
			heart.innerHTML = '<i class="fas fa-heart"></i>';
			heart.style.left = Math.random() * 100 + '%';
			heart.style.top = Math.random() * 100 + '%';
			heart.style.fontSize = Math.random() * 20 + 5 + 'px';
			heart.style.animationDuration = Math.random() * 2 + 3 + 's';
			container.appendChild(heart);

			setTimeout(() => {
				heart.remove();
			}, 3000);
		}, i * 100)
	}
}
const text = document.getElementById("text");
const prog = "I AM GARIMA SINGH";
let idx = 1;

setInterval(writeText, 100);

function writeText() {
    text.innerText = prog.slice(0, idx)
	
	idx++;
	
	if(idx > prog.length){
      idx = 1;
    }

}

const eyes = document.querySelectorAll('.eye-roll');

window.addEventListener('mousemove', (e) => {
	eyes.forEach(eye => {
		const x = eye.getBoundingClientRect().left + (eye.clientWidth / 2);
		const y = eye.getBoundingClientRect().top + (eye.clientHeight / 2);
		const radian = Math.atan2(e.pageX - x, e.pageY - y);
		const rot = (radian * (180 / Math.PI) * -1) + 90;
		eye.style.transform = `rotate(${rot}deg)`;
		
		console.log(rot);
	});
});

