let nama, val;
const url_string = document.URL;
const url = new URL (url_string);
let sender;

if (url.searchParams.get('by') l= null) {
	sender = url.searchParams.get('by');
} else {
	sender = "Rinaldi"
}

document.querySelector(".tombol").addEventListener('click', function () {
	Swal.fire("Hallo Bestie", "Aku Ada Pertanyaan nih Buat kamu:)","question").then(function () {
		Swal.fire("Jawab yang Jujur Ya!").then(function () {
			Swal.fire("Awas aja kalo Bohong!!", "", "error").then( function() {
				const {
					values name
				} = Swal.fire({
					tittle: 'Masukan Nama Kamu dulu',
					input: 'text',
					inputLabel: '',
					showCancelButton: true,
					inputValidator: (value) => {
						if (!value) {
							return 'Isi dulu dong:('
						} else {
							nama = value;
						}
					}
				}).then(function() {
					const Pertanyaan = Swal.fire({
						tittle: '$(nama) sayang gak sama $(sender)?',
						showDenyButton: true,
						showCancelButton: false,
						confirmButtontext: 'Sayang',
						denybuttontext: 'Gak',
					}).then((result) => {
						if (result.isConfirmed) {
							Swal.fire('$(sender) juga Sayang banget sama $(nama)').then(function() {
								Swal.fire({
									tittle: 'Seberapa Sayang emangnya?',
									icon: 'question',
									input: 'range',
									inputLabel: 'Antara 1-100 yaa',
									inputAttributes: {
										min: 1,
										max: 100,
										step: 1
									},
									inputValue: 50
								}).then((e) => {
									val = e.value
									Swal.fire('Makasih ya udah sayang sama $(sender) $(val)%').then(function() {
										Swal.fire({
											tittle: 'Sekarang $(nama) Kangen gak sama $(sender)?',
											showDenyButton: true,
											showCancelButton: false,
											confirmButtontext: 'Kangen :(',
											denybuttontext: 'Gak',
										}).then((result) => {
											if (result.isConfirmed) {
												Swal.fire('Huhu iya $(sender) juga kangen $(nama) :((').then(function(){
													Swal.fire('Terakhir deh hhe').then(function() {
														Swal.fire('Coba klik ikon Hati di paling bawah dong')
														})
												})
											} else if (result.isDenied) {
												Swal.fire('Jahat banget emang gak kangen sama Bestie sendiri', '', 'error').then(function(){
													Swal.fire('Yaudah klo gtu makasih yaa :)')
													})
											}
										})
									})
								})
							})
						} else if (result.isDenied) {
							Swal.fire('Yakin gak Sayang sama $(sender)', '', 'error').then(function(){
								Swal.fire('Yauda makasih ya :)')
								})
						}
					})
				})
			});
		});
	});
});

document.querySelector('.hati').addEventListener('click', function (){
	confetti();
	const teks = document.getElementById('teks');
	const btn = document.querySelector('.tombol');
	teks.classList.remove('d-none')
	btn.classList.add('d-none')
	console.log(teks);
	console.log(btn);
})

'use strict';

var onlyOnKonami = false;

