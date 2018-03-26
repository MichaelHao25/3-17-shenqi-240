require.config({
	paths: {
		'jquery': "jquery",
		//jquery默认加载
		"js": "js",
		'swiper': './swiper'
	}
})

require(['swiper'], function(swiper) {
	var mySwiper = new swiper('.banner .swiper-container', {
		pagination: '.banner .swiper-pagination',
		'autoplay': 3000
	})
	var acc = new swiper('.case .swiper-container', {
		pagination: '.case .swiper-pagination',
		'autoplay': 3000,
		prevButton: '.case .left-arrow',
		nextButton: '.case .right-arrow',
		slidesPerView: 3,
	})
})
