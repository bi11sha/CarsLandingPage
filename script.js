document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert("Подробности о модели будут добавлены позже!");
    });
});

document.querySelector('.models-btn').addEventListener('click', function () {
    document.querySelector("#models").scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.submit-btn').addEventListener('click', function () {
    alert("Сообщение отправлено!");
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert("Подробности о модели будут добавлены позже!");
    });
});

document.querySelector('.models-btn').addEventListener('click', function () {
    document.querySelector("#models").scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.submit-btn').addEventListener('click', function () {
    alert("Сообщение отправлено!");
});