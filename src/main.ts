//! 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

// let x = prompt("Enter your name: ")
// alert("Your name: " + x)

//! 2. Запросите у пользователя год его рождения, посчитайте,
//! сколько ему лет и выведите результат. Текущий год укажите
//! в коде как константу.

// const year = 2025
// let user_old = +prompt("Enter your year of birth: ")
// alert("Your are " + (year - user_old) + " years old")

//! 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

// let d = +prompt("Enter the of square side: ")
// let P = d*4
// alert("square P = " + P)

//! 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.

// let r = +prompt("Enter the radius circle: ")
// let S = Math.PI*r**2
// alert("circle S = " + S)

//! 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он
//! хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

// let s = +prompt("Введите расстояние между городами (в км): ")
// let t = +prompt("За сколько часов вы хотите преодолеть это расстояние?: ")
// let u = s/t
// alert("Чтобы преодолеть расстояние " + s + "км" + " за " + t + " часов, вам необходимо двигаться со скоростью: " + u + "км/ч")

//! 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. 
//! Курс валюты храните в константе.

// const usd_eur = 0.95
// let user_money = +prompt("Сколько $ в € вы хотите обменять?: ")
// alert("Вы получите: " + user_money*usd_eur + " евро")

//! 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько 
//! файлов размером в 820 Мб помещается на флешку.

// let user_usb = Number(prompt("Укажите объем флешки в Гб: ")) //! Не менял тип данных - отработало корректно
// let user_file = parseInt(prompt("Укажите размер файла в Мб")) //! Не менял тип данных - отработало корректно
// let usb = user_usb*1024
// alert(parseInt(usb/user_file) + " файлов размером в " + user_file + "Мб поместятся на флешку объемом в " + user_usb + "Гб")

//! 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит 
//! сколько шоколадок может купить пользователь и сколько сдачи у него останется.

// let user_money = prompt("Введите количество денежных средств в вашем кошелье (в рублях): ");
// let price_chocolate = prompt("Введите цену одной шоколадки, которую вы желаете купить: ");
// let sale_choco = parseInt(user_money/price_chocolate);
// let money_after = user_money - sale_choco * price_chocolate;
// alert("На сумму: " + user_money + " рублей вы сможете купить - " + sale_choco + " шоколадок. При этом у вас останется: " + money_after + " рублей");


// let testId = document.querySelector('#JS_urok1')
// testId.style.color = 'red'


//! Urok 2 

//! 1. Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран

// let num_1 = prompt("Введите число, которое нужно возвести во 2-ую степень: ");
// alert("Результат: " + (num_1**2));
//! 2. Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.

// let num_1 = +prompt("Введите первое число: ");
// let num_2 = +prompt("Введите второе число: ");
// let average = (num_1 + num_2) / 2;
// alert("Среднее арифмитическое числа " + num_1 + " и " + num_2 + " = " + average);

//! 3. Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

// let side_square = prompt("Введите длинну одной стороны квадрата: ");
// alert("Площадь квадрата равна: " + (side_square*4));

//! 4. Реализуйте конвертор из километров в мили (пользователь вводит километры, программа 
//! выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу

// let kilometer = prompt("Введите количество километров: ")
// const mili = kilometer * 0.621371
// alert(kilometer + "км = " + mili + "миль")

//! 5. Реализуйте калькулятор. Пользователь вводит два числа, а программа а выводит 
//! результаты действий + - * / между этими числами.

// let num_1 = Number(prompt("Введите первое число: "));
// let num_2 = Number(prompt("Введите первое число: "));
// let result = null;
// let operator = prompt("Выберите действие: (+; -; *; /)");

// if (operator == "+") {
//     alert("Ваше число: " + (result = num_1 + num_2));
// }

// if (operator == "-") {
//     alert("Ваше число: " + (result = num_1 - num_2));

// }

// if (operator == "*") {
//     alert("Ваше число: " + (result = num_1 * num_2));
// }

// if (operator == "/") {
//     alert("Ваше число: " + (result = num_1 / num_2));
// }

//! 6. Пользователь вводит значения a и b для формулы a * x + b = 0,
//! а программа считает и выводит значение x.

// let a = +prompt("Чтобы найти значение 'x' в уравнении: a*x+b=0 сначала введите значение 'a': ")
// let b = +prompt("Теперь введите значение 'b': ")
// let x = -b / a
// alert("'x' = " + x)

//! 7. Запросите у пользователя текущее время (часы и минуты) и выведите, 
//! сколько часов и минут осталось до следующего дня.

// let hours = Number(prompt("Введите часы: "))
// let minutes = Number(prompt("Введите минуты: "))
// alert("До следующего дня осталось: " + (23 - hours) + (" часа и ") + (60 - minutes) + " минут")


//! Urok 3 dz 1

//! 1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), 
//! подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

// let user_age = Number(prompt("Укажите возраст человека: "))
// if(user_age >= 1 && user_age <= 11){
//     alert("Это возраст ребенка!")
// }

// else if(user_age >= 12 && user_age <= 17){
//     alert("Это возраст несовершеннолетнего подростка")
// }

// else if(user_age >= 18 && user_age <= 60){
//     alert("Это возраст полноценной личности")
// }

// else if(user_age >= 61 && user_age <= 100){
//     alert("Это пенсионный возраст")
// }

// else (alert("Введите корректный возраст!!!"))

//! 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, 
//! который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

// let symbol = prompt("Укажите цифру от (0 до 9), чтобы узнать какой под ней символ находится на клавиатуре: ")
// switch (symbol) {
//     case "0":
//         alert("Под цифрой: " + symbol + " находится символ: ')'")
//         break;

//     case "1":
//         alert("Под цифрой: " + symbol + " находится символ: '!'")
//         break;

//     case "2":
//         alert("Под цифрой: " + symbol + " находится символ: '@'")
//         break;

//     case "3":
//         alert("Под цифрой: " + symbol + " находится символ: '#'")
//         break;

//     case "4":
//         alert("Под цифрой: " + symbol + " находится символ: '$'")
//         break;

//     case "5":
//         alert("Под цифрой: " + symbol + " находится символ: '%'")
//         break;

//     case "6":
//         alert("Под цифрой: " + symbol + " находится символ: '^'")
//         break;

//     case "7":
//         alert("Под цифрой: " + symbol + " находится символ: '&'")
//         break;

//     case "8":
//         alert("Под цифрой: " + symbol + " находится символ: '*'")
//         break;

//     case "9":
//         alert("Под цифрой: " + symbol + " находится символ: '('")
//         break;

//     default:
//         alert("Что-то не так! Введите цифру от 0 до 9!!! Чтобы повторить, перезагрузите страницу!")
//         break;
// }

//! 4. Запросить у пользователя год и проверить, високосный он или нет. 
//! Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

// let year = Number(prompt("Введите год, чтобы узнать високонсый он или нет: "))
// if(year <= 0){
//     alert("Введите корректный год!!!")
// }

// else if(year%400==0){
//     alert("Год високосный")
// }

// else if(year%4==0){
//     alert("Год високосный")
// }

// else if(year%100!=0){
//     alert("Год не високосный")
// }

// else(alert("Введите корректный год!!!"))

//! 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую 
//! валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.

// let userValue1 = prompt("Введите валюту, которую хотите обменять ' RUB; USD; EUR; UAH; AZN ': ")
// let userValue2 = prompt("Введите валюту, которую хотите получить ' RUB; USD; EUR; UAH; AZN ': ")
// let user_money

// // От рубля к другим валютам
// if (userValue1 == "RUB" || userValue1 == "rub") {
//     user_money = prompt("Сколько рублей у вас есть?: ")
//     if (userValue2 == "USD" || userValue2 == "usd"){
//         alert("С суммы: " + user_money + " рублей, вы получите: " + (user_money / 90) + " долларов")
//     }
//     else if (userValue2 == "EUR" || userValue2 == "eur"){
//         alert("С суммы: " + user_money + " рублей, вы получите: " + (user_money / 100) + " евро")
//     }
//     else if (userValue2 == "UAH" || userValue2 == "uah"){
//         alert("С суммы: " + user_money + " рублей, вы получите: " + (user_money / 2) + " гривен")
//     }
//     else if (userValue2 == "AZN" || userValue2 == "azn"){
//         alert("С суммы: " + user_money + " рублей, вы получите: " + (user_money / 50) + " манат")
//     }
//     else if(userValue1 == userValue2){
//         alert("Вы не можете обменять одну и ту же валюту!!!")
//     }
//     else(alert("Введите ВТОРУЮ валюту корректно и на английском языке!!!"))
// }

// // От доллара к другим валютам
// else if(userValue1 == "USD" || userValue1 == "usd"){
//     user_money = prompt("Сколько долларов у вас есть?: ")
//     if (userValue2 == "RUB" || userValue2 == "rub"){
//         alert("С суммы: " + user_money + " долларов, вы получите: " + (user_money * 90) + " рублей")
//     }
//     else if (userValue2 == "EUR" || userValue2 == "eur"){
//         alert("С суммы: " + user_money + " долларов, вы получите: " + (user_money * 0.9) + " евро")
//     }
//     else if (userValue2 == "UAH" || userValue2 == "uah"){
//         alert("С суммы: " + user_money + " долларов, вы получите: " + (user_money * 40) + " гривен")
//     }
//     else if (userValue2 == "AZN" || userValue2 == "azn"){
//         alert("С суммы: " + user_money + " долларов, вы получите: " + (user_money * 1.7) + " манат")
//     }
//     else if(userValue1 == userValue2){
//         alert("Вы не можете обменять одну и ту же валюту!!!")
//     }
//     else(alert("Введите ВТОРУЮ валюту корректно и на английском языке!!!"))
// }

// // От евро к другим валютам
// else if(userValue1 == "EUR" || userValue1 == "eur"){
//     user_money = prompt("Сколько евро у вас есть?: ")
//     if (userValue2 == "RUB" || userValue2 == "rub"){
//         alert("С суммы: " + user_money + " евро, вы получите: " + (user_money * 95) + " рублей")
//     }
//     else if (userValue2 == "USD" || userValue2 == "usd"){
//         alert("С суммы: " + user_money + " евро, вы получите: " + (user_money * 1.1) + " долларов")
//     }
//     else if (userValue2 == "UAH" || userValue2 == "uah"){
//         alert("С суммы: " + user_money + " евро, вы получите: " + (user_money * 45) + " гривен")
//     }
//     else if (userValue2 == "AZN" || userValue2 == "azn"){
//         alert("С суммы: " + user_money + " евро, вы получите: " + (user_money * 1.8) + " манат")
//     }
//     else if(userValue1 == userValue2){
//         alert("Вы не можете обменять одну и ту же валюту!!!")
//     }
//     else(alert("Введите ВТОРУЮ валюту корректно и на английском языке!!!"))
// }

// // От гривны к другим валютам
// else if(userValue1 == "UAH" || userValue1 == "uah"){
//     user_money = prompt("Сколько гривн у вас есть?: ")
//     if (userValue2 == "USD" || userValue2 == "usd"){
//         alert("С суммы: " + user_money + " гривен, вы получите: " + (user_money * 0.025) + " долларов")
//     }
//     else if (userValue2 == "EUR" || userValue2 == "eur"){
//         alert("С суммы: " + user_money + " гривен, вы получите: " + (user_money * 0.02) + " евро")
//     }
//     else if (userValue2 == "RUB" || userValue2 == "rub"){
//         alert("С суммы: " + user_money + " гривен, вы получите: " + (user_money * 2) + " рублей")
//     }
//     else if (userValue2 == "AZN" || userValue2 == "azn"){
//         alert("С суммы: " + user_money + " гривен, вы получите: " + (user_money * 0.04) + " манат")
//     }
//     else if(userValue1 == userValue2){
//         alert("Вы не можете обменять одну и ту же валюту!!!")
//     }
//     else(alert("Введите ВТОРУЮ валюту корректно и на английском языке!!!"))
// }

// // От Маната к другим валютам
// else if(userValue1 == "AZN" || userValue1 == "azn"){
//     user_money = prompt("Сколько манатов у вас есть?: ")
//     if (userValue2 == "USD" || userValue2 == "usd"){
//         alert("С суммы: " + user_money + " манат, вы получите: " + (user_money * 0.6) + " долларов")
//     }
//     else if (userValue2 == "EUR" || userValue2 == "eur"){
//         alert("С суммы: " + user_money + " манат, вы получите: " + (user_money * 0.5) + " евро")
//     }
//     else if (userValue2 == "RUB" || userValue2 == "rub"){
//         alert("С суммы: " + user_money + " манат, вы получите: " + (user_money * 50) + " рублей")
//     }
//     else if (userValue2 == "UAH" || userValue2 == "uah"){
//         alert("С суммы: " + user_money + " манат, вы получите: " + (user_money * 0.25) + " гривен")
//     }
//     else if(userValue1 == userValue2){
//         alert("Вы не можете обменять одну и ту же валюту!!!")
//     }
//     else(alert("Введите ВТОРУЮ валюту корректно и на английском языке!!!"))
// }
// // Не верное название первой валюты
// else(alert("Введите ПЕРВУЮ валюту корректно и на английском языке!!!"))

//! 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: 
//! от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%. 

// let price = Number(prompt("Введите сумму чека, чтобы увидеть итоговую сумму со скидкой"))
// if (price >= 200 && price <= 299) {
//     alert("Итоговая сумма: " + (price - price*0.03) + " рублей со скидкой - 3%")
// }
// else if (price >= 300 && price <= 499){
//     alert("Итоговая сумма: " + (price - price*0.05) + " рублей со скидкой - 5%")
// }
// else if (price >= 500){
//     alert("Итоговая сумма: " + (price - price*0.05) + " рублей со скидкой - 7%")
// }
// else if (price < 200) {
//     alert("Скидка применяется от суммы 200р")
// }
// else (alert("Введите число!"))

//! 8. Запросить у пользователя длину окружности и периметр квадрата. 
//! Определить, может ли такая окружность поместиться в указанный квадрат. 

// let perimeter
// let circle = prompt("Введите длину окружности: ")
// let side_square
// let diameter

// if (circle > 0) {
//     perimeter = prompt("Введите периметр кввадрата: ")

//     if (perimeter > 0) {
//         side_square = perimeter / 4
//         diameter = circle / Math.PI
//         if (side_square > diameter) {
//             alert("Окружность длиной: " + circle + " С легкостью вмещается в квадрат с периметром: " + perimeter)
//         }
//         else(alert("Окружность длинной " + circle + " Слишком велика для квадарата с перимтром: " + perimeter))
//     }

//     else if (perimeter == 0) {
//         alert("Поле не может быть пустым!")
//     }
//     else if (typeof perimeter === "string") {
//         alert("Введите число!")
//     }

// }
// else if (circle == 0) {
//     alert("Поле не может быть пустым!")
// }
// else if (typeof circle === "string") {
//     alert("Введите число!")
// }

//! 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
//! За каждый правильный ответ начисляется 2 балла. 
//! После вопросов выведите пользователю количество набранных баллов.

// let score = 0
// let quest1 = Number(prompt("В каком году основан JavaScript?: 1990; 1995; 1999?"));
// let quest2
// let quest3

// if (quest1 == 1995) {
//     score += 2
//     quest2 = prompt("Укажите год выхода языка CSS: 1994; 1996; 2000")
//     if (quest2 == 1996) {
//         score += 2
//         quest3 = prompt("Какого сентября отмечается день программиста?: 23; 13; 3")
//         if (quest3 == 13){
//             score += 2
//             alert("Вы набрали " + score + " баллов!")
//         }
//         else if (quest3 == 23 || quest3 == 3){
//             alert("Вы набрали " + score + " баллов!")
//         }
//         else (alert("Выберите один из трех вариантов: 23; 13; 3"))
//     }
//     // Второй неверный ответ
//     else if (quest2 == 1994 || quest2 == 2000){
//         quest3 = prompt("Какого сентября отмечается день программиста?: 23; 13; 3")
//         if (quest3 == 13){
//             score += 2
//             alert("Вы набрали " + score + " баллов!")
//         }
//         else if (quest3 == 23 || quest3 == 3){
//             alert("Вы набрали " + score + " баллов!")
//         }
//         else (alert("Выберите один из трех вариантов: 23; 13; 3"))
//     }
//     else (alert("Выберите один из трех вариантов: 1994; 1995; 2000"))
// }

// // Первый неверный ответ
// else if (quest1 == 1990 || quest1 == 1999){
//     quest2 = prompt("Укажите год выхода языка CSS: 1994; 1996; 2000")
//     if (quest2 == 1996) {
//         score += 2
//         quest3 = prompt("Какого сентября отмечается день программиста?: 23; 13; 3")
//         if (quest3 == 13){
//             score += 2
//             alert("Вы набрали " + score + " баллов!")
//         }
//         else if (quest3 == 23 || quest3 == 3){
//             alert("Вы набрали " + score + " баллов!")
//         }
//         else (alert("Выберите один из трех вариантов: 23; 13; 3"))
//     }
//     // Второй неверный ответ 
//     else if (quest2 == 1994 || quest2 == 2000){
//         quest3 = prompt("Какого сентября отмечается день программиста?: 23; 13; 3")
//         if (quest3 == 13){
//             score += 2
//             alert("Вы набрали " + score + " баллов!")
//         }
//         else if (quest3 == 23 || quest3 == 3){
//             alert("Вы набрали " + score + " баллов!")
//         }
//         else (alert("Выберите один из трех вариантов: 23; 13; 3"))
//     }
//     else (alert("Выберите один из трех вариантов: 1994; 1995; 2000"))
// }

