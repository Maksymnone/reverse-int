module.exports = function reverse (n) {
    if (n < 0) {
        n = -n
    }
    reversedInt = ((n.toString().split("").reverse()).join(""))
   return reversedInt;
}


