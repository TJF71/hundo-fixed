



// get the sart and end numbers from the page
function getValues() {
    //get the stare number
    let startNumber = document.getElementById('startValue').value;  // "0"
    // get the end number
    let endNumber = document.getElementById('endValue').value; // "100"
    // alert('Start number is ' + startNumber);
    // alert('End nuber is ' + endNumber);
    // turn the values into actual numbers
    startNumber = parseInt(startNumber); // 0
    endNumber = parseInt(endNumber);  // 100
    if (Number.isInteger(startNumber) && Number.isInteger(endNumber) && startNumber < endNumber) {
        // generate teh range of numbers
        let generatedNumbers = generateValues(startNumber, endNumber);
        displayValues(generatedNumbers);
    } else {
        // Uh oh! Something is wrong!
        Swal.fire({
            icon: 'error',
            title: 'Ooops!',
            text: 'Please enter valid numbers and ensure your start number is less than your end number'
        });
    }


}
//generate a list of all numbers between the start and end
function generateValues(start, end) {
    // create a variable that can hold a bunch of numbers
    let numbers = [];
    // put a number into that variable 
    // add one to that number, then add that to the variable.
    // keep adding one and putting it inot the variable until we get to the end number
    for (let n = start; n <= end; n = n + 1) {
        numbers.push(n);
    }
    //somhow tell displayvalues to show those numbers???
    return numbers;
}
// display each of those numbers on the page
function displayValues(numbers) {
    let html = '';
    let className = '';

    // make a loop to get each number from the array
    for (let index = 0; index < numbers.length; index = index += 1) {

        let currentNumber = numbers[index];

        if (currentNumber % 2 == 0) {
            className = 'even';
        } else {
            className = 'odd';
        }

        html += `<tr><td class="${className}">${currentNumber}</td></tr>`;
    }


    let tbody = document.getElementById('results');
    tbody.innerHTML = html;
    // tbody.innerHTML = 'Hi Tom';

    /*
        NOTES:
        -make the even numbers bold
    */
}
