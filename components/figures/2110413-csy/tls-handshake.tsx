// public key is used once to agree on a symmetric key, then gets out of the way
export function TlsHandshake() {
  const steps = [
    { n: '1', y: 82, dir: 'right', text: 'ขอหน้าเว็บ https://www.chula.ac.th/' },
    { n: '2', y: 124, dir: 'left', text: 'นี่กุญแจสาธารณะกับใบรับรองของผม' },
    { n: '3', y: 166, dir: 'right', text: 'ใช้ RC4 นะ นี่กุญแจ ล็อกด้วย pub ของเซิร์ฟเวอร์' },
  ];

  return (
    <svg
      viewBox="0 0 620 276"
      role="img"
      aria-label="ไคลเอนต์ขอหน้าเว็บ เซิร์ฟเวอร์ส่งกุญแจสาธารณะและใบรับรองกลับมา ไคลเอนต์เลือกอัลกอริทึมและสุ่มกุญแจสมมาตรแล้วส่งกลับโดยล็อกด้วยกุญแจสาธารณะของเซิร์ฟเวอร์ จากนั้นทั้งสองฝั่งรับส่งข้อมูลด้วยกุญแจสมมาตรดอกนั้น"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="22" textAnchor="middle" fontSize="11" opacity="0.8">
        กุญแจสาธารณะถูกใช้ครั้งเดียวตอนตกลงกุญแจ แล้วก็เลิกใช้
      </text>

      <rect x="16" y="42" width="120" height="30" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.55" />
      <text x="76" y="62" textAnchor="middle" fontSize="11" fontWeight="600">
        Client
      </text>
      <rect x="484" y="42" width="120" height="30" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.55" />
      <text x="544" y="62" textAnchor="middle" fontSize="11" fontWeight="600">
        Server
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" strokeDasharray="4 5">
        <line x1="76" y1="76" x2="76" y2="236" />
        <line x1="544" y1="76" x2="544" y2="236" />
      </g>

      {steps.map((s) => (
        <g key={s.n}>
          <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#tls-arrow)">
            {s.dir === 'right' ? <line x1="80" y1={s.y} x2="540" y2={s.y} /> : <line x1="540" y1={s.y} x2="80" y2={s.y} />}
          </g>
          <text x="310" y={s.y - 8} textAnchor="middle" fontSize="11">
            {s.n}. {s.text}
          </text>
        </g>
      ))}

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#tls-arrow)" markerStart="url(#tls-arrow)">
        <line x1="80" y1="212" x2="540" y2="212" />
      </g>
      <text x="310" y="204" textAnchor="middle" fontSize="11" fontWeight="600">
        4. รับส่งข้อมูลจริง ล็อกด้วยกุญแจสมมาตรดอกนั้น
      </text>

      <text x="16" y="248" fontSize="11" opacity="0.85">
        ไคลเอนต์เลือกเองว่าจะใช้ stream หรือ block cipher ตัวไหน
      </text>
      <text x="16" y="268" fontSize="11" opacity="0.78">
        มีแต่เซิร์ฟเวอร์ที่ถือ priv จึงมีแค่สองฝั่งนี้ที่รู้กุญแจสมมาตร — ได้ความเร็วของสมมาตร บวกความง่ายในการแจกจ่ายของกุญแจสาธารณะ
      </text>

      <defs>
        <marker id="tls-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
