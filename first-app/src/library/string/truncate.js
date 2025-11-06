export function truncate(string = '', limit, symbol = '') {
    if (string.length <= limit) {
        return string;
    }
    else {
        return string.slice(0, limit) + symbol;
    }
};