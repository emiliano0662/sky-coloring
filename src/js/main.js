$(document).ready(function() {

	$("#content-fixed-link-phone").load("block-fixed-link-phone.html");

	var owl_carousel_main = $('.owl-carousel-main').owlCarousel({
		items: 1,
		margin: 0,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		animateOut: 'rollOut',
		animateIn: 'zoomIn',
	});

	var owl_carousel_main = $('.owl-carousel-products-more-requested').owlCarousel({
		items: 1,
		margin: 0,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		animateOut: 'zoomOut',
		animateIn: 'bounceInDown',
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
				items: 3,
			},
			1000: {
				items: 4,
			},
			1200: {
				items: 5,
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

	$('.btn-section-products').on('click', function (event) {
		event.preventDefault();

		var section = $(this).data('item');

		$(".btn-section-products").removeClass('active');
		$(this).addClass('active');

		$(".products-block-list .content").hide();
		$(".products-block-list .content"+section).fadeIn();

	});

	var owl_carousel_our_factory = $('.owl-carousel-services-testimonies').owlCarousel({
		items: 1,
		margin: 0,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true
	});

	$('.btn-owl-carousel-services-testimonies-left').on('click', function (event) {
		event.preventDefault();

		owl_carousel_our_factory.trigger('prev.owl.carousel');
	});

	$('.btn-owl-carousel-services-testimonies-right').on('click', function (event) {
		event.preventDefault();

		owl_carousel_our_factory.trigger('next.owl.carousel');
	});

	var owl_carousel_our_factory = $('.owl-carousel-products-detail').owlCarousel({
		items: 1,
		margin: 0,
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		animateOut: 'rollOut',
		animateIn: 'zoomIn',
	});

	$(window).scroll(function () {

		if ($(window).width() > 992) {

			if ($(window).scrollTop() > 220) {

				$('#main-menu').addClass('fixedHeader');

			} else {

				$('#main-menu').removeClass('fixedHeader');
			}
		}
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