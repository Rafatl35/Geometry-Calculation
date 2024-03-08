/**
 * Objective: get base, height of a traingle. Cacluate the area by the provide formula. and then display the area.
 * setp-1: get base value
 * step-2: added an id in the base input field
 * step-3: use getElementById to access the input field
 * step-4: get value from the input field(vlue is string now)
 * step-5: convert the value to a number. use parseFloat
 */

function calculateTriangleArea(){
    //get triangle base value
    const traingleBaseInput = document.getElementById('traingle-base');
    const traingleBaseText = traingleBaseInput.value;
    const base = parseFloat(traingleBaseText)
    // console.log(base);

    // get traingle height value
    const traingleHeightInput = document.getElementById('traingle-hight');
    const traingleHeightText = traingleHeightInput.value;
    const height= parseFloat(traingleHeightText)
    console.log(height);
    // calculation
    const area = 0.5 * base * height;
    console.log(area)

    // display traingle area
    const traingleAreaSpan = document.getElementById('traingle-area');
    traingleAreaSpan.innerText = area;
}