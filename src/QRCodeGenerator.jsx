import React from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
  // URL do seu site
  const siteURL = 'http://localhost:5173/';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h2>Cartão de visita</h2>
      <QRCode value={siteURL} size={256} />
      <p>Escaneie o código QR para acessar nosso site!</p>
    </div>
  );
};

export default QRCodeGenerator;
