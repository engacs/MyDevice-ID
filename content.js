// Listen for messages from the webpage (your Vue app)
window.addEventListener("message", (event) => {
  // Ensure the message is coming from your Vue app
  if (event.source !== window || event.data.type !== "GET_MY_DEVICE_ID") return;

  // Get the device ID from chrome.storage.local
  chrome.storage.local.get("my_device_id", (data) => {
    // Send the device ID back to the webpage (your Vue app)
    window.postMessage(
      {
        type: "MY_DEVICE_ID_RESPONSE",
        my_device_id: data.my_device_id || null,
      },
      "*"
    );
  });
});
