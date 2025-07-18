function testScope() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  //   console.log(a); // ✅ Works (function-scoped)
  //   console.log(b); // ❌ Error (block-scoped)
  //   console.log(c); // ❌ Error (block-scoped)
}

testScope();

const x = 0;
for (let i = 0; i < 10; i++) {
  const x = i;
  console.log(x);
}

console.log(x);
