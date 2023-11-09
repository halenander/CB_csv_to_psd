var activeDoc = app.activeDocument;
var layers = activeDoc.artLayers;

var fsale = layers.add();
fsale.name = "For Sale C1"
fsale.kind = LayerKind.TEXT;

var escrow = layers.add();
escrow.name = "In Escrow C1"
escrow.kind = LayerKind.TEXT;

// var col3 = layers.add();
// col3.name = "Column 3"
// col3.kind = LayerKind.TEXT;

// var col4 = layers.add();
// col4.name = "Column 4"
// col4.kind = LayerKind.TEXT;

//set content color
var contentColor = new SolidColor();
var rgb = contentColor.rgb;
rgb.red = 58;
rgb.green = 59;
rgb.blue = 59;

//for sale color
var fsaleColor = new SolidColor();
var rgb = fsaleColor.rgb;
rgb.red = 7;
rgb.green = 120;
rgb.blue = 2;

//in escrow color
var escrowColor = new SolidColor();
var rgb = escrowColor.rgb;
rgb.red = 85;
rgb.green = 100;
rgb.blue = 100;

//sold color
var soldColor = new SolidColor();
var rgb = soldColor.rgb;
rgb.red = 151;
rgb.green = 0;
rgb.blue = 0;


var textItem = col1.textItem;
textItem.font = 'Constantine';//constantine, myriad pro
textItem.contents = "For sale";
textItem.size = 11;
textItem.color = fsaleColor;
textItem.justification = Justification.CENTER;
textItem.position = [2300, 550];

var textItem2 = col1.textItem;
textItem2.font = 'Myriad Pro';//constantine, myriad pro
textItem2.contents = "1 bed, 2 bath";
textItem2.size = 11;
textItem2.color = contentColor;
textItem2.justification = Justification.CENTER;
textItem2.position = [2300, 600];

//have 4 separate layers: for sale (title), escrow, sold, content (#baths, $$ etc)
//keep track of # of entries per column (maybe have new lines in between text??)
//build the content whilst scanning csv file (loop?)