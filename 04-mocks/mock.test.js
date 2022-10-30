const axios = require('axios');

// if the api call fails, the function can still be working as expected but because of the failed api endpoint, the function test may fail
// In this case we can mock the data from the api

const fetchData = async (id) => {
	console.log('called');
	const results = await axios.get(
		`https://jsonplaceholder.typicode.com/todos/${id}`
	);
	return results;
};



function forEach(items, callback) {
	for (let index = 0;index < items.length;index++) {
		callback(items[index]);
	}
}


// const mock = (x) => {42 + x}
// mock callback function
it('mock callback', () => {
	// jest.fn() creates a mock function
	const mockCallback = jest.fn((x) => 42 + x);

	forEach([0, 1], mockCallback);

	// .mock attribute has properties associalted with mock callback function
	expect(mockCallback.mock.calls.length).toBe(2);

	// mock.calls returns an array of the individual calls and their values to the mock function
	// first call is for index 0, 
	expect(mockCallback.mock.calls[0][0]).toBe(0);
	// [ call1, call2 ]
	console.log("Here:", mockCallback.mock.calls)

	expect(mockCallback.mock.calls[1][0]).toBe(1);

	expect(mockCallback.mock.results[0].value).toBe(
		42
	);
});

it('return mock', () => {
	const mock = jest.fn();

	mock
		.mockReturnValueOnce(true)
		.mockReturnValueOnce(false);

	const results = mock();
	const results2 = mock();

	expect(results).toBe(true);
	expect(results2).toBe(false);
});

it('mock modules or custom functions', async () => {
	jest.spyOn(axios, 'get').mockReturnValueOnce({
		id: 1,
		todo: 'Do youtube',
	});

	const results = await fetchData(1);

	expect(results.todo).toBe('Do youtube');
});
