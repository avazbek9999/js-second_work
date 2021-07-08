// practis 2

// var a = prompt ('birinchi raaqamni kiriting', 0);
// var b = prompt ('ikkinchi raqamni kiriting', 0 );
// var result = prompt (`${a}+${b}=`)

// var x = a-0 ;
// var y = b-0 ;
// var z = result-0

// if (x + y === z){
// 	console.log('true')
// } else {
// 	console.log('folse')
// }

// practis 3

var elparagraph = document.querySelector('.paragraph')

var where = prompt(`Qayerga sayohat qilmoqchisiz?`);
alert(
	`${where}ga ketadigan  barcha harajatlar: \n -Borish-kelish samalyot bileti-$500 \n -Mehmonxona to'lovi(to'liq safar davomiyligi uchun)-120$ \n -Muzey va ko'ngil ochar joylar uchun-120 yevro`
);
alert(`Hozirgi dollor va yevro kurslari: \n1$=9433.42 \n1 yevro=10254.03`);

var tisket = Math.round(500 * 9433.42);
var hotel = Math.round(120 * 9433.42);
var muzey = Math.round(120 * 10254.03);
var expense = Math.round(tisket + hotel + muzey);

var firstName = prompt('Ismingizni kiriting');
var money = prompt(
	`${firstName} o'zingizda qancha pul borligini so'mda kiriting`
);

if (money >= expense) {
	elparagraph.textContent = `Oq yo'l ${firstName}`
} else {
	elparagraph.textContent = `${firstName} ozgina sabir qilish kerak bo'lar ekan`
}
