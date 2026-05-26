const state = {
  payload: null,
  activeSectionId: null,
  activeDatasetKey: null,
  activeFlag: "all",
};

const summaryEl = document.querySelector("#summary");
const sectionTabsEl = document.querySelector("#section-tabs");
const datasetTabsEl = document.querySelector("#dataset-tabs");
const flagFiltersEl = document.querySelector("#flag-filters");
const sectionDescriptionEl = document.querySelector("#section-description");
const examplesEl = document.querySelector("#examples");
const template = document.querySelector("#example-template");

const FLAG_LABELS = {
  all: "All showcase examples",
  best_case: "Best case",
  worst_case: "Worst case",
};

if (window.SHOWCASE_PAYLOAD) {
  bootstrap(window.SHOWCASE_PAYLOAD);
} else {
  fetch("./data/showcase.json")
    .then((response) => response.json())
    .then(bootstrap)
    .catch((error) => {
      examplesEl.innerHTML = `<div class="empty">Failed to load showcase data: ${error.message}</div>`;
    });
}

function bootstrap(payload) {
  state.payload = normalizePayload(payload);
  if (!state.payload.sections.length) {
    examplesEl.innerHTML = `<div class="empty">No showcase sections available.</div>`;
    return;
  }
  state.activeSectionId = state.payload.sections[0].id;
  state.activeDatasetKey = state.payload.sections[0].datasets[0]?.key ?? null;
  render();
}

function normalizePayload(payload) {
  if (Array.isArray(payload.sections)) {
    return payload;
  }
  return {
    ...payload,
    sections: [
      {
        id: "judge",
        label: "LLM Judge Eval",
        kind: "judge",
        description: "Showcase items selected by judge_output.presentation_flag.",
        datasets: payload.datasets ?? [],
      },
    ],
  };
}

function activeSection() {
  return state.payload.sections.find((section) => section.id === state.activeSectionId);
}

function activeDataset() {
  const section = activeSection();
  if (!section) return null;
  return section.datasets.find((dataset) => dataset.key === state.activeDatasetKey) || section.datasets[0];
}

function render() {
  renderSummary();
  renderSectionTabs();
  renderDatasetTabs();
  renderFilters();
  renderExamples();
}

function renderSummary() {
  summaryEl.innerHTML = "";
  state.payload.sections.forEach((section) => {
    const exampleCount = section.datasets.reduce((sum, dataset) => sum + dataset.examples.length, 0);
    const card = document.createElement("div");
    card.className = "summary-card";
    card.innerHTML = `
      <strong>${exampleCount}</strong>
      <span>${section.label}</span>
      <small>${section.datasets.length} dataset${section.datasets.length === 1 ? "" : "s"}</small>
    `;
    summaryEl.appendChild(card);
  });
}

function renderSectionTabs() {
  sectionTabsEl.innerHTML = "";
  state.payload.sections.forEach((section) => {
    const button = document.createElement("button");
    button.className = `tab-button tab-button--section ${
      section.id === state.activeSectionId ? "active" : ""
    }`;
    const exampleCount = section.datasets.reduce((sum, dataset) => sum + dataset.examples.length, 0);
    button.textContent = `${section.label} (${exampleCount})`;
    button.addEventListener("click", () => {
      if (section.id === state.activeSectionId) return;
      state.activeSectionId = section.id;
      state.activeDatasetKey = section.datasets[0]?.key ?? null;
      state.activeFlag = "all";
      render();
    });
    sectionTabsEl.appendChild(button);
  });

  const section = activeSection();
  sectionDescriptionEl.textContent = section?.description || "";
}

function renderDatasetTabs() {
  datasetTabsEl.innerHTML = "";
  const section = activeSection();
  if (!section) return;
  section.datasets.forEach((dataset) => {
    const button = document.createElement("button");
    button.className = `tab-button ${dataset.key === state.activeDatasetKey ? "active" : ""}`;
    button.textContent = `${dataset.label} (${dataset.examples.length})`;
    button.addEventListener("click", () => {
      state.activeDatasetKey = dataset.key;
      renderDatasetTabs();
      renderExamples();
    });
    datasetTabsEl.appendChild(button);
  });
}

