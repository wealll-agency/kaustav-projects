/* Custom.js - 100% Exact Clone with Fixed Scroll & Data */

document.addEventListener("DOMContentLoaded", () => {
  // --- Elements ---
  const userInput = document.getElementById("user-input");
  const sectionsContainer = document.getElementById("sections-container");
  const clearBtn = document.getElementById("clear-btn");
  const pasteBtn = document.getElementById("paste-btn");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("close-btn");
  const overlay = document.getElementById("overlay");
  const chipsContainer = document.querySelector(".filter-chips");

  // FAQ Accordion
  const faqHeaders = document.querySelectorAll(".faq-header");
  faqHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isActive = item.classList.contains("active");

      // Close all items
      document.querySelectorAll(".faq-item").forEach((faq) => {
        faq.classList.remove("active");
        faq.querySelector(".faq-body").style.height = 0;
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add("active");
        const body = item.querySelector(".faq-body");
        body.style.height = body.scrollHeight + "px";
      }
    });
  });

  // --- EXACT DATA from Screenshots ---
  // Note: 'm' = map (character replacement), 'd' = decoration (pattern)
  // 1. Data Source\n
  // --- Globals ---
  let categoryData = []; // Will be populated from API
  let currentIndex = 0;
  let isLoading = false;
  let loaderObserver = null;
  let sectionObserver = null;
  let scrollTimeout = null;

  // --- API Fetch Logic ---
  let debounceTimeout = null;
  const loadingIndicator = document.getElementById("user-input"); // or add a spinner

  async function fetchFontsFromAPI(text) {
    try {
      if (loadingIndicator) loadingIndicator.style.opacity = "0.5";
      const response = await fetch("api.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text }),
      });
      const result = await response.json();
      if (result.success) {
        categoryData = result.data;
        updateUI();
      }
    } catch (e) {
      console.error("Error fetching fonts:", e);
    } finally {
      if (loadingIndicator) loadingIndicator.style.opacity = "1";
    }
  }

  function generateAll(text) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      fetchFontsFromAPI(text);
    }, 300); // 300ms debounce
  }

  // --- UI Update Logic ---
  function updateUI() {
    // If chips are empty, it's the first load
    if (chipsContainer.innerHTML === "") {
      renderChips();
      // Force initial load since observer fired when data was empty
      if (currentIndex === 0) {
        loadNextCategory();
      }
    }

    // Update existing sections or create new ones
    categoryData.forEach((cat) => {
      let section = document.getElementById(cat.id + "-section");
      if (section) {
        const grid = document.getElementById("grid-" + cat.id);
        if (grid) generateCategoryContent(cat, grid);
      }
    });
  }

  function renderChips() {
    chipsContainer.innerHTML = "";
    categoryData.forEach((cat, index) => {
      const chip = document.createElement("div");
      chip.className = `chip ${index === 0 ? "active" : ""}`;
      chip.setAttribute("data-target", cat.id);
      chip.innerHTML = `<i class="${cat.icon}"></i> ${cat.name}`;

      chip.addEventListener("click", () => {
        const targetIndex = categoryData.findIndex((c) => c.id === cat.id);
        if (targetIndex >= currentIndex) {
          while (currentIndex <= targetIndex) {
            renderCategory(categoryData[currentIndex]);
            currentIndex++;
          }
          if (currentIndex < categoryData.length) {
            sectionsContainer.appendChild(scrollLoader);
          } else {
            scrollLoader.remove();
            if (loaderObserver) loaderObserver.disconnect();
          }
        }

        const section = document.getElementById(cat.id + "-section");
        if (section) {
          window.isManualScrolling = true;
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            window.isManualScrolling = false;
          }, 1000);

          const chipsWrapper = document.querySelector(
            ".chips-container-wrapper",
          );
          const offset = chipsWrapper ? chipsWrapper.offsetHeight + 10 : 80;
          const top =
            section.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: top, behavior: "smooth" });

          document
            .querySelectorAll(".chip")
            .forEach((c) => c.classList.remove("active"));
          chip.classList.add("active");
          centerActiveChip(chip);
          const hashId = cat.id + "-styles";
          if (history.replaceState)
            history.replaceState(null, null, "#" + hashId);
        }
      });
      chipsContainer.appendChild(chip);
    });
  }

  function createLoader() {
    const loader = document.createElement("div");
    loader.className = "page-loader";
    loader.innerHTML = '<div class="spinner"></div>';
    return loader;
  }
  const scrollLoader = createLoader();

  function loadNextCategory() {
    if (
      isLoading ||
      currentIndex >= categoryData.length ||
      categoryData.length === 0
    )
      return;
    isLoading = true;
    scrollLoader.classList.remove("hidden");

    setTimeout(() => {
      renderCategory(categoryData[currentIndex]);
      currentIndex++;
      isLoading = false;
      if (currentIndex >= categoryData.length) {
        scrollLoader.remove();
        if (loaderObserver) loaderObserver.disconnect();
      }
    }, 100);
  }

  function renderCategory(cat) {
    const section = document.createElement("section");
    section.id = cat.id + "-section";
    section.className = "category-section";

    const header = document.createElement("div");
    header.className = "section-header";
    header.innerHTML = `
            <div class="header-left">
                <div class="icon-circle"><i class="${cat.icon}"></i></div>
                <span class="section-title">${cat.name} Design</span>
                <span class="badge" style="background:#fff; color:#000; border:1px solid #000; padding:5px 12px;">${cat.results.length}</span>
            </div>
            <div class="header-right">
                <div class="font-size-control">
                    <span class="aa-label">Aa</span>
                    <input type="range" class="size-slider" min="14" max="40" value="20" data-section="${cat.id}">
                </div>
                <div class="view-toggles">
                    <button class="view-btn list-btn" data-section="${cat.id}"><i class="ri-list-check"></i></button>
                    <button class="view-btn grid-btn active" data-section="${cat.id}"><i class="ri-layout-grid-fill"></i></button>
                </div>
            </div>
        `;
    section.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "font-grid";
    grid.id = `grid-${cat.id}`;
    section.appendChild(grid);

    sectionsContainer.insertBefore(section, scrollLoader);

    // Event listeners for this section
    const slider = section.querySelector(".size-slider");
    slider.addEventListener("input", (e) => {
      const size = e.target.value + "px";
      grid
        .querySelectorAll(".font-text")
        .forEach((el) => (el.style.fontSize = size));
    });

    const listBtn = section.querySelector(".list-btn");
    const gridBtn = section.querySelector(".grid-btn");
    listBtn.addEventListener("click", () => {
      grid.classList.add("list-view");
      listBtn.classList.add("active");
      gridBtn.classList.remove("active");
    });
    gridBtn.addEventListener("click", () => {
      grid.classList.remove("list-view");
      gridBtn.classList.add("active");
      listBtn.classList.remove("active");
    });

    generateCategoryContent(cat, grid);
    if (sectionObserver) sectionObserver.observe(section);
  }

  function generateCategoryContent(cat, grid) {
    const slider = document.querySelector(`#${cat.id}-section .size-slider`);
    const currentSize = slider ? slider.value : 20;

    grid.innerHTML = "";
    cat.results.forEach((res) => {
      const card = document.createElement("div");
      card.className = "font-card";
      card.innerHTML = `
                    <span class="font-text" style="font-size: ${currentSize}px">${res}</span>
                    <button class="copy-btn">Copy</button>
                `;

      const btn = card.querySelector(".copy-btn");
      card.addEventListener("click", () => {
        navigator.clipboard.writeText(res).then(() => {
          const original = btn.textContent;
          btn.textContent = "Copied!";
          btn.classList.add("copied");
          setTimeout(() => {
            btn.textContent = original;
            btn.classList.remove("copied");
          }, 2000);
        });
      });
      grid.appendChild(card);
    });
  }

  function renderSections() {
    sectionsContainer.innerHTML = "";
    sectionsContainer.appendChild(scrollLoader);

    const options = { root: null, rootMargin: "100px", threshold: 0.1 };
    loaderObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadNextCategory();
        }
      });
    }, options);
    loaderObserver.observe(scrollLoader);
  }

  function centerActiveChip(chip) {
    const container = chip.parentElement;
    const chipRect = chip.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const scrollLeft =
      chip.offsetLeft - containerRect.width / 2 + chipRect.width / 2;
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }
  function initScrollSpy() {
    const options = {
      root: null,
      rootMargin: "-180px 0px -70% 0px",
      threshold: 0,
    };
    sectionObserver = new IntersectionObserver(
      (entries) => {
        // If we are scrolling via click, ignore observer updates to prevent jumping
        if (window.isManualScrolling) return;

        // Special check: If at bottom of page, force last tab active
        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 100
        ) {
          document
            .querySelectorAll(".chip")
            .forEach((c) => c.classList.remove("active"));
          const lastChip =
            document.querySelector(".filter-chips").lastElementChild;
          if (lastChip) {
            lastChip.classList.add("active");
            centerActiveChip(lastChip);
            return; // Skip normal observer logic
          }
        }

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("-section", "");

            // Sync Active Chip
            document
              .querySelectorAll(".chip")
              .forEach((c) => c.classList.remove("active"));
            const activeChip = document.querySelector(
              `.chip[data-target="${id}"]`,
            );
            if (activeChip) {
              activeChip.classList.add("active");
              centerActiveChip(activeChip);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -60% 0px", // Tighter margin to avoid overlapping activations
        threshold: 0,
      },
    );
    document.querySelectorAll(".category-section").forEach((sec) => {
      sectionObserver.observe(sec);
    });
  }

  // --- Event Listeners ---
  userInput.addEventListener("input", (e) => {
    const val = e.target.value;
    clearBtn.style.display = val ? "block" : "none";
    generateAll(val);
  });

  clearBtn.addEventListener("click", () => {
    userInput.value = "";
    generateAll("");
    clearBtn.style.display = "none";
    userInput.focus();
  });

  pasteBtn.addEventListener("click", async () => {
    try {
      const text = await navigator.clipboard.readText();
      userInput.value = text;
      generateAll(text);
      clearBtn.style.display = "block";
    } catch (err) {
      console.error("Failed to paste: ", err);
    }
  });

  // Sidebar
  function toggleSidebar() {
    const isActive = sidebar.classList.toggle("active");
    overlay.classList.toggle("active", isActive);
    document.body.style.overflow = isActive ? "hidden" : "";
  }
  hamburgerBtn.addEventListener("click", toggleSidebar);
  closeBtn.addEventListener("click", toggleSidebar);
  overlay.addEventListener("click", toggleSidebar);

  // Initial Render
  renderSections();
  // Helper to scroll the tab bar
  function centerActiveChip(chip) {
    if (!chip) return;
    const container = document.querySelector(".filter-chips");
    const chipRect = chip.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const scrollLeft =
      container.scrollLeft +
      chipRect.left -
      containerRect.left -
      containerRect.width / 2 +
      chipRect.width / 2;
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }

  // Global flag to prevent ScrollSpy from fighting with Click Scroll
  window.isManualScrolling = false;
  scrollTimeout;

  generateAll("");
  initScrollSpy();

  // Hash Restore
  const hash = window.location.hash;
  if (hash) {
    const id = hash.replace("#", "").replace("-styles", "");
    const target = document.getElementById(id + "-section");
    if (target) {
      setTimeout(() => {
        const offset = 180;
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: "instant" });
      }, 100);
    }
  }
});
