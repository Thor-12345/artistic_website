
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


