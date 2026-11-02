
const studios = [
  {
    name: "HG27 AI Creative Studio",
    desc: "Studio untuk mengembangkan ide visual dan konsep kreatif.",
    fields: [
      ["Gaya Visual", ["Modern Premium","Photorealistic","Cinematic","3D Cartoon","Anime","Minimalist","Isi sendiri"]],
      ["Rasio", ["1:1","4:5","9:16","16:9","3:2","Isi sendiri"]],
      ["Resolusi", ["2K","4K","8K","Isi sendiri"]],
      ["Pencahayaan", ["Natural Light","Studio Lighting","Golden Hour","Dramatic","Isi sendiri"]],
      ["Warna", ["Natural","Black & Gold","Black & White","Pastel","Vibrant","Isi sendiri"]]
    ]
  },
  {
    name: "HG27 AI Infographic Studio",
    desc: "Studio infografis dengan 22 konfigurasi untuk menyusun informasi visual.",
    fields: [
      ["Mode", ["START AUTO","START MANUAL"]],
      ["Jenis Infografis", ["Edukasi","Data & Statistik","Sejarah","Proses / Tutorial","Perbandingan","Timeline","Isi sendiri"]],
      ["Gaya Desain", ["Modern Premium","Editorial","Minimalist","Corporate","3D Isometric","Isi sendiri"]],
      ["Rasio", ["9:16","16:9","1:1","4:5","Isi sendiri"]],
      ["Target Audiens", ["Umum","Anak-anak","Pelajar","Profesional","Isi sendiri"]],
      ["Bahasa", ["Indonesia","English","Bilingual","Isi sendiri"]],
      ["Jumlah Bagian", ["4","6","8","10","Isi sendiri"]],
      ["Warna Utama", ["Black & Gold","Blue & White","Green & White","Full Color","Isi sendiri"]],
      ["Tipografi", ["Modern Sans Serif","Bold Editorial","Elegant","Isi sendiri"]],
      ["Layout", ["Grid","Timeline","Modular","Flowchart","Isi sendiri"]],
      ["Visual", ["Ikon","Ilustrasi","Foto Realistis","3D","Kombinasi","Isi sendiri"]],
      ["Data", ["Ringkas","Detail","Statistik","Fakta penting","Isi sendiri"]],
      ["Elemen Tambahan", ["Ikon, Ilustrasi, Fakta penting, Kesimpulan","Sumber data","Callout","Isi sendiri"]]
    ]
  },
  {
    name: "HG27 Daily Content Creator",
    desc: "Pembuat konten harian, cerita pendek, komedi, dan video sosial.",
    fields: [
      ["Jenis Konten", ["Komedi","Motivasi","Edukasi","Kehidupan sehari-hari","Kantor","Isi sendiri"]],
      ["Gaya Kartun", ["2D","3D","Stickman","Chibi","Anime","Photorealistic","Isi sendiri"]],
      ["Warna", ["Black & White","Full Color","Pastel","Isi sendiri"]],
      ["Lokasi", ["Rumah","Kantor","Sekolah","Jalan","Toyota Astra Motor","Isi sendiri"]],
      ["Alur", ["Komedi","Drama","Inspiratif","Horor ringan","Edukasi","Isi sendiri"]],
      ["Ending", ["Lucu","Plot Twist","Mengharukan","Inspiratif","Isi sendiri"]],
      ["Durasi", ["15 detik","30 detik","60 detik","90 detik","Isi sendiri"]],
      ["Rasio", ["9:16","16:9","1:1","Isi sendiri"]]
    ]
  },
  {
    name: "HG27 Character Sheet Generator",
    desc: "Menyusun identitas karakter, tampilan, kostum, dan ekspresi.",
    fields: [
      ["Jenis Karakter", ["Manusia","Hewan","Fantasi","Robot","Isi sendiri"]],
      ["Gaya", ["3D Realistic","3D Cartoon","Anime","Photorealistic","Isi sendiri"]],
      ["Tampilan", ["Full Body","Portrait","Character Sheet","Turnaround","Isi sendiri"]],
      ["Ekspresi", ["Netral","Bahagia","Marah","Sedih","Beragam","Isi sendiri"]],
      ["Background", ["Putih","Abu-abu","Transparan","Studio","Isi sendiri"]],
      ["Rasio", ["16:9","9:16","1:1","Isi sendiri"]]
    ]
  },
  {
    name: "HG27 Cinematic Story Generator",
    desc: "Membuat cerita sinematik lengkap dengan adegan dan prompt video.",
    fields: [
      ["Genre", ["Drama","Komedi","Horor ringan","Action","Romantis","Thriller","Isi sendiri"]],
      ["Gaya Visual", ["Cinematic Realistic","Photorealistic","3D Animation","Isi sendiri"]],
      ["Jumlah Adegan", ["4","6","8","10","12","Isi sendiri"]],
      ["Durasi", ["30 detik","60 detik","80 detik","120 detik","Isi sendiri"]],
      ["Rasio", ["16:9","9:16","1:1","Isi sendiri"]],
      ["Resolusi", ["4K","8K","Isi sendiri"]],
      ["Audio", ["Dialog dan musik","Voice Over","Sound Effects","Isi sendiri"]]
    ]
  },
  {
    name: "HG27 Animal Fairy Tale Generator",
    desc: "Generator dongeng hewan dengan narasi dan dialog Bahasa Indonesia.",
    fields: [
      ["Karakter Hewan", ["Kucing","Kelinci","Singa","Beruang","Orangutan","Isi sendiri"]],
      ["Genre", ["Petualangan","Persahabatan","Komedi","Horor ramah keluarga","Edukasi","Isi sendiri"]],
      ["Lokasi", ["Hutan","Desa","Kerajaan","Laut","Pegunungan","Isi sendiri"]],
      ["Ending", ["Bahagia","Lucu","Mengharukan","Pesan moral","Isi sendiri"]],
      ["Gaya Animasi", ["3D Cartoon Premium","2D Cartoon","Isi sendiri"]],
      ["Jumlah Adegan", ["4","6","8","10","Isi sendiri"]],
      ["Durasi", ["30 detik","60 detik","90 detik","Isi sendiri"]],
      ["Rasio", ["16:9","9:16","Isi sendiri"]],
      ["Resolusi", ["4K","8K","Isi sendiri"]],
      ["Suara", ["Pria","Wanita","Anak-anak","Isi sendiri"]]
    ]
  },
  {
    name: "HG27 Poster & Advertising Studio",
    desc: "Studio desain poster, promosi, iklan, dan materi pemasaran.",
    fields: [
      ["Jenis Desain", ["Poster","Iklan Produk","Banner","Flyer","Promosi Event","Isi sendiri"]],
      ["Gaya Visual", ["Modern Premium","Luxury","Minimalist","Corporate","Cinematic","Isi sendiri"]],
      ["Rasio", ["4:5","1:1","9:16","16:9","Isi sendiri"]],
      ["Warna", ["Black & Gold","Corporate","Pastel","Full Color","Isi sendiri"]],
      ["Target Audiens", ["Umum","Keluarga","Anak muda","Profesional","Isi sendiri"]],
      ["Elemen", ["Foto Produk","Ilustrasi","Karakter Chibi","Ikon","Isi sendiri"]],
      ["Resolusi", ["2K","4K","8K","Isi sendiri"]]
    ]
  }
];

