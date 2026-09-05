// the loop that turns a desired state into a running one and keeps it there
export function ControlLoop() {
  return (
    <svg
      viewBox="0 0 620 250"
      role="img"
      aria-label="วงจรควบคุมของ Kubernetes เปรียบสถานะที่ต้องการกับสถานะจริง แล้วลงมือแก้ให้ตรงกัน วนแบบนี้ตลอดเวลา"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="20" y="70" width="150" height="66" rx="9" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.55" />
      <text x="95" y="96" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Desired State
      </text>
      <text x="95" y="114" textAnchor="middle" fontSize="11" opacity="0.78">
        replicas: 3
      </text>
      <text x="95" y="152" textAnchor="middle" fontSize="11" opacity="0.72">
        เราเขียนไว้ในไฟล์
      </text>

      <rect x="235" y="70" width="150" height="66" rx="9" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="310" y="96" textAnchor="middle" fontSize="11.5" fontWeight="600">
        เปรียบเทียบ
      </text>
      <text x="310" y="114" textAnchor="middle" fontSize="11" opacity="0.78">
        ต่างกันตรงไหน
      </text>

      <rect x="450" y="70" width="150" height="66" rx="9" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="525" y="96" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Actual State
      </text>
      <text x="525" y="114" textAnchor="middle" fontSize="11" opacity="0.78">
        กำลังรันอยู่ 2
      </text>
      <text x="525" y="152" textAnchor="middle" fontSize="11" opacity="0.72">
        สิ่งที่เกิดขึ้นจริงในคลัสเตอร์
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" markerEnd="url(#cl-arrow)" fill="none">
        <line x1="172" y1="103" x2="232" y2="103" />
        <line x1="448" y1="103" x2="388" y2="103" />
        <path d="M 310 138 L 310 180 L 525 180 L 525 140" />
      </g>

      <rect x="330" y="166" width="150" height="28" rx="6" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
      <text x="405" y="185" textAnchor="middle" fontSize="11" fontWeight="600">
        ลงมือแก้ให้ตรง
      </text>

      <text x="310" y="35" textAnchor="middle" fontSize="11" opacity="0.8">
        วนแบบนี้ตลอดเวลา ไม่ใช่ทำครั้งเดียวจบ
      </text>
      <text x="310" y="228" textAnchor="middle" fontSize="11" opacity="0.78">
        เราบอกแค่ปลายทาง Kubernetes เป็นคนหาทางไปเอง
      </text>

      <defs>
        <marker id="cl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
