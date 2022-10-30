// setting up and tearing down before and after testing



let animals = []
	

// beforeAll will run once before starting any of the tests
beforeAll(() => {
	console.log('beforeAll');
	animals = ['elephant',
		'zebra',
		'bear',
		'tiger',
	];
});


// without beforeEach, we would have to declare animals array in every single it block when testing
// using beforeEach, we set the array once and it will set the following array before each it block test, hence beforeEach
// note this will run for other describe blocks and their it blocks as well
// to confine this to one describe block, declare the before/afterEach block within the describe block
beforeEach(() => {
	console.log("BEFORE EACH")
	animals = [
		'elephant',
		'zebra',
		'bear',
		'tiger',
	];
});

// same logic for afterEach except it will run after each it block test
afterEach(() => {
	console.log("AFTER EACH")
	animals = [];
});

afterAll(() => {
	console.log('afterAll');
});

// testing the animals array
describe('animals array', () => {
	// pushing animal to the end of the array
	it('should add animal to end of array', () => {
		animals.push('aligator');
		expect(animals[animals.length - 1]).toBe(
			'aligator'
		);
	});

	// adding animal to the beginning of the array
	it('should add animal to beginning of array', () => {
		animals.unshift('monkey');
		expect(animals[0]).toBe('monkey');
	});
	// initial length of the array
	it('should have initial length of 4', () => {
		expect(animals.length).toBe(4);
	});
});
