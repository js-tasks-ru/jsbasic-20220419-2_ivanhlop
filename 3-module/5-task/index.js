function getMinMax(str){

    function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    }
    
    str = str.split(" ").filter((item) => +item).map((item) => +item).sort(compareNumeric);
    
    let max = str[str.length-1];
    let min = str[0];
    
    return {min, max}
    }