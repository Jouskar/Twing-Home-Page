const categoryList = document.getElementById('list_categories');

categoryList.addEventListener('click', function(e){
    let itemTitle = e.target.getAttribute('title');

    document.querySelectorAll('.li_choices').forEach(function(element) {
        if (itemTitle !== element.getAttribute('title')){
            element.style.visibility = 'hidden';
        }

        else{
            element.style.visibility = 'visible';
        }
    });



    e.preventDefault();
});

let a = 0;