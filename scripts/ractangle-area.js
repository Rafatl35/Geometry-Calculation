function calculateRectangleArea(){
    // get lenght of the ractangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText)
    console.log(lengthText);
    
    // get width of the ractangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);
    // calculation
    const area = length * width;
    console.log(area);
    // display area ractangle
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
}