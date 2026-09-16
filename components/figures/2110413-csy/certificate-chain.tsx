// each certificate is signed by the one above it, and the chain stops at a root already in the trust store
export function CertificateChain() {
  return (
    <svg
      viewBox="0 0 620 320"
      role="img"
      aria-label="ใบรับรองสามใบต่อกันเป็นสาย ใบบนสุดคือ root ที่เซ็นตัวเองและอยู่ในเครื่องเราอยู่แล้ว ใบกลางถูกเซ็นด้วยกุญแจส่วนตัวของ root ใบล่างสุดของเว็บถูกเซ็นด้วยกุญแจส่วนตัวของใบกลาง การตรวจเดินขึ้นจากใบล่างไปหา root"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="20" textAnchor="middle" fontSize="11" opacity="0.8">
        ความเชื่อไหลลงจาก root ส่วนการตรวจเดินขึ้นไปหา root
      </text>

      <g stroke="currentColor" strokeOpacity="0.55">
        <rect x="150" y="36" width="320" height="56" rx="6" fillOpacity="0.18" />
        <rect x="150" y="136" width="320" height="56" rx="6" fillOpacity="0.1" />
        <rect x="150" y="236" width="320" height="56" rx="6" fillOpacity="0.06" />
      </g>

      <text x="310" y="58" textAnchor="middle" fontSize="11" fontWeight="600">
        DigiCert Global Root G2
      </text>
      <text x="310" y="78" textAnchor="middle" fontSize="11" opacity="0.85">
        เซ็นตัวเอง และติดมากับเครื่องเราอยู่แล้ว
      </text>

      <text x="310" y="158" textAnchor="middle" fontSize="11" fontWeight="600">
        Thawte TLS RSA CA G1
      </text>
      <text x="310" y="178" textAnchor="middle" fontSize="11" opacity="0.85">
        Issuer คือ DigiCert
      </text>

      <text x="310" y="258" textAnchor="middle" fontSize="11" fontWeight="600">
        www.chula.ac.th
      </text>
      <text x="310" y="278" textAnchor="middle" fontSize="11" opacity="0.85">
        Issuer คือ Thawte
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#cc-arrow)">
        <line x1="240" y1="94" x2="240" y2="132" />
        <line x1="240" y1="194" x2="240" y2="232" />
        <line x1="380" y1="232" x2="380" y2="194" />
        <line x1="380" y1="132" x2="380" y2="94" />
      </g>

      <text x="232" y="118" textAnchor="end" fontSize="11">
        เซ็นด้วย priv ของ DigiCert
      </text>
      <text x="232" y="218" textAnchor="end" fontSize="11">
        เซ็นด้วย priv ของ Thawte
      </text>
      <text x="390" y="218" fontSize="11">
        ตรวจด้วย pub ของ Thawte
      </text>
      <text x="390" y="118" fontSize="11">
        ตรวจด้วย pub ของ DigiCert
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" fill="none">
        <path d="M 150 64 L 96 64" markerEnd="url(#cc-arrow)" strokeWidth="1.4" />
      </g>
      <text x="90" y="60" textAnchor="end" fontSize="11">
        จุดที่การตรวจ
      </text>
      <text x="90" y="77" textAnchor="end" fontSize="11">
        หยุดเดินขึ้น
      </text>

      <text x="310" y="312" textAnchor="middle" fontSize="11" fontWeight="600">
        เราไม่เคยเห็นกุญแจของ chula มาก่อน แต่เชื่อได้เพราะสายนี้จบที่ใบที่เรามีอยู่แล้ว
      </text>

      <defs>
        <marker id="cc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
