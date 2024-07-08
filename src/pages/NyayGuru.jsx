// NyayGuru.js

import React from 'react';
import './NyayGuru.css'; // Import CSS file for NyayGuru component

const NyayGuru = () => {
  return (
    <div className="nyayguru-container">
      <h1 className="nyayguru-heading">Legal Chatbot</h1>
      <iframe
        src="https://advocatevibhutibhushan.com/chatbot/"
        className="nyayguru-iframe"
        title="Legal Chatbot"
      />
    </div>
  );
};

export default NyayGuru;
