const M_PER_PX = 0.9;
const SPEED = 333;
const EXTRA = [0, 1, 2];

const P = {
  A: [1403, 1407, "Gerbang Utama"],
  B: [1292, 879, "Gedung Rektorat"],
  C: [1469, 879, "Auditorium"],
  D: [1844, 1018, "FKM (Gedung Kuliah)"],
  E: [1596, 795, "FK Prodi Gigi"],
  F: [1712, 646, "FK Lab. Psikologi"],
  G: [1455, 694, "Lembaga Bahasa"],
  H: [1100, 858, "Fakultas Hukum"],
  I: [1038, 710, "FISIP"],
  J: [1356, 515, "Perpustakaan"],
  K: [1072, 416, "Fakultas Ekonomi"],
  L: [1478, 378, "FT Pusat Kajian Batubara"],
  M: [1862, 430, "FT Teknik Mesin"],
  N: [2056, 448, "FT Teknik Sipil"],
  O: [1950, 378, "FT Lab Terpadu Teknik Sipil"],
  P: [1742, 379, "MIPA Gedung Dekanat"],
  Q: [1724, 289, "MIPA D4 Kelautan"],
  R: [1574, 224, "MIPA Gedung LDB"],
  S: [1403, 212, "Pertanian Agribisnis"],
  T: [1563, 80, "Pertanian THP"],
  U: [1198, 95, "FKIP Gedung C"],
  V: [1060, 263, "Fasilkom Gedung A"],
  W: [634, 431, "Masjid An-Nabawi"],
  X: [149, 342, "Student Center"],
  Y: [1786, 1255, "Klinik Unsri"],
};
const N = {
  p1: [185, 221],
  p2: [519, 295],
  p3: [519, 515],
  p4: [185, 342],
  p5: [185, 515],
  p6: [1141, 931],
  p7: [1292, 931],
  p8: [1403, 931],
  p9: [1469, 931],
  p10: [1521, 931],
  p11: [1844, 931],
  p12: [1941, 931],
  p13: [686, 866],
  p14: [802, 931],
  p15: [1742, 430],
  p16: [1844, 358],
  p17: [1950, 295],
  p18: [2005, 295],
  p19: [2005, 448],
  p20: [2005, 516],
  p21: [2005, 655],
  p22: [883, 1559],
  p23: [2150, 1371],
  p24: [1038, 596],
  p25: [1478, 596],
  p26: [1521, 596],
  p27: [1667, 596],
  p28: [634, 515],
  p29: [802, 515],
  p30: [975, 515],
  p31: [1141, 515],
  p32: [1189, 515],
  p33: [1304, 515],
  p34: [1660, 319],
  p35: [1667, 374],
  p36: [1667, 417],
  p37: [1667, 523],
  p38: [1455, 738],
  p39: [1521, 738],
  p40: [1521, 795],
  p41: [1403, 263],
  p42: [1574, 263],
  p43: [1617, 263],
  p44: [1617, 134],
  p45: [2022, 134],
  p46: [1563, 134],
  p47: [1141, 95],
  p48: [1141, 263],
  p49: [1141, 305],
  p50: [1141, 416],
  p51: [1141, 596],
  p52: [1141, 858],
  p53: [1189, 263],
  p54: [1189, 305],
  p55: [1189, 416],
  p56: [1189, 596],
  p57: [1189, 738],
  p58: [1304, 431],
  p59: [1304, 596],
  p60: [1304, 738],
  p61: [1403, 431],
  p62: [1478, 431],
  p63: [1596, 431],
  p64: [1975, 1301],
  p65: [1828, 1323],
  p66: [1768, 1309],
  p67: [1521, 1242],
  p68: [1828, 1387],
  p69: [1403, 1198],
};
for (const k in P) N[k] = [P[k][0], P[k][1]];
const CH = [
  ["p1", "p4", "p5", "p3", "p28", "p29", "p30", "p31", "p32", "p33", "J"],
  ["p1", "p2", "p3"],
  ["p28", "W"],
  ["p4", "X"],
  ["p29", "p13", "p14", "p6", "p7", "p8", "p9", "p10", "p11", "p12"],
  ["p30", "p24", "p51", "p56", "p59", "p25", "p26", "p27"],
  ["p24", "I"],
  ["p47", "p48", "p49", "p50"],
  ["p31", "p51", "p52", "p6"],
  ["p50", "K"],
  ["p47", "U"],
  ["p48", "V"],
  ["p49", "p54"],
  ["p50", "p55"],
  ["p52", "H"],
  ["p53", "p54", "p55", "p32", "p56", "p57", "p60", "p38", "p39"],
  ["p53", "p41", "p42", "p43"],
  ["p55", "p58", "p61", "p62", "p63", "p35"],
  ["p58", "p33", "p59", "p60"],
  ["p41", "p61"],
  ["p62", "L"],
  ["p62", "p25"],
  ["p41", "S"],
  ["p42", "R"],
  ["p43", "p44"],
  ["p44", "p45", "p18"],
  ["p43", "p34", "p35", "p36", "p37", "p27"],
  ["p34", "Q"],
  ["p27", "F"],
  ["p38", "G"],
  ["p39", "p26"],
  ["p27", "p39"],
  ["p39", "p40", "p10", "p67"],
  ["p40", "E"],
  ["p9", "C"],
  ["p7", "B"],
  ["p11", "D"],
  [
    "p36",
    "p15",
    "p16",
    "p17",
    "p18",
    "p19",
    "p20",
    "p21",
    "p12",
    "p64",
    "p65",
    "p66",
    "p67",
    "p69",
  ],
  ["p15", "P"],
  ["p16", "M"],
  ["p17", "O"],
  ["p19", "N"],
  ["p37", "p20"],
  ["p69", "p8"],
  ["p65", "p68"],
  ["p66", "Y"],
  ["p69", "A"],
  ["A", "p68"],
  ["p68", "p23"],
  ["A", "p22"],
  ["p44", "p46", "T"],
];

