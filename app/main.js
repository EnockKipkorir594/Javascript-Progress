function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`
}


function getGreeting(timeOfDay) {
    if (timeOfDay === "morning") {
        return "Good morning";
    }
    if (timeOfDay === "afternoon") {
        return "Good afternoon";
    }
    
    return "Good evening";

}

function createGreeting(firstName, lastName, timeOfDay){
    const greeting = getGreeting(timeOfDay)
    const name = formatName(firstName, lastName)

    return `${greeting}, ${name}`
}

greeting = createGreeting("mark", "brown", "evening")

console.log(greeting)
