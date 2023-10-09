// created by Weinan Lin

const input = document.getElementById("input");
const span_result = document.getElementById("span_result");

function getArrayFromInput() {
	const result = [];
	for (const num of input.value.split(","))
		result.push(parseInt(num));
	return result;
}

function cmpArray(arr1, arr2) {
	for (let i = 0; i < arr1.length && i < arr2.length; ++i) {
		if (arr1[i] != arr2[i])
			return arr1[i] - arr2[i];
	}
	return arr1.length - arr2.length;
}

function adem(mon, index) {
	const result = [];
	for (let k = 0; 2 * k <= mon[index]; ++k) {
		const m = mon[index + 1] - k - 1;
		const n = mon[index] - 2 * k;
		if (m >= n && !((m - n) & n)) {
			const mi = mon[index] + mon[index + 1] - k;
			result.push(mon.slice(0, index).concat(k ? [mi, k] : [mi], mon.slice(index + 2)));
		}
	}
	result.sort(cmpArray);
	return result;
}

/* symmetric difference */
function symmDiff(arr1, arr2) {
	var result = [];
	var resultSet = new Set();
	for (const i of arr1)
		resultSet.add(i);
	for (const i of arr2) {
		if (!resultSet.has(i))
			resultSet.add(i);
		else
			resultSet.delete(i);
	}
	for (const i of resultSet)
		result.push(i)
	result.sort(cmpArray);
	return result;
}

function latexSteenrod(a) {
	result = "";
	for (let i = a.length - 1; i >= 0; --i) {
		if (i < a.length - 1)
			result += "+";
		for (const j of a[i]) {
			result += `Sq^{${j}}`;
		}
	}
	return result;
}

function button_compute_onclick() {
	const a = getArrayFromInput();
	span_result.innerHTML = katex.renderToString(latexSteenrod(adem(a, 0)), { throwOnError: false });
}