let items = document.getElementsByTagName("li"); // Все элементы списка

for(let i = 0; i < items.length; i++){
    items[i].addEventListener("click", function(){ // Обработка нажатия на элемент списка
        let items_body = document.getElementsByClassName("item__body");
        if(items[i].classList.contains("active")){
            items[i].classList.remove("active");
            items_body[i].classList.add("hide");
        }
        else{
            items[i].classList.add("active");
            items_body[i].classList.remove("hide");
        }
    })
}