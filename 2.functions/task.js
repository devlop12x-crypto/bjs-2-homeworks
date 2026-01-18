function getArrayParams(...arr) {
	if(arr.length === 0) {
		return {
			min: NaN,
			max: NaN,
			avg: NaN
		};
	}
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		const x = arr[i];
		if(x > max) max = x;
		if(x < min) min = x;
		sum += x;
	}
	const avg = Number((sum / arr.length).toFixed(2));
	return {
		min,
		max,
		avg
	};
}

function summElementsWorker(...arr) {
	return arr.reduce((sum, x) => sum + x, 0);
}

function differenceMaxMinWorker(...arr) {
	if(arr.length === 0) return 0;
	let min = arr[0];
	let max = arr[0];
	for(let i = 0; i < arr.length; i++) {
		const x = arr[i];
		if(x > max) max = x;
		if(x < min) min = x;
	}
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	let evenSum = 0;
	let oddSum = 0;
	for(let i = 0; i < arr.length; i++) {
		const x = arr[i];
		if(x % 2 === 0) evenSum += x;
		else oddSum += x;
	}
	return evenSum - oddSum;
}

function averageEvenElementsWorker(...arr) {
	let sum = 0;
	let count = 0;
	for(let i = 0; i < arr.length; i++) {
		const x = arr[i];
		if(x % 2 === 0) {
			sum += x;
			count += 1;
		}
	}
	return count === 0 ? 0 : sum / count;
}

function makeWork(arrOfArr, func) {
	if(!Array.isArray(arrOfArr) || arrOfArr.length === 0) return 0;
	let maxWorkerResult = -Infinity;
	for(let i = 0; i < arrOfArr.length; i++) {
		const arr = arrOfArr[i];
		const result = func(...arr);
		if(result > maxWorkerResult) maxWorkerResult = result;
	}
	return maxWorkerResult === -Infinity ? 0 : maxWorkerResult;
}