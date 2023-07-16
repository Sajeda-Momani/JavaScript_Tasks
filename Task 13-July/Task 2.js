const element = document.getElementById("divv");

element.addEventListener('mouseover', function() {
    element.innerHTML = 'can i help you';
});
element.addEventListener('mouseout', function () {
    element.innerHTML = 'hello word!';
});

