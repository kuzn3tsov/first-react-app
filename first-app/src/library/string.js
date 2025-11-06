export function truncate(string = '', limit, symbol = '') {
    if (string.length <= limit) {
        return string;
    }
    else {
        return string.slice(0, limit) + symbol;
    }
};
export function n2br(str) {
    return str.replace(/\n/g, '<br>');
}