// else (alert("Выберите один из трех вариантов: 1990; 1995; 1999"))

//! 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
//! Учтите возможность перехода на следующий месяц, год, а также високосный год.

// let day = Number(prompt("Введите день (цифра): "))
// let month = 0
// let year = 0

// if (day <= 0){
//     alert("Введите корректное цифру: ") //! Нулевой или отрицательный день
// }

// //! Последний день февраля високосного и не високосного года 
// else if (day == 28){
//     month = Number(prompt("Введите месяц (цифра): "))
//     if (month == 2){
//         year = Number(prompt("Введите год: "))
//         if (year %4!=0){
//             day = 1
//             month = 3
//             alert("Завтра: " + day + "." + month + "." + year)
//         }
//         else if (year %4==0){
//             day += 1
//             alert("Завтра: " + day + "." + month + "." + year)
//         }
//         else (alert("Введите корректный год"))
//     }
// }

// //! Последний день 30-дневных месяцев
// else if (day == 30) {
//     day = 1
//     month = Number(prompt("Введите месяц (цифра): "))
//     if (month == 2){
//         alert("В феврале не может быть больше 29 дней")
//     }
//     else if (month == 4 || month == 6 || month == 9 || month == 11) { //! Новый месяц
//         month += 1
//         year = Number(prompt("Введите год: "))
//         if (year > 0){
//             alert("Завтра: " + day + "." + month + "." + year)
//         }
//         else (alert("Введите корректный год"))
//     }
//     else if (month >= 1 && month <= 12) { //! Все календарные дни
//         day = 31
//         year = Number(prompt("Введите год: "))
//         if (year > 0){
//             alert("Завтра: " + day + "." + month + "." + year)
//         }
//         else (alert("Введите корректный год"))
//     }  
//     else (alert("Введите корректны месяц"))
// }

// else if (day <= 30){
//     month = Number(prompt("Введите месяц (цифра): "))

//     if (month == 2 && day >= 30){
//         alert("В феврале не может быть больше 29 дней")
//     }

//     else if (day == 29 && month == 2) {
//         year = Number(prompt("Введите год: ")) //! Високосный год
//         if (year%4==0) {
//             day = 1
//             month = 3
//             alert("Завтра: " + day + "." + month + "." + year)
//         }
//         else if (year <=0) {
//             alert("Введите корректный год")
//         }
//         else (alert("В " + year + " году в феврале 28 дней!"))
//     }

//     else if (month >= 1 && month <= 12 && day <= 30) { //! Все календарные дни
//         day += 1
//         year = Number(prompt("Введите год: "))
//         if (year > 0){
//             alert("Завтра: " + day + "." + month + "." + year)
//         }
//         else (alert("Введите корректный год"))
//     }  
//     else (alert("Введите корректный месяц"))
// }

// //! Последний день 31-дневных месяцев
// else if (day == 31) {
//     day = 1
//     month = Number(prompt("Введите месяц (цифра): "))
//     if (month == 2){
//         alert("В феврале не может быть больше 29 дней")
//     }
//     else if (month == 12) {
//         year = Number(prompt("Введите год: ")) //! Новый год
//         if (year > 0){
//             year += 1
//             month = 1
//             alert("Завтра: " + day + "." + month + "." + year)
//         }
//         else (alert("Введите корректный год"))
//     }
//     else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) { //! Новый месяц
//         month += 1
//         year = Number(prompt("Введите год: "))
//         if (year > 0){
//             alert("Завтра: " + day + "." + month + "." + year)
//         }
//         else (alert("Введите корректный год"))
//     }
//     else if (month == 2 || month == 4 || month == 6 || month == 9 || month == 11) {
//         alert("В этом месяце 30 дней!")
//     }
//     else (alert("Введите корректны месяц"))
// }
// else (alert("Введите корректное число: "))


//! Urok 3 dz 2

//! 1. Запросить у пользователя число и определить, оно положительное, отрицательное или ноль

// let user_num = Number(prompt("Введите число: "))
// if (user_num > 0) {
//     alert("Число положительное")
// }
// else if (user_num < 0) {
//     alert("Число отрицательное")
// }
// else if (user_num == 0){
//     alert("Число равно нулю")
// }
// else (alert("Введите число!!!"))

//! 2. Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).

// let year_user = Number(prompt("Сколько вам лет?: "))
// if (year_user >= 1 && year_user <= 120){
//     alert("Данные корректны")
// }
// else (alert("Данные не корректны!"))

//! 3. Запросить у пользователя число и вывести его модуль
//! (|7| = 7, |-7| = 7).

// let number = Number(prompt("Введите число: "));
// let modul = Math.abs(number)
// alert("Моудль числа " + number + " = " + modul)

//! 4. Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных
// let hours = Number(prompt("Введите часы: "))
// let minutes = 0
// let seconds = 0
// if (hours <= 23 && hours >= 0) {
//     minutes = Number(prompt("Введите минуты: "))
//     if (minutes <= 59 && minutes >= 0) {
//         seconds = Number(prompt("Введите секунды: "))
//         if (seconds <= 59 && seconds >= 0) {
//             alert("Ваше время: " + hours + ":" + minutes + ":" + seconds)
//         }
//         else(alert("Данные не корректны: "))
//     }
//     else(alert("Данные не корректны: "))
// }
// else(alert("Данные не корректны: "))

//! 5. Запросить координаты точки (x, y) и определить номерчетверти, в которую попала эта точка. 
//! Необходимо учесть случаи попадания точки на оси X или Y или в начало координат

// let x = Number(prompt("Введите координат Х"))
// let y = Number(prompt("Введите координат У"))
// if (x < 0 && y > 0) {
//     alert("Точка пересечения Х, Y - находится в ПЕРВОЙ четверти графика")
// }
// else if (x > 0 && y > 0) {
//     alert("Точка пересечения Х, Y - находится во ВТОРОЙ четверти графика")
// }
// else if (x > 0 && y < 0) {
//     alert("Точка пересечения Х, Y - находится в ТРЕТЬЕЙ четверти графика")
// }
// else if (x < 0 && y < 0) {
//     alert("Точка пересечения Х, Y - находится в ЧЕТВЕРТОЙ четверти графика")
// }
// else if (x ==0 || y == 0) {
//     alert("Для определения точки в конкректной четверти графика значение Х и Y не могут быть равны 0")
// }
// else("Не корректные данные")

//! 6. Запросить у пользователя номер месяца и вывести на экран его название.

// let num_months = Number(prompt("Введите номер месяца: "))
// switch (num_months) {
//     case 1:
//         alert("Это - январь")
//         break;
//     case 2:
//         alert("Это - февраль")
//         break;
//     case 3:
//         alert("Это - март")
//         break;
//     case 4:
//         alert("Это - апрель")
//         break;
//     case 5:
//         alert("Это - май")
//         break;
//     case 6:
//         alert("Это - июнь")
//         break;
//     case 7:
//         alert("Это - июль")
//         break;
//     case 8:
//         alert("Это - август")
//         break;
//     case 9:
//         alert("Это - сентябрь")
//         break;
//     case 10:
//         alert("Это - октябрь")
//         break;
//     case 11:
//         alert("Это - ноябрь")
//         break;
//     case 12:
//         alert("Это - декабрь")
//         break;
// }

//! 2. Реализовать калькулятор. Пользователь вводит 2 числа и знак (+ - * /). 
//! В зависимости от введенного знака решить пример и вывести результат.

// let num_1 = +prompt("Введите первое число: ");
// let num_2 = +prompt("Введите второе число: ");
// let result = null;
// let operator = prompt("Выберите действие: (+; -; *; /)");

// if (operator == "+") {
//     alert("Ваше число: " + (result = num_1 + num_2));
// }

// if (operator == "-") {
//     alert("Ваше число: " + (result = num_1 - num_2));
// }

// if (operator == "*") {
//     alert("Ваше число: " + (result = num_1 * num_2));
// }

//  if (operator == "/") {
//     alert("Ваше число: " + (result = num_1 / num_2));
// }


// ! Тернарный оператор
// let num_1 = 5
// let num_2 = 7
// console.log(num_1>num_2 ? num_1 : num_2);

// let h = 12
// h%5==0 ? console.log("Число " + h + " кратно 5") : console.log("Число " + h + " не кратно 5");

// ! Циклы
// let i = 0
// console.log(i);

// while (i<5) {
//     console.log(i);
//     i++  
// }

// console.log("================");

// let y = 5
// while (y > 0) {
//     console.log(y);
//     y--

// }

// do while (condition) {

// }

//  (  Началo; условие; шаг)
// for (let i = 0; i < 10; i++) {
//     if (i%2==1) {
//         console.log(i);
//     }
// }

// let number = 123
// console.log(number.toString().length);

//! DZ
//! 1 task
// let num = 10
// let str = ""
// while (num>0) {
//     num--
//     str += "#"
// }
// console.log(str);

//! 2 task
// let user_num = 10;
// let diapazone = ""
// while (user_num >= 0) {
//     diapazone += user_num
//     console.log(diapazone);
//     user_num--
// }

//! 3 task
// let num_3 = 5
// let pow = 3

// while (pow>0) {
//     num_3**pow
//     console.log(num_3**pow);
//     pow--
// }

//! 4 task
// console.clear()
// let num_4 = 25
// let num_5 = 10
// let devider = num_5
// while (devider>0) {
//     if (num_4 % devider == 0 && num_5 % devider == 0){
//         console.log(devider);
//     }
//     devider--
// }

//! 5 task
// let num6 = 5
// let factorial = 1
// while (num6>0) {
//     factorial *= num6
//     console.log(factorial);
//     num6--
// }

//1*5 5*4 20*3 60*2 120*1 

// Числа от 0 до 100 кратные числу введенные пользователем
// let n = 5
// for (let i = 0; i < 100;  i++) {
//     if (i%n == 0) {
//         console.log(i);
//     }
// }

// task 4
// let minNum = 10
// let maxNum = 50
// let string = ""

// for (let i = minNum; i < maxNum; i+=4) {
//     console.log(i);
// }

// task 5
//  let y = 49
//  let count = 0
//  for (let i = 2; i < y; i++) {
//     if (y%i==0){
//         console.log(i);
//         console.log("Число простое");
//     }
//     else {
//         count++
//         console.log("else");
//     }
//  }

//! DZ
//! 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// let min_num = Number(prompt("Введите минимальное число: "))
// let min_max = Number(prompt("Введите максимальное число: "))
// let summa = 0

// for (let i = min_num; i <= min_max; i++) {
//     summa += i
//     console.log(summa);
// }

//! 2. Запросить 2 числа и найти только наибольший общий делитель.
// let num_4 = Number(prompt("Введите первое число: "))
// let num_5 = Number(prompt("Введите второе число: "))
// let devider = 0
// for (let i = 1; i <= num_4; i++) {
//     if (num_4 % i == 0 && num_5 % i == 0) {
//         devider = i
//     }
// }
// alert(`наибольший делитель чисел ${num_4} и ${num_5} = ` + devider);

//! 3. Запросить у пользователя число и вывести все делители этого числа.
// let num_6 = Number(prompt("Введите число: "))
// let devider = 1
// for (let i = 0; i < num_6; i++) {
//     if (num_6 % devider == 0){
//         console.log(devider);
//     }
//     devider++
// }

//! 4. Определить количество цифр в введенном числе.
// let nums = prompt("Введите число: ") as any
// let count = 0
// for (let i = 0; i < nums.length; i++) {
//     count++
// }
// alert("Количество цифр в числе - " + nums + ": " + count)

//! 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, 
//! сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
// let mass = [1, 5, 4, 6, -1, -9, 10, -8, 0, 3]
// let pos = 0
// let neg = 0
// let zero = 0
// let odd = 0
// let even = 0

// for (let i = 0; i < mass.length; i++) {
//     if (mass[i]>0) {
//         pos++
//         console.log(mass[i]);       
//     }   
//     if (mass[i]%2==0) {
//         even++
//         console.log(mass[i]);

//     }
// }
// console.log(`Количество положительны эл-ов: ${pos}
//             Количество отрицательных эл-ов ${10-pos}`);



//! Задания для самостоятельной работы
//! Task 1

// let num = 20

// for (let i = 1; i <= num; i++) {
//     if (i % 2 == 0) {   
//         console.log(i);
//     }
// }

//! Task 2
// let num = 30
// for (let i = num; i >= 0; i--) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
// }

//! Task 3
// let user_num = 20
// for (let i = 0; i < user_num; i++) {
//     if (user_num % i == 0) {
//         console.log(i);
//     }
// }

//! Task 4
// let money = 2000
// let doubleMoney = money*2 
// let bet = 0.2 // Процентная ставка 20%
// let year = 0

// for (let i = 0; i < 10; i++) {
//     money += money * bet
//     year++
//     if (money >= doubleMoney) break

// }
// let year5 = "лет"
// let year2 = "года"
// let year1 = "год"
// if (year == 1){
//     console.log(`Вклад увеличится вдвое через ${year} ${year1}`);
// }
// else if (year >= 5) {
//     console.log(`Вклад увеличится вдвое через ${year} ${year5}`);
// }
// else (console.log(`Вклад увеличится вдвое через ${year} ${year2}`))

//! Task 5
// let accum = 0
// for (let i = 1; i < 20; i++) {
//     let num = Math.trunc(Math.random()*20)
//     if (num%4!=0 ) {
//         console.log(num);
//         accum++
//     }
//     if (accum == 10) {
//         break
//     }
// }


//! Функции в JS

// function getSum (a:number, b:number) {
//     return (a + b)
// }
// console.log(getSum(3, 5));

// let name = "Василий"
// function userName2() {
//     console.log("Привет " + name);
// }
// userName2()

// function enterName(name:string) {
//     if (name == "") {
//         return "Поле не может быть пустым"
//     }
//     else if (typeof name !== "string"){
//         return ("У вас введены числа")
//     }
//     return name
// }
// console.log(enterName(""));


//! Home work
//! 1. Написать функцию, которая принимает 2 числа и возвращает меньшее из них.
// function equality(a:number, b:number) {
//     if (a > b) {
//         return b
//     }
//     else if (a < b) {
//         return a 
//     }
//     else if (a == b) {
//         return `Число ${a} = ${b}`
//     } 
//     else return "Введите число!"

// return x > y ? y : x тоже решение через тернарный оператор
// }
// console.log(equality(1, 21));

//! 2. Написать функцию, которая возводит переданное число в указанную степень.
// function pow(a:number, b:number) {
//     return a**b
// }
// console.log(pow(5, 3));

//! 3. Написать функцию, которая принимает 2 числа и знак (+ - * /), считает пример и возвращает результат. 
// function calculator(a:number, b:number) {
//     a = Number(prompt("Введите первое число"))
//     b = Number(prompt("Введите второе число"))
//     let operator = prompt("Выберите действие: +, -, /, *")
//     if (operator == "+"){
//         return alert(a + b)
//     }
//     else if (operator == "-"){
//         return alert(a - b)
//     }
//     else if (operator == "/"){
//         return alert(a / b)
//     }
//     else if (operator == "*") {
//         return alert(a * b)
//     }
//     else (alert("Введите один из указанных символов!"))
// }
// console.log(calculator());

//! Решение через оператор switch 
// function calculator(a:number, operator:string, b:number) {
//     switch (operator) {
//         case "+":
//             return a + b

//         case "-":
//             return a - b

//         case "/":
//             return a / b

//         case "*":
//             return a * b

//         default:
//             return "Введите правильно оператор"
//     }
// }
// console.log(calculator(10, "abc", 12));


//! 4. Написать функцию, которая проверяет, является ли переданное ей число простым
// function numberPrime(a:number) {
//     if (a < 2) {
//         return "Число не простое";
//     }
//     for (let i = 2; i <= Math.sqrt(a); i++) {
//         if (a % i == 0) {
//             return "Число составное";
//         }
//     }
//     return "Число простое";
// }
// console.log(numberPrime(9));

//! Решение 2-ым способом
// function numberPrime(a:number) {
//     let accum = 0
//     for (let i = 2; i < a; i++) {
//         if (a%i == 0) {
//             accum++
//         }
//     }
//     return accum > 0 ? "Число сложное" : "Число простое"
// }
// console.log(numberPrime(13));


//! 5. Написать функцию, которая принимает число и выводит таблицу умножения 
//! для этого числа. Вызовите функцию для всех чисел от 2 до 9. 
// function multiplyTable(x:number) {  
// if (typeof x == "number") {
//         for (let i = 1; i <= 9; i++) {
//         console.log(x*i);
//     } 
// }
// else {
//     console.log("Введите число!")
// }
// }
// multiplyTable(12)

//! 9.
// function Task9 (min:number, max:number, bool:boolean) {
//     for (let min = 0; min < max; min++) {
//         if (bool == true) {
//             min
//         }        
//     }
// }
// console.log(Task9(5, 15, true));

// let min = 5
// let max = 15
// let b = "true"
// for (let min = 0; min < max; min--) {
//     if (b == "true") {

//     }        
// }


//! Задания на уроке
//! Task 4 
// function checkPass(pass:string) {
//     if (pass == "Step" || pass == "Web" || pass == "JavaScript") {
//         return true
//     }
//     return false
// } 
// console.log(checkPass("Web"));

//! Task 5
// function determineSign(x:number) {
//     if (x > 0) {
//         return 1
//     }
//     else if (x < 0){
//         return - 1
//     }
//     else if (x == 0) {
//         return 0
//     }
//     return "Введите число"
// }
// console.log(determineSign(2));

