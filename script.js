
let selectedMode = "Scalping";
let botState = "STOPPED";

function chooseMode(button, mode) {
  document.querySelectorAll(".mode").forEach(item =>
    item.classList.remove("active")
  );

  button.classList.add("active");
  selectedMode = mode;

  document.getElementById("mode").textContent = mode;
}

function startBot() {
  botState = "SIMULATION RUNNING";
  updateBot();
}

function pauseBot() {
  if (botState !== "SIMULATION RUNNING") {
    alert("Start the simulation first.");
    return;
  }

  botState = "SIMULATION PAUSED";
  updateBot();
}

function stopBot() {
  botState = "STOPPED";
  updateBot();
}

function updateBot() {
  document.getElementById("botStatus").textContent = botState;

  document.getElementById("botMessage").textContent =
    selectedMode + " " + botState.toLowerCase() +
    ". No real trades are being executed.";
}

function calculateRisk() {
  const balance = Number(
    document.getElementById("balance").value
  );

  const risk = Number(
    document.getElementById("risk").value
  );

  const stop = Number(
    document.getElementById("sl").value
  );

  if (
    balance <= 0 ||
    risk <= 0 ||
    risk > 2 ||
    stop <= 0
  ) {
    alert("Enter valid risk settings.");
    return;
  }

  const amount = balance * risk / 100;

  document.getElementById("riskResult").textContent =
    "Maximum theoretical loss: R" +
    amount.toFixed(2) +
    " | Stop distance: " + stop + " points.";
}

function connectMT5() {
  alert(
    "MT5 integration is not configured yet. " +
    "Do not enter your trading password here."
  );
}
