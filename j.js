var i = 0;
var SlideImage = ["images/1.jpg","images/2.jpg","images/3.jpg"];

var slideShow = function () {
    document.slideshow.src = SlideImage[i];
    if( i<SlideImage.length-1) {
        i++
    } else {
        i = 0 ;
    }
    setTimeout("slideShow()",1000);
}
slideShow();