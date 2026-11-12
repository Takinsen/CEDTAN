// the forensic workflow in four phases: secure the scene, copy, analyse the copy, hand over
export function ForensicsTimeline() {
  return (
    <svg
      viewBox="0 0 620 268"
      role="img"
      aria-label="ขั้นตอนนิติวิทยาศาสตร์ดิจิทัลสี่ช่วง ช่วงแรกที่เกิดเหตุคือกันคนออกจากระบบและห้ามเล่นกับเครื่อง ช่วงที่สองทำสำเนาเป็นไฟล์ภาพหรือโคลนลงดิสก์อีกลูก ช่วงที่สามวิเคราะห์บนสำเนาด้วย carving การอ่านข้อมูลดิบและการอ่าน system artifacts ช่วงสุดท้ายส่งมอบหลักฐานในลักษณะเดียวกับที่ได้มา"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <g fontSize="11" fontWeight="600" textAnchor="middle">
        <text x="82" y="36">1 · ที่เกิดเหตุ</text>
        <text x="234" y="36">2 · ทำสำเนา</text>
        <text x="386" y="36">3 · วิเคราะห์บนสำเนา</text>
        <text x="538" y="36">4 · ส่งมอบ</text>
      </g>

      <g stroke="currentColor" strokeOpacity="0.55">
        <rect x="16" y="50" width="132" height="54" rx="7" fillOpacity="0.06" />
        <rect x="16" y="114" width="132" height="118" rx="7" fillOpacity="0.06" />
        <rect x="168" y="50" width="132" height="60" rx="7" fillOpacity="0.12" />
        <rect x="168" y="136" width="132" height="60" rx="7" fillOpacity="0.12" />
        <rect x="320" y="50" width="132" height="50" rx="7" fillOpacity="0.16" />
        <rect x="320" y="110" width="132" height="50" rx="7" fillOpacity="0.16" />
        <rect x="320" y="170" width="132" height="62" rx="7" fillOpacity="0.16" />
        <rect x="472" y="50" width="132" height="80" rx="7" fillOpacity="0.2" />
      </g>

      <g fontSize="11" textAnchor="middle">
        <text x="82" y="70" fontWeight="600">Barring Access</text>
        <text x="82" y="90" opacity="0.85">กันทุกคนออกจากระบบ</text>

        <text x="82" y="133" fontWeight="600">Never play</text>
        <text x="82" y="148" fontWeight="600">with machine</text>
        <text x="82" y="168" opacity="0.85">ปิดอยู่ ปล่อยให้ปิด</text>
        <text x="82" y="183" opacity="0.85">เปิดอยู่ ถ่ายรูปหน้าจอ</text>
        <text x="82" y="198" opacity="0.85">เก็บ RAM ก่อนอย่างอื่น</text>
        <text x="82" y="213" opacity="0.85">ใส่ถุงกันไฟฟ้าสถิต</text>

        <text x="234" y="72" fontWeight="600">Image</text>
        <text x="234" y="92" opacity="0.85">ดิสก์ → ไฟล์หนึ่งไฟล์</text>
        <text x="234" y="126" opacity="0.7">หรือ</text>
        <text x="234" y="158" fontWeight="600">Clone</text>
        <text x="234" y="178" opacity="0.85">ดิสก์ → ดิสก์อีกลูก</text>

        <text x="386" y="70" fontWeight="600">Carving</text>
        <text x="386" y="88" opacity="0.85">ดึงไฟล์จากไบต์ดิบ</text>
        <text x="386" y="130" fontWeight="600">Analyse raw data</text>
        <text x="386" y="148" opacity="0.85">ไฟล์ที่เปิดดูได้ตรง ๆ</text>
        <text x="386" y="189" fontWeight="600">Analyse system</text>
        <text x="386" y="204" fontWeight="600">artifacts</text>
        <text x="386" y="222" opacity="0.85">ผู้ใช้ login เครือข่าย</text>

        <text x="538" y="70" fontWeight="600">Submit the</text>
        <text x="538" y="85" fontWeight="600">evidence</text>
        <text x="538" y="105" opacity="0.85">ในลักษณะเดียวกับ</text>
        <text x="538" y="120" opacity="0.85">ที่ได้มา</text>
      </g>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#ft-arrow)">
        <line x1="149" y1="80" x2="165" y2="80" />
        <line x1="301" y1="80" x2="317" y2="80" />
        <line x1="453" y1="80" x2="469" y2="80" />
      </g>

      <line x1="160" y1="244" x2="604" y2="244" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="4 4" />
      <text x="382" y="260" textAnchor="middle" fontSize="11" opacity="0.8">
        ช่วงที่ 2 อ่านต้นฉบับเพื่อทำสำเนา ตั้งแต่ช่วงที่ 3 ทุกอย่างทำกับสำเนา
      </text>

      <defs>
        <marker id="ft-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
