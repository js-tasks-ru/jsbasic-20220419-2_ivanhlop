function ucFirst(str){
    if(!str){
    return "";
    } else {
    str = str[0].toUpperCase() + str.slice(1);
    return str;
    }
    }