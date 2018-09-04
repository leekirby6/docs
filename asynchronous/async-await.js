function wait(ms) {
  return new Promise(r => setTimeout(r, ms))
}

async function runner() {
  console.log('sắp rồi...')
  await wait(2007)
  console.log('chờ tí...')
  await wait(2012)
  console.log('thêm chút nữa thôi...')
  await wait(2016)
  throw new Error(2016)
}

async function main() {
  try {
    await runner()
    console.log('xong rồi đấy!')
  } catch (e) {
    console.log(`có vấn đề tại ${ e }`)
  }
}

async function main() {
  console.time('wait2s')
  await Promise.all([wait(1000), wait(2000)])
  console.timeEnd('wait2s')
}

//example 2
function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function addAsync(x) {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  return x + a + b + c;
}


addAsync(10).then((sum) => {
  console.log(sum);
});