function renderFilters() {
  flagFiltersEl.innerHTML = "";
  const section = activeSection();
  if (!section) return;

  const wrapper = document.querySelector("#flag-filters-wrapper");

  if (section.kind === "judge") {
    if (wrapper) wrapper.style.display = "";
    flagFiltersEl.style.display = "";
    ["all", "best_case", "worst_case"].forEach((flag) => {
      const button = document.createElement("button");
      button.className = `filter-button ${flag === state.activeFlag ? "active" : ""}`;
      button.textContent = FLAG_LABELS[flag];
      button.addEventListener("click", () => {
        state.activeFlag = flag;
        renderFilters();
        renderExamples();
      });
      flagFiltersEl.appendChild(button);
    });
  } else {
    if (wrapper) wrapper.style.display = "none";
    flagFiltersEl.style.display = "none";
    state.activeFlag = "all";
  }
}

function renderExamples() {
  const section = activeSection();
  const dataset = activeDataset();
  if (!section || !dataset) {
    examplesEl.innerHTML = `<div class="empty">No dataset selected.</div>`;
    return;
  }

  let examples = dataset.examples;
  if (section.kind === "judge" && state.activeFlag !== "all") {
    examples = examples.filter((example) => example.presentationFlag === state.activeFlag);
  }

  if (!examples.length) {
    examplesEl.innerHTML = `<div class="empty">No examples match the current filter.</div>`;
    return;
  }

  examplesEl.innerHTML = "";
  examples.forEach((example, index) => {
    examplesEl.appendChild(renderExampleCard(example, index, dataset, section));
  });
}

