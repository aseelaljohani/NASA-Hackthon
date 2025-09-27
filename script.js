/* ===== Sample Data (replace with real publications later) ===== */
const publications = [
  {
    title: "Microgravity Effects on Plant Cell Wall Development in Arabidopsis thaliana",
    authors: "Smith et al.",
    date: "2023-05",
    summary: "Study reveals microgravity reduces plant cell wall thickness and alters structural proteins in Arabidopsis thaliana grown in space environments.",
    abstract: "Plants exposed to microgravity show altered cell wall composition and growth rates with significant changes in cellulose deposition.",
    conclusion: "Microgravity affects plant growth patterns, suggesting implications for long-term space agriculture.",
    keywords: ["Plant", "Microgravity", "Cell Wall", "Arabidopsis"],
    link: "https://nasa.gov/example1",
  },
  {
    title: "Radiation-Induced DNA Damage Response in Human Fibroblasts During Long-Duration Spaceflight",
    authors: "Johnson et al.",
    date: "2024-03",
    summary: "Human cells show 2.3-fold increase in DNA damage markers and altered repair kinetics during extended spaceflight missions.",
    abstract: "Cells experienced increased DNA strand breaks and mutations when exposed to radiation with delayed repair responses.",
    conclusion: "Radiation poses significant risks to human cellular integrity on long-duration missions.",
    keywords: ["Human", "Radiation", "DNA Damage", "Spaceflight"],
    link: "https://nasa.gov/example2",
  },
  {
    title: "Microbial Community Dynamics in Closed-Loop Life Support Systems",
    authors: "Lee et al.",
    date: "2023-08",
    summary: "90 day study shows closed spacecraft environment promotes bacterial diversity changes and functional shifts in microbial communities.",
    abstract: "Microbial populations modify gene regulation to survive space conditions with significant changes in community structure.",
    conclusion: "Spaceflight triggers adaptive mechanisms, affecting microbial virulence and resistance.",
    keywords: ["Microbe", "Spaceflight", "Community", "Life Support"],
    link: "https://nasa.gov/example3",
  },
  {
    title: "Gravity Perception in Plant Roots During Spaceflight",
    authors: "Chen et al.",
    date: "2022-12",
    summary: "Root gravitropism mechanisms altered in microgravity with implications for space agriculture and plant development.",
    abstract: "Root growth patterns significantly changed in absence of gravity with altered auxin distribution patterns.",
    conclusion: "Gravity perception critical for normal plant development in terrestrial environments.",
    keywords: ["Plant", "Gravity", "Roots", "Gravitropism"],
    link: "https://nasa.gov/example4",
  },
  {
    title: "Immune System Adaptation in Long-Duration Space Missions",
    authors: "Williams et al.",
    date: "2024-01",
    summary: "Astronaut immune responses show decreased T-cell function and increased inflammation markers during extended spaceflight.",
    abstract: "Immune system changes observed in astronauts include reduced lymphocyte counts and altered cytokine production.",
    conclusion: "Extended spaceflight poses significant challenges to human immune system function.",
    keywords: ["Human", "Immune System", "Spaceflight", "Health"],
    link: "https://nasa.gov/example5",
  },
  {
    title: "Metabolic Changes in Mice During Simulated Mars Gravity",
    authors: "Rodriguez et al.",
    date: "2023-11",
    summary: "Mice exposed to Mars gravity simulation show altered metabolic rates and bone density changes over 30-day period.",
    abstract: "Reduced gravity environments lead to significant changes in bone metabolism and muscle protein synthesis.",
    conclusion: "Partial gravity environments require specific countermeasures for maintaining health.",
    keywords: ["Mouse", "Metabolism", "Mars Gravity", "Bone"],
    link: "https://nasa.gov/example6",
  },
  {
    title: "Photosynthetic Efficiency in Space-Grown Crops",
    authors: "Patel et al.",
    date: "2022-09",
    summary: "LED lighting optimization improves crop yields in space agriculture systems with 15% increase in biomass production.",
    abstract: "Light spectrum and intensity optimization critical for maximizing photosynthetic efficiency in space environments.",
    conclusion: "Controlled environment agriculture essential for sustainable space missions.",
    keywords: ["Plant", "Photosynthesis", "LED", "Agriculture"],
    link: "https://nasa.gov/example7",
  },
  {
    title: "Bacterial Virulence Changes in Microgravity",
    authors: "Kim et al.",
    date: "2024-02",
    summary: "Pathogenic bacteria show increased virulence and antibiotic resistance when cultured in microgravity conditions.",
    abstract: "Microgravity environment affects bacterial gene expression leading to enhanced pathogenicity and drug resistance.",
    conclusion: "Space environment poses unique challenges for infection control and treatment.",
    keywords: ["Bacteria", "Virulence", "Microgravity", "Antibiotics"],
    link: "https://nasa.gov/example8",
  },
  {
    title: "Circadian Rhythm Disruption in Space",
    authors: "Anderson et al.",
    date: "2023-06",
    summary: "Astronauts experience significant circadian rhythm disruption affecting sleep patterns and cognitive performance.",
    abstract: "Light-dark cycle changes in space lead to melatonin secretion alterations and sleep quality degradation.",
    conclusion: "Circadian rhythm management critical for astronaut health and performance.",
    keywords: ["Human", "Circadian", "Sleep", "Performance"],
    link: "https://nasa.gov/example9",
  },
  {
    title: "Plant Stress Response Mechanisms in Space",
    authors: "Thompson et al.",
    date: "2022-07",
    summary: "Arabidopsis plants activate unique stress response pathways when exposed to space environment conditions.",
    abstract: "Oxidative stress markers and antioxidant enzyme activity significantly increased in space-grown plants.",
    conclusion: "Space environment triggers complex stress response mechanisms in plants.",
    keywords: ["Plant", "Stress", "Oxidative", "Antioxidants"],
    link: "https://nasa.gov/example10",
  },
  {
    title: "Muscle Atrophy Prevention in Microgravity",
    authors: "Garcia et al.",
    date: "2024-04",
    summary: "Exercise protocols and nutritional interventions reduce muscle mass loss by 40% in simulated microgravity studies.",
    abstract: "Combined resistance training and protein supplementation maintain muscle protein synthesis rates.",
    conclusion: "Integrated countermeasures essential for maintaining muscle health in space.",
    keywords: ["Human", "Muscle", "Exercise", "Nutrition"],
    link: "https://nasa.gov/example11",
  },
  {
    title: "Microbial Contamination in Spacecraft Air",
    authors: "Zhang et al.",
    date: "2023-10",
    summary: "Air filtration systems reduce microbial contamination by 85% but require regular maintenance in closed environments.",
    abstract: "Microbial diversity in spacecraft air increases over time without proper filtration and ventilation systems.",
    conclusion: "Air quality management critical for crew health in space missions.",
    keywords: ["Microbe", "Air Quality", "Filtration", "Contamination"],
    link: "https://nasa.gov/example12",
  },
  {
    title: "Bone Density Loss Prevention Strategies",
    authors: "Brown et al.",
    date: "2022-11",
    summary: "Combined exercise and bisphosphonate treatment reduces bone density loss by 60% in long-duration spaceflight simulations.",
    abstract: "Weight-bearing exercise combined with pharmacological interventions maintains bone mineral density.",
    conclusion: "Multi-modal approach required to prevent bone loss in microgravity.",
    keywords: ["Human", "Bone", "Exercise", "Bisphosphonates"],
    link: "https://nasa.gov/example13",
  },
  {
    title: "Plant Nutrient Uptake in Hydroponic Systems",
    authors: "Wilson et al.",
    date: "2024-05",
    summary: "Optimized nutrient solutions improve plant growth rates by 25% in space-based hydroponic cultivation systems.",
    abstract: "Nutrient concentration and pH optimization critical for maximizing plant growth in closed systems.",
    conclusion: "Hydroponic system optimization essential for space agriculture success.",
    keywords: ["Plant", "Hydroponics", "Nutrients", "Growth"],
    link: "https://nasa.gov/example14",
  },
  {
    title: "Psychological Effects of Space Isolation",
    authors: "Taylor et al.",
    date: "2023-12",
    summary: "Extended isolation in space environments leads to increased stress levels and decreased cognitive performance over time.",
    abstract: "Social isolation and confinement stress significantly impact astronaut mental health and decision-making abilities.",
    conclusion: "Psychological support systems essential for long-duration space missions.",
    keywords: ["Human", "Psychology", "Isolation", "Stress"],
    link: "https://nasa.gov/example15",
  },
];

