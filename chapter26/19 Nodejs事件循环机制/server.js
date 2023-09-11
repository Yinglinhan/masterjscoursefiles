Promise.resolve().then(() => {
  console.log('Promise');
});

process.nextTick(() => {
  console.log('nextTick');
});
