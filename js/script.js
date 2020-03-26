
document.querySelector('#searchText').addEventListener('click', function(){
    document.querySelector('#searchText').classList.add('hidden');
    document.querySelector('#searchInput').classList.remove('hidden');
})

document.querySelector('.fa-search').addEventListener('click', function(){
    document.querySelector('#searchText').classList.add('hidden');
    document.querySelector('#searchInput').classList.remove('hidden');
})




document.querySelector('main').addEventListener('click', function(){
    document.querySelector('#searchText').classList.remove('hidden');
    document.querySelector('#searchInput').classList.add('hidden');
    document.querySelector('#searchInput').classList.add('animu');
})




// WORKS GALLERY

let lightbox = document.querySelector('#lightbox-wrapper');
let images = document.querySelectorAll('.lightboxImages');

window.onload = function(){
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function(){
            lightbox.classList.remove('hidden');
            document.querySelector('#lightboxImg').src = images[i].src;
            });

            let index = 0
            
            document.querySelector('#prev').addEventListener('click', function(){
                index--;
                if (index < 0) {
                    index = images.length - 1;
                }
                document.querySelector('#lightboxImg').src = images[index].src;
            })

            document.querySelector('#next').addEventListener('click', function(){
                index++;
                if (index > images.length - 1) {
                    index = 0;
                }
                document.querySelector('#lightboxImg').src = images[index].src;
            })

            lightbox.addEventListener('click', function(){
                lightbox.classList.add('hidden'); 
            })
    }
}

document.querySelector('#lightboxDiv').addEventListener('click', function(){
    event.stopPropagation()
})




