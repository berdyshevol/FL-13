const letterCount = function(str, substr) {
    let count = 0;
    let current = str.indexOf(substr);
    while (current !== -1) {
        count++;
        current = str.indexOf(substr, current + 1);
    }
    return count;
}
