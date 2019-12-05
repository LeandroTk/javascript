type objectB = {
  b: number,
  c: number
}

class B {
  b: number;
  c: number;

  constructor(b: number, c: number) {
    this.b = b;
    this.c = c;
  }

  static build({ b, c }: objectB) {
    return new B(b, c);
  }

  static toJS({ b, c }: objectB) {
    return {
      b,
      c
    };
  }
}

class A {
  a1: number;
  b1: B;

  private static doSomething({ b, c }: objectB, func: ({ b, c }: objectB) => B | objectB = B.build) {
    return func({ b, c });
  }

  static toJS(a: number, b: number, c: number) {
    return {
      a1: a,
      b1: this.doSomething({ b, c }, B.toJS)
    };
  }

  constructor(a: number, b: number, c: number) {
    this.a1 = a;
    this.b1 = A.doSomething({ b, c });
  }
}

const instanceA = new A(1, 2, 3);
console.log(instanceA instanceof A);
console.log(instanceA.a1)
console.log(instanceA.b1)

const objectA = A.toJS(0, -1, 99);
console.log(objectA instanceof A);
console.log(objectA)
