var m = document.querySelectorAll('.PaBnr.eFVJg');
var i=0;
setInterval (function() {
    if (i>=m.length) {
        clearInterval();
    }
    var event = new MouseEvent('mouseover', {
    'view': window,
    'bubbles': true,
    'cancelable': true
    });
    m[i].dispatchEvent(event);
    m[i].addEventListener('mouseover', function() {
    console.log('triggered');
    });
    let d=document.querySelector('.dCJp8.afkep');
    d.click();
    console.log('clicked');
    let u =document.querySelector('._7UhW9.xLCgt.qyrsm.h_zdq.uL8Hv.M8ipN.T0kll');
    u.click();
    console.log('u');
    let c=document.querySelector('.aOOlW.-Cab_');
    c.click();
    console.log('confirmed');
    i++;
}, 3200);
