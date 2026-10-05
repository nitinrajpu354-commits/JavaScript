fetch(`https://randomuser.me/api/`)
.then((raw) => raw.json())
.then((data) => console.log(data.results[0].name))