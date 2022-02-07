$(document).on('ready', function() {
	$(".variable").slick({
		dots: true,
		infinite: true,
		variableWidth: true
	});
	
	var styleElem = document.head.appendChild(document.createElement("style"));

	var mouse_target = document.getElementsByClassName('mouse_target');

	var button_mobile = document.getElementById('button_mobile');

	var flag = new Boolean(false);

	const mediaQuery = window.matchMedia('(max-width: 576.98px)')

	function Target(mouse_target) {
		if (mediaQuery.matches) {
			button_mobile.onclick = function() {
				if(flag == false) {
					styleElem.innerHTML = "body:before {display: block !important;}";
					$('body').css('overflow', 'hidden');
					document.body.style.overflow = "hidden";
					flag = true;
				}
				else {
					styleElem.innerHTML = "body:before {display: none !important;}";
					document.body.style.overflow = "auto";
					flag = false;
				}
			};
		}
		else {
			[].forEach.call(mouse_target, function(element) {
				element.onmouseover = function() {
					styleElem.innerHTML = "body:before {display: block !important;}";
					flag = true;
				};
				element.onmouseout = function() {
					styleElem.innerHTML = "body:before {display: none !important;}";
					flag = false;
				}
			});
		}
	};
	Target(mouse_target);
});