// why a fresh random number each round makes a recorded reply useless
export function ChallengeResponse() {
  return (
    <svg
      viewBox="0 0 620 248"
      role="img"
      aria-label="Alice ส่งเลขสุ่ม N ให้ Bob แล้ว Bob ตอบกลับด้วย N และ B ที่เข้ารหัสด้วยกุญแจร่วม Alice ถอดรหัสแล้วเทียบว่าได้ N ตัวเดิม จึงรู้ว่าอีกฝั่งมีกุญแจจริง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="40" y="26" width="140" height="38" rx="8" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
      <text x="110" y="51" textAnchor="middle" fontSize="12" fontWeight="600">
        Alice
      </text>

      <rect x="440" y="26" width="140" height="38" rx="8" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
      <text x="510" y="51" textAnchor="middle" fontSize="12" fontWeight="600">
        Bob
      </text>

      <g stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.3" strokeDasharray="4 4">
        <line x1="110" y1="66" x2="110" y2="188" />
        <line x1="510" y1="66" x2="510" y2="188" />
      </g>

      <text x="310" y="94" textAnchor="middle" fontSize="11">
        N — เลขสุ่มที่ใช้ครั้งเดียว
      </text>
      <line x1="112" y1="106" x2="506" y2="106" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" markerEnd="url(#cr-arrow)" />

      <text x="310" y="140" textAnchor="middle" fontSize="11">
        {'{N, B}k — เข้ารหัสด้วยกุญแจที่รู้กันสองคน'}
      </text>
      <line x1="508" y1="152" x2="114" y2="152" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" markerEnd="url(#cr-arrow)" />

      <text x="310" y="180" textAnchor="middle" fontSize="11" opacity="0.78">
        Alice ถอดรหัสแล้วต้องได้ N ตัวเดิม จึงรู้ว่าอีกฝั่งมีกุญแจจริง
      </text>

      <text x="310" y="214" textAnchor="middle" fontSize="11" opacity="0.78">
        N เปลี่ยนทุกรอบ คนที่อัดข้อความเก่าไปเล่นซ้ำจึงใช้ไม่ได้ (replay attack)
      </text>
      <text x="310" y="238" textAnchor="middle" fontSize="11" opacity="0.78">
        รีโมทกุญแจรถสมัยนี้ใช้วิธีนี้
      </text>

      <defs>
        <marker id="cr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
