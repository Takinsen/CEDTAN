// the attacker pays the cost once, ahead of time, then only has to look the answer up
export function RainbowTable() {
  return (
    <svg
      viewBox="0 0 620 244"
      role="img"
      aria-label="ผู้โจมตีเอารายการคำมาคำนวณค่าแฮชล่วงหน้าเก็บเป็นตาราง เมื่อได้ค่าแฮชมาก็เปิดตารางหาคำตอบได้ทันที แทนที่จะต้องลองเดาทีละคำ"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="26" textAnchor="middle" fontSize="11" opacity="0.8">
        Rainbow table เปลี่ยนการเดา ให้กลายเป็นการเปิดตาราง
      </text>

      <rect x="20" y="84" width="130" height="60" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="85" y="108" textAnchor="middle" fontSize="11" fontWeight="600">
        รายการคำ
      </text>
      <text x="85" y="130" textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.8">
        aaa … zzz
      </text>

      <text x="170" y="56" textAnchor="middle" fontSize="11" opacity="0.78">
        คำนวณไว้ก่อน
      </text>
      <line x1="152" y1="114" x2="186" y2="114" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" markerEnd="url(#rt-arrow)" />

      <rect x="190" y="64" width="190" height="100" rx="9" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.6" />
      <text x="285" y="88" textAnchor="middle" fontSize="11" fontWeight="600" fontFamily="monospace">
        Hash : Plain
      </text>
      <text x="285" y="112" textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.85">
        xyz : abc
      </text>
      <text x="285" y="134" textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.85">
        zzz : aaa
      </text>
      <text x="285" y="156" textAnchor="middle" fontSize="11" fontFamily="monospace" opacity="0.7">
        …
      </text>

      <text x="400" y="56" textAnchor="middle" fontSize="11" opacity="0.78">
        เปิดดู
      </text>
      <line x1="384" y1="114" x2="416" y2="114" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" markerEnd="url(#rt-arrow)" />

      <rect x="420" y="84" width="180" height="60" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="510" y="108" textAnchor="middle" fontSize="11">
        ได้ค่าแฮช xyz มา
      </text>
      <text x="510" y="130" textAnchor="middle" fontSize="11" opacity="0.8">
        รู้ทันทีว่าคือ abc
      </text>

      <text x="310" y="200" textAnchor="middle" fontSize="11" opacity="0.78">
        งานหนักถูกย้ายไปทำล่วงหน้าตอนเครื่องว่าง เหลือแค่การค้นหาตอนลงมือ
      </text>
      <text x="310" y="224" textAnchor="middle" fontSize="11" opacity="0.78">
        วิธีแก้คือ salt — เติมค่าสุ่มต่อคนก่อนแฮช ตารางที่ทำไว้จึงใช้ไม่ได้
      </text>

      <defs>
        <marker id="rt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
