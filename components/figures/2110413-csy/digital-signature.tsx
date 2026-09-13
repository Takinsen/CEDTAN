// hash for speed, private key for proof, and the comparison the receiver runs
export function DigitalSignature() {
  return (
    <svg
      viewBox="0 0 620 294"
      role="img"
      aria-label="ฝั่งผู้ส่งย่อยข้อความด้วย hash แล้วล็อกค่าย่อยด้วยกุญแจส่วนตัวได้ลายเซ็น ส่งข้อความธรรมดาไปพร้อมลายเซ็น ฝั่งผู้รับย่อยข้อความเองแล้วเปิดลายเซ็นด้วยกุญแจสาธารณะ จากนั้นเทียบค่าทั้งสอง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="22" textAnchor="middle" fontSize="11" opacity="0.8">
        เซ็นแค่ค่าย่อยที่สั้น ไม่ได้เข้ารหัสทั้งข้อความ
      </text>

      <text x="16" y="54" fontSize="11" fontWeight="600">
        ฝั่งผู้ส่ง
      </text>

      <g stroke="currentColor" strokeOpacity="0.55">
        <rect x="16" y="66" width="118" height="32" rx="5" fillOpacity="0.06" />
        <rect x="176" y="66" width="94" height="32" rx="5" fillOpacity="0.12" />
        <rect x="312" y="66" width="106" height="32" rx="5" fillOpacity="0.12" />
        <rect x="460" y="66" width="144" height="32" rx="5" fillOpacity="0.18" />
      </g>
      <text x="75" y="87" textAnchor="middle" fontSize="11">
        ข้อความ
      </text>
      <text x="223" y="87" textAnchor="middle" fontSize="11">
        hash
      </text>
      <text x="365" y="87" textAnchor="middle" fontSize="11">
        ค่าย่อย
      </text>
      <text x="532" y="87" textAnchor="middle" fontSize="11">
        ล็อกด้วย priv ผู้ส่ง
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#ds-arrow)">
        <line x1="138" y1="82" x2="172" y2="82" />
        <line x1="274" y1="82" x2="308" y2="82" />
        <line x1="422" y1="82" x2="456" y2="82" />
        <path d="M 75 102 L 75 152 L 170 152 L 170 172" />
        <path d="M 532 102 L 532 128 L 390 128 L 390 172" />
      </g>

      <text x="86" y="130" fontSize="11" opacity="0.85">
        ข้อความธรรมดา
      </text>
      <text x="402" y="150" fontSize="11" opacity="0.85">
        ลายเซ็น
      </text>

      <text x="16" y="196" fontSize="11" fontWeight="600">
        ฝั่งผู้รับ
      </text>

      <g stroke="currentColor" strokeOpacity="0.55">
        <rect x="100" y="176" width="140" height="32" rx="5" fillOpacity="0.06" />
        <rect x="320" y="176" width="140" height="32" rx="5" fillOpacity="0.18" />
        <rect x="100" y="224" width="140" height="32" rx="5" fillOpacity="0.12" />
        <rect x="320" y="224" width="140" height="32" rx="5" fillOpacity="0.12" />
      </g>
      <text x="170" y="197" textAnchor="middle" fontSize="11">
        ข้อความที่ได้รับ
      </text>
      <text x="390" y="197" textAnchor="middle" fontSize="11">
        ลายเซ็นที่ได้รับ
      </text>
      <text x="170" y="245" textAnchor="middle" fontSize="11">
        ย่อยเองด้วย hash
      </text>
      <text x="390" y="245" textAnchor="middle" fontSize="11">
        เปิดด้วย pub ผู้ส่ง
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#ds-arrow)">
        <line x1="170" y1="210" x2="170" y2="221" />
        <line x1="390" y1="210" x2="390" y2="221" />
        <line x1="244" y1="240" x2="316" y2="240" markerStart="url(#ds-arrow)" />
      </g>
      <text x="280" y="218" textAnchor="middle" fontSize="11" opacity="0.85">
        เทียบกัน
      </text>

      <text x="310" y="282" textAnchor="middle" fontSize="11" fontWeight="600">
        ตรงกัน แปลว่าข้อความไม่ถูกแก้ และผู้ส่งเป็นคนเซ็นจริง
      </text>

      <defs>
        <marker id="ds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
