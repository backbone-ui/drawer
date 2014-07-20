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
			drawerEl : ".sidebar",
			// maskEl : ".ui-drawer-mask",
			/* contentEl: false, */
			contentEl: ".content",
			/*contentMove: false,*/
			contentMove: "displace",
			// preventDefault: false,
			screenSize: "all",
			position: "left",
			// position: "left",
			// position: "left",
			// position: "left"
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