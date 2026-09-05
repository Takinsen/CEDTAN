// publishing host ports does not let two containers talk; a shared user network does
export function TodoNetSolution() {
  return (
    <svg
      viewBox="0 0 620 285"
      role="img"
      aria-label="ซ้าย todo กับ redis เปิดพอร์ตออกหา host ทั้งคู่แต่คุยกันไม่ได้ ขวา ทั้งคู่อยู่บนเครือข่าย todo-net จึงเรียกกันด้วยชื่อได้"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="155" y="22" textAnchor="middle" fontSize="11.5" fontWeight="600" opacity="0.85">
        ก่อน — ต่างคนต่างอยู่
      </text>
      <text x="465" y="22" textAnchor="middle" fontSize="11.5" fontWeight="600" opacity="0.85">
        หลัง — อยู่บน todo-net เดียวกัน
      </text>

      <rect x="10" y="32" width="290" height="236" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.3" />
      <rect x="320" y="32" width="290" height="236" rx="10" fill="none" stroke="currentColor" strokeOpacity="0.3" />

      <rect x="30" y="50" width="110" height="48" rx="8" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
      <text x="85" y="79" textAnchor="middle" fontSize="12" fontWeight="600">
        todo
      </text>
      <rect x="170" y="50" width="110" height="48" rx="8" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
      <text x="225" y="79" textAnchor="middle" fontSize="12" fontWeight="600">
        redis
      </text>
      <line x1="142" y1="74" x2="168" y2="74" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.3" strokeDasharray="3 3" />
      <text x="155" y="46" textAnchor="middle" fontSize="15" opacity="0.75">
        ?
      </text>

      <line x1="85" y1="98" x2="85" y2="188" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.3" />
      <text x="91" y="148" fontSize="9.5" fontFamily="monospace" opacity="0.8">
        8000
      </text>
      <line x1="225" y1="98" x2="225" y2="188" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.3" />
      <text x="231" y="148" fontSize="9.5" fontFamily="monospace" opacity="0.8">
        6379
      </text>
      <rect x="20" y="190" width="260" height="28" rx="6" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.4" strokeDasharray="4 3" />
      <text x="150" y="209" textAnchor="middle" fontSize="10.5" opacity="0.8">
        Host Ports
      </text>

      <text x="155" y="240" textAnchor="middle" fontSize="10" opacity="0.78">
        เปิดพอร์ตออกหา host ทั้งคู่
      </text>
      <text x="155" y="256" textAnchor="middle" fontSize="10" opacity="0.78">
        แต่ยังเรียกกันเองไม่ได้
      </text>

      <rect x="340" y="50" width="110" height="48" rx="8" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
      <text x="395" y="79" textAnchor="middle" fontSize="12" fontWeight="600">
        todo
      </text>
      <rect x="480" y="50" width="110" height="48" rx="8" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
      <text x="535" y="79" textAnchor="middle" fontSize="12" fontWeight="600">
        redis
      </text>

      <line x1="420" y1="98" x2="420" y2="123" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.3" />
      <line x1="510" y1="98" x2="510" y2="123" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.3" />
      <rect x="390" y="125" width="150" height="26" rx="6" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.5" />
      <text x="465" y="143" textAnchor="middle" fontSize="11" fontWeight="600">
        todo-net
      </text>

      <line x1="360" y1="98" x2="360" y2="188" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.3" />
      <text x="354" y="148" textAnchor="end" fontSize="9.5" fontFamily="monospace" opacity="0.8">
        8000
      </text>
      <rect x="330" y="190" width="260" height="28" rx="6" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.4" strokeDasharray="4 3" />
      <text x="460" y="209" textAnchor="middle" fontSize="10.5" opacity="0.8">
        Host Ports
      </text>

      <text x="465" y="240" textAnchor="middle" fontSize="10" opacity="0.78">
        redis ไม่ต้องเปิดพอร์ตออกหา host เลย
      </text>
      <text x="465" y="256" textAnchor="middle" fontSize="10" opacity="0.78">
        todo เรียก redis:6379 ได้ตรง ๆ
      </text>
    </svg>
  );
}
