// Backbone.js Drawer extension
//
// Initiated by: Lyndel Thomas (@ryndel)
// Source: https://github.com/backbone-ui/drawer
//
// Licensed under the MIT license:
// http://makesites.org/licenses/MIT

(function(_, Backbone) {

	// fallbacks
	if( _.isUndefined( Backbone.UI ) ) Backbone.UI = {};
	// Support backbone app (if available)
	var View = ( typeof APP != "undefined" && !_.isUndefined( APP.View) ) ? APP.View : Backbone.View;

	Backbone.UI.Drawer = View.extend({

		el : '.ui-drawer',

		options : {
			mainEl : ".main",
			contentEl: ".content",
			contentMove: false,
			position: "top-left",
			mobileOnly: false,
		},

		initialize: function( options ){
			var self = this;
			window.addEventListener('resize', function(){ self.resize() }, false);
			// extend options
			this.options = _.extend( {}, this.options, options);
			
			$(this.el).addClass(this.options.position).addClass("ui-drawer");
			$(this.options.contentEl).addClass("ui-drawer-content");

			return View.prototype.initialize.call(this, options);
		},

		events: {
			"click .ui-drawer-control": "toggle",
		},

		toggle: function(e) {
			e.preventDefault();
			$(this.el).toggleClass("active");
			
			if ( (this.options.contentEl) && (this.options.contentMove) ) {
				$(this.options.contentEl).toggleClass("displace");
			}
		},

		resize: function() {
			$( this.el ).removeClass('active');
			if ( (this.options.contentEl) && (this.options.contentMove) ) {
				$( this.options.contentEl ).removeClass("displace");
			}
		},
		
		postRender: function() {
			// check if we have the drawer control
			var control = $(this.el).find(".ui-drawer-control");
			if ( !control.length ) {
				// add it to the el
				var $el = $('<a href="#" class="ui-drawer-control"></a>');
				$(this.el).prepend($el);
			}
			
			if (this.options.mobileOnly) {
				$(this.options.mainEl).addClass("mobile-only");
			}
		}
	});

})(this._, this.Backbone);