//! Task имя, фамилия и возраст
// function userInfo(name:string, surname:string, age:number) {
//     return `Привет ${name} ${surname} - тебе ${age} лет!`
// }  
// console.log(userInfo("Иван", "Иванов", 24));

//! Task 
// let data = new Date
// function greetUser(name:string) {
//     let hours = data.getHours()
//     if (hours >= 1 && hours < 6 ) {
//         return `Доброй ночи, ${name}`
//     }
//     else if (hours >= 6 && hours < 12 ) {
//         return `Доброе утро, ${name}`
//     }
//     else if (hours >= 12 && hours < 18 ) {
//         return `Добрый день, ${name}`
//     }
//     if (hours >= 18 && hours <= 23 ) {
//         return `Добрый вечер, ${name}`
//     }
// }
// console.log(greetUser("Viktor"));
// console.log(`Текущее время: ${data.getHours()} часов и ${data.getMinutes()} минут`);

// let accum = 0
// setInterval(() => {
//     accum++
//     if (accum > 10) {

//     }
//     console.log(accum);
// }, 1000)

// setTimeout(() => {
//     console.log("Привет Вася");
// }, 2000);


//! HOME WORK
//! 6. Написать функцию, которая реализует работу оператора %. Функция принимает 2 параметра 
//! и возвращает остаток от деления первого параметра на второй. 
//! В функции использовать только + - * /, оператор % не использовать.   

// function remainderDivision(a:number, b:number) {
//     return Math.trunc(a/b)
// }
// console.log(remainderDivision(28, 6));

//! 7. Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму.
// function sumNumber(a:number, b=0, c=0, d=0, e=0) {
//     if (typeof b === "string" || typeof c === "string" 
//         || typeof d === "string" || typeof e === "string") {
//         return "Введите число!"
//     }
//     if (typeof a === "number") {
//         return (a+b+c+d+e)
//     }
//     return "Введите число!"
// }
// console.log(sumNumber(1, 2, 2, 1));

//! 8. Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них. 
// function greaterNum(a=0, b=0, c=0, d=0, e=0) {
//     let massive = [a, b, c, d, e]
//     return Math.max(...massive);
// }
// console.log(greaterNum(7, 5, 2, 8, 9));

//! 9. Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. Какие
//! числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные).

// function evenOdd(diapazone1=0, diapazone2=0, bool:boolean) {
//     for (let i = diapazone1; i <= diapazone2; i++) {
//        if (bool == true) {
//         if (i % 2 == 0){
//             console.log(i);

//         }
//        }
//        else {
//         if (i % 2 != 0) {
//             console.log(i);
//         }
//        }
//     }
// }
// evenOdd(9, 22, false);

//!10. Написать функцию, которая принимает дату (день, месяц, год) 
//! и возвращает дату следующего дня в виде строки «дд.мм.гггг». 
//! Проверку на високосный год желательно написать отдельной функцией.
// function dateTomorrow(day:number, month:number, year:number) {

// if (day <= 0){
//     return "Введите корректное цифру: " //! Нулевой или отрицательный день
// }

// //! Последний день февраля високосного и не високосного года 
// else if (day == 28 && month == 2){
//     if (year <= 0 || typeof year !== "number"){
//         return "Введите корректный год" 
//     }
//     else if (year %4!=0){
//         day = 1
//         month = 3
//         return "Завтра: " + day + "." + month + "." + year
//     }
//     else if (year %4==0){
//         day += 1
//         return "Завтра: " + day + "." + month + "." + year
//     }

// }

// //! Последний день 30-дневных месяцев
// else if (day == 30) {
//     day = 1
//     if (month == 2){
//         return "В феврале не может быть больше 29 дней"
//     }
//     else if (month == 4 || month == 6 || month == 9 || month == 11) { //! Новый месяц
//         month += 1
//         if (year > 0){
//             return "Завтра: " + day + "." + month + "." + year
//         }
//         else return "Введите корректный год"
//     }
//     else if (month >= 1 && month <= 12) { //! Все календарные дни
//         day = 31
//         if (year > 0){
//             return "Завтра: " + day + "." + month + "." + year
//         }
//         else return "Введите корректный год"
//     }  
//     else return "Введите корректный месяц"
// }

// else if (day <= 30){
//     if (month == 2 && day >= 30){
//         return "В феврале не может быть больше 29 дней"
//     }

//     else if (day == 29 && month == 2) { //! Високосный год
//         if (year%4==0) {
//             day = 1
//             month = 3
//             return "Завтра: " + day + "." + month + "." + year
//         }
//         else if (year <=0) {
//             return "Введите корректный год"
//         }
//         else return "В " + year + " году в феврале 28 дней!"
//     }

//     else if (month >= 1 && month <= 12 && day <= 30) { //! Все календарные дни
//         day += 1
//         if (year > 0){
//             return "Завтра: " + day + "." + month + "." + year
//         }
//         else return "Введите корректный год"
//     }  
//     else return "Введите корректный месяц"
// }

// //! Последний день 31-дневных месяцев
// else if (day == 31) {
//     day = 1
//     if (month == 2){
//         return "В феврале не может быть больше 29 дней"
//     }
//     else if (month == 12) { //! Новый год
//         if (year > 0){
//             year += 1
//             month = 1
//             return "Завтра: " + day + "." + month + "." + year
//         }
//         else return "Введите корректный год"
//     }
//     else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) { //! Новый месяц
//         month += 1
//         if (year > 0){
//             return "Завтра: " + day + "." + month + "." + year
//         }
//         else return "Введите корректный год"
//     }
//     else if (month == 2 || month == 4 || month == 6 || month == 9 || month == 11) {
//         return "В этом месяце 30 дней!"
//     }
//     else return "Введите корректны месяц"
// }
// else return "Введите корректное число: "
// }
// console.log(dateTomorrow(29, 2, 2024));


//! Home Work 
//! 1. Написать функцию, которая вычисляет факториал заданного числа.
// function claculateFactorialNumber(a:number) {
//     if (a == 1)
//         return a
//     else return a * claculateFactorialNumber(a-1)
// }
// console.log(claculateFactorialNumber(2));
// console.log(claculateFactorialNumber(4));

//! 2. Написать функцию, которая выводит все числа из заданного пользователем диапазона 
//! в прямом порядке. И еще одну функцию – для вывода в обратном порядке. 

// function showRangeNumber (b:number, c:number):any {
//     if(b == c) {
//         return b
//     } else {
//         return b + ' ' + showRangeNumber (b+1, c)
//     }
// }
// console.log(showRangeNumber(6, 6))
// console.log(showRangeNumber(2, 12))

//! 3. Написать функцию, которая выводит переданное ей число задом наперед. 
//! Например: число 1234 вывести как 4321.

// function reversNumber(d:number):number {
//     if (d < 10){
//         return d
//     } else {
//         return Number(d % 10 + '' + reversNumber(Math.floor(d/10)))
//     }
// }
// console.log(reversNumber(6))
// console.log(reversNumber(12345))

// // Второй способ решения
// console.log(Number(String(1234).split('').reverse().join('')));

//! 4. Написать функцию, которая считает сумму цифр числа. 
//! Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.
//     function calculateSum (e:number):any {
//         if(e < 10) {
//             return e
//         } else {
//             return e % 10 + calculateSum(Math.floor(e / 10))
//         }
//     }
// console.log(calculateSum(4))
// console.log(calculateSum(123))  

//! 5. Написать функцию, которая принимает число и выводит соответствующее количество 
//! вложенных пар круглых скобок. Например: число 4 – (((()))).
//     function showBrackets(f:number):any {
//         if (f == 1) {
//             return '()'
//         } else {
//             return '(' + showBrackets(f - 1) +')'
//         }
//     }
// console.log(showBrackets(4));


//! Объекты __________________________________________
//! Задание 1
// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), 
// и следующие функции для работы с этим объектом.
//! 1. Функция для вывода на экран информации об автомобиле.
//! 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
//! Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час. 

// let car = {
//     country: "Japan",
//     model: "Mitsubishi",
//     year: 2007,
//     averageSpeed: 100
// }
// function showCarInfo(str:any) {
//     for (const key in str) {
//         console.log(`${key}: ${str[key]}`);
//     }
// }
// showCarInfo(car);

// function travelTime(distance:any, speed:number){
//     let time = distance / speed
//     let rest = Math.trunc(time / 4)
//     if (time <= 4) {
//         return time
//     }
//     else if (distance %400==0) {

//     }
//     return time + " часов"  
// }
// console.log(travelTime(1000, 100));

// function travelTime(distance:number) {
//     let time = (distance/car.averageSpeed)
//     if (time <= 4) {
//         return time.toFixed(2)
//     }
//     else if (time > 4) {
//         let numberBreaks = time / 4
//         time = time + numberBreaks
//         return Math.trunc(time)
//     }
// }

// console.log(travelTime(800));

//! оздать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
//! 1. Функция вывода времени на экран.
//! 2. Функция изменения времени на переданное количество секунд.
//! 3. Функция изменения времени на переданное количество минут.
//! 4. Функция изменения времени на переданное количество часов.
//! Учтите, что в последних 3-х функциях, при изменении одной 
//! части времени, может измениться и другая. Например: если ко 
//! времени «20:30:45» добавить 30 секунд, то должно получиться 
//! «20:31:15», а не «20:30:75». 

// let time = {
//     hours: 15,
//     minutes: 1250,
//     seconds: 30,
// }

// function seconds(sec:any) {
//     sec = Math.trunc(time.seconds/60)
//     if (time.seconds > 59) {
//         time.seconds = time.seconds - sec*60
//         time.minutes += sec
//         return time
//     } else {
//         return time
//     }
// }
// console.log(seconds(time));

// function minutes(min:any) {
//     min = Math.trunc(time.minutes / 60)
//     if (time.minutes > 59) {
//         time.minutes = time.minutes - min*60
//         time.hours+=min
//         return time
//     }
//     return time
// }
// console.log(minutes(time));

// function showHours(hour:any) {
//     hour = Math.trunc(time.hours/24)
//     if (time.hours > 23) {
//         time.hours = time.hours - hour*24
//         return time
//     }
//     return time
// }
// console.log(showHours(time));


//! Массивы
// let massive = [2, 10, true, "string"]
// massive[2] = "Эллемент изменен"
// massive[4] = "Добавлен"
// massive.push('LastEl') // добвляет в конец массива
// massive.pop() // удаляет последний эл-т 
// massive.shift() // удаляет первый эл-т 
// massive.unshift("Начало") // добвляет в начало массива

// console.log(massive.length);
// console.log(massive[2]);
// console.log(massive);

// let array = [0, 1, 2, 3, 4]
// let newArr = array.splice(2, 3) // Первое число - индекс, второе число - количество эл-ов для удаления
// delete array[0] // удаляет эл-т сохраняя за ним индекс
// console.log(array)
// console.log(newArr)

// console.log(Math.round(Math.random()*100)); // Рандомное число

//! Home Work
//! Задание 1
//! Создать массив из 10 случайных чисел и написать 
//! несколько функций для работы с ним.
// let numberArray:number[] = []
// for (let i = 0; i < 10; i++) {
//     let num = Math.trunc(Math.random()*100)
//     numberArray.push(num)
// }
// //! 1. Функция принимает массив и выводит его на экран.
// function showArray(array:number[]) {
//     console.log(array);
// }
// showArray(numberArray)

// //! 2. Функция принимает массив и выводит только четные элементы.
// numberArray = [2, 3, 5, 10, 8, 9, 24]
// function showEvenNumbers(array:number[]) {
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         console.log(array[i]);
//     }
// }
// 2-ой способ
//     for (const el of array) {
//         if (el % 2 == 0) {
//             console.log(el);
//         }
//     }
// }
// showEvenNumbers(numberArray);

//! 3. Функция принимает массив и возвращает сумму всех элементов массива.
// numberArray = [5, 2, 3, 10, 20]
// function summaElementsArray(array:number[]) {
//     let summa = 0
//     for (let i = 0; i < array.length; i++) {
//         summa+=array[i]      
//     }
//     return summa
// }
// console.log(summaElementsArray(numberArray));

// //! 4. Функция принимает массив и возвращает его максимальный элемент.
// function showMaxNumber(array:number[]) {
//     return Math.max(...array)
// }
// console.log(showMaxNumber(numberArray));

// //! 5. Функция добавления нового элемента в массив по указанному индексу.
// function addingNewElement(array:any[], index:number, userElement:any) {
//     array.splice(index, 0, userElement)
//     return array
// }
// console.log(addingNewElement(numberArray, 2, 'STRING'));

// //! 6. Функция удаления элемента из массива по указанному индексу  
// function deleteElement(array:any[], index:number) {
//     array.splice(index, 1)
//     return array
// }
// console.log(deleteElement(numberArray, 2));

// let array2 = [1, 2, 3, 4, 5]
// console.log(String(array2));

// let sity = "Sochi, Krasnodar, Rostov-On-Don, Moscow"
// console.log(sity.split(' '));

// let massive = [2, 4, 5, 6, 7]
// let method = massive.slice(1, 3)
// console.log(method);

// console.log(massive.concat(numberArray));

// massive.splice(1, 0, ...numberArray)
// console.log(massive);


//! Home_Work
//! Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if 
//! выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.   
// console.log("Первое задание");

