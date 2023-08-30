var PSD = require("psd");
var psd1 = PSD.fromFile("psd-files/Kahala-Q1.psd");
var psd2 = PSD.fromFile("psd-files/ML-WL-INSIDE.psd");

psd1.parse();
psd2.parse();
