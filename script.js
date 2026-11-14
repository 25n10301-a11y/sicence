const exhibits = [
  {
    number: "01", category: "PHYSICS · 파동", symbol: "〰",
    title: "소리와 파동의 세계",
    summary: "소리는 어떻게 전달되고, 왜 물속에서는 다르게 들릴까요?",
    intro: "소리는 물체의 진동이 주변 매질을 통해 퍼져 나가는 파동입니다.",
    principle: "소리는 공기, 물, 고체와 같은 매질의 입자들이 진동하면서 전달되는 역학적 파동입니다. 일반적으로 입자 사이의 상호작용이 강하고 매질의 압축률이 낮을수록 소리의 전달 속도가 빠릅니다. 따라서 소리는 보통 공기보다 물에서 더 빠르게 전달됩니다.",
    example: "수영장 물속에서 소리를 들으면 공기 중에서 들을 때와 느낌이 달라질 수 있습니다. 물속에서는 소리의 전달 속도와 귀에 도달하는 경로, 외이의 작동 조건 등이 달라지기 때문입니다."
  },
  {
    number: "02", category: "CHEMISTRY · 물질", symbol: "⚗",
    title: "물질의 구조와 변화",
    summary: "눈에 보이지 않는 원자와 분자는 물질의 성질을 어떻게 결정할까요?",
    intro: "모든 물질은 원자와 분자로 이루어져 있으며, 입자의 배열과 결합 방식에 따라 성질이 달라집니다.",
    principle: "원자는 원자핵과 전자로 이루어져 있습니다. 원자들은 전자를 주고받거나 공유하면서 화학 결합을 형성하고, 이렇게 만들어진 분자나 결정의 구조가 물질의 성질에 영향을 줍니다. 화학 변화에서는 원자 자체가 사라지는 것이 아니라 원자 사이의 결합이 끊어지고 새롭게 형성됩니다.",
    example: "철이 녹스는 현상은 철이 산소와 반응해 산화철을 만드는 화학 변화입니다. 반면 얼음이 녹는 현상은 물 분자의 종류가 바뀌지 않는 상태 변화입니다."
  },
  {
    number: "03", category: "ASTRONOMY · 우주", symbol: "✧",
    title: "우주와 별의 탄생",
    summary: "별은 어떻게 태어나고, 밤하늘의 빛은 어디에서 올까요?",
    intro: "우주는 수많은 은하와 별, 행성으로 이루어져 있으며 지금도 변화하고 있습니다.",
    principle: "별은 거대한 성간 기체와 먼지 구름이 중력에 의해 수축하면서 형성됩니다. 중심부의 온도와 압력이 충분히 높아지면 수소 핵융합이 시작되고, 이 과정에서 에너지가 방출됩니다. 별의 질량은 별의 밝기와 수명, 마지막 진화 단계에 큰 영향을 줍니다.",
    example: "태양은 핵에서 수소 핵융합을 일으키며 빛과 열을 방출합니다. 우리가 보는 태양빛은 지구에 도달하기까지 약 8분 20초가 걸립니다."
  },
  {
    number: "04", category: "BIOLOGY · 생명", symbol: "⌘",
    title: "생명과 세포의 비밀",
    summary: "작은 세포 안에서는 어떤 일이 일어나고 있을까요?",
    intro: "세포는 생명체를 이루는 기본 단위이며, 생명 활동에 필요한 여러 기능을 수행합니다.",
    principle: "세포막은 세포 안팎의 물질 이동을 조절합니다. 세포 안의 세포질에는 다양한 세포 소기관이 있으며, 진핵세포의 핵에는 유전 정보인 DNA가 들어 있습니다. DNA의 정보는 단백질 합성에 활용되어 생명체의 구조와 기능에 관여합니다.",
    example: "근육을 움직일 때 근육세포는 ATP라는 에너지 운반 분자를 사용합니다. 우리가 섭취한 영양소는 세포 호흡 과정을 거쳐 ATP를 만드는 데 이용됩니다."
  }
];

const grid = document.getElementById("exhibitGrid");
const modal = document.getElementById("modal");

exhibits.forEach((item) => {
  const card = document.createElement("button");
  card.className = "exhibit-card";
  card.type = "button";
  card.innerHTML = `
    <span class="card-number">${item.number} / EXHIBITION</span>
    <span class="card-symbol" aria-hidden="true">${item.symbol}</span>
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
    <span class="card-more">전시 자세히 보기 →</span>
  `;
  card.addEventListener("click", () => openExhibit(item));
  grid.appendChild(card);
});

function openExhibit(item) {
  document.getElementById("modalCategory").textContent = item.category;
  document.getElementById("modalTitle").textContent = item.title;
  document.getElementById("modalIntro").textContent = item.intro;
  document.getElementById("modalPrinciple").textContent = item.principle;
  document.getElementById("modalExample").textContent = item.example;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.getElementById("closeModal").focus();
}

function closeExhibit() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

document.getElementById("closeModal").addEventListener("click", closeExhibit);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeExhibit();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeExhibit();
});
