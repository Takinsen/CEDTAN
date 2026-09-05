// the tunnel proof from the slide: she comes out the side we shout, so she must hold the key
export function ZkppTunnel() {
  return (
    <svg
      viewBox="0 0 620 266"
      role="img"
      aria-label="อุโมงค์ที่แยกเป็นทางซ้ายและทางขวา แล้วมาบรรจบกันที่ประตูล็อก เด็กเดินเข้าไปทางใดทางหนึ่งโดยเราไม่เห็น เราตะโกนบอกให้ออกทางที่เราเลือก ถ้าออกถูกทุกรอบแปลว่ามีกุญแจ"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="24" textAnchor="middle" fontSize="11" opacity="0.8">
        Zero-Knowledge Password Proof — พิสูจน์ว่ารู้ โดยไม่ต้องบอกว่ารู้อะไร
      </text>

      <g fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.6">
        <line x1="60" y1="128" x2="200" y2="128" />
        <path d="M200 128 Q200 52 290 52 L400 52 Q470 52 470 128" />
        <path d="M200 128 Q200 204 290 204 L400 204 Q470 204 470 128" />
      </g>

      <text x="130" y="116" textAnchor="middle" fontSize="11">
        ทางเข้า
      </text>
      <text x="335" y="76" textAnchor="middle" fontSize="11" opacity="0.8">
        ทางซ้าย
      </text>
      <text x="335" y="188" textAnchor="middle" fontSize="11" opacity="0.8">
        ทางขวา
      </text>

      <rect x="458" y="106" width="24" height="44" rx="4" fillOpacity="0.28" stroke="currentColor" strokeOpacity="0.6" />
      <text x="498" y="122" fontSize="11" fontWeight="600">
        ประตูล็อก
      </text>
      <text x="498" y="144" fontSize="11" opacity="0.78">
        ต้องมีกุญแจ
      </text>

      <text x="310" y="234" textAnchor="middle" fontSize="11" opacity="0.78">
        เราไม่เห็นว่าเธอเดินเข้าทางไหน แล้วตะโกนบอกให้ออกทางที่เราเลือก
      </text>
      <text x="310" y="256" textAnchor="middle" fontSize="11" opacity="0.78">
        ทำซ้ำหลายรอบ ถ้าออกถูกทุกครั้ง แปลว่ามีกุญแจจริง โดยไม่ต้องบอกกุญแจให้เรารู้
      </text>
    </svg>
  );
}
