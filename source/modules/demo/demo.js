// demo
;(function ( $, window, document, undefined ) {
	'use strict';

	$.getJSON('http://ip-api.com/json',
		function(json) {
			$('#form-demo__ip').val(json.query);
			$('#form-demo__city').val(json.city);
			$('#form-demo__country').val(json.country);
		}
	);

})( jQuery, window, document );
