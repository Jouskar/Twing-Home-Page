const categoryList = document.getElementById('section_categories');
const searchInput = document.getElementById('searchInput');

categoryList.addEventListener('click', function(e){
    let itemTitle = e.target.getAttribute('data-title');

    document.querySelectorAll('.li_choices').forEach(function(element) {
        if (itemTitle !== element.getAttribute('data-title')){
            element.style.visibility = 'hidden';
            element.style.order = String(0);
        }

        else{
            element.style.visibility = 'visible';
            element.style.order = String(-1);
        }
    });

    e.preventDefault();
});

searchInput.addEventListener('search', function(e){
    let itemName = searchInput.value.toLowerCase();

    if (itemName.length >= 2){

        document.querySelectorAll('.li_choices').forEach(function(element) {
            if (element.getAttribute('data-name').indexOf(itemName) == -1){
                element.style.visibility = 'hidden';
                element.style.order = String(0);
            }
    
            else{
                element.style.visibility = 'visible';
                element.style.order = String(-1);
            }
        });}

    else{
        window.alert("Girdiğiniz karakter sayısı 2 veya daha fazla olmalıdır.");
    }

});
let a = 0;