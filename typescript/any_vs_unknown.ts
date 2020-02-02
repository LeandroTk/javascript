let value: any;

value = true;            // OK
value = 42;              // OK
value = "Hello World";   // OK
value = [];              // OK
value = {};              // OK
value = Math.random;     // OK
value = null;            // OK
value = undefined;       // OK
value = new TypeError(); // OK
value = Symbol("type");  // OK