let currentPage = 1;
const itemsPerPage = 3; 

function renderPublications(data) {
  const container = document.getElementById("publicationsGrid");
  container.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = data.slice(start, end);

  pageItems.forEach((pub, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${pub.title}</h3>
      <p class="authors">${pub.authors}</p>
      <p class="date">${pub.date}</p>
      <p class="summary">${pub.summary}</p>
      <div class="tags">${pub.keywords.map(kw => `<span>${kw}</span>`).join('')}</div>
      <a href="${pub.link}" target="_blank">
        <button>Read Full Paper</button>
      </a>
      <button class="expand-btn">Expand</button>
      <div class="expanded-content" style="display:none; margin-top:10px;">
        <p><strong>Abstract:</strong> ${pub.abstract || "No abstract available."}</p>
        <p><strong>Conclusion:</strong> ${pub.conclusion || "No conclusion available."}</p>
      </div>
    `;

    // Expand / Collapse toggle
    const expandBtn = card.querySelector(".expand-btn");
    const expandedContent = card.querySelector(".expanded-content");
    expandBtn.addEventListener("click", () => {
      if (expandedContent.style.display === "none") {
        expandedContent.style.display = "block";
        expandBtn.textContent = "Collapse";
      } else {
        expandedContent.style.display = "none";
        expandBtn.textContent = "Expand";
      }
    });

    container.appendChild(card);
  });

  document.getElementById("pageInfo").textContent =
    `Page ${currentPage} of ${Math.ceil(data.length / itemsPerPage)}`;
  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled = end >= data.length;

  const resultsCount = document.getElementById("resultsCount");
  if (resultsCount) resultsCount.textContent = `Showing ${data.length} publications`;
  const pubCount = document.getElementById("pubCount");
  if (pubCount) pubCount.textContent = String(data.length);
}



/* ===== Search & Filters ===== */
function filterPublications() {
  const query = document
    .getElementById("searchBar")
    .value.toLowerCase()
    .trim();

  const organismType = document.getElementById("organismFilter").value;
  const experimentType = document.getElementById("experimentFilter").value;
  const year = document.getElementById("yearFilter").value;

  const results = publications.filter((pub) => {
    const matchesQuery =
      pub.title.toLowerCase().includes(query) ||
      pub.summary.toLowerCase().includes(query) ||
      pub.keywords.some((kw) => kw.toLowerCase().includes(query));

    const matchesOrganism =
      !organismType || pub.keywords.includes(organismType);
    const matchesExperiment =
      !experimentType || pub.keywords.includes(experimentType);
    const matchesYear = !year || pub.date.startsWith(year);

    return matchesQuery && matchesOrganism && matchesExperiment && matchesYear;
  });

  renderPublications(results);
}

// simple tabs visibility (no structural changes)
document.addEventListener("DOMContentLoaded", () => {
  const sections = {
    tabPublications: document.querySelector(".publications"),
    tabGraph: document.querySelector(".knowledge-graph"),
    tabAnalytics: document.querySelector(".analytics"),
  };
  function activateTab(id) {
    ["tabPublications", "tabGraph", "tabAnalytics"].forEach((tid) => {
      const btn = document.getElementById(tid);
      if (btn) btn.classList.toggle("active", tid === id);
    });
    Object.values(sections).forEach((el) => el && (el.style.display = "none"));
    const show = sections[id];
    if (show) show.style.display = "block";
    // initialize analytics visuals when analytics tab is shown
    if (id === "tabAnalytics") {
      ensureAnalyticsBuilt();
    }
  }
  const btnPub = document.getElementById("tabPublications");
  const btnGraph = document.getElementById("tabGraph");
  const btnAnalytics = document.getElementById("tabAnalytics");
  if (btnPub && btnGraph && btnAnalytics) {
    btnPub.addEventListener("click", () => activateTab("tabPublications"));
    btnGraph.addEventListener("click", () => activateTab("tabGraph"));
    btnAnalytics.addEventListener("click", () => activateTab("tabAnalytics"));
    // default
    activateTab("tabPublications");
  }
});

/* ===== Autocomplete for Search Bar ===== */
document.getElementById("searchBar").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const suggestions = publications
    .flatMap((pub) => pub.keywords)
    .filter((kw, index, self) => self.indexOf(kw) === index) // unique
    .filter((kw) => kw.toLowerCase().includes(query));

  // Future: show dropdown with suggestions
  console.log("Suggestions:", suggestions);
});

/* ===== Update Year Label ===== */
document.getElementById("yearFilter").addEventListener("input", function () {
  const year = this.value;
  document.getElementById("yearStart").textContent = year;
  document.getElementById("yearEnd").textContent = year;
});

/* ===== Knowledge Graph with working Zoom / Fullscreen / Reset ===== */
function renderKnowledgeGraph() {
  // clear previous graph if exists
  const graphArea = document.getElementById("graphArea");
  graphArea.innerHTML = "";

  // build nodes & links from publications
  const nodes = [];
  const links = [];

  publications.forEach((pub, i) => {
    const pubId = `pub${i}`;
    nodes.push({ id: pubId, name: pub.title, type: "publication" });
    pub.keywords.forEach((kw) => {
      // use keyword id same as name
      if (!nodes.find((n) => n.id === kw)) {
        nodes.push({ id: kw, name: kw, type: "keyword" });
      }
      links.push({ source: pubId, target: kw });
    });
  });

  // dimensions
  let width = graphArea.clientWidth || 800;
  let height = Math.max(400, window.innerHeight * 0.55);

  // create svg and a container group that will be transformed by zoom
  const svg = d3
    .select("#graphArea")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("role", "img")
    .attr("aria-label", "Knowledge graph of publications and entities");

  const container = svg.append("g"); // everything drawn inside this group

  // define zoom behavior (scale limits)
  const zoom = d3
    .zoom()
    .scaleExtent([0.2, 8]) // min, max zoom
    .on("zoom", (event) => {
      container.attr("transform", event.transform);
    });

  // attach zoom behavior to svg
  svg.call(zoom).on("dblclick.zoom", null); // optionally disable dblclick zoom

  // simulation
  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance((d) => (d.source.type === "publication" ? 120 : 80))
    )
    .force("charge", d3.forceManyBody().strength(-250))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide(20));

  // draw links and nodes in container so zoom affects them
  const link = container
    .append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .enter()
    .append("line")
    .attr("stroke", "#9aa")
    .attr("stroke-opacity", 0.6)
    .attr("stroke-width", 1.2);

  const node = container
    .append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "node-group");

  node
    .append("circle")
    .attr("r", (d) => (d.type === "publication" ? 10 : 8))
    .attr("fill", (d) => (d.type === "publication" ? "#FFA500" : "#87CEEB"))
    .attr("stroke", "#0b0d17")
    .attr("stroke-width", 1.2)
    .call(
      d3
        .drag()
        .on("start", (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("end", (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          // keep node fixed after drag? set to null to make it float again:
          d.fx = null;
          d.fy = null;
        })
    )
    .on("mouseover", function (event, d) {
      // tooltip
      const tooltip = document.createElement("div");
      tooltip.id = "graph-tooltip";
      tooltip.style.position = "absolute";
      tooltip.style.pointerEvents = "none";
      tooltip.style.background = "rgba(0,0,0,0.85)";
      tooltip.style.color = "#00D1FF";
      tooltip.style.padding = "6px 8px";
      tooltip.style.borderRadius = "6px";
      tooltip.style.fontSize = "12px";
      tooltip.style.maxWidth = "320px";
      tooltip.innerHTML =
        `<strong>${escapeHtml(d.name)}</strong>` +
        (d.type === "publication"
          ? `<div style="margin-top:6px;color:#cfcfcf;font-size:12px">${escapeHtml(getSummaryForPub(d.id) || "")}</div>`
          : "");
      document.body.appendChild(tooltip);
      moveTooltip(event);
    })
    .on("mousemove", moveTooltip)
    .on("mouseout", () => {
      const t = document.getElementById("graph-tooltip");
      if (t) t.remove();
    })
    .on("click", (event, d) => {
      if (d.type === "publication") {
        openPublicationByTitle(d.name);
      } else {
        // filter publications by this keyword
        filterByKeyword(d.name);
      }
    });

  node
    .append("text")
    .text((d) => d.name)
    .attr("font-size", 10)
    .attr("fill", "#fff")
    .attr("dx", 12)
    .attr("dy", 4);

  simulation.on("tick", () => {
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    node.attr("transform", (d) => `translate(${d.x},${d.y})`);
  });

  // programmatic zoom handlers (centered on svg center)
  const zoomCenter = [width / 2, height / 2];
  const zoomStep = 1.2;

  const zoomInBtn = document.getElementById("zoomIn");
  const zoomOutBtn = document.getElementById("zoomOut");
  const resetBtn = document.getElementById("resetGraph");
  const fullscreenBtn = document.getElementById("fullscreenGraph");

  // guard: remove previous listeners if any (prevent duplicate handlers)
  if (zoomInBtn._attached !== true) {
    zoomInBtn.addEventListener("click", () => {
      svg.transition().duration(350).call(zoom.scaleBy, zoomStep, zoomCenter);
    });
    zoomInBtn._attached = true;
  }

  if (zoomOutBtn._attached !== true) {
    zoomOutBtn.addEventListener("click", () => {
      svg.transition().duration(350).call(zoom.scaleBy, 1 / zoomStep, zoomCenter);
    });
    zoomOutBtn._attached = true;
  }

  if (resetBtn._attached !== true) {
    resetBtn.addEventListener("click", () => {
      svg.transition().duration(400).call(zoom.transform, d3.zoomIdentity);
    });
    resetBtn._attached = true;
  }

  if (fullscreenBtn._attached !== true) {
    fullscreenBtn.addEventListener("click", async () => {
      if (!document.fullscreenElement) {
        try {
          await graphArea.requestFullscreen();
        } catch (err) {
          console.error("Fullscreen request failed:", err);
        }
      } else {
        try {
          await document.exitFullscreen();
        } catch (err) {
          console.error("Exit fullscreen failed:", err);
        }
      }
    });
    fullscreenBtn._attached = true;
  }

  // when entering/exiting fullscreen or on resize, update svg size & simulation center
  function updateSize() {
    const w = graphArea.clientWidth || window.innerWidth;
    const h = Math.max(400, window.innerHeight * 0.65);
    width = w;
    height = h;
    svg.attr("width", width).attr("height", height);
    simulation.force("center", d3.forceCenter(width / 2, height / 2));
    simulation.alpha(0.3).restart();
  }

  window.addEventListener("resize", updateSize);
  document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement === graphArea) {
    svg.attr("width", window.innerWidth).attr("height", window.innerHeight);
    simulation.force("center", d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2)).alpha(1).restart();
  } else {
    const rect = graphArea.getBoundingClientRect();
    svg.attr("width", rect.width).attr("height", rect.height);
    simulation.force("center", d3.forceCenter(rect.width / 2, rect.height / 2)).alpha(1).restart();
  }
});


  // helper: move tooltip with mouse
  function moveTooltip(event) {
    const t = document.getElementById("graph-tooltip");
    if (!t) return;
    const left = event.pageX + 12;
    let top = event.pageY + 12;
    // keep tooltip inside viewport
    if (left + t.offsetWidth > window.innerWidth) {
      t.style.left = window.innerWidth - t.offsetWidth - 10 + "px";
    } else {
      t.style.left = left + "px";
    }
    if (top + t.offsetHeight > window.innerHeight) {
      top = event.pageY - t.offsetHeight - 12;
    }
    t.style.top = top + "px";
  }

  // small helpers that integrate with the rest of your page
  function getSummaryForPub(pubId) {
    // pubId format "pub0", "pub1", ...
    if (!pubId.startsWith("pub")) return "";
    const index = parseInt(pubId.replace("pub", ""), 10);
    const p = publications[index];
    return p ? p.summary : "";
  }

  function openPublicationByTitle(title) {
    // Simple default behaviour: find the card and scroll into view
    // You should implement your modal/drawer opening logic here
    const cards = Array.from(document.querySelectorAll(".card h3"));
    const target = cards.find((el) => el.textContent === title);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      // Add highlight
      const c = target.closest(".card");
      if (c) {
        c.classList.add("highlight");
        setTimeout(() => c.classList.remove("highlight"), 2000);
      }
    }
  }

  function filterByKeyword(keyword) {
    // apply filter on publications list
    const searchInput = document.getElementById("searchBar");
    searchInput.value = keyword;
    filterPublications(); // your existing filter function will run
  }

  // escapeHtml to avoid tooltip injection
  function escapeHtml(str) {
    if (!str) return "";
    return str.replace(/[&<>"'`=\/]/g, function (s) {
      return (
        {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#x2F;",
          "`": "&#x60;",
          "=": "&#x3D;",
        }[s] || s
      );
    });
  }
} // end renderKnowledgeGraph


