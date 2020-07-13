var m = document.querySelectorAll('.PaBnr.eFVJg');
i=0;
setInterval (function() {
    if (i>=m.length) 
        clearInterval();
    setTimeout(function() {
    var event = new MouseEvent('mouseover', {
    'view': window,
    'bubbles': true,
    'cancelable': true
    });
    m[i].dispatchEvent(event);
    m[i].addEventListener('mouseover', function() {
    console.log('triggered');
    });
    }, 750)
    setTimeout (function() {
    let d=document.querySelector('.dCJp8.afkep');
    d.click();
    console.log('clicked');
    }, 1500)
    setTimeout (function() {
    let u =document.querySelector('._7UhW9.xLCgt.qyrsm.h_zdq.uL8Hv.M8ipN.T0kll');
    u.click();
    console.log('u');
    }, 2250)
    setTimeout (function() {
    let c=document.querySelector('.aOOlW.-Cab_');
    c.click();
    console.log('confirmed');
    }, 3000)
    i++;
}, 3000);
