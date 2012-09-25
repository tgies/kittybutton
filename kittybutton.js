window.kittybutton = function () {
    // kittybutton.js
    // version 2
    // ---------
    // (C) 2011 tony gies <tgies@tgies.net>
    // the copyright holder has released this work into the public domain;
    // any entity is granted the right to use this work for any purpose,
    // without any conditions, unless such conditions are required by law.
    // this work is distributed "as is" without any warranty;
    // without even any warranty of mercantability or usefulness.
    // no rights reserved
    // attribution is appreciated if reproduced in entirety


    function doIt() {
        window.kbjQ = jQuery.noConflict();
        var imgs = kbjQ('img:not(.youreakitty)');
	var elimg = imgs.eq(Math.floor(Math.random() * imgs.length))
        var imgwidth = elimg.width();
        var imgheight = elimg.height();
        var greykitty = (Math.floor(Math.random() * 2) ? 'g/' : '');
        elimg.addClass('youreakitty');
        elimg.attr('src', 'http://placekitten.com/' + greykitty + imgwidth + '/' + imgheight);
    }

    if (typeof kbjQ == 'undefined') {
        script = document.createElement('script');
        script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
        script.onload = doIt;
        document.body.appendChild(script);
    } else {
        doIt();
    }
    // exeunt
}
