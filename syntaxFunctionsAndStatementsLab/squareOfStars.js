function squareOfStars(size = 5) {
    let string = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            string += '* ';
        }

        string += '\n';
    }

    return string;
}

console.log(squareOfStars());