// let array = [2, 5, 9, 15, 0, 4]
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 3 && array[i] < 10) {
//         console.log(array[i]);
//     }
// }
// Второй способ
// for (const el of array) {
//     if (el > 3 && el < 10) {
//         console.log(el);
//     }
// }
// Третий способ
// array.forEach((el) => {
//     if (el > 3 && el < 10) {
//         console.log(el);
//     }
// })


//! Дан массив с числами. Числа могут быть положительными и отрицательными. 
//! Найдите сумму положительных элементов массива.  
// console.log("Второе задание");

// let mas = [2, 5, 0, 4, -1, 9, 5, -5]
// let numberPositive = 0
// for (let i = 0; i < mas.length; i++) {
//     if (mas[i] > 0) {
//         numberPositive+=mas[i]
//     }
// }
// console.log(numberPositive);
// Второй способ
// for (const el of mas) {
//     if (el > 0) {
//         numberPositive+=el
//     }
// }
// console.log(numberPositive);

//! Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и 
//! оператора if проверьте есть ли в массиве элемент со значением, равным 4. 
//! Если есть - выведите на экран 'Есть!' и выйдите из цикла. 
//! Если нет - ничего делать не надо. 
// console.log("Третие задание");

// let massive = [1, 2, 5, 9, 4, 13, 4, 10]
// for (let i = 0; i < massive.length; i++) {
//     if (massive[i] == 4) {
//         console.log(`Элемент ${4} есть`);
//         break
//     }
// }

//! Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите 
//! на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// console.log("_________________");
// console.log("Четвертое задание");

// let massiveNumber = [10, 20, 30, 50, 235, 3000]
// for (let i = 0; i < massiveNumber.length; i++){
//     let num = String(massiveNumber[i])
//     if (num[0] == "1" || num[0] == "2" || num[0] == "5") {
//         console.log(num);
//     }
// } 

//! Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. 
//! С помощью цикла for создайте строку '1-2-3-4-5-6-7-8-9-'. 
// console.log("Пятое задание");

// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(list.toString().split(',').join("-"));

//! Составьте массив дней недели. С помощью цикла for выведите все дни недели. 
// console.log("Шестое задание");

// let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// for (let i = 0; i < weekDays.length; i++) {
//     console.log(weekDays);
//     break
// }

// let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// console.log(weekDays.slice(0,3));
// weekDays.splice(0, 2, "понедельник", "Вторник");
// console.log(weekDays);

// let list1 = [2, 5, 2, 8]
// let list2 = [3, 10, 11]
// console.log(list1.concat(list2)); // Соединяет массивы

// list1.forEach((el) => {
//     console.log(el*2);  
// })

// console.log(list1.indexOf(2));// Показывает индекс элемента
// console.log(list1.lastIndexOf(2));// Показывает последний индекс из одинаковых эл-в
// console.log(list1.includes(1));// Показывает есть ли эл-т в массиве true/false
// list1.find((el, index) => {
//     if (el > 3) {
//         console.log(el + "-" + index);
//     }
// })

// let users = [
//     {id: 1, name: "Вася", payment: 20000},
//     {id: 2, name: "Петя", payment: 25000},
//     {id: 3, name: "Маша", payment: 15000},
// ];
// let someUsers = users.find(el => el.payment >= 20000)//find выводит первое верное значение и завершает итерацию
//     console.log(someUsers);

// let someUsers2 = users.filter(el => el.payment >= 20000)//filter выводит все верные значения
// console.log(...someUsers2);

// let list3:number[] = [2, 5, 10]
// let accum = 0
// list3.forEach(el=>accum+=el)
// console.log(accum);

// let reduce = list3.reduce((accum, el)=>accum+=el) // Нужен для вычисления одного значения на основе всеъ эл-в массива
// console.log(reduce);

// console.log(list3.reverse());

// console.log(list3.sort((a,b)=>a-b));

// let newArray = list3.map(el => el*10)
// console.log(newArray);
// console.log(list3);
// console.log("________________________");

// //! Отсортировать пользователей по зарплате 
// users = [
//     {id: 1, name: "Вася", payment: 20000},
//     {id: 2, name: "Петя", payment: 25000},
//     {id: 3, name: "Маша", payment: 15000},
// ];
// let usersName:string[] = []
// users.forEach(el => usersName.push(el.name))
// console.log(usersName);


// console.log("________________________");
// let unionPayment = 0
// users.forEach(el => unionPayment+=el.payment)
// console.log(`Общая зарплата сотрудников = ${unionPayment} рублей`);

// let sortPayment = []
// users.forEach(el => sortPayment.push(el.payment))
// console.log(sortPayment.sort());


//! Home Work
//! Задание 1
//! У вас есть 5 чисел. Найдите наибольшее и наименьшее из них.
// console.log("Task 1");
// let massiveForFiveNumbers:number[] = [];
// for (let i = 0; i < 5; i++) {
//     massiveForFiveNumbers.push(Math.trunc(Math.random() * 100))
// }
// let minNum = Math.min(...massiveForFiveNumbers);
// let maxNum = Math.max(...massiveForFiveNumbers)
// console.log(`Минимальное число массива: ${minNum}`);
// console.log(`Максимальное число массива: ${maxNum}`);
// // Второй способ решения
// console.log(massiveForFiveNumbers.sort((a, b)=>a-b).pop());


// //! Задание 2
// //! Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1] одной командой. 
// console.log("Task 2");
// let reverseMassive = [1,2,3]
// console.log(reverseMassive.reverse());

// //!Задание 3
// //! Отсортируйте 5 случайных чисел от 1 до 10 в порядке возрастания и затем в порядке убывания. 
// console.log("Task 3");
// let randomNumbers:number[] = []
// for (let i = 0; i < 5; i++) {
//     randomNumbers.push(Math.trunc(Math.random() * 10))
// }
// console.log(randomNumbers.sort());
// console.log(randomNumbers.reverse());

// //! Задание 4 объеденить два массива:
// console.log("Task 4");
// let arrOne = ['a', 'b', 'c'];
// let arrTwo:any = [1, 2, 3];
// console.log(arrOne.concat(arrTwo));

// //! Задание 5. Есть ли в этом массиве значение Banana?
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Banana"));

// //! Задание 6
// //! Напишите программу, которая будет преобразовывать число от 1 до 12 
// //! в соответствующее название месяца (Январь, февраль, ...)
// console.log("Task 6");
// let month = [
//     "January", "February", "March", "April", "May", "June", 
//     "July", "August", "September", "October", "November", "December"
// ]
// month.find((el, index) => {
//     if (index >= 0) {
//         console.log(el + " - " + (index+1));
//     }
// })
// console.log("__________Второй способ____________"); // Второй способ
// month.forEach((el, index)=>console.log(`${el} - ${index+1}`));


// //! Задание 7. Получите Петю из массива arr.
// //! Посчитайте, сколько элементов находится в name. 
// console.log("Task 7");
// let obj = {
//     'name':['Вася', 'Петя', 'Коля'],
//     'age':[11, 30, 20],
// };
// console.log(JSON.stringify(obj).split('"').includes('Петя'))
// console.log(`В ключе 'name' находится ${obj.name.length} элемента`)

// //! Задание 8. Получить объект у которого id=2.
// console.log("Task 8");
// let arr = [
//     {'id':'1','prop1':'val1'},
//     {'id':'2','prop1':'val2'}
// ]
// console.log(arr.find(el => el.id == "2"));

// //! Задание 9. Добавьте элемент в конец массива.
// console.log("Task 9");
// let greetings = [ "Hi", "Hello", "Bonjour"]
// greetings.push("Hola")
// console.log(greetings);

//! Задание 10.
//! У нас есть 3 товара. У каждого товара есть цена, название и стоимость доставки. 
//! Стоимость доставки для всех товаров одинаковая.
//! Выведите на экран общую стоимость всех товаров вместе со стоимостью доставки. 
//! Сделайте так, чтобы меняя стоимость доставки в одном месте, общая стоимость автоматически пересчитывалась.
// console.log("TASK 10");

// let salesReceipt = [
//     {name:"Hot dog", price: 10, delivery: 0.25},
//     {name:"Shawarma", price: 2.75, delivery: 0.25},
//     {name:"Burger", price: 4, delivery: 0.25},
//     {name:"Coca-cola", price: 1, delivery: 0.25},
// ]
// let totalAmount = 0
// let totalDeliveryAmount = 0
// salesReceipt.forEach(el => totalAmount += el.price)
// salesReceipt.forEach(el => totalDeliveryAmount += el.price)
// let finalСheck = totalDeliveryAmount + totalAmount
// console.log(`Итоговая сумма чека: ${finalСheck}$`);

//! Задание 11
//! Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, 
//! количества и цены за единицу товара. Написать следующие функции.
// 1. Распечатка чека на экран.
// 2. Подсчет общей суммы покупки.
// 3. Получение самой дорогой покупки в чеке.
// 4. Подсчет средней стоимости одного товара в чеке. 
// console.log("TASK 11");

// let check:any[] = [
//     {name:"Хлеб", quantity: 3, price: 50},
//     {name:"Молоко", quantity: 2, price: 100},
//     {name:"Соль", quantity: 1, price: 35},
//     {name:"Вода", quantity: 4, price: 50},
// ] 
// let unionaccum = 0
// let unionSum = check.forEach(el=>unionaccum+=el.price*el.quantity)
// console.log(unionaccum + " Общая стоимость покупки");

// let maxPrice = check.map(el=>el.price*el.quantity)
// console.log("Самая дорогая покупка в чеке = " + Math.max(...maxPrice));

// let quantityProduct = 0
// check.forEach(el=>quantityProduct+=el.quantity)
// console.log(quantityProduct);

// let averagePrice = unionaccum / quantityProduct
// console.log(averagePrice + " средняя стоимость 1-го товара в чеке");


// let product1 = document.getElementById('product1') as HTMLDivElement
// product1.innerHTML = (check[0].name) // Вывод значения по ключу
// let product2 = document.querySelector('#product2') as HTMLDivElement
// product2.innerHTML = (check[1].name) // Вывод значения по ключу
// let product3 = document.getElementById('product3') as HTMLDivElement
// product3.innerHTML = (check[2].name) // Вывод значения по ключу
// let product4 = document.getElementById('product4') as HTMLDivElement
// product4.innerHTML = (check[3].name)
// // product1.innerHTML = JSON.stringify(check) // Вывод массива

// let sumIdenticalGoods = []
// if (check.filter(el => el.name)) {
//     sumIdenticalGoods.push(check[0].quantity*check[0].price)
// }
// if (check.filter(el => el.name)) {
//     sumIdenticalGoods.push(check[1].quantity*check[1].price)
// }
// if (check.filter(el => el.name)) {
//     sumIdenticalGoods.push(check[2].quantity*check[2].price)
// }
// if (check.filter(el => el.name)) {
//     sumIdenticalGoods.push(check[3].quantity*check[3].price)
// }

// let sumCheck = 0
// for (const el of sumIdenticalGoods) {
//     sumCheck += el
// }
// console.log(`Общая сумма чека: ${sumCheck} рублей`);
// console.log("Самая дорогая покупка в чеке вышла на: " + Math.max(...sumIdenticalGoods) + " рублей");

// let AverageCostGoods = 0
// AverageCostGoods = ((check[0].price+check[1].price+check[2].price+check[3].price)/check.length)
// console.log(`Средняя стоимость одного товара в чеке состовляет: ${AverageCostGoods} рублей`);
// sumCheck = document.querySelector('.sumCheck') as HTMLDivElement
// sumCheck.innerHTML = (sumCheck)
// console.log(check.length);

//! Home Work
//! Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».  
// let text = "my-short-string";
// let text2 = "background-color"
// function camelize(userText:string) {
//     userText = userText.split("-").map(userText => userText[0].toUpperCase() + userText.slice(1)).join('')
//     console.log(userText[0].toLowerCase() + userText.slice(1));
// }
// camelize(text)

// Второй способ
// function camelize2(str:string) {
//     let splitStr = str.split("-")
//     let mass:string[] = []
//     for (let i = 0; i < splitStr.length; i++) {
//         mass.push(splitStr[i].slice(0, 1).toUpperCase(), splitStr[i].slice(1))
//     }
//     // return splitStr
//     let string = mass.join("")
//     return string[0].toLowerCase() + string.slice(1)
// }
// console.log(camelize2(text));


//! Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями 
//! больше или равными a и меньше или равными b и возвращает результат в виде массива. 
// let arr = [5, 3, 8, 1, 9, 6] as any;
// function filterRange(arr:[], a:number, b:number) {
//     let mass:number[] = []
//     arr.forEach(el => {
//         if (el >= a && el <= b) {
//             mass.push(el);
//             // console.log(el);
//         }
//     });
//     return mass
// }
// console.log(filterRange(arr, 1, 5))

// let vasya = {name: "Вася", age: 25}
// let petya = {name: "Петя", age: 30}
// let masha = {name: "Маша", age: 28}

// let newArr = [vasya, petya, masha]
// console.log(...newArr.sort((a, b) => a.age - b.age));

//! Средний возраст 
// let accumAge = 0
// console.log(...newArr.map(el=>(accumAgee+=el.age) / 3));
// console.log(Math.trunc(accumAge/3));

// Второй способ

// console.log((newArr.reduce((acc, el) => acc+=el.age, 0) / newArr.length).toFixed(1));

// let string = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-0"]
// let massiveUnicalelement:string[] = []

// for (let i = 0; i < string.length; i++) {
//     if (!massiveUnicalelement.includes(string[i])) {
//         massiveUnicalelement.push(string[i])
//     }
// }
// console.log(massiveUnicalelement);


// Числа и строки
// let billion = 1000000000
// let billion2 = 1_000_000_000
// let billion3 = 1e+9

// console.log(billion);
// console.log(billion2);
// console.log(billion3);

// let mcs = 0.000001
// let mcs2 = 1e-6
// console.log(mcs);
// console.log(mcs2);

// let num = 2.55
// console.log(num.toString());
// console.log(255..toString());
// console.log(255.000.toString());
// console.log(255..toString(32));
// console.log(num.toFixed(1));

// console.log(0.1 + 0.2);

// parseInt и parseFloat выводит цельные числа и дробные

// let width = "100px"
// console.log(width);
// console.log(parseInt(width));
// console.log(parseFloat(width));

// let height = "100.25px"
// console.log(parseInt(height));
// console.log(parseFloat(height));


//! Home Work
//! 1. Написать функцию, которая принимает 2 строки и сравнивает их длину. 
//! Функция возвращает 1, если в первой строке больше символов, чем во второй;
// ! -1 – если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины

// let stringOne = "String number one"
// let stringTwo = "String number two"
// function returnLengthString(str1:string, str2:string) {
//     if (str1.length > str2.length) {
//         return 1
//     }
//     else if (str1.length < str2.length) {
//         return -1
//     }
//     return 0
// }
// console.log(returnLengthString(stringOne, stringTwo));

//! 2. Написать функцию, которая переводит в верхний 
//! регистр первый символ переданной строки.
// let stringLowerCase = "academy"
// function firstSymbolUpperCase(str:string) {
//     return str.split(""), str[0].toUpperCase() + str.slice(1)
// }
// console.log(firstSymbolUpperCase(stringLowerCase));

//! 3. Написать функцию, которая считает количество гласных букв в переданной строке.
// let string = "Азбука"
// function calcQuantityVowels(str:string) {
//     str = str.toLowerCase()
//     let quantityVolwels = 0
//     let arrayVolwels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"]
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < arrayVolwels.length; j++) {
//             if (str[i] == arrayVolwels[j]) {
//                 quantityVolwels++
//             }
//         }
// Второй способ
// if (arrayVolwels.includes(str[i])) {
// quantityVolwels++
// }
//     }
//     return(quantityVolwels);
// }
// console.log((calcQuantityVowels(string)));

//! 4. Написать функцию для проверки спама в переданной строке. 
//! Функция возвращает true, если строка содержит спам. 
//! Спамом считать следующие слова: 100% бесплатно, увеличение продаж, 
//! только сегодня, не удаляйте, ххх. Функция должна быть нечувствительна к регистру.

// let advertising = `Спамом считать следующие слова: 100% бесплатно`
// function searchSpam(str:string) {
//     let spamWords = ["100% бесплатно", "увеличение продаж", "только сегодня", "не удаляйте", "ххх"]
//     for (const el of spamWords) {
//         if (str.toLowerCase().includes(el)) {
//             return true
//         }
//     }
// Второй способ
// str = str.toLowerCase().split(" ")
// let spamWords = ["100%", "бесплатно", "увеличение", "продаж", "только", "сегодня", "не удаляйте", "ххх"]
// for (let i = 0; i < str.length; i++) {
//     if (spamWords.includes(str[i])) {
//         return true;
//     }
// }
// }
// console.log(searchSpam(advertising));

//! 5. Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. 
//! Если длина строки больше, чем максимальная, то необходимо отбросить лишние символы, 
//! добавив вместо них троеточие. Например: truncate(“Hello, world!”, 8) должна вернуть “Hello...” 

// let textStr = "Hello, people! How do you like my assignment?"
// function truncate(str:string, maxLength:number) {
//     return str.slice(0, maxLength) + "..."
// }
// console.log(truncate(textStr, 5));

//! 6. Написать функцию, которая проверяет, является ли переданная строка палиндромом.
// let palindrome = "Лепс спел" // Леша на полке клопа нашел
// function palindromeTrueAndFalse(str:string) {
//     let lowerStr = str.toLowerCase()
//     let reverseStr = lowerStr.split("").reverse().join("")
//     if (lowerStr == reverseStr) {
//         return(`${palindrome} - палиндром!`);
//     }
//     return (`${palindrome} - не палиндром!`);
// }
// console.log(palindromeTrueAndFalse(palindrome));

//! 7. Написать функцию, которая считает количество слов в предложении. 
// let text = "Леша на полке клопа нашел"
// function quantityWords(str:string) {
//     console.log(`В вашем предложении ${str.split(" ").length} слов!`);
// }
// quantityWords(text)

//! 8. Написать функцию, которая возвращает самое длинное слово из предложения.
// function returnLongestWord(str:string) { 
//     return str.split(" ").sort((a, b) => a.length - b.length).pop()
// }
// console.log(returnLongestWord(text));

//! 9. Написать функцию, которая считает среднюю длину слова в предложении. 
// function averageLengthWord(str:any) {
//     str = str.split(" ");
//     let arrayLengthWord = 0

//     for (let i = 0; i < str.length; i++) {
//         arrayLengthWord = (str[i].length+arrayLengthWord)
//     }
//     return (`Средняя длинна слова в предложении ${Math.round(arrayLengthWord/str.length)}`);
// }
// console.log(averageLengthWord(text));

//! 10. Написать функцию, которая принимает строку и символ и выводит индексы, 
//! по которым находится этот символ в строке. Также вывести, 
//! сколько всего раз встречается этот символ в строке.  
// let stringSymbol = "Курс $ упал до 78 ₽ аналитики обещают вновь скоро подорожание $"
// function quantitySymbol(str:string, symbol:string) {
//     let array = []
//     let accum = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == symbol) {
//             accum++
//             array.push(i)
//         }
//     }
//     return `Символ ${symbol} находится под индексом: ${array}. Количество повторений символа ${accum}`
// Второй способ 
// str = str.split(" ")
// console.log(str);
// let quantityRemoveSymbol = 0
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == symbol) {
//         quantityRemoveSymbol++
//     }
//     if (str[i] == symbol) {
//         console.log(`Символ ${symbol} находится под индексом: ${i}`);
//     }
//     else if (str[i] == symbol) {
//         console.log(`Символ ${symbol} находится под индексом: ${i}`);
//     }
// }
// console.log(`Количество повторений символа: "${symbol}" = ${quantityRemoveSymbol}`);
// }
// console.log(quantitySymbol(stringSymbol, "$"));


//! Строки 

// let str = "Hello"
// console.log(str.slice(0, 1) + "i");

// let str2 = "Hello my freind, how my are you?"
// console.log(str2.indexOf("aaa"));
// console.log(str2.indexOf("e", 2));
// console.log(str2.indexOf("my", 7));



//! Home Work 
//! Напишите функцию, возвращающую строку с заглавным первым символом. 
// function ucFirst(str:string) {
//     return str.split(""), str[0].toUpperCase() + str.slice(1)
// }
// let name = "viktor"
// console.log(ucFirst(name));

//! Напишите функцию checkSpam(str), возвращающую true, 
//! если str содержит 'viagra' или 'XXX', а иначе false. 
// let text = "viagra"
// function checkSpam(str:string) {
//     let lowerStr = str.toLowerCase()
//     if (lowerStr == "viagra" || lowerStr == "xxx") {
//         return true
//     }
//     return false
// }
// console.log(checkSpam(text));

//! Создайте функцию truncate(str, maxlength), которая проверяет длину строки str 
//! и, если она превосходит maxlength, заменяет конец str на "…", 
//! так, чтобы её длина стала равна maxlength. 
// let string = "Hello, my freinds! How do you like the weather today?"
// function truncate(str:string, maxLength:number) {
//     return str.slice(0, maxLength) + "..."
// }
// console.log(truncate(string, 17));

//! Создайте функцию, которая будет из строки выделять числовое значение и возвращать его. 
// let summa = "$120"
// function extractCurrencyValue(str:any) {
//     let number = str.split("")
//     let returnNumber:[] = [] // Счетчик
//     for (let i = 0; i < array.length; i++) {
//         if (number[i] >= 0){
//             returnNumber+=number[i];
//         }
//     }
//     return returnNumber
// }
// console.log(extractCurrencyValue(summa));

//! 1. Написать функцию, которая принимает строку и выводит статистику о ней: 
//! количество букв, количество цифр и количество других знаков.  
// let stringInfo = "Количество, 0951 строке" // 16 букв
// function showStatisticsString(str:any) {
//     let symbols = str.toLowerCase().split("")
//     let array = [] as any // строка без пробелов
//     let quantityLetters = 0 //счетчик букв
//     let quantitySymbols = 0 // символов
//     let quantityNums = 0 
//     for (let i = 0; i < symbols.length; i++) {
//         if (symbols[i] >= "а" && symbols[i] <= "я") {
//             quantityLetters++
//         }
//         if (symbols[i] == " " || symbols[i] == ",") {
//             quantitySymbols++
//         }
//     }
//     return `
//     Количество букв: ${quantityLetters}
//     Количество символов: ${quantitySymbols}
//     Количество цифр: ${stringInfo.length - quantityLetters - quantitySymbols}
//     `
// return symbols
// let symbols = str.split("") // разбиваем по каждому символу
// let quantityСommas = 0 //счетчик запятых
// let quantityNumbers = 0 //счетчик цифр
// for (let i = 0; i < symbols.length; i++) {
//     if (symbols[i] == ','){
//         quantityСommas++ 
//     }
//     if (symbols[i] >= 0) {
//         quantityNumbers++
//     }
// }
// let letters = str.split(" ") // разбиваем по пробелам
// let quantityLetters = 0 //счетчик всех символов
// for (let i = 0; i < letters.length; i++) {
//     let lettersInside = letters[i]
//     for (let j = 0; j < lettersInside.length; j++) {
//         quantityLetters++
//     }
// }
// let result = quantityLetters - quantityNumbers - quantityСommas

// console.log(`Количество "," в тексте: ${quantityСommas}`);
// console.log(`Количество цифр в тексте: ${quantityNumbers}`);
// console.log(`Количество букв в тексте: ${result}`);
// }a
// console.log(showStatisticsString(stringInfo));


//! 2. Написать функцию, которая принимает двузначное число
//! и возвращает его в текстовом виде. Например: 
//! 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.  
// let numUser = 55
// function numParseString(numUser:any) {
//     let massiveNums1 = ["ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"]
//     let massiveNums2 = ["десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девяднадцать"]
//     let massiveNums3 = ["двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"]
//     if (numUser >= 0 && numUser <= 9) {
//         return massiveNums1[numUser]
//     }
//     if (numUser<19) {
//         return massiveNums2[numUser-10]
//     }
//     if (numUser<=100) {
//         let firstNum = numUser.toString()[0]
//         let secondNum = numUser.toString()[1]
//         return massiveNums3[firstNum-2] + " " + massiveNums1[secondNum]
//     }
// }
// console.log(numParseString(numUser));

//! 3. Написать функцию, которая заменяет в полученной строке большие буквы на 
//! маленькие, маленькие – на большие, а цифры – на знак нижнего подчеркивания.
// let string1 = "LCPD 58 police"
// function replacementSymbols(str:any) {
//     let result = '';
//   for (let i = 0; i < str.length; i++) {
// if (str[i] >= '0' && str[i] <= '9') {
//       result += '_';
// }else if (str[i] == str[i].toLowerCase()) {
//     result +=str[i].toUpperCase()
// } else if (str[i] == str[i].toUpperCase()) {
//     result +=str[i].toLowerCase()
// }
// }

// return result;
// }

// if (str[i] >= 'A' && str[i] <= 'Z') {
//   result += str[i].toLowerCase();
// } 
// else if (str[i] >= 'a' && str[i] <= 'z') {
//   result += str[i].toUpperCase();
// } 
// else if (str[i] >= '0' && str[i] <= '9') {
//   result += '_';
// } 
// else {
//   result += str[i];
// }
// console.log(replacementSymbols(string1));

//! 4. Написать функцию, которая преобразует названия cssстилей с дефисом в 
//! название в СamelСase стиле: font-size в fontSize.

// let css = "font-size-ret-tt"
// function transformsСamelСase(str:string) {
//     str = str.split('-').map(str => str[0].toUpperCase() + str.slice(1)).join('')
//     return str[0].toLowerCase() + str.slice(1)
// }
// console.log(transformsСamelСase(css));

// //! 5. Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру.  
// let css1 = "cascading style sheets"
// function createAnAbbreviation(str:string) {
//     return str.split(' ').map(str => str[0].toUpperCase()).join('')
// }
// console.log(createAnAbbreviation(css1));

// //! 6. Написать функцию, которая принимает любое количество строк, 
// //! объединяет их в одну длинную строку и возвращает ее.  
// let array3 = ["String", "_", 'number', "_", 'one','werwser' ] as any
// function contactStrings(arr:[]) {
//     return arr.join("")
// }
// console.log(contactStrings(array3));

//! 7. Написать функцию – калькулятор. Функция принимает строку с примером, 
//! определяет, какое действие необходимо выполнить (+ - * /), 
//! переводит операнды в числа, решает пример и возвращает результат. 

// let example = "2213+342*454562"
// function calculator(str:any) {
//     let result = 0
//     let a = 0
//     let b = 0
//     let c = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= 0) {
//             a = str[i]
//             console.log(a);

//         }
//         if (str[i] == "+") {
//             result = str[i] + str[i]
//         }
//         else if (str[i] == "-") {

//         }
//         else if (str[i] == '/') {

//         }
//         else if (str[i] == "*") {

//         }


//     }
//     console.log(result);

// }
// console.log(calculator(example));


//! 9. Написать функцию, которая принимает строку и разделитель и возвращает 
//! массив подстрок, разбитых с помощью указанного разделителя. 
// let date = "09/04/2025"
// console.log('"' + date.replaceAll('/', '","') + '"');


//! Методы объекта this
// let cat = {
//     name: "Вася",
//     age: "5",
//     say: function () { // Это функция
//         console.log("мяу");  
//     },
//     walk() { // Это метод
//         console.log("кот гуляет");
//     },
//     feed: feed
// }
// cat.say();

// function feed () {
//     console.log("покоромить кота");
// }
// feed()

// cat.color = "black"
// console.log(cat);

// cat.eat = function () {
//     return "кот поел"
// }

// cat.run = () => {
//     return "кот побежал"
// }


// //! Конструктор оператор "new"  
// function User (name:string, city:string) {
//     this.name = name;
//     this.group = "Web45";
//     this.city = "Sochi"
// } 

// let user1 = new User("Viktor")
// console.log(user1.group);

// let user2 = new User("Andrey")
// console.log(user2);


//! Стрелочные функции
// function showSum(x:number, y:number) {

//     return x + y
// }
// console.log(showSum(3, 5));

// let summ = function showSum(x:number, y:number) {

//     return x + y
// }
// console.log(summ(3, 5));

// // Короткий тип записи
// let nult = (b:number, a:number) => {
//     return b*a
// }
// console.log(nult(5, 5));

// // Когда один параметр, круглые скобки можно опускать!
// let letter = a => {
//     return a
// }
// console.log(letter("буква"));

// // Убирая return можно убрать и фигурные скобки
// let letter2 = x => x
// console.log(letter2("БУКВА"));

// let showArray = (mass:number[]) => {
//     return mass.reduce((acc, el)=>acc+el)
// }
// console.log(showArray([2, 6, 7]));

// let age = 20
// console.log(age >= 18 ? 'вы взрослый' : "вы ребёнок");


//! Опциональная цепочка '?.'
// let car = {
//     country: "China",
//     year: 2024,
//     // extraInfo: {
//     //     color: 'white',
//     //     engine: '123 hourses'
//     // }
// }  
// console.log(car.extraInfo?.color);

// if (car.extraInfo) {
//     console.log(car.extraInfo.color);
// }
// else {
//     console.log(undefined);
// }

// //  Через тернарный оператор
// console.log(car.extraInfo ? car.extraInfo.color : undefined);

// console.log(`
// Страна: ${car.country},
// Год: ${car.year},
// Доп. инфо: ${car.extraInfo?.engine}
// `);


//! Home Work
//! Домашка WEB-47
//! Создать просто список дел, где пользователь может: Добавлять задачи (через prompt),
//! Выводить список всех задач, удалять задачи по номеру.
//! (Используйте переменные, объекты и условную конструкцию if else)

// let todoList = {
//     1: "уборка",
//     2: "мойка авто",
// }
// let taskCount = Object.keys(todoList).length;

// while (true) {
//     let userTask = prompt("Напишите задачу... или напишите 'стоп', чтобы сохранить список задач: ");
//     if (userTask == 'стоп') {
//         break
//     }
//     taskCount++; 
//     todoList[taskCount] = userTask;
// }
// console.log(todoList);

// let deleteTask = Number(prompt("Введите номер задачи, которую нужно удалить: "))
// if (deleteTask >= 1 ) {
//     delete todoList[deleteTask]
//     console.log(todoList);
// }

//! Конвертор валют. Реализовать программу, которая спрашивает у пользователя сумму в рублях
//! и предлагает выбрать валюту для конвертации (доллар, евро). Хранить курсы валют в объекте.
//! Добавить проверку на отрицательные числа

// function currencyExchange(summa:number, currency:string) {
//     let rate = {
//         eur : 0.011,
//         usd : 0.012,
//     }
//     summa = Number(prompt("Введите вашу сумму в рублях: "))
//     currency = String(prompt("Введите валюту, которую хотите получить: USD; EUR?")).toLowerCase()
//     if (currency == 'eur') {
//         return `С ${summa} рублей вы получите: ${(summa * rate.eur).toFixed(2)} евро.`
//     }
//     else if (currency == 'usd') {
//         return `С ${summa} рублей вы получите: ${(summa * rate.usd).toFixed(2)} долларов.`
//     }
//     else {
//         "Введите одну из предложенных валют корректно и на английском языке!"
//     }
// }
// console.log(currencyExchange());
//! ___________________________________________

//! Home Work WEB-45 
//! Создайте объект calculator (калькулятор) с тремя методами:
//! read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
//! sum() (суммировать) возвращает сумму сохранённых значений.
//! mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let calculate = {
//   read (a:number, b:number) {
//     console.log(a, b);
//   },
//   sum (a:number, b:number) {
//     console.log(a + b);
//   },
//   mul (a:number, b:number) {
//     console.log(a * b);
//   },
// };
// calculate.read(5, 6);
// calculate.sum(5, 6)
// calculate.mul(5, 6);

//! Создайте калькулятор при помощи конструктора, new Calculator 
// function Calculator() {
//     this.read = function (a:number, b:number) {
//       this.a = a;
//       this.b = b;
//       console.log(a, b);
//     };
//     this.sum = function (a:number, b:number) {
//         this.a = a;
//         this.b = b;
//         console.log(a + b);
//     }
//     this.mul = function (a:number, b:number) {
//         this.a = a;
//         this.b = b;
//         console.log(a * b);
//     }
// }
// let calc = new Calculator()
// calc.read(5, 8)
// calc.sum(10, 5)
// calc.mul(20, 5)

//! Создайте функцию-конструктор Accumulator(startingValue).
//! Объект, который она создаёт, должен уметь следующее:
//! Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
//! Метод read() должен использовать prompt для считывания нового числа и прибавления его к value. 

// function Accumulator(startingValue:number) {
//     let value = startingValue
//     this.read = function () {
//         this.value = Number(prompt("Сколько нужно добавить?: "))
//         console.log(value + this.value);
//     }
// }
// let accum = new Accumulator(1)
// accum.read()

//! Замените код Function Expression стрелочной функцией:
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );
// let ask = (question:string, yes:any, no:any) => {
//     confirm(question) ? yes() : no();
//   }
//   ask(
//     "Вы согласны?",
//     () => { alert("Вы согласились."); },
//     () => { alert("Вы отменили выполнение."); }
//   ); 

