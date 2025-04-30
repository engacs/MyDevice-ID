window.addEventListener("message", (event) => {
  if (event.source !== window || event.data.type !== "GET_MY_DEVICE_ID") return;

  chrome.storage.local.get(["my_device_id", "my_device_name"], (data) => {
    window.postMessage(
      {
        type: "MY_DEVICE_ID_RESPONSE",
        my_device_id: data.my_device_id || null,
        my_device_name: data.my_device_name || null,
      },
      "*"
    );
  });
});
