# My Device ID

A lightweight Chrome extension that generates and stores a unique, persistent device identifier — giving web apps a reliable way to recognize a device, entirely on the client.

[**Install from the Chrome Web Store →**](https://chromewebstore.google.com/detail/my-device-id/kjlihhpfblhhplemjpemgmbcanaipeij?hl=en)

## Features

- Generates a unique device ID (UUID) on first install.
- Stores the ID and an optional device name in Chrome local storage.
- Exposes both to your web app via `window.postMessage`.
- Popup to view, copy, rename, and regenerate the ID.

## Usage

Request the device info from your web app and listen for the response:

```javascript
// Request
window.postMessage({ type: "GET_MY_DEVICE_ID" }, "*");

// Listen
window.addEventListener("message", (event) => {
  if (event.source !== window) return;
  if (event.data.type !== "MY_DEVICE_ID_RESPONSE") return;

  const { my_device_id, my_device_name } = event.data;
  // e.g. apiService.registerDevice(my_device_id, my_device_name);
});
```

## Installation (manual)

1. Clone or download this repository.
2. Open **Chrome → Extensions** and enable **Developer Mode**.
3. Click **Load unpacked** and select the project folder.

## Permissions

- `storage` — stores the device ID and name locally. No data is collected or transmitted. See [Privacy Policy](privacy-policy.md).

## License

MIT © [Eng Acs](https://github.com/engacs) — [Repository](https://github.com/engacs/MyDevice-ID)
