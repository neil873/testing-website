fetch("berita.json")
.then(res => res.json())
.then(data => {
  renderBerita(data);
  renderSlider(data);

  document.getElementById("filterKategori").addEventListener("change", e => {
    const val = e.target.value;
    const hasil = val === "all" ? data : data.filter(b => b.kategori === val);
    renderBerita(hasil);
  });
});

function renderBerita(data){
  const list = document.getElementById("listBerita");
  list.innerHTML = "";
  data.forEach(b => {
    list.innerHTML += `
      <article class="berita-card">
        <img src="${b.gambar}">
        <h3>${b.judul}</h3>
        <small>${b.tanggal} | ${b.kategori}</small>
        <p>${b.ringkas}</p>
        <a href="detail-berita.html?id=${b.id}">Baca selengkapnya</a>
      </article>
    `;
  });
}

function renderSlider(data){
  const slider = document.getElementById("sliderBerita");
  data.slice(0,3).forEach(b=>{
    slider.innerHTML += `
      <div class="slide">
        <img src="${b.gambar}">
        <h2>${b.judul}</h2>
      </div>
    `;
  });
}