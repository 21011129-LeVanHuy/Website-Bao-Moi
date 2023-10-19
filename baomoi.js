//  Thanh 3 gạch
 
 document.addEventListener("DOMContentLoaded", function() {
 const subnavIcon = document.querySelector('.subnav-icon');
 const ndThanh3gach = document.querySelector('.nd-thanh3gach');

 subnavIcon.addEventListener('click', function() {
 if (ndThanh3gach.style.display === 'none') {
 ndThanh3gach.style.display = 'block';
 } else {
 ndThanh3gach.style.display = 'none';
 }
});
});

// Slide show
var owl = $('.owl-carousel');
        owl.owlCarousel({
            items: 4,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 500,
            autoplayHoverPause: true,
            dots: false,
        });
        $('.play').on('click', function () {
            owl.trigger('play.owl.autoplay', [500])
        })
        $('.stop').on('click', function () {
            owl.trigger('stop.owl.autoplay')
        })


// 

const search=() =>{
    const searchbox = document.getElementsById("search-item").value.toUpperCase();
    const storeitems = document.getElementsById("hot");
    const product = document.querySelectorAll("hot-main-title");
    const pname = storeitems.getElementsByTagName("a");


    for(var i=0;i<pname.length;i++){
        let math = product[i].getElementsByTagName('a')[0];

        if(math){
            let textvalue= math.textContent || math.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox) >-1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";

            }
        }
    }



}








