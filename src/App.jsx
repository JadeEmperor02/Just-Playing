import QRcode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");
  const GenerateQrcode = () => {
    QRcode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#fffffff",
          light: "#000000ff"
        }
      },
      (err, url) => {
        if (err) return console.error(err);
        setQrcode(url);
      }
    );
  };
  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        placeholder="e.g https://google.com"
      />
      <button onClick={GenerateQrcode}>Generate </button>
      {qrcode && (
        <>
          <img src={qrcode} alt={`${qrcode} img`}></img>
          <a href={qrcode} download="qrcode.jpeg">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