/* ===== Analytics (Chart.js) ===== */
function renderAnalytics() {
  const ctx1 = document.getElementById("chart1").getContext("2d");
  const ctx2 = document.getElementById("chart2").getContext("2d");
  const ctx3 = document.getElementById("chart3").getContext("2d");

  // Top Progress Areas
  const allKeywords = publications.flatMap((pub) => pub.keywords);
  const keywordCounts = allKeywords.reduce((acc, kw) => {
    acc[kw] = (acc[kw] || 0) + 1;
    return acc;
  }, {});

  new Chart(ctx1, {
    type: "bar",
    data: {
      labels: Object.keys(keywordCounts),
      datasets: [
        {
          label: "Publications",
          data: Object.values(keywordCounts),
          backgroundColor: "#4cc9f0",
        },
      ],
    },
  });

  // Knowledge Gaps (keywords with only 1 publication)
  const gaps = Object.entries(keywordCounts).filter(([_, count]) => count === 1);

  new Chart(ctx2, {
    type: "doughnut",
    data: {
      labels: gaps.map((g) => g[0]),
      datasets: [
        {
          data: gaps.map((g) => g[1]),
          backgroundColor: ["#ef233c", "#4361ee", "#fca311", "#2a9d8f"],
        },
      ],
    },
  });

  // Consensus vs Disagreement (dummy values)
  new Chart(ctx3, {
    type: "pie",
    data: {
      labels: ["Consensus", "Disagreement"],
      datasets: [
        {
          data: [70, 30],
          backgroundColor: ["#4cc9f0", "#ef233c"],
        },
      ],
    },
  });
}

