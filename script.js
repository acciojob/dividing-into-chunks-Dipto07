const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
    let currentChunk = [];

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (sum + arr[i] > n) {
            result.push(currentChunk);
            currentChunk = [];
            sum = 0;
        }

        currentChunk.push(arr[i]);
        sum += arr[i];
    }

    if (currentChunk.length > 0) {
        result.push(currentChunk);
    }

    return result;
}



const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
