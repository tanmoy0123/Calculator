const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == 'clear'){
            display.innerText = '';
        }
        else if(item.id == 'backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length-1);
        }

        else if(display.innerText != '' && item.id == 'equals'){
            display.innerText = eval(display.innerText);
        }
        else if(display.innerText == '' && item.id == 'equals'){
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);

        }
        else{
            display.innerText += item.id;
        }
    };
});


const themeToggleBtn = document.querySelector('.themeToggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.togglerIcon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}