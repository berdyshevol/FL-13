const countPoints = function(array) {
    let score = 0;
    const isBigger = (a, b) => a > b;
    for (let item of array) {
        const [x, y] = item.split(':');
        if (isBigger(x, y)) {
            score += 3;
        } else if (x === y) {
            score += 1;
        }
    }
    return score;
}
