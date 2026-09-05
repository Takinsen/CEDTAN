// once you touch one company in a sector, the wall closes off every rival in the same sector
export function ChinaWall() {
  return (
    <svg
      viewBox="0 0 620 252"
      role="img"
      aria-label="ที่ปรึกษาที่เคยทำงานให้ธนาคาร A แล้ว จะเข้าถึงข้อมูลของธนาคาร B ซึ่งอยู่กลุ่มเดียวกันไม่ได้ แต่ยังทำงานให้บริษัทน้ำมันซึ่งอยู่คนละกลุ่มได้"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="24" textAnchor="middle" fontSize="11" opacity="0.8">
        กำแพงขึ้นเองหลังจากแตะกล่องแรก ไม่ได้ตั้งไว้ล่วงหน้า
      </text>

      <rect x="14" y="46" width="272" height="150" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="5 3" />
      <text x="150" y="68" textAnchor="middle" fontSize="11" fontWeight="600" opacity="0.85">
        กลุ่มธนาคาร
      </text>
      <rect x="36" y="82" width="104" height="52" rx="8" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.6" />
      <text x="88" y="106" textAnchor="middle" fontSize="11" fontWeight="600">
        ธนาคาร A
      </text>
      <text x="88" y="126" textAnchor="middle" fontSize="11" opacity="0.8">
        แตะแล้ว
      </text>
      <rect x="160" y="82" width="104" height="52" rx="8" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" />
      <text x="212" y="106" textAnchor="middle" fontSize="11" fontWeight="600">
        ธนาคาร B
      </text>
      <text x="212" y="126" textAnchor="middle" fontSize="11" opacity="0.8">
        ปิดทันที
      </text>
      <text x="150" y="164" textAnchor="middle" fontSize="11" opacity="0.85">
        คู่แข่งกันในกลุ่มเดียวกัน
      </text>
      <text x="150" y="184" textAnchor="middle" fontSize="11" opacity="0.85">
        เลือกได้แค่รายเดียว
      </text>

      <rect x="334" y="46" width="272" height="150" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="5 3" />
      <text x="470" y="68" textAnchor="middle" fontSize="11" fontWeight="600" opacity="0.85">
        กลุ่มน้ำมัน
      </text>
      <rect x="356" y="82" width="104" height="52" rx="8" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" />
      <text x="408" y="106" textAnchor="middle" fontSize="11" fontWeight="600">
        น้ำมัน C
      </text>
      <text x="408" y="126" textAnchor="middle" fontSize="11" opacity="0.8">
        ยังเข้าได้
      </text>
      <rect x="480" y="82" width="104" height="52" rx="8" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" />
      <text x="532" y="106" textAnchor="middle" fontSize="11" fontWeight="600">
        น้ำมัน D
      </text>
      <text x="532" y="126" textAnchor="middle" fontSize="11" opacity="0.8">
        ยังเข้าได้
      </text>
      <text x="470" y="164" textAnchor="middle" fontSize="11" opacity="0.85">
        คนละกลุ่มกับที่แตะไปแล้ว
      </text>
      <text x="470" y="184" textAnchor="middle" fontSize="11" opacity="0.85">
        กำแพงยังไม่ขึ้น
      </text>

      <line x1="310" y1="52" x2="310" y2="190" stroke="currentColor" strokeOpacity="0.85" strokeWidth="2.5" />

      <text x="310" y="222" textAnchor="middle" fontSize="11" opacity="0.78">
        สิทธิ์ของคนคนหนึ่งแคบลงตามประวัติที่เขาเคยเข้าถึง
      </text>
      <text x="310" y="242" textAnchor="middle" fontSize="11" opacity="0.78">
        ต่างจาก MAC และ DAC ที่สิทธิ์ถูกกำหนดไว้ตั้งแต่ต้น
      </text>
    </svg>
  );
}
