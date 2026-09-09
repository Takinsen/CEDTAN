// the same key pair buys secrecy in one direction and proof of origin in the other
export function PublicKeyDirections() {
  return (
    <svg
      viewBox="0 0 620 262"
      role="img"
      aria-label="กุญแจคู่เดียวใช้ได้สองทิศ ล็อกด้วยกุญแจสาธารณะของผู้รับแล้วมีแต่ผู้รับที่เปิดได้ ซึ่งให้ความลับ ล็อกด้วยกุญแจส่วนตัวของผู้ส่งแล้วใครก็เปิดได้ ซึ่งพิสูจน์ว่าใครเป็นคนส่ง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="22" textAnchor="middle" fontSize="11" opacity="0.8">
        ล็อกด้วยกุญแจดอกไหน ก็เปิดได้ด้วยอีกดอกของคู่นั้นเสมอ
      </text>

      <rect x="16" y="42" width="588" height="92" rx="9" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.55" />
      <text x="32" y="66" fontSize="11" fontWeight="600">
        ทิศที่ 1 — ปิดความลับ
      </text>
      <rect x="32" y="80" width="150" height="34" rx="5" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" />
      <text x="107" y="101" textAnchor="middle" fontSize="11">
        ล็อกด้วย pub ของผู้รับ
      </text>
      <rect x="286" y="80" width="150" height="34" rx="5" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.55" />
      <text x="361" y="101" textAnchor="middle" fontSize="11">
        เปิดด้วย priv ของผู้รับ
      </text>
      <text x="452" y="94" fontSize="11" opacity="0.85">
        มีแต่ผู้รับที่มี priv
      </text>
      <text x="452" y="115" fontSize="11" opacity="0.85">
        คนอื่นอ่านไม่ออก
      </text>

      <rect x="16" y="146" width="588" height="92" rx="9" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.55" />
      <text x="32" y="170" fontSize="11" fontWeight="600">
        ทิศที่ 2 — พิสูจน์ต้นทาง
      </text>
      <rect x="32" y="184" width="150" height="34" rx="5" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.55" />
      <text x="107" y="205" textAnchor="middle" fontSize="11">
        ล็อกด้วย priv ของผู้ส่ง
      </text>
      <rect x="286" y="184" width="150" height="34" rx="5" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" />
      <text x="361" y="205" textAnchor="middle" fontSize="11">
        เปิดด้วย pub ของผู้ส่ง
      </text>
      <text x="452" y="198" fontSize="11" opacity="0.85">
        ใครก็เปิดได้ ไม่เป็นความลับ
      </text>
      <text x="452" y="219" fontSize="11" opacity="0.85">
        แต่แปลว่าผู้ส่งเป็นคนล็อก
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#pkd-arrow)">
        <line x1="186" y1="97" x2="282" y2="97" />
        <line x1="186" y1="201" x2="282" y2="201" />
      </g>

      <text x="310" y="256" textAnchor="middle" fontSize="11" opacity="0.78">
        ต้องการทั้งสองอย่างพร้อมกัน ก็ล็อกซ้อนสองชั้น
      </text>

      <defs>
        <marker id="pkd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
