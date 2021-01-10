$(function (p) {
    $('[data-toggle="tooltip"]').tooltip();
})


const sr =ScrollReveal({
    duration: 2000,
});

sr.reveal('h1,h2,h3,h5',{
    origin: 'bottom',
    distance: '170px',
});

sr.reveal('.navbar',{
    origin: 'top',
    distance: '170px',
    delay:300,
});
sr.reveal('.navbar-nav',{
    origin: 'left',
    distance: '250px',
    delay:900,
});


sr.reveal('.first-moov ',{
    origin: 'top',
    distance: '170px',
    delay:750,
});

sr.reveal('.second-moov',{
    origin: 'bottom',
    distance: '170px',
    delay:790,
});

sr.reveal('.p-dev_web',{
    origin: 'left',
    distance: '200px',
    delay:900,
});

sr.reveal('.p-dev_web-2',{
    origin: 'right',
    distance: '200px',
    delay:900,
});

sr.reveal('.infofoot',{
    origin: 'bottom',
    distance: '150px',
    delay:750,
});

sr.reveal('.desc',{
    origin:  'right',
    delay:790,
    distance: '250px',
});

sr.reveal('.card',{
  interval:500,

});

sr.reveal('.unique',{
    origin:'top',
    delay:500,
});

sr.reveal('.pUnique',{
    origin:'top',
    delay:700,

});

sr.reveal('.feature',{
    interval:500,

});


sr.reveal('.feature_base',{
    origin:'bottom',
    interval:400,
});

sr.reveal('.services',{
    origin:'bottom',
   
});

sr.reveal('footer',{
    origin:'bottom',
    delay:70,
    distance: '250px',
});

sr.reveal('.img-responsive ',{
    origin:'bottom',
    delay:70,
    distance: '150px',
});

