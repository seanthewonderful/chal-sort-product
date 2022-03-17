let arr = [23, 2, 3, 4, 5]

sortProduct = (arr) => {
    let array = arr.map(elem => [elem * (arr.indexOf(elem)+1), arr.indexOf(elem)+1])
    let sortedArr = array.sort((a,b) => a[0]-b[0])
    let finalArr = sortedArr.map(elem => elem[0]/elem[1])
    console.log(finalArr)
}
sortProduct(arr)

// let array = arr.map(elem => [elem * (arr.indexOf(elem)+1), arr.indexOf(elem)+1])
// console.log(array)
// let sortedArr = array.sort((a,b) => a[0]-b[0])
// console.log(sortedArr)
// let finalArr = sortedArr.map(elem => elem[0]/elem[1])
// console.log(finalArr)
