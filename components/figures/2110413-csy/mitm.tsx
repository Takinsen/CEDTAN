// both ends believe they hold one conversation; the middle holds two
export function Mitm() {
  return (
    <svg
      viewBox="0 0 620 236"
      role="img"
      aria-label="Alice กับ Bob คิดว่าคุยกันตรง ๆ แต่จริง ๆ มีคนกลางนั่งอยู่ระหว่างสองฝั่ง อ่านและแก้ข้อความได้ทั้งสองทาง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="46" textAnchor="middle" fontSize="11" opacity="0.78">
        สิ่งที่ทั้งสองฝั่งคิดว่ากำลังเกิดขึ้น
      </text>
      <path d="M80 86 Q310 56 540 86" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.3" strokeDasharray="5 4" />

      <rect x="20" y="94" width="120" height="48" rx="8" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.55" />
      <text x="80" y="123" textAnchor="middle" fontSize="12" fontWeight="600">
        Alice
      </text>

      <rect x="250" y="94" width="120" height="48" rx="8" fillOpacity="0.3" stroke="currentColor" strokeOpacity="0.6" />
      <text x="310" y="123" textAnchor="middle" fontSize="12" fontWeight="600">
        คนกลาง
      </text>

      <rect x="480" y="94" width="120" height="48" rx="8" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.55" />
      <text x="540" y="123" textAnchor="middle" fontSize="12" fontWeight="600">
        Bob
      </text>

      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" fill="none" markerEnd="url(#mm-arrow)" markerStart="url(#mm-arrow)">
        <line x1="142" y1="118" x2="248" y2="118" />
        <line x1="372" y1="118" x2="478" y2="118" />
      </g>

      <text x="310" y="176" textAnchor="middle" fontSize="11" opacity="0.78">
        คนกลางอ่านและแก้ข้อความได้ทั้งสองทาง โดยไม่มีฝั่งไหนรู้ตัว
      </text>
      <text x="310" y="200" textAnchor="middle" fontSize="11" opacity="0.78">
        สไลด์ระบุว่าเดิมทีเรียกว่า MIG-in-the-middle attack ของรัสเซีย
      </text>
      <text x="310" y="224" textAnchor="middle" fontSize="11" opacity="0.78">
        รูปในสไลด์มาจากหนังสือ Security Engineering ของ Ross Anderson
      </text>

      <defs>
        <marker id="mm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