function renderExampleCard(example, index, dataset, section) {
  const node = template.content.firstElementChild.cloneNode(true);
  const title = node.querySelector(".card-title");
  const kicker = node.querySelector(".card-kicker");
  const badge = node.querySelector(".badge");
  const meta = node.querySelector(".meta");
  const turnsContainer = node.querySelector(".context-turns");
  const targetText = node.querySelector(".target-text");
  
  const targetPlayerEl = node.querySelector(".target-player-wrapper .custom-audio-player");
  const targetAudio = node.querySelector(".target-audio");
  
  const generatedPlayerEl = node.querySelector(".generated-player-wrapper .custom-audio-player");
  const generatedAudio = node.querySelector(".generated-audio");
  const generatedBlock = node.querySelector(".generated-block");
  
  const judgeSummary = node.querySelector(".judge-summary");
  const judgeJson = node.querySelector(".judge-json");
  const judgeHeading = node.querySelector(".judge-heading");

  kicker.textContent = `${section.label} · ${dataset.label}`;
  title.textContent = `Example ${index + 1}`;

  if (section.kind === "judge") {
    badge.textContent = (example.presentationFlag || "").replace("_", " ");
    badge.classList.add(example.presentationFlag || "");
    judgeHeading.textContent = "Judge Response";
  } else {
    badge.textContent = `Rating ${example.rating ?? "—"}`;
    badge.classList.add(`rating-${example.rating ?? "unknown"}`);
    judgeHeading.textContent = "Automatic Eval Response";
  }

  [
    example.style ? `Style: ${example.style}` : null,
    example.datasetSource ? `Source: ${example.datasetSource}` : null,
    example.targetSpeaker ? `Target speaker: ${example.targetSpeaker}` : null,
    example.rating !== null && example.rating !== undefined ? `Rating: ${example.rating}` : null,
    typeof example.transcriptMatch === "boolean"
      ? `Transcript match: ${example.transcriptMatch ? "yes" : "no"}`
      : null,
  ]
    .filter(Boolean)
    .forEach((label) => {
      const pill = document.createElement("span");
      pill.className = "pill";
      pill.textContent = label;
      meta.appendChild(pill);
    });

  // Render context turns with alternating speech bubble styles
  const turnsWrap = document.createElement("div");
  turnsWrap.className = "turns";
  (example.contextTurns || []).forEach((turn, turnIndex) => {
    const turnEl = document.createElement("div");
    
    const speakerName = (turn.speaker || "").trim();
    let speakerClass = "";
    if (speakerName.toUpperCase() === "A" || speakerName.toUpperCase().includes("SPEAKER A")) {
      speakerClass = "speaker-A";
    } else if (speakerName.toUpperCase() === "B" || speakerName.toUpperCase().includes("SPEAKER B")) {
      speakerClass = "speaker-B";
    } else {
      speakerClass = turnIndex % 2 === 0 ? "speaker-A" : "speaker-B";
    }
    turnEl.className = `turn ${speakerClass}`;

    const speaker = turn.speaker || "Unknown speaker";
    const emotionBadge = turn.emotion ? `<span class="turn-emotion-badge">${escapeHtml(turn.emotion)}</span>` : "";
    
    turnEl.innerHTML = `
      <div class="turn-header">
        <div class="turn-speaker-badge">
          <span class="turn-speaker-name">${escapeHtml(speaker || "Unknown speaker")}</span>
          ${emotionBadge}
        </div>
        <span class="turn-index">Turn ${turnIndex + 1}</span>
      </div>
      <p>${escapeHtml(turn.text || "")}</p>
    `;

    if (turn.audio) {
      const playerContainer = document.createElement("div");
      playerContainer.className = "custom-audio-player-container";
      playerContainer.style.marginTop = "12px";
      playerContainer.innerHTML = `
        <div class="custom-audio-player custom-audio-player--mini">
          <button class="play-btn" aria-label="Play context audio">
            <svg class="icon-play" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            <svg class="icon-pause" viewBox="0 0 24 24" fill="currentColor" style="display:none;"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
          </button>
          <div class="player-timeline">
            <div class="progress-bar-background">
              <div class="progress-bar-filled"></div>
            </div>
            <input type="range" class="seek-slider" min="0" max="100" value="0" step="0.1" aria-label="Seek track">
          </div>
          <div class="time-display">
            <span class="current-time">0:00</span><span class="time-divider">/</span><span class="duration">0:00</span>
          </div>
        </div>
        <audio class="context-audio" preload="none" src="${turn.audio}"></audio>
      `;
      turnEl.appendChild(playerContainer);

      const miniPlayerEl = playerContainer.querySelector(".custom-audio-player");
      const miniAudioEl = playerContainer.querySelector("audio");
      setupCustomPlayer(miniPlayerEl, miniAudioEl);
    }
    turnsWrap.appendChild(turnEl);
  });

  if (!example.contextTurns || !example.contextTurns.length) {
    const emptyTurn = document.createElement("div");
    emptyTurn.className = "turn";
    emptyTurn.innerHTML = `<p class="muted" style="color: var(--text-muted);">No context turns for this example.</p>`;
    turnsWrap.appendChild(emptyTurn);
  }
  turnsContainer.appendChild(turnsWrap);

  // Dynamic Keyword highlighting inside Target Transcript text
  targetText.innerHTML = getHighlightedTargetText(example.targetText, example.prosodyFocus);

  // Wire up main audio comparison players
  if (example.referenceTargetAudio) {
    setupCustomPlayer(targetPlayerEl, targetAudio, example.referenceTargetAudio);
  } else {
    replaceWithMissingAudioNote(targetPlayerEl, targetAudio, "Missing reference target audio.");
  }

  if (section.kind === "judge") {
    if (example.generatedAudio) {
      setupCustomPlayer(generatedPlayerEl, generatedAudio, example.generatedAudio);
    } else {
      replaceWithMissingAudioNote(generatedPlayerEl, generatedAudio, "Missing generated audio.");
    }
  } else {
    generatedBlock.style.display = "none";
  }

  // Judge response summary text
  judgeSummary.innerHTML = [
    example.judgeExplanation ? `<p>${escapeHtml(example.judgeExplanation)}</p>` : "",
    example.contextDependency?.reason
      ? `<p><strong>Why context matters:</strong> ${escapeHtml(example.contextDependency.reason)}</p>`
      : "",
  ].join("");

  // Raw JSON display with premium syntax highlighting
  judgeJson.innerHTML = syntaxHighlightJson(example.judgeResponse || {});

  return node;
}

function replaceWithMissingAudioNote(playerEl, audioEl, message) {
  const note = document.createElement("div");
  note.className = "missing-audio-note";
  note.textContent = message;
  playerEl.replaceWith(note);
  audioEl.remove();
}

