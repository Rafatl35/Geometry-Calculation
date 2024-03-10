function calculateRhombusArea(){
    const rhombusD1 = getInputValueId('rhombus-d1');
    const rhombusD2 = getInputValueId('rhombus-d2');
    const area = 0.5 * rhombusD1 * rhombusD2;

    setInnerTextById('rhombus-area', area)
}
