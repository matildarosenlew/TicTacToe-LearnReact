export function checkFullBoard(boxes){
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] === null ) {
          return false;
        }
    }
    return true;
}