const $ = id => document.getElementById(id);
let current = 0;
let mode = "manual";

function makeModules() {
  $("modules").innerHTML = "";
  studios.forEach((s, i) => {
    const button = document.createElement("button");
    button.className = "module";
    button.innerHTML = `<strong>${i + 1}. ${s.name}</strong><span>BUKA GENERATOR →</span>`;
    button.addEventListener("click", () => openStudio(i));
    $("modules").appendChild(button);
  });
}

function openStudio(index) {
  current = index;
  const s = studios[index];
  $("dash").hidden = true;
  $("studio").hidden = false;
  $("title").textContent = s.name;
  $("desc").textContent = s.desc;
  $("result").hidden = true;
  $("fields").innerHTML = "";

  s.fields.forEach((field, i) => {
    const label = document.createElement("label");
    label.textContent = field[0];

    const select = document.createElement("select");
    select.id = "choice-" + i;

    field[1].forEach(option => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      select.appendChild(opt);
    });

    label.appendChild(select);
    const custom = document.createElement("input");
    custom.id = "custom-" + i;
    custom.placeholder = "Tuliskan pilihan sendiri...";
    custom.hidden = true;
    custom.style.marginTop = "8px";
    label.appendChild(custom);

    select.addEventListener("change", () => {
      custom.hidden = select.value !== "Isi sendiri";
    });

    $("fields").appendChild(label);
  });

  setMode("manual");
  window.scrollTo(0, 0);
}

