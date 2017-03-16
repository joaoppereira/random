// ==UserScript==
// @name         Remove Anti Ad-Blocker for MensHealth
// @namespace    http://joaopedropereira.com/
// @version      0.1
// @description  Remove Anti Ad-Blocker for MensHealth, probabily working for other sites with Zeus AdBlocker
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @author       joaoppereira
// @match        http://www.menshealth.com/*
// @grant        none
// ==/UserScript==

waitForKeyElements ("#block-zeus-newsletter-ad-block-signup", removeBlocker);

function removeBlocker() {
    document.getElementById('block-zeus-newsletter-ad-block-signup').remove();
    
    var list = document.getElementsByClassName('ad-blocker-custom-blur');
    while (list.length > 0) {
        for(var i=0; i < list.length; i++) {
            list[i].className = list[i].classList.remove('ad-blocker-custom-blur');
        }
        list = document.getElementsByClassName('ad-blocker-custom-blur');
    }
    
    document.getElementById('block-zeus-newsletter-ad-block-signup').remove();
}
