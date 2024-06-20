document
  .getElementById("khodamForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    const result = checkKhodam(name);

    document.getElementById("result").innerHTML = result.message;
    document.getElementById("result").classList.add("show");

    const khodamImage = document.getElementById("khodamImage");
    if (result.image) {
      khodamImage.src = result.image;
      khodamImage.style.display = "block";
    } else {
      khodamImage.style.display = "none";
    }
    khodamImage.classList.add("show");
  });

function checkKhodam(name) {
  // Algoritma sederhana untuk "menentukan" khodam
  // Ini hanya contoh acak, tidak berdasarkan ilmu nyata
  const khodamTypes = [
    { name: "Harimau Benggala", image: "images/harimau-benggala.jpg" },
    { name: "Elang", image: "images/elang.jpg" },
    { name: "Naga Hitam", image: "images/naga-hitam.jpg" },
    { name: "Serigala", image: "images/serigala.jpg" },
    { name: "Gajah Perkasa", image: "images/gajah.jpg" },
    { name: "Macan Tutul", image: "images/macan.jpg" },
    { name: "Kuda Terbang", image: "images/kudaponi.jpg" },
    { name: "Singa Emas", image: "images/singa.jpg" },
  ];

  const hash = hashCode(name);
  const khodam = hash % 2 === 0;
  const khodamType =
    khodamTypes[Math.floor(Math.random() * khodamTypes.length)];

  if (khodam) {
    return {
      message: `Selamat, ${name}! Anda memiliki khodam jenis <span class="not-found1">${khodamType.name}.`,
      image: khodamType.image,
    };
  } else {
    return {
      message: `Maaf, ${name}.<span class="not-found">Anda tidak memiliki khodam.</span>`,
      image: null,
    };
  }
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}
