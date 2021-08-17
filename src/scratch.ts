type JSONValue =
    | string
    | number
    | boolean
    | null
    | JSONValue[]
    | { [k: string]: JSONValue };

const val: JSONValue = {
    name: 'Lawrence',
    address: {
        street: 'Namuro street',
    },
};


// Error handling in typescript.
function somethingRisky() { }

try {
    somethingRisky();
} catch (err: unknown) {
    if (err instanceof Error) { 
        console.log(err.stack);
    }
    else {
        console.log(err);
    }
};

// Error handling with typescript 4. assertions. Use for testing NOT app use.
function assertIsError(err: any): asserts err is Error {
    if (!(err instanceof Error)) throw new Error(`Not an error: ${err}`);
}
try {
    somethingRisky();
} catch (err: unknown) {
    assertIsError(err);
    console.log(err.stack);
}
