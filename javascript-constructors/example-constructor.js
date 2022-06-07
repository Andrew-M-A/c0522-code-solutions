function ExampleConstructor() {
}

console.log('ExampleConstructor prototype: ', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor: ', typeof ExampleConstructor);

var construction = new ExampleConstructor();
console.log('value of construction: ', construction);

var indeed = construction instanceof ExampleConstructor;
console.log('value of indeed: ', indeed);
