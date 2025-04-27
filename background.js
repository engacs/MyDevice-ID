chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(["my_device_id"], (result) => {
    if (!result.my_device_id) {
      const newId = crypto.randomUUID();
      chrome.storage.local.set({ my_device_id: newId });
      console.log("Generated new device ID:", newId);
    }
  });
});