//   let a = 10
//   console.log(a);


//! Методы массивов ПОВТОРЕНИЕ!   
// const fruits = ['Список покупок:', 'Апельсин', 'Банан', 'Виноград', 'Арбуз', 'Хурма'];

// fruits.push('Итого: 3000 рублей'); // добавляет в конец массива
// fruits.unshift() // добавляет в начало массива
// fruits.shift() // удаляет в начале массива
// fruits.pop() // удаляет в конце массива
// // .splice(start, [deleteCount, item1, item2, ...]) - удаляет, добавляет эл-ы в любой части массива
// fruits.splice(1, 2); // Удаляем два элемента начиная с индекса 1
// fruits.splice(1, 0, '?', '?'); // Добавляем два новых элемента начиная с индекса 1
// fruits.splice(3, 2, '?', '?'); // Меняем два элемента начиная с индекса 3
// fruits.splice(2); // Удаляем все элементы начиная с индекса 2

// console.log(fruits);

// const animals = ['?', '?', '?', '?', '?'];
// // .slice() позволяет скопировать часть элементов в новый массив:
// // array.slice([start, end]);
// const wildAnimals = animals.slice(2, 4); // Формируем новый массив из диких животных
// const new_array = wildAnimals.concat(fruits) // объединяет несколько массивов в один 
// // и при необходимости позволяет добавить к ним любые дополнительные значения

// console.log(wildAnimals); // ['?', '?']
// console.log(new_array);


//! Конструктор оператор new
// function repared() {
//     console.log('Самолет отремонтирован!');
// }

// function Aircraft (model:any, age:number) {
//     this.model = model;
//     this.age = age; // динамические данные, меняются с каждой новой переменной
//     this.company = "Boeing"; // статические данные (не изменны)
//     this.country = "USA";
//     this.fuel = function () {
//         console.log('Самолет заправлен!');
//     }
//     this.fly = () => {
//         return "Самолет готов!"
//     };
//     repared:repared;
// }

// let aircraft1 = new Aircraft('Boeing 777', 12)
// console.log(aircraft1);
// let aircraft2 = new Aircraft('Boeing 999', 5)
// console.log(aircraft2);
// console.log(aircraft1);
// aircraft1.fuel()
// console.log(aircraft1.fly());
// repared();


// //! Классы: базовый синтаксис

// class Airplane {
//     country = "Russia";
//     city = 'Moscow'; // статические данные (не изменны)
//     constructor(model:any, year:number) {
//         this.model = model;
//         this.year = year; // динаимческие данные

//     }
//     fly() { // метод
//         console.log(`Самолет ${this.model} в пути`);

//     }
//     get year () {
//         return `${this._year}`
//     }
//     set year (value:any) {
//         if (value < 5) {
//             this._year = 'Самолет новый ' + value
//         }
//         else {
//             this._year = 'Самолет старый ' + value
//         }
//     }
// }

// let airplane1 = new Airplane('Boeing 777', 12)
// console.log(airplane1);
// console.log(airplane1.model);
// airplane1.fly();

// let airplane2 = new Airplane('Boeing 999', 5)
// airplane2.fly()

// console.log(typeof Airplane);
// console.log(Airplane.prototype.constructor == Airplane);


//! Home Work
//! Task 1 
//! Реализовать класс описывающий маркер.
let marker_text = document.getElementById("marker_text")
let info_about_marker = document.getElementById('info_about_marker') as HTMLDivElement

class Marker {
    constructor(color: string, ink: number) {
        this.color = color; // цвет маркера
        this.ink = ink; // Насколько символов хватит чернил
    }
    print(text: any) {
        // marker_text.style.color = this.color //! один из способов изменения css свойства
        // let symbols = text.split('')

        let numOpacity = this.ink
        for (let i = 0; i < text.length; i++) {
            console.log(1 - i / numOpacity);
            marker_text.innerHTML +=
                `<div style="color: ${this.color}; opacity: ${1 - i / numOpacity}"> ${text[i]}<br></div> <br>`
        }

        info_about_marker.innerHTML += `<br>
        Количество напечатанных символов: ${text.length} <br>
        Количество символов в чернилах: ${this.ink} <br>
        Цвет маркера: <span style="color:${this.color}">${this.color}</span> <br>
        <div id="battery">
             <div id="inner_battery" style="background-color: ${this.color}; height: 30px; width: ${this.ink}px;"></div>
         </div>
        `
    }
}

let marker1 = new Marker('red', 25)
marker1.print('New text')

let marker2 = new Marker('green', 40)
marker2.print('My city - Sochi')

let marker3 = new Marker('blue', 90)
marker3.print('My city - Sochi. I from is Rostov-On-Don')


//! Task 2
//! Реализовать класс PrintMachine
let btn = document.getElementById("btn") as HTMLDivElement
// let info_about_marker = document.querySelector('#info_about_marker') //! один из способов выввода информации в HTML файл


class PrintMachine {
    tag
    color
    fontFamily
    constructor(tag: any, color: string, fontFamily: string) {
        this.tag = tag
        this.color = color
        this.fontFamily = fontFamily
    }
    print(text: any) {
        btn.innerHTML += `<${this.tag} span style= " 
        color: ${this.color}; font-family: ${this.fontFamily};">${text}</${this.tag}>`
    }
}

let pencil = new PrintMachine('h1', 'green', 'monospace')
pencil.print('TEXT_TESt')

let pencil2 = new PrintMachine('h6', 'red', '')
pencil2.print("NEW_TEXT")


// let css1 = new CssClass('MyCss',)



// let marker1 = new Marker('Red', 20)
// marker1.print('12345678901234567890')

// let marker2 = new Marker('Green', 25)
// marker2.print("Текст от зеленого маркера")

// let marker3 = new Marker('Blue', 35)
// marker3.print("Текст от синего маркера под номером 3")


//! Object.keys, values, entries
//! Home Work
//! Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
//! Напишите функцию sumSalaries(salaries), которая возвращает сумму 
//! всех зарплат с помощью метода Object.values и цикла for..of.
//! Если объект salaries пуст, то результат должен быть 0. 
// let salaries = {
//     "John": 10_000,
//     "Pete": 30_000,
//     "Mary": 25_000,
// };

