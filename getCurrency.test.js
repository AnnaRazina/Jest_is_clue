const getCurrency = require('./task/getCurrency');

const list = {
    0: '0 рублей',
    1: '1 рубль',
    101: '101 рубль',
    11: '11 рублей',
    21: '21 рубль',
    53: '53 рубля',
    124354: '124354 рубля',
    80: '80 рублей',
};

for (let i in list) {
    test(list[i], () => {
        expect(getCurrency(+i)).toBe(list[i]);
    });
};
