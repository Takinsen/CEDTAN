// where input stops being someone else's data and starts being data the system trusts
export function TrustBoundary() {
  return (
    <svg
      viewBox="0 0 620 236"
      role="img"
      aria-label="ข้อมูลจากผู้ใช้อยู่ในฝั่งที่เชื่อไม่ได้ ต้องผ่านการตรวจความถูกต้องก่อน จึงจะข้ามมาอยู่ในฝั่งที่ระบบเอาไปใช้ต่อได้"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="26" textAnchor="middle" fontSize="11" opacity="0.8">
        All input is evil until proven otherwise
      </text>

      <rect x="20" y="52" width="200" height="110" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="5 3" />
      <text x="120" y="74" textAnchor="middle" fontSize="11" fontWeight="600" opacity="0.8">
        ฝั่งที่เชื่อไม่ได้
      </text>
      <rect x="40" y="86" width="160" height="56" rx="7" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.5" />
      <text x="120" y="108" textAnchor="middle" fontSize="11">
        input จากผู้ใช้
      </text>
      <text x="120" y="130" textAnchor="middle" fontSize="11" opacity="0.75">
        ฟอร์ม ไฟล์ network
      </text>

      <rect x="252" y="82" width="116" height="56" rx="8" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.6" />
      <text x="310" y="104" textAnchor="middle" fontSize="11" fontWeight="600">
        ตรวจก่อนใช้
      </text>
      <text x="310" y="126" textAnchor="middle" fontSize="11" opacity="0.78">
        validation
      </text>

      <rect x="400" y="52" width="200" height="110" rx="10" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <text x="500" y="74" textAnchor="middle" fontSize="11" fontWeight="600" opacity="0.8">
        ฝั่งที่เชื่อได้
      </text>
      <rect x="420" y="86" width="160" height="56" rx="7" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
      <text x="500" y="108" textAnchor="middle" fontSize="11">
        ข้อมูลที่ตรวจแล้ว
      </text>
      <text x="500" y="130" textAnchor="middle" fontSize="11" opacity="0.75">
        ระบบเอาไปใช้ต่อได้
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#tb-arrow)">
        <line x1="222" y1="110" x2="250" y2="110" />
        <line x1="370" y1="110" x2="398" y2="110" />
      </g>

      <text x="310" y="192" textAnchor="middle" fontSize="11" opacity="0.78">
        Integrity คือการรักษาให้ของที่อยู่ฝั่งขวาครบและไม่ถูกแก้โดยไม่ได้รับอนุญาต
      </text>
      <text x="310" y="216" textAnchor="middle" fontSize="11" opacity="0.78">
        Threat modeling คือการเขียนไว้ล่วงหน้าว่าใครจะโจมตีตรงไหนได้บ้าง
      </text>

      <defs>
        <marker id="tb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
