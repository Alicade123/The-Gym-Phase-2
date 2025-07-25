function show() {
  console.log(this);
}
show(); // In non-strict mode: global object
// In strict mode: undefined
