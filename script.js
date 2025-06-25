let calc = document.getElementById("calc").addEventListener("click", () =>{
    let days_res = document.getElementById("days_res");
    let months_res = document.getElementById("months_res");
    let years_res = document.getElementById("years_res");
    const days = parseFloat(document.getElementById("day").value);
    const month = parseFloat(document.getElementById("month").value);
    const year = parseFloat(document.getElementById("year").value);

    const calander = document.getElementById("calander");
    

    if (days < 1 || days > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
        const warn = document.getElementsByClassName("warn");
        const warning = document.getElementsByClassName("warning");
        const dayInput = document.getElementById("day");
        const monthInput = document.getElementById("month");
        const yearInput = document.getElementById("year");
        dayInput.style.color = "red";
        monthInput.style.color = "red";
        yearInput.style.color = "red";
        for (let i = 0; i < warning.length; i++) {
            warning[i].style.display = "flex";
        }
        for (let i = 0; i < warn.length; i++) {
            warn[i].style.color = "red";
        }
        return; 
    } else {
        const warn = document.getElementsByClassName("warn");
        const warning = document.getElementsByClassName("warning");
        const dayInput = document.getElementById("day");
        const monthInput = document.getElementById("month");
        const yearInput = document.getElementById("year");
        dayInput.style.color = "";
        monthInput.style.color = "";
        yearInput.style.color = "";
        for (let i = 0; i < warning.length; i++) {
            warning[i].style.display = "none";
        }
        for (let i = 0; i < warn.length; i++) {
            warn[i].style.color = "";
        }
    }
    const birthyear = year;
    const birthMonth = month;
    const birthDay = days;

    const day = new Date();
    const currentYear = day.getFullYear();
    const currentMonth = day.getMonth() + 1;
    const currentDay = day.getDate();

    let dayCalc = currentDay - birthDay;
    let monthCalc = currentMonth - birthMonth;
    let yearCalc = currentYear - birthyear;

    
    if(dayCalc < 0){
        const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
        dayCalc= daysInMonth + dayCalc;
        monthCalc++
    }
    if(monthCalc < 0){
       monthCalc =  monthCalc + 12;
        yearCalc--;
    }
    
    days_res.textContent = dayCalc;
    months_res.textContent = monthCalc;
    years_res.textContent = yearCalc;
});
