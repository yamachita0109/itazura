var css = document.createElement('style'),
	rule = document.createTextNode('img:hover,button:hover,input:hover{display: inline-block !important;animation: tero .1s infinite !important;}@keyframes tero {0% {transform: translate(0px, 0px) rotateZ(0deg)}25% {transform: translate(2px, 2px) rotateZ(1deg)}50% {transform: translate(0px, 2px) rotateZ(0deg)}75% {transform: translate(2px, 0px) rotateZ(-1deg)}100% {transform: translate(0px, 0px) rotateZ(0deg)}}');
css.media = 'screen';
css.type = 'text/css';
css.appendChild(rule);
document.getElementsByTagName('head')[0].appendChild(css);