// ЕЛЕМЕНТИ DOM
// Додавання на сторінку: 
form.appendChild(div); document.body.insertBefore(div, form);
// Видалення: 
document.body.removeChild(form);


// ПОДІЇ
// Додавання:
 el.addEventListener('click', function() {});
// Видалення:
 el.removeEventListener('click',  function() {});


// ТАЙМЕРИ
// Додавання:
var timerId = setTimeout(function(){...}, 300);
var intervalId = setInterval(function(){...}, 1000);
// Видалення:
clearTimeout(timerId);
clearInterval(intervalId);


//Url І ІСТОРІЯ
location.href
location.hash
location.origin
location.search
location.assign()
location.reload()

history.pushState()
history.replaceState()
history.back()
history.forward()
history.go()


// LOCALSTORAGE
// Записати:
	var data = {
	    a: 1,
	    b: 'text'
	};
	localStorage.setItem("data", JSON.stringify(data));
// {"a":1,"b":"text"}
// Взяти
	var data = localStorage.getItem('data');
// {"a":1,"b":"text"}
	console.log(JSON.parse(data)); // Object
	console.log(localStorage.data);// ???
// Видалити
	localStorage.removeItem('data');


// HTTP
// Методи: GET, POST

// Коди відповідей
// 1xx - информационные
// 2xx - успешные
// 3xx - перенаправления
// 4xx - ошибки клиента
// 5xx - ошибки сервера

// XMLHttpRequest
// Приклад
var xhr = new XMLHttpRequest();
xhr.open('GET', 'to/url.html', false);
xhr.send();
console.log(xhr.status);

// readyState
// 0 - open не вызывался
// 1 - open вызвался
// 2 - send вызвался
// 3 - получение данных
// 4 - данные получены

// МАСИВИ. МЕТОДИ
- forEach. Перебирає елементи як for

          var arr = ['a', 'b', 'c'];
          arr.forEach(function(element) {
              console.log(element);
          });

// PROTOTYPE
// prototype об'єкт який містить у собі методи та властивості які будуть доступні для всіх нащадків
// __proto__ посилання на prototype
rabbit.__proto__ = animal; //енімал - прототип ребіта. Ребіт наслідує всі властивовсі енімала
rabbit .hasOwnProperty(prop) //перевіряє чи є властивість проп в ребіт

// "use strict"
// Переводить інтерпретатор в строгий режим. Є ряд обмежень. Основне не можна оголошувати змінні без var.

// ES6
// - блочна область видимості. Змінні let і const видно тільки в {}. var по старому.
// - const. Змінна яку не можна переприсвоювати
// - мертва зона.  let і const оголошені внизу, зверху не буде видно. Навідміну від var.
// - параметри фції по замовчуванню.
		function getGreetUser(name = ''user, age = 13) {return name};
// - стрілочні фції. 
		let foo = (x,y) => x + y;
// - деструктуруюче присвоювання. 
		var [a, b, c] = [1, 2, 3];    a === 1;
// - шаблонні строки


// КЛАСИ
// синтаксичний цукор над звичайним прототипним наслідуванням. Тобто всередині всерівно працює на прототипах

// МОДУЛІ
// Дозволяє інкапсулювати код і повторно використовувати

// MVC
// Model -  бізнес логіка продутку. Незалежна від інших. Не знає про інших
// View - відображає дані від моделі. Не впливає на неї
// Controller - вибирає що має бути зараз представлено. Впливає на модель