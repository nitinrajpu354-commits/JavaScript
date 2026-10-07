fetch(`https://randomuser.me/api/?results=3`)
  .then((raw) => raw.json())
  .then((data) => {
    data.results.forEach(function (user) {

      let card = document.createElement("div");
      card.className = "w-80 bg-white rounded-2xl shadow-lg p-6";

      let imageContainer = document.createElement("div");
      imageContainer.className = "flex justify-center";

      let image = document.createElement("img");
      image.src = user.picture.large;
      image.alt = "Profile Picture";
      image.className = "w-28 h-28 rounded-full object-cover";

      imageContainer.appendChild(image);

      let name = document.createElement("h2");
      name.className = "text-xl font-bold text-center mt-4";
      name.textContent = user.name.first + " " + user.name.last;

      let email = document.createElement("p");
      email.className = "text-gray-600 text-center mt-3";
      email.textContent = user.email;

      let dob = document.createElement("p");
      dob.className = "text-gray-600 text-center mt-2";
      dob.textContent = user.dob.date;

      card.appendChild(imageContainer);
      card.appendChild(name);
      card.appendChild(email);
      card.appendChild(dob);

      document.querySelector(".users").appendChild(card);
    });
  });
