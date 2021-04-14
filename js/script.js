// event pada saat link di klik 
$('.page-scroll').on('click', function(e) {
    
        // ambil isi href
        var tujuan = $(this).attr('href');
        // tangkap tujuan ybs
        var elemenTujuan = $(tujuan);
    
        // pindahkan
        $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 50
        },1250, 'easeInOutExpo');

        e.preventDefault();
    
   });


//    Paralax
// about
$(window).on('load', function() {
        $('.pKiri').addClass('pMuncul');
        $('.pKanan').addClass('pMuncul');
})


$(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
       $('.jumbotron img').css({
        'transform' : 'translate(0, '+ wScroll/4 +'%)'
       });

       $('.jumbotron h1').css({
        'transform' : 'translate(0, '+ wScroll/2 +'%)'
       });

       $('.jumbotron p').css({
        'transform' : 'translate(0, '+ wScroll/1.2 +'%)'
       });

//  Portofolio
        
       if(wScroll > $('.portofolio').offset().top - 250 ) {

        $('.portofolio .thumbnail').each(function(i) {
                setTimeout(function() {
                   $('.portofolio .thumbnail').eq(i).addClass('muncul');
                }, 300 * (i+1));
        });
         
       }

});


   
   
