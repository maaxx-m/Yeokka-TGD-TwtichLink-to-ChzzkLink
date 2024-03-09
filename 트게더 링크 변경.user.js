// ==UserScript==
// @name         트게더 링크 변경
// @name:ko      트게더 링크 변경
// @name:en      TGD Twtich Link to Chzzk
// @namespace    http://tampermonkey.net/
// @version      2024-03-09-debugging-1906
// @description  (여까)트게더의 트위치링크를 치지직 링크로 변경
// @author       Maaxx
// @match        *https://tgd.kr/s/yeokka*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tgd.kr
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==
/* global $ */
function main(data){
// append jquery script to head
const head = document.head || document.getElementsByTagName('head')[0],
s = document.createElement('script');
s.type = 'text/javascript';
s.innerHTML = data;
head.appendChild(s);
// if page is fully loaded execute your program
$(document).ready(function(){
'use strict'
/* main scripts */
//add css to link
    var cssChzzk=`
    <style type="text/css">
    #board-info #board-info-bottom a:nth-child(3) {
        color: #0d3 !important;
	transition: ease all .3s;
    }
    #board-info #board-info-bottom a:nth-child(3):hover {
    	filter: drop-shadow(0 0 2px #0d3);
     }
	.fa.fa-twitch {
		text-indent: -9999px;
		overflow: hidden;
		transform: translateY(2px);
	}
	.fa.fa-twitch::before {
		display: block;
		content: url('data:image/svg+xml;utf-8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><polygon points="5.51 0 10.35 0 8.96 1.98 13.78 1.98 7.79 10.32 13.22 10.32 13.22 14 .22 14 6.32 5.54 1.48 5.54 5.51 0" style="fill: none; stroke: limegreen; stroke-width: .75px;"></polygon></svg>');
		width: 14px;
		height: 14px;
	}
    </style>
    `;
	
/* tgd scripts */
//google tag manager
var GoogleTag = $(
	'<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N2WRQDW4');</script>' + 
	'<script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-8TSMVC38YR');gtag('set', {'userId': '71574765'});window.USED_GA_MAGE = false;</script>' + 
	'<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>' + 
	'<script>window.googletag = window.googletag || {cmd: []};if(googletag && googletag.cmd) googletag.cmd.push(function(){googletag.defineSlot('/21681211024/Board_1_Top_Center_PC', [728, 90], 'div-gpt-ad-1598162954016-0').addService(googletag.pubads());googletag.defineSlot('/21681211024/Board_1_Middle_Left_PC', [160, 600], 'div-gpt-ad-1598163232611-0').addService(googletag.pubads());googletag.pubads().enableSingleRequest();googletag.enableServices();});</script>'
);
$('head').append(GoogleTag);
//GTM Noscript
var GTMN = $(
'<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2WRQDW4" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>'
);
GTMN.appendTo(#top);

var tgdScripts = [
	'https://cdn-assets.tgd.kr/js/tgd.base.min.js?v=b351',
	'https://cdn-assets.tgd.kr/js/16f98521b2a9c4bc79e4551a240b555c.min.js?v=b351'
	];
for (var i = 0; i < tgdScripts.length; i++) {
	var appendScript = document.createElement('script');
	appendScript.src = tgdScripts[i];
	$('body').append(appendScript);
}

/* change link to chzzk */
    $('head').append(cssChzzk);
    $('#board-info-bottom a:nth-child(3)').attr('href', 'https://chzzk.naver.com/3c9fe16c70cf2f4a5274fa69307f0f89');
});
}

// Get html text of the url
// main runs as soon as the site responds with status 200
function httpGET(url, callback, responseType='text') {
var request = new XMLHttpRequest();
request.responseType = responseType;
request.onreadystatechange = function () {
if (this.readyState == 4 && this.status == 200) {
callback(this.response);
}
};
request.open('GET', url, true);
request.send(null);
};

// Type in full url and the callback function
httpGET('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', main);