const E = [],
  adj = {},
  T = {};
for (const k in N) adj[k] = [];
CH.forEach((c) => {
  for (let i = 0; i < c.length - 1; i++) {
    const a = c[i],
      b = c[i + 1],
      len = Math.hypot(N[a][0] - N[b][0], N[a][1] - N[b][1]) * M_PER_PX;
    E.push({ a, b, len });
    adj[a].push([b, E.length - 1]);
    adj[b].push([a, E.length - 1]);
  }
});
const wt = (i) => E[i].len * (1 + EXTRA[T[i] || 0]);

const TB = E.map((_, i) => ((((i + 1) * 0.6180339887498949) % 1) + 1) * 1e-6);

let TR = new Set(),
  tadj = {};
const dsu = () => {
  const p = {};
  const f = (x) => {
    p[x] ??= x;
    while (p[x] !== x) x = p[x] = p[p[x]];
    return x;
  };
  return (a, b) => {
    const ra = f(a),
      rb = f(b);
    if (ra === rb) return false;
    p[ra] = rb;
    return true;
  };
};
function jarak(s) {
  const d = {},
    prev = {},
    done = {};
  for (const k in N) d[k] = Infinity;
  d[s] = 0;
  for (;;) {
    let u = null,
      m = Infinity;
    for (const k in d)
      if (!done[k] && d[k] < m) {
        m = d[k];
        u = k;
      }
    if (u === null) break;
    done[u] = 1;
    for (const [v, i] of adj[u]) {
      const w = wt(i) + TB[i];
      if (d[u] + w < d[v]) {
        d[v] = d[u] + w;
        prev[v] = [u, i];
      }
    }
  }
  return { d, prev };
}
function kruskal(term) {
  const SP = {},
    pairs = [];
  term.forEach((t) => (SP[t] = jarak(t)));
  for (let i = 0; i < term.length; i++)
    for (let j = i + 1; j < term.length; j++)
      pairs.push([term[i], term[j], SP[term[i]].d[term[j]]]);
  pairs.sort((a, b) => a[2] - b[2]);
  let u = dsu();
  const use = new Set();
  for (const [a, b] of pairs)
    if (u(a, b))
      for (let c = b; c !== a; c = SP[a].prev[c][0]) use.add(SP[a].prev[c][1]);
  u = dsu();
  TR = new Set();
  [...use]
    .sort((a, b) => wt(a) + TB[a] - (wt(b) + TB[b]))
    .forEach((i) => {
      if (u(E[i].a, E[i].b)) TR.add(i);
    });
  tadj = {};
  for (const k in N) tadj[k] = [];
  for (const i of TR) {
    tadj[E[i].a].push([E[i].b, i]);
    tadj[E[i].b].push([E[i].a, i]);
  }
}

