// who talks to whom when a certificate is requested, issued, published and later checked
export function PkiParties() {
  return (
    <svg
      viewBox="0 0 620 340"
      role="img"
      aria-label="ผู้ขอใบรับรองส่งคำขอพร้อมกุญแจสาธารณะให้ RA จากนั้น RA ยืนยันตัวตนแล้วส่งต่อให้ CA เซ็นใบ CA ส่งใบกลับให้ผู้ขอและประกาศใบกับรายการเพิกถอนไว้ที่ directory ฝั่งผู้ตรวจได้รับใบตอนเชื่อมต่อ แล้วถาม VA ว่าใบยังใช้ได้ไหม โดย VA อ่านสถานะจาก directory"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <g stroke="currentColor" strokeOpacity="0.55">
        <rect x="24" y="214" width="132" height="44" rx="6" fillOpacity="0.06" />
        <rect x="238" y="214" width="120" height="44" rx="6" fillOpacity="0.12" />
        <rect x="238" y="46" width="120" height="44" rx="6" fillOpacity="0.18" />
        <rect x="440" y="46" width="156" height="44" rx="6" fillOpacity="0.1" />
        <rect x="440" y="140" width="156" height="44" rx="6" fillOpacity="0.12" />
        <rect x="440" y="238" width="156" height="44" rx="6" fillOpacity="0.06" />
      </g>

      <text x="90" y="232" textAnchor="middle" fontSize="11" fontWeight="600">
        ผู้ขอใบรับรอง
      </text>
      <text x="90" y="249" textAnchor="middle" fontSize="11" opacity="0.85">
        ถือ private key เอง
      </text>

      <text x="298" y="232" textAnchor="middle" fontSize="11" fontWeight="600">
        RA
      </text>
      <text x="298" y="249" textAnchor="middle" fontSize="11" opacity="0.85">
        ตรวจว่าเป็นตัวจริง
      </text>

      <text x="298" y="64" textAnchor="middle" fontSize="11" fontWeight="600">
        CA
      </text>
      <text x="298" y="81" textAnchor="middle" fontSize="11" opacity="0.85">
        เซ็นใบและเพิกถอนใบ
      </text>

      <text x="518" y="64" textAnchor="middle" fontSize="11" fontWeight="600">
        Central Directory
      </text>
      <text x="518" y="81" textAnchor="middle" fontSize="11" opacity="0.85">
        เก็บใบรับรองและ CRL
      </text>

      <text x="518" y="158" textAnchor="middle" fontSize="11" fontWeight="600">
        VA
      </text>
      <text x="518" y="175" textAnchor="middle" fontSize="11" opacity="0.85">
        ตอบว่าใบยังใช้ได้ไหม
      </text>

      <text x="518" y="256" textAnchor="middle" fontSize="11" fontWeight="600">
        แอปที่ต้องเชื่อใบ
      </text>
      <text x="518" y="273" textAnchor="middle" fontSize="11" opacity="0.85">
        เช่นเบราว์เซอร์
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#pp-arrow)">
        <line x1="160" y1="236" x2="234" y2="236" />
        <line x1="298" y1="210" x2="298" y2="94" />
        <path d="M 238 68 L 90 68 L 90 210" />
        <line x1="362" y1="68" x2="436" y2="68" />
        <line x1="518" y1="94" x2="518" y2="136" />
        <line x1="518" y1="234" x2="518" y2="188" />
        <path d="M 90 262 L 90 310 L 518 310 L 518 286" />
      </g>

      <text x="197" y="228" textAnchor="middle" fontSize="11">
        1
      </text>
      <text x="306" y="152" fontSize="11">
        2 ส่งต่อคำขอที่ผ่านการตรวจ
      </text>
      <text x="98" y="140" fontSize="11">
        3 ใบที่เซ็นแล้ว
      </text>
      <text x="399" y="60" textAnchor="middle" fontSize="11">
        4
      </text>
      <text x="526" y="120" fontSize="11">
        7 อ่านสถานะ
      </text>
      <text x="526" y="215" fontSize="11">
        6 ใบนี้ยังใช้ได้ไหม
      </text>
      <text x="304" y="304" textAnchor="middle" fontSize="11">
        5 ยื่นใบตอนเชื่อมต่อ
      </text>
      <text x="197" y="211" textAnchor="middle" fontSize="11">
        ขอใบ + pub
      </text>
      <text x="399" y="43" textAnchor="middle" fontSize="11">
        ประกาศใบ + CRL
      </text>

      <text x="310" y="334" textAnchor="middle" fontSize="11" fontWeight="600">
        ขั้นที่ 1–2 คือ enrollment ขั้นที่ 3–4 คือ issuance ขั้นที่ 5–7 คือ validation
      </text>

      <defs>
        <marker id="pp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
