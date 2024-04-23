const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
    let currentChunk = [];

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // Check if adding the current element to the current chunk exceeds the maximum sum
        if (sum + arr[i] > n) {
            // If it does, push the current chunk to the result and start a new chunk
            result.push(currentChunk);
            currentChunk = [];
            sum = 0;
        }

        // Add the current element to the current chunk and update the sum
        currentChunk.push(arr[i]);
        sum += arr[i];
    }

    // Push the last chunk to the result
    if (currentChunk.length > 0) {
        result.push(currentChunk);
    }

    return result;
}



const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
