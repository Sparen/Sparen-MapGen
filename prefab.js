"use strict"

function genPrefab_FirstTimeUser() {
    return '// Welcome to mapgen, a tool for generating simple SVG transit maps.\n' +
    '// To start, check out a premade map for examples.\n' +
    '// Copyright Andrew Fan 2017\n\n';
}

function genPrefab_Baltimore() {
    return '// Welcome to mapgen, a tool for generating simple SVG transit maps.\n' +
    '// All lines prefixed with // as the VERY FIRST TWO CHARACTERS ONLY will be ignored upon submit.\n\n' +
    '// Usage instructions:\n// First, declare your desired height and width after svgheight and svgwidth, respectively.\n' +
    '// Next, state the default background color for your entire canvas under bgcolor.\n' +
    '// If you would like to shift the entirety of the map over, use globaloffset.\n\n' +
    '// In stationtypes, you define station icons. ID is the name you use to refer to a given type.\n' +
    '// stationformat is either "circle" or "square". stationrad will be the radius for circle and half the length of a side for square.\n' +
    '// If you don\'t want a border, set stroke width to 0.\n\n' +
    '// Lines are defined using path segments.\n' +
    '// Copyright Andrew Fan 2017\n\n' +
    '{\n' +
    '    "svgwidth": 512,\n' +
    '    "svgheight": 512,\n' +
    '    "globaloffset": [24, -16],\n' +
    '    "bgcolor": "#FFFFEE",\n' +
    '    "stationlabelfont": "Helvetica",\n' +
    '    "stationlabelfontsize": "10px",\n' +
    '    "stationtypes": [\n' +
    '        {\n' +
    '            "id": "station1",\n' +
    '            "stationformat": "circle",\n' +
    '            "stationrad": 5,\n' +
    '            "stationstrokewidth": 0.5,\n' +
    '            "stationcolor": "#FFFFFF",\n' +
    '            "stationstrokecolor": "#44FF44"\n' +
    '        },\n' +
    '        {\n' +
    '            "id": "station2",\n' +
    '            "stationformat": "square",\n' +
    '            "stationrad": 2,\n' +
    '            "stationstrokewidth": 0.5,\n' +
    '            "stationcolor": "#FFFFFF",\n' +
    '            "stationstrokecolor": "#CCCCCC"\n' +
    '        },\n' +
    '        {\n' +
    '            "id": "station3",\n' +
    '            "stationformat": "square",\n' +
    '            "stationrad": 2.5,\n' +
    '            "stationstrokewidth": 0.5,\n' +
    '            "stationcolor": "#FFFFFF",\n' +
    '            "stationstrokecolor": "#CCCCCC"\n' +
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
    '       },\n' +
    '       {\n' +
    '            "id": "Baltimore Yellow Line Border",\n' +
    '            "linecolor": "#CCCCCC",\n' +
    '            "linewidth": 4,\n' +
    '            "path": [\n' +
    '                {"type": "straight", "src": [262.5, 28], "dest": [262.5, 489.5]},\n' +
    '                {"type": "straight", "src": [262.5, 489.5], "dest": [228, 524]}\n' +
    '            ]\n' +
    '       },\n' +
    '       {\n' +
    '            "id": "Baltimore Yellow Line",\n' +
    '            "linecolor": "#FFFF22",\n' +
    '            "linewidth": 3,\n' +
    '            "path": [\n' +
    '                {"type": "straight", "src": [262.5, 28], "dest": [262.5, 489.5]},\n' +
    '                {"type": "straight", "src": [262.5, 489.5], "dest": [228, 524]}\n' +
    '            ]\n' +
    '       },\n' +
    '       {\n' +
    '            "id": "Baltimore Blue Line",\n' +
    '            "linecolor": "#6666FF",\n' +
    '            "linewidth": 3,\n' +
    '            "path": [\n' +
    '                {"type": "straight", "src": [265.5, 28], "dest": [265.5, 524]}\n' +
    '            ]\n' +
    '       },\n' +
    '       {\n' +
    '            "id": "Baltimore Light Rail Shuttle",\n' +
    '            "linecolor": "#FF6666",\n' +
    '            "linewidth": 3,\n' +
    '            "path": [\n' +
    '                {"type": "straight", "src": [284, 240], "dest": [267.5, 240]},\n' +
    '                {"type": "straight", "src": [268.5, 239], "dest": [268.5, 364]}\n' +
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
    '            "label": "Charles",\n' +
    '            "textanchor": "middle",\n' +
    '            "type": "station1",\n' +
    '            "location": [288, 320],\n' +
    '            "labeloffset": [0, 12]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Center",\n' +
    '            "textanchor": "middle",\n' +
    '            "type": "station1",\n' +
    '            "location": [288, 320],\n' +
    '            "labeloffset": [0, 22]\n' +
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
    '       },\n' +
    '       {\n' +
    '            "label": "Hunt Valley",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 32],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Pepper Rd",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 48],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "McCormick Rd",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 64],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Gilroy Rd",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 80],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Warren Rd",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 96],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Timonium",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 112],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Timonium Business Park",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 128],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Lutherville",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 144],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Falls Rd",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 160],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Mt. Washington",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 176],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Cold Spring Ln",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 192],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Woodberry",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 208],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "North Av",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 224],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Penn Station",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [280, 240],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "U Baltimore/",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station3",\n' +
    '            "location": [265.5, 256],\n' +
    '            "labeloffset": [8, -5]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Mt. Royal",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station3",\n' +
    '            "location": [265.5, 256],\n' +
    '            "labeloffset": [8, 5]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Cultural Center",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station3",\n' +
    '            "location": [265.5, 272],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Centre Street",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station3",\n' +
    '            "location": [265.5, 284],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Lexington Mkt",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station3",\n' +
    '            "location": [265.5, 296],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "University Center/Baltimore St.",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station3",\n' +
    '            "location": [265.5, 328],\n' +
    '            "labeloffset": [-8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Convention Center",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station3",\n' +
    '            "location": [265.5, 344],\n' +
    '            "labeloffset": [-8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Camden Yards",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station3",\n' +
    '            "location": [265.5, 360],\n' +
    '            "labeloffset": [-8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Hamburg Street",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 376],\n' +
    '            "labeloffset": [-8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Westport",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 392],\n' +
    '            "labeloffset": [-8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Cherry Hill",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 408],\n' +
    '            "labeloffset": [-8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Patapsco Av.",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 424],\n' +
    '            "labeloffset": [-8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Baltimore Highlands",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 440],\n' +
    '            "labeloffset": [-8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Nursery Rd.",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 456],\n' +
    '            "labeloffset": [-8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "North Linthicum",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 472],\n' +
    '            "labeloffset": [-8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Linthicum",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [264, 488],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Ferndale",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [265.5, 504],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "Cromwell Station/Glen Burnie",\n' +
    '            "textanchor": "start",\n' +
    '            "type": "station2",\n' +
    '            "location": [265.5, 520],\n' +
    '            "labeloffset": [8, 0]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "BWI Business Park",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station2",\n' +
    '            "location": [248, 504],\n' +
    '            "labeloffset": [-6, -6]\n' +
    '       },\n' +
    '       {\n' +
    '            "label": "BWI Airport",\n' +
    '            "textanchor": "end",\n' +
    '            "type": "station2",\n' +
    '            "location": [232, 520],\n' +
    '            "labeloffset": [-6, -6]\n' +
    '       }\n' +
    '    ]\n' +
    '}'
}