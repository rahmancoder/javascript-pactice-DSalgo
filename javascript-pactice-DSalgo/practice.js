function onlypositive() {
    let positiveArray = [];
    for (let value of array) {

        if (value >= 0) {
            positiveArray.push(value);
            //  continue; 
        }
        else {
            //  break
            continue;
        }
    }
    return positiveArray;
}

const array = [56, 66, 77, -88, -9, 20, 10];
const getOnlypositive = onlypositive(array);
console.log(getOnlypositive);