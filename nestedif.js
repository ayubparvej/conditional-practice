var num = 85;

if (num > 80) {
    var fNum = 35;
    if (fNum > 80) {
        console.log('Go for lunch')
    } else if (fNum < 80 && fNum >= 60) {
        console.log('Good Luck Next Time')
    } else if (fNum < 60 && fNum >= 40) {
        console.log('Keep your message unseen')
    } else if (fNum < 40) {
        console.log('block your friend')
    }
} else if (num < 80) {
    console.log('Go to home and Sleep and act sad')
} else {
    console.log('muri khao')
}