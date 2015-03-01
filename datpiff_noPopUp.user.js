// ==UserScript==
// @name			Datpiff - no pop up
// @description		This script opens the datpiff mixtape player launched by pressing the "listen" button in a same window rather than a new popup.
// @namespace		http://eliath.biz/
// @match			http://www.datpiff.com/*-mixtape.*.html*
// @run-at			document-end
//
// @version			2.1
// 
// ==/UserScript==

console.log("Datpiff mixtape detected");
unsafeWindow.openMixtape = function(media_id, track) {
	console.log("* openMixtape(...) OVERRIDE *");
	track = (track) ? track : 1;
	var url = 'http://www.datpiff.com/pop-mixtape-player-2014.2.php?mediaid='+ media_id + '&trackid=' + track;
	unsafeWindow.open(url, "_self");
};
