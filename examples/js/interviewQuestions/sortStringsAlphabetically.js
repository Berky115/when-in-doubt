let data = ['Drew', 'Dante', 'Berky', 'Alfanzo', 'Zeta'];

console.log(data.sort((a,b) => compareString(a,b)));

function compareString(a,b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    return (a < b) ? -1 : (a > b) ? 1 : 0
}