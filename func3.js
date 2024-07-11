// if else 
function getTicketPrice(age) {
    if (age <= 12) {
        return 10;  
    } else if (age >= 13 && age <= 17) {
        return 15;  
    } else if (age >= 18) {
        return 20;  
    } else {
        throw new Error("Age must be a positive integer");
    }
}

function main() {
    let age = prompt("Please enter your age:");

    age = parseInt(age);

    if (isNaN(age) || age < 0) {
        console.error("Invalid input: Please enter a valid positive integer for age.");
        return;
    }

    try {
        const price = getTicketPrice(age);
        alert(`The price of the movie ticket is: $${price}`);
    } catch (error) {
        console.error(error.message);
    }
}
main();
