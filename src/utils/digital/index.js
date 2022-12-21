export function useRandomNumber(count) {
    return Math.floor(Math.random() * count + 1);
}