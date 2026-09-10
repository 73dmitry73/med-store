
document.addEventListener("DOMContentLoaded", function () {
    
   
    const orderForm = document.querySelector("#orderForm");
    
    if (orderForm) {
        orderForm.addEventListener("submit", function (event) {
           
            event.preventDefault(); 
            
           
            const nameInput = document.querySelector("#userName");
            const phoneInput = document.querySelector("#userPhone");
            const countInput = document.querySelector("#itemCount");
            
            let isValid = true;
            let errorMessage = "";
            
            // Простая валидация на обязательное заполнение
            if (nameInput.value.trim() === "") {
                isValid = false;
                errorMessage += "Пожалуйста, заполните поле ФИО.\n";
            }
            
          
            const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
            if (!phoneRegex.test(phoneInput.value.trim())) {
                isValid = false;
                errorMessage += "Некорректный формат номера телефона.\n";
            }
          
            if (parseInt(countInput.value) < 1 || isNaN(countInput.value)) {
                isValid = false;
                errorMessage += "Количество товаров должно быть не менее 1.\n";
            }
            
          
            console.log("--- Данные формы заказа ---");
            console.log("ФИО / Клиника:", nameInput.value);
            console.log("Телефон:", phoneInput.value);
            console.log("Количество:", countInput.value);
            console.log("Статус валидации:", isValid ? "Успешно" : "Ошибка");
            
            
            if (isValid) {
                document.querySelector("#modalTitle").innerText = "Успешная отправка";
                document.querySelector("#modalBody").innerText = "Данные формы успешно обработаны и отправлены менеджеру!";
                
                orderForm.reset();
            } else {
                document.querySelector("#modalTitle").innerText = "Ошибка валидации";
                document.querySelector("#modalBody").innerText = errorMessage;
            }
            
         
            $('#resultModal').modal('show');
        });
    }
    
 
    const searchInput = document.querySelector("#catalogSearch");
    
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const filterValue = searchInput.value.toLowerCase().trim();
           
            const productCards = document.querySelectorAll(".product-item");
            
            productCards.forEach(function (card) {
              
                const titleText = card.querySelector(".card-title").innerText.toLowerCase();
                
             
                if (titleText.includes(filterValue)) {
                    card.style.display = ""; // Показываем (возвращаем стандартный grid-стиль)
                } else {
                    card.style.display = "none"; // Скрываем элемент с экрана (Требование задания)
                }
            });
        });
    }
});
