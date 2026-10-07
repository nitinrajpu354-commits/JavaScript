const users = ["nitin@gmail.com", "aman@gmail.com", "gojo@gmail.com"];

function sendEmail(email) {
  return new Promise((res, rej) => {
    let time = Math.floor(Math.random() * 5);

    setTimeout(function () {
      let probability = Math.floor(Math.random() * 10);

      if (probability <= 5) {
        res("Email Successfully sent.");
      } else {
        rej("Email not sent.");
      }
    }, time * 1000);
  });
}

async function sendEmails(userslist) {
  let allResponses = userslist.map(function(email) {
    return sendEmail(email)
    .catch(function(err) {
      return err;
    })
  });

  let ans = await Promise.all(allResponses);

  ans.forEach(function (response) {
    console.log(response);
  });
}

sendEmails(users);