function setupCustomPlayer(playerEl, audioEl, src) {
  if (src) {
    audioEl.src = src;
  }
  
  const playBtn = playerEl.querySelector(".play-btn");
  const iconPlay = playBtn.querySelector(".icon-play");
  const iconPause = playBtn.querySelector(".icon-pause");
  const seekSlider = playerEl.querySelector(".seek-slider");
  const progressBarFilled = playerEl.querySelector(".progress-bar-filled");
  const currentTimeEl = playerEl.querySelector(".current-time");
  const durationEl = playerEl.querySelector(".duration");

  let isDragging = false;

  const formatTime = (secs) => {
    if (isNaN(secs) || !isFinite(secs)) return "0:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const togglePlay = () => {
    if (audioEl.paused) {
      pauseAllAudioExcept(audioEl);
      audioEl.play().catch((err) => console.log("Audio playback failed: ", err));
    } else {
      audioEl.pause();
    }
  };

  playBtn.addEventListener("click", togglePlay);

  audioEl.addEventListener("play", () => {
    iconPlay.style.display = "none";
    iconPause.style.display = "";
    playerEl.classList.add("playing");
  });

  audioEl.addEventListener("pause", () => {
    iconPlay.style.display = "";
    iconPause.style.display = "none";
    playerEl.classList.remove("playing");
  });

  audioEl.addEventListener("ended", () => {
    iconPlay.style.display = "";
    iconPause.style.display = "none";
    playerEl.classList.remove("playing");
    audioEl.currentTime = 0;
    seekSlider.value = 0;
    if (progressBarFilled) progressBarFilled.style.width = "0%";
    currentTimeEl.textContent = "0:00";
  });

  audioEl.addEventListener("timeupdate", () => {
    if (isDragging) return;
    const curTime = audioEl.currentTime;
    const duration = audioEl.duration || 0;
    
    currentTimeEl.textContent = formatTime(curTime);
    if (duration > 0) {
      durationEl.textContent = formatTime(duration);
      const percentage = (curTime / duration) * 100;
      seekSlider.value = percentage;
      if (progressBarFilled) progressBarFilled.style.width = `${percentage}%`;
    }
  });

  audioEl.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audioEl.duration);
  });

  // Handle manual seeking
  seekSlider.addEventListener("input", () => {
    isDragging = true;
    const value = seekSlider.value;
    if (progressBarFilled) progressBarFilled.style.width = `${value}%`;
    const duration = audioEl.duration || 0;
    currentTimeEl.textContent = formatTime((value / 100) * duration);
  });

  seekSlider.addEventListener("change", () => {
    isDragging = false;
    const value = seekSlider.value;
    const duration = audioEl.duration || 0;
    if (duration > 0) {
      audioEl.currentTime = (value / 100) * duration;
    }
  });
}

function pauseAllAudioExcept(currentAudio) {
  document.querySelectorAll("audio").forEach((audio) => {
    if (audio !== currentAudio) {
      audio.pause();
    }
  });
}

function getHighlightedTargetText(text, prosodyFocus) {
  let escaped = escapeHtml(text || "No target transcript available.");
  if (prosodyFocus && Array.isArray(prosodyFocus.key_words)) {
    const sortedWords = [...prosodyFocus.key_words]
      .filter((w) => typeof w === "string" && w.trim().length > 0)
      .sort((a, b) => b.length - a.length);

    if (sortedWords.length > 0) {
      // Build a lookbehind/lookahead regex to only match whole words case-insensitively
      const regexParts = sortedWords.map(escapeRegExp);
      const combinedPattern = `(?<![a-zA-Z0-9])(${regexParts.join("|")})(?![a-zA-Z0-9])`;
      try {
        const regex = new RegExp(combinedPattern, "gi");
        escaped = escaped.replace(regex, '<span class="highlight-word">$1</span>');
      } catch (e) {
        // Fallback safety if lookbehinds fail in older engines
        sortedWords.forEach((word) => {
          const fallbackRegex = new RegExp(`\\b(${escapeRegExp(word)})\\b`, "gi");
          escaped = escaped.replace(fallbackRegex, '<span class="highlight-word">$1</span>');
        });
      }
    }
  }
  return escaped;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function syntaxHighlightJson(jsonObj) {
  let jsonStr = JSON.stringify(jsonObj, null, 2);
  return jsonStr.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    function (match) {
      let cls = "number";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else {
          cls = "string";
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      }
      return '<span class="json-' + cls + '">' + escapeHtml(match) + '</span>';
    }
  );
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
