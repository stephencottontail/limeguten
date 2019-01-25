# LimeGuten #

Some Gutenberg stuff.

## Notes ##

* Many websites have incorrect or outdated information regarding how Gutenberg blocks should be created and registered. The code in this plugin should be correct as of WordPress 5.0.3 and where practical, I have noted some particular places where incorrect or outdated information led to the block(s) not working properly.

## TODOs ##

* Figure out why both `editor.css` and `block.css` end up with the same CSS despite starting from different SCSS files.
* WordPress recommends that the majority of your styles live in whatever stylesheet is registered as `style` and editor-specific styles live in whatever stylesheet is registered as `editor-style`. This works because both stylesheets are loaded in the editor while `editor-style` does not load on the frontend.
* Right now, only the colors are implemented; we'll implement the "ghost"-style buttons later.
  * Not all colors are implemented; I didn't feel like checking which button colors required dark text
