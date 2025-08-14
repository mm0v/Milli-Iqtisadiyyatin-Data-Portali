import React, { useState } from 'react';

const Yoxlanis = () => {
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState(localStorage.getItem('name') || '');

  // Məlumatı LocalStorage-ə yazır
  const saveToLocalStorage = () => {
    localStorage.setItem('name', name);
    setSavedName(name);
  };

  // LocalStorage-də saxlanılan məlumatı silir
  const clearLocalStorage = () => {
    localStorage.removeItem('name');
    setSavedName('');
  };

  return (
    <div>
      <h1>LocalStorage Misalı</h1>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Adınızı yazın" 
      />
      <button onClick={saveToLocalStorage}>Yadda Saxla</button>
      <button onClick={clearLocalStorage}>Sil</button>
      {savedName && <p>Saxlanılan Ad: {savedName}</p>}
    </div>
  );
};

export default Yoxlanis;
