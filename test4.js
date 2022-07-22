
function capitalize(string) {
    const arr = string.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
}

module.exports = capitalize;