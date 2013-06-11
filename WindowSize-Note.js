$(function() {
	var infoID = 'WindowSize-Note';
	
	var standardFontSize = parseInt($('body').css('font-size'));
	var windowWidthPX = $(window).width();
	var windowHeightPX = $(window).height();
	var windowWidthEM = windowWidthPX/standardFontSize;
	var windowHeightEM = windowHeightPX/standardFontSize;
	
	
	$('body').append('<table id="' + infoID + '"><tr><td class="wh_arrows">↔</td><td class="wh_showWidthPX">' + windowWidthPX + ' px</td><td class="wh_showWidthEM">' + windowWidthEM + ' em</td></tr><tr><td class="wh_arrows">↕</td><td class="wh_showHeightPX">' + windowHeightPX + ' px</td><td class="wh_showHeightEM">' + windowHeightEM + ' em</td></table>');
	
	// CSS
	
	$('#'+ infoID).css({
		'background-color': 'red',
		'border-radius': '0.25em',
		'opacity': '0.5',
		'position':  'fixed',
			'bottom':  '1em',
			'right':  '1em',
		'text-align': 'right',
		'width': '250px',
		'z-index': '9999'
	});
	
	
	$('#'+ infoID + ' td').css({
		'color':  'white',
		'font-family': 'Lucida Grande, Helvetica, Arial, sans-serif',
		'font-size': '12px',
		'padding': '10px',
		'width':  '45%',
	});
	
	$('td.wh_arrows').css({
		'font-size': '16px',
		'text-align': 'center',
		'width':  '10%'
	});
	
	$(window).resize(function() {
		windowWidthPX = $(window).width();
		windowHeightPX = $(window).height();
		windowHeightPX = $(window).height();
		windowWidthEM = windowWidthPX/standardFontSize;
		windowHeightEM = windowHeightPX/standardFontSize;
		
		$('.wh_showWidthPX').html(windowWidthPX + ' px');
		$('.wh_showHeightPX').html(windowHeightPX + ' px');
		$('.wh_showWidthEM').html(windowWidthEM + ' em');
		$('.wh_showHeightEM').html(windowHeightEM + ' em');
	});
	
});