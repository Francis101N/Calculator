// Get the elements from the HTML
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
console.log(buttons)

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // Handle numbers and the decimal point
        if(!isNaN(value) || value === '.') {
            display.textContent += value;
        } else if(value === '=') { 
            // Evaluate the expression
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = "Error";
            }
        } else if(value === 'C') {
            // Clear the display
            display.textContent = '';
        } else if(value === '<') {
            // Backspace functionality
            display.textContent = display.textContent.slice(0, -1);
        } else {
            // Handle operators
            display.textContent += value;
        }
    });
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".Calculator");
const toggleIcon = document.querySelector(".toggler-icon"); 
// let isDark =true;

themeToggleBtn.addEventListener("click",()=>{
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle("active");
    // isDark = !isDark;
})

A Calculator with a toggle for switching between light and dark mode/theme.