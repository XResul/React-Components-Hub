import React from "react";

import { useState } from "react";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div>
      <button onClick={() => setShowPopup(!showPopup)} className="bg-green-500">
        Popup aç
      </button>
      <button onClick={() => setShowPopup(showPopup)} className="bg-red-500">
        Popup kapa
      </button>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-600/50 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2>Başlığı</h2>
            <p>Popup içeriği buraya gelir</p>
            <button onClick={() => setShowPopup(false)}>Kapat</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
