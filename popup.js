// Load the stored values
chrome.storage.local.get(["my_device_id", "my_device_name"], (data) => {
  document.getElementById("device-id").textContent =
    data.my_device_id || "Not Found";
  document.getElementById("device-name").value = data.my_device_name || "";
});

// Save new device name
document.getElementById("save-name").addEventListener("click", () => {
  const name = document.getElementById("device-name").value.trim();
  chrome.storage.local.set({ my_device_name: name }, () => {
    document.getElementById("status").textContent = "Name saved!";
    setTimeout(() => {
      document.getElementById("status").textContent = "";
    }, 2000);
  });
});
