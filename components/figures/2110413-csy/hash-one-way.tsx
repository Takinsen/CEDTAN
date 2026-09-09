// input of any size collapses to a fixed-length digest, and never comes back
export function HashOneWay() {
  return (
    <svg
      viewBox="0 0 620 254"
      role="img"
      aria-label="ข้อความสามชิ้นที่ยาวไม่เท่ากันถูกส่งเข้าฟังก์ชัน hash แล้วได้ค่าออกมายาวเท่ากันทุกชิ้น ลูกศรขากลับถูกกากบาททิ้ง และข้อความสองชิ้นที่ต่างกันอาจได้ค่าเดียวกันซึ่งเรียกว่า collision"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="22" textAnchor="middle" fontSize="11" opacity="0.8">
        เข้ายาวเท่าไหร่ก็ได้ ออกยาวคงที่เสมอ
      </text>

      <g stroke="currentColor" strokeOpacity="0.55">
        <rect x="16" y="44" width="76" height="26" rx="5" fillOpacity="0.06" />
        <rect x="16" y="82" width="170" height="26" rx="5" fillOpacity="0.06" />
        <rect x="16" y="120" width="122" height="26" rx="5" fillOpacity="0.06" />
      </g>
      <text x="24" y="61" fontSize="11" opacity="0.85">
        hello
      </text>
      <text x="24" y="99" fontSize="11" opacity="0.85">
        ไฟล์ติดตั้งขนาด 4 GB
      </text>
      <text x="24" y="137" fontSize="11" opacity="0.85">
        hellp
      </text>

      <rect x="232" y="60" width="104" height="70" rx="9" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.55" />
      <text x="284" y="89" textAnchor="middle" fontSize="11" fontWeight="600">
        hash
      </text>
      <text x="284" y="110" textAnchor="middle" fontSize="11" opacity="0.8">
        SHA-256
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#ho-arrow)">
        <path d="M 194 57 L 229 82" />
        <path d="M 194 95 L 229 95" />
        <path d="M 194 133 L 229 108" />
        <line x1="340" y1="76" x2="392" y2="76" />
        <line x1="340" y1="95" x2="392" y2="95" />
        <line x1="340" y1="114" x2="392" y2="114" />
      </g>

      <g stroke="currentColor" strokeOpacity="0.55">
        <rect x="396" y="64" width="208" height="24" rx="5" fillOpacity="0.12" />
        <rect x="396" y="93" width="208" height="24" rx="5" fillOpacity="0.12" />
        <rect x="396" y="122" width="208" height="24" rx="5" fillOpacity="0.12" />
      </g>
      <text x="404" y="80" fontSize="11" opacity="0.85">
        2cf24dba5fb0a30e...
      </text>
      <text x="404" y="109" fontSize="11" opacity="0.85">
        9f86d081884c7d65...
      </text>
      <text x="404" y="138" fontSize="11" opacity="0.85">
        70e2fc1a4e2b0c3d...
      </text>

      <text x="500" y="164" textAnchor="middle" fontSize="11" opacity="0.8">
        ยาวเท่ากันหมด 256 บิต
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none">
        <path d="M 396 190 L 240 190" markerEnd="url(#ho-arrow)" />
        <line x1="308" y1="182" x2="324" y2="198" />
        <line x1="324" y1="182" x2="308" y2="198" />
      </g>
      <text x="404" y="194" fontSize="11" fontWeight="600">
        ไม่มีทางกลับ
      </text>
      <text x="404" y="215" fontSize="11" opacity="0.85">
        ไม่มีฟังก์ชันผกผัน จึงถอดกลับเป็นต้นฉบับไม่ได้
      </text>

      <text x="310" y="242" textAnchor="middle" fontSize="11" opacity="0.78">
        ค่าที่ออกมาสั้นกว่าค่าที่เข้าไป แปลว่ามีข้อความคนละชิ้นที่ได้ค่าเดียวกันแน่นอน นั่นคือ collision
      </text>

      <defs>
        <marker id="ho-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
