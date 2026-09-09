// what each family of modes carries from one block to the next
export function BlockCipherModes() {
  const panels = [
    {
      id: 'chain',
      x: 16,
      title: 'ลูกโซ่',
      carries: 'ผลลัพธ์ของบล็อกก่อน',
      names: 'CBC, PCBC',
      note: 'บล็อกแรกใช้ IV แทน',
    },
    {
      id: 'feed',
      x: 218,
      title: 'ป้อนกลับ',
      carries: 'ผลจากตัวเข้ารหัสเอง',
      names: 'CFB, OFB',
      note: 'ใช้ block cipher แบบ stream ได้',
    },
    {
      id: 'count',
      x: 420,
      title: 'ตัวนับ',
      carries: 'ตัวนับกับ nonce',
      names: 'CTR, GCM',
      note: 'บล็อกไม่ต้องรอกัน ทำขนานได้',
    },
  ];

  return (
    <svg
      viewBox="0 0 620 244"
      role="img"
      aria-label="โหมดของ block cipher แบ่งเป็นสามกลุ่มตามสิ่งที่ส่งต่อจากบล็อกหนึ่งไปอีกบล็อก กลุ่มลูกโซ่ส่งผลลัพธ์ของบล็อกก่อน กลุ่มป้อนกลับส่งผลจากตัวเข้ารหัสเอง กลุ่มตัวนับส่งตัวนับกับ nonce"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="22" textAnchor="middle" fontSize="11" opacity="0.8">
        ทุกโหมดใช้ block cipher ตัวเดียวกัน ต่างกันที่ว่าอะไรถูกส่งต่อไปบล็อกถัดไป
      </text>

      {panels.map((p) => (
        <g key={p.id}>
          <rect x={p.x} y={40} width="184" height="164" rx="9" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.55" />
          <text x={p.x + 92} y={64} textAnchor="middle" fontSize="11" fontWeight="600">
            {p.title}
          </text>

          <rect x={p.x + 20} y={82} width="60" height="30" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.55" />
          <text x={p.x + 50} y={102} textAnchor="middle" fontSize="11">
            บล็อก 1
          </text>
          <rect x={p.x + 104} y={82} width="60" height="30" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.55" />
          <text x={p.x + 134} y={102} textAnchor="middle" fontSize="11">
            บล็อก 2
          </text>

          <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#bcm-arrow)">
            {p.id === 'count' ? (
              <>
                <path d={`M ${p.x + 50} 132 L ${p.x + 50} 116`} />
                <path d={`M ${p.x + 134} 132 L ${p.x + 134} 116`} />
              </>
            ) : (
              <path d={`M ${p.x + 82} 97 L ${p.x + 101} 97`} />
            )}
          </g>

          <text x={p.x + 92} y={148} textAnchor="middle" fontSize="11" opacity="0.85">
            {p.carries}
          </text>
          <text x={p.x + 92} y={172} textAnchor="middle" fontSize="11" fontWeight="600">
            {p.names}
          </text>
          <text x={p.x + 92} y={193} textAnchor="middle" fontSize="11" opacity="0.8">
            {p.note}
          </text>
        </g>
      ))}

      <text x="310" y="230" textAnchor="middle" fontSize="11" opacity="0.78">
        ECB ไม่อยู่ในสามกลุ่มนี้ เพราะมันไม่ส่งอะไรต่อเลย
      </text>

      <defs>
        <marker id="bcm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
