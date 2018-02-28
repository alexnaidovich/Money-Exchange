// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency <= 0) {
        return {};
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
        var h = 50,
            q = 25,
            d = 10,
            n = 5,
            p = 1;
        var Change = new Object;
        
        Change.H = Math.floor(currency / h);
        Change.Q = Math.floor((currency - Change.H * h) / q);
        Change.D = Math.floor((currency - Change.H * h - Change.Q * q) / d);
        Change.N = Math.floor((currency - Change.H * h - Change.Q * q - Change.D * d) / n);
        Change.P = Math.floor(currency - Change.H * h - Change.Q * q - Change.D * d - Change.N * n);
        
        for (var key in Change) {
            if (Change[key] <= 0) {
                delete Change[key];
            }
        }
        return Change;
        
    }
}