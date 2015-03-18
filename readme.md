# Backbone UI: Drawer

A flexible UI Drawer that can be used on any block element.  

## Install

Using bower:
```
bower install backbone.ui.drawer
```

## Dependencies

* [Backbone](http://backbonejs.org/)
* [Underscore](http://underscorejs.org/)
* [jQuery](http://jquery.com/) (or alternative event handler)

## Usage

```
var view = new Backbone.UI.Drawer({
		el : ".main"
});
view.render();
```


## Options

A more detailed list of all the available options.

contentEl: ".content",
			/*contentMove: false,*/
			contentMove: "displace",

* ***contentEl***: An optional HTML element that the drawer should interact with. - default: false
* ***contentMove***: If a contentEl has been set, the type of interaction the should occur - default: false . Example displace - moves the content in sync with the drawer


## Examples

* [Static example](http://rawgithub.com/backbone-ui/drawer/master/examples/static.html)


## Credits

Initiated by Lyndel Thomas ( [@ryndel](http://github.com/ryndel) )

Distributed through [Makesites.org](http://makesites.org/)

Released under the [MIT license](http://makesites.org/licenses/MIT)

