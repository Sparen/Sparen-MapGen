"use strict"

function getFileContents(filepath) {
    console.log("getFileContents(): Running");
    var client = new XMLHttpRequest();
    client.open("GET", filepath, true);
    client.onreadystatechange = function () { //callback
        if (client.readyState == 4) {
            if (client.status == 200 || client.status == 0) {
                loadFileToTextArea(JSON.parse(client.responseText));
            }
        }
    };

    client.send();
    console.log("getFileContents(): Request Sent");
}

//Takes input JSON from file and plugs it in the textarea
function loadFileToTextArea(jsonobj) {
    document.getElementById("jsonbox").value = JSON.stringify(jsonobj);
}

//Return input without comments (to provide valid JSON)
function pruneComments(input) {
    console.log("DEBUG: input = \n" + input);
    var output = "";
    var splitinput = input.split("\n");
    console.log("DEBUG: splitinput = \n" + splitinput);
    //for all lines in input, add to output if OK
    for (var i = 0; i < splitinput.length; i += 1) {
        var tempstr = splitinput[i];
        if (tempstr.length > 2) { //Actually contains something
            if (tempstr.charAt(0) !== '/' && tempstr.charAt(1) !== '/') {
                //add to output, make sure to add back the new line for formatting purposes
                output = output + tempstr + "\n";
            }
        } else {
            //add to output
            output = output + tempstr + "\n";
        }
    }
    console.log("DEBUG: output = \n" + output);
    return output;
}

//Setup first time on load. Defaults to Baltimore
function setup() {
    //Initialize contents of text area
    document.getElementById("jsonbox").value = genPrefab_Baltimore();
}

//Generalized setup function
function loadPrefab(city) {
    if (city === "Baltimore") {
        document.getElementById("jsonbox").value = genPrefab_Baltimore();
    }
}

function mapgen() {
    console.log("mapgen(): Running");

    //First, obtain the raw JSON object from the text area
    var rawinput = document.getElementById("jsonbox").value;
    var input = pruneComments(rawinput);
    var mapobj = JSON.parse(input);

    var svg = '<svg xmlns="http://www.w3.org/2000/svg"' +
        'preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" version="1.1"' +
        'xmlns:xlink="http://www.w3.org/1999/xlink">';

    svg += '<rect x="0" y="0" height="' + mapobj.svgheight + '" width="' + mapobj.svgwidth + '" fill="' + mapobj.bgcolor + '"></rect>';

    var goffset = mapobj.globaloffset;
    var maplines = mapobj.lines;
    for (var i = 0; i < maplines.length; i += 1) {
        var lineobj = maplines[i];
        var linepath = '<path stroke="' + lineobj.linecolor + '" stroke-width="' + lineobj.linewidth + '" fill="none" d="';
        var linepathcomponents = lineobj.path;
        for (var j = 0; j < linepathcomponents.length; j += 1) {
            var lpcobj = linepathcomponents[j];
            linepath += 'M ' + (lpcobj.src[0] + goffset[0]) + ' ' + (lpcobj.src[1] + goffset[1]) + ' ';
            if (lpcobj.type === "straight") {
                linepath += 'L ' + (lpcobj.dest[0] + goffset[0]) + ' ' + (lpcobj.dest[1] + goffset[1]) + ' ';
            } else if (lpcobj.type === "curve") {
                linepath += 'A ' + lpcobj.arcrad + ' ' + lpcobj.arcrad + ' 1 0 ' + lpcobj.arcdir + ' ' + (lpcobj.dest[0] + goffset[0]) + ' ' + (lpcobj.dest[1] + goffset[1]) + ' ';
            } //else if custom svg
        }
        linepath += '"></path>';
        svg += linepath;
    }

    var mapstations = mapobj.stations;
    for (var i = 0; i < mapstations.length; i += 1) {
        var stationobj = mapstations[i];
        //We need to figure out what the map type object is
        var typeID = stationobj.type;
        var typeobj;
        for (var j = 0; j < mapobj.stationtypes.length; j += 1) {
            if (mapobj.stationtypes[j].id === typeID) {
                typeobj = mapobj.stationtypes[j];
            }
        }
        if (typeobj === undefined || typeobj === null) {
            alert("No station type was found for " + typeID + ", for station " + stationobj.label);
        }
        //Generate SVG
        var stationsvg = '';
        if (typeobj.stationformat === "circle") {
            stationsvg += '<circle cx="' + (stationobj.location[0] + goffset[0]) + '" cy="' + (stationobj.location[1] + goffset[1]) + '" r="' + typeobj.stationrad + '" fill="' + typeobj.stationcolor + '" stroke="' + typeobj.stationstrokecolor + '" stroke-width="' + typeobj.stationstrokewidth + '"></circle>';
        } else if (typeobj.stationformat === "square") {
            stationsvg += '<rect x="' + (stationobj.location[0] + goffset[0] - typeobj.stationrad) + '" y="' + (stationobj.location[1] + goffset[1] - typeobj.stationrad) + '" height="' + (typeobj.stationrad * 2) + '" width="' + (typeobj.stationrad * 2) + '" fill="' + typeobj.stationcolor + '" stroke="' + typeobj.stationstrokecolor + '" stroke-width="' + typeobj.stationstrokewidth + '"></rect>';
        } else if (typeobj.stationformat === "custom") {
            //TODO
        }

        svg += stationsvg;

        //Now handle the label
        var labelsvg = '<text x="' + (stationobj.location[0] + goffset[0] + stationobj.labeloffset[0]) + '" y="' + (stationobj.location[1] + goffset[1] + stationobj.labeloffset[1]) + '" font-family="' + mapobj.stationlabelfont + '" font-size="' + mapobj.stationlabelfontsize + '" fill="black" dominant-baseline="central" text-anchor="' + stationobj.textanchor + '">' + stationobj.label + '</text>';
        svg += labelsvg;
    }

    svg += '</svg>';

    document.getElementById("displaybox").innerHTML = svg;
}