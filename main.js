let searchBox = document.querySelector('#search-box');
let images =  document.querySelectorAll('.image'); 

searchBox.oninput = () => {
    let value = searchBox.value.toLowerCase(); 
    images.forEach(imageDiv => {
        let title = imageDiv.getAttribute('data-title').toLowerCase(); 

    
        if (title.includes(value) || value === '') {
            imageDiv.style.display = 'block'; 
        } else {
            imageDiv.style.display = 'none'; 
        }
    });
};
