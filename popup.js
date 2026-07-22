const idEl = document.getElementById("device-id");
const nameEl = document.getElementById("device-name");
const statusEl = document.getElementById("status");

let statusTimer;
function showStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.classList.toggle("error", isError);
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => {
    statusEl.textContent = "";
    statusEl.classList.remove("error");
  }, 2000);
}

// Load the stored values
chrome.storage.local.get(["my_device_id", "my_device_name"], (data) => {
  idEl.textContent = data.my_device_id || "Not Found";
  nameEl.value = data.my_device_name || "";
});

// Save new device name
document.getElementById("save-name").addEventListener("click", () => {
  const name = nameEl.value.trim();
  chrome.storage.local.set({ my_device_name: name }, () => {
    showStatus("Name saved!");
  });
});

// Copy device ID to clipboard
document.getElementById("copy-id").addEventListener("click", async () => {
  const id = idEl.textContent;
  if (!id || id === "Not Found" || id === "Loading…") return;
  try {
    await navigator.clipboard.writeText(id);
    showStatus("ID copied to clipboard!");
  } catch {
    showStatus("Could not copy ID", true);
  }
});

// Regenerate the device ID
document.getElementById("regenerate").addEventListener("click", () => {
  const confirmed = window.confirm(
    "Generate a new Device ID? Apps that rely on the current ID will see this device as new."
  );
  if (!confirmed) return;

  const newId = crypto.randomUUID();
  chrome.storage.local.set({ my_device_id: newId }, () => {
    idEl.textContent = newId;
    showStatus("New ID generated!");
  });
});
