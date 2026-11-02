
const modules = [
["HG27 AI Creative Studio","Desain dan kreativitas"],
["HG27 AI Infographic Studio","Infografis edukasi"],
["HG27 Daily Content Creator","Konten video pendek"],
["HG27 Character Sheet Generator","Desain karakter"],
["HG27 Cinematic Story Generator","Cerita sinematik"],
["HG27 Animal Fairy Tale Generator","Dongeng binatang"],
["HG27 Poster & Advertising Studio","Poster dan iklan"]
];

let selected = 0;

const grid = document.getElementById("modules");

modules.forEach((m,i) => {
  const b = document.createElement("button");
  b.className = "module" + (i===0 ? " active" : "");
  b.innerHTML = `<b>${i+1}. ${m[0]}</b><span>${m[1]}</span>`;

  b.onclick = () => {
    selected = i;
    document.querySelectorAll(".module")
      .forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    document.getElementById("selected").textContent = m[0];
  };

  grid.appendChild(b);
});

function generate() {
  const topic = document.getElementById("topic").value;

  if (!topic.trim()) {
    alert("Masukkan topik terlebih dahulu!");
    return;
  }

  const style = document.getElementById("style").value;
  const ratio = document.getElementById("ratio").value;
  const details = document.getElementById("details").value;

  const result = `
HG27 MASTER PLUGIN
${modules[selected][0]}

TOPIK:
${topic}

GAYA VISUAL:
${style}

RASIO:
${ratio}

DETAIL:
${details}

INSTRUKSI:
Buat konsep kreatif profesional.
Susun materi secara terstruktur.
Gunakan Bahasa Indonesia.
Buat prompt visual yang detail.
Pertahankan identitas HG27 Studio.
`;

  document.getElementById("result").value = result;
}

function copyResult() {
  const result = document.getElementById("result");

  if (!result.value) {
    alert("Buat prompt terlebih dahulu!");
    return;
  }

  navigator.clipboard.writeText(result.value)
    .then(() => alert("Prompt berhasil disalin!"))
    .catch(() => {
      result.select();
      document.execCommand("copy");
      alert("Silakan salin prompt.");
    });
}