// Build the full Analytics section (charts + lists) without altering existing code
let _analyticsBuilt = false;
function ensureAnalyticsBuilt() {
  if (_analyticsBuilt) return;
  _analyticsBuilt = true;

  // Middle charts
  const barCtx = document.getElementById("analyticsBarChart");
  const pieCtx = document.getElementById("analyticsPieChart");
  if (barCtx && pieCtx && window.Chart) {
    const topResearchAreas = [
      { label: "Microgravity", value: 27 },
      { label: "Human Physiology", value: 22 },
      { label: "Radiation", value: 18 },
      { label: "Microbiology", value: 18 },
      { label: "Plant Biology", value: 14 },
    ];

    new Chart(barCtx.getContext("2d"), {
      type: "bar",
      data: {
        labels: topResearchAreas.map((r) => r.label),
        datasets: [
          {
            label: "Studies",
            data: topResearchAreas.map((r) => r.value),
            backgroundColor: [
              "#12d6ff",
              "#7c4dff",
              "#ff6b6b",
              "#ffd166",
              "#06d6a0",
            ],
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false, labels: { color: "#cfd3ff", font: { size: 10 } } },
        },
        scales: {
          x: {
            ticks: { color: "#cfd3ff", font: { size: 10 } },
            grid: { color: "rgba(255,255,255,0.06)" },
          },
          y: {
            ticks: { color: "#cfd3ff", font: { size: 10 } },
            grid: { color: "rgba(255,255,255,0.06)" },
            beginAtZero: true,
          },
        },
      },
    });

    new Chart(pieCtx.getContext("2d"), {
      type: "pie",
      data: {
        labels: topResearchAreas.map((r) => r.label),
        datasets: [
          {
            data: topResearchAreas.map((r) => r.value),
            backgroundColor: [
              "#12d6ff",
              "#7c4dff",
              "#ff6b6b",
              "#ffd166",
              "#06d6a0",
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: "#e9ecff", font: { size: 10 } },
          },
        },
      },
    });
  }

  // Knowledge gaps tags
  const gaps = [
    "Antioxidant Pathways",
    "Cell Wall Development",
    "Cosmic Radiation",
    "DNA Damage",
    "ATM Signaling",
  ];
  const tagContainer = document.getElementById("knowledgeGapsTags");
  if (tagContainer) {
    tagContainer.innerHTML = gaps
      .map((g) => `<span class="gap-tag">${escapeHtml(g)}</span>`)
      .join("");
  }

  // Consensus list
  const consensus = [
    {
      title: "Microgravity Effects",
      desc: "Consistent evidence of altered cellular and physiological responses.",
      pct: 85,
    },
    {
      title: "Radiation Damage",
      desc: "Strong agreement on DNA damage pathways and repair dynamics.",
      pct: 78,
    },
  ];
  const list = document.getElementById("consensusList");
  if (list) {
    list.innerHTML = consensus
      .map(
        (c) =>
          `<div class="consensus-item">
            <div class="consensus-title">
              <span>${escapeHtml(c.title)}</span>
              <span style="color:#52ffa8">${c.pct}%</span>
            </div>
            <div class="consensus-desc">${escapeHtml(c.desc)}</div>
            <div class="consensus-bar"><span style="width:${c.pct}%;"></span></div>
          </div>`
      )
      .join("");
  }
}

/* ===== Init ===== */
window.onload = () => {
  renderPublications(publications);
  renderKnowledgeGraph();
  renderAnalytics();
};
