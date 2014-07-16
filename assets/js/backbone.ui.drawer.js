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

		el : '.sidebar',

		options : {
			navEl : "ul.nav",
			maskEl : ".ui-drawer-mask",
			// preventDefault: false
		},

		initialize: function( options ){
			var self = this;
			window.addEventListener('resize', function(){ self.resize() }, false);

			return View.prototype.initialize.call(this, options);
		},

		events: {
			"click .ui-drawer-control": "toggle",
			
		},

		toggle: function(e) {
			e.preventDefault();
			console.log("Im hit");
			$(this.el).toggleClass("active");
			/*$( this.options.navEl ).toggleClass('ui-drawer-active');
			$( this.options.maskEl ).toggleClass('ui-drawer-active');*/
		},

		/*resize: function() {
			$( this.options.navEl ).removeClass('ui-drawer-active');
			$( this.options.maskEl ).removeClass('ui-drawer-active');
		},*/

		/*postRender: function() {
			// check if we have the drawer control
			var control = $(this.el).find(".ui-drawer-control");
			if( !control.length ) {
				// add it to the el
				var $el = $('<a href="" class="ui-drawer-control"></a>');
				// $(this.el).find("header").prepend($el);
				$(this.el).prepend($el);

				// $( this.options.navEl ).addClass("ui-drawer-target");

			}
		}*/
	});

})(this._, this.Backbone);