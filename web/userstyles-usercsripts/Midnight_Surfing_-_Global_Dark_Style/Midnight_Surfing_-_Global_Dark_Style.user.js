// ==UserScript==
// @name          Midnight Surfing - Global Dark Style
// @namespace     http://userstyles.org
// @description	  Just my attempt at a global dark style. Bound to mess things up.  Covers About:blank, About:neterror.  The code is <s>uncouth</s> crap IMO, but it works.
// @author        luckymouse
// @homepage      http://userstyles.org/styles/23516
// @run-at        document-start
// ==/UserScript==
(function() {
var css = "";
css += "@namespace html url(http://www.w3.org/1999/xhtml);\n@namespace xul url(http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);\n\n\nbrowser[type=\"content-primary\"] {background-color: #141414 !important;}";
if (false || (document.location.href.indexOf("http://") == 0) || (document.location.href.indexOf("https://") == 0) || (document.location.href.indexOf("ftp://") == 0) || (document.location.href.indexOf("file://") == 0))
	css += "*:not(:empty):not([onclick*=\"open\"]):not(SPAN):not([class*=\"stars\"]):not([id*=\"stars\"]):not([id=\"rating\"]):not([class=\"rating\"]):not([class*=\"SPRITE\"]):not([id*=\"SPRITE\"]):not([id*=\"lbImage\"])\n\n{ background-image: none !important }\n\n\nHTML, BODY { background: none #141414 !important }\n\n\nBODY * {background-color: transparent !important}\n\n\nDIV[id] {background-color: inherit !important}\n\n\nSPAN:not(:empty):not([class*=\"icon\"]):not([id*=\"icon\"]):not([class*=\"star\"]):not([id*=\"star\"]):not([id*=\"rating\"]):not([class*=\"rating\"]):not([class*=\"Sprite\"]):not([class*=\"sprite\"]) {\n\nbackground: none transparent !important;\nborder-color: #000 !important}\n\n\nhtml:root > BODY > * > * > * > *:not(INPUT):not([onclick]) > DIV:not(:empty):not([id])\n\n{background: none #1c1c1c !important}\n\n\n\n\nSUMMARY, DETAILS {background-color: inherit !important}\n\nABBR, PROGRESS, TIME, LABEL,\n.date {color: #CDEFC2 !important}\n\nMARK,\nCODE, PRE,\nBLOCKQUOTE,\n[class*=\"quote\"],\nTD[style*=\"inset\"][class=\"alt2\"]   { background-color: #00090F !important }\n\n\n\n\n\n\nHEADER, #header {background: -moz-linear-gradient(#333,#141414) transparent !important;}\n#header h1 {background-color: transparent !important;}\n\nH1, H2  { \n\nbackground: none #28313E !important;\nborder-radius: 5px !important;\n-moz-border-radius: 5px !important;\n-webkit-border-radius: 5px !important;} \n\n\nH3, H4 {\n\nbackground: none #2A3731 !important;\nborder-radius: 5px !important;\n-moz-border-radius: 5px !important;\n-webkit-border-radius: 5px !important;} \n\nH5, H6 {background: none #372A2A !important}\n\n\n\n\nDT     {background-color: #2B3135 !important}\nDL, DD {background-color: #232323 !important}\nLI, UL {background-color: inherit !important}\n\nLI A:not([class*=\"icon\"]):not([id*=\"icon\"]):not([onclick]),\nDT A:not([class*=\"icon\"]):not([id*=\"icon\"]):not([onclick])\n\n{background-image: none !important; text-indent: 0 !important}\n\n\n\nLI[class*=\"item\"] A:hover,\nLI[class*=\"item\"]:hover,\n\n[class*=\"menuitem\"]:hover  \n\n{background-color: #2E2B2F !important}\n\n\n\nTABLE {background-color: #232323 !important; border-color: #333 !important}\nTABLE TABLE {background: #191919 !important;}\n\nTH, CAPTION {background-color: #353535 !important}\n\n\n\n\n\nINPUT *, TEXTAREA * {color: #DDD !important;} \n\nHTML BODY INPUT:not([type=\"image\"]), button,\nHTML BODY TEXTAREA {\n\nbackground: none #353535 !important; \n-moz-appearance: none !important;\n-webkit-appearance: none !important;\ncolor:  #DDD  !important;\nborder: solid 1px #777 !important;\nborder-radius: 0 !important;\n-moz-border-radius: 0 !important;\n-webkit-border-radius: 0 !important;\nopacity: 1 !important;}\n\n\n\nHTML BODY INPUT[type=\"checkbox\"] {-moz-appearance: checkbox !important; -webkit-appearance: checkbox !important;}\nHTML BODY INPUT[type=\"radio\"]    {-moz-appearance: radio !important; -webkit-appearance: radio !important;}\n\n\n\nHTML:root INPUT[type=\"button\"],\nHTML:root INPUT[type=\"submit\"],\nHTML:root INPUT[type=\"reset\"],\nHTML:root BUTTON {\n\ncolor: #EEE !important;\nbackground-color: #222437 !important;\n\n-moz-box-shadow: inset 0 1px rgba(255,255,255,0.2), inset 0 10px rgba(255,255,255,0.1), inset 0 10px 20px rgba(255,255,255,0.15), inset 0 -15px 30px rgba(0,0,0,0.2) !important;\n-webkit-box-shadow: inset 0 1px rgba(255,255,255,0.2), inset 0 10px rgba(255,255,255,0.1), inset 0 10px 20px rgba(255,255,255,0.15), inset 0 -15px 30px rgba(0,0,0,0.2) !important;}\n\nHTML:root INPUT[type=\"button\"]:hover,\nHTML:root INPUT[type=\"submit\"]:hover,\nHTML:root INPUT[type=\"reset\"]:hover,\nHTML:root BUTTON:hover {\n\ncolor: #FFF !important;\nbackground-color: #31344F !important;\nborder-color: #5F687F !important;\n\n-moz-box-shadow: inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3) !important;\n-webkit-box-shadow:  inset 0 1px rgba(255,255,255,0.3), inset 0 10px rgba(255,255,255,0.2), inset 0 10px 20px rgba(255,255,255,0.25), inset 0 -15px 30px rgba(0,0,0,0.3) !important;}\n\nHTML:root INPUT[type=\"image\"] {opacity: .85 !important}\nHTML:root INPUT[type=\"image\"]:hover {opacity: .95 !important}\n\n\n\nSELECT, OPTION, optgroup{\n\nbackground: none #383838 !important;\nborder-color:#555 !important;\ncolor:#f1f1f1 !important;\n-moz-appearance: none !important;}\n\n\n\nADDRESS {background: none #333 !important}\nHR   {background: none #444 !important}\n.current {color: #FFF !important;} \n\n\n\nIMG[src*=\"spacer\"]:empty,\n[id*=\"round\"]:empty,\n[id*=\"bottom\"]:empty, [class*=\"bottom\"]:empty, [class*=\"Bottom\"]:empty,\n[id*=\"top\"]:empty, [class*=\"top\"]:empty, [class*=\"Top\"]:empty,\n[class*=\"spacer\"]:empty\n\n{background-image: none !important;}\n\n\n\nNAV, \nMENU,\n\n\n\nHTML BODY [class*=\"open\"],\nHTML BODY [id*=\"Dropdown\"],\nHTML BODY [id*=\"dropdown\"],\nHTML BODY [class*=\"Dropdown\"],\nHTML BODY [class*=\"dropdown\"],\nHTML BODY [id*=\"menu\"]:not(SELECT),\nHTML BODY [class*=\"menu\"]:NOT(SELECT),\nHTML BODY [class*=\"tooltip\"],\nHTML BODY [class*=\"popup\"], \nHTML BODY [id*=\"popup\"],\n\n\n\nHTML BODY [class*=\"note\"],\nHTML BODY [class*=\"detail\"],\nHTML BODY [class*=\"description\"]\n\n{background-color: #232323 !important}\n\n\n[class*=\"content\"], [class*=\"container\"] {background-color: #1c1c1c !important}\n\n\n\n[id*=\"masthead\"] a,[id*=\"header\"] a,\n[id*=\"logo\"] a, [class*=\"logo\"] a\n\n{text-indent: 0 !important;}\n\n\n\nHTML:root BODY [class*=\"layer\"],\nHTML:root BODY #lightbox-nav,\nHTML:root BODY #imageContainer {background-color: transparent !important}\n\n\n\n\n\n* {\ncolor: #CCC !important; \nborder-color: #444 !important;\noutline-color: #444 !important;\ntext-shadow: none !important;}\n\nhtml *:after,\nhtml *:before\n\n{color: #CCC !important;\nborder-color: #666 !important;\nbackground: none transparent !important}\n\n\n\n\na:link,\na:link *:not(IMG){ \n\ncolor: #B1CBF7 !important;\nbackground-color: transparent !important;\nborder-color: #666 !important;}\n\na:visited, \na:visited * {color: #CDB4E7 !important;}\n\na:hover,\na:hover *:not(IMG){\n\ncolor: #FFE900 !important; \nbackground-color: #363037 !important;\nborder-color: #999 !important}\n\nhtml [href*=\"#\"]:hover {color: #FFE900 !important; background-color: transparent !important;}\n\n\n\n\n[onclick],\n[ondblclick],\n[onmousedown]\n\n{color: #DFD5BC !important;\ntext-indent: 0 !important}\n\n[onclick]:hover,\n[ondblclick]:hover,\n[onmousedown]:hover\n\n{color: #FEFF97 !important;}\n\n\n\nIMG  { opacity: .75 !important;}\nIMG:hover  { opacity: 1 !important; background-color: #888 !important; }\nsvg {background: none #666 !important;}\n\n\n::-moz-selection {background-color: #626F61 !important; color: #F6F7B9 !important;}\n\n\n\n\n.g .r {background-color: transparent !important;}\n\n\ndiv.vsc:hover > .vspi, div.vso > .vspi {background: none transparent !important; border: none !important;}";
if (false || (location.href.replace(location.hash,'') == "about:newtab"))
	css += "window {background: #141414 !important;}\n\n#newtab-scrollbox {\nbackground-color: transparent !important;\nbackground-image: \n    url(\"chrome://browser/skin/newtab/noise.png\"),\n    -moz-linear-gradient(transparent,transparent) !important }\n\n.newtab-title {background-color: rgba(0,0,0,.75) !important; color: #eee !important;}";
if (false || (location.href.replace(location.hash,'') == "about:blank"))
	css += "html, html * {\n  background: none #141414 !important;\n  color: #CCC !important;}";
if (false || (document.location.href.indexOf("about:neterror") == 0))
	css += "html, body {background-color: #353535 !important; color: #CCC !important}\n#errorPageContainer {background-color: #222 !important; border-color: #666 !important}\n#errorPageContainer button {opacity: .8 !important}\n\n\n#resurrect {background-color: #333 !important; border-color: #000 !important}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