// function sumSalaries(obj:object) {
//     let sum = 0
//     for (const el of Object.values(obj)) {
//         sum += el
//     }
//     console.log(sum);
// }
// sumSalaries(salaries)

//! Напишите функцию count(obj), которая возвращает количество свойств объекта:
// function count(obj:object) {
//     return `Количество свойств в объекте: ${Object.keys(obj).length}`
// }
// console.log(count(salaries));


//! Деструктурирующее присваивание 

// let arr = ["Ilya", "Kantor"];
// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
// let [firstName, surname] = arr;
// console.log(firstName);
// console.log(surname);
// let userName = firstName
// console.log(userName);
// let Name1 = arr[0]
// console.log(Name1);


// let [trueName, forName] = "Viktor Gold".split(' ');
// console.log(forName);
// let user1 = trueName
// console.log(user1);

// Нежелательные элементы массива также могут быть отброшены с помощью дополнительной запятой:
// второй элемент не нужен
// let [name, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(title); // Consul

// let user = {};
// [user.name, user.surname] = "Ivan Ivanov".split(' ');
// console.log(user.name);
// console.log(user.surname);
// console.log(user);

// В предыдущей главе мы видели метод Object.entries(obj).
// Мы можем использовать его с деструктуризацией для цикличного перебора ключей и значений объекта:
// let user2 = {
//   name: "John",
//   age: 30
// };

// цикл по ключам и значениям
// for (let [key, value] of Object.entries(user2)) {
//   console.log(`${key}:${value}`); // name:John, затем age:30
// }

// Существует хорошо известный трюк для обмена значений двух переменных с использованием деструктурирующего присваивания:
// let guest = "Jane";
// let admin = "Pete";
// // Давайте поменяем местами значения: сделаем guest = "Pete", а admin = "Jane"
// [guest, admin] = [admin, guest];
// console.log(`${guest} ${admin}`); // Pete Jane (успешно заменено!)

// Остаточные параметры "..."
// Если мы хотим не просто получить первые значения, но и собрать все остальные, 
// то мы можем добавить ещё один параметр, который получает остальные значения, 
// используя оператор «остаточные параметры» – троеточие ("..."):
// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "Mikky"];
// // rest это массив элементов, начиная с 3-го
// console.log(rest[0]); // Consul
// console.log(rest[1]); // Mikky
// console.log(rest.length); // 2
// Переменная rest является массивом из оставшихся элементов.
// Вместо rest можно использовать любое другое название переменной, 
// просто убедитесь, что перед переменной есть три точки и 
// она стоит на последнем месте в деструктурирующем присваивании.

// let userName1 = 'Andrey'
// let [name3 = userName1, surname1 = "Anonymous"] = [];
// console.log(name3);

// let options = {
//     type: "Menu",
//     width: 100,
//     height: 200
// };

// let {type, width, height} = options;
// console.log(type); // Menu
// console.log(width); // 100
// console.log(height); // 200

//Если мы хотим присвоить свойство объекта переменной с другим названием, 
// например, свойство options.width присвоить переменной w, 
// то мы можем использовать двоеточие:
// let options2 = {
//     type1: "Menu",
//     width: 100,
//     height: 200
//   };
// { sourceProperty: targetVariable }
//   let {width: w, height: h, type1} = options2;
// width -> w
// height -> h
// type1 -> type1
//   console.log(type1); // Menu
//   console.log(w); // 100
//   console.log(h); // 200 

//   let options3 = {
//     title1: "Menu"
//   };
//   let {width1 = 100, height1 = 200, title1} = options3;
//   console.log(width1);
//   console.log(height1);
//   console.log(title1);

// В коде ниже prompt запросит width, но не title:
// let opt = {
//     title2: "Menu"
// };
// // let {width2 = prompt("width?"), title2 = prompt("title?")} = opt;
// console.log(width1); // Menu
// console.log(title1); // (результат prompt)
// // Мы также можем совмещать : и =:

// console.log('________________________');

// let opt1 = {
//   title3: "Menu"
// };
// let {width2: w1 = 100, height2: h1 = 200, title3} = opt1;
// console.log(title3); // Menu
// console.log(w1); // 100
// console.log(h1); // 200

//! Деструктурирующие присваивание ДОМАШНЯЯ РАБОТА
// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// let user3 = {
//     name: "John",
//     years: 30
// };

// let {name, years: age, isAdmin = false} = user3
// console.log(name);
// console.log(age);
// console.log(isAdmin);

//! У нас есть объект salaries с зарплатами:
//   Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//   Если объект salaries пустой, то нужно вернуть null.
//   Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
//   P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение. 

// let salaries = {
//     "John": 10000,
//     "Pete": 30000,
//     "Mary": 30000
// };

// function topSalary(list:{}) {
//     let maxSalary = 0
//     let stufName = null

//     for (const [name, num] of Object.entries(list)) {
//         if (num > maxSalary) {
//             maxSalary = num
//             stufName = name
//         }
//     }
//     return stufName
// }
// console.log(topSalary(salaries));


//! Прототипное наследование
// let transport = {
//     year: 5,
//     color: 'blue',
//     drive() {
//         console.log("Можем управлять");
//     },
// } 

// let bus = {
//     number: 105,
// }

// let car = {
//     doors: 4,
//     __proto__ : transport // Второй способ присвоения прототипа
// }

// bus.__proto__ = transport // Первый способ присвоения прототипа
// console.log(bus);

// car.__proto__ = transport
// console.log(car);

// if (car.year == 5 ) {
//     console.log("Совпадение");
// }

// console.log(car); // собственные свойства
// console.log(car.__proto__); // присвоенные свойства
// car.drive()

// console.log(Object.keys(car)); // Показывает только собственные ключи
// for (const key in car) {
//     console.log(key);
//     // Показывает все ключи, включая присвоенные
// }


//!Prototype Домашняя Работа
// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства
// выполнялся по следующему пути: pockets → bed → table → head. 
// Например, pockets.pen должно возвращать значение 3 (найденное в table), 
// а bed.glasses – значение 1 (найденное в head).
// let head = {
//     glasses: 1
// };

// let table = {
//   pen: 3,
//   __proto__ : head
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__ : table
// };

// let pockets = {
//   money: 2000,
//   __proto__ : bed
// };
// console.log(pockets.pen);
// console.log(bed.glasses);

//! У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); 
//! оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

// let hamster = {
//   stomach: [],

//   eat(food) {
//     // this.stomach.push(food);
//     this.stomach = [food] 
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// }; 

// speedy.eat('Яблоко')
// console.log(speedy.stomach);
// console.log(lazy.stomach);


// STASHCHUCK Объекты
// const product_1 = 'Milk'
// const product_2 = 'Bread'
// let myCity = {
//     city: 'Moscow',
//     product_1,
//     product_2,
//     cars: {
//         color: 'white',
//         model: 'KIA'
//     }
// }
// let popular = 'very big'
// myCity[popular] = 'New'

// console.log(myCity);
// console.log(popular);

// const town = myCity // ссылаемся на объект
// town.product_1 = 'chees' // изменив копию, мы изменяем изначальный объект 
// console.log(myCity.product_1);

// Как изменить копию объекта, не изменяя изначальный объект
// const myCity_2 = Object.assign({}, myCity)
// myCity_2.product_1 = 'eggs'
// console.log(myCity.product_1);
// console.log(myCity_2.product_1);

// Этот вариант подходит, если внутри изначального объекта нет вложенных объектов

// Второй вариант так же для объекта без вложенных объектов внутри
// const town_2 = {...myCity}
// town_2.city = 'New-York'
// console.log(town_2.city);
// console.log(myCity.city);
// town_2.cars.color = 'blue'
// console.log(myCity.cars.color); // Мы видим, что вложенный объект тоже изменился

// Вариант 3 позволяет создать копию объекта и полностью избежать мутаций.
// const city = JSON.parse(JSON.stringify(myCity)) 
// // Мы добиваемся того, что ссылки на вложенные объекты в изначальном объекте не сохраняются
// city.cars.color = 'red'
// console.log(myCity.cars.color); // Свойство во вложенном объекте не изменилось на 'red'


//! Прототипы, наследование
//! Встроенные прототипы
//! Object.prototype
// console.log(Object.prototype);
// console.log(Array.prototype); // Просмотор методов
// console.log(Number.prototype);
// console.log(String.prototype);
// console.log(Date.prototype);

// let person = {
//     name : 'Петя',
//     age : 20,
// }

// let mass = [1, 2, 3]

// console.log(person.__proto__ == Object.prototype);
// console.log(person);
// console.log(mass.toString());

// let number = 5
// console.log(number);
// Number.prototype.show = () => {
//     console.log("Создали новый метод");
// }
// number.show()
// let string = 'Строка'
// console.log(string.length);


//! Наследование классов
//! Ключевое слово extends
class City {
    name
    age
    constructor(name = "Sochi", age = 286) {
        this.name = name
        this.age = age
    }
    welcome() {
        return "Добро пожаловать в " + this.name;
    }

}
let city_1 = new City()
console.log(city_1.welcome());

class Country extends City {
    countryName
    constructor(name: string, age: number, countryName: string) {
        super(name, age)
        this.countryName = countryName
    }
    population(people: number) {
        return `${super.welcome()} Население города ${this.name} = ${people}` // Возвращаем родительский метод
        //! super работает ТОЛЬКО ВНУТРИ КОНСТРУКТОРА! 
    }
    welcome() { // Перезаписали метод
        return "Приветствуем вас в городе " + this.name;
    }
}

let country = new Country('Moscow', 1000, "Russia")
console.log(country.welcome());
console.log(country.population(13_000_000));


//! STASHCHUCK Функции
let building = {
    name: 'ЖК Новый Сочи',
    constructionPeriod: 5,
}
function increase(obj: any) {
    const updatedBuilding = Object.assign({}, obj) // Таким образом мы НЕ меняем внешний объект, а создаем новый, копируя свойства прежнего объекта
    updatedBuilding.constructionPeriod += 1
    return updatedBuilding
} // Внутри функции не рекомендуется менять внешние объекты
console.log(increase(building));


//! Task 3 
//! Реализовать класс Button, который содержит ширину, высоту, текст кнопки 
//! и метод showBtn(), который выводит кнопку на экран с помощью тега button
class Button {
    width
    height // для того, чтобы TypeScript не подчеркивал
    background
    constructor(width: number, height: number, background: string) {
        this.width = width
        this.height = height
        this.background = background
    }
    showBtn(value: string) {
        btn.innerHTML += `<button style="width: ${this.width}px; 
        height: ${this.height}px; background: ${this.background};">${value}</button>`
    }
}

let button1 = new Button(150, 50, 'red')
button1.showBtn('Добавить')

let button2 = new Button(80, 40, 'green')
button2.showBtn('Удалить')

let button3 = new Button(120, 60, 'gold')
button3.showBtn('Переместить')

//! Реализовать класс BootstrapButton, унаследовав его от класса 
//! Button. Добавить поле color и переопределить метод showBtn() 
//! так, чтобы кнопка выводилась со стилями и указанным цветом. 

class BootstrapButton extends Button {
    color
    constructor(width: number, height: number, background: string, color: string) {
        super(width, height, background)
        this.color = color
    }
    showBtn(value: string) {
        btn.innerHTML += `<button style="width: ${this.width}px; 
        height: ${this.height}px; background: ${this.background};
        color: ${this.color}">${value}</button>`
    }
}

let button4 = new BootstrapButton(200, 80, 'black', 'gold')
button4.showBtn("VIKTOR_GOLD")

//! Task 4. Реализовать класс, который описывает css класс. 
//! Класс CssClass должен содержать внутри себя:
//! ■ название css класса;
//! ■ массив стилей;
//! ■ метод для установки стиля;
//! ■ метод для удаления стиля;
//! ■ метод getCss(), который возвращает css код в виде строки.
let classCss = document.getElementById('classCss') as HTMLDivElement
let newString = ''
let newString2 = ''
class CssClass {
    name
    cssArray
    constructor(name: string, cssArray: any[]) {
        this.name = name;
        this.cssArray = cssArray

    }
    setStyle(value: string) {
        for (const el of this.cssArray) {
            for (const key in el) {
                newString += key + ': ' + el[key] + '; '
                newString2 += key + ': ' + el[key] + '; ' + '<br>'
            }

        }
        classCss.innerHTML += `<div class="${this.name}" style="${newString}">${value}</div>`
    }
    deleteStyle(num: number) {
        delete this.cssArray[num]
    }
    getCss() {
        console.log(newString);
        classCss.innerHTML += newString2 + "<br>"
    }
}

let myClass = new CssClass('myClass', [
    { background: 'gray' },
    { color: 'orange' },
    { width: '200px' },
    { height: '80px' },
    { 'font-size': '30px' },
]);
myClass.deleteStyle(1)
console.log(...myClass.cssArray);
console.log(myClass.setStyle('Новый стиль'));
myClass.getCss()


//! Data
let dates = new Date()
console.log(dates.getMilliseconds());
console.log(dates.toLocaleString());
console.log(dates.toLocaleTimeString());

let dateOfBirth = new Date('1999-03-02')
console.log(dateOfBirth);
console.log(Date.prototype);

console.log(dates.getTime());
console.log(Date.now());


function getWeekyDay(dat1: any) {
    let array1 = ["Вс", 'Пн', "Вт", "Ср", "Чт", "Пт", "Сб"]
    console.log(array1[dat1.getDay()]);
}
getWeekyDay(new Date(2012, 0, 3))
getWeekyDay(new Date(2025, 4, 5))


//! Реализовать класс описывающий новость (Заголовок, текст, массив тегов, 
//! дата публикации). В классе необходимо реализовать один метод print,
//! который выводит всю информацию в таком виде, как на рисунке 1.
let today1 = new Date()
let new_post = document.getElementById('new_post') as HTMLDivElement
class NewPost {
    header
    tag
    date
    constructor(header:any, tag:string, date:any) {
        this.header = header
        this.tag = tag
        this.date = date
    }
    print(nameHeader:any, text:any) {
        let day = today1.toLocaleDateString()
        let todayString = day.split('.').reverse().join("") as any;
        let userDay = this.date.split(', ').join("")
        console.log(todayString);
        console.log(userDay);

        let newsDate = '' //! дата публикаци новости

        if (todayString-userDay == 0) {
            newsDate = 'Сегодня'
        }
        else if(todayString-userDay <= 7) {
            newsDate = `${todayString-userDay} ${todayString-userDay <= 4 ? 'дня' : 'дней'}`
        }
        else if(todayString-userDay > 7){
            newsDate = this.date.split(', ').reverse().join('.')
        }
        
        new_post.innerHTML += `<${this.header}>${nameHeader}</${this.header}>
        <p>${newsDate}</p>
        <${this.tag}>${text}</${this.tag}>`
        
    }
    // tag
    // tagArr = ['<h1>', '</h1>', '<p>', '</p>']
    // constructor(tag: string) {
    //     this.tag = tag
    // }
    // print(text: any) {
    //     if (this.tag == 'h1') {
    //         new_post.innerHTML += `${this.tagArr[0]} ${text} ${this.tagArr[1]}`
    //     }
    //     if (this.tag == 'p') {
    //         new_post.innerHTML += `${this.tagArr[2]} ${text} ${this.tagArr[3]}`
    //         // new_post.innerHTML += `<${this.tag}></${this.tag}>`
    //     }
    // }
}

let new1 = new NewPost('h1', 'p', '2025, 05, 12')
new1.print('Новость первая', "Сегодняшняя новость")

let new2 = new NewPost('h1', 'p', '2025, 05, 9')
new2.print("Новость вторая", "На параде 9 мая присутсвовала техника с ближнего востока")

let new3 = new NewPost('h1', 'p', '2025, 03, 9')
new3.print("Новость третья", "Что произошло в марте?")

//! Task 2. Реализуйте класс ExtendedDate. 
//! Метод для вывода даты (числа и месяца) текстом.
//! Метод для проверки - прошедшая (false) или будущая и текущая дата (true) 
//! Метод для проверки високосный год или нет
//! Метод возвращает следующую дату.
//! Выведите на экран результат работы   
let today = new Date()
class ExtendedDate {
    year
    month
    day
    constructor(year:number, month:number, day:number) {
        this.year = year
        this.month = month
        this.day = day
    }
    // Метод для вывода даты (числа и месяца) текстом.
    printDate(){
        let days = ["первое", "второе", "третье", "четвертое", "пятое", 
                    "шестое", "седьмое", "восьмое", "девятое", "десятое",
                    "одиннадцатое", "двенадцатое", "тринадцатое", "четырнадцатое",
                    "пятнадцатое", "шестнадцатое", "семнадцатое", "восемнадцатое",
                    "девятнадцатое", "двадцатое"]
        let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", 
                      "августа", "сентября", "октября", "ноября", "декабря"]

