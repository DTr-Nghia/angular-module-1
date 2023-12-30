export function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}
export function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
