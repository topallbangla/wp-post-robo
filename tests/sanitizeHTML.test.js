import fs from 'fs';
import sanitizeHTML from '../lib/sanitizeHTML.js';


const html = `
<!doctype html >
<!--[if IE 8]>    <html class="ie8" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en-US"> <!--<![endif]-->
<head><script data-no-optimize="1" type="3946b4c98583e17aafee7bf2-text/javascript">var litespeed_docref=sessionStorage.getItem("litespeed_docref");litespeed_docref&&(Object.defineProperty(document,"referrer",{get:function(){return litespeed_docref}}),sessionStorage.removeItem("litespeed_docref"));</script>
<title>মায়াবন_বিহারিনী_হরিণী ২০ #writer_Neel_Noor - গল্পের শহর ডট কম</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="pingback" href="https://golpershohor.com/xmlrpc.php" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<script id="cookieyes" type="3946b4c98583e17aafee7bf2-text/javascript" src="https://cdn-cookieyes.com/client_data/41820d3011aaa8f13fff2f7a/script.js"></script><link rel="icon" type="image/png" href="https://golpershohor.com/wp-content/uploads/2022/03/golper-sohor-03.png">

<link rel="canonical" href="https://golpershohor.com/2024/02/20/মায়াবন_বিহারিনী_হরিণী-২/" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="article" />
<meta property="og:title" content="মায়াবন_বিহারিনী_হরিণী ২০ #writer_Neel_Noor - গল্পের শহর ডট কম" />
<meta property="og:description" content="#মায়াবন_বিহারিনী_হরিণী ২০ #writer_Neel_Noor হাওলাদার বাড়ি সম্পূর্ণ নীরব। বাসায় আছে মাত্র গুটি কয়েক মানুষ। হাসপাতালের করিডোরে সবাই দাঁড়িয়ে আছে, এ দাঁড়িয়ে থাকা না থাকার সমান, কেননা, একজন নারীর এই সময়টাতে তার স্বামীর প্রয়োজন সবচেয়ে!! কিন্তু আফসোস, অভাগীর স্বামী ই আজ নিখোঁজ!! রাজ ছাড়া বাড়ির প্রায় সবাই ই এখানে। রুদ্র ওটি তে আছে, মায়ার দায়িত্ব টা সে [&hellip;]" />
<meta property="og:url" content="https://golpershohor.com/2024/02/20/মায়াবন_বিহারিনী_হরিণী-২/" />
<meta property="og:site_name" content="গল্পের শহর ডট কম" />
<meta property="article:publisher" content="https://www.facebook.com/golpershohor.official/" />
<meta property="article:published_time" content="2024-02-20T18:52:52+00:00" />
<meta property="og:image" content="https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389.jpg" />
<meta property="og:image:width" content="690" />
<meta property="og:image:height" content="400" />
<meta property="og:image:type" content="image/jpeg" />
<meta name="author" content="admin1" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="admin1" />
<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/","url":"https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/","name":"মায়াবন_বিহারিনী_হরিণী ২০ #writer_Neel_Noor - গল্পের শহর ডট কম","isPartOf":{"@id":"https://golpershohor.com/#website"},"primaryImageOfPage":{"@id":"https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/#primaryimage"},"image":{"@id":"https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/#primaryimage"},"thumbnailUrl":"https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389.jpg","datePublished":"2024-02-20T18:52:52+00:00","dateModified":"2024-02-20T18:52:52+00:00","author":{"@id":"https://golpershohor.com/#/schema/person/4a75714fb58b87fff2e92d5b369e7591"},"breadcrumb":{"@id":"https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/#primaryimage","url":"https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389.jpg","contentUrl":"https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389.jpg","width":690,"height":400},{"@type":"BreadcrumbList","@id":"https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://golpershohor.com/"},{"@type":"ListItem","position":2,"name":"মায়াবন_বিহারিনী_হরিণী ২০ #writer_Neel_Noor"}]},{"@type":"WebSite","@id":"https://golpershohor.com/#website","url":"https://golpershohor.com/","name":"গল্পের শহর ডট কম","description":"নিত্য নতুন গল্প পড়ার জন্য আমাদের সাথে একটিভ থাকুন।","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://golpershohor.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Person","@id":"https://golpershohor.com/#/schema/person/4a75714fb58b87fff2e92d5b369e7591","name":"admin1","image":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://golpershohor.com/#/schema/person/image/","url":"https://secure.gravatar.com/avatar/f2ee3fec24fa050d72f0319ec48bf4c9?s=96&d=mm&r=g","contentUrl":"https://secure.gravatar.com/avatar/f2ee3fec24fa050d72f0319ec48bf4c9?s=96&d=mm&r=g","caption":"admin1"},"sameAs":["https://golpershohor.com"],"url":"https://golpershohor.com/author/admin1/"}]}</script>

<link rel="dns-prefetch" href="//www.googletagmanager.com" />
<link rel="dns-prefetch" href="//fonts.googleapis.com" />
<link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
<link rel="alternate" type="application/rss+xml" title="গল্পের শহর ডট কম &raquo; Feed" href="https://golpershohor.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="গল্পের শহর ডট কম &raquo; Comments Feed" href="https://golpershohor.com/comments/feed/" />
<link rel="alternate" type="application/rss+xml" title="গল্পের শহর ডট কম &raquo; মায়াবন_বিহারিনী_হরিণী ২০ #writer_Neel_Noor Comments Feed" href="https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/feed/" />
<script type="3946b4c98583e17aafee7bf2-text/javascript">
/* <![CDATA[ */
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/golpershohor.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.4.2"}};
/*! This file is auto-generated */
!function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!n(e,"\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff","\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);
/* ]]> */
</script>
<style id="wp-emoji-styles-inline-css" type="text/css">

	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
</style>
<link rel="stylesheet" id="wp-block-library-css" href="https://golpershohor.com/wp-includes/css/dist/block-library/style.min.css?ver=6.4.2" type="text/css" media="all" />
<style id="classic-theme-styles-inline-css" type="text/css">
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
</style>
<style id="global-styles-inline-css" type="text/css">
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 11px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 32px;--wp--preset--font-size--x-large: 42px;--wp--preset--font-size--regular: 15px;--wp--preset--font-size--larger: 50px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}body .is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}body .is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}body .is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}body .is-layout-flex{flex-wrap: wrap;align-items: center;}body .is-layout-flex > *{margin: 0;}body .is-layout-grid{display: grid;}body .is-layout-grid > *{margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
.wp-block-navigation a:where(:not(.wp-element-button)){color: inherit;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
.wp-block-pullquote{font-size: 1.5em;line-height: 1.6;}
</style>
<link rel="stylesheet" id="td-plugin-multi-purpose-css" href="https://golpershohor.com/wp-content/plugins/td-composer/td-multi-purpose/style.css?ver=f5944f875d40373a71eebc33dc72056b" type="text/css" media="all" />
<style type="text/css">@font-face {font-family:Open Sans;font-style:normal;font-weight:400;src:url(/cf-fonts/s/open-sans/5.0.20/greek/400/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:400;src:url(/cf-fonts/s/open-sans/5.0.20/greek-ext/400/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:400;src:url(/cf-fonts/s/open-sans/5.0.20/hebrew/400/normal.woff2);unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:400;src:url(/cf-fonts/s/open-sans/5.0.20/latin-ext/400/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:400;src:url(/cf-fonts/s/open-sans/5.0.20/cyrillic/400/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:400;src:url(/cf-fonts/s/open-sans/5.0.20/cyrillic-ext/400/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:400;src:url(/cf-fonts/s/open-sans/5.0.20/vietnamese/400/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:400;src:url(/cf-fonts/s/open-sans/5.0.20/latin/400/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:600;src:url(/cf-fonts/s/open-sans/5.0.20/latin/600/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:600;src:url(/cf-fonts/s/open-sans/5.0.20/hebrew/600/normal.woff2);unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:600;src:url(/cf-fonts/s/open-sans/5.0.20/greek/600/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:600;src:url(/cf-fonts/s/open-sans/5.0.20/vietnamese/600/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:600;src:url(/cf-fonts/s/open-sans/5.0.20/latin-ext/600/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:600;src:url(/cf-fonts/s/open-sans/5.0.20/cyrillic/600/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:600;src:url(/cf-fonts/s/open-sans/5.0.20/cyrillic-ext/600/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:600;src:url(/cf-fonts/s/open-sans/5.0.20/greek-ext/600/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:700;src:url(/cf-fonts/s/open-sans/5.0.20/latin-ext/700/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:700;src:url(/cf-fonts/s/open-sans/5.0.20/cyrillic/700/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:700;src:url(/cf-fonts/s/open-sans/5.0.20/vietnamese/700/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:700;src:url(/cf-fonts/s/open-sans/5.0.20/greek-ext/700/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:700;src:url(/cf-fonts/s/open-sans/5.0.20/greek/700/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:700;src:url(/cf-fonts/s/open-sans/5.0.20/hebrew/700/normal.woff2);unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:700;src:url(/cf-fonts/s/open-sans/5.0.20/cyrillic-ext/700/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:700;src:url(/cf-fonts/s/open-sans/5.0.20/latin/700/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:300;src:url(/cf-fonts/s/open-sans/5.0.20/greek/300/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:300;src:url(/cf-fonts/s/open-sans/5.0.20/cyrillic/300/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:300;src:url(/cf-fonts/s/open-sans/5.0.20/greek-ext/300/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:300;src:url(/cf-fonts/s/open-sans/5.0.20/latin/300/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:300;src:url(/cf-fonts/s/open-sans/5.0.20/vietnamese/300/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:300;src:url(/cf-fonts/s/open-sans/5.0.20/latin-ext/300/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:300;src:url(/cf-fonts/s/open-sans/5.0.20/cyrillic-ext/300/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Open Sans;font-style:normal;font-weight:300;src:url(/cf-fonts/s/open-sans/5.0.20/hebrew/300/normal.woff2);unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic/400/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic-ext/400/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/greek/400/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/greek-ext/400/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/latin/400/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/vietnamese/400/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:400;src:url(/cf-fonts/s/roboto/5.0.11/latin-ext/400/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:500;src:url(/cf-fonts/s/roboto/5.0.11/vietnamese/500/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:500;src:url(/cf-fonts/s/roboto/5.0.11/latin-ext/500/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:500;src:url(/cf-fonts/s/roboto/5.0.11/greek/500/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:500;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic/500/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:500;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic-ext/500/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:500;src:url(/cf-fonts/s/roboto/5.0.11/greek-ext/500/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:500;src:url(/cf-fonts/s/roboto/5.0.11/latin/500/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic-ext/700/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/greek-ext/700/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/latin-ext/700/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/latin/700/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/vietnamese/700/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/greek/700/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:700;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic/700/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/greek/300/normal.woff2);unicode-range:U+0370-03FF;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic/300/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/cyrillic-ext/300/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/latin/300/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/latin-ext/300/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/vietnamese/300/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Roboto;font-style:normal;font-weight:300;src:url(/cf-fonts/s/roboto/5.0.11/greek-ext/300/normal.woff2);unicode-range:U+1F00-1FFF;font-display:swap;}</style>
<link rel="stylesheet" id="tds-front-css" href="https://golpershohor.com/wp-content/plugins/td-subscription/assets/css/tds-front.css?ver=1.4.4" type="text/css" media="all" />
<link rel="stylesheet" id="td-theme-css" href="https://golpershohor.com/wp-content/themes/Newspaper/style.css?ver=12.6" type="text/css" media="all" />
<style id="td-theme-inline-css" type="text/css">@media (max-width:767px){.td-header-desktop-wrap{display:none}}@media (min-width:767px){.td-header-mobile-wrap{display:none}}</style>
<link rel="stylesheet" id="td-legacy-framework-front-style-css" href="https://golpershohor.com/wp-content/plugins/td-composer/legacy/Newspaper/assets/css/td_legacy_main.css?ver=f5944f875d40373a71eebc33dc72056b" type="text/css" media="all" />
<link rel="stylesheet" id="td-standard-pack-framework-front-style-css" href="https://golpershohor.com/wp-content/plugins/td-standard-pack/Newspaper/assets/css/td_standard_pack_main.css?ver=849499de90f3875b7a342475ea325e90" type="text/css" media="all" />
<link rel="stylesheet" id="tdb_style_cloud_templates_front-css" href="https://golpershohor.com/wp-content/plugins/td-cloud-library/assets/css/tdb_main.css?ver=ca46607f0f63147990c8ac1f35d750e1" type="text/css" media="all" />
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></script>

<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://www.googletagmanager.com/gtag/js?id=UA-228316920-1" id="google_gtagjs-js" async></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" id="google_gtagjs-js-after">
/* <![CDATA[ */
window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
gtag('set', 'linker', {"domains":["golpershohor.com"]} );
gtag("js", new Date());
gtag("set", "developer_id.dZTNiMT", true);
gtag("config", "UA-228316920-1", {"anonymize_ip":true});
gtag("config", "G-N5XDX36CPQ");
/* ]]> */
</script>

<link rel="https://api.w.org/" href="https://golpershohor.com/wp-json/" /><link rel="alternate" type="application/json" href="https://golpershohor.com/wp-json/wp/v2/posts/46703" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://golpershohor.com/xmlrpc.php?rsd" />
<meta name="generator" content="WordPress 6.4.2" />
<link rel="shortlink" href="https://golpershohor.com/?p=46703" />
<link rel="alternate" type="application/json+oembed" href="https://golpershohor.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fgolpershohor.com%2F2024%2F02%2F20%2F%25e0%25a6%25ae%25e0%25a6%25be%25e0%25a6%25af%25e0%25a6%25bc%25e0%25a6%25be%25e0%25a6%25ac%25e0%25a6%25a8_%25e0%25a6%25ac%25e0%25a6%25bf%25e0%25a6%25b9%25e0%25a6%25be%25e0%25a6%25b0%25e0%25a6%25bf%25e0%25a6%25a8%25e0%25a7%2580_%25e0%25a6%25b9%25e0%25a6%25b0%25e0%25a6%25bf%25e0%25a6%25a3%25e0%25a7%2580-%25e0%25a7%25a8%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://golpershohor.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fgolpershohor.com%2F2024%2F02%2F20%2F%25e0%25a6%25ae%25e0%25a6%25be%25e0%25a6%25af%25e0%25a6%25bc%25e0%25a6%25be%25e0%25a6%25ac%25e0%25a6%25a8_%25e0%25a6%25ac%25e0%25a6%25bf%25e0%25a6%25b9%25e0%25a6%25be%25e0%25a6%25b0%25e0%25a6%25bf%25e0%25a6%25a8%25e0%25a7%2580_%25e0%25a6%25b9%25e0%25a6%25b0%25e0%25a6%25bf%25e0%25a6%25a3%25e0%25a7%2580-%25e0%25a7%25a8%2F&#038;format=xml" />
<link href="https://golpershohor.com/wp-content/plugins/bangla-web-fonts/solaiman-lipi/font.css" rel="stylesheet"> <style>
			body, article, h1, h2, h3, h4, h5, h6, textarea, input, select, .topbar, .main-menu, .breadcrumb, .copyrights-area, form span.required {
				font-family: 'SolaimanLipi', Arial, sans-serif !important;
			}
		</style>
<meta name="generator" content="Site Kit by Google 1.116.0" /><!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
<script type="3946b4c98583e17aafee7bf2-text/javascript">
        window.tdb_global_vars = {"wpRestUrl":"https:\/\/golpershohor.com\/wp-json\/","permalinkStructure":"\/%year%\/%monthnum%\/%day%\/%postname%\/"};
        window.tdb_p_autoload_vars = {"isAjax":false,"isAdminBarShowing":false,"autoloadScrollPercent":20,"postAutoloadStatus":"off","origPostEditUrl":null};
    </script>
<style id="tdb-global-colors">:root{--accent-color:#fff}</style>

<meta name="google-adsense-platform-account" content="ca-host-pub-2644536267352236">
<meta name="google-adsense-platform-domain" content="sitekit.withgoogle.com">


<script type="3946b4c98583e17aafee7bf2-text/javascript" async="async" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6468708806497207&amp;host=ca-host-pub-2644536267352236" crossorigin="anonymous"></script>


<script type="3946b4c98583e17aafee7bf2-text/javascript">
/* <![CDATA[ */

			( function( w, d, s, l, i ) {
				w[l] = w[l] || [];
				w[l].push( {'gtm.start': new Date().getTime(), event: 'gtm.js'} );
				var f = d.getElementsByTagName( s )[0],
					j = d.createElement( s ), dl = l != 'dataLayer' ? '&l=' + l : '';
				j.async = true;
				j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
				f.parentNode.insertBefore( j, f );
			} )( window, document, 'script', 'dataLayer', 'GTM-52H9QHR' );
			
/* ]]> */
</script>


<script type="3946b4c98583e17aafee7bf2-text/javascript">
    
    

	    var tdBlocksArray = []; //here we store all the items for the current page

	    // td_block class - each ajax block uses a object of this class for requests
	    function tdBlock() {
		    this.id = '';
		    this.block_type = 1; //block type id (1-234 etc)
		    this.atts = '';
		    this.td_column_number = '';
		    this.td_current_page = 1; //
		    this.post_count = 0; //from wp
		    this.found_posts = 0; //from wp
		    this.max_num_pages = 0; //from wp
		    this.td_filter_value = ''; //current live filter value
		    this.is_ajax_running = false;
		    this.td_user_action = ''; // load more or infinite loader (used by the animation)
		    this.header_color = '';
		    this.ajax_pagination_infinite_stop = ''; //show load more at page x
	    }

        // td_js_generator - mini detector
        ( function () {
            var htmlTag = document.getElementsByTagName("html")[0];

	        if ( navigator.userAgent.indexOf("MSIE 10.0") > -1 ) {
                htmlTag.className += ' ie10';
            }

            if ( !!navigator.userAgent.match(/Trident.*rv\:11\./) ) {
                htmlTag.className += ' ie11';
            }

	        if ( navigator.userAgent.indexOf("Edge") > -1 ) {
                htmlTag.className += ' ieEdge';
            }

            if ( /(iPad|iPhone|iPod)/g.test(navigator.userAgent) ) {
                htmlTag.className += ' td-md-is-ios';
            }

            var user_agent = navigator.userAgent.toLowerCase();
            if ( user_agent.indexOf("android") > -1 ) {
                htmlTag.className += ' td-md-is-android';
            }

            if ( -1 !== navigator.userAgent.indexOf('Mac OS X')  ) {
                htmlTag.className += ' td-md-is-os-x';
            }

            if ( /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()) ) {
               htmlTag.className += ' td-md-is-chrome';
            }

            if ( -1 !== navigator.userAgent.indexOf('Firefox') ) {
                htmlTag.className += ' td-md-is-firefox';
            }

            if ( -1 !== navigator.userAgent.indexOf('Safari') && -1 === navigator.userAgent.indexOf('Chrome') ) {
                htmlTag.className += ' td-md-is-safari';
            }

            if( -1 !== navigator.userAgent.indexOf('IEMobile') ){
                htmlTag.className += ' td-md-is-iemobile';
            }

        })();

        var tdLocalCache = {};

        ( function () {
            "use strict";

            tdLocalCache = {
                data: {},
                remove: function (resource_id) {
                    delete tdLocalCache.data[resource_id];
                },
                exist: function (resource_id) {
                    return tdLocalCache.data.hasOwnProperty(resource_id) && tdLocalCache.data[resource_id] !== null;
                },
                get: function (resource_id) {
                    return tdLocalCache.data[resource_id];
                },
                set: function (resource_id, cachedData) {
                    tdLocalCache.remove(resource_id);
                    tdLocalCache.data[resource_id] = cachedData;
                }
            };
        })();

    
    
var td_viewport_interval_list=[{"limitBottom":767,"sidebarWidth":228},{"limitBottom":1018,"sidebarWidth":300},{"limitBottom":1140,"sidebarWidth":324}];
var td_animation_stack_effect="type0";
var tds_animation_stack=true;
var td_animation_stack_specific_selectors=".entry-thumb, img, .td-lazy-img";
var td_animation_stack_general_selectors=".td-animation-stack img, .td-animation-stack .entry-thumb, .post img, .td-animation-stack .td-lazy-img";
var tds_general_modal_image="yes";
var tdc_is_installed="yes";
var td_ajax_url="https:\/\/golpershohor.com\/wp-admin\/admin-ajax.php?td_theme_name=Newspaper&v=12.6";
var td_get_template_directory_uri="https:\/\/golpershohor.com\/wp-content\/plugins\/td-composer\/legacy\/common";
var tds_snap_menu="";
var tds_logo_on_sticky="";
var tds_header_style="";
var td_please_wait="Please wait...";
var td_email_user_pass_incorrect="User or password incorrect!";
var td_email_user_incorrect="Email or username incorrect!";
var td_email_incorrect="Email incorrect!";
var td_user_incorrect="Username incorrect!";
var td_email_user_empty="Email or username empty!";
var td_pass_empty="Pass empty!";
var td_pass_pattern_incorrect="Invalid Pass Pattern!";
var td_retype_pass_incorrect="Retyped Pass incorrect!";
var tds_more_articles_on_post_enable="";
var tds_more_articles_on_post_time_to_wait="";
var tds_more_articles_on_post_pages_distance_from_top=0;
var tds_theme_color_site_wide="#4db2ec";
var tds_smart_sidebar="";
var tdThemeName="Newspaper";
var tdThemeNameWl="Newspaper";
var td_magnific_popup_translation_tPrev="Previous (Left arrow key)";
var td_magnific_popup_translation_tNext="Next (Right arrow key)";
var td_magnific_popup_translation_tCounter="%curr% of %total%";
var td_magnific_popup_translation_ajax_tError="The content from %url% could not be loaded.";
var td_magnific_popup_translation_image_tError="The image #%curr% could not be loaded.";
var tdBlockNonce="33392704b8";
var tdMobileMenu="enabled";
var tdMobileSearch="enabled";
var tdDateNamesI18n={"month_names":["January","February","March","April","May","June","July","August","September","October","November","December"],"month_names_short":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"day_names_short":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]};
var td_reset_pass_empty="Please enter a new password before proceeding.";
var td_reset_pass_confirm_empty="Please confirm the new password before proceeding.";
var td_reset_pass_not_matching="Please make sure that the passwords match.";
var tdb_modal_confirm="Save";
var tdb_modal_cancel="Cancel";
var tdb_modal_confirm_alt="Yes";
var tdb_modal_cancel_alt="No";
var td_ad_background_click_link="";
var td_ad_background_click_target="";
</script>

<style>:root{--td_mobile_gradient_one_mob:rgba(0,0,0,0.5);--td_mobile_gradient_two_mob:rgba(0,0,0,0.6)}:root{--td_mobile_gradient_one_mob:rgba(0,0,0,0.5);--td_mobile_gradient_two_mob:rgba(0,0,0,0.6)}</style>
<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "WebSite",
                    "@id": "https://golpershohor.com/",
                    "name": "Home"
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                    "item": {
                    "@type": "WebPage",
                    "@id": "https://golpershohor.com/category/dharabahik-golpo/",
                    "name": "“ধারাবাহিক গল্প”"
                }
            }
            ,{
                "@type": "ListItem",
                "position": 3,
                    "item": {
                    "@type": "WebPage",
                    "@id": "https://golpershohor.com/category/dharabahik-golpo/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%f0%9f%8c%bc/",
                    "name": """মায়াবন_বিহারিনী_হরিণী 🌼🌼"                                
                }
            }
            ,{
                "@type": "ListItem",
                "position": 4,
                    "item": {
                    "@type": "WebPage",
                    "@id": "https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/",
                    "name": "মায়াবন_বিহারিনী_হরিণী ২০ #writer_Neel_Noor"                                
                }
            }    
        ]
    }
</script>

<style></style>
<style id="tdw-css-placeholder"></style></head>
<body class="post-template-default single single-post postid-46703 single-format-standard td-standard-pack __- global-block-template-1  tdc-header-template td-animation-stack-type0 td-full-layout" itemscope="itemscope" itemtype="https://schema.org/WebPage">
<div class="td-scroll-up  td-hide-scroll-up-on-mob" style="display:none;"><i class="td-icon-menu-up"></i></div>
<div class="td-menu-background" style="visibility:hidden"></div>
<div id="td-mobile-nav" style="visibility:hidden">
<div class="td-mobile-container">

<div class="td-menu-socials-wrap">

<div class="td-menu-socials">
</div>

<div class="td-mobile-close">
<span><i class="td-icon-close-mobile"></i></span>
</div>
</div>

<div class="td-menu-login-section">
<div class="td-guest-wrap">
<div class="td-menu-login"><a id="login-link-mob">Sign in</a> <span></span><a id="register-link-mob">Join</a></div>
</div>
</div>

<div class="td-mobile-content">
<div class="menu-main-mane-container"><ul id="menu-main-mane-2" class="td-mobile-main-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-first menu-item-23036"><a href="https://golpershohor.com/">Home</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-33336"><a href="https://golpershohor.com/ongoing-story/">চলমান নতুন গল্প</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-394"><a href="https://golpershohor.com/categotirs/">Categotirs<i class="td-icon-menu-right td-element-after"></i></a>
<ul class="sub-menu">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3461"><a href="https://golpershohor.com/categotirs-mobile/">Categotirs – mobile</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-23488"><a href="https://golpershohor.com/home-mobile/">Home – mobile</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-278"><a href="https://golpershohor.com/privacy-policy/">Privacy Policy</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-36739"><a href="https://golpershohor.com/tds-checkout/">Checkout</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-36741"><a href="https://golpershohor.com/tds-my-account/">My account</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-36743"><a href="https://golpershohor.com/tds-login-register/">Login/Register</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-37211"><a href="https://golpershohor.com/cookie-policy-eu/">Cookie Policy (EU)</a></li>
</ul></div> </div>
</div>

<div id="login-form-mobile" class="td-register-section">
<div id="td-login-mob" class="td-login-animation td-login-hide-mob">

<div class="td-login-close">
<span class="td-back-button"><i class="td-icon-read-down"></i></span>
<div class="td-login-title">Sign in</div>

<div class="td-mobile-close">
<span><i class="td-icon-close-mobile"></i></span>
</div>
</div>
<form class="td-login-form-wrap" action="#" method="post">
<div class="td-login-panel-title"><span>Welcome!</span>Log into your account</div>
<div class="td_display_err"></div>
<div class="td-login-inputs"><input class="td-login-input" autocomplete="username" type="text" name="login_email" id="login_email-mob" value required><label for="login_email-mob">your username</label></div>
<div class="td-login-inputs"><input class="td-login-input" autocomplete="current-password" type="password" name="login_pass" id="login_pass-mob" value required><label for="login_pass-mob">your password</label></div>
<input type="button" name="login_button" id="login_button-mob" class="td-login-button" value="LOG IN">
<div class="td-login-info-text">
<a href="#" id="forgot-pass-link-mob">Forgot your password?</a>
</div>
<div class="td-login-register-link">
<a id="signin-register-link-mob">Create an account</a>
</div>
<div class="td-login-info-text"><a class="privacy-policy-link" href="https://golpershohor.com/privacy-policy/">Privacy Policy</a></div>
</form>
</div>
<div id="td-register-mob" class="td-login-animation td-login-hide-mob">

<div class="td-register-close">
<span class="td-back-button"><i class="td-icon-read-down"></i></span>
<div class="td-login-title">Sign up</div>

<div class="td-mobile-close">
<span><i class="td-icon-close-mobile"></i></span>
</div>
</div>
<div class="td-login-panel-title"><span>Welcome!</span>Register for an account</div>
<form class="td-login-form-wrap" action="#" method="post">
<div class="td_display_err"></div>
<div class="td-login-inputs"><input class="td-login-input" type="text" name="register_email" id="register_email-mob" value required><label for="register_email-mob">your email</label></div>
<div class="td-login-inputs"><input class="td-login-input" type="text" name="register_user" id="register_user-mob" value required><label for="register_user-mob">your username</label></div>
<input type="button" name="register_button" id="register_button-mob" class="td-login-button" value="REGISTER">
<div class="td-login-info-text">A password will be e-mailed to you.</div>
<div class="td-login-info-text"><a class="privacy-policy-link" href="https://golpershohor.com/privacy-policy/">Privacy Policy</a></div>
</form>
</div>
<div id="td-forgot-pass-mob" class="td-login-animation td-login-hide-mob">

<div class="td-forgot-pass-close">
<a href="#" aria-label="Back" class="td-back-button"><i class="td-icon-read-down"></i></a>
<div class="td-login-title">Password recovery</div>
</div>
<div class="td-login-form-wrap">
<div class="td-login-panel-title">Recover your password</div>
<div class="td_display_err"></div>
<div class="td-login-inputs"><input class="td-login-input" type="text" name="forgot_email" id="forgot_email-mob" value required><label for="forgot_email-mob">your email</label></div>
<input type="button" name="forgot_button" id="forgot_button-mob" class="td-login-button" value="Send My Pass">
</div>
</div>
</div>
</div><div class="td-search-background" style="visibility:hidden"></div>
<div class="td-search-wrap-mob" style="visibility:hidden">
<div class="td-drop-down-search">
<form method="get" class="td-search-form" action="https://golpershohor.com/">

<div class="td-search-close">
<span><i class="td-icon-close-mobile"></i></span>
</div>
<div role="search" class="td-search-input">
<span>Search</span>
<input id="td-header-search-mob" type="text" value name="s" autocomplete="off" />
</div>
</form>
<div id="td-aj-search-mob" class="td-ajax-search-flex"></div>
</div>
</div>
<div id="td-outer-wrap" class="td-theme-wrap">
<div class="td-header-template-wrap" style="position: relative">
<div class="td-header-mobile-wrap ">
<div id="tdi_1" class="tdc-zone"><div class="tdc_zone tdi_2  wpb_row td-pb-row tdc-element-style">
<style scoped>.tdi_2{min-height:0}@media (max-width:767px){.tdi_2:before{content:'';display:block;width:100vw;height:100%;position:absolute;left:50%;transform:translateX(-50%);box-shadow:0px 6px 8px 0px rgba(0,0,0,0.08);z-index:20;pointer-events:none}@media (max-width:767px){.tdi_2:before{width:100%}}}@media (max-width:767px){.tdi_2{position:relative}}</style>
<div class="tdi_1_rand_style td-element-style"><style>@media (max-width:767px){.tdi_1_rand_style{background-color:#222222!important}}</style></div><div id="tdi_3" class="tdc-row"><div class="vc_row tdi_4  wpb_row td-pb-row">
<style scoped>.tdi_4,.tdi_4 .tdc-columns{min-height:0}.tdi_4,.tdi_4 .tdc-columns{display:block}.tdi_4 .tdc-columns{width:100%}@media (max-width:767px){@media (min-width:768px){.tdi_4{margin-left:-0px;margin-right:-0px}.tdi_4 .tdc-row-video-background-error,.tdi_4 .vc_column{padding-left:0px;padding-right:0px}}}</style><div class="vc_column tdi_6  wpb_column vc_column_container tdc-column td-pb-span4">
<style scoped>.tdi_6{vertical-align:baseline}.tdi_6>.wpb_wrapper,.tdi_6>.wpb_wrapper>.tdc-elements{display:block}.tdi_6>.wpb_wrapper>.tdc-elements{width:100%}.tdi_6>.wpb_wrapper>.vc_row_inner{width:auto}.tdi_6>.wpb_wrapper{width:auto;height:auto}@media (max-width:767px){.tdi_6{vertical-align:middle}}@media (max-width:767px){.tdi_6{width:20%!important;display:inline-block!important}}</style><div class="wpb_wrapper"><div class="td_block_wrap tdb_mobile_menu tdi_7 td-pb-border-top td_block_template_1 tdb-header-align" data-td-block-uid="tdi_7">
<style>@media (max-width:767px){.tdi_7{margin-top:2px!important;margin-left:-13px!important}}</style>
<style>.tdb-header-align{vertical-align:middle}.tdb_mobile_menu{margin-bottom:0;clear:none}.tdb_mobile_menu a{display:inline-block!important;position:relative;text-align:center;color:var(--td_theme_color,#4db2ec)}.tdb_mobile_menu a>span{display:flex;align-items:center;justify-content:center}.tdb_mobile_menu svg{height:auto}.tdb_mobile_menu svg,.tdb_mobile_menu svg *{fill:var(--td_theme_color,#4db2ec)}#tdc-live-iframe .tdb_mobile_menu a{pointer-events:none}.td-menu-mob-open-menu{overflow:hidden}.td-menu-mob-open-menu #td-outer-wrap{position:static}.tdi_7{display:inline-block}.tdi_7 .tdb-mobile-menu-button i{font-size:22px;width:55px;height:55px;line-height:55px}.tdi_7 .tdb-mobile-menu-button svg{width:22px}.tdi_7 .tdb-mobile-menu-button .tdb-mobile-menu-icon-svg{width:55px;height:55px}.tdi_7 .tdb-mobile-menu-button{color:#ffffff}.tdi_7 .tdb-mobile-menu-button svg,.tdi_7 .tdb-mobile-menu-button svg *{fill:#ffffff}@media (max-width:767px){.tdi_7 .tdb-mobile-menu-button i{font-size:27px}.tdi_7 .tdb-mobile-menu-button svg{width:27px}.tdi_7 .tdb-mobile-menu-button i{width:54px;height:54px;line-height:54px}.tdi_7 .tdb-mobile-menu-button .tdb-mobile-menu-icon-svg{width:54px;height:54px}}</style><div class="tdb-block-inner td-fix-index"><span class="tdb-mobile-menu-button"><i class="tdb-mobile-menu-icon td-icon-mobile"></i></span></div></div> </div></div><div class="vc_column tdi_9  wpb_column vc_column_container tdc-column td-pb-span4">
<style scoped>.tdi_9{vertical-align:baseline}.tdi_9>.wpb_wrapper,.tdi_9>.wpb_wrapper>.tdc-elements{display:block}.tdi_9>.wpb_wrapper>.tdc-elements{width:100%}.tdi_9>.wpb_wrapper>.vc_row_inner{width:auto}.tdi_9>.wpb_wrapper{width:auto;height:auto}@media (max-width:767px){.tdi_9{vertical-align:middle}}@media (max-width:767px){.tdi_9{width:60%!important;display:inline-block!important}}</style><div class="wpb_wrapper"><div class="td_block_wrap tdb_header_logo tdi_10 td-pb-border-top td_block_template_1 tdb-header-align" data-td-block-uid="tdi_10">
<style>@media (max-width:767px){.tdi_10{margin-top:-8px!important}}</style>
<style>.tdb_header_logo{margin-bottom:0;clear:none}.tdb_header_logo .tdb-logo-a,.tdb_header_logo h1{display:flex;pointer-events:auto;align-items:flex-start}.tdb_header_logo h1{margin:0;line-height:0}.tdb_header_logo .tdb-logo-img-wrap img{display:block}.tdb_header_logo .tdb-logo-svg-wrap+.tdb-logo-img-wrap{display:none}.tdb_header_logo .tdb-logo-svg-wrap svg{width:50px;display:block;transition:fill .3s ease}.tdb_header_logo .tdb-logo-text-wrap{display:flex}.tdb_header_logo .tdb-logo-text-title,.tdb_header_logo .tdb-logo-text-tagline{-webkit-transition:all 0.2s ease;transition:all 0.2s ease}.tdb_header_logo .tdb-logo-text-title{background-size:cover;background-position:center center;font-size:75px;font-family:serif;line-height:1.1;color:#222;white-space:nowrap}.tdb_header_logo .tdb-logo-text-tagline{margin-top:2px;font-size:12px;font-family:serif;letter-spacing:1.8px;line-height:1;color:#767676}.tdb_header_logo .tdb-logo-icon{position:relative;font-size:46px;color:#000}.tdb_header_logo .tdb-logo-icon-svg{line-height:0}.tdb_header_logo .tdb-logo-icon-svg svg{width:46px;height:auto}.tdb_header_logo .tdb-logo-icon-svg svg,.tdb_header_logo .tdb-logo-icon-svg svg *{fill:#000}.tdi_10 .tdb-logo-a,.tdi_10 h1{flex-direction:row;align-items:center;justify-content:center}.tdi_10 .tdb-logo-svg-wrap{display:block}.tdi_10 .tdb-logo-img-wrap{display:none}.tdi_10 .tdb-logo-text-tagline{margin-top:-3px;margin-left:0;display:block}.tdi_10 .tdb-logo-text-title{display:block;color:#ffffff}.tdi_10 .tdb-logo-text-wrap{flex-direction:column;align-items:center}.tdi_10 .tdb-logo-icon{top:0px;display:block}@media (max-width:767px){.tdb_header_logo .tdb-logo-text-title{font-size:36px}}@media (max-width:767px){.tdb_header_logo .tdb-logo-text-tagline{font-size:11px}}@media (min-width:768px) and (max-width:1018px){.tdi_10 .tdb-logo-img{max-width:186px}.tdi_10 .tdb-logo-text-tagline{margin-top:-2px;margin-left:0}}@media (max-width:767px){.tdi_10 .tdb-logo-svg-wrap+.tdb-logo-img-wrap{display:none}.tdi_10 .tdb-logo-img{max-width:180px}.tdi_10 .tdb-logo-img-wrap{display:block}}</style><div class="tdb-block-inner td-fix-index"><a class="tdb-logo-a" href="https://golpershohor.com/"><span class="tdb-logo-img-wrap"><img class="tdb-logo-img" src="https://golpershohor.com/wp-content/uploads/2022/03/272.90-300x99.png" alt="Logo" title /></span></a></div></div> </div></div><div class="vc_column tdi_12  wpb_column vc_column_container tdc-column td-pb-span4">
<style scoped>.tdi_12{vertical-align:baseline}.tdi_12>.wpb_wrapper,.tdi_12>.wpb_wrapper>.tdc-elements{display:block}.tdi_12>.wpb_wrapper>.tdc-elements{width:100%}.tdi_12>.wpb_wrapper>.vc_row_inner{width:auto}.tdi_12>.wpb_wrapper{width:auto;height:auto}@media (max-width:767px){.tdi_12{vertical-align:middle}}@media (max-width:767px){.tdi_12{width:20%!important;display:inline-block!important}}</style><div class="wpb_wrapper"><div class="td_block_wrap tdb_mobile_search tdi_13 td-pb-border-top td_block_template_1 tdb-header-align" data-td-block-uid="tdi_13">
<style>@media (max-width:767px){.tdi_13{margin-right:-18px!important;margin-bottom:0px!important}}</style>
<style>.tdb_mobile_search{margin-bottom:0;clear:none}.tdb_mobile_search a{display:inline-block!important;position:relative;text-align:center;color:var(--td_theme_color,#4db2ec)}.tdb_mobile_search a>span{display:flex;align-items:center;justify-content:center}.tdb_mobile_search svg{height:auto}.tdb_mobile_search svg,.tdb_mobile_search svg *{fill:var(--td_theme_color,#4db2ec)}#tdc-live-iframe .tdb_mobile_search a{pointer-events:none}.td-search-opened{overflow:hidden}.td-search-opened #td-outer-wrap{position:static}.td-search-opened .td-search-wrap-mob{position:fixed;height:calc(100% + 1px)}.td-search-opened .td-drop-down-search{height:calc(~100% + 1px);overflow-y:scroll;overflow-x:hidden}.tdi_13{display:inline-block;float:right;clear:none}.tdi_13 .tdb-header-search-button-mob i{font-size:22px;width:55px;height:55px;line-height:55px}.tdi_13 .tdb-header-search-button-mob svg{width:22px}.tdi_13 .tdb-header-search-button-mob .tdb-mobile-search-icon-svg{width:55px;height:55px;display:flex;justify-content:center}.tdi_13 .tdb-header-search-button-mob{color:#ffffff}.tdi_13 .tdb-header-search-button-mob svg,.tdi_13 .tdb-header-search-button-mob svg *{fill:#ffffff}.td-search-wrap-mob .td-module-exclusive .td-module-title a:before{display:inline-block}@media (min-width:1019px) and (max-width:1140px){}@media (min-width:768px) and (max-width:1018px){}@media (max-width:767px){}</style><div class="tdb-block-inner td-fix-index"><span class="tdb-header-search-button-mob dropdown-toggle" data-toggle="dropdown"><span class="tdb-mobile-search-icon tdb-mobile-search-icon-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M946.371 843.601l-125.379-125.44c43.643-65.925 65.495-142.1 65.475-218.040 0.051-101.069-38.676-202.588-115.835-279.706-77.117-77.148-178.606-115.948-279.644-115.886-101.079-0.061-202.557 38.738-279.665 115.876-77.169 77.128-115.937 178.627-115.907 279.716-0.031 101.069 38.728 202.588 115.907 279.665 77.117 77.117 178.616 115.825 279.665 115.804 75.94 0.020 152.136-21.862 218.061-65.495l125.348 125.46c30.915 30.904 81.029 30.904 111.954 0.020 30.915-30.935 30.915-81.029 0.020-111.974zM705.772 714.925c-59.443 59.341-136.899 88.842-214.784 88.924-77.896-0.082-155.341-29.583-214.784-88.924-59.443-59.484-88.975-136.919-89.037-214.804 0.061-77.885 29.604-155.372 89.037-214.825 59.464-59.443 136.878-88.945 214.784-89.016 77.865 0.082 155.3 29.583 214.784 89.016 59.361 59.464 88.914 136.919 88.945 214.825-0.041 77.885-29.583 155.361-88.945 214.804z"></path></svg></span></span></div></div> </div></div></div></div></div></div> </div>
<div class="td-header-desktop-wrap ">

<div id="login-form" class="white-popup-block mfp-hide mfp-with-anim td-login-modal-wrap">
<div class="td-login-wrap">
<a href="#" aria-label="Back" class="td-back-button"><i class="td-icon-modal-back"></i></a>
<div id="td-login-div" class="td-login-form-div td-display-block">
<div class="td-login-panel-title">Sign in</div>
<div class="td-login-panel-descr">Welcome! Log into your account</div>
<div class="td_display_err"></div>
<form id="loginForm" action="#" method="post">
<div class="td-login-inputs"><input class="td-login-input" autocomplete="username" type="text" name="login_email" id="login_email" value required><label for="login_email">your username</label></div>
<div class="td-login-inputs"><input class="td-login-input" autocomplete="current-password" type="password" name="login_pass" id="login_pass" value required><label for="login_pass">your password</label></div>
<input type="button" name="login_button" id="login_button" class="wpb_button btn td-login-button" value="Login">
</form>
<div class="td-login-info-text"><a href="#" id="forgot-pass-link">Forgot your password? Get help</a></div>
<a id="register-link">Create an account</a>
<div class="td-login-info-text"><a class="privacy-policy-link" href="https://golpershohor.com/privacy-policy/">Privacy Policy</a></div>
</div>
<div id="td-register-div" class="td-login-form-div td-display-none td-login-modal-wrap">
<div class="td-login-panel-title">Create an account</div>
<div class="td-login-panel-descr">Welcome! Register for an account</div>
<div class="td_display_err"></div>
<form id="registerForm" action="#" method="post">
<div class="td-login-inputs"><input class="td-login-input" type="text" name="register_email" id="register_email" value required><label for="register_email">your email</label></div>
<div class="td-login-inputs"><input class="td-login-input" type="text" name="register_user" id="register_user" value required><label for="register_user">your username</label></div>
<input type="button" name="register_button" id="register_button" class="wpb_button btn td-login-button" value="Register">
</form>
<div class="td-login-info-text">A password will be e-mailed to you.</div>
<div class="td-login-info-text"><a class="privacy-policy-link" href="https://golpershohor.com/privacy-policy/">Privacy Policy</a></div>
</div>
<div id="td-forgot-pass-div" class="td-login-form-div td-display-none">
<div class="td-login-panel-title">Password recovery</div>
<div class="td-login-panel-descr">Recover your password</div>
<div class="td_display_err"></div>
<form id="forgotpassForm" action="#" method="post">
<div class="td-login-inputs"><input class="td-login-input" type="text" name="forgot_email" id="forgot_email" value required><label for="forgot_email">your email</label></div>
<input type="button" name="forgot_button" id="forgot_button" class="wpb_button btn td-login-button" value="Send My Password">
</form>
<div class="td-login-info-text">A password will be e-mailed to you.</div>
</div>
</div>
</div>
<div id="tdi_14" class="tdc-zone"><div class="tdc_zone tdi_15  wpb_row td-pb-row tdc-element-style">
<style scoped>.tdi_15{min-height:0}.tdi_15:before{content:'';display:block;width:100vw;height:100%;position:absolute;left:50%;transform:translateX(-50%);box-shadow:0px 6px 8px 0px rgba(0,0,0,0.08);z-index:20;pointer-events:none}.td-header-desktop-wrap{position:relative}@media (max-width:767px){.tdi_15:before{width:100%}}.tdi_15{position:relative}</style>
<div class="tdi_14_rand_style td-element-style"><style>.tdi_14_rand_style{background-color:#ffffff!important}</style></div><div id="tdi_16" class="tdc-row stretch_row"><div class="vc_row tdi_17  wpb_row td-pb-row tdc-element-style">
<style scoped>.tdi_17,.tdi_17 .tdc-columns{min-height:0}.tdi_17,.tdi_17 .tdc-columns{display:block}.tdi_17 .tdc-columns{width:100%}@media (min-width:768px){.tdi_17{margin-left:-0px;margin-right:-0px}.tdi_17 .tdc-row-video-background-error,.tdi_17 .vc_column{padding-left:0px;padding-right:0px}}.tdi_17{position:relative}.tdi_17 .td_block_wrap{text-align:left}</style>
<div class="tdi_16_rand_style td-element-style"><style>.tdi_16_rand_style{background-color:#222222!important}</style></div><div class="vc_column tdi_19  wpb_column vc_column_container tdc-column td-pb-span12">
<style scoped>.tdi_19{vertical-align:baseline}.tdi_19>.wpb_wrapper,.tdi_19>.wpb_wrapper>.tdc-elements{display:block}.tdi_19>.wpb_wrapper>.tdc-elements{width:100%}.tdi_19>.wpb_wrapper>.vc_row_inner{width:auto}.tdi_19>.wpb_wrapper{width:auto;height:auto}</style><div class="wpb_wrapper">
<script type="3946b4c98583e17aafee7bf2-text/javascript">

var tdb_login_sing_in_shortcode="on";

</script>
<div class="td_block_wrap tdb_header_user tdi_20 td-pb-border-top td_block_template_1 tdb-header-align" data-td-block-uid="tdi_20">
<style>.tdi_20{margin-right:14px!important}</style>
<style>.tdb_header_user{margin-bottom:0;clear:none}.tdb_header_user .tdb-block-inner{display:flex;align-items:center}.tdb_header_user .tdb-head-usr-item{font-family:'Open Sans','Open Sans Regular',sans-serif;font-size:11px;line-height:1;color:#000}.tdb_header_user .tdb-head-usr-item:hover{color:var(--td_theme_color,#4db2ec)}.tdb_header_user .tdb-head-usr-avatar{position:relative;width:20px;height:0;padding-bottom:20px;margin-right:6px;background-size:cover;background-position:center center}.tdb_header_user .tdb-head-usr-name{margin-right:16px;font-weight:700}.tdb_header_user .tdb-head-usr-log{display:flex;align-items:center}.tdb_header_user .tdb-head-usr-log i{font-size:10px}.tdb_header_user .tdb-head-usr-log-icon{position:relative}.tdb_header_user .tdb-head-usr-log-icon-svg{line-height:0}.tdb_header_user .tdb-head-usr-log-icon-svg svg{width:10px;height:auto}.tdi_20{display:inline-block}.tdi_20 .tdb-head-usr-avatar{width:19px;padding-bottom:19px}.tdi_20 .tdb-head-usr-log .tdb-head-usr-log-icon{margin-right:2px;top:0px}.tdi_20 .tdb-head-usr-name{color:#ffffff;line-height:28px!important}.tdi_20 .tdb-head-usr-log{color:#ffffff;line-height:28px!important}.tdi_20 .tdb-head-usr-log-icon-svg svg,.tdi_20 .tdb-head-usr-log-icon-svg svg *{fill:#ffffff;fill:#ffffff}.tdi_20 .tdb-head-usr-log i{color:#ffffff}</style><div class="tdb-block-inner td-fix-index"><a class="td-login-modal-js tdb-head-usr-item tdb-head-usr-log" href="#login-form" data-effect="mpf-td-login-effect"><span class="tdb-head-usr-log-txt">Sign in / Join</span></a></div></div> <div class="td_block_wrap tdb_mobile_horiz_menu tdi_21 td-pb-border-top td_block_template_1 tdb-header-align" data-td-block-uid="tdi_21" style=" z-index: 999;">
<style>.tdi_21{margin-bottom:0px!important}@media (min-width:768px) and (max-width:1018px){.tdi_21{display:none!important}}</style>
<style>.tdb_mobile_horiz_menu{margin-bottom:0;clear:none}.tdb_mobile_horiz_menu.tdb-horiz-menu-singleline{width:100%}.tdb_mobile_horiz_menu.tdb-horiz-menu-singleline .tdb-horiz-menu{display:block;width:100%;overflow-x:auto;overflow-y:hidden;font-size:0;white-space:nowrap}.tdb_mobile_horiz_menu.tdb-horiz-menu-singleline .tdb-horiz-menu>li{position:static;display:inline-block;float:none}.tdb_mobile_horiz_menu.tdb-horiz-menu-singleline .tdb-horiz-menu ul{left:0;width:100%;z-index:-1}.tdb-horiz-menu{display:table;margin:0}.tdb-horiz-menu,.tdb-horiz-menu ul{list-style-type:none}.tdb-horiz-menu ul,.tdb-horiz-menu li{line-height:1}.tdb-horiz-menu li{margin:0;font-family:'Open Sans','Open Sans Regular',sans-serif}.tdb-horiz-menu li.current-menu-item>a,.tdb-horiz-menu li.current-menu-ancestor>a,.tdb-horiz-menu li.current-category-ancestor>a,.tdb-horiz-menu li:hover>a,.tdb-horiz-menu li.tdb-hover>a{color:var(--td_theme_color,#4db2ec)}.tdb-horiz-menu li.current-menu-item>a .tdb-sub-menu-icon-svg,.tdb-horiz-menu li.current-menu-ancestor>a .tdb-sub-menu-icon-svg,.tdb-horiz-menu li.current-category-ancestor>a .tdb-sub-menu-icon-svg,.tdb-horiz-menu li:hover>a .tdb-sub-menu-icon-svg,.tdb-horiz-menu li.tdb-hover>a .tdb-sub-menu-icon-svg,.tdb-horiz-menu li.current-menu-item>a .tdb-sub-menu-icon-svg *,.tdb-horiz-menu li.current-menu-ancestor>a .tdb-sub-menu-icon-svg *,.tdb-horiz-menu li.current-category-ancestor>a .tdb-sub-menu-icon-svg *,.tdb-horiz-menu li:hover>a .tdb-sub-menu-icon-svg *,.tdb-horiz-menu li.tdb-hover>a .tdb-sub-menu-icon-svg *{fill:var(--td_theme_color,#4db2ec)}.tdb-horiz-menu>li{position:relative;float:left;font-size:0}.tdb-horiz-menu>li:hover ul{visibility:visible;opacity:1}.tdb-horiz-menu>li>a{display:inline-block;padding:0 9px;font-weight:700;font-size:13px;line-height:41px;vertical-align:middle;-webkit-backface-visibility:hidden;color:#000}.tdb-horiz-menu>li>a>.tdb-menu-item-text{display:inline-block}.tdb-horiz-menu>li>a .tdb-sub-menu-icon{margin:0 0 0 6px}.tdb-horiz-menu>li>a .tdb-sub-menu-icon-svg svg{position:relative;top:-1px;width:13px}.tdb-horiz-menu>li .tdb-menu-sep{position:relative}.tdb-horiz-menu>li:last-child .tdb-menu-sep{display:none}.tdb-horiz-menu .tdb-sub-menu-icon-svg,.tdb-horiz-menu .tdb-menu-sep-svg{line-height:0}.tdb-horiz-menu .tdb-sub-menu-icon-svg svg,.tdb-horiz-menu .tdb-menu-sep-svg svg{height:auto}.tdb-horiz-menu .tdb-sub-menu-icon-svg svg,.tdb-horiz-menu .tdb-menu-sep-svg svg,.tdb-horiz-menu .tdb-sub-menu-icon-svg svg *,.tdb-horiz-menu .tdb-menu-sep-svg svg *{fill:#000}.tdb-horiz-menu .tdb-sub-menu-icon{vertical-align:middle;position:relative;top:0;padding-left:0}.tdb-horiz-menu .tdb-menu-sep{vertical-align:middle;font-size:12px}.tdb-horiz-menu .tdb-menu-sep-svg svg{width:12px}.tdb-horiz-menu ul{position:absolute;top:auto;left:-7px;padding:8px 0;background-color:#fff;visibility:hidden;opacity:0}.tdb-horiz-menu ul li>a{white-space:nowrap;display:block;padding:5px 18px;font-size:11px;line-height:18px;color:#111}.tdb-horiz-menu ul li>a .tdb-sub-menu-icon{float:right;font-size:7px;line-height:20px}.tdb-horiz-menu ul li>a .tdb-sub-menu-icon-svg svg{width:7px}.tdc-dragged .tdb-horiz-menu ul{visibility:hidden!important;opacity:0!important;-webkit-transition:all 0.3s ease;transition:all 0.3s ease}.tdi_21{display:inline-block}.tdi_21 .tdb-horiz-menu>li{margin-right:16px}.tdi_21 .tdb-horiz-menu>li:last-child{margin-right:0}.tdi_21 .tdb-horiz-menu>li>a{padding:0px;color:#ffffff;font-size:11px!important;line-height:28px!important;font-weight:400!important}.tdi_21 .tdb-horiz-menu>li .tdb-menu-sep{top:0px}.tdi_21 .tdb-horiz-menu>li>a .tdb-sub-menu-icon{top:0px}.tdi_21 .tdb-horiz-menu>li>a .tdb-sub-menu-icon-svg svg,.tdi_21 .tdb-horiz-menu>li>a .tdb-sub-menu-icon-svg svg *{fill:#ffffff}.tdi_21 .tdb-horiz-menu>li.current-menu-item>a,.tdi_21 .tdb-horiz-menu>li.current-menu-ancestor>a,.tdi_21 .tdb-horiz-menu>li.current-category-ancestor>a,.tdi_21 .tdb-horiz-menu>li:hover>a{color:#4db2ec}.tdi_21 .tdb-horiz-menu>li.current-menu-item>a .tdb-sub-menu-icon-svg svg,.tdi_21 .tdb-horiz-menu>li.current-menu-item>a .tdb-sub-menu-icon-svg svg *,.tdi_21 .tdb-horiz-menu>li.current-menu-ancestor>a .tdb-sub-menu-icon-svg svg,.tdi_21 .tdb-horiz-menu>li.current-menu-ancestor>a .tdb-sub-menu-icon-svg svg *,.tdi_21 .tdb-horiz-menu>li.current-category-ancestor>a .tdb-sub-menu-icon-svg svg,.tdi_21 .tdb-horiz-menu>li.current-category-ancestor>a .tdb-sub-menu-icon-svg svg *,.tdi_21 .tdb-horiz-menu>li:hover>a .tdb-sub-menu-icon-svg svg,.tdi_21 .tdb-horiz-menu>li:hover>a .tdb-sub-menu-icon-svg svg *{fill:#4db2ec}.tdi_21 .tdb-horiz-menu ul{left:-18px;box-shadow:1px 1px 4px 0px rgba(0,0,0,0.15)}.tdi_21 .tdb-horiz-menu ul li>a{line-height:1.2!important}</style><div id="tdi_21" class="td_block_inner td-fix-index"><div class="menu-main-mane-container"><ul id="menu-main-mane-3" class="tdb-horiz-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-23036"><a href="https://golpershohor.com/"><div class="tdb-menu-item-text">Home</div></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-33336"><a href="https://golpershohor.com/ongoing-story/"><div class="tdb-menu-item-text">চলমান নতুন গল্প</div></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-394 tdb-menu-item-inactive"><a href="https://golpershohor.com/categotirs/"><div class="tdb-menu-item-text">Categotirs</div><i class="tdb-sub-menu-icon td-icon-down tdb-main-sub-menu-icon"></i></a>
<ul class="sub-menu">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3461"><a href="https://golpershohor.com/categotirs-mobile/"><div class="tdb-menu-item-text">Categotirs – mobile</div></a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-23488"><a href="https://golpershohor.com/home-mobile/"><div class="tdb-menu-item-text">Home – mobile</div></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-278"><a href="https://golpershohor.com/privacy-policy/"><div class="tdb-menu-item-text">Privacy Policy</div></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-36739"><a href="https://golpershohor.com/tds-checkout/"><div class="tdb-menu-item-text">Checkout</div></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-36741"><a href="https://golpershohor.com/tds-my-account/"><div class="tdb-menu-item-text">My account</div></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-36743"><a href="https://golpershohor.com/tds-login-register/"><div class="tdb-menu-item-text">Login/Register</div></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-37211"><a href="https://golpershohor.com/cookie-policy-eu/"><div class="tdb-menu-item-text">Cookie Policy (EU)</div></a></li>
</ul></div></div></div><div class="tdm_block td_block_wrap tdm_block_socials tdi_22 tdm-content-horiz-left td-pb-border-top td_block_template_1" data-td-block-uid="tdi_22">
<style>.tdm_block.tdm_block_socials{margin-bottom:0}.tdm-social-wrapper{*zoom:1}.tdm-social-wrapper:before,.tdm-social-wrapper:after{display:table;content:'';line-height:0}.tdm-social-wrapper:after{clear:both}.tdm-social-item-wrap{display:inline-block}.tdm-social-item{position:relative;display:inline-block;vertical-align:middle;-webkit-transition:all 0.2s;transition:all 0.2s;text-align:center;-webkit-transform:translateZ(0);transform:translateZ(0)}.tdm-social-item i{font-size:14px;color:var(--td_theme_color,#4db2ec);-webkit-transition:all 0.2s;transition:all 0.2s}.tdm-social-text{display:none;margin-top:-1px;vertical-align:middle;font-size:13px;color:var(--td_theme_color,#4db2ec);-webkit-transition:all 0.2s;transition:all 0.2s}.tdm-social-item-wrap:hover i,.tdm-social-item-wrap:hover .tdm-social-text{color:#000}.tdm-social-item-wrap:last-child .tdm-social-text{margin-right:0!important}.tdi_22{float:right;clear:none}</style>
<style>.tdi_23 .tdm-social-item i{font-size:12px;vertical-align:middle}.tdi_23 .tdm-social-item i.td-icon-linkedin,.tdi_23 .tdm-social-item i.td-icon-pinterest,.tdi_23 .tdm-social-item i.td-icon-blogger,.tdi_23 .tdm-social-item i.td-icon-vimeo{font-size:9.6px}.tdi_23 .tdm-social-item{width:22.8px;height:22.8px;margin:2.5px 5px 2.5px 0}.tdi_23 .tdm-social-item i{line-height:22.8px}.tdi_23 .tdm-social-item-wrap:last-child .tdm-social-item{margin-right:0!important}.tdi_23 .tdm-social-item i,.tds-team-member2 .tdi_23.tds-social1 .tdm-social-item i{color:#ffffff}.tdi_23 .tdm-social-item-wrap:hover i,.tds-team-member2 .tdi_23.tds-social1 .tdm-social-item:hover i{color:#4db2ec}.tdi_23 .tdm-social-text{display:none;margin-left:2px;margin-right:18px}</style><div class="tdm-social-wrapper tds-social1 tdi_23"><div class="tdm-social-item-wrap"><a href="#" title="Facebook" class="tdm-social-item"><i class="td-icon-font td-icon-facebook"></i><span style="display: none">Facebook</span></a></div><div class="tdm-social-item-wrap"><a href="#" title="Instagram" class="tdm-social-item"><i class="td-icon-font td-icon-instagram"></i><span style="display: none">Instagram</span></a></div><div class="tdm-social-item-wrap"><a href="#" title="Twitter" class="tdm-social-item"><i class="td-icon-font td-icon-twitter"></i><span style="display: none">Twitter</span></a></div><div class="tdm-social-item-wrap"><a href="#" title="Vimeo" class="tdm-social-item"><i class="td-icon-font td-icon-vimeo"></i><span style="display: none">Vimeo</span></a></div><div class="tdm-social-item-wrap"><a href="#" title="Youtube" class="tdm-social-item"><i class="td-icon-font td-icon-youtube"></i><span style="display: none">Youtube</span></a></div></div></div></div></div></div></div><div id="tdi_24" class="tdc-row"><div class="vc_row tdi_25  wpb_row td-pb-row">
<style scoped>.tdi_25,.tdi_25 .tdc-columns{min-height:0}.tdi_25,.tdi_25 .tdc-columns{display:block}.tdi_25 .tdc-columns{width:100%}</style><div class="vc_column tdi_27  wpb_column vc_column_container tdc-column td-pb-span12">
<style scoped>.tdi_27{vertical-align:baseline}.tdi_27>.wpb_wrapper,.tdi_27>.wpb_wrapper>.tdc-elements{display:block}.tdi_27>.wpb_wrapper>.tdc-elements{width:100%}.tdi_27>.wpb_wrapper>.vc_row_inner{width:auto}.tdi_27>.wpb_wrapper{width:auto;height:auto}</style><div class="wpb_wrapper"><div class="vc_row_inner tdi_29  vc_row vc_inner wpb_row td-pb-row tdc-row-content-vert-center">
<style scoped>.tdi_29{position:relative!important;top:0;transform:none;-webkit-transform:none}.tdi_29,.tdi_29 .tdc-inner-columns{display:block}.tdi_29 .tdc-inner-columns{width:100%}@media (min-width:768px){.tdi_29{margin-left:-0px;margin-right:-0px}.tdi_29 .vc_column_inner{padding-left:0px;padding-right:0px}}@media (min-width:767px){.tdi_29.tdc-row-content-vert-center,.tdi_29.tdc-row-content-vert-center .tdc-inner-columns{display:flex;align-items:center;flex:1}.tdi_29.tdc-row-content-vert-bottom,.tdi_29.tdc-row-content-vert-bottom .tdc-inner-columns{display:flex;align-items:flex-end;flex:1}.tdi_29.tdc-row-content-vert-center .td_block_wrap{vertical-align:middle}.tdi_29.tdc-row-content-vert-bottom .td_block_wrap{vertical-align:bottom}}.tdi_29{padding-top:28px!important;padding-bottom:9px!important}.tdi_29 .td_block_wrap{text-align:left}@media (min-width:768px) and (max-width:1018px){.tdi_29{margin-bottom:-3px!important;padding-top:9px!important;padding-bottom:0px!important}}</style><div class="vc_column_inner tdi_31  wpb_column vc_column_container tdc-inner-column td-pb-span4">
<style scoped>.tdi_31{vertical-align:baseline}.tdi_31 .vc_column-inner>.wpb_wrapper,.tdi_31 .vc_column-inner>.wpb_wrapper .tdc-elements{display:block}.tdi_31 .vc_column-inner>.wpb_wrapper .tdc-elements{width:100%}.tdi_31{width:30%!important}@media (min-width:1019px) and (max-width:1140px){.tdi_31{width:24%!important}}@media (min-width:768px) and (max-width:1018px){.tdi_31{width:calc(100% - 468px)!important}}</style><div class="vc_column-inner"><div class="wpb_wrapper"><div class="td_block_wrap tdb_header_logo tdi_32 td-pb-border-top td_block_template_1 tdb-header-align" data-td-block-uid="tdi_32">
<style>.tdi_32 .tdb-logo-a,.tdi_32 h1{flex-direction:row}.tdi_32 .tdb-logo-a,.tdi_32 h1{align-items:center;justify-content:center}.tdi_32 .tdb-logo-svg-wrap{display:block}.tdi_32 .tdb-logo-svg-wrap+.tdb-logo-img-wrap{display:none}.tdi_32 .tdb-logo-img-wrap{display:block}.tdi_32 .tdb-logo-text-tagline{margin-top:2px;margin-left:0;display:block}.tdi_32 .tdb-logo-text-title{display:block}.tdi_32 .tdb-logo-text-wrap{flex-direction:column;align-items:flex-start}.tdi_32 .tdb-logo-icon{top:0px;display:block}@media (min-width:768px) and (max-width:1018px){.tdi_32 .tdb-logo-img{max-width:220px}}</style><div class="tdb-block-inner td-fix-index"><a class="tdb-logo-a" href="https://golpershohor.com/"><span class="tdb-logo-img-wrap"><img class="tdb-logo-img" src="https://golpershohor.com/wp-content/uploads/2022/03/272.90-300x99.png" alt="Logo" title /></span></a></div></div> </div></div></div><div class="vc_column_inner tdi_34  wpb_column vc_column_container tdc-inner-column td-pb-span8">
<style scoped>.tdi_34{vertical-align:baseline}.tdi_34 .vc_column-inner>.wpb_wrapper,.tdi_34 .vc_column-inner>.wpb_wrapper .tdc-elements{display:block}.tdi_34 .vc_column-inner>.wpb_wrapper .tdc-elements{width:100%}.tdi_34{width:70%!important}@media (min-width:1019px) and (max-width:1140px){.tdi_34{width:76%!important}}@media (min-width:768px) and (max-width:1018px){.tdi_34{width:468px!important}}</style><div class="vc_column-inner"><div class="wpb_wrapper"><div class="td-block td-a-rec td-a-rec-id-custom-spot tdi_35 td_block_template_1">
<style>.tdi_35{margin-bottom:0px!important}</style>
<style>.tdi_35.td-a-rec{transform:translateZ(0);text-align:center}.tdi_35 .td-element-style{z-index:-1}.tdi_35.td-a-rec-img{text-align:right}.tdi_35.td-a-rec-img img{margin:0 0 0 auto}@media (max-width:767px){.tdi_35.td-a-rec-img{text-align:center}}</style><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6468708806497207" crossorigin="anonymous" type="3946b4c98583e17aafee7bf2-text/javascript"></script>

<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6468708806497207" data-ad-slot="5020971744" data-ad-format="auto" data-full-width-responsive="true"></ins>
<script type="3946b4c98583e17aafee7bf2-text/javascript">
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div></div></div></div></div><div class="vc_row_inner tdi_37  vc_row vc_inner wpb_row td-pb-row">
<style scoped>.tdi_37{position:relative!important;top:0;transform:none;-webkit-transform:none}.tdi_37,.tdi_37 .tdc-inner-columns{display:block}.tdi_37 .tdc-inner-columns{width:100%}</style><div class="vc_column_inner tdi_39  wpb_column vc_column_container tdc-inner-column td-pb-span12">
<style scoped>.tdi_39{vertical-align:baseline}.tdi_39 .vc_column-inner>.wpb_wrapper,.tdi_39 .vc_column-inner>.wpb_wrapper .tdc-elements{display:block}.tdi_39 .vc_column-inner>.wpb_wrapper .tdc-elements{width:100%}</style><div class="vc_column-inner"><div class="wpb_wrapper"><div class="td_block_wrap tdb_header_menu tdi_40 tds_menu_active1 tds_menu_sub_active1 tdb-head-menu-inline tdb-mm-align-screen td-pb-border-top td_block_template_1 tdb-header-align" data-td-block-uid="tdi_40" style=" z-index: 999;">
<style>.tdb_header_menu{margin-bottom:0;z-index:999;clear:none}.tdb_header_menu .tdb-main-sub-icon-fake,.tdb_header_menu .tdb-sub-icon-fake{display:none}.rtl .tdb_header_menu .tdb-menu{display:flex}.tdb_header_menu .tdb-menu{display:inline-block;vertical-align:middle;margin:0}.tdb_header_menu .tdb-menu .tdb-mega-menu-inactive,.tdb_header_menu .tdb-menu .tdb-menu-item-inactive{pointer-events:none}.tdb_header_menu .tdb-menu .tdb-mega-menu-inactive>ul,.tdb_header_menu .tdb-menu .tdb-menu-item-inactive>ul{visibility:hidden;opacity:0}.tdb_header_menu .tdb-menu .sub-menu{font-size:14px;position:absolute;top:-999em;background-color:#fff;z-index:99}.tdb_header_menu .tdb-menu .sub-menu>li{list-style-type:none;margin:0;font-family:'Open Sans','Open Sans Regular',sans-serif}.tdb_header_menu .tdb-menu>li{float:left;list-style-type:none;margin:0}.tdb_header_menu .tdb-menu>li>a{position:relative;display:inline-block;padding:0 14px;font-weight:700;font-size:14px;line-height:48px;vertical-align:middle;text-transform:uppercase;-webkit-backface-visibility:hidden;color:#000;font-family:'Open Sans','Open Sans Regular',sans-serif}.tdb_header_menu .tdb-menu>li>a:after{content:'';position:absolute;bottom:0;left:0;right:0;margin:0 auto;width:0;height:3px;background-color:var(--td_theme_color,#4db2ec);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:width 0.2s ease;transition:width 0.2s ease}.tdb_header_menu .tdb-menu>li>a>.tdb-menu-item-text{display:inline-block}.tdb_header_menu .tdb-menu>li>a .tdb-menu-item-text,.tdb_header_menu .tdb-menu>li>a span{vertical-align:middle;float:left}.tdb_header_menu .tdb-menu>li>a .tdb-sub-menu-icon{margin:0 0 0 7px}.tdb_header_menu .tdb-menu>li>a .tdb-sub-menu-icon-svg{float:none;line-height:0}.tdb_header_menu .tdb-menu>li>a .tdb-sub-menu-icon-svg svg{width:14px;height:auto}.tdb_header_menu .tdb-menu>li>a .tdb-sub-menu-icon-svg svg,.tdb_header_menu .tdb-menu>li>a .tdb-sub-menu-icon-svg svg *{fill:#000}.tdb_header_menu .tdb-menu>li.current-menu-item>a:after,.tdb_header_menu .tdb-menu>li.current-menu-ancestor>a:after,.tdb_header_menu .tdb-menu>li.current-category-ancestor>a:after,.tdb_header_menu .tdb-menu>li:hover>a:after,.tdb_header_menu .tdb-menu>li.tdb-hover>a:after{width:100%}.tdb_header_menu .tdb-menu>li:hover>ul,.tdb_header_menu .tdb-menu>li.tdb-hover>ul{top:auto;display:block!important}.tdb_header_menu .tdb-menu>li.td-normal-menu>ul.sub-menu{top:auto;left:0;z-index:99}.tdb_header_menu .tdb-menu>li .tdb-menu-sep{position:relative;vertical-align:middle;font-size:14px}.tdb_header_menu .tdb-menu>li .tdb-menu-sep-svg{line-height:0}.tdb_header_menu .tdb-menu>li .tdb-menu-sep-svg svg{width:14px;height:auto}.tdb_header_menu .tdb-menu>li:last-child .tdb-menu-sep{display:none}.tdb_header_menu .tdb-menu-item-text{word-wrap:break-word}.tdb_header_menu .tdb-menu-item-text,.tdb_header_menu .tdb-sub-menu-icon,.tdb_header_menu .tdb-menu-more-subicon{vertical-align:middle}.tdb_header_menu .tdb-sub-menu-icon,.tdb_header_menu .tdb-menu-more-subicon{position:relative;top:0;padding-left:0}.tdb_header_menu .tdb-normal-menu{position:relative}.tdb_header_menu .tdb-normal-menu ul{left:0;padding:15px 0;text-align:left}.tdb_header_menu .tdb-normal-menu ul ul{margin-top:-15px}.tdb_header_menu .tdb-normal-menu ul .tdb-menu-item{position:relative;list-style-type:none}.tdb_header_menu .tdb-normal-menu ul .tdb-menu-item>a{position:relative;display:block;padding:7px 30px;font-size:12px;line-height:20px;color:#111}.tdb_header_menu .tdb-normal-menu ul .tdb-menu-item>a .tdb-sub-menu-icon,.tdb_header_menu .td-pulldown-filter-list .tdb-menu-item>a .tdb-sub-menu-icon{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);right:0;padding-right:inherit;font-size:7px;line-height:20px}.tdb_header_menu .tdb-normal-menu ul .tdb-menu-item>a .tdb-sub-menu-icon-svg,.tdb_header_menu .td-pulldown-filter-list .tdb-menu-item>a .tdb-sub-menu-icon-svg{line-height:0}.tdb_header_menu .tdb-normal-menu ul .tdb-menu-item>a .tdb-sub-menu-icon-svg svg,.tdb_header_menu .td-pulldown-filter-list .tdb-menu-item>a .tdb-sub-menu-icon-svg svg{width:7px;height:auto}.tdb_header_menu .tdb-normal-menu ul .tdb-menu-item>a .tdb-sub-menu-icon-svg svg,.tdb_header_menu .tdb-normal-menu ul .tdb-menu-item>a .tdb-sub-menu-icon-svg svg *,.tdb_header_menu .td-pulldown-filter-list .tdb-menu-item>a .tdb-sub-menu-icon svg,.tdb_header_menu .td-pulldown-filter-list .tdb-menu-item>a .tdb-sub-menu-icon svg *{fill:#000}.tdb_header_menu .tdb-normal-menu ul .tdb-menu-item:hover>ul,.tdb_header_menu .tdb-normal-menu ul .tdb-menu-item.tdb-hover>ul{top:0;display:block!important}.tdb_header_menu .tdb-normal-menu ul .tdb-menu-item.current-menu-item>a,.tdb_header_menu .tdb-normal-menu ul .tdb-menu-item.current-menu-ancestor>a,.tdb_header_menu .tdb-normal-menu ul .tdb-menu-item.current-category-ancestor>a,.tdb_header_menu .tdb-normal-menu ul .tdb-menu-item.tdb-hover>a,.tdb_header_menu .tdb-normal-menu ul .tdb-menu-item:hover>a{color:var(--td_theme_color,#4db2ec)}.tdb_header_menu .tdb-normal-menu>ul{left:-15px}.tdb_header_menu.tdb-menu-sub-inline .tdb-normal-menu ul,.tdb_header_menu.tdb-menu-sub-inline .td-pulldown-filter-list{width:100%!important}.tdb_header_menu.tdb-menu-sub-inline .tdb-normal-menu ul li,.tdb_header_menu.tdb-menu-sub-inline .td-pulldown-filter-list li{display:inline-block;width:auto!important}.tdb_header_menu.tdb-menu-sub-inline .tdb-normal-menu,.tdb_header_menu.tdb-menu-sub-inline .tdb-normal-menu .tdb-menu-item{position:static}.tdb_header_menu.tdb-menu-sub-inline .tdb-normal-menu ul ul{margin-top:0!important}.tdb_header_menu.tdb-menu-sub-inline .tdb-normal-menu>ul{left:0!important}.tdb_header_menu.tdb-menu-sub-inline .tdb-normal-menu .tdb-menu-item>a .tdb-sub-menu-icon{float:none;line-height:1}.tdb_header_menu.tdb-menu-sub-inline .tdb-normal-menu .tdb-menu-item:hover>ul,.tdb_header_menu.tdb-menu-sub-inline .tdb-normal-menu .tdb-menu-item.tdb-hover>ul{top:100%}.tdb_header_menu.tdb-menu-sub-inline .tdb-menu-items-dropdown{position:static}.tdb_header_menu.tdb-menu-sub-inline .td-pulldown-filter-list{left:0!important}.tdb-menu .tdb-mega-menu .sub-menu{-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;width:1114px!important}.tdb-menu .tdb-mega-menu .sub-menu,.tdb-menu .tdb-mega-menu .sub-menu>li{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tdb-menu .tdb-mega-menu .sub-menu>li{top:0;width:100%;max-width:1114px!important;height:auto;background-color:#fff;border:1px solid #eaeaea;overflow:hidden}.tdc-dragged .tdb-block-menu ul{visibility:hidden!important;opacity:0!important;-webkit-transition:all 0.3s ease;transition:all 0.3s ease}.tdb-mm-align-screen .tdb-menu .tdb-mega-menu .sub-menu{-webkit-transform:translateX(0);transform:translateX(0)}.tdb-mm-align-parent .tdb-menu .tdb-mega-menu{position:relative}.tdb-menu .tdb-mega-menu .tdc-row:not([class*='stretch_row_']),.tdb-menu .tdb-mega-menu .tdc-row-composer:not([class*='stretch_row_']){width:auto!important;max-width:1240px}.tdb-menu .tdb-mega-menu-page>.sub-menu>li .tdb-page-tpl-edit-btns{position:absolute;top:0;left:0;display:none;flex-wrap:wrap;gap:0 4px}.tdb-menu .tdb-mega-menu-page>.sub-menu>li:hover .tdb-page-tpl-edit-btns{display:flex}.tdb-menu .tdb-mega-menu-page>.sub-menu>li .tdb-page-tpl-edit-btn{background-color:#000;padding:1px 8px 2px;font-size:11px;color:#fff;z-index:100}.tdi_40{display:inline-block}.tdi_40 .tdb-menu>li .tdb-menu-sep,.tdi_40 .tdb-menu-items-dropdown .tdb-menu-sep{top:-1px}.tdi_40 .tdb-menu>li>a .tdb-sub-menu-icon,.tdi_40 .td-subcat-more .tdb-menu-more-subicon{top:-1px}.tdi_40 .td-subcat-more .tdb-menu-more-icon{top:0px}.tdi_40 .tdb-normal-menu ul .tdb-menu-item>a .tdb-sub-menu-icon,.tdi_40 .td-pulldown-filter-list .tdb-menu-item>a .tdb-sub-menu-icon{right:0;margin-top:1px}.tdi_40 .tdb-menu .tdb-normal-menu ul,.tdi_40 .td-pulldown-filter-list,.tdi_40 .td-pulldown-filter-list .sub-menu{box-shadow:1px 1px 4px 0px rgba(0,0,0,0.15)}.tdi_40:not(.tdb-mm-align-screen) .tdb-mega-menu .sub-menu,.tdi_40 .tdb-mega-menu .sub-menu>li{max-width:1300px!important}.tdi_40 .tdb-mega-menu .tdb_header_mega_menu{min-height:345px}.tdi_40 .tdb-menu .tdb-mega-menu .sub-menu>li{box-shadow:0px 2px 6px 0px rgba(0,0,0,0.1)}@media (max-width:1140px){.tdb-menu .tdb-mega-menu .sub-menu>li{width:100%!important}}@media (min-width:1019px) and (max-width:1140px){.tdi_40 .tdb-mega-menu .tdb_header_mega_menu{min-height:300px}}@media (min-width:768px) and (max-width:1018px){.tdi_40 .tdb-menu>li>a,.tdi_40 .td-subcat-more{padding:0 12px}.tdi_40 .tdb-menu>li>a,.tdi_40 .td-subcat-more,.tdi_40 .td-subcat-more>.tdb-menu-item-text{font-size:11px!important;line-height:48px!important}.tdi_40 .tdb-mega-menu .tdb_header_mega_menu{min-height:240px}.tdi_40 .tdb-mega-menu-page>.sub-menu>li{padding:14px}}</style>
<style>.tdi_40 .tdb-menu>li>a:after,.tdi_40 .tdb-menu-items-dropdown .td-subcat-more:after{background-color:}.tdi_40 .tdb-menu>li>a:after,.tdi_40 .tdb-menu-items-dropdown .td-subcat-more:after{bottom:0px}</style>
<style></style><div id="tdi_40" class="td_block_inner td-fix-index"><div class="tdb-main-sub-icon-fake"><i class="tdb-sub-menu-icon td-icon-down tdb-main-sub-menu-icon"></i></div><div class="tdb-sub-icon-fake"><i class="tdb-sub-menu-icon td-icon-right-arrow"></i></div><ul id="menu-main-mane-4" class="tdb-block-menu tdb-menu tdb-menu-items-visible"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-first tdb-menu-item-button tdb-menu-item tdb-normal-menu menu-item-23036"><a href="https://golpershohor.com/"><div class="tdb-menu-item-text">Home</div></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page tdb-menu-item-button tdb-menu-item tdb-normal-menu menu-item-33336"><a href="https://golpershohor.com/ongoing-story/"><div class="tdb-menu-item-text">চলমান নতুন গল্প</div></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children tdb-menu-item-button tdb-menu-item tdb-normal-menu menu-item-394 tdb-menu-item-inactive"><a href="https://golpershohor.com/categotirs/"><div class="tdb-menu-item-text">Categotirs</div><i class="tdb-sub-menu-icon td-icon-down tdb-main-sub-menu-icon"></i></a>
<ul class="sub-menu">
<li class="menu-item menu-item-type-post_type menu-item-object-page tdb-menu-item tdb-normal-menu menu-item-3461"><a href="https://golpershohor.com/categotirs-mobile/"><div class="tdb-menu-item-text">Categotirs – mobile</div></a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page tdb-menu-item-button tdb-menu-item tdb-normal-menu menu-item-23488"><a href="https://golpershohor.com/home-mobile/"><div class="tdb-menu-item-text">Home – mobile</div></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy tdb-menu-item-button tdb-menu-item tdb-normal-menu menu-item-278"><a href="https://golpershohor.com/privacy-policy/"><div class="tdb-menu-item-text">Privacy Policy</div></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page tdb-menu-item-button tdb-menu-item tdb-normal-menu menu-item-36739"><a href="https://golpershohor.com/tds-checkout/"><div class="tdb-menu-item-text">Checkout</div></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page tdb-menu-item-button tdb-menu-item tdb-normal-menu menu-item-36741"><a href="https://golpershohor.com/tds-my-account/"><div class="tdb-menu-item-text">My account</div></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page tdb-menu-item-button tdb-menu-item tdb-normal-menu menu-item-36743"><a href="https://golpershohor.com/tds-login-register/"><div class="tdb-menu-item-text">Login/Register</div></a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page tdb-menu-item-button tdb-menu-item tdb-normal-menu menu-item-37211"><a href="https://golpershohor.com/cookie-policy-eu/"><div class="tdb-menu-item-text">Cookie Policy (EU)</div></a></li>
</ul></div></div><div class="td_block_wrap tdb_header_search tdi_43 tdb-header-search-trigger-enabled td-pb-border-top td_block_template_1 tdb-header-align" data-td-block-uid="tdi_43">
<style>@media (min-width:768px) and (max-width:1018px){.tdi_43{margin-top:1px!important}}</style>
<style>.tdb_module_header{width:100%;padding-bottom:0}.tdb_module_header .td-module-container{display:flex;flex-direction:column;position:relative}.tdb_module_header .td-module-container:before{content:'';position:absolute;bottom:0;left:0;width:100%;height:1px}.tdb_module_header .td-image-wrap{display:block;position:relative;padding-bottom:70%}.tdb_module_header .td-image-container{position:relative;width:100%;flex:0 0 auto}.tdb_module_header .td-module-thumb{margin-bottom:0}.tdb_module_header .td-module-meta-info{width:100%;margin-bottom:0;padding:7px 0 0 0;z-index:1;border:0 solid #eaeaea;min-height:0}.tdb_module_header .entry-title{margin:0;font-size:13px;font-weight:500;line-height:18px}.tdb_module_header .td-post-author-name,.tdb_module_header .td-post-date,.tdb_module_header .td-module-comments{vertical-align:text-top}.tdb_module_header .td-post-author-name,.tdb_module_header .td-post-date{top:3px}.tdb_module_header .td-thumb-css{width:100%;height:100%;position:absolute;background-size:cover;background-position:center center}.tdb_module_header .td-category-pos-image .td-post-category:not(.td-post-extra-category),.tdb_module_header .td-post-vid-time{position:absolute;z-index:2;bottom:0}.tdb_module_header .td-category-pos-image .td-post-category:not(.td-post-extra-category){left:0}.tdb_module_header .td-post-vid-time{right:0;background-color:#000;padding:3px 6px 4px;font-family:'Open Sans','Open Sans Regular',sans-serif;font-size:10px;font-weight:600;line-height:1;color:#fff}.tdb_module_header .td-excerpt{margin:20px 0 0;line-height:21px}.tdb_module_header .td-read-more{margin:20px 0 0}.tdb_module_search .tdb-author-photo{display:inline-block}.tdb_module_search .tdb-author-photo,.tdb_module_search .tdb-author-photo img{vertical-align:middle}.tdb_module_search .td-post-author-name{white-space:normal}.tdb_header_search{margin-bottom:0;clear:none}.tdb_header_search .tdb-block-inner{position:relative;display:inline-block;width:100%}.tdb_header_search .tdb-search-form{position:relative;padding:20px;border-width:3px 0 0;border-style:solid;border-color:var(--td_theme_color,#4db2ec);pointer-events:auto}.tdb_header_search .tdb-search-form:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fff}.tdb_header_search .tdb-search-form-inner{position:relative;display:flex;background-color:#fff}.tdb_header_search .tdb-search-form-inner:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;border:1px solid #e1e1e1;pointer-events:none}.tdb_header_search .tdb-head-search-placeholder{position:absolute;top:50%;transform:translateY(-50%);padding:3px 9px;font-size:12px;line-height:21px;color:#999;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;pointer-events:none}.tdb_header_search .tdb-head-search-form-input:focus+.tdb-head-search-placeholder,.tdb-head-search-form-input:not(:placeholder-shown)~.tdb-head-search-placeholder{opacity:0}.tdb_header_search .tdb-head-search-form-btn,.tdb_header_search .tdb-head-search-form-input{height:auto;min-height:32px}.tdb_header_search .tdb-head-search-form-input{color:#444;flex:1;background-color:transparent;border:0}.tdb_header_search .tdb-head-search-form-input.tdb-head-search-nofocus{color:transparent;text-shadow:0 0 0 #444}.tdb_header_search .tdb-head-search-form-btn{margin-bottom:0;padding:0 15px;background-color:#222222;font-family:'Roboto',sans-serif;font-size:13px;font-weight:500;color:#fff;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;z-index:1}.tdb_header_search .tdb-head-search-form-btn:hover{background-color:var(--td_theme_color,#4db2ec)}.tdb_header_search .tdb-head-search-form-btn i,.tdb_header_search .tdb-head-search-form-btn span{display:inline-block;vertical-align:middle}.tdb_header_search .tdb-head-search-form-btn i{font-size:12px}.tdb_header_search .tdb-head-search-form-btn .tdb-head-search-form-btn-icon{position:relative}.tdb_header_search .tdb-head-search-form-btn .tdb-head-search-form-btn-icon-svg{line-height:0}.tdb_header_search .tdb-head-search-form-btn svg{width:12px;height:auto}.tdb_header_search .tdb-head-search-form-btn svg,.tdb_header_search .tdb-head-search-form-btn svg *{fill:#fff;-webkit-transition:all 0.3s ease;transition:all 0.3s ease}.tdb_header_search .tdb-aj-search-results{padding:20px;background-color:rgba(144,144,144,0.02);border-width:1px 0;border-style:solid;border-color:#ededed;background-color:#fff}.tdb_header_search .tdb-aj-search-results .td_module_wrap:last-child{margin-bottom:0;padding-bottom:0}.tdb_header_search .tdb-aj-search-results .td_module_wrap:last-child .td-module-container:before{display:none}.tdb_header_search .tdb-aj-search-inner{display:flex;flex-wrap:wrap;*zoom:1}.tdb_header_search .tdb-aj-search-inner:before,.tdb_header_search .tdb-aj-search-inner:after{display:table;content:'';line-height:0}.tdb_header_search .tdb-aj-search-inner:after{clear:both}.tdb_header_search .result-msg{padding:4px 0 6px 0;font-family:'Roboto',sans-serif;font-size:12px;font-style:italic;background-color:#fff}.tdb_header_search .result-msg a{color:#222}.tdb_header_search .result-msg a:hover{color:var(--td_theme_color,#4db2ec)}.tdb_header_search .td-module-meta-info,.tdb_header_search .td-next-prev-wrap{text-align:left}.tdb_header_search .td_module_wrap:hover .entry-title a{color:var(--td_theme_color,#4db2ec)}.tdb_header_search .tdb-aj-cur-element .entry-title a{color:var(--td_theme_color,#4db2ec)}.tdc-dragged .tdb-head-search-btn:after,.tdc-dragged .tdb-drop-down-search{visibility:hidden!important;opacity:0!important;-webkit-transition:all 0.3s ease;transition:all 0.3s ease}.tdb-header-search-trigger-enabled{z-index:1000}.tdb-header-search-trigger-enabled .tdb-head-search-btn{display:flex;align-items:center;position:relative;text-align:center;color:var(--td_theme_color,#4db2ec)}.tdb-header-search-trigger-enabled .tdb-head-search-btn:after{visibility:hidden;opacity:0;content:'';display:block;position:absolute;bottom:0;left:0;right:0;margin:0 auto;width:0;height:0;border-style:solid;border-width:0 6.5px 7px 6.5px;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0);-webkit-transition:all 0.4s ease;transition:all 0.4s ease;border-color:transparent transparent var(--td_theme_color,#4db2ec) transparent}.tdb-header-search-trigger-enabled .tdb-drop-down-search-open+.tdb-head-search-btn:after{visibility:visible;opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.tdb-header-search-trigger-enabled .tdb-search-icon,.tdb-header-search-trigger-enabled .tdb-search-txt,.tdb-header-search-trigger-enabled .tdb-search-icon-svg svg *{-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}.tdb-header-search-trigger-enabled .tdb-search-icon-svg{display:flex;align-items:center;justify-content:center}.tdb-header-search-trigger-enabled .tdb-search-icon-svg svg{height:auto}.tdb-header-search-trigger-enabled .tdb-search-icon-svg svg,.tdb-header-search-trigger-enabled .tdb-search-icon-svg svg *{fill:var(--td_theme_color,#4db2ec)}.tdb-header-search-trigger-enabled .tdb-search-txt{position:relative;line-height:1}.tdb-header-search-trigger-enabled .tdb-drop-down-search{visibility:hidden;opacity:0;position:absolute;top:100%;left:0;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0);-webkit-transition:all 0.4s ease;transition:all 0.4s ease;pointer-events:none;z-index:10}.tdb-header-search-trigger-enabled .tdb-drop-down-search-open{visibility:visible;opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.tdb-header-search-trigger-enabled .tdb-drop-down-search-inner{position:relative;max-width:300px;pointer-events:all}.rtl .tdb-header-search-trigger-enabled .tdb-drop-down-search-inner{margin-left:0;margin-right:auto}.tdb_header_search .tdb-aj-srs-title{margin-bottom:10px;font-family:'Roboto',sans-serif;font-weight:500;font-size:13px;line-height:1.3;color:#888}.tdb_header_search .tdb-aj-sr-taxonomies{display:flex;flex-direction:column}.tdb_header_search .tdb-aj-sr-taxonomy{font-family:'Roboto',sans-serif;font-size:13px;font-weight:500;line-height:18px;color:#111}.tdb_header_search .tdb-aj-sr-taxonomy:not(:last-child){margin-bottom:5px}.tdb_header_search .tdb-aj-sr-taxonomy:hover{color:var(--td_theme_color,#4db2ec)}.tdi_43 .tdb-head-search-btn i{font-size:20px;width:48px;height:48px;line-height:48px;color:#000000}.tdi_43 .tdb-head-search-btn svg{width:20px}.tdi_43 .tdb-search-icon-svg{width:48px;height:48px}.tdi_43{display:inline-block;float:right;clear:none}.tdi_43 .tdb-search-txt{top:0px}.tdi_43 .tdb-drop-down-search .tdb-drop-down-search-inner{max-width:600px}.tdi_43 .tdb-search-form{padding:30px;border-width:0px}.tdi_43 .tdb-drop-down-search{left:auto;right:0}body .tdi_43 .tdb-drop-down-search-inner,.tdi_43 .tdb-search-form,.tdi_43 .tdb-aj-search{margin-left:auto;margin-right:0}.tdi_43 .tdb-search-form-inner:after{border-width:0 0 1px 0}.tdi_43 .tdb-head-search-form-btn i{font-size:7px}.tdi_43 .tdb-head-search-form-btn-icon{margin-left:8px;top:0px}.tdi_43 .tdb-head-search-form-btn{padding:0px;color:#000000;background-color:rgba(0,0,0,0)}.tdi_43 .tdb-aj-search-results{padding:0 30px 30px;border-width:0 0 1px 0}.tdi_43 .result-msg{padding:10px 0;text-align:center;font-style:normal!important}.tdi_43 .tdb-head-search-btn svg,.tdi_43 .tdb-head-search-btn svg *{fill:#000000}.tdi_43 .tdb-head-search-btn:after{border-bottom-color:#ffffff}.tdi_43 .tdb-drop-down-search-inner{box-shadow:0px 3px 6px 0px rgba(0,0,0,0.2)}.tdi_43 .tdb-head-search-form-btn svg,.tdi_43 .tdb-head-search-form-btn svg *{fill:#000000}.tdi_43 .tdb-head-search-form-btn:hover{color:#4db2ec;background-color:rgba(0,0,0,0)}.tdi_43 .tdb-head-search-form-btn:hover svg,.tdi_43 .tdb-head-search-form-btn:hover svg *{fill:#4db2ec}.tdi_43 .result-msg a:hover{color:#4db2ec}.tdi_43 .td_module_wrap{width:50%;float:left;padding-left:10px;padding-right:10px;padding-bottom:10px;margin-bottom:10px}.tdi_43 .td_module_wrap:nth-last-child(-n+2){margin-bottom:0;padding-bottom:0}.tdi_43 .td_module_wrap:nth-last-child(-n+2) .td-module-container:before{display:none}.tdi_43 .tdb-aj-search-inner{margin-left:-10px;margin-right:-10px}.tdi_43 .td-module-container:before{bottom:-10px}.tdi_43 .entry-thumb{background-position:center 50%}.tdi_43 .td-image-wrap{padding-bottom:100%}.tdi_43 .td-image-container{flex:0 0 30%;width:30%;display:block;order:0}.ie10 .tdi_43 .td-image-container,.ie11 .tdi_43 .td-image-container{flex:0 0 auto}.tdi_43 .td-module-container{flex-direction:row}.ie10 .tdi_43 .td-module-meta-info,.ie11 .tdi_43 .td-module-meta-info{flex:1}.tdi_43 .td-video-play-ico{width:24px;height:24px;font-size:24px}.tdi_43 .td-post-vid-time{display:block}.tdi_43 .td-module-meta-info{padding:3px 0 0 16px;border-color:#eaeaea}.tdi_43 .entry-title{margin:0 0 2px 0;font-size:13px!important;line-height:1.4!important}.tdi_43 .td-excerpt{column-count:1;column-gap:48px;display:none}.tdi_43 .td-post-category:not(.td-post-extra-category){display:none}.tdi_43 .td-read-more{display:none}.tdi_43 .td-author-date{display:inline}.tdi_43 .td-post-author-name{display:none}.tdi_43 .td-icon-star,.tdi_43 .td-icon-star-empty,.tdi_43 .td-icon-star-half{font-size:15px}.tdi_43 .td-module-comments{display:none}.tdi_43 .tdb-author-photo .avatar{width:20px;height:20px;margin-right:6px;border-radius:50%}body .tdi_43 .td_module_wrap:hover .td-module-title a,.tdi_43 .tdb-aj-cur-element .entry-title a{color:#4db2ec!important}.tdi_43 .td-post-category{text-transform:uppercase!important}.tdi_43 .td-module-exclusive .td-module-title a:before{display:inline-block}@media (min-width:1019px) and (max-width:1140px){.tdi_43 .td_module_wrap{padding-bottom:10px!important;margin-bottom:10px!important}.tdi_43 .td_module_wrap:nth-last-child(-n+2){margin-bottom:0!important;padding-bottom:0!important}.tdi_43 .td_module_wrap .td-module-container:before{display:block!important}.tdi_43 .td_module_wrap:nth-last-child(-n+2) .td-module-container:before{display:none!important}.tdi_43 .td_module_wrap{padding-bottom:10px;margin-bottom:10px}.tdi_43 .td-module-container:before{bottom:-10px}}@media (min-width:768px) and (max-width:1018px){.tdi_43 .tdb-head-search-btn i{font-size:18px}.tdi_43 .tdb-head-search-btn svg{width:18px}.tdi_43 .tdb-head-search-btn i{width:46.8px;height:46.8px;line-height:46.8px}.tdi_43 .tdb-search-icon-svg{width:46.8px;height:46.8px}.tdi_43 .tdb-search-form{padding:20px 20px 20px}.tdi_43 .td_module_wrap{padding-bottom:10px!important;margin-bottom:10px!important;padding-bottom:10px;margin-bottom:10px}.tdi_43 .td_module_wrap:nth-last-child(-n+2){margin-bottom:0!important;padding-bottom:0!important}.tdi_43 .td_module_wrap .td-module-container:before{display:block!important}.tdi_43 .td_module_wrap:nth-last-child(-n+2) .td-module-container:before{display:none!important}.tdi_43 .td-module-container:before{bottom:-10px}}@media (max-width:767px){.tdi_43 .td_module_wrap{padding-bottom:10px!important;margin-bottom:10px!important}.tdi_43 .td_module_wrap:nth-last-child(-n+2){margin-bottom:0!important;padding-bottom:0!important}.tdi_43 .td_module_wrap .td-module-container:before{display:block!important}.tdi_43 .td_module_wrap:nth-last-child(-n+2) .td-module-container:before{display:none!important}.tdi_43 .td_module_wrap{padding-bottom:10px;margin-bottom:10px}.tdi_43 .td-module-container:before{bottom:-10px}}</style><div class="tdb-block-inner td-fix-index"><div class="tdb-drop-down-search" aria-labelledby="td-header-search-button"><div class="tdb-drop-down-search-inner"><form method="get" class="tdb-search-form" action="https://golpershohor.com/"><div class="tdb-search-form-inner"><input class="tdb-head-search-form-input" placeholder=" " type="text" value name="s" autocomplete="off" /><button class="wpb_button wpb_btn-inverse btn tdb-head-search-form-btn" title="Search" type="submit"><span>Search</span><i class="tdb-head-search-form-btn-icon td-icon-menu-right"></i></button></div></form><div class="tdb-aj-search"></div></div></div><a href="#" role="button" aria-label="Search" class="tdb-head-search-btn dropdown-toggle" data-toggle="dropdown"><span class="tdb-search-icon tdb-search-icon-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M946.371 843.601l-125.379-125.44c43.643-65.925 65.495-142.1 65.475-218.040 0.051-101.069-38.676-202.588-115.835-279.706-77.117-77.148-178.606-115.948-279.644-115.886-101.079-0.061-202.557 38.738-279.665 115.876-77.169 77.128-115.937 178.627-115.907 279.716-0.031 101.069 38.728 202.588 115.907 279.665 77.117 77.117 178.616 115.825 279.665 115.804 75.94 0.020 152.136-21.862 218.061-65.495l125.348 125.46c30.915 30.904 81.029 30.904 111.954 0.020 30.915-30.935 30.915-81.029 0.020-111.974zM705.772 714.925c-59.443 59.341-136.899 88.842-214.784 88.924-77.896-0.082-155.341-29.583-214.784-88.924-59.443-59.484-88.975-136.919-89.037-214.804 0.061-77.885 29.604-155.372 89.037-214.825 59.464-59.443 136.878-88.945 214.784-89.016 77.865 0.082 155.3 29.583 214.784 89.016 59.361 59.464 88.914 136.919 88.945 214.825-0.041 77.885-29.583 155.361-88.945 214.804z"></path></svg></span></a></div></div> </div></div></div></div></div></div></div></div></div></div> </div>
</div>
<div class="td-main-content-wrap td-container-wrap">
<div class="td-container td-post-template-default ">
<div class="td-crumb-container"><div class="entry-crumbs"><span><a title class="entry-crumb" href="https://golpershohor.com/">Home</a></span> <i class="td-icon-right td-bread-sep"></i> <span><a title="View all posts in “ধারাবাহিক গল্প”" class="entry-crumb" href="https://golpershohor.com/category/dharabahik-golpo/">“ধারাবাহিক গল্প”</a></span> <i class="td-icon-right td-bread-sep"></i> <span><a title="View all posts in &quot;&quot;মায়াবন_বিহারিনী_হরিণী 🌼🌼" class="entry-crumb" href="https://golpershohor.com/category/dharabahik-golpo/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%f0%9f%8c%bc/">&quot;&quot;মায়াবন_বিহারিনী_হরিণী 🌼🌼</a></span> <i class="td-icon-right td-bread-sep td-bred-no-url-last"></i> <span class="td-bred-no-url-last">মায়াবন_বিহারিনী_হরিণী ২০ #writer_Neel_Noor</span></div></div>
<div class="td-pb-row">
<div class="td-pb-span8 td-main-content" role="main">
<div class="td-ss-main-content">
<article id="post-46703" class="post-46703 post type-post status-publish format-standard has-post-thumbnail category-__- tag-__-" itemscope itemtype="https://schema.org/Article">
<div class="td-post-header">
<ul class="td-category"><li class="entry-category"><a href="https://golpershohor.com/category/dharabahik-golpo/">“ধারাবাহিক গল্প”</a></li><li class="entry-category"><a href="https://golpershohor.com/category/dharabahik-golpo/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%f0%9f%8c%bc/">""মায়াবন_বিহারিনী_হরিণী 🌼🌼</a></li></ul>
<header class="td-post-title">
<h1 class="entry-title">মায়াবন_বিহারিনী_হরিণী ২০ #writer_Neel_Noor</h1>
<div class="td-module-meta-info">
<div class="td-post-author-name"><div class="td-author-by">By</div> <a href="https://golpershohor.com/author/admin1/">admin1</a><div class="td-author-line"> - </div> </div> <span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-02-20T18:52:52+00:00">February 20, 2024</time></span> <div class="td-post-comments"><a href="https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/#respond"><i class="td-icon-comments"></i>0</a></div> <div class="td-post-views"><i class="td-icon-views"></i><span class="td-nr-views-46703">5</span></div> </div>
</header>
</div>
<div class="td-post-sharing-top"><div id="td_social_sharing_article_top" class="td-post-sharing td-ps-bg td-ps-notext td-post-sharing-style1 ">
<style>.td-post-sharing-classic{position:relative;height:20px}.td-post-sharing{margin-left:-3px;margin-right:-3px;font-family:'Open Sans','Open Sans Regular',sans-serif;z-index:2;white-space:nowrap;opacity:0}.td-post-sharing.td-social-show-all{white-space:normal}.td-js-loaded .td-post-sharing{-webkit-transition:opacity 0.3s;transition:opacity 0.3s;opacity:1}.td-post-sharing-classic+.td-post-sharing{margin-top:15px}@media (max-width:767px){.td-post-sharing-classic+.td-post-sharing{margin-top:8px}}.td-post-sharing-top{margin-bottom:30px}@media (max-width:767px){.td-post-sharing-top{margin-bottom:20px}}.td-post-sharing-bottom{border-style:solid;border-color:#ededed;border-width:1px 0;padding:21px 0;margin-bottom:42px}.td-post-sharing-bottom .td-post-sharing{margin-bottom:-7px}.td-post-sharing-visible,.td-social-sharing-hidden{display:inline-block}.td-social-sharing-hidden ul{display:none}.td-social-show-all .td-pulldown-filter-list{display:inline-block}.td-social-network,.td-social-handler{position:relative;display:inline-block;margin:0 3px 7px;height:40px;min-width:40px;font-size:11px;text-align:center;vertical-align:middle}.td-ps-notext .td-social-network .td-social-but-icon,.td-ps-notext .td-social-handler .td-social-but-icon{border-top-right-radius:2px;border-bottom-right-radius:2px}.td-social-network{color:#000;overflow:hidden}.td-social-network .td-social-but-icon{border-top-left-radius:2px;border-bottom-left-radius:2px}.td-social-network .td-social-but-text{border-top-right-radius:2px;border-bottom-right-radius:2px}.td-social-network:hover{opacity:0.8!important}.td-social-handler{color:#444;border:1px solid #e9e9e9;border-radius:2px}.td-social-handler .td-social-but-text{font-weight:700}.td-social-handler .td-social-but-text:before{background-color:#000;opacity:0.08}.td-social-share-text{margin-right:18px}.td-social-share-text:before,.td-social-share-text:after{content:'';position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:100%;width:0;height:0;border-style:solid}.td-social-share-text:before{border-width:9px 0 9px 11px;border-color:transparent transparent transparent #e9e9e9}.td-social-share-text:after{border-width:8px 0 8px 10px;border-color:transparent transparent transparent #fff}.td-social-but-text,.td-social-but-icon{display:inline-block;position:relative}.td-social-but-icon{padding-left:13px;padding-right:13px;line-height:40px;z-index:1}.td-social-but-icon i{position:relative;top:-1px;vertical-align:middle}.td-social-but-text{margin-left:-6px;padding-left:12px;padding-right:17px;line-height:40px}.td-social-but-text:before{content:'';position:absolute;top:12px;left:0;width:1px;height:16px;background-color:#fff;opacity:0.2;z-index:1}.td-social-handler i,.td-social-facebook i,.td-social-reddit i,.td-social-linkedin i,.td-social-tumblr i,.td-social-stumbleupon i,.td-social-vk i,.td-social-viber i,.td-social-flipboard i,.td-social-koo i{font-size:14px}.td-social-telegram i{font-size:16px}.td-social-mail i,.td-social-line i,.td-social-print i{font-size:15px}.td-social-handler .td-icon-share{top:-1px;left:-1px}.td-social-twitter .td-icon-twitter{font-size:14px}.td-social-pinterest .td-icon-pinterest{font-size:13px}.td-social-whatsapp .td-icon-whatsapp,.td-social-kakao .td-icon-kakao{font-size:18px}.td-social-kakao .td-icon-kakao:before{color:#3C1B1D}.td-social-reddit .td-social-but-icon{padding-right:12px}.td-social-reddit .td-icon-reddit{left:-1px}.td-social-telegram .td-social-but-icon{padding-right:12px}.td-social-telegram .td-icon-telegram{left:-1px}.td-social-stumbleupon .td-social-but-icon{padding-right:11px}.td-social-stumbleupon .td-icon-stumbleupon{left:-2px}.td-social-digg .td-social-but-icon{padding-right:11px}.td-social-digg .td-icon-digg{left:-2px;font-size:17px}.td-social-vk .td-social-but-icon{padding-right:11px}.td-social-vk .td-icon-vk{left:-2px}.td-social-naver .td-icon-naver{left:-1px;font-size:16px}.td-social-gettr .td-icon-gettr{font-size:25px}.td-ps-notext .td-social-gettr .td-icon-gettr{left:-5px}.td-social-copy_url{position:relative}.td-social-copy_url-check{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;opacity:0;pointer-events:none;transition:opacity .2s ease-in-out;z-index:11}.td-social-copy_url .td-icon-copy_url{left:-1px;font-size:17px}.td-social-copy_url-disabled{pointer-events:none}.td-social-copy_url-disabled .td-icon-copy_url{opacity:0}.td-social-copy_url-copied .td-social-copy_url-check{opacity:1}@keyframes social_copy_url_loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.td-social-expand-tabs i{top:-2px;left:-1px;font-size:16px}@media (min-width:767px){.td-social-line,.td-social-viber{display:none}}.td-ps-bg .td-social-network{color:#fff}.td-ps-bg .td-social-facebook .td-social-but-icon,.td-ps-bg .td-social-facebook .td-social-but-text{background-color:#516eab}.td-ps-bg .td-social-twitter .td-social-but-icon,.td-ps-bg .td-social-twitter .td-social-but-text{background-color:#29c5f6}.td-ps-bg .td-social-pinterest .td-social-but-icon,.td-ps-bg .td-social-pinterest .td-social-but-text{background-color:#ca212a}.td-ps-bg .td-social-whatsapp .td-social-but-icon,.td-ps-bg .td-social-whatsapp .td-social-but-text{background-color:#7bbf6a}.td-ps-bg .td-social-reddit .td-social-but-icon,.td-ps-bg .td-social-reddit .td-social-but-text{background-color:#f54200}.td-ps-bg .td-social-mail .td-social-but-icon,.td-ps-bg .td-social-digg .td-social-but-icon,.td-ps-bg .td-social-copy_url .td-social-but-icon,.td-ps-bg .td-social-mail .td-social-but-text,.td-ps-bg .td-social-digg .td-social-but-text,.td-ps-bg .td-social-copy_url .td-social-but-text{background-color:#000}.td-ps-bg .td-social-print .td-social-but-icon,.td-ps-bg .td-social-print .td-social-but-text{background-color:#333}.td-ps-bg .td-social-linkedin .td-social-but-icon,.td-ps-bg .td-social-linkedin .td-social-but-text{background-color:#0266a0}.td-ps-bg .td-social-tumblr .td-social-but-icon,.td-ps-bg .td-social-tumblr .td-social-but-text{background-color:#3e5a70}.td-ps-bg .td-social-telegram .td-social-but-icon,.td-ps-bg .td-social-telegram .td-social-but-text{background-color:#179cde}.td-ps-bg .td-social-stumbleupon .td-social-but-icon,.td-ps-bg .td-social-stumbleupon .td-social-but-text{background-color:#ee4813}.td-ps-bg .td-social-vk .td-social-but-icon,.td-ps-bg .td-social-vk .td-social-but-text{background-color:#4c75a3}.td-ps-bg .td-social-line .td-social-but-icon,.td-ps-bg .td-social-line .td-social-but-text{background-color:#00b900}.td-ps-bg .td-social-viber .td-social-but-icon,.td-ps-bg .td-social-viber .td-social-but-text{background-color:#5d54a4}.td-ps-bg .td-social-naver .td-social-but-icon,.td-ps-bg .td-social-naver .td-social-but-text{background-color:#3ec729}.td-ps-bg .td-social-flipboard .td-social-but-icon,.td-ps-bg .td-social-flipboard .td-social-but-text{background-color:#f42827}.td-ps-bg .td-social-kakao .td-social-but-icon,.td-ps-bg .td-social-kakao .td-social-but-text{background-color:#f9e000}.td-ps-bg .td-social-gettr .td-social-but-icon,.td-ps-bg .td-social-gettr .td-social-but-text{background-color:#fc223b}.td-ps-bg .td-social-koo .td-social-but-icon,.td-ps-bg .td-social-koo .td-social-but-text{background-color:#facd00}.td-ps-dark-bg .td-social-network{color:#fff}.td-ps-dark-bg .td-social-network .td-social-but-icon,.td-ps-dark-bg .td-social-network .td-social-but-text{background-color:#000}.td-ps-border .td-social-network .td-social-but-icon,.td-ps-border .td-social-network .td-social-but-text{line-height:38px;border-width:1px;border-style:solid}.td-ps-border .td-social-network .td-social-but-text{border-left-width:0}.td-ps-border .td-social-network .td-social-but-text:before{background-color:#000;opacity:0.08}.td-ps-border.td-ps-padding .td-social-network .td-social-but-icon{border-right-width:0}.td-ps-border.td-ps-padding .td-social-network.td-social-expand-tabs .td-social-but-icon{border-right-width:1px}.td-ps-border-grey .td-social-but-icon,.td-ps-border-grey .td-social-but-text{border-color:#e9e9e9}.td-ps-border-colored .td-social-facebook .td-social-but-icon,.td-ps-border-colored .td-social-facebook .td-social-but-text{border-color:#516eab}.td-ps-border-colored .td-social-twitter .td-social-but-icon,div.td-ps-border-colored .td-social-twitter .td-social-but-text{border-color:#29c5f6;color:#29c5f6}.td-ps-border-colored .td-social-pinterest .td-social-but-icon,.td-ps-border-colored .td-social-pinterest .td-social-but-text{border-color:#ca212a}.td-ps-border-colored .td-social-whatsapp .td-social-but-icon,.td-ps-border-colored .td-social-whatsapp .td-social-but-text{border-color:#7bbf6a}.td-ps-border-colored .td-social-reddit .td-social-but-icon,.td-ps-border-colored .td-social-reddit .td-social-but-text{border-color:#f54200}.td-ps-border-colored .td-social-mail .td-social-but-icon,.td-ps-border-colored .td-social-digg .td-social-but-icon,.td-ps-border-colored .td-social-copy_url .td-social-but-icon,.td-ps-border-colored .td-social-mail .td-social-but-text,.td-ps-border-colored .td-social-digg .td-social-but-text,.td-ps-border-colored .td-social-copy_url .td-social-but-text{border-color:#000}.td-ps-border-colored .td-social-print .td-social-but-icon,.td-ps-border-colored .td-social-print .td-social-but-text{border-color:#333}.td-ps-border-colored .td-social-linkedin .td-social-but-icon,.td-ps-border-colored .td-social-linkedin .td-social-but-text{border-color:#0266a0}.td-ps-border-colored .td-social-tumblr .td-social-but-icon,.td-ps-border-colored .td-social-tumblr .td-social-but-text{border-color:#3e5a70}.td-ps-border-colored .td-social-telegram .td-social-but-icon,.td-ps-border-colored .td-social-telegram .td-social-but-text{border-color:#179cde}.td-ps-border-colored .td-social-stumbleupon .td-social-but-icon,.td-ps-border-colored .td-social-stumbleupon .td-social-but-text{border-color:#ee4813}.td-ps-border-colored .td-social-vk .td-social-but-icon,.td-ps-border-colored .td-social-vk .td-social-but-text{border-color:#4c75a3}.td-ps-border-colored .td-social-line .td-social-but-icon,.td-ps-border-colored .td-social-line .td-social-but-text{border-color:#00b900}.td-ps-border-colored .td-social-viber .td-social-but-icon,.td-ps-border-colored .td-social-viber .td-social-but-text{border-color:#5d54a4}.td-ps-border-colored .td-social-naver .td-social-but-icon,.td-ps-border-colored .td-social-naver .td-social-but-text{border-color:#3ec729}.td-ps-border-colored .td-social-flipboard .td-social-but-icon,.td-ps-border-colored .td-social-flipboard .td-social-but-text{border-color:#f42827}.td-ps-border-colored .td-social-kakao .td-social-but-icon,.td-ps-border-colored .td-social-kakao .td-social-but-text{border-color:#f9e000}.td-ps-border-colored .td-social-gettr .td-social-but-icon,.td-ps-border-colored .td-social-gettr .td-social-but-text{border-color:#fc223b}.td-ps-border-colored .td-social-koo .td-social-but-icon,.td-ps-border-colored .td-social-koo .td-social-but-text{border-color:#facd00}.td-ps-icon-bg .td-social-but-icon{height:100%;border-color:transparent!important}.td-ps-icon-bg .td-social-network .td-social-but-icon{color:#fff}.td-ps-icon-bg .td-social-facebook .td-social-but-icon{background-color:#516eab}.td-ps-icon-bg .td-social-twitter .td-social-but-icon{background-color:#29c5f6}.td-ps-icon-bg .td-social-pinterest .td-social-but-icon{background-color:#ca212a}.td-ps-icon-bg .td-social-whatsapp .td-social-but-icon{background-color:#7bbf6a}.td-ps-icon-bg .td-social-reddit .td-social-but-icon{background-color:#f54200}.td-ps-icon-bg .td-social-mail .td-social-but-icon,.td-ps-icon-bg .td-social-digg .td-social-but-icon,.td-ps-icon-bg .td-social-copy_url .td-social-but-icon{background-color:#000}.td-ps-icon-bg .td-social-print .td-social-but-icon{background-color:#333}.td-ps-icon-bg .td-social-linkedin .td-social-but-icon{background-color:#0266a0}.td-ps-icon-bg .td-social-tumblr .td-social-but-icon{background-color:#3e5a70}.td-ps-icon-bg .td-social-telegram .td-social-but-icon{background-color:#179cde}.td-ps-icon-bg .td-social-stumbleupon .td-social-but-icon{background-color:#ee4813}.td-ps-icon-bg .td-social-vk .td-social-but-icon{background-color:#4c75a3}.td-ps-icon-bg .td-social-line .td-social-but-icon{background-color:#00b900}.td-ps-icon-bg .td-social-viber .td-social-but-icon{background-color:#5d54a4}.td-ps-icon-bg .td-social-naver .td-social-but-icon{background-color:#3ec729}.td-ps-icon-bg .td-social-flipboard .td-social-but-icon{background-color:#f42827}.td-ps-icon-bg .td-social-kakao .td-social-but-icon{background-color:#f9e000}.td-ps-icon-bg .td-social-gettr .td-social-but-icon{background-color:#fc223b}.td-ps-icon-bg .td-social-koo .td-social-but-icon{background-color:#facd00}.td-ps-icon-bg .td-social-but-text{margin-left:-3px}.td-ps-icon-bg .td-social-network .td-social-but-text:before{display:none}.td-ps-icon-arrow .td-social-network .td-social-but-icon:after{content:'';position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:calc(100% + 1px);width:0;height:0;border-style:solid;border-width:9px 0 9px 11px;border-color:transparent transparent transparent #000}.td-ps-icon-arrow .td-social-network .td-social-but-text{padding-left:20px}.td-ps-icon-arrow .td-social-network .td-social-but-text:before{display:none}.td-ps-icon-arrow.td-ps-padding .td-social-network .td-social-but-icon:after{left:100%}.td-ps-icon-arrow .td-social-facebook .td-social-but-icon:after{border-left-color:#516eab}.td-ps-icon-arrow .td-social-twitter .td-social-but-icon:after{border-left-color:#29c5f6}.td-ps-icon-arrow .td-social-pinterest .td-social-but-icon:after{border-left-color:#ca212a}.td-ps-icon-arrow .td-social-whatsapp .td-social-but-icon:after{border-left-color:#7bbf6a}.td-ps-icon-arrow .td-social-reddit .td-social-but-icon:after{border-left-color:#f54200}.td-ps-icon-arrow .td-social-mail .td-social-but-icon:after,.td-ps-icon-arrow .td-social-digg .td-social-but-icon:after,.td-ps-icon-arrow .td-social-copy_url .td-social-but-icon:after{border-left-color:#000}.td-ps-icon-arrow .td-social-print .td-social-but-icon:after{border-left-color:#333}.td-ps-icon-arrow .td-social-linkedin .td-social-but-icon:after{border-left-color:#0266a0}.td-ps-icon-arrow .td-social-tumblr .td-social-but-icon:after{border-left-color:#3e5a70}.td-ps-icon-arrow .td-social-telegram .td-social-but-icon:after{border-left-color:#179cde}.td-ps-icon-arrow .td-social-stumbleupon .td-social-but-icon:after{border-left-color:#ee4813}.td-ps-icon-arrow .td-social-vk .td-social-but-icon:after{border-left-color:#4c75a3}.td-ps-icon-arrow .td-social-line .td-social-but-icon:after{border-left-color:#00b900}.td-ps-icon-arrow .td-social-viber .td-social-but-icon:after{border-left-color:#5d54a4}.td-ps-icon-arrow .td-social-naver .td-social-but-icon:after{border-left-color:#3ec729}.td-ps-icon-arrow .td-social-flipboard .td-social-but-icon:after{border-left-color:#f42827}.td-ps-icon-arrow .td-social-kakao .td-social-but-icon:after{border-left-color:#f9e000}.td-ps-icon-arrow .td-social-gettr .td-social-but-icon:after{border-left-color:#fc223b}.td-ps-icon-arrow .td-social-koo .td-social-but-icon:after{border-left-color:#facd00}.td-ps-icon-arrow .td-social-expand-tabs .td-social-but-icon:after{display:none}.td-ps-icon-color .td-social-facebook .td-social-but-icon{color:#516eab}.td-ps-icon-color .td-social-pinterest .td-social-but-icon{color:#ca212a}.td-ps-icon-color .td-social-whatsapp .td-social-but-icon{color:#7bbf6a}.td-ps-icon-color .td-social-reddit .td-social-but-icon{color:#f54200}.td-ps-icon-color .td-social-mail .td-social-but-icon,.td-ps-icon-color .td-social-digg .td-social-but-icon,.td-ps-icon-color .td-social-copy_url .td-social-but-icon,.td-ps-icon-color .td-social-copy_url-check,.td-ps-icon-color .td-social-twitter .td-social-but-icon{color:#000}.td-ps-icon-color .td-social-print .td-social-but-icon{color:#333}.td-ps-icon-color .td-social-linkedin .td-social-but-icon{color:#0266a0}.td-ps-icon-color .td-social-tumblr .td-social-but-icon{color:#3e5a70}.td-ps-icon-color .td-social-telegram .td-social-but-icon{color:#179cde}.td-ps-icon-color .td-social-stumbleupon .td-social-but-icon{color:#ee4813}.td-ps-icon-color .td-social-vk .td-social-but-icon{color:#4c75a3}.td-ps-icon-color .td-social-line .td-social-but-icon{color:#00b900}.td-ps-icon-color .td-social-viber .td-social-but-icon{color:#5d54a4}.td-ps-icon-color .td-social-naver .td-social-but-icon{color:#3ec729}.td-ps-icon-color .td-social-flipboard .td-social-but-icon{color:#f42827}.td-ps-icon-color .td-social-kakao .td-social-but-icon{color:#f9e000}.td-ps-icon-color .td-social-gettr .td-social-but-icon{color:#fc223b}.td-ps-icon-color .td-social-koo .td-social-but-icon{color:#facd00}.td-ps-text-color .td-social-but-text{font-weight:700}.td-ps-text-color .td-social-facebook .td-social-but-text{color:#516eab}.td-ps-text-color .td-social-twitter .td-social-but-text{color:#29c5f6}.td-ps-text-color .td-social-pinterest .td-social-but-text{color:#ca212a}.td-ps-text-color .td-social-whatsapp .td-social-but-text{color:#7bbf6a}.td-ps-text-color .td-social-reddit .td-social-but-text{color:#f54200}.td-ps-text-color .td-social-mail .td-social-but-text,.td-ps-text-color .td-social-digg .td-social-but-text,.td-ps-text-color .td-social-copy_url .td-social-but-text{color:#000}.td-ps-text-color .td-social-print .td-social-but-text{color:#333}.td-ps-text-color .td-social-linkedin .td-social-but-text{color:#0266a0}.td-ps-text-color .td-social-tumblr .td-social-but-text{color:#3e5a70}.td-ps-text-color .td-social-telegram .td-social-but-text{color:#179cde}.td-ps-text-color .td-social-stumbleupon .td-social-but-text{color:#ee4813}.td-ps-text-color .td-social-vk .td-social-but-text{color:#4c75a3}.td-ps-text-color .td-social-line .td-social-but-text{color:#00b900}.td-ps-text-color .td-social-viber .td-social-but-text{color:#5d54a4}.td-ps-text-color .td-social-naver .td-social-but-text{color:#3ec729}.td-ps-text-color .td-social-flipboard .td-social-but-text{color:#f42827}.td-ps-text-color .td-social-kakao .td-social-but-text{color:#f9e000}.td-ps-text-color .td-social-gettr .td-social-but-text{color:#fc223b}.td-ps-text-color .td-social-koo .td-social-but-text{color:#facd00}.td-ps-text-color .td-social-expand-tabs .td-social-but-text{color:#b1b1b1}.td-ps-notext .td-social-but-icon{width:40px}.td-ps-notext .td-social-network .td-social-but-text{display:none}.td-ps-padding .td-social-network .td-social-but-icon{padding-left:17px;padding-right:17px}.td-ps-padding .td-social-handler .td-social-but-icon{width:40px}.td-ps-padding .td-social-reddit .td-social-but-icon,.td-ps-padding .td-social-telegram .td-social-but-icon{padding-right:16px}.td-ps-padding .td-social-stumbleupon .td-social-but-icon,.td-ps-padding .td-social-digg .td-social-but-icon,.td-ps-padding .td-social-expand-tabs .td-social-but-icon{padding-right:13px}.td-ps-padding .td-social-vk .td-social-but-icon{padding-right:14px}.td-ps-padding .td-social-expand-tabs .td-social-but-icon{padding-left:13px}.td-ps-rounded .td-social-network .td-social-but-icon{border-top-left-radius:100px;border-bottom-left-radius:100px}.td-ps-rounded .td-social-network .td-social-but-text{border-top-right-radius:100px;border-bottom-right-radius:100px}.td-ps-rounded.td-ps-notext .td-social-network .td-social-but-icon{border-top-right-radius:100px;border-bottom-right-radius:100px}.td-ps-rounded .td-social-expand-tabs{border-radius:100px}.td-ps-bar .td-social-network .td-social-but-icon,.td-ps-bar .td-social-network .td-social-but-text{-webkit-box-shadow:inset 0px -3px 0px 0px rgba(0,0,0,0.31);box-shadow:inset 0px -3px 0px 0px rgba(0,0,0,0.31)}.td-ps-bar .td-social-mail .td-social-but-icon,.td-ps-bar .td-social-digg .td-social-but-icon,.td-ps-bar .td-social-copy_url .td-social-but-icon,.td-ps-bar .td-social-mail .td-social-but-text,.td-ps-bar .td-social-digg .td-social-but-text,.td-ps-bar .td-social-copy_url .td-social-but-text{-webkit-box-shadow:inset 0px -3px 0px 0px rgba(255,255,255,0.28);box-shadow:inset 0px -3px 0px 0px rgba(255,255,255,0.28)}.td-ps-bar .td-social-print .td-social-but-icon,.td-ps-bar .td-social-print .td-social-but-text{-webkit-box-shadow:inset 0px -3px 0px 0px rgba(255,255,255,0.2);box-shadow:inset 0px -3px 0px 0px rgba(255,255,255,0.2)}.td-ps-big .td-social-but-icon{display:block;line-height:60px}.td-ps-big .td-social-but-icon .td-icon-share{width:auto}.td-ps-big .td-social-handler .td-social-but-text:before{display:none}.td-ps-big .td-social-share-text .td-social-but-icon{width:90px}.td-ps-big .td-social-expand-tabs .td-social-but-icon{width:60px}@media (max-width:767px){.td-ps-big .td-social-share-text{display:none}}.td-ps-big .td-social-facebook i,.td-ps-big .td-social-reddit i,.td-ps-big .td-social-mail i,.td-ps-big .td-social-linkedin i,.td-ps-big .td-social-tumblr i,.td-ps-big .td-social-stumbleupon i{margin-top:-2px}.td-ps-big .td-social-facebook i,.td-ps-big .td-social-reddit i,.td-ps-big .td-social-linkedin i,.td-ps-big .td-social-tumblr i,.td-ps-big .td-social-stumbleupon i,.td-ps-big .td-social-vk i,.td-ps-big .td-social-viber i,.td-ps-big .td-social-fliboard i,.td-ps-big .td-social-koo i,.td-ps-big .td-social-share-text i{font-size:22px}.td-ps-big .td-social-telegram i{font-size:24px}.td-ps-big .td-social-mail i,.td-ps-big .td-social-line i,.td-ps-big .td-social-print i{font-size:23px}.td-ps-big .td-social-twitter i,.td-ps-big .td-social-expand-tabs i{font-size:20px}.td-ps-big .td-social-whatsapp i,.td-ps-big .td-social-naver i,.td-ps-big .td-social-flipboard i,.td-ps-big .td-social-kakao i{font-size:26px}.td-ps-big .td-social-pinterest .td-icon-pinterest{font-size:21px}.td-ps-big .td-social-telegram .td-icon-telegram{left:1px}.td-ps-big .td-social-stumbleupon .td-icon-stumbleupon{left:-2px}.td-ps-big .td-social-digg .td-icon-digg{left:-1px;font-size:25px}.td-ps-big .td-social-vk .td-icon-vk{left:-1px}.td-ps-big .td-social-naver .td-icon-naver{left:0}.td-ps-big .td-social-gettr .td-icon-gettr{left:-1px}.td-ps-big .td-social-copy_url .td-icon-copy_url{left:0;font-size:25px}.td-ps-big .td-social-copy_url-check{font-size:18px}.td-ps-big .td-social-but-text{margin-left:0;padding-top:0;padding-left:17px}.td-ps-big.td-ps-notext .td-social-network,.td-ps-big.td-ps-notext .td-social-handler{height:60px}.td-ps-big.td-ps-notext .td-social-network{width:60px}.td-ps-big.td-ps-notext .td-social-network .td-social-but-icon{width:60px}.td-ps-big.td-ps-notext .td-social-share-text .td-social-but-icon{line-height:40px}.td-ps-big.td-ps-notext .td-social-share-text .td-social-but-text{display:block;line-height:1}.td-ps-big.td-ps-padding .td-social-network,.td-ps-big.td-ps-padding .td-social-handler{height:90px;font-size:13px}.td-ps-big.td-ps-padding .td-social-network{min-width:60px}.td-ps-big.td-ps-padding .td-social-but-icon{border-bottom-left-radius:0;border-top-right-radius:2px}.td-ps-big.td-ps-padding.td-ps-bar .td-social-but-icon{-webkit-box-shadow:none;box-shadow:none}.td-ps-big.td-ps-padding .td-social-but-text{display:block;padding-bottom:17px;line-height:1;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:2px}.td-ps-big.td-ps-padding .td-social-but-text:before{display:none}.td-ps-big.td-ps-padding .td-social-expand-tabs i{line-height:90px}.td-ps-nogap{margin-left:0;margin-right:0}.td-ps-nogap .td-social-network,.td-ps-nogap .td-social-handler{margin-left:0;margin-right:0;border-radius:0}.td-ps-nogap .td-social-network .td-social-but-icon,.td-ps-nogap .td-social-network .td-social-but-text{border-radius:0}.td-ps-nogap .td-social-expand-tabs{border-radius:0}.td-post-sharing-style7 .td-social-network .td-social-but-icon{height:100%}.td-post-sharing-style7 .td-social-network .td-social-but-icon:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.31)}.td-post-sharing-style7 .td-social-network .td-social-but-text{padding-left:17px}.td-post-sharing-style7 .td-social-network .td-social-but-text:before{display:none}.td-post-sharing-style7 .td-social-mail .td-social-but-icon:before,.td-post-sharing-style7 .td-social-digg .td-social-but-icon:before,.td-post-sharing-style7 .td-social-copy_url .td-social-but-icon:before{background-color:rgba(255,255,255,0.2)}.td-post-sharing-style7 .td-social-print .td-social-but-icon:before{background-color:rgba(255,255,255,0.1)}@media (max-width:767px){.td-post-sharing-style1 .td-social-share-text .td-social-but-text,.td-post-sharing-style3 .td-social-share-text .td-social-but-text,.td-post-sharing-style5 .td-social-share-text .td-social-but-text,.td-post-sharing-style14 .td-social-share-text .td-social-but-text,.td-post-sharing-style16 .td-social-share-text .td-social-but-text{display:none!important}}@media (max-width:767px){.td-post-sharing-style2 .td-social-share-text,.td-post-sharing-style4 .td-social-share-text,.td-post-sharing-style6 .td-social-share-text,.td-post-sharing-style7 .td-social-share-text,.td-post-sharing-style15 .td-social-share-text,.td-post-sharing-style17 .td-social-share-text,.td-post-sharing-style18 .td-social-share-text,.td-post-sharing-style19 .td-social-share-text,.td-post-sharing-style20 .td-social-share-text{display:none!important}}</style>
<div class="td-post-sharing-visible"><a class="td-social-sharing-button td-social-sharing-button-js td-social-network td-social-facebook" href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fgolpershohor.com%2F2024%2F02%2F20%2F%25e0%25a6%25ae%25e0%25a6%25be%25e0%25a6%25af%25e0%25a6%25bc%25e0%25a6%25be%25e0%25a6%25ac%25e0%25a6%25a8_%25e0%25a6%25ac%25e0%25a6%25bf%25e0%25a6%25b9%25e0%25a6%25be%25e0%25a6%25b0%25e0%25a6%25bf%25e0%25a6%25a8%25e0%25a7%2580_%25e0%25a6%25b9%25e0%25a6%25b0%25e0%25a6%25bf%25e0%25a6%25a3%25e0%25a7%2580-%25e0%25a7%25a8%2F" title="Facebook"><div class="td-social-but-icon"><i class="td-icon-facebook"></i></div><div class="td-social-but-text">Facebook</div></a><a class="td-social-sharing-button td-social-sharing-button-js td-social-network td-social-twitter" href="https://twitter.com/intent/tweet?text=%E0%A6%AE%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%AC%E0%A6%A8_%E0%A6%AC%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A8%E0%A7%80_%E0%A6%B9%E0%A6%B0%E0%A6%BF%E0%A6%A3%E0%A7%80+%E0%A7%A8%E0%A7%A6+%23writer_Neel_Noor&url=https%3A%2F%2Fgolpershohor.com%2F2024%2F02%2F20%2F%25e0%25a6%25ae%25e0%25a6%25be%25e0%25a6%25af%25e0%25a6%25bc%25e0%25a6%25be%25e0%25a6%25ac%25e0%25a6%25a8_%25e0%25a6%25ac%25e0%25a6%25bf%25e0%25a6%25b9%25e0%25a6%25be%25e0%25a6%25b0%25e0%25a6%25bf%25e0%25a6%25a8%25e0%25a7%2580_%25e0%25a6%25b9%25e0%25a6%25b0%25e0%25a6%25bf%25e0%25a6%25a3%25e0%25a7%2580-%25e0%25a7%25a8%2F&via=%E0%A6%97%E0%A6%B2%E0%A7%8D%E0%A6%AA%E0%A7%87%E0%A6%B0+%E0%A6%B6%E0%A6%B9%E0%A6%B0+%E0%A6%A1%E0%A6%9F+%E0%A6%95%E0%A6%AE" title="Twitter"><div class="td-social-but-icon"><i class="td-icon-twitter"></i></div><div class="td-social-but-text">Twitter</div></a><a class="td-social-sharing-button td-social-sharing-button-js td-social-network td-social-pinterest" href="https://pinterest.com/pin/create/button/?url=https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/&amp;media=https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389.jpg&description=%E0%A6%AE%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%AC%E0%A6%A8_%E0%A6%AC%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A8%E0%A7%80_%E0%A6%B9%E0%A6%B0%E0%A6%BF%E0%A6%A3%E0%A7%80+%E0%A7%A8%E0%A7%A6+%23writer_Neel_Noor" title="Pinterest"><div class="td-social-but-icon"><i class="td-icon-pinterest"></i></div><div class="td-social-but-text">Pinterest</div></a><a class="td-social-sharing-button td-social-sharing-button-js td-social-network td-social-whatsapp" href="https://api.whatsapp.com/send?text=%E0%A6%AE%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%AC%E0%A6%A8_%E0%A6%AC%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A8%E0%A7%80_%E0%A6%B9%E0%A6%B0%E0%A6%BF%E0%A6%A3%E0%A7%80+%E0%A7%A8%E0%A7%A6+%23writer_Neel_Noor %0A%0A https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/" title="WhatsApp"><div class="td-social-but-icon"><i class="td-icon-whatsapp"></i></div><div class="td-social-but-text">WhatsApp</div></a></div><div class="td-social-sharing-hidden"><ul class="td-pulldown-filter-list"></ul><a class="td-social-sharing-button td-social-handler td-social-expand-tabs" href="#" data-block-uid="td_social_sharing_article_top" title="More">
<div class="td-social-but-icon"><i class="td-icon-plus td-social-expand-tabs-icon"></i></div>
</a></div></div></div>
<div class="td-post-content tagdiv-type">
<div class="td-post-featured-image"><a href="https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389.jpg" data-caption><img width="690" height="400" class="entry-thumb td-modal-image" src="https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389.jpg" srcset="https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389.jpg 690w, https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389-300x174.jpg 300w, https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389-150x87.jpg 150w" sizes="(max-width: 690px) 100vw, 690px" alt title="FB_IMG_1708411460389" /></a></div>


<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" type="3946b4c98583e17aafee7bf2-text/javascript"></script><div class="td-g-rec td-g-rec-id-content_top tdi_45 td_block_template_1 ">
<style>.tdi_45.td-a-rec{transform:translateZ(0);text-align:center}.tdi_45 .td-element-style{z-index:-1}.tdi_45.td-a-rec-img{text-align:left}.tdi_45.td-a-rec-img img{margin:0 auto 0 0}@media (max-width:767px){.tdi_45.td-a-rec-img{text-align:center}}</style><script type="3946b4c98583e17aafee7bf2-text/javascript">
var td_screen_width = window.innerWidth;
window.addEventListener("load", function(){            
	            var placeAdEl = document.getElementById("td-ad-placeholder");
			    if ( null !== placeAdEl && td_screen_width >= 1140 ) {
			        
			        /* large monitors */
			        var adEl = document.createElement("ins");
		            placeAdEl.replaceWith(adEl);	
		            adEl.setAttribute("class", "adsbygoogle");
		            adEl.setAttribute("style", "display:inline-block;width:468px;height:60px");	            		                
		            adEl.setAttribute("data-ad-client", "ca-pub-6468708806497207");
		            adEl.setAttribute("data-ad-slot", "4254684988");	            
			        (adsbygoogle = window.adsbygoogle || []).push({});
			    }
			});window.addEventListener("load", function(){            
	            var placeAdEl = document.getElementById("td-ad-placeholder");
			    if ( null !== placeAdEl && td_screen_width >= 1019  && td_screen_width < 1140 ) {
			    
			        /* landscape tablets */
			        var adEl = document.createElement("ins");
		            placeAdEl.replaceWith(adEl);	
		            adEl.setAttribute("class", "adsbygoogle");
		            adEl.setAttribute("style", "display:inline-block;width:468px;height:60px");	            		                
		            adEl.setAttribute("data-ad-client", "ca-pub-6468708806497207");
		            adEl.setAttribute("data-ad-slot", "4254684988");	            
			        (adsbygoogle = window.adsbygoogle || []).push({});
			    }
			});window.addEventListener("load", function(){            
	            var placeAdEl = document.getElementById("td-ad-placeholder");
			    if ( null !== placeAdEl && td_screen_width >= 768  && td_screen_width < 1019 ) {
			    
			        /* portrait tablets */
			        var adEl = document.createElement("ins");
		            placeAdEl.replaceWith(adEl);	
		            adEl.setAttribute("class", "adsbygoogle");
		            adEl.setAttribute("style", "display:inline-block;width:468px;height:60px");	            		                
		            adEl.setAttribute("data-ad-client", "ca-pub-6468708806497207");
		            adEl.setAttribute("data-ad-slot", "4254684988");	            
			        (adsbygoogle = window.adsbygoogle || []).push({});
			    }
			});window.addEventListener("load", function(){            
	            var placeAdEl = document.getElementById("td-ad-placeholder");
			    if ( null !== placeAdEl && td_screen_width < 768 ) {
			    
			        /* Phones */
			        var adEl = document.createElement("ins");
		            placeAdEl.replaceWith(adEl);	
		            adEl.setAttribute("class", "adsbygoogle");
		            adEl.setAttribute("style", "display:inline-block;width:300px;height:250px");	            		                
		            adEl.setAttribute("data-ad-client", "ca-pub-6468708806497207");
		            adEl.setAttribute("data-ad-slot", "4254684988");	            
			        (adsbygoogle = window.adsbygoogle || []).push({});
			    }
			});</script>
<noscript id="td-ad-placeholder"></noscript></div>

<p>#মায়াবন_বিহারিনী_হরিণী<br/>
২০<br/>
#writer_Neel_Noor</p>
<p>হাওলাদার বাড়ি সম্পূর্ণ নীরব। বাসায় আছে মাত্র গুটি কয়েক মানুষ। হাসপাতালের করিডোরে সবাই দাঁড়িয়ে আছে, এ দাঁড়িয়ে থাকা না থাকার সমান, কেননা, একজন নারীর এই সময়টাতে তার স্বামীর প্রয়োজন সবচেয়ে!! কিন্তু আফসোস, অভাগীর স্বামী ই আজ নিখোঁজ!!</p>
<p>রাজ ছাড়া বাড়ির প্রায় সবাই ই এখানে। রুদ্র ওটি তে আছে, মায়ার দায়িত্ব টা সে ই নিয়েছে। এতোক্ষণ এ তার টিম মায়ার কেসের দায়িত্ব টা নিয়েছে, চিন্তার ভার যেন শেষ ই হচ্ছে না। </p>
<p>কি থেকে কি হয়ে গেল। বিহারিনী এখনো খেয়ালী তে আছে, সে কিছুতেই মানতে পারছে না। উপস্থিত সকলের চোখে জল!! মধ্যে রাতে সবাই হাসপাতালের সামনে, চোখে পানি, কপালে একরাশ চিন্তার ভার!!</p>
<p>কেটে গেল এক দেড় ঘন্টা। এর মাঝে রাজকে শত শত কল দেওয়া হচ্ছে। রাজ কল রিসিভ করছে না। এদিকে, সবাই ওটির লাল বাতি টার দিকে তাকিয়ে আছে। হঠাৎ করেই রুদ্র বের হয়ে আসল। শক্ত মনের রুদ্রের চোখে জল ছল ছল করছে। হঠাৎ সে তার বাবা আর চাচা কে সাথে নিয়ে একটা চেম্বারে গেল। রাইটার -নীলনূর।</p>

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" type="3946b4c98583e17aafee7bf2-text/javascript"></script><div class="td-g-rec td-g-rec-id-content_inline tdi_44 td_block_template_1 ">
<style>.tdi_44.td-a-rec{transform:translateZ(0);text-align:center}.tdi_44 .td-element-style{z-index:-1}.tdi_44.td-a-rec-img{text-align:left}.tdi_44.td-a-rec-img img{margin:0 auto 0 0}@media (max-width:767px){.tdi_44.td-a-rec-img{text-align:center}}</style><script type="3946b4c98583e17aafee7bf2-text/javascript">
var td_screen_width = window.innerWidth;
window.addEventListener("load", function(){            
	            var placeAdEl = document.getElementById("td-ad-placeholder");
			    if ( null !== placeAdEl && td_screen_width >= 1140 ) {
			        
			        /* large monitors */
			        var adEl = document.createElement("ins");
		            placeAdEl.replaceWith(adEl);	
		            adEl.setAttribute("class", "adsbygoogle");
		            adEl.setAttribute("style", "display:inline-block;width:468px;height:60px");	            		                
		            adEl.setAttribute("data-ad-client", "ca-pub-6468708806497207");
		            adEl.setAttribute("data-ad-slot", "1561621778");	            
			        (adsbygoogle = window.adsbygoogle || []).push({});
			    }
			});window.addEventListener("load", function(){            
	            var placeAdEl = document.getElementById("td-ad-placeholder");
			    if ( null !== placeAdEl && td_screen_width >= 1019  && td_screen_width < 1140 ) {
			    
			        /* landscape tablets */
			        var adEl = document.createElement("ins");
		            placeAdEl.replaceWith(adEl);	
		            adEl.setAttribute("class", "adsbygoogle");
		            adEl.setAttribute("style", "display:inline-block;width:468px;height:60px");	            		                
		            adEl.setAttribute("data-ad-client", "ca-pub-6468708806497207");
		            adEl.setAttribute("data-ad-slot", "1561621778");	            
			        (adsbygoogle = window.adsbygoogle || []).push({});
			    }
			});window.addEventListener("load", function(){            
	            var placeAdEl = document.getElementById("td-ad-placeholder");
			    if ( null !== placeAdEl && td_screen_width >= 768  && td_screen_width < 1019 ) {
			    
			        /* portrait tablets */
			        var adEl = document.createElement("ins");
		            placeAdEl.replaceWith(adEl);	
		            adEl.setAttribute("class", "adsbygoogle");
		            adEl.setAttribute("style", "display:inline-block;width:468px;height:60px");	            		                
		            adEl.setAttribute("data-ad-client", "ca-pub-6468708806497207");
		            adEl.setAttribute("data-ad-slot", "1561621778");	            
			        (adsbygoogle = window.adsbygoogle || []).push({});
			    }
			});window.addEventListener("load", function(){            
	            var placeAdEl = document.getElementById("td-ad-placeholder");
			    if ( null !== placeAdEl && td_screen_width < 768 ) {
			    
			        /* Phones */
			        var adEl = document.createElement("ins");
		            placeAdEl.replaceWith(adEl);	
		            adEl.setAttribute("class", "adsbygoogle");
		            adEl.setAttribute("style", "display:inline-block;width:320px;height:50px");	            		                
		            adEl.setAttribute("data-ad-client", "ca-pub-6468708806497207");
		            adEl.setAttribute("data-ad-slot", "1561621778");	            
			        (adsbygoogle = window.adsbygoogle || []).push({});
			    }
			});</script>
<noscript id="td-ad-placeholder"></noscript></div>

<p>এদিকে রুদ্র যাওয়ার পরপরই একজন নার্স বের হয়ে এলো। বলল- এখানে বিহারিনী কে?(বিহারিনী যেন চমকে উঠল_কাপাঁ কাঁপা গলায় বলল-আমি)</p>
<p>বিহারিনী কে নীল ড্রেস পরিয়ে ওটির ভেতরে নিয়ে গেল। চারদিকে যেন রক্ত আর রক্ত। বিহারিনীর মাথাটা চিন চিন ব্যাথায় ভরে উঠলো। এমন রক্তাক্ত অবস্থা সে যেন কোথাও দেখেছে, কিন্তু মনে করতে পারছে না&#8230; নিঃশ্বাস ভারী হয়ে উঠেছে..এর মধ্যে ই একটা মিহী সুক্ষ কন্ঠ এবং তার হাত টা কেউ স্পর্শ করতেই কেঁপে উঠলো, নিচের দিকে তাকিয়ে দেখল, মায়া তাকিয়ে আছে, মায়ার মুখটা শুকিয়ে গেছে, ইশ্ গলুমলু মেয়েটা ঘন্টা খানেক ব্যবধানে শুকিয়ে গেছে, বিহারিনী ঢুকরে কেঁদে উঠলো&#8230;.</p>
<p>বিহারিনীর কান্না দেখে আমার মনে যে সন্দেহ, ক্ষোভ সবকিছু মিহিয়ে গেল। না, এরকম একটা মেয়ের মনে কালো কিছু থাকতে পারে না। আমার মতোই, সে ও এই হাওলাদার বাড়ির রহস্যে মোড়িয়ে গেছে। কি নিষ্পাপ শিশুদের মতো সে&#8230;</p>
<p>এমন দুরসময়ে ও আমি বিহারিনী কে নিয়ে ভাবছি। মনেই মনে খিলখিল করে হেসে উঠলাম। বিহারিনী কান্নার ভারে কথা বলতে পারছে না, চোখ গুলো ফুলে গেছে। হাতে রাখা বাজ করা কাগজটা বিহারিনী কে দিলাম, বললাম &#8211; বিহারিনীময় হরিনী!!(বিহারিনী অকপটে তাকালো আমার দিকে) এই কাগছটা তুমি রাজ কে দিও। (বিহারিনী মাথা নাড়িয়ে সায় দিল, ঠিক বাচ্চাদের মতো ই)</p>
<p>নার্স তাড়া দিতে শুরু করলো। বেশি কথা বলা যাবে না। সময় শেষ, বিহারিনী কে যেতে বলল। আমি তাদের আরেকটু সময় দিতে বললাম।<br/>
বিহারিনীর হাতটা আমার পেটে ছুঁইয়ে বললাম &#8211; বিহারিনীময় হরিনী!! যদি আমি না থাকি, আমার সন্তান টাকে দেখবে, মায়ের মতো কথা দাও।(বিহারিনী আরো বেশি ঢুকরে কেঁদে উঠলো, মাথায় না না দুলিয়ে বলল- তোমাকে ফিরতে হবে)</p>
<p>বিহারিনীর হাতটা পেটে আরো মিশিয়ে দিয়ে বললাম &#8211; আমি এতিম ছিলাম, মা থেকে ও নেই ছিল আমার জীবন। আমি থাকব না, সময় ফুরিয়ে এসেছে। এই রাস্তা টা এই পর্যন্ত ই&#8230; আমার গল্প এখানেই শেষ, তোমার শুরু!! হাওলাদার বাড়িতে জঘন্য অতীত, রহস্যময়, প্রতিশোধ এর খেলা হচ্ছে। আমার সন্তান টাকে এই থেকে রক্ষা করো। আমি তোমাকে অনেক বিশ্বাস করি, আমি হয়তো কেড়ে নিয়েছি তোমার থেকে অনেক কিছু ই, কিন্তু তুমি তার পরিবর্তে আমার সন্তান কে তোমার নাম পরিচয়, মাতৃত্ব, ভালোবাসা দ্বিগুণ দিবে, কথা দাও।(বিহারিনী হু বলে মাথা নাড়িয়ে সায় দিল, বিহারিনীর হাতটা ছেড়ে দিলাম, বিহারিনী দৌড়ে বের হয়ে গেল)</p>
<p>মনে খুব ই ভালোলাগা কাজ করছে, পেটে হাত দিয়ে বললাম &#8211; তোর জন্য আমার থেকে ও ভালো মা দিয়ে যাচ্ছি। আমাকে মনে রাখবি তো!! নাকি খেয়ার ছলে ভুলে যাবি। ভুলে যাস না, আমাকে&#8230; আমার বাবা ভুলে গিয়েছিল, সে ছেড়ে চলে গেল!!মা ভুলে গেল, বিক্রি করে দিল!! তোর বাবা ভুলে গেল&#8230;তুই যাস না&#8230;নামের মহিমায় হলেও #মায়াবন_বিহারিনী_হরিনী হলেও মনে রাখিস!!</p>
<p>হাসপাতালের বিছানায় শুয়ে উপরের লাইটার দিকে তাকিয়ে মনেই মন বললাম &#8211;</p>
<p> শেষ সময়ে_আপনাকে দেখার এক অতৃপ্ত বাসনা!!<br/>
এতো অভাগী কেন আমি&#8230;. খুবই সুক্ষ আলিঙ্গনে হারিয়ে যাব_রুক্ষ মন ই জানি!!</p>
<p>______</p>
<p>রুদ্র, রুদ্রের বাবা ও চাচা চিন্তিত। মায়ার অবস্থা অনেক করুন। মায়ার মাথায় ইন্ট্রানাল ব্লিডিং হচ্ছে। আর বাচ্চার পৃথিবীর আসার সময় এখন ও হয় নি, অপরিপক্ক বাচ্চা। কিন্তু বাচ্চাকে এখন ই বের করতে হবে, মায়ার লেবার ব্লিডিং হচ্ছে, যদি অপারেশন না করানো হয় তাহলে মা বাচ্চা দুইজন ই মারা যাবে। তাছাড়া মায়ার মাথায় ইন্ট্রানাল ব্লিডিং না হলে, তারা দুজন কেই বাঁচানোর চেষ্টা করতো, এখন তো মায়ার হাতে ও সময় কম। মাত্র ঘন্টা খানেক সময় আছে, তারপর সে ও দুনিয়া থেকে বিদায় নিয়ে চলে যাবে চিরনিদ্রায়!!</p>
<p>রুদ্র এতো এতো কেইস হেন্ড্রেল করেছে, কিন্তু আজ সে থমকে গেছে, সে পারছে না, হাত কেঁপে উঠে, বুক কেঁপে উঠে, মায়ার সুক্ষ মুখটা দেখে। সে যে মায়াকে নিজের ছোট্ট দুই বোন মারিয়া আর মাহিয়ার মতো দেখতো।<br/>
এই কয়েকদিন এ তার আর মায়ার বন্ডিং টা ঠিক ভাই বোনের থেকে ও গভীর হয়েছিল। মায়া প্রাই বাবুর যত্ন কিভাবে নিতে হয়, কি করলে ভালো হয়, এই গুলো জানতে চাইতো!! রুদ্র তাকে তার সময়ের মধ্যে, কিছু সময় বের করে উপদেশ দিতো!!</p>
<p>আজ দ্বিতীয় বারের মতো রুদ্র অপারেশন থিয়েটারে যেতে ভয় পাচ্ছে, মনই মন নয় বাহ্যিক দিক থেকে ও ভেঙ্গে পড়ছে, রাজের প্রতি ক্ষোভ বেড়েই চলেছে&#8230;.</p>
<p>অবশেষে, যা সবার জন্য মঙ্গলজনক তাই ই করার আদেশ পেয়েছে রুদ্র, তার বাবা ও চাচার থেকে&#8230;.<br/>
_____</p>
<p>রুদ্র, রুদ্রের বাবা আর চাচা মায়ার কেবিনের কাছে আসতেই, বিহারিনী দৌড়ে গিয়ে রুদ্র কে জড়িয়ে ধরে হাউমাউ করে কান্না শুরু করে দিল। কান্নার বেগ এতোই প্রবল যে, বিহারিনী কিছু ই মুখ ফুটে বলতে পারছে না। অন্য সম। হলে হয়তো রুদ্র হাসত, নিজ পাঁজরের প্রিয়তমা সজনী পাখি কে উপভোগ করতো!! আজ সে ও ভেঙ্গে পড়ছে&#8230;</p>
<p>বিহারিনী- মায়া ভাবী বলেছে, সে থাকবে না পৃথিবীতে!! খুব অভিমান হয়েছে তার!! কোনদিন আপনার কাছে কিছু চাই নাই, প্রয়োজন হলে কখনো আর আবদার করব না, আজ আমাকে আপনি কথা দিবেন, আমি আপনার কাছে চাইছি, যত যাই কিছু হয়ে যাক, মায়া ভাবী আর বাচ্চা দুজন কেই আমার জীবিত চাই!! (চিল্লিয়ে উঠল) শুনেছেন, ডাক্তার রুদ্র হাওলাদার!! আমি আমার বোন মায়া কে আর তার বাচ্চাকে জীবিত চাই&#8230;.</p>
<p>রুদ্র যেন থমকে গেছে। বিহারিনীর এমন রুপ সে কখনো দেখিনি। তাছাড়া এই বিহারিনী তো সেই বিহারিনী নয়!! বিহারিনী সর্বদিক থেকে ঠিক থাকলে কি একই ভাবে মায়া আর বাচ্চাকে চাইত?&#8230;<br/>
কি জবাব ই দেবে রুদ্র !! বিহারিনীকে সরিয়ে সে দ্রুত পায়ে এক প্রকার ওটি তে যেন পালিয়ে গেল&#8230;</p>
<p>______</p>
<p>ঠিক ঘন্টা খানেক পর, একজন নার্স একটা ছোট্ট সুন্দর অংশ কে কাপড় এ পেঁচিয়ে নিয়ে আসলো। বাচ্চা টা কান্না করছে, পরিবারের রুদ্রের মা, দাদি, রাজের মা, মোহিনী এগিয়ে গেল। কিন্তু বিহারিনী থমকে দাঁড়িয়ে আছে। ওটির লাল বাতি এখনো নিভে নাই, একবার বাচ্চা আর একবার ওটির বাতির দিকে তাকায়!!</p>
<p>ছোট্ট বাবুটা এক কোল থেকে আরেক কোল যাচ্ছেই, কিন্তু কান্না থামাচ্ছে না, মিনিট পাঁচেক সবাই চেষ্টা করলো, কিন্তু লাভ হলো না। দাদী নার্সের কোলে দিয়ে বলল &#8211; ওর মায়ের কাছে দিয়ে এসো, একটু দুধ খাইয়ে দিলেই শান্ত হয়ে যাবে!!</p>
<p>নার্সটা কি বলবে, শুধু বাচ্চা টার দিকে থমকে তাকিয়ে আছে। নার্সের যেন কিছু বলার ও নেই। নার্সটা বিহারিনীর দিকে এগিয়ে গেল, মায়ার কথা মতো, বিহারিনীর হাতে বাবুকে একপ্রকার একটু জোরে ই তুলে দিল!! সৃষ্টিকর্তার লীলা খেলা বড়ই অদ্ভুত, বাচ্চাটার কান্না ও সাথে সাথে থেমে গেল&#8230;<br/>
ছোট্ট একটা, সদে জন্ম নেওয়া ফুটফুটে বাচ্চা টা যেন, তার মাকে খুঁজে পেল&#8230;পরম আবেশে শান্ত হয়ে গেলো&#8230;..</p>
<p>দাদী, রুদ্রের মা উপস্থিত সবাই হতবাক হয়ে গেল&#8230;নার্সের মুখে মৃদু এক হাসি ফুটলো, মনেই মন বলল- মায়াময় মেয়েটা হয়তো এই দিক দিয়ে নিজেকে ভাগ্যবতী মনে করতেই পারে&#8230;.</p>
<p>_____</p>
<p>অপারেশন থিয়েটারে সর্ব চেষ্টা করছে রুদ্র আর তার টিম। কেন যেন, আজ সবকিছু ই ব্যার্থতার শিকল এ বন্দিদশায় বিরাজমান। বলে না, সময়, ভাগ্য, জন্ম_মিত্যু সবকিছু ই বিধাতার বিধান মেনে চলে। </p>
<p>মায়া হঠাৎ করেই কেঁপে উঠলো, রুদ্রের দিকে হাত বাড়িয়ে দিয়ে বলল- ভাই&#8230;.(রুদ্রের শক্ত বুকটা যেন থর থর করে কেঁপে উঠলো) আমার বাচ্চা টাকে দেখো। আমি চলে যাব, ফিরব না, কথা দেও, আমার বাচ্চা টা যেন তোমাদের পরিচয় এ বড় হয়&#8230;(রুদ্র &#8211; আমি কথা দিলাম বোন তোকে, হু হু করে কেঁদে উঠলো রুদ্র)</p>
<p>মায়া- ভাইরে&#8230;.(শ্বাসটা নিতে খুব ই কষ্ট হচ্ছে) একবার তাকে দেখে দিবে, একবার!! একটিবার!! আমার শেষ ইচ্ছা টা পূর্ণ করে দে না ভাই!! রাজ কে একটি বার ডেকে দে না ভাই!! এই দেখার আকুল আকাঙ্ক্ষা কেন মিঠছে না আমার&#8230; আমি&#8230;.</p>
<p>রুদ্রের হাতেই মায়া তার অতৃপ্ত , অর্ধ আশা, না বলা কথা ব্যক্ত করেই চলে গেল না ফিরার দেশে। উপস্থিত সবার চোখে যেন জল গড়িয়ে পড়ছে.. মূহুর্তে ই ফজরের আযানের ধ্বনি ছড়িয়ে পড়লো চারদিকে, যেন মায়ার সাথে সাথে এক কালো, অতৃপ্ত রাত শেষ হলো, নতুন এক বিষাদময় দিনের শুরু হলো&#8230;. বসন্তের প্রথম দিন&#8230;.<br/>
যেন প্রতিটি রন্দ্র রন্দ্রে মায়াময় বসন্তের এক বাসনা খিলে উঠলো&#8230;&#8230;</p>
<p>চলবে&#8230;&#8230;<br/>
(মায়াকে নিয়ে কিছু লাইন&#8230;. আপনাদের ভাষায়_ব্যক্ত করবেন!! আমার প্রিয় এক চরিত্রের অবসান হলো আজ!!)</p>

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" type="3946b4c98583e17aafee7bf2-text/javascript"></script><div class="td-g-rec td-g-rec-id-content_bottom tdi_46 td_block_template_1 ">
<style>.tdi_46.td-a-rec{transform:translateZ(0);text-align:center}.tdi_46 .td-element-style{z-index:-1}.tdi_46.td-a-rec-img{text-align:left}.tdi_46.td-a-rec-img img{margin:0 auto 0 0}@media (max-width:767px){.tdi_46.td-a-rec-img{text-align:center}}</style><script type="3946b4c98583e17aafee7bf2-text/javascript">
var td_screen_width = window.innerWidth;
window.addEventListener("load", function(){            
	            var placeAdEl = document.getElementById("td-ad-placeholder");
			    if ( null !== placeAdEl && td_screen_width >= 1140 ) {
			        
			        /* large monitors */
			        var adEl = document.createElement("ins");
		            placeAdEl.replaceWith(adEl);	
		            adEl.setAttribute("class", "adsbygoogle");
		            adEl.setAttribute("style", "display:inline-block;width:468px;height:60px");	            		                
		            adEl.setAttribute("data-ad-client", "ca-pub-6468708806497207");
		            adEl.setAttribute("data-ad-slot", "1561621778");	            
			        (adsbygoogle = window.adsbygoogle || []).push({});
			    }
			});window.addEventListener("load", function(){            
	            var placeAdEl = document.getElementById("td-ad-placeholder");
			    if ( null !== placeAdEl && td_screen_width >= 1019  && td_screen_width < 1140 ) {
			    
			        /* landscape tablets */
			        var adEl = document.createElement("ins");
		            placeAdEl.replaceWith(adEl);	
		            adEl.setAttribute("class", "adsbygoogle");
		            adEl.setAttribute("style", "display:inline-block;width:468px;height:60px");	            		                
		            adEl.setAttribute("data-ad-client", "ca-pub-6468708806497207");
		            adEl.setAttribute("data-ad-slot", "1561621778");	            
			        (adsbygoogle = window.adsbygoogle || []).push({});
			    }
			});window.addEventListener("load", function(){            
	            var placeAdEl = document.getElementById("td-ad-placeholder");
			    if ( null !== placeAdEl && td_screen_width >= 768  && td_screen_width < 1019 ) {
			    
			        /* portrait tablets */
			        var adEl = document.createElement("ins");
		            placeAdEl.replaceWith(adEl);	
		            adEl.setAttribute("class", "adsbygoogle");
		            adEl.setAttribute("style", "display:inline-block;width:468px;height:60px");	            		                
		            adEl.setAttribute("data-ad-client", "ca-pub-6468708806497207");
		            adEl.setAttribute("data-ad-slot", "1561621778");	            
			        (adsbygoogle = window.adsbygoogle || []).push({});
			    }
			});window.addEventListener("load", function(){            
	            var placeAdEl = document.getElementById("td-ad-placeholder");
			    if ( null !== placeAdEl && td_screen_width < 768 ) {
			    
			        /* Phones */
			        var adEl = document.createElement("ins");
		            placeAdEl.replaceWith(adEl);	
		            adEl.setAttribute("class", "adsbygoogle");
		            adEl.setAttribute("style", "display:inline-block;width:300px;height:250px");	            		                
		            adEl.setAttribute("data-ad-client", "ca-pub-6468708806497207");
		            adEl.setAttribute("data-ad-slot", "1561621778");	            
			        (adsbygoogle = window.adsbygoogle || []).push({});
			    }
			});</script>
<noscript id="td-ad-placeholder"></noscript></div>

</div>
<footer>
 
<div class="td-post-source-tags">
 <ul class="td-tags td-post-small-box clearfix"><li><span>TAGS</span></li><li><a href="https://golpershohor.com/tag/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/">মায়াবন_বিহারিনী_হরিণী ২০ #writer_Neel_Noor</a></li></ul> </div>
<div class="td-post-sharing-bottom"><div class="td-post-sharing-classic"><iframe frameBorder="0" src="https://www.facebook.com/plugins/like.php?href=https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/&amp;layout=button_count&amp;show_faces=false&amp;width=105&amp;action=like&amp;colorscheme=light&amp;height=21" style="border:none; overflow:hidden; width:auto; height:21px; background-color:transparent;"></iframe></div><div id="td_social_sharing_article_bottom" class="td-post-sharing td-ps-bg td-ps-notext td-post-sharing-style1 "><div class="td-post-sharing-visible"><a class="td-social-sharing-button td-social-sharing-button-js td-social-network td-social-facebook" href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fgolpershohor.com%2F2024%2F02%2F20%2F%25e0%25a6%25ae%25e0%25a6%25be%25e0%25a6%25af%25e0%25a6%25bc%25e0%25a6%25be%25e0%25a6%25ac%25e0%25a6%25a8_%25e0%25a6%25ac%25e0%25a6%25bf%25e0%25a6%25b9%25e0%25a6%25be%25e0%25a6%25b0%25e0%25a6%25bf%25e0%25a6%25a8%25e0%25a7%2580_%25e0%25a6%25b9%25e0%25a6%25b0%25e0%25a6%25bf%25e0%25a6%25a3%25e0%25a7%2580-%25e0%25a7%25a8%2F" title="Facebook"><div class="td-social-but-icon"><i class="td-icon-facebook"></i></div><div class="td-social-but-text">Facebook</div></a><a class="td-social-sharing-button td-social-sharing-button-js td-social-network td-social-twitter" href="https://twitter.com/intent/tweet?text=%E0%A6%AE%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%AC%E0%A6%A8_%E0%A6%AC%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A8%E0%A7%80_%E0%A6%B9%E0%A6%B0%E0%A6%BF%E0%A6%A3%E0%A7%80+%E0%A7%A8%E0%A7%A6+%23writer_Neel_Noor&url=https%3A%2F%2Fgolpershohor.com%2F2024%2F02%2F20%2F%25e0%25a6%25ae%25e0%25a6%25be%25e0%25a6%25af%25e0%25a6%25bc%25e0%25a6%25be%25e0%25a6%25ac%25e0%25a6%25a8_%25e0%25a6%25ac%25e0%25a6%25bf%25e0%25a6%25b9%25e0%25a6%25be%25e0%25a6%25b0%25e0%25a6%25bf%25e0%25a6%25a8%25e0%25a7%2580_%25e0%25a6%25b9%25e0%25a6%25b0%25e0%25a6%25bf%25e0%25a6%25a3%25e0%25a7%2580-%25e0%25a7%25a8%2F&via=%E0%A6%97%E0%A6%B2%E0%A7%8D%E0%A6%AA%E0%A7%87%E0%A6%B0+%E0%A6%B6%E0%A6%B9%E0%A6%B0+%E0%A6%A1%E0%A6%9F+%E0%A6%95%E0%A6%AE" title="Twitter"><div class="td-social-but-icon"><i class="td-icon-twitter"></i></div><div class="td-social-but-text">Twitter</div></a><a class="td-social-sharing-button td-social-sharing-button-js td-social-network td-social-pinterest" href="https://pinterest.com/pin/create/button/?url=https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/&amp;media=https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389.jpg&description=%E0%A6%AE%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%AC%E0%A6%A8_%E0%A6%AC%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A8%E0%A7%80_%E0%A6%B9%E0%A6%B0%E0%A6%BF%E0%A6%A3%E0%A7%80+%E0%A7%A8%E0%A7%A6+%23writer_Neel_Noor" title="Pinterest"><div class="td-social-but-icon"><i class="td-icon-pinterest"></i></div><div class="td-social-but-text">Pinterest</div></a><a class="td-social-sharing-button td-social-sharing-button-js td-social-network td-social-whatsapp" href="https://api.whatsapp.com/send?text=%E0%A6%AE%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%AC%E0%A6%A8_%E0%A6%AC%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A8%E0%A7%80_%E0%A6%B9%E0%A6%B0%E0%A6%BF%E0%A6%A3%E0%A7%80+%E0%A7%A8%E0%A7%A6+%23writer_Neel_Noor %0A%0A https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/" title="WhatsApp"><div class="td-social-but-icon"><i class="td-icon-whatsapp"></i></div><div class="td-social-but-text">WhatsApp</div></a></div><div class="td-social-sharing-hidden"><ul class="td-pulldown-filter-list"></ul><a class="td-social-sharing-button td-social-handler td-social-expand-tabs" href="#" data-block-uid="td_social_sharing_article_bottom" title="More">
<div class="td-social-but-icon"><i class="td-icon-plus td-social-expand-tabs-icon"></i></div>
</a></div></div></div> <div class="td-block-row td-post-next-prev"><div class="td-block-span6 td-post-prev-post"><div class="td-post-next-prev-content"><span>Previous article</span><a href="https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a7-6/">মায়াবন_বিহারিনী_হরিণী ১৯ #writer_Neel_Noor</a></div></div><div class="td-next-prev-separator"></div></div> <div class="author-box-wrap"><a href="https://golpershohor.com/author/admin1/" aria-label="author-photo"><img alt src="https://secure.gravatar.com/avatar/f2ee3fec24fa050d72f0319ec48bf4c9?s=96&#038;d=mm&#038;r=g" srcset="https://secure.gravatar.com/avatar/f2ee3fec24fa050d72f0319ec48bf4c9?s=192&#038;d=mm&#038;r=g 2x" class="avatar avatar-96 photo" height="96" width="96" decoding="async" /></a><div class="desc"><div class="td-author-name vcard author"><span class="fn"><a href="https://golpershohor.com/author/admin1/">admin1</a></span></div><div class="td-author-url"><a href="https://golpershohor.com">https://golpershohor.com</a></div><div class="td-author-description"></div><div class="td-author-social"></div><div class="clearfix"></div></div></div> <span class="td-page-meta" itemprop="author" itemscope itemtype="https://schema.org/Person"><meta itemprop="name" content="admin1"><meta itemprop="url" content="https://golpershohor.com/author/admin1/"></span><meta itemprop="datePublished" content="2024-02-20T18:52:52+00:00"><meta itemprop="dateModified" content="2024-02-20T18:52:52+00:00"><meta itemscope itemprop="mainEntityOfPage" itemType="https://schema.org/WebPage" itemid="https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a8/" /><span class="td-page-meta" itemprop="publisher" itemscope itemtype="https://schema.org/Organization"><span class="td-page-meta" itemprop="logo" itemscope itemtype="https://schema.org/ImageObject"><meta itemprop="url" content="https://golpershohor.com/wp-content/uploads/2022/03/272.90-300x99.png"></span><meta itemprop="name" content="গল্পের শহর ডট কম"></span><meta itemprop="headline " content="মায়াবন_বিহারিনী_হরিণী ২০ #writer_Neel_Noor"><span class="td-page-meta" itemprop="image" itemscope itemtype="https://schema.org/ImageObject"><meta itemprop="url" content="https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389.jpg"><meta itemprop="width" content="690"><meta itemprop="height" content="400"></span> </footer>
</article> 
<div class="td_block_wrap td_block_related_posts tdi_47 td_with_ajax_pagination td-pb-border-top td_block_template_1" data-td-block-uid="tdi_47"><script type="3946b4c98583e17aafee7bf2-text/javascript">var block_tdi_47 = new tdBlock();
block_tdi_47.id = "tdi_47";
block_tdi_47.atts = '{"limit":3,"ajax_pagination":"next_prev","live_filter":"cur_post_same_categories","td_ajax_filter_type":"td_custom_related","class":"tdi_47","td_column_number":3,"block_type":"td_block_related_posts","live_filter_cur_post_id":46703,"live_filter_cur_post_author":"1","block_template_id":"","header_color":"","ajax_pagination_infinite_stop":"","offset":"","td_ajax_preloading":"","td_filter_default_txt":"","td_ajax_filter_ids":"","el_class":"","color_preset":"","ajax_pagination_next_prev_swipe":"","border_top":"","css":"","tdc_css":"","tdc_css_class":"tdi_47","tdc_css_class_style":"tdi_47_rand_style"}';
block_tdi_47.td_column_number = "3";
block_tdi_47.block_type = "td_block_related_posts";
block_tdi_47.post_count = "3";
block_tdi_47.found_posts = "19";
block_tdi_47.header_color = "";
block_tdi_47.ajax_pagination_infinite_stop = "";
block_tdi_47.max_num_pages = "7";
tdBlocksArray.push(block_tdi_47);
</script><h4 class="td-related-title td-block-title"><a id="tdi_48" class="td-related-left td-cur-simple-item" data-td_filter_value data-td_block_id="tdi_47" href="#">RELATED ARTICLES</a><a id="tdi_49" class="td-related-right" data-td_filter_value="td_related_more_from_author" data-td_block_id="tdi_47" href="#">MORE FROM AUTHOR</a></h4><div id="tdi_47" class="td_block_inner">
<div class="td-related-row">
<div class="td-related-span4">
<div class="td_module_related_posts td-animation-stack td_mod_related_posts">
<div class="td-module-image">
<div class="td-module-thumb"><a href="https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a7-6/" rel="bookmark" class="td-image-wrap " title="মায়াবন_বিহারিনী_হরিণী ১৯ #writer_Neel_Noor"><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAACWAQMAAACCSQSPAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABpJREFUWMPtwQENAAAAwiD7p7bHBwwAAAAg7RD+AAGXD7BoAAAAAElFTkSuQmCC" alt title="মায়াবন_বিহারিনী_হরিণী ১৯ #writer_Neel_Noor" data-type="image_tag" data-img-url="https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389-218x150.jpg" width="218" height="150" /></a></div> </div>
<div class="item-details">
<h3 class="entry-title td-module-title"><a href="https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a7-6/" rel="bookmark" title="মায়াবন_বিহারিনী_হরিণী ১৯ #writer_Neel_Noor">মায়াবন_বিহারিনী_হরিণী ১৯ #writer_Neel_Noor</a></h3> </div>
</div>
</div> 
<div class="td-related-span4">
<div class="td_module_related_posts td-animation-stack td_mod_related_posts">
<div class="td-module-image">
<div class="td-module-thumb"><a href="https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a7-5/" rel="bookmark" class="td-image-wrap " title="মায়াবন_বিহারিনী_হরিণী ১৮ #writer_Neel_Noor"><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAACWAQMAAACCSQSPAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABpJREFUWMPtwQENAAAAwiD7p7bHBwwAAAAg7RD+AAGXD7BoAAAAAElFTkSuQmCC" alt title="মায়াবন_বিহারিনী_হরিণী ১৮ #writer_Neel_Noor" data-type="image_tag" data-img-url="https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389-218x150.jpg" width="218" height="150" /></a></div> </div>
<div class="item-details">
<h3 class="entry-title td-module-title"><a href="https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a7-5/" rel="bookmark" title="মায়াবন_বিহারিনী_হরিণী ১৮ #writer_Neel_Noor">মায়াবন_বিহারিনী_হরিণী ১৮ #writer_Neel_Noor</a></h3> </div>
</div>
</div> 
<div class="td-related-span4">
<div class="td_module_related_posts td-animation-stack td_mod_related_posts">
<div class="td-module-image">
<div class="td-module-thumb"><a href="https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a7-4/" rel="bookmark" class="td-image-wrap " title="মায়াবন_বিহারিনী_হরিণী ১৭ #writer_Neel_Noor"><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAACWAQMAAACCSQSPAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABpJREFUWMPtwQENAAAAwiD7p7bHBwwAAAAg7RD+AAGXD7BoAAAAAElFTkSuQmCC" alt title="মায়াবন_বিহারিনী_হরিণী ১৭ #writer_Neel_Noor" data-type="image_tag" data-img-url="https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389-218x150.jpg" width="218" height="150" /></a></div> </div>
<div class="item-details">
<h3 class="entry-title td-module-title"><a href="https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a7-4/" rel="bookmark" title="মায়াবন_বিহারিনী_হরিণী ১৭ #writer_Neel_Noor">মায়াবন_বিহারিনী_হরিণী ১৭ #writer_Neel_Noor</a></h3> </div>
</div>
</div> </div></div><div class="td-next-prev-wrap"><a href="#" class="td-ajax-prev-page ajax-page-disabled" aria-label="prev-page" id="prev-page-tdi_47" data-td_block_id="tdi_47"><i class="td-next-prev-icon td-icon-font td-icon-menu-left"></i></a><a href="#" class="td-ajax-next-page" aria-label="next-page" id="next-page-tdi_47" data-td_block_id="tdi_47"><i class="td-next-prev-icon td-icon-font td-icon-menu-right"></i></a></div></div> 
<div class="comments" id="comments">
<div id="respond" class="comment-respond">
<h3 id="reply-title" class="comment-reply-title">LEAVE A REPLY <small><a rel="nofollow" id="cancel-comment-reply-link" href="/2024/02/20/%E0%A6%AE%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%AC%E0%A6%A8_%E0%A6%AC%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A8%E0%A7%80_%E0%A6%B9%E0%A6%B0%E0%A6%BF%E0%A6%A3%E0%A7%80-%E0%A7%A8/#respond" style="display:none;">Cancel reply</a></small></h3><form action="https://golpershohor.com/wp-comments-post.php" method="post" id="commentform" class="comment-form" novalidate><div class="clearfix"></div>
<div class="comment-form-input-wrap td-form-comment">
<textarea placeholder="Comment:" id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea>
<div class="td-warning-comment">Please enter your comment!</div>
</div><div class="comment-form-input-wrap td-form-author">
<input class id="author" name="author" placeholder="Name:*" type="text" value size="30" aria-required="true" />
<div class="td-warning-author">Please enter your name here</div>
</div>
<div class="comment-form-input-wrap td-form-email">
<input class id="email" name="email" placeholder="Email:*" type="text" value size="30" aria-required="true" />
<div class="td-warning-email-error">You have entered an incorrect email address!</div>
<div class="td-warning-email">Please enter your email address here</div>
</div>
<div class="comment-form-input-wrap td-form-url">
<input class id="url" name="url" placeholder="Website:" type="text" value size="30" />
</div>
<p class="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" /><label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p>
<p class="form-submit"><input name="submit" type="submit" id="submit" class="submit" value="Post Comment" /> <input type="hidden" name="comment_post_ID" value="46703" id="comment_post_ID" />
<input type="hidden" name="comment_parent" id="comment_parent" value="0" />
</p><p style="display: none;"><input type="hidden" id="akismet_comment_nonce" name="akismet_comment_nonce" value="2ea9b11265" /></p><p style="display: none !important;"><label>&#916;<textarea name="ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea></label><input type="hidden" id="ak_js_1" name="ak_js" value="212" /><script type="3946b4c98583e17aafee7bf2-text/javascript">document.getElementById( "ak_js_1" ).setAttribute( "value", ( new Date() ).getTime() );</script></p></form> </div>
</div> 
</div>
</div>
<div class="td-pb-span4 td-main-sidebar" role="complementary">
<div class="td-ss-main-sidebar">

</div>
</div>
</div> 
</div> 
</div> 

<div class="tdc-footer-wrap ">

<div class="td-footer-wrapper td-footer-container td-container-wrap ">
<div class="td-container">
<div class="td-pb-row">
<div class="td-pb-span12">

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" type="3946b4c98583e17aafee7bf2-text/javascript"></script><div class="td-g-rec td-g-rec-id-footer_top tdi_50 td_block_template_1 ">
<style>.tdi_50.td-a-rec{transform:translateZ(0);text-align:center}.tdi_50 .td-element-style{z-index:-1}.tdi_50.td-a-rec-img{text-align:left}.tdi_50.td-a-rec-img img{margin:0 auto 0 0}@media (max-width:767px){.tdi_50.td-a-rec-img{text-align:center}}</style><script type="3946b4c98583e17aafee7bf2-text/javascript">
var td_screen_width = window.innerWidth;
window.addEventListener("load", function(){            
	            var placeAdEl = document.getElementById("td-ad-placeholder");
			    if ( null !== placeAdEl && td_screen_width >= 1140 ) {
			        
			        /* large monitors */
			        var adEl = document.createElement("ins");
		            placeAdEl.replaceWith(adEl);	
		            adEl.setAttribute("class", "adsbygoogle");
		            adEl.setAttribute("style", "display:inline-block;width:728px;height:90px");	            		                
		            adEl.setAttribute("data-ad-client", "ca-pub-6468708806497207");
		            adEl.setAttribute("data-ad-slot", "2969529252");	            
			        (adsbygoogle = window.adsbygoogle || []).push({});
			    }
			});window.addEventListener("load", function(){            
	            var placeAdEl = document.getElementById("td-ad-placeholder");
			    if ( null !== placeAdEl && td_screen_width >= 1019  && td_screen_width < 1140 ) {
			    
			        /* landscape tablets */
			        var adEl = document.createElement("ins");
		            placeAdEl.replaceWith(adEl);	
		            adEl.setAttribute("class", "adsbygoogle");
		            adEl.setAttribute("style", "display:inline-block;width:728px;height:90px");	            		                
		            adEl.setAttribute("data-ad-client", "ca-pub-6468708806497207");
		            adEl.setAttribute("data-ad-slot", "2969529252");	            
			        (adsbygoogle = window.adsbygoogle || []).push({});
			    }
			});window.addEventListener("load", function(){            
	            var placeAdEl = document.getElementById("td-ad-placeholder");
			    if ( null !== placeAdEl && td_screen_width >= 768  && td_screen_width < 1019 ) {
			    
			        /* portrait tablets */
			        var adEl = document.createElement("ins");
		            placeAdEl.replaceWith(adEl);	
		            adEl.setAttribute("class", "adsbygoogle");
		            adEl.setAttribute("style", "display:inline-block;width:728px;height:90px");	            		                
		            adEl.setAttribute("data-ad-client", "ca-pub-6468708806497207");
		            adEl.setAttribute("data-ad-slot", "2969529252");	            
			        (adsbygoogle = window.adsbygoogle || []).push({});
			    }
			});window.addEventListener("load", function(){            
	            var placeAdEl = document.getElementById("td-ad-placeholder");
			    if ( null !== placeAdEl && td_screen_width < 768 ) {
			    
			        /* Phones */
			        var adEl = document.createElement("ins");
		            placeAdEl.replaceWith(adEl);	
		            adEl.setAttribute("class", "adsbygoogle");
		            adEl.setAttribute("style", "display:inline-block;width:300px;height:250px");	            		                
		            adEl.setAttribute("data-ad-client", "ca-pub-6468708806497207");
		            adEl.setAttribute("data-ad-slot", "2969529252");	            
			        (adsbygoogle = window.adsbygoogle || []).push({});
			    }
			});</script>
<noscript id="td-ad-placeholder"></noscript></div>

</div>
</div>
<div class="td-pb-row">
<div class="td-pb-span4">
<div class="td_block_wrap td_block_7 tdi_51 td-pb-border-top td_block_template_1 td-column-1 td_block_padding" data-td-block-uid="tdi_51">
<style></style>
<style></style><script type="3946b4c98583e17aafee7bf2-text/javascript">var block_tdi_51 = new tdBlock();
block_tdi_51.id = "tdi_51";
block_tdi_51.atts = '{"custom_title":"EDITOR PICKS","limit":3,"sort":"featured","block_type":"td_block_7","separator":"","custom_url":"","block_template_id":"","m6_tl":"","post_ids":"-46703","category_id":"","taxonomies":"","category_ids":"","in_all_terms":"","tag_slug":"","autors_id":"","installed_post_types":"","include_cf_posts":"","exclude_cf_posts":"","linked_posts":"","favourite_only":"","offset":"","open_in_new_window":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","time_ago_txt_pos":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_settings":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_settings":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_settings":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_settings":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_settings":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_settings":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination":"","ajax_pagination_next_prev_swipe":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":1,"header_color":"","color_preset":"","border_top":"","class":"tdi_51","tdc_css_class":"tdi_51","tdc_css_class_style":"tdi_51_rand_style"}';
block_tdi_51.td_column_number = "1";
block_tdi_51.block_type = "td_block_7";
block_tdi_51.post_count = "3";
block_tdi_51.found_posts = "18666";
block_tdi_51.header_color = "";
block_tdi_51.ajax_pagination_infinite_stop = "";
block_tdi_51.max_num_pages = "6222";
tdBlocksArray.push(block_tdi_51);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">EDITOR PICKS</span></h4></div><div id="tdi_51" class="td_block_inner">
<div class="td-block-span12">
<div class="td_module_6 td_module_wrap td-animation-stack">
<div class="td-module-thumb"><a href="https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a7-6/" rel="bookmark" class="td-image-wrap " title="মায়াবন_বিহারিনী_হরিণী ১৯ #writer_Neel_Noor"><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt title="মায়াবন_বিহারিনী_হরিণী ১৯ #writer_Neel_Noor" data-type="image_tag" data-img-url="https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389-100x70.jpg" width="100" height="70" /></a></div>
<div class="item-details">
<h3 class="entry-title td-module-title"><a href="https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a7-6/" rel="bookmark" title="মায়াবন_বিহারিনী_হরিণী ১৯ #writer_Neel_Noor">মায়াবন_বিহারিনী_হরিণী ১৯ #writer_Neel_Noor</a></h3> <div class="td-module-meta-info">
<span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-02-20T18:52:22+00:00">February 20, 2024</time></span> </div>
</div>
</div>
</div> 
<div class="td-block-span12">
<div class="td_module_6 td_module_wrap td-animation-stack">
<div class="td-module-thumb"><a href="https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a7-5/" rel="bookmark" class="td-image-wrap " title="মায়াবন_বিহারিনী_হরিণী ১৮ #writer_Neel_Noor"><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt title="মায়াবন_বিহারিনী_হরিণী ১৮ #writer_Neel_Noor" data-type="image_tag" data-img-url="https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389-100x70.jpg" width="100" height="70" /></a></div>
<div class="item-details">
<h3 class="entry-title td-module-title"><a href="https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a7-5/" rel="bookmark" title="মায়াবন_বিহারিনী_হরিণী ১৮ #writer_Neel_Noor">মায়াবন_বিহারিনী_হরিণী ১৮ #writer_Neel_Noor</a></h3> <div class="td-module-meta-info">
<span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-02-20T18:51:58+00:00">February 20, 2024</time></span> </div>
</div>
</div>
</div> 
<div class="td-block-span12">
<div class="td_module_6 td_module_wrap td-animation-stack">
<div class="td-module-thumb"><a href="https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a7-4/" rel="bookmark" class="td-image-wrap " title="মায়াবন_বিহারিনী_হরিণী ১৭ #writer_Neel_Noor"><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt title="মায়াবন_বিহারিনী_হরিণী ১৭ #writer_Neel_Noor" data-type="image_tag" data-img-url="https://golpershohor.com/wp-content/uploads/2024/02/FB_IMG_1708411460389-100x70.jpg" width="100" height="70" /></a></div>
<div class="item-details">
<h3 class="entry-title td-module-title"><a href="https://golpershohor.com/2024/02/20/%e0%a6%ae%e0%a6%be%e0%a6%af%e0%a6%bc%e0%a6%be%e0%a6%ac%e0%a6%a8_%e0%a6%ac%e0%a6%bf%e0%a6%b9%e0%a6%be%e0%a6%b0%e0%a6%bf%e0%a6%a8%e0%a7%80_%e0%a6%b9%e0%a6%b0%e0%a6%bf%e0%a6%a3%e0%a7%80-%e0%a7%a7-4/" rel="bookmark" title="মায়াবন_বিহারিনী_হরিণী ১৭ #writer_Neel_Noor">মায়াবন_বিহারিনী_হরিণী ১৭ #writer_Neel_Noor</a></h3> <div class="td-module-meta-info">
<span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2024-02-20T18:51:34+00:00">February 20, 2024</time></span> </div>
</div>
</div>
</div> </div></div>  </div>
<div class="td-pb-span4">
<div class="td_block_wrap td_block_7 tdi_52 td-pb-border-top td_block_template_1 td-column-1 td_block_padding" data-td-block-uid="tdi_52">
<style></style>
<style></style><script type="3946b4c98583e17aafee7bf2-text/javascript">var block_tdi_52 = new tdBlock();
block_tdi_52.id = "tdi_52";
block_tdi_52.atts = '{"custom_title":"POPULAR POSTS","limit":3,"sort":"popular","block_type":"td_block_7","separator":"","custom_url":"","block_template_id":"","m6_tl":"","post_ids":"-46703","category_id":"","taxonomies":"","category_ids":"","in_all_terms":"","tag_slug":"","autors_id":"","installed_post_types":"","include_cf_posts":"","exclude_cf_posts":"","linked_posts":"","favourite_only":"","offset":"","open_in_new_window":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","time_ago_txt_pos":"","el_class":"","td_ajax_filter_type":"","td_ajax_filter_ids":"","td_filter_default_txt":"All","td_ajax_preloading":"","f_header_font_header":"","f_header_font_title":"Block header","f_header_font_settings":"","f_header_font_family":"","f_header_font_size":"","f_header_font_line_height":"","f_header_font_style":"","f_header_font_weight":"","f_header_font_transform":"","f_header_font_spacing":"","f_header_":"","f_ajax_font_title":"Ajax categories","f_ajax_font_settings":"","f_ajax_font_family":"","f_ajax_font_size":"","f_ajax_font_line_height":"","f_ajax_font_style":"","f_ajax_font_weight":"","f_ajax_font_transform":"","f_ajax_font_spacing":"","f_ajax_":"","f_more_font_title":"Load more button","f_more_font_settings":"","f_more_font_family":"","f_more_font_size":"","f_more_font_line_height":"","f_more_font_style":"","f_more_font_weight":"","f_more_font_transform":"","f_more_font_spacing":"","f_more_":"","m6f_title_font_header":"","m6f_title_font_title":"Article title","m6f_title_font_settings":"","m6f_title_font_family":"","m6f_title_font_size":"","m6f_title_font_line_height":"","m6f_title_font_style":"","m6f_title_font_weight":"","m6f_title_font_transform":"","m6f_title_font_spacing":"","m6f_title_":"","m6f_cat_font_title":"Article category tag","m6f_cat_font_settings":"","m6f_cat_font_family":"","m6f_cat_font_size":"","m6f_cat_font_line_height":"","m6f_cat_font_style":"","m6f_cat_font_weight":"","m6f_cat_font_transform":"","m6f_cat_font_spacing":"","m6f_cat_":"","m6f_meta_font_title":"Article meta info","m6f_meta_font_settings":"","m6f_meta_font_family":"","m6f_meta_font_size":"","m6f_meta_font_line_height":"","m6f_meta_font_style":"","m6f_meta_font_weight":"","m6f_meta_font_transform":"","m6f_meta_font_spacing":"","m6f_meta_":"","ajax_pagination":"","ajax_pagination_next_prev_swipe":"","ajax_pagination_infinite_stop":"","css":"","tdc_css":"","td_column_number":1,"header_color":"","color_preset":"","border_top":"","class":"tdi_52","tdc_css_class":"tdi_52","tdc_css_class_style":"tdi_52_rand_style"}';
block_tdi_52.td_column_number = "1";
block_tdi_52.block_type = "td_block_7";
block_tdi_52.post_count = "3";
block_tdi_52.found_posts = "18666";
block_tdi_52.header_color = "";
block_tdi_52.ajax_pagination_infinite_stop = "";
block_tdi_52.max_num_pages = "6222";
tdBlocksArray.push(block_tdi_52);
</script><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">POPULAR POSTS</span></h4></div><div id="tdi_52" class="td_block_inner">
<div class="td-block-span12">
<div class="td_module_6 td_module_wrap td-animation-stack">
<div class="td-module-thumb"><a href="https://golpershohor.com/2022/04/08/%e0%a6%8f%e0%a6%95%e0%a6%a6%e0%a6%bf%e0%a6%a8-%e0%a6%a4%e0%a7%81%e0%a6%ae%e0%a6%bf%e0%a6%93-%e0%a6%ad%e0%a6%be%e0%a6%b2%e0%a7%8b%e0%a6%ac%e0%a6%be%e0%a6%b8%e0%a6%ac%e0%a7%87-%f0%9f%8c%b8%e2%9d%a4/" rel="bookmark" class="td-image-wrap " title="একদিন তুমিও ভালোবাসবে&#8217; 🌸❤ ||পর্ব~১||"><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt title="একদিন তুমিও ভালোবাসবে&#8217; 🌸❤ ||পর্ব~১||" data-type="image_tag" data-img-url="https://golpershohor.com/wp-content/uploads/2022/04/FB_IMG_1649373737628.jpg" width="70" height="70" /></a></div>
<div class="item-details">
<h3 class="entry-title td-module-title"><a href="https://golpershohor.com/2022/04/08/%e0%a6%8f%e0%a6%95%e0%a6%a6%e0%a6%bf%e0%a6%a8-%e0%a6%a4%e0%a7%81%e0%a6%ae%e0%a6%bf%e0%a6%93-%e0%a6%ad%e0%a6%be%e0%a6%b2%e0%a7%8b%e0%a6%ac%e0%a6%be%e0%a6%b8%e0%a6%ac%e0%a7%87-%f0%9f%8c%b8%e2%9d%a4/" rel="bookmark" title="একদিন তুমিও ভালোবাসবে&#8217; 🌸❤ ||পর্ব~১||">একদিন তুমিও ভালোবাসবে&#8217; 🌸❤ ||পর্ব~১||</a></h3> <div class="td-module-meta-info">
<span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2022-04-08T00:47:13+00:00">April 8, 2022</time></span> </div>
</div>
</div>
</div> 
<div class="td-block-span12">
<div class="td_module_6 td_module_wrap td-animation-stack">
<div class="td-module-thumb"><a href="https://golpershohor.com/2022/04/30/%e0%a6%86%e0%a6%ae%e0%a6%bf-%e0%a6%aa%e0%a6%a6%e0%a7%8d%e0%a6%ae%e0%a6%9c%e0%a6%be-%e0%a6%aa%e0%a6%b0%e0%a7%8d%e0%a6%ac-%e0%a7%a7/" rel="bookmark" class="td-image-wrap " title="#আমি পদ্মজা পর্ব ১"><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt title="#আমি পদ্মজা পর্ব ১" data-type="image_tag" data-img-url="https://golpershohor.com/wp-content/uploads/2022/04/FB_IMG_1651316435000.jpg" width="48" height="70" /></a></div>
<div class="item-details">
<h3 class="entry-title td-module-title"><a href="https://golpershohor.com/2022/04/30/%e0%a6%86%e0%a6%ae%e0%a6%bf-%e0%a6%aa%e0%a6%a6%e0%a7%8d%e0%a6%ae%e0%a6%9c%e0%a6%be-%e0%a6%aa%e0%a6%b0%e0%a7%8d%e0%a6%ac-%e0%a7%a7/" rel="bookmark" title="#আমি পদ্মজা পর্ব ১">#আমি পদ্মজা পর্ব ১</a></h3> <div class="td-module-meta-info">
<span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2022-04-30T11:02:33+00:00">April 30, 2022</time></span> </div>
</div>
</div>
</div> 
<div class="td-block-span12">
<div class="td_module_6 td_module_wrap td-animation-stack">
<div class="td-module-thumb"><a href="https://golpershohor.com/2022/05/02/%e0%a6%86%e0%a6%ae%e0%a6%bf-%e0%a6%aa%e0%a6%a6%e0%a7%8d%e0%a6%ae%e0%a6%9c%e0%a6%be-%e0%a6%b6%e0%a7%87%e0%a6%b7-%e0%a6%aa%e0%a6%b0%e0%a7%8d%e0%a6%ac-%e0%a6%a6%e0%a7%8d%e0%a6%ac%e0%a6%bf%e0%a6%a4/" rel="bookmark" class="td-image-wrap " title="আমি পদ্মজা শেষ পর্ব (দ্বিতীয় ও শেষ অংশ)"><img class="entry-thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABGAQMAAAAASKMqAAAAA1BMVEWurq51dlI4AAAAAXRSTlMmkutdmwAAABBJREFUKM9jGAWjYBQMKwAAA9QAAQWBn6cAAAAASUVORK5CYII=" alt title="আমি পদ্মজা শেষ পর্ব (দ্বিতীয় ও শেষ অংশ)" data-type="image_tag" data-img-url="https://golpershohor.com/wp-content/uploads/2022/04/FB_IMG_1651316435000.jpg" width="48" height="70" /></a></div>
<div class="item-details">
<h3 class="entry-title td-module-title"><a href="https://golpershohor.com/2022/05/02/%e0%a6%86%e0%a6%ae%e0%a6%bf-%e0%a6%aa%e0%a6%a6%e0%a7%8d%e0%a6%ae%e0%a6%9c%e0%a6%be-%e0%a6%b6%e0%a7%87%e0%a6%b7-%e0%a6%aa%e0%a6%b0%e0%a7%8d%e0%a6%ac-%e0%a6%a6%e0%a7%8d%e0%a6%ac%e0%a6%bf%e0%a6%a4/" rel="bookmark" title="আমি পদ্মজা শেষ পর্ব (দ্বিতীয় ও শেষ অংশ)">আমি পদ্মজা শেষ পর্ব (দ্বিতীয় ও শেষ অংশ)</a></h3> <div class="td-module-meta-info">
<span class="td-post-date"><time class="entry-date updated td-module-date" datetime="2022-05-02T10:33:06+00:00">May 2, 2022</time></span> </div>
</div>
</div>
</div> </div></div>  </div>
<div class="td-pb-span4">
<div class="td_block_wrap td_block_popular_categories tdi_53 widget widget_categories td-pb-border-top td_block_template_1" data-td-block-uid="tdi_53">
<style></style>
<style>.td_block_popular_categories{padding-bottom:0}</style><div class="td-block-title-wrap"><h4 class="block-title td-block-title"><span class="td-pulldown-size">POPULAR CATEGORY</span></h4></div><ul class="td-pb-padding-side"><li><a href="https://golpershohor.com/category/dharabahik-golpo/%e0%a6%ae%e0%a6%a8-%e0%a6%ac%e0%a6%be%e0%a6%a1%e0%a6%bc%e0%a6%bf%e0%a6%af%e0%a6%bc%e0%a7%87-%e0%a6%9b%e0%a7%81%e0%a6%81%e0%a6%87/"><span class="td-cat-name">মন বাড়িয়ে ছুঁই</span><span class="td-cat-no">149</span></a></li><li><a href="https://golpershohor.com/category/dharabahik-golpo/%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a7%87%e0%a6%ae%e0%a7%87%e0%a6%b0-%e0%a6%aa%e0%a6%be%e0%a6%81%e0%a6%9a%e0%a6%ab%e0%a7%8b%e0%a7%9c%e0%a6%a8%f0%9f%92%96/"><span class="td-cat-name">প্রেমের পাঁচফোড়ন💖</span><span class="td-cat-no">133</span></a></li><li><a href="https://golpershohor.com/category/dharabahik-golpo/%e0%a6%86%e0%a6%ac%e0%a6%be%e0%a6%b0-%e0%a6%aa%e0%a7%8d%e0%a6%b0%e0%a7%87%e0%a6%ae-%e0%a6%b9%e0%a7%8b%e0%a6%95/"><span class="td-cat-name">আবার প্রেম হোক</span><span class="td-cat-no">120</span></a></li><li><a href="https://golpershohor.com/category/dharabahik-golpo/%e0%a6%b6%e0%a7%87%e0%a6%b7%e0%a6%9f%e0%a6%be-%e0%a6%b8%e0%a7%81%e0%a6%a8%e0%a7%8d%e0%a6%a6%e0%a6%b0-dharabahik-golpo/"><span class="td-cat-name">শেষটা সুন্দর</span><span class="td-cat-no">110</span></a></li><li><a href="https://golpershohor.com/category/dharabahik-golpo/%e0%a6%a4%e0%a6%bf%e0%a6%ae%e0%a6%bf%e0%a6%b0%e0%a7%87-%e0%a6%ab%e0%a7%8b%e0%a6%9f%e0%a6%be-%e0%a6%97%e0%a7%8b%e0%a6%b2%e0%a6%be%e0%a6%aa/"><span class="td-cat-name">তিমিরে ফোটা গোলাপ</span><span class="td-cat-no">94</span></a></li><li><a href="https://golpershohor.com/category/dharabahik-golpo/%e0%a6%ae%e0%a6%a8%e0%a7%87%e0%a6%b0-%e0%a6%85%e0%a6%b0%e0%a6%a3%e0%a7%8d%e0%a6%af%e0%a7%87-%e0%a6%8f%e0%a6%b2%e0%a7%87-%e0%a6%a4%e0%a7%81%e0%a6%ae%e0%a6%bf/"><span class="td-cat-name">মনের অরণ্যে এলে তুমি</span><span class="td-cat-no">92</span></a></li><li><a href="https://golpershohor.com/category/dharabahik-golpo/%e0%a6%86%e0%a6%ae%e0%a6%bf-%e0%a6%aa%e0%a6%a6%e0%a7%8d%e0%a6%ae%e0%a6%9c%e0%a6%be/"><span class="td-cat-name">আমি পদ্মজা</span><span class="td-cat-no">92</span></a></li><li><a href="https://golpershohor.com/category/dharabahik-golpo/%e0%a6%b9%e0%a6%bf%e0%a6%82%e0%a6%b8%e0%a7%8d%e0%a6%b0_%e0%a6%ad%e0%a6%be%e0%a6%b2%e0%a7%8b%e0%a6%ac%e0%a6%be%e0%a6%b8%e0%a6%be-%f0%9f%8c%b9/"><span class="td-cat-name">হিংস্র_ভালোবাসা ﻿🌹</span><span class="td-cat-no">82</span></a></li><li><a href="https://golpershohor.com/category/dharabahik-golpo/%e0%a6%ad%e0%a6%be%e0%a6%b2%e0%a7%8b%e0%a6%ac%e0%a6%be%e0%a6%b8%e0%a6%be%e0%a6%b0-%e0%a6%9a%e0%a7%87%e0%a6%af%e0%a6%bc%e0%a7%87%e0%a6%93-%e0%a6%ac%e0%a7%87%e0%a6%b6%e0%a6%bf%f0%9f%92%9e%f0%9f%92%9e/"><span class="td-cat-name">ভালোবাসার চেয়েও বেশি💞💞</span><span class="td-cat-no">82</span></a></li></ul></div> </div>
</div>
</div>
<div class="td-footer-bottom-full">
<div class="td-container">
<div class="td-pb-row">
<div class="td-pb-span3"><aside class="footer-logo-wrap"><a href="https://golpershohor.com/"><img src="https://golpershohor.com/wp-content/uploads/2022/03/272.90-300x99.png" alt title /></a></aside></div><div class="td-pb-span9"><aside class="footer-text-wrap"><div class="block-title"><span>ABOUT US</span></div>নিত্য নতুন গল্প পড়ার জন্য আমাদের সাথেই থাকুন।<div class="footer-email-wrap">Contact us: <a href="/cdn-cgi/l/email-protection#3c4f555a545d4f545955577c5b515d5550125f5351"><span class="__cf_email__" data-cfemail="72011b141a13011a171b1932151f131b1e5c111d1f">[email&#160;protected]</span></a></div></aside></div> </div>
</div>
</div>
</div>

<div class="td-sub-footer-container td-container-wrap ">
<div class="td-container">
<div class="td-pb-row">
<div class="td-pb-span td-sub-footer-menu">
<div class="menu-main-mane-container"><ul id="menu-main-mane-5" class="td-subfooter-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-first td-menu-item td-normal-menu menu-item-23036"><a href="https://golpershohor.com/">Home</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-33336"><a href="https://golpershohor.com/ongoing-story/">চলমান নতুন গল্প</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children td-menu-item td-normal-menu menu-item-394"><a href="https://golpershohor.com/categotirs/">Categotirs</a>
<ul class="sub-menu">
<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-3461"><a href="https://golpershohor.com/categotirs-mobile/">Categotirs – mobile</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-23488"><a href="https://golpershohor.com/home-mobile/">Home – mobile</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy td-menu-item td-normal-menu menu-item-278"><a rel="privacy-policy" href="https://golpershohor.com/privacy-policy/">Privacy Policy</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-36739"><a href="https://golpershohor.com/tds-checkout/">Checkout</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-36741"><a href="https://golpershohor.com/tds-my-account/">My account</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-36743"><a href="https://golpershohor.com/tds-login-register/">Login/Register</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu menu-item-37211"><a href="https://golpershohor.com/cookie-policy-eu/">Cookie Policy (EU)</a></li>
</ul></div> </div>
<div class="td-pb-span td-sub-footer-copy">
&copy; golpershohor.com </div>
</div>
</div>
</div>
</div>
</div>


<noscript>
			<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52H9QHR" height="0" width="0" style="display:none;visibility:hidden"></iframe>
		</noscript>

<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-includes/js/underscore.min.js?ver=1.13.4" id="underscore-js"></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-content/plugins/td-cloud-library/assets/js/js_posts_autoload.min.js?ver=ca46607f0f63147990c8ac1f35d750e1" id="tdb_js_posts_autoload-js"></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-content/plugins/td-composer/legacy/Newspaper/js/tagdiv_theme.min.js?ver=12.6" id="td-site-min-js"></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-content/plugins/td-composer/legacy/Newspaper/js/tdPostImages.js?ver=12.6" id="tdPostImages-js"></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-content/plugins/td-composer/legacy/Newspaper/js/tdSocialSharing.js?ver=12.6" id="tdSocialSharing-js"></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-content/plugins/td-composer/legacy/Newspaper/js/tdModalPostImages.js?ver=12.6" id="tdModalPostImages-js"></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-includes/js/comment-reply.min.js?ver=6.4.2" id="comment-reply-js" async="async" data-wp-strategy="async"></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" id="tds_js_files_for_front-js-extra">
/* <![CDATA[ */
var tds_js_globals = {"wpRestNonce":"1d92f412c8","wpRestUrl":"https:\/\/golpershohor.com\/wp-json\/","permalinkStructure":"\/%year%\/%monthnum%\/%day%\/%postname%\/"};
/* ]]> */
</script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-content/plugins/td-subscription/assets/js/js_files_for_front.min.js?ver=1.4.4" id="tds_js_files_for_front-js"></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-content/plugins/td-cloud-library/assets/js/js_files_for_front.min.js?ver=ca46607f0f63147990c8ac1f35d750e1" id="tdb_js_files_for_front-js"></script>
<script defer type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-content/plugins/akismet/_inc/akismet-frontend.js?ver=1696695387" id="akismet-frontend-js"></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-content/plugins/td-composer/legacy/Newspaper/js/tdLoadingBox.js?ver=12.6" id="tdLoadingBox-js"></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-content/plugins/td-cloud-library/assets/js/tdbMenu.js?ver=ca46607f0f63147990c8ac1f35d750e1" id="tdbMenu-js"></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-content/plugins/td-composer/legacy/Newspaper/js/tdLoginMobile.js?ver=12.6" id="tdLoginMobile-js"></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-content/plugins/td-composer/legacy/Newspaper/js/tdAjaxSearch.js?ver=12.6" id="tdDatei18n-js"></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-content/plugins/td-composer/legacy/Newspaper/js/tdLogin.js?ver=12.6" id="tdLogin-js"></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-content/plugins/td-cloud-library/assets/js/tdbSearch.js?ver=ca46607f0f63147990c8ac1f35d750e1" id="tdbSearch-js"></script>
<script type="3946b4c98583e17aafee7bf2-text/javascript" src="https://golpershohor.com/wp-content/plugins/td-composer/legacy/Newspaper/js/tdInfiniteLoader.js?ver=12.6" id="tdInfiniteLoader-js"></script>

<script type="3946b4c98583e17aafee7bf2-text/javascript">
    

            
                /* global jQuery:{} */
                jQuery(document).ready( function () {

                    var tdbMenuItem = new tdbMenu.item();
                    tdbMenuItem.blockUid = 'tdi_1';
                    tdbMenuItem.jqueryObj = jQuery('.tdi_1');

	                
                    tdbMenuItem.isMegaMenuFull = true;

	                
	                
                    tdbMenuItem.megaMenuLoadType = '';

	                
                    tdbMenu.addItem(tdbMenuItem);

                });
            
            

            
                /* global jQuery:{} */
                jQuery(document).ready( function () {

                    var tdbMenuItem = new tdbMenu.item();
                    tdbMenuItem.blockUid = 'tdi_4';
                    tdbMenuItem.jqueryObj = jQuery('.tdi_4');

	                
                    tdbMenuItem.isMegaMenuFull = true;

	                
	                
                    tdbMenuItem.megaMenuLoadType = '';

	                
                    tdbMenu.addItem(tdbMenuItem);

                });
            
            

            
                jQuery().ready(function () {

                    var blockClass = '.tdi_21';

                    jQuery(blockClass + '.tdb-horiz-menu-singleline > .menu-item-has-children a').click(function (e) {
                        e.preventDefault();
                    })

                });
            
            

            
                /* global jQuery:{} */
                jQuery(document).ready( function () {

                    var tdbMenuItem = new tdbMenu.item();
                    tdbMenuItem.blockUid = 'tdi_40';
                    tdbMenuItem.jqueryObj = jQuery('.tdi_40');

	                
                    tdbMenuItem.isMegaMenuFull = true;

	                
	                
                    tdbMenuItem.megaMenuLoadType = '';

	                
                    tdbMenu.addItem(tdbMenuItem);

                });
            
            

        
            jQuery().ready(function () {

                var tdbSearchItem = new tdbSearch.item();

                //block unique ID
                tdbSearchItem.blockUid = 'tdi_43';
                tdbSearchItem.blockAtts = '{"inline":"yes","toggle_txt_pos":"after","form_align":"content-horiz-right","results_msg_align":"content-horiz-center","image_floated":"float_left","image_width":"30","image_size":"td_324x400","show_cat":"none","show_btn":"none","show_date":"","show_review":"","show_com":"none","show_excerpt":"none","show_author":"none","art_title":"0 0 2px 0","all_modules_space":"20","tdicon":"td-icon-magnifier-big-rounded","icon_size":"eyJhbGwiOiIyMCIsInBvcnRyYWl0IjoiMTgifQ==","tdc_css":"eyJhbGwiOnsiZGlzcGxheSI6IiJ9LCJwb3J0cmFpdCI6eyJtYXJnaW4tdG9wIjoiMSIsImRpc3BsYXkiOiIifSwicG9ydHJhaXRfbWF4X3dpZHRoIjoxMDE4LCJwb3J0cmFpdF9taW5fd2lkdGgiOjc2OH0=","modules_on_row":"eyJhbGwiOiI1MCUiLCJwb3J0cmFpdCI6IjUwJSIsImxhbmRzY2FwZSI6IjUwJSJ9","meta_info_horiz":"content-horiz-left","form_width":"600","input_border":"0 0 1px 0","modules_divider":"","form_padding":"eyJwb3J0cmFpdCI6IjIwcHggMjBweCAyMHB4IiwiYWxsIjoiMzBweCJ9","arrow_color":"#ffffff","btn_bg_h":"rgba(0,0,0,0)","btn_tdicon":"td-icon-menu-right","btn_icon_pos":"after","btn_icon_size":"7","btn_icon_space":"8","f_title_font_family":"","f_cat_font_family":"","f_cat_font_transform":"uppercase","f_title_font_weight":"","f_title_font_transform":"","f_title_font_size":"13","title_txt_hover":"#4db2ec","results_limit":"6","float_block":"yes","icon_color":"#000000","results_border":"0 0 1px 0","f_title_font_line_height":"1.4","btn_color":"#000000","btn_color_h":"#4db2ec","all_underline_color":"","results_msg_color_h":"#4db2ec","image_height":"100","meta_padding":"3px 0 0 16px","modules_gap":"20","mc1_tl":"12","show_form":"yes","f_meta_font_weight":"","h_effect":"","results_msg_padding":"10px 0","f_results_msg_font_style":"normal","video_icon":"24","modules_divider_color":"","modules_border_color":"","btn_padding":"0","form_border":"0","form_shadow_shadow_offset_vertical":"3","results_padding":"0 30px 30px","btn_bg":"rgba(0,0,0,0)","icon_padding":"eyJhbGwiOjIuNCwicG9ydHJhaXQiOiIyLjYifQ==","block_type":"tdb_header_search","post_type":"","disable_trigger":"","show_results":"yes","separator":"","disable_live_search":"","exclude_pages":"","exclude_posts":"","search_section_header":"","results_section_1_title":"","results_section_1_taxonomies":"","results_section_1_level":"","results_section_2_title":"","results_section_2_taxonomies":"","results_section_2_level":"","results_section_3_title":"","results_section_3_taxonomies":"","results_section_3_level":"","results_section_search_query_terms":"","results_section_search_query_terms_title":"","results_section_search_query_terms_taxonomies":"","sec_title_space":"","sec_title_color":"","tax_space":"","tax_title_color":"","tax_title_color_h":"","f_sec_title_font_header":"","f_sec_title_font_title":"Section title text","f_sec_title_font_settings":"","f_sec_title_font_family":"","f_sec_title_font_size":"","f_sec_title_font_line_height":"","f_sec_title_font_style":"","f_sec_title_font_weight":"","f_sec_title_font_transform":"","f_sec_title_font_spacing":"","f_sec_title_":"","f_tax_title_font_title":"Taxonomy title text","f_tax_title_font_settings":"","f_tax_title_font_family":"","f_tax_title_font_size":"","f_tax_title_font_line_height":"","f_tax_title_font_style":"","f_tax_title_font_weight":"","f_tax_title_font_transform":"","f_tax_title_font_spacing":"","f_tax_title_":"","toggle_txt":"","toggle_txt_align":"0","toggle_txt_space":"","toggle_horiz_align":"content-horiz-left","form_offset":"","form_offset_left":"","form_content_width":"","form_align_screen":"","input_placeholder":"","placeholder_travel":"0","input_padding":"","input_radius":"","btn_text":"Search","btn_icon_align":"0","btn_margin":"","btn_border":"","btn_radius":"","results_msg_border":"","mc1_title_tag":"","mc1_el":"","open_in_new_window":"","m_padding":"","modules_border_size":"","modules_border_style":"","image_alignment":"50","image_radius":"","hide_image":"","show_vid_t":"block","vid_t_margin":"","vid_t_padding":"","vid_t_color":"","vid_t_bg_color":"","f_vid_time_font_header":"","f_vid_time_font_title":"Video duration text","f_vid_time_font_settings":"","f_vid_time_font_family":"","f_vid_time_font_size":"","f_vid_time_font_line_height":"","f_vid_time_font_style":"","f_vid_time_font_weight":"","f_vid_time_font_transform":"","f_vid_time_font_spacing":"","f_vid_time_":"","excl_show":"inline-block","excl_txt":"","excl_margin":"","excl_padd":"","all_excl_border":"","all_excl_border_style":"solid","excl_radius":"","excl_color":"","excl_color_h":"","excl_bg":"","excl_bg_h":"","all_excl_border_color":"","excl_border_color_h":"","f_excl_font_header":"","f_excl_font_title":"Label text","f_excl_font_settings":"","f_excl_font_family":"","f_excl_font_size":"","f_excl_font_line_height":"","f_excl_font_style":"","f_excl_font_weight":"","f_excl_font_transform":"","f_excl_font_spacing":"","f_excl_":"","meta_info_align":"","meta_width":"","meta_margin":"","meta_info_border_size":"","meta_info_border_style":"","meta_info_border_color":"#eaeaea","art_btn":"","modules_category":"","modules_category_margin":"","modules_category_padding":"","modules_cat_border":"","modules_category_radius":"0","modules_extra_cat":"","author_photo":"","author_photo_size":"","author_photo_space":"","author_photo_radius":"","show_modified_date":"","time_ago":"","time_ago_add_txt":"ago","time_ago_txt_pos":"","review_space":"","review_size":"2.5","review_distance":"","art_excerpt":"","excerpt_col":"1","excerpt_gap":"","excerpt_middle":"","btn_title":"","btn_border_width":"","form_general_bg":"","icon_color_h":"","toggle_txt_color":"","toggle_txt_color_h":"","f_toggle_txt_font_header":"","f_toggle_txt_font_title":"Text","f_toggle_txt_font_settings":"","f_toggle_txt_font_family":"","f_toggle_txt_font_size":"","f_toggle_txt_font_line_height":"","f_toggle_txt_font_style":"","f_toggle_txt_font_weight":"","f_toggle_txt_font_transform":"","f_toggle_txt_font_spacing":"","f_toggle_txt_":"","form_bg":"","form_border_color":"","form_shadow_shadow_header":"","form_shadow_shadow_title":"Shadow","form_shadow_shadow_size":"","form_shadow_shadow_offset_horizontal":"","form_shadow_shadow_spread":"","form_shadow_shadow_color":"","input_color":"","placeholder_color":"","placeholder_opacity":"0","input_bg":"","input_border_color":"","input_shadow_shadow_header":"","input_shadow_shadow_title":"Input shadow","input_shadow_shadow_size":"","input_shadow_shadow_offset_horizontal":"","input_shadow_shadow_offset_vertical":"","input_shadow_shadow_spread":"","input_shadow_shadow_color":"","btn_icon_color":"","btn_icon_color_h":"","btn_border_color":"","btn_border_color_h":"","btn_shadow_shadow_header":"","btn_shadow_shadow_title":"Button shadow","btn_shadow_shadow_size":"","btn_shadow_shadow_offset_horizontal":"","btn_shadow_shadow_offset_vertical":"","btn_shadow_shadow_spread":"","btn_shadow_shadow_color":"","f_input_font_header":"","f_input_font_title":"Input text","f_input_font_settings":"","f_input_font_family":"","f_input_font_size":"","f_input_font_line_height":"","f_input_font_style":"","f_input_font_weight":"","f_input_font_transform":"","f_input_font_spacing":"","f_input_":"","f_placeholder_font_title":"Placeholder text","f_placeholder_font_settings":"","f_placeholder_font_family":"","f_placeholder_font_size":"","f_placeholder_font_line_height":"","f_placeholder_font_style":"","f_placeholder_font_weight":"","f_placeholder_font_transform":"","f_placeholder_font_spacing":"","f_placeholder_":"","f_btn_font_title":"Button text","f_btn_font_settings":"","f_btn_font_family":"","f_btn_font_size":"","f_btn_font_line_height":"","f_btn_font_style":"","f_btn_font_weight":"","f_btn_font_transform":"","f_btn_font_spacing":"","f_btn_":"","results_bg":"","results_border_color":"","results_msg_color":"","results_msg_bg":"","results_msg_border_color":"","f_results_msg_font_header":"","f_results_msg_font_title":"Text","f_results_msg_font_settings":"","f_results_msg_font_family":"","f_results_msg_font_size":"","f_results_msg_font_line_height":"","f_results_msg_font_weight":"","f_results_msg_font_transform":"","f_results_msg_font_spacing":"","f_results_msg_":"","m_bg":"","color_overlay":"","shadow_module_shadow_header":"","shadow_module_shadow_title":"Module Shadow","shadow_module_shadow_size":"","shadow_module_shadow_offset_horizontal":"","shadow_module_shadow_offset_vertical":"","shadow_module_shadow_spread":"","shadow_module_shadow_color":"","title_txt":"","all_underline_height":"","cat_bg":"","cat_bg_hover":"","cat_txt":"","cat_txt_hover":"","cat_border":"","cat_border_hover":"","meta_bg":"","author_txt":"","author_txt_hover":"","date_txt":"","ex_txt":"","com_bg":"","com_txt":"","rev_txt":"","shadow_meta_shadow_header":"","shadow_meta_shadow_title":"Meta info shadow","shadow_meta_shadow_size":"","shadow_meta_shadow_offset_horizontal":"","shadow_meta_shadow_offset_vertical":"","shadow_meta_shadow_spread":"","shadow_meta_shadow_color":"","btn_bg_hover":"","btn_txt":"","btn_txt_hover":"","btn_border_hover":"","f_title_font_header":"","f_title_font_title":"Article title","f_title_font_settings":"","f_title_font_style":"","f_title_font_spacing":"","f_title_":"","f_cat_font_title":"Article category tag","f_cat_font_settings":"","f_cat_font_size":"","f_cat_font_line_height":"","f_cat_font_style":"","f_cat_font_weight":"","f_cat_font_spacing":"","f_cat_":"","f_meta_font_title":"Article meta info","f_meta_font_settings":"","f_meta_font_family":"","f_meta_font_size":"","f_meta_font_line_height":"","f_meta_font_style":"","f_meta_font_transform":"","f_meta_font_spacing":"","f_meta_":"","f_ex_font_title":"Article excerpt","f_ex_font_settings":"","f_ex_font_family":"","f_ex_font_size":"","f_ex_font_line_height":"","f_ex_font_style":"","f_ex_font_weight":"","f_ex_font_transform":"","f_ex_font_spacing":"","f_ex_":"","el_class":"","block_template_id":"","td_column_number":3,"header_color":"","ajax_pagination_infinite_stop":"","offset":"","limit":"5","td_ajax_preloading":"","td_ajax_filter_type":"","td_filter_default_txt":"","td_ajax_filter_ids":"","color_preset":"","ajax_pagination":"","ajax_pagination_next_prev_swipe":"","border_top":"","css":"","class":"tdi_43","tdc_css_class":"tdi_43","tdc_css_class_style":"tdi_43_rand_style"}';
                tdbSearchItem.jqueryObj = jQuery('.tdi_43');
                tdbSearchItem._openSearchFormClass = 'tdb-drop-down-search-open';
                tdbSearchItem._resultsLimit = '6';

                
	            
                
                tdbSearch.addItem( tdbSearchItem );

            });
        
        

var td_res_context_registered_atts=["style_general_mobile_menu","style_general_header_align","style_general_header_logo","style_general_mobile_search","style_general_header_user","style_general_mobile_horiz_menu","style_general_socials","style_general_header_menu","style_general_module_header","style_general_header_search","style_general_header_search_trigger_enabled","style_general_popular_categories"];
</script>
<script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="3946b4c98583e17aafee7bf2-|49" defer></script></body>
</html>
`;

const cleanHTML = sanitizeHTML(html);

const file = fs.createWriteStream(process.cwd() + '/sanitizeHTML.html');
await file.write(cleanHTML);
console.log('test pass!');