function treePath(s, t) {
  const prev = { [s]: null },
    q = [s];
  while (q.length) {
    const u = q.shift();
    if (u === t) break;
    for (const [v, i] of tadj[u])
      if (!(v in prev)) {
        prev[v] = [u, i];
        q.push(v);
      }
  }
  if (!(t in prev)) return null;
  const path = [t],
    es = [];
  for (let c = t; c !== s; ) {
    const [p, i] = prev[c];
    path.unshift(p);
    es.unshift(i);
    c = p;
  }
  return { path, es };
}

const $ = (s) => document.querySelector(s);
let org = "",
  dst = "",
  stops = [],
  tm = false,
  seq = [];
const fd = (m) =>
  m < 1000
    ? Math.round(m) + " m"
    : (m / 1000).toFixed(1).replace(".", ",") + " km";
const ft = (m) => (m < 0.5 ? "<1 mnt" : Math.round(m) + " mnt");
const opt = (v) =>
  '<option value="">Pilih lokasi…</option>' +
  Object.keys(P)
    .sort((a, b) => a.localeCompare(b))
    .map(
      (k) =>
        `<option value="${k}"${k === v ? " selected" : ""}>${k} - ${P[k][2]}</option>`,
    )
    .join("");

function form() {
  $("#org").innerHTML = opt(org);
  $("#dst").innerHTML = opt(dst);
  $("#stops").innerHTML = stops
    .map(
      (s, i) =>
        `<div class="row"><span class="dot">${i + 1}</span><select data-i="${i}">${opt(s)}</select><button class="x" data-u="${i}" aria-label="Naikkan urutan">↑</button><button class="x" data-d="${i}" aria-label="Turunkan urutan">↓</button><button class="x" data-r="${i}" aria-label="Hapus singgah">×</button></div>`,
    )
    .join("");
}
function drawRoads() {
  const col = ["#ffffff", "#ffc933", "#d62839"];
  $("#roads").innerHTML =
    E.map(
      (e, i) =>
        `<line x1="${N[e.a][0]}" y1="${N[e.a][1]}" x2="${N[e.b][0]}" y2="${N[e.b][1]}" stroke="#b4c2de" stroke-width="15" stroke-linecap="round"/>`,
    ).join("") +
    E.map(
      (e, i) =>
        `<line x1="${N[e.a][0]}" y1="${N[e.a][1]}" x2="${N[e.b][0]}" y2="${N[e.b][1]}" stroke="${col[T[i] || 0]}" stroke-width="10" stroke-linecap="round"/>`,
    ).join("");
  $("#hits").innerHTML = E.map(
    (e, i) =>
      `<line class="hit" data-e="${i}" x1="${N[e.a][0]}" y1="${N[e.a][1]}" x2="${N[e.b][0]}" y2="${N[e.b][1]}"/>`,
  ).join("");
  drawWeights();
}
function drawTree() {
  $("#tree").innerHTML = !$("#st").checked
    ? ""
    : [...TR]
        .map(
          (i) =>
            `<line x1="${N[E[i].a][0]}" y1="${N[E[i].a][1]}" x2="${N[E[i].b][0]}" y2="${N[E[i].b][1]}" stroke="#16a34a" stroke-width="28" stroke-linecap="round"/>`,
        )
        .join("");
}
function drawWeights() {
  const wCol = ["#0f2557", "#d97706", "#e5484d"];
  $("#wl").innerHTML = !$("#sw").checked
    ? ""
    : E.map(
        (e, i) =>
          `<text x="${(N[e.a][0] + N[e.b][0]) / 2}" y="${(N[e.a][1] + N[e.b][1]) / 2 + 5}" text-anchor="middle" font-size="15" font-weight="700" fill="${wCol[T[i] || 0]}" stroke="#fff" stroke-width="4" paint-order="stroke">${Math.round(wt(i))}</text>`,
      ).join("");
}
function drawPlaces() {
  $("#places").innerHTML = Object.keys(P)
    .map(
      (k) =>
        `<g class="bld" data-k="${k}"><title>${P[k][2]}</title><circle id="c${k}" cx="${P[k][0]}" cy="${P[k][1]}" r="19" fill="#ffffff" stroke="#0f2557" stroke-width="4"/><text x="${P[k][0]}" y="${P[k][1] + 7}" text-anchor="middle" font-size="21" font-weight="700" fill="#0f2557" style="pointer-events:none">${k}</text></g>`,
    )
    .join("");
}
function warnai() {
  Object.keys(P).forEach((k) => {
    const c = $("#c" + k);
    c.setAttribute("fill", "#ffffff");
    c.setAttribute("stroke", "#0f2557");
    c.setAttribute("r", 19);
    c.nextElementSibling.setAttribute("fill", "#0f2557");
  });
  const pilih = [org, ...stops, dst];
  pilih.forEach((k, i) => {
    if (!k) return;
    const c = $("#c" + k),
      t = c.nextElementSibling,
      awal = i === 0,
      akhir = i === pilih.length - 1;
    c.setAttribute("fill", awal ? "#ffc933" : akhir ? "#0f2557" : "#4f7bd9");
    c.setAttribute("stroke", awal ? "#0f2557" : "#ffffff");
    c.setAttribute("r", 23);
    t.setAttribute("fill", awal ? "#0f2557" : "#ffffff");
  });
}
function drawRoute(pts, hot = []) {
  warnai();
  const pl = pts.map((p) => p.join(",")).join(" ");
  const warna = ["", "#ffc933", "#d62839"];
  const pita = hot
    .map(
      ([a, b, lv]) =>
        `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="${warna[lv]}" stroke-width="28" stroke-linecap="butt"/>`,
    )
    .join("");
  $("#route").innerHTML = pts.length
    ? pita +
      `<polyline points="${pl}" fill="none" stroke="#fff" stroke-width="22" stroke-linejoin="round" stroke-linecap="round"/><polyline points="${pl}" fill="none" stroke="#0f2557" stroke-width="13" stroke-linejoin="round" stroke-linecap="round"/><polyline class="flow" points="${pl}" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="3 13" stroke-linecap="round"/>`
    : "";
  const peran = {};
  const tambah = (k, t) => {
    if (k) (peran[k] = peran[k] || []).push(t);
  };
  tambah(org, "Asal");
  let no = 0;
  stops.forEach((k) => {
    if (k) tambah(k, "Singgah " + ++no);
  });
  tambah(dst, "Tujuan");
  $("#tags").innerHTML = Object.keys(peran)
    .map((k) => {
      const [x, y] = [P[k][0], P[k][1]],
        r = peran[k],
        teks = r.join(" · "),
        tujuan = r.includes("Tujuan"),
        asal = r.includes("Asal"),
        isi = tujuan ? "#0f2557" : asal ? "#ffc933" : "#4f7bd9",
        huruf = asal && !tujuan ? "#0f2557" : "#ffffff",
        w = teks.length * 11.5 + 30,
        kiri = x > 1900,
        lx = kiri ? x - 30 : x + 30,
        cincin =
          tujuan || asal
            ? `<circle class="pulse" cx="${x}" cy="${y}" r="24" fill="none" stroke="${tujuan ? "#0f2557" : "#ffc933"}" stroke-width="4"/>`
            : "";
      return (
        cincin +
        `<g transform="translate(${x},${y - 50})"><g class="tag"><path d="M-8,13 L0,24 L8,13 Z" fill="${isi}"/><rect x="${-w / 2}" y="-18" width="${w}" height="32" rx="16" fill="${isi}" stroke="#fff" stroke-width="3"/><text y="5" text-anchor="middle" font-size="19" font-weight="800" fill="${huruf}">${teks}</text></g></g>` +
        `<text x="${lx}" y="${y + 6}" text-anchor="${kiri ? "end" : "start"}" font-size="19" font-weight="700" fill="#0f2557" stroke="#fff" stroke-width="5" paint-order="stroke">${P[k][2]}</text>`
      );
    })
    .join("");
}
function go() {
  seq = [org, ...stops, dst].filter(Boolean);
  const sel = [...new Set(seq)];
  kruskal(sel.length > 1 ? sel : Object.keys(P));
  drawTree();
  const res = $("#res");
  let pts = [],
    hotL = [];
  if (seq.length < 2) {
    res.innerHTML =
      '<div class="card meta">Pilih asal dan tujuan untuk melihat rute.</div>';
    seq = [];
    drawRoute([]);
    return;
  }
  let dist = 0,
    w = 0,
    hot = 0,
    rows = "";
  for (let i = 0; i < seq.length - 1; i++) {
    if (seq[i] === seq[i + 1]) continue;
    const r = treePath(seq[i], seq[i + 1]);
    if (!r) {
      res.innerHTML = '<div class="card err">Rute tidak ditemukan.</div>';
      drawRoute([]);
      return;
    }
    const d = r.es.reduce((s, e) => s + E[e].len, 0),
      ww = r.es.reduce((s, e) => s + wt(e), 0);
    hot += r.es.filter((e) => T[e]).length;
    r.es.forEach((e, j) => {
      if (T[e]) hotL.push([N[r.path[j]], N[r.path[j + 1]], T[e]]);
    });
    dist += d;
    w += ww;
    r.path.forEach((n, j) => {
      if (!(pts.length && !j)) pts.push(N[n]);
    });
    rows += `<div class="step"><b>${P[seq[i]][2]} ke ${P[seq[i + 1]][2]}</b><span>${fd(d)} · ${ft(ww / SPEED)}</span></div>`;
  }
  if (!pts.length) {
    res.innerHTML =
      '<div class="card meta">Asal dan tujuan berada di lokasi yang sama.</div>';
    drawRoute([]);
    return;
  }
  const extra = (w - dist) / SPEED;
  res.innerHTML =
    `<div class="card"><div class="big">${ft(w / SPEED)}</div><div class="meta">${fd(dist)} perjalanan${seq.length > 2 ? " · " + (seq.length - 2) + " singgah" : ""}</div>` +
    (hot
      ? `<div class="warn">Melewati ${hot} ruas macet, tambahan sekitar ${ft(extra)}</div>`
      : "") +
    `<div style="margin-top:12px">${rows}</div></div>`;
  drawRoute(pts, hotL);
}
function all() {
  drawRoads();
  go();
}

