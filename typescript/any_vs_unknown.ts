// Reference: https://mariusschulz.com/blog/the-unknown-type-in-typescript

// Any
let anyValue: any;

anyValue = true;             // OK
anyValue = 42;               // OK
anyValue = "Hello World";    // OK
anyValue = [];               // OK
anyValue = {};               // OK
anyValue = Math.random;      // OK
anyValue = null;             // OK
anyValue = undefined;        // OK

anyValue.foo.bar;  // OK
anyValue.trim();   // OK
anyValue();        // OK
new anyValue();    // OK
anyValue[0][1];    // OK

// Unknown
let unknownValue: unknown;

let unknownValue1: unknown = unknownValue;   // OK
let unknownValue2: any = unknownValue;       // OK
let unknownValue3: boolean = unknownValue;   // Error
let unknownValue4: number = unknownValue;    // Error
let unknownValue5: string = unknownValue;    // Error
let unknownValue6: object = unknownValue;    // Error
let unknownValue7: any[] = unknownValue;     // Error
let unknownValue8: Function = unknownValue;  // Error
