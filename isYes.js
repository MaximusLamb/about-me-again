function isYes(answer) {
    answer = answer.toLowerCase();
    if (answer === 'y') {
        return true;
    } else if (answer === 'yes') {
        return true;
    } else if (answer === 'yez') {
        return true;
    } else if (answer === 'yuz') {
        return true;
    } else {
        return false;
    }
}

export default isYes;