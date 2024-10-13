function calculateAge() {
    // Get the birthdate from input
    let birthdate = document.getElementById("birthdate").value;
    
    if (birthdate === "") {
        document.getElementById("result").innerHTML = "Please enter your birthdate!";
        return;
    }

    // Convert birthdate to a date object
    let birthDate = new Date(birthdate);
    let today = new Date();
    
    // Calculate age
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust if birthdate hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById("result").innerHTML = `Your age is ${age} years old.`;
}
