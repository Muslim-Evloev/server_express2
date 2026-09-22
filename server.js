const express = require('express')//подключили библиотеку express
const app = express()// запустили express

const PORT = 3000;// Обозначить порт для дальнейшего запуска

app.get('/' , (req , res)=>{//создаём get запрос  для получения главной страницы
    res.send("Главная страница")// отправляем клиету ответ respons
})
app.get ('/about' , (req , res)=>{
    res.send("О нас")
})
app.get ('/contact' , (req , res)=>{
    res.send("Контакт")
})
app.get('/product/:id' , (req , res)=>{
    console.log(req.params);
    res.send(`Товар с id: ${req.params.id}`)
    
})
app.get('/phone/:number' , (req , res)=>{
    console.log(req.params);
    res.send(`Ваш номер телефона: ${req.params.number}`)
    
})

app.listen(PORT , ()=>{// нгастраиваем сервер на чем он будет запущен
    console.log(`Сервер успешно запущен по адресу 127.0.0.1:${PORT}`);
    
})