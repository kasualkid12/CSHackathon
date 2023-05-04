let array = [hello, hello, world];
let memo = {};
for (let i = 0; i < array.length; i++) {
  memo[array[i]] = memo[array[i]] + 1 || 1;
}
