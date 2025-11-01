const state = {
  items: [],
  category: "all",
  query: "",
};

const elements = {
  container: document.querySelector("#presentations"),
  filters: document.querySelector("#category-filters"),
  search: document.querySelector("#search-input"),
};

async function loadPresentations() {
  const response = await fetch("data/presentations.json", { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Unable to load presentations (${response.status})`);
  }
  state.items = await response.json();
}

function renderFilters() {
  const categories = Array.from(
    new Set(state.items.map((item) => item.category).filter(Boolean))
  ).sort((a, b) => a.localeCompare(b));

  const fragment = document.createDocumentFragment();
  const allButton = createFilterButton("all", "All");
  fragment.appendChild(allButton);

  categories.forEach((category) => {
    fragment.appendChild(createFilterButton(category, capitalize(category)));
  });

  elements.filters.innerHTML = "";
  elements.filters.appendChild(fragment);
  setActiveFilter(state.category);
}

function createFilterButton(value, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.value = value;
  button.textContent = label;
  button.addEventListener("click", () => {
    state.category = value;
    setActiveFilter(value);
    renderList();
  });
  return button;
}

function setActiveFilter(value) {
  elements.filters.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.value === value);
  });
}

function renderList() {
  const matches = state.items.filter((item) => {
    const matchesCategory =
      state.category === "all" || item.category === state.category;
    const matchesQuery =
      !state.query ||
      `${item.title} ${item.description}`
        .toLowerCase()
        .includes(state.query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  elements.container.innerHTML = "";

  if (matches.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No presentations match your filters yet.";
    elements.container.appendChild(empty);
    return;
  }

  matches.forEach((item) => {
    elements.container.appendChild(createCard(item));
  });
}

function createCard(item) {
  const card = document.createElement("article");
  card.className = "presentation-card";

  const heading = document.createElement("h2");
  heading.textContent = item.title;
  card.appendChild(heading);

  if (item.description) {
    const description = document.createElement("p");
    description.innerHTML = item.description;
    card.appendChild(description);
  }

  const meta = document.createElement("div");
  meta.className = "presentation-meta";
  meta.innerHTML = `
    <span>Category: <strong>${capitalize(item.category)}</strong></span>
    ${
      item.event
        ? `<span>Event: <strong>${prettifyEvent(item.event)}</strong></span>`
        : ""
    }
  `;
  card.appendChild(meta);

  const link = document.createElement("a");
  link.className = "view-link";
  link.href = item.path;
  link.textContent = "View slides";
  link.setAttribute("rel", "noopener");
  card.appendChild(link);

  return card;
}

function registerSearch() {
  elements.search.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderList();
  });
}

function capitalize(value) {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function prettifyEvent(value) {
  const separated = value
    .replace(/([a-z])(\d)/gi, "$1 $2")
    .replace(/[-_]+/g, " ");
  return separated
    .split(" ")
    .filter(Boolean)
    .map((part) => capitalize(part))
    .join(" ");
}

async function init() {
  try {
    await loadPresentations();
    renderFilters();
    registerSearch();
    renderList();
  } catch (error) {
    elements.container.innerHTML = "";
    const message = document.createElement("p");
    message.className = "empty";
    message.textContent = "We could not load the presentations right now.";
    elements.container.appendChild(message);
    console.error(error);
  }
}

init();
