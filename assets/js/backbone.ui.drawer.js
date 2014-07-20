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

		el : '.main',

		options : {
			drawerEl : ".drawer",
			contentEl: false,
			contentMove: false,
			position: "left",
			mobileOnly: false,
		},

		initialize: function( options ){
			var self = this;
			window.addEventListener('resize', function(){ self.resize() }, false);
			
			$(this.options.drawerEl).addClass("ui-drawer-target");

			return View.prototype.initialize.call(this, options);
		},

		events: {
			"click .ui-drawer-control": "toggle",
		},

		toggle: function(e) {
			e.preventDefault();
			$(this.options.drawerEl).toggleClass("active");
			
			if ( (this.options.contentEl) && (this.options.contentMove) ) {
				$(this.options.contentEl).toggleClass(this.options.contentMove);
			}
			/*$( this.options.navEl ).toggleClass('ui-drawer-active');
			$( this.options.maskEl ).toggleClass('ui-drawer-active');*/
		},

		resize: function() {
			$( this.options.drawerEl ).removeClass('active');
			if ( (this.options.contentEl) && (this.options.contentMove) ) {
				$( this.options.contentEl ).removeClass(this.options.contentMove);
			}
		},

		postRender: function() {
			// check if we have the drawer control
			// console.log("Im in postrender");
			var control = $(this.options.drawerEl).find(".ui-dr awer-control");
			if ( !control.length ) {
				// add it to the el
				var $el = $('<a href="" class="ui-drawer-control"></a>');
				$(this.options.drawerEl).prepend($el);
			}
			
			if (this.options.mobileOnly) {
				$(this.el).addClass("mobile-only");
			}
		}
	});

})(this._, this.Backbone);