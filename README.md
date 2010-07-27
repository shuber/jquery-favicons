# jquery-favicons

Adds favicons to links


## Installation

Simply download and include `jquery.favicons.js` or `jquery.favicons.min.js`


## Usage

By default, when a favicon is added to an element, the plugin adds a configurable `class_name` (`favicon` by default) to the element, then sets the `background-url` css property.

This behavior can be changed by overwriting the `apply` option. See `Options` below.

So, if you're not overwriting this behavior, you're going to want to have some css rules defined for that configurable `class_name`, e.g.

	.favicon {
		background-position: top left;
		background-repeat: no-repeat !important;
		padding-left: 20px;
	}

Then simply call `$('YOUR ANCHOR SELECTOR').favicons()`, e.g. `$('#sources a').favicons()`


## Options

* `apply` - The function that is called when a favicon exists for an element. It is a function which gets passed an `element`, and a `url`.
* `class_name` - The class name to add to an element when a favicon is loaded
* `missing_url` - The favicon url to load when a domain does not have a favicon. This can be a string, a function which gets passed a `domain`, or null to do nothing.
* `url` - The favicon url to load. This is a function which gets passed a `domain`.


### Note

This plugin uses `http://www.google.com/s2/favicons?domain=DOMAIN` as the `url` option to load favicons by default. It ALWAYS returns a favicon, even if the domain doesn't have one, so the `missing_url` option will never be called.

You can specify the `url` option as something like `function(domain) { 'http://' + domain + '/favicon.ico'; }` to overwrite this behavior.