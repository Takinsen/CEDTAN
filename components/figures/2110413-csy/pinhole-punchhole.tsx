// a hole the firewall opens for you, next to a hole two clients arrange behind its back
export function PinholePunchhole() {
  return (
    <svg
      viewBox="0 0 620 250"
      role="img"
      aria-label="pinhole คือรูที่ไฟร์วอลล์เปิดให้เองเมื่อเครื่องข้างในเป็นฝ่ายเริ่มการเชื่อมต่อ และปิดเองเมื่อเงียบไปพักหนึ่ง ส่วน punch hole คือการที่เครื่องหลังไฟร์วอลล์สองตัวนัดกันผ่านเซิร์ฟเวอร์ตัวกลางจนคุยกันตรงได้"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="150" y="24" textAnchor="middle" fontSize="11" fontWeight="600">
        Pinhole
      </text>
      <text x="150" y="44" textAnchor="middle" fontSize="11" opacity="0.8">
        ข้างในเริ่มก่อน ไฟร์วอลล์เปิดรูให้
      </text>
      <rect x="16" y="60" width="80" height="42" rx="7" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" />
      <text x="56" y="86" textAnchor="middle" fontSize="11">
        ข้างใน
      </text>
      <rect x="126" y="60" width="42" height="42" rx="6" fillOpacity="0.28" stroke="currentColor" strokeOpacity="0.6" />
      <text x="147" y="86" textAnchor="middle" fontSize="11" fontWeight="600">
        FW
      </text>
      <rect x="198" y="60" width="86" height="42" rx="7" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" />
      <text x="241" y="86" textAnchor="middle" fontSize="11">
        เซิร์ฟเวอร์นอก
      </text>
      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" fill="none" markerEnd="url(#ph-arrow)">
        <line x1="98" y1="74" x2="124" y2="74" />
        <line x1="170" y1="74" x2="196" y2="74" />
      </g>
      <g stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" fill="none" strokeDasharray="4 3" markerEnd="url(#ph-arrow)">
        <line x1="196" y1="92" x2="170" y2="92" />
        <line x1="124" y1="92" x2="98" y2="92" />
      </g>
      <text x="150" y="128" textAnchor="middle" fontSize="11" opacity="0.8">
        ขากลับผ่านได้ เพราะขาไปเปิดรูไว้
      </text>
      <text x="150" y="148" textAnchor="middle" fontSize="11" opacity="0.8">
        เงียบไปพักหนึ่ง รูปิดเอง
      </text>

      <line x1="310" y1="20" x2="310" y2="212" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="4 4" />

      <text x="466" y="24" textAnchor="middle" fontSize="11" fontWeight="600">
        Punch hole
      </text>
      <text x="466" y="44" textAnchor="middle" fontSize="11" opacity="0.8">
        สองฝั่งอยู่หลังไฟร์วอลล์ทั้งคู่
      </text>
      <rect x="326" y="60" width="62" height="42" rx="7" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" />
      <text x="357" y="86" textAnchor="middle" fontSize="11">
        เครื่อง A
      </text>
      <rect x="396" y="60" width="30" height="42" rx="6" fillOpacity="0.28" stroke="currentColor" strokeOpacity="0.6" />
      <text x="411" y="86" textAnchor="middle" fontSize="11" fontWeight="600">
        FW
      </text>
      <rect x="510" y="60" width="30" height="42" rx="6" fillOpacity="0.28" stroke="currentColor" strokeOpacity="0.6" />
      <text x="525" y="86" textAnchor="middle" fontSize="11" fontWeight="600">
        FW
      </text>
      <rect x="548" y="60" width="62" height="42" rx="7" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" />
      <text x="579" y="86" textAnchor="middle" fontSize="11">
        เครื่อง B
      </text>
      <rect x="424" y="128" width="88" height="40" rx="7" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.55" />
      <text x="468" y="152" textAnchor="middle" fontSize="11" fontWeight="600">
        ตัวกลาง
      </text>
      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" fill="none" markerEnd="url(#ph-arrow)">
        <line x1="411" y1="104" x2="446" y2="126" />
        <line x1="525" y1="104" x2="490" y2="126" />
      </g>
      <g stroke="currentColor" strokeOpacity="0.85" strokeWidth="1.8" fill="none" strokeDasharray="6 3">
        <line x1="428" y1="81" x2="508" y2="81" />
      </g>
      <text x="468" y="118" textAnchor="middle" fontSize="11" opacity="0.8">
        รูที่เจาะไว้
      </text>
      <text x="468" y="192" textAnchor="middle" fontSize="11" opacity="0.8">
        ทั้งคู่เริ่มออกไปหาตัวกลางก่อน
      </text>
      <text x="468" y="212" textAnchor="middle" fontSize="11" opacity="0.8">
        แล้วใช้รูที่เปิดไว้คุยกันตรง
      </text>

      <text x="310" y="240" textAnchor="middle" fontSize="11" opacity="0.78">
        Skype และ Line ใช้วิธีนี้ — ไฟร์วอลล์ไม่ได้ถูกเจาะ แต่ถูกใช้ตามกติกาของมันเอง
      </text>

      <defs>
        <marker id="ph-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
