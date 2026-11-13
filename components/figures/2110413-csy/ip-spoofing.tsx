// a forged source address: the victim trusts it, and the reply goes to the trusted host, not the attacker
const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

function Host({ x, y, name, ip, note }: { x: number; y: number; name: string; ip: string; note: string }) {
  return (
    <g>
      <rect x={x} y={y} width="160" height="62" rx="8" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.6" />
      <text x={x + 80} y={y + 20} textAnchor="middle" fontSize="11" fontWeight="600">
        {name}
      </text>
      <text x={x + 80} y={y + 36} textAnchor="middle" fontSize="11" fontFamily={MONO}>
        {ip}
      </text>
      <text x={x + 80} y={y + 52} textAnchor="middle" fontSize="11" opacity="0.78">
        {note}
      </text>
    </g>
  );
}

export function IpSpoofing() {
  return (
    <svg
      viewBox="0 0 620 300"
      role="img"
      aria-label="ผู้โจมตีที่อยู่จริง 1.1.1.1 ส่ง packet ถึงเหยื่อ 2.2.2.2 โดยเขียนที่อยู่ผู้ส่งเป็น 3.3.3.3 ซึ่งเป็นเครื่องที่เหยื่อไว้ใจ เหยื่อตอบกลับไปที่ 3.3.3.3 ผู้โจมตีจึงไม่เห็นคำตอบ และอาจยิงเครื่อง 3.3.3.3 ให้ล่มก่อน เพื่อไม่ให้มันปฏิเสธการเชื่อมต่อที่ตัวเองไม่ได้เริ่ม"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <Host x={16} y={40} name="ผู้โจมตี" ip="ที่อยู่จริง 1.1.1.1" note="ไม่เคยเห็นคำตอบ" />
      <Host x={444} y={40} name="เหยื่อ" ip="2.2.2.2" note="เชื่อ 3.3.3.3 จากที่อยู่" />
      <Host x={230} y={214} name="เครื่องที่เหยื่อไว้ใจ" ip="3.3.3.3" note="อาจถูกยิงให้ล่มก่อน" />

      <line x1="178" y1="71" x2="440" y2="71" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.6" markerEnd="url(#ips-arrow)" />
      <text x="310" y="60" textAnchor="middle" fontSize="11" fontFamily={MONO} fontWeight="600">
        src 3.3.3.3 → dst 2.2.2.2
      </text>
      <text x="310" y="90" textAnchor="middle" fontSize="11" opacity="0.8">
        ที่อยู่ผู้ส่งที่ผู้โจมตีเขียนเอง
      </text>

      <path d="M560 104 Q560 204 394 240" fill="none" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" strokeDasharray="5 4" markerEnd="url(#ips-arrow)" />
      <text x="440" y="150" textAnchor="middle" fontSize="11" fontFamily={MONO}>
        src 2.2.2.2 → dst 3.3.3.3
      </text>
      <text x="440" y="166" textAnchor="middle" fontSize="11" opacity="0.8">
        คำตอบวิ่งไปหาเจ้าของที่อยู่
      </text>

      <path d="M60 104 Q60 204 226 240" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" strokeDasharray="2 4" markerEnd="url(#ips-arrow)" />
      <text x="180" y="150" textAnchor="middle" fontSize="11" opacity="0.8">
        อาจยิงให้ล่มก่อน
      </text>
      <text x="180" y="166" textAnchor="middle" fontSize="11" opacity="0.8">
        จะได้ไม่ปฏิเสธแทน
      </text>

      <defs>
        <marker id="ips-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.7" />
        </marker>
      </defs>
    </svg>
  );
}
