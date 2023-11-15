// 1.
// const arr = [1, 2, 3, 2, 5, 6]

// function valoareaUnica(array)  {
// return array.reduce((valoareaUnicaArray, value) => {
//     if(!valoareaUnicaArray.includes(value)) {
//         valoareaUnicaArray.push(value)
//     }
//     return valoareaUnicaArray;
// }, []);
// }

// const result = valoareaUnica(arr);

// console.log(result)





// 2.

// const arr = ['Ion', 'Andrei', 'Vasile', 'Sergiu']


// const showNthElements = (list, nth) => {
//     return list.some((item, index) => (index + 1) %6 === 0)
// }

// console.log(showNthElements(arr, 6))



// 3.
// const arr = ['Ion', 'Andrei', 'Vasile', 'Sergiu', 'Vlad', 'Stepan']
// const valueToSearch = 'Vlad';

// const showValue = (list, value) => {
//     return list.slice(3).includes(value)
// }


// const result = showValue(arr, valueToSearch)
// console.log(result)




// 4. 
// const arr = [
//         {
//             name: 'Ion',
//             age: 23
//         },
//         {
//             name:'Andrei',
//             age: 32
//         },
//         {
//             name: 'Vasile',
//             age: 31
//         },
//         {
//             name: 'Sergiu',
//             age: 33
//         },
//         {
//             name: 'Vlad',
//             age: 32
//         }
// ];


// function removeObject(list, objectToRemove) {
//     return list.filter(obj => JSON.stringify(obj) !== JSON.stringify(objectToRemove));
// }

// const objectToRemove = {name: 'Andrei', age: 32};

// const newArr = removeObject(arr, objectToRemove);

// console.log(newArr)



5.
function drawSquareForLoop(size) {
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row += '* ';
        }
        console.log(row);
    }
}


const sizeForLoop = 5;
drawSquareForLoop(sizeForLoop)


// 6.
// const arr = [1, 1, 1, 1, 1, 1]
// const arr1 = [1, 1, 1, 5, 1, 1]
// function areNumereIdentice(numere) {
//     const numarUnic = numere[0]
//     return numere.every(numar => numar === numarUnic)
// }

// console.log(areNumereIdentice(arr))
// console.log(areNumereIdentice(arr1))


