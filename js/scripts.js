let body = document.querySelector('body');
let btnLight = document.querySelector('.btn-light');
let patte = document.querySelectorAll('.patte');
let ball = document.querySelector('.ball');

btnLight.onclick = function () {
	let wrapper = document.querySelector('.wrapper').offsetWidth;
	event.preventDefault();
	left = 0;
	rotate = 0;
	if (body.classList.contains('dark')) {
		body.classList.remove('dark');
		btnLight.innerHTML = 'Выключите свет';
		btnLight.color = "black";
		btnLight.classList.remove('off')
		btnLight.classList.add('on')
		ball.classList.add('hide')
	} else {
		body.classList.add('dark');
		btnLight.innerHTML = 'Включите свет'
		btnLight.color = "black";
		btnLight.classList.remove('on')
		btnLight.classList.add('off')
		ball.classList.remove('hide')
		ball.style.left = left + 'px';
		rollingRight(wrapper);
	}
}

function rollingRight(wrapper) {
	let timerRigth = setInterval(() => {
		if (body.classList.contains('dark')) {
			ball.style.left = left + 'px';
			ball.style.transform = 'rotate(' + rotate + 'deg)';
			if (left == wrapper - 65) {
				clearInterval(timerRigth);
				rollingLeft(wrapper);
			} else {
				left++;
				rotate++;
			}

		} else {
			clearInterval(timerRigth);
		}
	}, 1);

}


function rollingLeft(wrapper) {
	let timerLeft = setInterval(() => {
		if (body.classList.contains('dark')) {
			ball.style.left = left + 'px';
			ball.style.transform = 'rotate(' + rotate + 'deg)';
			if (left < 0) {
				clearInterval(timerLeft);
				rollingRight(wrapper);
			} else {
				left--;
				rotate--;
			}

		} else {
			clearInterval(timerLeft);
		}
	}, 1);

}