function setMode(value) {
  mode = value;
  $("manual").classList.toggle("active", value === "manual");
  $("auto").classList.toggle("active", value === "auto");

  if (value === "auto") {
    studios[current].fields.forEach((field, i) => {
      const select = $("choice-" + i);
      select.selectedIndex = Math.min(
        0, select.options.length - 1
      );
      $("custom-" + i).hidden = true;
    });
  }
}

$("manual").addEventListener("click", () => setMode("manual"));
$("auto").addEventListener("click", () => setMode("auto"));

$("back").addEventListener("click", () => {
  $("studio").hidden = true;
  $("dash").hidden = false;
  window.scrollTo(0, 0);
});

$("home").addEventListener("click", () => {
  $("studio").hidden = true;
  $("dash").hidden = false;
  window.scrollTo(0, 0);
});

$("form").addEventListener("submit", event => {
  event.preventDefault();
  const s = studios[current];
  const topic = $("topic").value.trim();
  if (!topic) return;

  const choices = s.fields.map((field, i) => {
    const select = $("choice-" + i);
    const custom = $("custom-" + i);
    let value = select.value;
    if (value === "Isi sendiri" && custom.value.trim()) {
      value = custom.value.trim();
    }
    return `${field[0]}: ${value}`;
  });

  const prompt = [
    `HG27 MASTER PLUGIN V2`,
    `Studio: ${s.name}`,
    `Topik: ${topic}`,
    `Mode: ${mode === "auto" ? "START AUTO" : "START MANUAL"}`,
    "",
    "KONFIGURASI:",
    ...choices.map((x, i) => `${i + 1}. ${x}`),
    "",
    `Detail tambahan: ${$("extra").value || "Tidak ada"}`,
    "",
    "INSTRUKSI:",
    "Buat hasil yang terstruktur, kreatif, konsisten, detail, dan sesuai topik.",
    "Gunakan Bahasa Indonesia untuk narasi dan dialog.",
    "Susun prompt visual dalam Bahasa Inggris bila diperlukan.",
    "Pastikan semua elemen sesuai konfigurasi yang dipilih."
  ].join("\n");

  $("output").textContent = prompt;
  $("result").hidden = false;
  $("result").scrollIntoView({ behavior: "smooth" });
});

$("copy").addEventListener("click", async () => {
  const text = $("output").textContent;
  try {
    await navigator.clipboard.writeText(text);
    $("copy").textContent = "Tersalin ✓";
  } catch {
    $("copy").textContent = "Salin manual";
  }
});

$("form").addEventListener("reset", () => {
  setTimeout(() => {
    $("result").hidden = true;
    document.querySelectorAll("#fields input").forEach(x => {
      x.value = "";
      x.hidden = true;
    });
  }, 0);
});

makeModules();
