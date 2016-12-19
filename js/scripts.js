$(function() {
	// Toggle the sidebar nav menu
	$('.menu-toggle-container .fa.fa-bars').on('click', function() {
		$('#sidebar-wrapper').addClass('open');
	});

	$('.close-btn').on('click', function() {
		$('#sidebar-wrapper').removeClass('open');
	})
});