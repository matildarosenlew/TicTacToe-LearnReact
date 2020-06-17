export const compMove = (boxes) =>{
    let tempNr = 0;
    while (boxes[tempNr] !== null) {
        tempNr=Math.floor((Math.random() * 9));
    }
    return tempNr;
}