$("#org").onchange = (e) => {
  org = e.target.value;
  go();
};
$("#dst").onchange = (e) => {
  dst = e.target.value;
  go();
};
$("#stops").onchange = (e) => {
  stops[+e.target.dataset.i] = e.target.value;
  go();
};
$("#stops").onclick = (e) => {
  const r = e.target.dataset.r;
  if (r != null) {
    stops.splice(+r, 1);
    form();
    go();
  }
};
$("#add").onclick = () => {
  stops.push("");
  form();
};
$("#tm").onclick = () => {
  tm = !tm;
  $("#tm").classList.toggle("on", tm);
  document.body.classList.toggle("tm-on", tm);
};
$("#clr").onclick = () => {
  for (const k in T) delete T[k];
  all();
};
$("#st").onchange = drawTree;
$("#sw").onchange = drawWeights;

const svg = $("#map"),
  VB = [0, 0, 2300, 1625];
let vb = VB.slice(),
  drag = null,
  mv = 0;
const setVB = () => {
  const minX = -vb[2] + 300,
    maxX = 2300 - 300;
  const minY = -vb[3] + 300,
    maxY = 1625 - 300;
  vb[0] = Math.max(minX, Math.min(vb[0], maxX));
  vb[1] = Math.max(minY, Math.min(vb[1], maxY));
  svg.setAttribute("viewBox", vb.join(" "));
};
const toSvg = (x, y) => {
  const p = svg.createSVGPoint();
  p.x = x;
  p.y = y;
  return p.matrixTransform(svg.getScreenCTM().inverse());
};
function zoom(k, cx, cy) {
  const nw = Math.min(Math.max(vb[2] * k, 500), 2800),
    f = nw / vb[2];
  vb = [cx - (cx - vb[0]) * f, cy - (cy - vb[1]) * f, nw, vb[3] * f];
  setVB();
}
svg.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    const p = toSvg(e.clientX, e.clientY);
    zoom(e.deltaY > 0 ? 1.15 : 1 / 1.15, p.x, p.y);
  },
  { passive: false },
);
svg.addEventListener("pointerdown", (e) => {
  drag = {
    x: e.clientX,
    y: e.clientY,
    vb: vb.slice(),
    s: 1 / svg.getScreenCTM().a,
  };
  mv = 0;
});
addEventListener("pointermove", (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x,
    dy = e.clientY - drag.y;
  mv = Math.max(mv, Math.abs(dx) + Math.abs(dy));
  vb = [drag.vb[0] - dx * drag.s, drag.vb[1] - dy * drag.s, vb[2], vb[3]];
  setVB();
});
addEventListener("pointerup", () => (drag = null));
addEventListener("pointercancel", () => (drag = null));
const mid = () => [vb[0] + vb[2] / 2, vb[1] + vb[3] / 2];
$("#zi").onclick = () => zoom(1 / 1.3, ...mid());
$("#zo").onclick = () => zoom(1.3, ...mid());
$("#zr").onclick = () => {
  vb = VB.slice();
  setVB();
};

