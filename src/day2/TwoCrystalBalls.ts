// Given two crystal balls that will break if dropped from high enough distance.
// Determine the exact spot in which it will break in the most optimized way.
export default function two_crystal_balls(breaks: boolean[]): number {
    //Jump amount is calculated by square root so as to break the linear time complexity and go sub linear. 
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    //First we jump root n times to find a break point.
    let i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    //Here for the second ball we jump root n times and then walk i times to reach the breaking point.
    // This makes the time complexity to be root of n.
    i = i - jumpAmount;
    for (let j = 0; j <= jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
