"use strict"

function genPrefab_Baltimore() {
    return '// Welcome to mapgen, a tool for generating simple SVG transit maps.\n' +
    '// All lines prefixed with // as the VERY FIRST TWO CHARACTERS ONLY will be ignored upon submit.\n\n' +
    '// Usage instructions:\n// First, declare your desired height and width after svgheight and svgwidth, respectively.\n' +
    '// Next, state the default background color for your entire canvas under bgcolor.\n\n' +
    '// In stationtypes, you define station icons. ID is the name you use to refer to a given type.\n' +
    '// stationformat is either "circle" or "square". stationrad will be the radius for circle and half the length of a side for square.\n' +
    '// If you don\'t want a border, set stroke width to 0.\n\n' +
    '// Lines are defined using path segments.\n' +
    '// Copyright Andrew Fan 2017\n\n' +
    '{\n' +
    '    "svgwidth": 512,\n' +
    '    "svgheight": 512,\n' +
    '    "bgcolor": "#FFFFEE",\n' +
    '    "stationlabelfont": "Helvetica",\n' +
    '    "stationlabelfontsize": "10px",\n' +
    '    "stationtypes": [\n' +
    '        {\n' +
    '            "id": "station1",\n' +
    '            "stationformat": "circle",\n' +
    '            "stationrad": 5,\n' +
    '            "stationstrokewidth": 1,\n' +
    '            "stationcolor": "#FFFFFF",\n' +
    '            "stationstrokecolor": "#44FF44"\n' +
    '        }\n' +
    '    ],\n' +
    '    "lines": [\n' +
    '        {\n' +
    '            "id": "Baltimore Green Line",\n' +
    '            "linecolor": "#44FF44",\n' +
    '            "linewidth": 6,\n' +
    '            "path": [\n' +
    '                {"type": "straight", "src": [64, 64], "dest": [240, 240]},\n' +
    '                {"type": "curve", "src": [240, 240], "dest": [256, 272], "arcrad": 40, "arcdir": 1},\n' +
    '                {"type": "straight", "src": [256, 272], "dest": [256, 304]},\n' +
    '                {"type": "curve", "src": [256, 304], "dest": [272, 320], "arcrad": 16, "arcdir": 0},\n' +
    '                {"type": "straight", "src": [272, 320], "dest": [336, 320]},\n' +
    '                {"type": "curve", "src": [336, 320], "dest": [352, 304], "arcrad": 16, "arcdir": 0},\n' +
    '                {"type": "straight", "src": [352, 304], "dest": [352, 256]}\n' +
    '            ]\n' +
    '       }\n' +
    '    ],\n' +
    '    "stations": [\n' +
    '        {\n' +
    '            "label": "Owings Mills",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station1",\n' +
    '            "location": [64, 64],\n' +
    '            "labeloffset": [-6, 6]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Old Court",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station1",\n' +
    '            "location": [86, 86],\n' +
    '            "labeloffset": [-6, 6]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Milford Mill",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station1",\n' +
    '            "location": [108, 108],\n' +
    '            "labeloffset": [-6, 6]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Reisterstown Plz",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station1",\n' +
    '            "location": [130, 130],\n' +
    '            "labeloffset": [-6, 6]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Rogers Av",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station1",\n' +
    '            "location": [152, 152],\n' +
    '            "labeloffset": [-6, 6]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "West Cold Spring",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station1",\n' +
    '            "location": [174, 174],\n' +
    '            "labeloffset": [-6, 6]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Mondawmin",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station1",\n' +
    '            "location": [196, 196],\n' +
    '            "labeloffset": [-6, 6]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Penn North",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station1",\n' +
    '            "location": [218, 218],\n' +
    '            "labeloffset": [-6, 6]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Upton",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station1",\n' +
    '            "location": [240, 240],\n' +
    '            "labeloffset": [-6, 6]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "State Center",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station1",\n' +
    '            "location": [256, 272],\n' +
    '            "labeloffset": [-8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Lexington Market",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station1",\n' +
    '            "location": [256, 296],\n' +
    '            "labeloffset": [-8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Charles Ctr",\n' +
    '            "textanchor": "middle",\n' +
    '            "type": "station1",\n' +
    '            "location": [288, 320],\n' +
    '            "labeloffset": [0, 12]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Shot Tower/Market Pl",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station1",\n' +
    '            "location": [336, 320],\n' +
    '            "labeloffset": [-6, 12]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Johns Hopkins Hospital",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station1",\n' +
    '            "location": [352, 256],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       }\n' +
    '    ]\n' +
    '}'
}