        if (this.day >= 1 && this.day <= 20) {
            console.log(days[this.day-1], months[this.month-1]);
        }
        else if (this.day < 30) {
            console.log(`двадцать ${days[this.day-21] + " " + months[this.month-1]}`);
        }
        else if(this.day == 30) {
            console.log(`тридцатое ` + months[this.month-1]);
        }
        else if(this.day == 31) {
            console.log(`тридцать первое ` + months[this.month-1]);
        }
        else {
            console.log("Введите корректные данные!");
        }
    }
    // Метод для проверки - прошедшая (false) или будущая и текущая дата (true) 
    checkDate() {
        let dateStr = `${this.year}${this.month<10 ? 0 + '' + this.month : this.month}${this.day<10 ? 0 + '' + this.day : this.day}`
        // console.log(dateStr);
        let todayStr = `${today.getFullYear()}0${today.getMonth()+1}${today.getDate()<10 ? 0 + '' + today.getDate() : today.getDate()}`
        // console.log(todayStr);
        console.log(todayStr>=dateStr ? 'Дата прошедшая' : "Дата будущая");
    }
    // Метод для проверки високосный год или нет
    checkLeapYear() {
        this.year%4==0 ? console.log('Год високосный') : console.log("Год не високосный");
    }
} 
let day1 = new ExtendedDate(2025, 12, 26)
day1.printDate()
day1.checkDate()
day1.checkLeapYear()


//! Планирование: setTimeout и setinterval
// setTimeout(() => {
//     console.log('Hello');
// }, 2000);

// setTimeout(() => {
//    function test() {
//     console.log('test');
//    } 
//    test()
// }, 2000);

// setInterval(() => { // выводится постоянно через определенный интервал
//     alert("Не удали")
// }, 2000)

// setTimeout(() => {
//     new_post.style.display = 'none'
// }, 3000);

// setTimeout(() => {
//     new_post.style.display = 'block'
// }, 5000);

// function hi() {
//     console.log('Привет');
// }
// setTimeout(() => { // Первый способ вызова функции
//     hi()
// }, 2000);

// setTimeout(hi, 2000) // Второй способ вызова функции ! не рекомендуется !

// // Отмена через clearTimeout
// let timeId = setInterval(() => console.log('tick'), 2000);
// // Отсановить вывод
// setTimeout(() => {clearInterval(timeId); console.log('stop');}, 5000)

// let acc = 0
// let stop = setInterval(() => {
//     acc++
//     console.log(acc);
// }, 1000);

// setTimeout(() => {
//    clearInterval(1000); console.log(stop), 4000;

// }, 6000);


//! Get and Set
//! Задача на геттер и сеттер
//! Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
//! ■ поле, хранящее радиус окружности;
//! ■ get-свойство, возвращающее радиус окружности;
//! ■ set-свойство, устанавливающее радиус окружности;
//! ■ get-свойство, возвращающее диаметр окружности;
//! ■ метод, вычисляющий площадь окружности;
//! ■ метод, вычисляющий длину окружности.
//! Продемонстрировать работу свойств и методов.

class Circle {
    radius
    diameter = 0
    area = 0
    length = 0
    constructor(radius:number) {
        this.radius = radius
    }
    
    get circleRadius() : any {
        return `Радиус окружности = ${this.radius}`
    }
    set circleRadius(radius:number) {
        this.radius = radius
    }

    // диаметер
    get circleDiameter() { 
        this.diameter = this.radius*2
        return `Диаметр окружности = ${this.diameter}`
    }

    // площадь
    cirlceArea() { 
        this.area = Math.PI * this.radius*this.radius
        return `Площадь окружности = ${this.area.toFixed(1)}`
    }

    // длина
    circleLength() {
        this.length = Math.PI * this.diameter
        return `Длина окружности = ${this.length.toFixed(1)}`
    }
    
}

let circle = new Circle(8)
console.log(circle.circleRadius); 
circle.circleRadius = 10; // меняем радиус с помощью Set
console.log(circle.circleDiameter); // диаметер
console.log(circle.cirlceArea()); // площадь
console.log(circle.circleLength()); // длина

//! Задача на setTimeout и setInterval
//! При перезагрузке страницы у пользователя выскакивает реклама (модальное окно).
//! Задание:
//! - сделать так, чтобы пользователь мог закрыть рекламу по прошествии 10 секунд (выскакивает крестик).
//! - в модальном окне реализовать таймер, который будет отсчитывать время 
// let closeWindow = document.getElementById('timer') as HTMLDivElement
// for (let i = 10; i >= 1; i--) {
//     setTimeout(() => {
//         closeWindow.innerHTML = 'Закрыть через ' + i + ' секунд' 
//     }, (10 - i) * 1000);
// }
// setTimeout(() => {
//     document.getElementById('timer').style.display = 'none'
// }, 9990);

// setTimeout(() => {
//     document.getElementById('closeModalWindow').style.display = 'flex'
// }, 10000);

// document.querySelector('#closeModalWindow').onclick = function() {
//     document.getElementById("overlay").style.display = 'none'
// }

//! Реализовать класс, описывающий геометрическую фигуру со 
//! свойствами и методами: 
//! ■ get-свойство для получения названия фигуры;
//! ■ метод для вывода информации о фигуре (стороны и их длина);
//! ■ метод для вычисления площади фигуры; 
//! ■ метод для вычисления периметра фигуры.

class Figure {
    name
    side = 0
    length = 0
    perimeter = 0
    area = 0
    constructor(name:string, side:number, length:number) {
        this.name = name
        this.length = length
        this.side = side
    }
    get showNameFigure() : any {
        return `Фигура: ${this.name}`
    }
    showInfoFigure() {
        return (`Количество сторон у фигуры: "${this.name}" = ${this.side}; 
Длина одной стороны = ${this.length}`)
        }
        // площадь
        figureArea(radius:number) { 
            this.area = Math.PI * radius*radius
            return `Площадь круга = ${this.area.toFixed(1)}`
        }
        // периметр
        figurePerimeter() {
            return `Периметр фигуры = ${this.length}`
        }
        
    }
    
    let circle_0 = new Figure('круг', 1, 60)
    console.log(circle_0.showNameFigure);
    console.log(circle_0.showInfoFigure());
    console.log(circle_0.figureArea(2));
    console.log(circle_0.figurePerimeter());

//! Реализуйте классы-наследники: квадрат, прямоугольник и треугольник. 
//! Переопределите методы вывода и вычислений в классах-наследниках.

    //! Квадрат
    class Square extends Figure {
        width
        constructor(name:string, side:number, length:number, width:number) {
            super(name, side, length)
            this.width = width
        }
        // Площадь
        figureArea() { 
            this.area = this.length*this.width
            return `Площадь фигуры: "${this.name}" = ${this.area}`
        }
        // Периметр
        figurePerimeter() {
            this.perimeter = this.length+this.length+this.width+this.width
            return `Периметр фигуры: "${this.name}" = ${this.perimeter}`
        }
    }
    
    let square = new Square('Квадрат', 4, 5, 5)
    console.log(square.showNameFigure);
    console.log(square.showInfoFigure());
    console.log(square.figureArea());
    console.log(square.figurePerimeter());
    
    //! Прямоугольник
    class Rectangle extends Square {
        constructor(name:string, side:number, length:number, width:number) {
            super(name, side, length, width)
        }
        showInfoFigure() {
            return (`Стороны фигуры: "${this.name}" = ${this.side}; 
                Длина стороны = ${this.length}
                Ширина стороны = ${this.width}`)
            }
        }
        
        let rectangle = new Rectangle('Прямоугольник', 4, 10, 8)
        console.log(rectangle.showNameFigure);
        console.log(rectangle.showInfoFigure());
        console.log(rectangle.figureArea());
        console.log(rectangle.figurePerimeter());
        
//! Треугольник
class Triangle extends Figure {
    height
    constructor(name:string, side:number, length:number, height:number){
        super(name, side, length)
        this.height = height
    }
    // площадь
    figureArea() { 
        this.area = this.height*this.length/2
        return `Площадь треугольника = ${this.area.toFixed(1)}`
    }
    // периметр
    figurePerimeter(side2:number, side3:number) {
        this.perimeter = this.side + side2 + side3
        return `Периметр треугольника = ${this.perimeter}`
    }
}

let triangle = new Triangle('Треугольник', 3, 7, 9)
console.log(triangle.showNameFigure);
console.log(triangle.showInfoFigure());
console.log(triangle.figureArea());
console.log(triangle.figurePerimeter(8, 10));

//! Создайте массив с различными фигурами и выведите информацию о каждой фигуре, включая площадь и периметр. 
let figuresArray = [circle_0, triangle, square, rectangle]
console.log(figuresArray[0]);
console.log(figuresArray[1]);
console.log(figuresArray[2]);
console.log(figuresArray[3]);

        
        
//! Создайте класс Spaceship с характеристиками:
//! name — название корабля (публичное поле)
//! fuel — уровень топлива (приватное поле, начальное значение = 100).
//! speed — текущая скорость (приватное поле, начальное значение = 0).

//! Методы:
//! launch() — увеличивает скорость до 50 и уменьшает топливо на 10.
//! refuel() — добавляет топливо (не больше 100)
//! getStatus — возвращает строку состояния ("Корабль [X] летит на
//! скорости [Y] с топливом [Z]%").  

let ship = document.getElementById('spaceship') as HTMLDivElement // Фон (для запуска анимации при старте корабля)
let nameShip = document.getElementById('name') as HTMLElement // Первичный заголовок для пользователя
let spaceShipImg = document.getElementById('spaceShipImg') as HTMLElement // Image корабля
let fuel_block = document.getElementById("fuel_block") as HTMLDivElement // Бегущий индикатор топлива
let events = document.getElementById('events') as HTMLElement // Строка событий
let inputNameShip = document.getElementById('name_ship') as HTMLElement // Имя корабля введеное пользователем
let btnEnter = document.getElementById('btnEnter') as HTMLDivElement // Кнопка Enter рядом с input
let ship_control_panel = document.getElementById('ship_control_panel') as HTMLElement // Панель управления кораблем

class Spaceship {
    name
    fuel = 200
    speed = 0
    distance = 0
    timeAnim = 60 // Время анимации передвижения фона, будет варироваться 3-60 зависит от скорости корабля 
    constructor(name:string, fuel = 200, speed = 0, distance = 0) {
        this.name = name
        this.fuel = fuel
        this.speed = speed
        this.distance = distance

        // Получаем имя корабля от пользователя + действия при Enter
        // Подключаем кнопу Enter на клавиаутре
        inputNameShip.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            // Условие для пустого input
            if (inputNameShip.value == false) { 
                nameShip.innerHTML = 'Корабль не полетит без названия!' // Отправляем строку в зголовок
                nameShip.style.color = 'rgb(201, 38, 38)' // меняем цвет заголовка
            }
            // Есть имя корабля
            else {
                name = inputNameShip.value // Присваиваем переменной name - значение пользователя
                nameShip.innerHTML = name // Отправляем имя корабля в заголовок #name
                inputNameShip.style.display = 'none'// убираем input
                ship_control_panel.style.opacity = '1' // Открываем панель управления
                events.style.marginTop = '480px' // Строка событий
                nameShip.style.color = 'gold' // Меняем цвет, на случай если пользователь отправил input пустым
                btnEnter.style.display = 'none' // Убираем кнопку Enter
            }
        }
        })
        // Проделываем тоже самое с кнопкой на странице
        btnEnter.addEventListener('click', function () {
            if (inputNameShip.value == false) {
                nameShip.innerHTML = 'Корабль не полетит без названия!'
                nameShip.style.color = 'rgb(201, 38, 38)'
            }
            else {
                name = inputNameShip.value 
                nameShip.innerHTML = name
                inputNameShip.style.display = 'none'// убираем input
                ship_control_panel.style.opacity = '1' // Открываем панель управления
                events.style.marginTop = '480px' // Строка событий
                nameShip.style.color = 'gold'
                btnEnter.style.display = 'none'
            }
        })
        // Условие для будущего расчета дистанции 
        setInterval(() => {
            if (this.speed >= 0 && this.speed <= 1000 && this.fuel > 1) {
                this.distance += this.speed // расстояние пройденное за секунду
            }
            }, 1000);
    } // конец конструктора

    //! Движение и топливо корабля
    // Метод для разгона корабля
    launch() { 
        if (this.speed >= 0 && this.speed < 1000 && this.fuel > 1) {
            this.speed += 50 //! 50 шаг скорости корабля (максимальная скорость = 1000)
            // Условие для вычета остатков топлива, чтобы топливо не стало отрицательныи
            if (this.fuel < 10) {
                this.fuel -= this.fuel;
            } // Ранее когда топлива оставалось 5 единиц, бак автоматически пополнялся
            else {
                this.fuel -= 10 //! Шаг вычета бензина на 50км/c приходится 10 единиц топлива
            }
            events.innerHTML = `События: Повышение скорости на: 50, скорость: ${this.speed}` // Строка событий
            //! Бегущий индикатор топлива
            fuel_block.innerHTML = `<div style="background-color: rgb(1, 183, 1); height: 30px; width: ${this.fuel}px;"></div>`
            fuel_block.style.backgroundColor = 'transparent' // убираем цвет при бегущем индикаторе топлива
            ship.style.animationPlayState = 'running' // Запускаем движение фона
            // Движение фона при наборе скорости
            if (this.timeAnim > 3) {
                this.timeAnim -= 3 // при каждом шаге в 50км/с фон движется быстрее на 3 секунды
                ship.style.animationDuration = `${this.timeAnim}s`
            }
        }
        if (this.speed >= 1000) {
            events.innerHTML = "События: Достигнута максимальная скорость!" // Строка событий
        }
        return this.colorFuel(), this.lowFuelLevel() // Методы анимации и информация о топливе
        // console.log(this.speed);
        // console.log(this.fuel);
    }

    // Понизить скорость корабля
    reduceSpeed() {
        if (this.speed > 0 && this.fuel > 0) {
            this.speed = Math.max(this.speed-50, 0) // Минимальное значение скорости = 0
            // Прибавление дистанции в три раза меньше чем при наборе скорости (ТОРМОЗНОЙ ПУТЬ)
            this.distance += this.speed / 3 
            this.fuel = this.fuel-5 // Потеря 5 единиц топлива при торможении
            //! Бегущий индикатор топлива
            fuel_block.innerHTML = `<div style="background-color: rgb(1, 183, 1); height: 30px; width: ${this.fuel}px;"></div>`
            events.innerHTML = `События: Снижаем скорость на: 50, скорость: ${this.speed}` // Строка событий
        } 
        // Движение фона при потере скорости
        Math.max(0, this.timeAnim) // минимальное число переменной = 0
        if (this.speed == 0) {
            ship.style.animationDuration = `0s`// Останавлиаваем фон при нулевой скорости
        }
        else if (this.timeAnim > 0) {
            this.timeAnim += 3 // при каждом шаге в 50км/с фон движется медленнее на 3 секунды
            ship.style.animationDuration = `${this.timeAnim}s`
        }
        return this.lowFuelLevel(), this.colorFuel() // Анимация и информация о топливе
    }

    // Заправка корабля
    refuel() {
        // Улсовие для не полного бака
        if (this.fuel < 200) {
            this.fuel = Math.min(this.fuel + 50, 200) // Максимальный объем бака 200 единиц
            // Условие для заправляемого бака
            if (this.fuel == 200) {
                events.innerHTML = 'События: Топливо полное!';
            }
            events.innerHTML = `Заправлено ${this.fuel}/200` // Строка событий
            // Бегущий индикатор топлива при заправке
            fuel_block.innerHTML = `<div style="background-color: rgb(1, 183, 1); height: 30px; width: ${this.fuel}px;"></div>`
        }
        // Условие для полного бака
        else if(this.fuel >= 200) {
            events.innerHTML = 'События: Топливо полное!';
        }
        return this.colorFuel() // Метод о цвете уровня топлива
    }

    // Цвет уровня топлива
    colorFuel() {
        if (this.fuel >= 61 && this.fuel <= 120) {
            fuel_block.innerHTML = `<div style="background-color: rgb(183, 183, 1); height: 30px; width: ${this.fuel}px;"></div>`
        }
        if (this.fuel >= 0 && this.fuel <= 60) {
            fuel_block.innerHTML = `<div style="background-color: rgb(183, 1, 1); height: 30px; width: ${this.fuel}px;"></div>`
        }
    }

    // Низкий уровень топлива
    lowFuelLevel() {
        if (this.fuel > 0 && this.fuel <= 60 && this.speed > 0) {
            events.innerHTML += `<span style="color: red;"> — Внимание: Осталось менее ${this.fuel/2}% топлива!!!</span>`
        }
        else if (this.fuel <= 1) {
            events.innerHTML = `<span style="color: red;"> У нас не осталось топлива!!!</span>`
        }
    }

    // Кнопка "Информация"
    get status() : string {
        return `Космический корабль: '${inputNameShip.value}' летит на скорости ${this.speed}км/с. Уровень топлива: ${this.fuel/2}%. Пройденная дистанция: ${Math.trunc(this.distance)}км`
    }
} // конец класса Spaceship
let spaceship = new Spaceship('Dead Space')

// Кнопка набора скорости
let moveShip = document.getElementById('right') as HTMLElement
moveShip.addEventListener('click', function () {
    spaceship.launch() // Метод набора скорости
})

// Кнопка сброса скорости
let reduceSpeedShip = document.getElementById('left') as HTMLElement
reduceSpeedShip.addEventListener('click', function () {
    spaceship.reduceSpeed() // Метод сброса скорости
})

// Движение корабля вверх
let up = document.getElementById('up') as HTMLElement
let moveUp = 130 // margin-top: 130px
up.addEventListener('click', function () {
    if (moveUp > -60) { // Корабль не может подняться выше "margin-top: -60px"
        moveUp -= 50 // При каждом клике корабль поднимается на 50px 
    }
    spaceShipImg.style.marginTop = moveUp + 'px' // Добавляем стили 
})

