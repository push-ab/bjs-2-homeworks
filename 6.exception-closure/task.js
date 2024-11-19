function parseCount(){
    let parsedValue = Number.parseInt(value);
    if (isNaN(parsedValue)) {
        throw new Error("Невалидное значение");
    }
    console.log(parsedValue);
    return parsedValue;

}