// if else 
function getWeather(wheather) {
    if (wheather <= 12) {
        return "is not hot";  
    } else if (wheather >= 13 && wheather <= 17) {
        return "is sunny";  
    } else if (wheather >= 18) {
        return "is hot";  
    } else {
        throw new Error("wheather must be a positive integer");
    }
}

function main() {
    let wheather = prompt("Please enter your wheather:");

    wheather = parseInt(wheather);

    if (isNaN(wheather) || wheather < 0) {
        console.error("Invalid input: Please enter a valid positive integer for wheather.");
        return;
    }

    try {
        const price = getWeather(wheather);
        alert(`The wheather is $${price}`);
    } catch (error) {
        console.error(error.messwheather);
    }
}
main();
