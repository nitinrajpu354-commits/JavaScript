function getNum() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10);

      if (num < 5) res(true);
      else rej(false);
    }, 2000);
  });
}

async function abcd() {
  let ans = await getNum();
  console.log(ans);
}

abcd();