svg.addEventListener("click", (e) => {
  const i = e.target.dataset && e.target.dataset.e;
  if (!tm || i == null || mv > 5) return;
  T[i] = ((T[i] || 0) + 1) % 3;
  all();
});

let tbKlikKe = 0;

const CONTOH_MACET = [
  ["p6", "p7", 2],
  ["p7", "p8", 2],
  ["p8", "p9", 2],
  ["p9", "p10", 2],
  ["p10", "p11", 1],
  ["p40", "p10", 2],
  ["p39", "p40", 1],
  ["p40", "E", 1],
  ["p38", "p39", 1],
  ["p57", "p60", 1],
  ["p60", "p38", 1],
  ["p26", "p39", 1],
  ["p27", "p39", 1],
  ["p27", "F", 1],
];

const tbNama = (k) => (P[k] ? P[k][2] : k);
function tbKalimat(awalTeks, antara, akhirTeks) {
  if (!antara.length)
    return "Dari " + awalTeks + " langsung menuju " + akhirTeks + ".";
  return (
    "Dari " +
    awalTeks +
    " menuju " +
    antara[0] +
    antara
      .slice(1)
      .map((x) => ", lalu menuju " + x)
      .join("") +
    "."
  );
}

function tbAnalisis() {
  const box = $("#analisisRute");
  const judul = "<h3>Rute yang ditampilkan</h3>";
  if (seq.length < 2 || seq.every((t) => t === seq[0])) {
    box.innerHTML =
      judul +
      '<div class="sub2">Pilih asal dan tujuan yang berbeda untuk melihat rute.</div>';
    return;
  }
  const jalur = [seq[0]],
    legs = [];
  for (let i = 1; i < seq.length; i++) {
    if (seq[i] === seq[i - 1]) continue;
    const r = treePath(seq[i - 1], seq[i]);
    if (!r) {
      box.innerHTML = judul + '<div class="sub2">Rute tidak ditemukan.</div>';
      return;
    }
    r.path.slice(1).forEach((v) => jalur.push(v));
    legs.push({ dari: seq[i - 1], ke: seq[i], es: r.es });
  }
  const nm = seq.map(tbNama);
  const cs = {};
  jalur.forEach((v) => (cs[v] = (cs[v] || 0) + 1));
  const unik = Object.keys(cs).length,
    ulang = new Set(Object.keys(cs).filter((v) => cs[v] > 1));
  const rows = legs
    .map((l) => {
      const d = l.es.reduce((s, e) => s + E[e].len, 0),
        w = l.es.reduce((s, e) => s + wt(e), 0);
      return (
        '<div class="step"><b>' +
        tbNama(l.dari) +
        " ke " +
        tbNama(l.ke) +
        "</b><span>" +
        fd(d) +
        " &middot; " +
        ft(w / SPEED) +
        "</span></div>"
      );
    })
    .join("");
  const chips = jalur
    .map(
      (v) =>
        '<span class="chip' +
        (P[v] ? " b" : "") +
        (ulang.has(v) ? " ulang" : "") +
        '">' +
        v +
        "</span>",
    )
    .join('<span class="panah">&rarr;</span>');
  box.innerHTML =
    judul +
    '<div class="sub2" style="margin-top:6px">' +
    tbKalimat(nm[0], nm.slice(1, -1), nm[nm.length - 1]) +
    "</div>" +
    '<div style="margin-top:8px">' +
    rows +
    "</div>" +
    '<div class="chips" style="margin-top:8px">' +
    chips +
    "</div>" +
    '<br><div class="sub2">Biru = gedung, abu-abu = persimpangan, bingkai merah = simpul yang dilewati lebih dari sekali.</div>' +
    '<div class="sub2" style="margin-top:6px">' +
    (jalur.length - 1) +
    " ruas ditempuh, " +
    unik +
    " simpul berbeda.</div>";
}

