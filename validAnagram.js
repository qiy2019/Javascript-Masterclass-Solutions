function validAnagram(str1, str2){
    let letters1 = []
    let letters2 = []
    for (let letter of str1) {
        letters1.push(letter)
    } for (let letter of str2) {
        letters2.push(letter)
    }
    
    if(letters1.length !== letters2.length) {
         return false;
     }
    for(let i = 0; i < letters1.length; i++) {
        let correctIndex = letters2.indexOf(letters1[i])
        if (correctIndex === -1) {
            return false;
        }
        letters2.splice(correctIndex, 1)
    }
    return true
}
