for (var i = 1; i <= 100; i++) {
    var m3 = i % 3;
    var m5 = i % 5;

    if (m3 === 0 && m5 === 0) {
        console.log('FizzBizz')
    }
    else if (m3 === 0) {
        console.log('Fizz')
    }
    else if (m5 === 0) {
        console.log('Bizz')
    }
    else {
        console.log(i)
    }
}