//! Подключение кнопок клавиатуры!? 
let yAcc = 0
let xAcc = 0
document.addEventListener('keydown', function (event) {
    if (event.key == 'ArrowUp') {
        event.preventDefault()
        yAcc-=10
        spaceShipImg.style.marginTop = yAcc + 'px'
        console.log(yAcc);
        
    }
    if (event.key == 'ArrowDown') {
        event.preventDefault()
        yAcc+=10
        spaceShipImg.style.marginTop = yAcc + 'px'
        console.log(yAcc);
        
    }
    if (event.key == 'ArrowLeft') {
        event.preventDefault()
        xAcc-=10
        spaceShipImg.style.marginLeft = xAcc + 'px'
        console.log(event.key);
        
    }
    if (event.key == 'ArrowRight') {
        event.preventDefault()
        xAcc+=10
        spaceShipImg.style.marginLeft = xAcc + 'px'
        console.log(xAcc);
        // spaceShipImg.style.top
        // spaceShipImg.style.left
    }
})

// Движение корабля вниз
let down = document.getElementById('down') as HTMLElement
down.addEventListener('click', function () {
    if (moveUp < 290) { // Корабль не может опуститься ниже "margin-top: 290px"
        moveUp += 50 // При каждом клике корабль опускается на 50px 
    }
    spaceShipImg.style.marginTop = moveUp + 'px' // Добавляем стили
})

// Кнопка заправки топливом
let refuelShip = document.getElementById('refuel') as HTMLElement
refuelShip.addEventListener('click', function () {
    spaceship.refuel() // Наш метод заправки 
})

// Кнопка информации о корабле
let info = document.getElementById('info') as HTMLElement
info.addEventListener('click', function () {
    // Возвращаем наши значения из get status в строку событий, добавляем стили
    // window.location.reload(); // Перехагрузка страницы
    return events.innerHTML = `<div style="color: red;">
    Информация: ${spaceship.status}</div>` 
})


// Контейнеры кнопок для "Информация" и "Заправить корабль"
let containers = document.querySelectorAll('.containers') 

// div космического корабля
let spaceIMGship = document.getElementById('spaceShipImg') as HTMLElement

// Кнопка запуска
let control_buttons = document.getElementById('control_buttons') as HTMLElement // кнопки управления
let fuel_level = document.getElementById('fuel_level') as HTMLElement // Весь fuel-индикатор
let stripe_fuel = document.getElementById('stripe_fuel') as HTMLElement // бордер fuel-индикатора
let start = document.getElementById('start') as HTMLElement
start.addEventListener('click', function () {
    if (start.innerHTML == 'Запуск') {
        start.innerHTML = `<div style="
    background-color: rgb(201, 4, 4);; 
    width: 100px; 
    height: 100px;
    display: flex; justify-content: center; 
    align-items: center;
    border-radius: 10px;
    box-shadow: 1px 1px 15px red;
    font-size: 18px; id="buttonReload"">Отключить</div>`
    
    spaceIMGship.style.opacity = '1'
    spaceIMGship.style.transition = '1.5s'
    events.style.opacity = '1'
    events.style.transition = '2s'
        setTimeout(() => {
            spaceIMGship.style.transition = '.2s'
        }, 1500);
    containers.forEach(el => {
        el.style.opacity = '1';
        el.style.transition = '4s';
    });

    // let buttonReload = document.getElementById('buttonReload') as HTMLButtonElement
    // buttonReload.addEventListener('click', ()=> {
    //         console.log(123);
            
    // })

    stripe_fuel.style.opacity = '1' // Бордер заправочного индикатора

    if (fuel_block.style.width <= '60px') { // Топливный бак при запуске
        fuel_block.style.backgroundColor = 'rgb(183, 1, 1)'
    }

    setTimeout(() => { // Задержка показа уровня топлива
        stripe_fuel.style.height = '30px' // Бордер индикатора
        stripe_fuel.style.transition = '2s'
        fuel_block.style.transition = '2s'// Индикатор
        // fuel_block.style.transition = '0s' //! Второй вид индикатора
        fuel_block.style.backgroundColor = 'green'
        fuel_block.style.width = '200px'
        
    }, 2000);

    
    control_buttons.style.opacity = '1' // Появление кнопок при запуске
    control_buttons.style.transition = '2s'
    // setTimeout(() => {
    //     refuelShip.style.opacity = '1'
    // }, 2000);
    fuel_level.style.opacity = '1'
    fuel_level.style.transition = '6s'
    }
    
    else {
        start.innerHTML = 'Запуск'
        spaceIMGship.style.opacity = '0'
        events.style.opacity = '0'
        control_buttons.style.opacity = '0'
        control_buttons.style.transition = '1s'
        containers.forEach(contain => {
            contain.style.opacity = '0';
            contain.style.transition = '2s' ;
        });
        fuel_level.style.opacity = '0'
        fuel_level.style.transition = '1s'
    }
})


//! Браузерное окружение, спецификации
console.log(window.innerHeight);
console.log(window.innerWidth);
// console.log(document.head);

//! Навигация по DOM-элементам
let nav = document.getElementById('control_buttons') as HTMLElement
console.log(nav.parentElement);
console.log(nav.children); // Предпочитаемый
console.log(nav.childNodes);
console.log(nav.firstChild);
console.log(nav.childElementCount); // Предпочитаемый
console.log(nav.childNodes[2]);
console.log(nav.firstElementChild);
console.log(nav.children[1]); // Предпочитаемый
console.log(nav.previousElementSibling); // Предыдущий соседний элемент
console.log(nav.nextElementSibling); // Следующий соседний элемент
console.log(nav.parentElement); // Родитель элемент
    

//! Поиск getElement* и querySelector*
let digitals = document.getElementById('digitals') as HTMLDivElement
console.log(digitals);
let num = document.querySelector('.num') //querySelector находит первый эл-т запроса 
console.log(num);
let num2 = document.querySelectorAll('.num')
console.log(num2); 
console.log(num2[2]);

// digitals.hidden = true //! Скрывает эллемент

let getEl = document.getElementsByClassName('num')
console.log(getEl);
let getEl2 = document.getElementsByTagName('div:lastChild')
console.log(getEl2);

console.log(digitals.closest('div'));

console.log(digitals.contains(num)); // digitals содержит num

// digitals.innerHTML = 'Hello' + '<br>' + '<br>'
// digitals.textContent = 'HI'
console.log(digitals.outerHTML); // Выводит вместе с кодом в виде строчки
// document.body.innerHTML = '' 


//! Home Work
//!Задание 1
//! Реализуйте класс ExtentedArray, унаследовав его от стандартного класса Array и добавив следующие методы:
//! ■ метод getString(separator) – для получения строки со
//! всеми элементами массива, перечисленными через указанный разделитель: запятая, тире, пробел и т. д.;
//! ■ метод getHtml(tagName) – для получения строки с html
//! кодом, где каждый элемент массива будет обернут в указанный тег (учтите, если указывается тег li, то все элементы дополнительно необходимо обернуть в ul).
//! Создайте объект класса ExtentedArray, заполните его данными и выведите на экран результаты работы методов getString()
//! и getHtml().
let task1 = document.querySelector('#task1') as HTMLDivElement
let arr = ['Олег', "Влад", "Андрей", "Кирилл", "Генадий"]
class Array {
    massive
    constructor(massive:any[]) {
        this.massive = massive
    }
    getString(symbol:string) {
        task1.innerHTML = `<div>${this.massive.join(symbol)}</div>`
        console.log(this.massive.join(symbol));
    }
    getHtml(tag:string) {
        let accLi = ''
        if (tag == 'li') {
            for (let i = 0; i < this.massive.length; i++) {
                accLi += `<${tag}>${this.massive[i]}</${tag}>` 
            }
            task1.innerHTML = `<ul>
            ${accLi}
            </ul>`
        }
        else {
            for (let i = 0; i < this.massive.length; i++) {
                task1.innerHTML += `<${tag}>${this.massive[i]}</${tag}>` 
            }
        }
    }
}
let extArr = new Array(arr)
extArr.getString(': ')
extArr.getHtml('li')



//! Задание 2
//! Реализовать класс, описывающий новостную ленту.
//! Класс должен содержать:
//! ■ массив новостей;
//! ■ get-свойство, которое возвращает количество новостей;
//! ■ метод для вывода на экран всех новостей;
//! ■ метод для добавления новости;
//! ■ метод для удаления новости;
//! ■ метод для сортировки новостей по дате (от последних новостей до старых);
//! ■ метод для поиска новостей по тегу (возвращает массив
//! новостей, в которых указан переданный в метод тег).
//! Продемонстрировать работу написанных методов. 
let task2 = document.querySelector('#task2') as HTMLDivElement
let arrayNews = ['Павел Дуров рассказал о своеме дедушке', "В России отметили 80 лет победы",
    "Погода к концу мая достигла отметки в 30 градусов"]
class newsList {
    massive
    constructor(massive:any[]) {
        this.massive = massive
    }
    
    get lengthNews() : string { // Количество новостей
        return `Количество новостей в списке: ${this.massive.length}`
    }

    getNews(){ // Вывод новостей на экран
        for (let i = 0; i < this.massive.length; i++) {
            task2.innerHTML += `<h1>${this.massive[i]}</h1>`
        }
    }
    
    pushNews(news:string){ // Добавление новости
        console.log(this.massive.push(news));
    }

    deletNews() { // Удаление новости
        this.massive.pop()
        console.log("Последняя новость удалена!");
        
    }
    
}

let news = new newsList(arrayNews) 
console.log(news.lengthNews); // Количество новостей
news.pushNews("Новая новость добавлена")
news.pushNews("Новая новость добавлена") // Добавление новости
news.deletNews() // Удаление новости
news.getNews() // Вывод новостей на экран



//! Task 3
let tableStuf = document.querySelector('#tableStuf') as HTMLTableElement
class Employee {
    name
    position
    salary
    constructor(name:string, position:string, salary:number) {
        this.name = name
        this.position = position
        this.salary = salary
    }
    getHtml() {
        tableStuf.innerHTML += `
        <tr>
          <td>${this.name}</td>
          <td>${this.position}</td>
          <td>${this.salary}</td>
        </tr>`
    }
}

let worker1 = new Employee('George Meat', 'Team Lead', 500_000)
let worker2 = new Employee('Dave Kapro', 'Senior', 350_000)
let worker3 = new Employee('Roberto Manchini', 'Junior', 200_000)

worker1.getHtml()
worker2.getHtml()
worker3.getHtml()

let add_worker = document.querySelector('#add_worker') as HTMLButtonElement
let new_worker = document.querySelector('#new_worker') as HTMLFormElement
let delete_worker = document.querySelector('#delete_worker') as HTMLButtonElement

add_worker.addEventListener('click', ()=> {
    tableStuf.innerHTML += `
        <tr>
          <td>${new_worker.children[0].value}</td>
          <td>${new_worker.children[1].value}</td>
          <td>${new_worker.children[2].value}</td>
        </tr>`
})

delete_worker.addEventListener('click', ()=> {
    new_worker.children[1] 
})

console.log(new_worker.children);

//! Новая тема 
console.log(new_worker.hasAttribute('id')); // Проверяет наличие атрибута
console.log(new_worker.getAttribute('id')) // Получает значения атрибута;
console.log(new_worker.setAttribute('class', 'newClass'));

new_worker.removeAttribute('id') // Удаляет атрибут
console.log(new_worker.getAttribute);


//! Изменение документа
let element = document.querySelector('#element') as HTMLDivElement

let new_elements = document.createElement('div')
new_elements.innerHTML = 'Append'
element.append(new_elements)

let divPrepend = document.createElement('div')
divPrepend.innerHTML = 'Prepend'
element.prepend(divPrepend)

let divBefore = document.createElement('div')
divBefore.innerHTML = ' Before'
element.before(divBefore)

let divAfter = document.createElement('div')
divAfter.innerHTML = ' After'
element.after(divAfter)

let cloneDiv = element.cloneNode(true) // Клонирование с детьми, если false, то копирует только элемент 
cloneDiv.textContent = 'TextContent'
console.log(cloneDiv);

let day = new Date()
console.log(day.getDay());


//! Стили и классы
let toggle = document.querySelector("#toggle") as HTMLButtonElement 
let remove = document.querySelector("#remove") as HTMLButtonElement
let add = document.querySelector("#add") as HTMLButtonElement

add.addEventListener('click', ()=> { // Добавляет класс
    document.body.classList.add('background') 
})
remove.addEventListener('click', ()=> { // Удаляет класс
    document.body.classList.remove('background') 
})
toggle.addEventListener('click', ()=> { // Переключатель
    document.body.classList.toggle('background') 
    console.log(document.body.className);  
})

//.classList.contains('название класса') - проверяет наличие класса
 

//! Home Work
//! Напишите интерфейс для создания списка.
//! Для каждого пункта:
//! Запрашивайте содержимое пункта у пользователя с помощью prompt.
//! Создавайте элемент <li> и добавляйте его к <ul>.
//! Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
//! Все элементы должны создаваться динамически.
//! Если пользователь вводит HTML-теги, они должны обрабатываться как текст.  

// let list_items = document.querySelector('#list_items') as HTMLUListElement
// while (true) {
//     let user = prompt('Введите пункт или отправьте пустую строку, чтобы завершить: ') as any
//     if (user == false){
//         break
//     }
//     else {
//         let newLi = document.createElement('li')
//         newLi.textContent = user
//         list_items.appendChild(newLi)
//     }
// }

//! Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
let container = document.querySelector('#container');
let elements = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

function createTree(contain:any, obj:{}) {
    let ul = document.createElement('ul')

    for (const key in obj) {
        let li = document.createElement('li')
        li.textContent = key

        if (Object.keys(obj[key]).length > 0) {
            createTree(li, obj[key])
        }

        ul.appendChild(li)
    }

    contain.appendChild(ul)
}
console.log(createTree(container, elements));



//! Размеры и прокрутка элементов
//! Метрики 
// let showParametrs = document.querySelector('#showParametrs') as HTMLDivElement
// // showParametrs.style.borderRadius = '20px'
// console.log(getComputedStyle(showParametrs).height); // getComputedStyle() - выводит параметры стилей
// console.log(showParametrs.clientHeight);
// console.log(showParametrs.offsetHeight);
// console.log(showParametrs.scrollHeight);

// console.log(document.body.clientHeight);
// console.log(document.body.clientHeight);

// let moveTopUp = document.querySelector('#moveTopUp') as HTMLButtonElement
// moveTopUp.addEventListener('click', ()=> {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth" //! Задает плавную прокрутку страницы 
//     })
// })


// let field = document.querySelector('#field') as HTMLDivElement
// let ball = document.querySelector('#ball') as HTMLImageElement

// let halfOfField = getComputedStyle(field).width // ширина поля
// console.log(halfOfField);
// let heightOfField = getComputedStyle(field).height // высота поля


// let halfOfBall = (getComputedStyle(ball).width) // ширина мяча
// console.log(halfOfBall);
// let heightOfBall = getComputedStyle(ball).height // высота мяча


// ball.style.marginLeft = (parseInt(halfOfField) - parseInt(halfOfBall)) / 2 + 'px'
// ball.style.marginTop = (parseInt(heightOfField) - parseInt(heightOfBall)) / 2 + 'px'

// field.addEventListener('click', ()=> {
    
// } )


//! mouseleave — при уходе курсора задает параметры
//! mouseenter — при наведении курсора задает параметры

//! Home Work
//! Task 1
let td = document.querySelectorAll("td")
for (let i = 0; i < td.length; i++) {
    td[i].addEventListener("mouseenter", () => { // mouseenter — при наведении меняет цвет
        td[i].style.background = 'pink'
    })

    td[i].addEventListener('mouseleave', () => { // mouseleave — при уходе курсора меняет цвет
        td[i].style.background = ''
    })
}

//! Task 2
let ban_user = document.querySelector('#ban_user') as HTMLParagraphElement
ban_user.addEventListener('contextmenu', function(event) {
  event.preventDefault();
}); 

//! Task 3
//! Создать html-страницу с кнопкой Like, при нажатии на которую увеличивается счетчик лайков. 
let button_like = document.querySelector("#button_like") as HTMLButtonElement
let accum_like = document.querySelector('#accum_like') as HTMLDivElement
let like_num = 0
button_like.addEventListener('click', () => {
    like_num++
    accum_like.textContent = like_num
})

//! Task 4
//! Создать html-страницу «Калькулятор». Реализовать его функциональность. 
let user_num = document.querySelector("#user_num") as HTMLInputElement
let buttons = document.querySelectorAll('#buttons_calc button')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        user_num.value += buttons[i].textContent
    })
//! Доделать на паре! 
    
}

//! Task 5
//! Создать html-страницу с меню, которое имеет выпадающие списки. 
//! Список с элементами подменю должен появляться по щелчку на соответствующий элемент меню.  
let li = document.querySelectorAll('.list') 
let inside_ul = document.querySelectorAll('#header_5 li ul') as any

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', () => {
        for (let j = 0; j < inside_ul.length; j++) {
            inside_ul[i].style.display = 'block'  
        }
    })

    li[i].addEventListener('mouseleave', () => {
        inside_ul[i].style.display = 'none'
    })
}

//! Task 6
//! Создать html-страницу со списком статей. При прокрутке страницы вниз
//! Более чем на 100 пикселей, справа внизу должна появиться кнопка Вверх  
//! Для быстрого перехода к началу страницы.  
let toTop = document.querySelector('#toTop') as HTMLButtonElement
window.addEventListener('scroll', () => {
    if (window.scrollY > 800) {
        toTop.style.display = 'block'
    }
    else {
        toTop.style.display = 'none'
    }
})

toTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})