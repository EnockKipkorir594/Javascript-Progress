function cleanText(text){
    return text.trim();

}

function capitalize(text){
    const cleaned = cleanText(text).toLowerCase();
    if (cleaned.length === 0){
        return '';
    }
    return cleaned[0].toUpperCase() + cleaned.slice[1];

}
function formatDisplayName(firstName, lastName){
    const myFirstName = capitalize(firstName);
    const myLastName = capitalize(lastName);

    return `${myFirstName} ${myLastName}`;
}

console.log(formatDisplayName(' ava', ' kim'));
