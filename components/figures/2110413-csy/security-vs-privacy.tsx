// the same incident is always a security problem, but only sometimes a privacy one
export function SecurityVsPrivacy() {
  return (
    <svg
      viewBox="0 0 620 292"
      role="img"
      aria-label="เหตุการณ์ที่ hacker เจาะระบบแล้วรู้ข้อมูลสุขภาพของคนคนหนึ่ง เป็นปัญหาด้าน security แน่นอน ส่วนจะเป็นปัญหาด้าน privacy หรือไม่ ขึ้นกับว่าเจ้าตัวตั้งใจเปิดเผยเรื่องนั้นเองหรือเปล่า"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="110" y="16" width="400" height="52" rx="9" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.5" />
      <text x="310" y="38" textAnchor="middle" fontSize="11">
        hacker เจาะระบบได้ แล้วรู้ว่าคนคนหนึ่งป่วยเป็นโรคอะไร
      </text>
      <text x="310" y="57" textAnchor="middle" fontSize="11" opacity="0.78">
        เรื่องนี้เป็นปัญหาด้านไหน
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#svp-arrow)">
        <line x1="220" y1="70" x2="168" y2="102" />
        <line x1="400" y1="70" x2="452" y2="102" />
      </g>

      <rect x="95" y="106" width="120" height="26" rx="6" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.55" />
      <text x="155" y="124" textAnchor="middle" fontSize="11" fontWeight="600">
        ใช่แน่นอน
      </text>

      <rect x="405" y="106" width="120" height="26" rx="6" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="4 3" />
      <text x="465" y="124" textAnchor="middle" fontSize="11" fontWeight="600">
        อาจใช่ อาจไม่ใช่
      </text>

      <rect x="30" y="142" width="250" height="92" rx="10" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.55" />
      <text x="155" y="168" textAnchor="middle" fontSize="12" fontWeight="600">
        Security
      </text>
      <text x="155" y="192" textAnchor="middle" fontSize="11">
        ใครทำอะไรได้ เมื่อไหร่
      </text>
      <text x="155" y="214" textAnchor="middle" fontSize="11" opacity="0.75">
        Who can do what when?
      </text>

      <rect x="340" y="142" width="250" height="92" rx="10" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.5" />
      <text x="465" y="168" textAnchor="middle" fontSize="12" fontWeight="600">
        Privacy
      </text>
      <text x="465" y="192" textAnchor="middle" fontSize="11">
        เจ้าของเลือกเองว่าใครจะรู้
      </text>
      <text x="465" y="214" textAnchor="middle" fontSize="11" opacity="0.75">
        ขึ้นกับเจตนาของเจ้าตัว
      </text>

      <text x="310" y="258" textAnchor="middle" fontSize="11" opacity="0.78">
        ทั้งคู่ต้องการการควบคุมการเข้าถึงข้อมูล แต่ตอบคนละคำถาม
      </text>
      <text x="310" y="280" textAnchor="middle" fontSize="11" opacity="0.78">
        ถ้าเจ้าตัวเปิดเผยเรื่องนั้นเองอยู่แล้ว ก็ไม่ใช่ปัญหา privacy
      </text>

      <defs>
        <marker id="svp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
