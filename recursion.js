function flatten(arr) {
    var result = [];
    var elem;

    for(var i = 0; i < arr.length; i++) {
        elem = arr[i]
        console.log(elem)
        if(Array.isArray(elem)) {
            arr = elem.concat(arr.slice(i + 1));
            i = -1;
        } else {
            result.push(elem);
        }
        console.log(arr)
    }
    console.log(result);
}
