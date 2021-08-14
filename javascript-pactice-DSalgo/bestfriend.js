function largestFriend(friends) {
    // let largeName = ' ';
    let largeName = [];
    let largeNamecheck = friends[0];
    for (const value of friends) {
        if (value.length > largeNamecheck.length) {
            // boro hole largeName Update korte thako and check koro sesh porjonto
            // largeName = value;
            largeName.push(value);
        }

    }
    return largeName;
}



const allFriend = ['kamrul', 'meem', 'aditira', 'raisa', 'tanjil', 'mustafi'];
const getLargestFriend = largestFriend(allFriend);
console.log(getLargestFriend);