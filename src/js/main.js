$(document).ready(function() {

	var owl_carousel_main = $('.owl-carousel-main').owlCarousel({
		items: 1,
		margin: 0,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		animateOut: 'fadeOut'
	});

	var owl_carousel_products = $('.owl-carousel-products').owlCarousel({
		margin: 15,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 4,
			},
			1000: {
				items: 5,
			},
			1200: {
				items: 6,
			}
		}
	});

	$('.btn-owl-carousel-products-left').on('click', function (event) {
		event.preventDefault();

		owl_carousel_products.trigger('prev.owl.carousel');
	});

	$('.btn-owl-carousel-products-right').on('click', function (event) {
		event.preventDefault();

		owl_carousel_products.trigger('next.owl.carousel');
	});

	var owl_carousel_our_factory = $('.owl-carousel-our-factory').owlCarousel({
		margin: 15,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			}
		}
	});

	$('.btn-owl-carousel-our-factory-left').on('click', function (event) {
		event.preventDefault();

		owl_carousel_our_factory.trigger('prev.owl.carousel');
	});

	$('.btn-owl-carousel-our-factory-right').on('click', function (event) {
		event.preventDefault();

		owl_carousel_our_factory.trigger('next.owl.carousel');
	});

	$('[data-dinaanim]').each(function () {

		var $this = $(this);

		$this.addClass('dinaAnim-invisible');

		if ($(window).width() > 767) {

			$this.appear(function () {

				var delay = ($this.data('dinadelay') ? $this.data('dinadelay') : 1);

				if (delay > 1) $this.css("animation-delay", delay + "ms");

				$this.addClass('dinaAnim-animated');
				$this.addClass('dinaAnim-' + $this.data('dinaanim'));

				setTimeout(function () {

					$this.addClass('dinaAnim-visible');

				}, delay);

			}, { accX: 0, accY: -150 });

		} else {

			$this.animate({ opacity: 1 }, 300, 'easeInOutQuad', function () { });
		}
	});

});