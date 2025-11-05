const animals = [
  {
    name: "Lauva",
    img: "https://pic.la.lv/2018/07/Lauva_AFP.jpg",
    desc: "Lauva ir spēcīgs plēsējs, kuru sauc arī par tuksneša karali."
  },
  {
    name: "Vilks",
    img: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800",
    desc: "Vilki dzīvo baros un ir ļoti inteliģenti mednieki."
  },
  {
    name: "Pingvīns",
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800",
    desc: "Pingvīni ir putni, kas lieliski peld, bet nelido."
  }
];

const list = document.getElementById("animal-list");

animals.forEach(a => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${a.img}" alt="${a.name}">
    <h2>${a.name}</h2>
    <p>${a.desc}</p>
  `;
  list.appendChild(card);
});
