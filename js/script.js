jQuery(function(f){
    var element = f('.some-cherry');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](700);           
    });
});
jQuery(function(f){
    var element = f('.full-cherry');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 700 ? 'In': 'Out')](900);           
    });
});