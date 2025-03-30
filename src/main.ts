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

console.log("Первое задание");
let array = [2, 5, 9, 15, 0, 4]
for (let i = 0; i < array.length; i++) {
    if (array[i] > 3 && array[i] < 10) {
        console.log(array[i]);
    }
}


//! Дан массив с числами. Числа могут быть положительными и отрицательными. 
//! Найдите сумму положительных элементов массива.  
console.log("Второе задание");

let mas = [2, -1, 9, 3, -5]
let numberPositive = []
for (let i = 0; i < mas.length; i++) {
    if (mas[i] > 0) {
        numberPositive.push(mas[i])
    }
    
}
let result = 0
for (let i = 0; i < numberPositive.length; i++) {
    result += numberPositive[i]
}
console.log(result);

//! Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и 
//! оператора if проверьте есть ли в массиве элемент со значением, равным 4. 
//! Если есть - выведите на экран 'Есть!' и выйдите из цикла. 
//! Если нет - ничего делать не надо. 
console.log("Третие задание");

let massive = [1, 2, 5, 9, 4, 13, 4, 10]
for (let i = 0; i < massive.length; i++) {
    if (massive[i] == 4) {
        console.log(`Элемент ${4} есть`);
        break
    }
}

//! Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите 
//! на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
console.log("_________________");
console.log("Четвертое задание");

let massiveNumber = [10, 20, 30, 50, 235, 3000]
for (let i = 0; i < massiveNumber.length; i++) 
    massiveNumber.toString




