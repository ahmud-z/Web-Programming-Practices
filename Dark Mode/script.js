const btn = document.getElementById('btn');
const light = document.getElementById('light');
const dark = document.getElementById('dark');
const body = document.querySelector('body');
dark.style.display = 'none';

btn.addEventListener('click', function () {

    if (dark.style.display == 'block') {
        dark.style.display = 'none';
        light.style.display = 'block';
        body.style.background = 'white';
    } else {
        light.style.display = 'none';
        dark.style.display = 'block';
        dark.style.color = 'white';
        body.style.background = 'black';
    }

});