const goUtama = go;
go = function () {
  goUtama();
  tbAnalisis();
};

$("#tukar").onclick = () => {
  const t = org;
  org = dst;
  dst = t;
  stops.reverse();
  form();
  go();
};

$("#stops").addEventListener("click", (e) => {
  const u = e.target.dataset && e.target.dataset.u,
    d = e.target.dataset && e.target.dataset.d;
  if (u != null && +u > 0) {
    const i = +u;
    [stops[i - 1], stops[i]] = [stops[i], stops[i - 1]];
    form();
    go();
  } else if (d != null && +d < stops.length - 1) {
    const i = +d;
    [stops[i + 1], stops[i]] = [stops[i], stops[i + 1]];
    form();
    go();
  }
});

$("#contoh").onclick = () => {
  for (const k in T) delete T[k];
  CONTOH_MACET.forEach(([a, b, lv]) => {
    const i = E.findIndex(
      (e) => (e.a === a && e.b === b) || (e.a === b && e.b === a),
    );
    if (i >= 0) T[i] = lv;
  });
  all();
};

$("#bantuL").innerHTML = Object.keys(N)
  .filter((k) => !P[k])
  .map(
    (id) =>
      `<text x="${N[id][0] + 8}" y="${N[id][1] - 8}" font-size="15" font-weight="700" fill="#b91c1c" stroke="#fff" stroke-width="4" paint-order="stroke">${id}</text><circle cx="${N[id][0]}" cy="${N[id][1]}" r="4.5" fill="#b91c1c"/>`,
  )
  .join("");
$("#bantu").onchange = (e) => {
  $("#bantuL").style.display = e.target.checked ? "" : "none";
};

svg.addEventListener(
  "click",
  (e) => {
    if (mv > 5) return;
    const b = e.target.closest && e.target.closest(".bld");
    if (!b) return;
    const id = b.dataset.k;
    if (e.shiftKey) stops.push(id);
    else {
      if (tbKlikKe % 2 === 0) org = id;
      else dst = id;
      tbKlikKe++;
    }
    form();
    go();
    e.stopPropagation();
  },
  true,
);

document
  .querySelectorAll(".v-skala")
  .forEach((e) => (e.textContent = String(M_PER_PX).replace(".", ",")));
document.querySelectorAll(".v-kec").forEach((e) => (e.textContent = SPEED));

form();
drawPlaces();
all();
