# Sparen's MapGen

### What is this project?

This is a web-based assisted transit map generator using JSON and SVG. It allows the end user to fill in JSON fields in order to generate SVG using the JavaScript mapgen.js file.

### How do I use this project?

To use this, go to the [live application](https://sparen.github.io/Sparen-MapGen/). The JSON that specifies how the map should be generated is on the right, while the live map (512x512) is on the left. Smaller monitors may find that the text area moves below the map. 

This application will not work well on mobile, nor is it intended for use on mobile. If you desire to use this program on mobile, feel free to punish yourself at your own disgression.

For standard use, all that needs to be done is to specify the height and width, the font and font size for station labels, and the various components of the map. Station icons are handled as either circles or squares - further customization may be possible in the future. Standard SVG fields apply here - stroke, stroke-width, etc. 

Lines are broken down into their component paths - straight lines and arcs. Custom strings may be possible in the future for curves that do not fit the default model.

Stations are placed using the station types declared in the JSON input. Labels are placed at an offset from the location of the station's center. In the future, it may be possible to have multi-line labels without the need for duplicating stations and specifying seperate offsets, using top-down text, and text placed at various angles.

### Features

-Generate SVG transit map from specific JSON structure
-Support for generating SVG paths from given input, using provided customization options.
-Support for circle and square station icons
-Support for station labels with pixel offsets and customizable font options
-Support for load/save to Local Storage (and loading saved work on startup)

### Planned Features

-Implement zoom and click-drag
-Implement custom curves for path segments
-Implement angled labels
-Implement automatic map key generation
-Implement custom station icons
-Implement label object array for custom text placement
-Implement Export to JSON file
-Implement Export to SVG file
-Implement Export to PDF document

### Documentation

Documentation is provided in the main webpage. Scroll down past the buttons to view.

### Notes

TODO

