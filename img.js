 // lets work on the image slide
 var i = 0; //start point
 var images = [];
 var time = 3000;

 // image list
 images[0] = './sample.jpg';
 images[1] = './sample2.jpg';
 images[2] = './sample3.jpg';
 images[3] = './sample4.jpg';

 // fxn that changes the images

 function changeImg(){
     document.slide.src = images[i];

     if(i < images.length - 1){
         i++;
     } else {
         i = 0;
     }

     setTimeout("changeImg()", time)
 }
 window.onload = changeImg;