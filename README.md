# 🌟 MyDevice-ID Extension

> **Secure Your Identity, One Device at a Time.**

**MyDevice-ID** is a cutting-edge Chrome extension that silently generates, stores, and manages a unique device identifier for your browser.  
Designed for developers, businesses, and web apps that need a reliable and persistent way to recognize devices — without sacrificing user privacy or performance.

**Install it. Connect it. Identify securely.**

---

## 🚀 Features

- 🔒 Securely generates a unique device ID on first install.
- 💾 Stores the device ID and device name in Chrome local storage.
- 🔄 Easy communication with websites through `window.postMessage`.
- 🖥️ Popup screen to view or set a custom device name.
- ⚡ Works automatically with no user interaction needed.

---

## 📚 How to Use

1. **Install the Extension**  
✅ Now available on the **Chrome Web Store**!  
👉 [Install MyDevice-ID Extension](https://chromewebstore.google.com/detail/my-device-id/kjlihhpfblhhplemjpemgmbcanaipeij?hl=en)
Or load it manually through **Chrome Extensions → Developer Mode → Load unpacked**.

2. **Request the Device ID and Device Name in Your Web Application**  

```javascript
// Request device ID and device name
window.postMessage({ type: "GET_MY_DEVICE_ID" }, "*");

// Listen for response
window.addEventListener("message", (event) => {
  if (event.source !== window) return;
  if (event.data.type === "MY_DEVICE_ID_RESPONSE") {
    const deviceId = event.data.my_device_id;
    const deviceName = event.data.my_device_name;

    console.log("✅ Device ID:", deviceId);
    console.log("✅ Device Name:", deviceName);

    // Example: Send deviceId and deviceName to your backend
    // apiService.registerDevice(deviceId, deviceName);
  }
});
```

✅ This allows your app to securely fetch and use both the **Device ID** and the optional **Device Name**.

---

## 🛠 How It Works

- On first installation, the extension generates a random `UUID` for the device.
- It stores the device ID and optionally a device name in Chrome's local storage.
- Your webpage sends a `window.postMessage` requesting the device info.
- The extension responds back with the stored device ID and device name.

---

## 📷 Popup Features

- View your unique Device ID.
- Set and save a custom Device Name.
- User-friendly popup interface.

---

## 🛡️ Permissions

- **`storage`** — Used to securely store and retrieve the Device ID and Device Name.

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and contribute!

---

## 📥 Installation

> *(Coming soon on the Chrome Web Store! 🚀)*  
> You can also load it manually through **Chrome Extensions → Developer Mode → Load unpacked**.

---

## 🌟 Quick Summary

| Feature                 | Status   |
| ------------------------ | -------- |
| Unique Device ID         | ✅ |
| Chrome Local Storage     | ✅ |
| Page Communication API   | ✅ |
| Popup for Custom Naming  | ✅ |
| Lightweight and Secure   | ✅ |

---

## 📩 Contact

For questions, suggestions, or collaboration, feel free to open an issue or submit a pull request!

---
