$(function() {
	// Open all links in new tabs
	// (Some might call this wrong and hacky)
	// (If that's the case, I don't want to be right!)
	$('a').attr('target', '_blank');

	// Toggle the sidebar nav menu
	$('.menu-toggle-container .fa.fa-bars').on('click', function() {
		$('#sidebar-wrapper').addClass('open');
	});

	$('.close-btn').on('click', function() {
		$('#sidebar-wrapper').removeClass('open');
	});

	// Show the sidebar nav menu if the user
	// has scrolled to the bottom of the homepage
	// $(window).on('scroll load', function() {
	// 	if($(window).scrollTop() + $(window).height() == $(document).height()) {
	// 		$('#sidebar-wrapper').addClass('open');
	// 	}
	// })
});