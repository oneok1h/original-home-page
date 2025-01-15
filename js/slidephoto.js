function slideSwitch() {
	var $active = $('#slideshow li.active');
	if ( $active.length == 0 ) $active = $('#slideshow li:last');
	var $next =  $active.next().length ? $active.next() : $('#slideshow li:first');
	$active.addClass('last-active');
	$next.css({opacity: 0.0})
		.addClass('active')
		.animate({opacity: 1.0}, 2000, function() {
			$active.removeClass('active last-active');
		});
}
$(function() {
	setInterval( "slideSwitch()", 8000 );
});
