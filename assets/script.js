if (navigator.userAgent.search(/Safari/) > 0) {a = 'Вы используете Safari'};
if (navigator.userAgent.search(/Firefox/) > 0) {a = 'Вы используете MozillaFirefox'};
if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) {a = 'Вы используете Internet Explorer'};
if (navigator.userAgent.search(/Chrome/) > 0) {a = 'Вы используете Google Chrome'};
if (navigator.userAgent.search(/YaBrowser/) > 0) {a = 'Вы используете Яндекс браузер'};
if (navigator.userAgent.search(/OPR/) > 0) {a = 'Вы используете Opera'};
if (navigator.userAgent.search(/Konqueror/) > 0) {a = 'Вы используете Konqueror'};
if (navigator.userAgent.search(/Iceweasel/) > 0) {a = 'Вы используете Debian Iceweasel'};
if (navigator.userAgent.search(/SeaMonkey/) > 0) {a = 'Вы используете SeaMonkey'};
if (navigator.userAgent.search(/Edge/) > 0) {a = 'Вы используете Microsoft Edge'};
alert(a);

let name = prompt("Ваше имя?", "");
alert(name);