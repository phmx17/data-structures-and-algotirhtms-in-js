function countDown(num) {
    if (num === 0) {
        console.log('all done baby!')
        return
    }
    console.log(num)
    num--
    countDown(num)
}
countDown(5)