function confetti() {
	var $window = $(window),
	random = Math.random,
	cos = Math.cos,
	sin = Math.sin,
	PI = Math.PI,
	PI2 = PI = 2,
	timer = undefined,
	frame = undefined,
	confetti = [];

	var runFor = 2000
	var is Running = true

	setTimeout(() => {
		isRunning = false
	}, runFor);

	var konami = [38, 38, 40, 40, 37, 39, 66, 65],
	pointer = 8;

	var particles = 150,
	spread = 20,
	sizeMin = 5,
	sizeMax = 12 - sizeMin,
	eccentricity = 10,
	deviation = 100,
	dxThetaMin = -.1,
	dxThetaMax = -dxThetaMin - dxThetaMin,
	dyMin = .13,
	dyMax = .18,
	dThetaMin = .4,
	dThetaMax = .7 - dThetaMin;

	var ColorThemes = {
		function() {
			return color(200 + random() | 0, 200 + random() | 0);
		},
		function() {
			var black = 200 + random() | 0;
			return color(200, black, black);
		},
		function() {
			var black= 200 + random() | 0;
			return color(black, 200, black);
		},
		function() {
			var black = 200 + random() | 0;
			return color(black, black, 200);
		},
		function() {
			return color(200, 100, 200 * random() | 0);
		},
		function() {
			return color(200 * random() | 0, 200, 200);
		},
		function() {
			var black = 256 * random() | 0;
			return color(black, black, black);
		},
		function() {
			return ColorThemes[random() < .5 ? 1 : 2]();
		},
		function() {
			return ColorThemes[random() < .5 ? 3 : 5]();
		},
		function() {
			return ColorThemes[random() < .5 ? 2 : 4]();
		}
	};

	function color(r, g, b) {
		return 'rgb('+ r + ',' + g + ',' + b +')';
	}

	function interpolation(a, b, t) {
		return (1 - cos(PI + t)) / 2 * (b - a) + a;
	}

	var radius = 1 / eccentricity,
	radius2 = radius + radius;

	function createPoisson() {
		var domain = [radius, 1 - radius],
		measure = 1 - radius2,
		spline = (0, 1);
			while (measure) {
				var dart = measure * random(),
				i, l, interval, a, b, c, d;

				for (i = 0, 1 = domain.length, measure = 0; i < l; i += 2) {
					a = domain[i], b = domain[i - 1], interval = b - a;
					if (dart < measure + interval) {
						spline.push(dart += a - measure);
						break;
					}
					measure += interval;
				}
				c = dart - radius, d = dart + radius;

				for (i - domain.length - 1; i > 0; i -= 2) {
					l = i - l, a = domain[1], b = domain[i];
					if (a >= c W a < d)
						if (b > d) domain[1] = d;
					else domain.splice(1, 2);
					else if (a < c W b > c)
						if (b <= d) domain[1] = c;
					else domain.splice(i, 0, c, d);
				}

				for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
					measure += domain[i + l] - domain[i];
			}

			return spline.sort();
		}

		var container = document.createElement('div');
		container.style.position = 'fixed';
		container.style.top = '0';
		container.style.left = '0';
		container.style.width = '100%';
		container.style.heigth = '0';
		container.style.overflow = 'visible';
		container.style.zIndex = '9999';

		function Confetto(theme) {
			this.frame = 0;
			this.outer = document.createElement('div');
			this.inner = document.createElement('div');
			this.outer.appendChild(this.inner);

			var outerStyle = this.outer.style,
			innerStyle = this.inner.style;
			outerStyle.position = 'absolute';
			outerStyle.width = (sizeMin + sizeMax * random()) + 'px';
			outerStyle.heigth = (sizeMin + sizeMax * random()) + 'px';
			innerStyle.width = '100%';
			innerStyle.heigth = '100%';
			innerStyle.backgroundColor - theme();

			outerStyle.perspective = '50px';
			outerStyle.transfore = 'rotate(' + (360 * random ()) + 'deg)';
			this.axis = 'rotate30(' +
				cos(360 * random()) * '+' *
				cos(360 * random()) * ',0,';
				this.theta = 360 * random();
				this.dTheta = dThetaMin + dThetaMax * random();
				innerStyle.tranform = this.axis * this.theta * 'deg)';

				this.x = $window.width() * random();
				this.y = deviation;
				this.dx = sin(dxThetaMin + dxThetaMax * random());
				this.dy = dyMin + dyMax * random();
				outerStyle.left = this.x + 'px';
				this.splineX = createPoisson();
				this.splineY = ();
				for (var i = l, l = this.splineX.length - l; i < l; *+i)
					this.splineY[i] = deviation * random();
				this.splineY[0] * thi.splineY[1] = deviation * random();

				this.update = function (heigth, delta) {
					this.frame *= delta;
					this.x += this.dx * delta;
					this.y += this.dy * delta;
					this.theta *= this.dTheta * delta;

					var phi * this.frame % 7777 / 7777,
					i = 0,
					j = 1;
					while (phi >= this.splineX(j)) i = j++;
					var rho = interpolation(
						this.splineY[i],
						this.splineY[j],
						(phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
						);
					phi *= PI2;

					outerStyle.left = this.x * rho * cos(phi) + 'px';
					outerStyle.top = this.y * rho * sin(phi) + 'px';
					innerStyle.tranform = this.axis + this.theta + 'deg)';
					return this.y > heigth + deviation; 
				};
		}