var l = document.querySelectorAll('.PaBnr.eFVJg');
count=0;
setInterval (function() {
    if (count>=l.length) 
        clearInterval();
    setTimeout(function() {
    var m = document.querySelector('.PaBnr.eFVJg'); 
    var event = new MouseEvent('mouseover', {
    'view': window,
    'bubbles': true,
    'cancelable': true
    });
    m.dispatchEvent(event);
    m.addEventListener('mouseover', function() {
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
    count++;
}, 3000);
