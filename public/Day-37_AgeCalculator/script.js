function calculateAge() {
    let dobString = document.getElementById("dob").value;

    if (!dobString) {
        document.getElementById("result").innerHTML = "Please enter a date of birth.";
        return;
    }

    let dob = new Date(dobString);
    let today = new Date();

    let ageYear = today.getFullYear() - dob.getFullYear();
    let ageMonth = today.getMonth() - dob.getMonth();
    let ageDay = today.getDate() - dob.getDate();

    console.log(ageYear);
    console.log(ageMonth);
    console.log(ageDay);
    
    if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
    }

    if (ageDay < 0) {
        ageMonth--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        ageDay += prevMonth.getDate();
    }

    if (dob > today) {
        document.getElementById("result").innerHTML = `Date of birth needs to be earlier than ${today.toLocaleDateString()}.`;
        return;
    } else if(ageYear < 1950) {
        document.getElementById("result").innerHTML = "You are too young to use this application.";
        return;
    } else {
        document.getElementById("result").innerHTML = `Your age is: ${ageYear} years, ${ageMonth} months, ${ageDay} days`;
        return;
    }
}

document.getElementById("button").addEventListener("click", calculateAge);
