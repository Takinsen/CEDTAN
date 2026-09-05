// where the evidence comes from, what turns it into knowledge, and what that knowledge builds
export function AuditPipeline() {
  return (
    <svg
      viewBox="0 0 620 226"
      role="img"
      aria-label="ร่องรอยการใช้งานทั้งแบบกายภาพและแบบ log ถูกส่งเข้าเครื่องมือวิเคราะห์ ผลที่ได้กลายเป็นกฎของ IDS และเป็นนโยบายที่ดีขึ้น ซึ่งวนกลับไปเปลี่ยนสิ่งที่ระบบเก็บ"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="24" textAnchor="middle" fontSize="11" opacity="0.8">
        Auditing คือวงจร ไม่ใช่เส้นตรง — ผลที่ได้ย้อนกลับไปแก้นโยบาย
      </text>

      <rect x="16" y="46" width="150" height="88" rx="9" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <text x="91" y="70" textAnchor="middle" fontSize="11" fontWeight="600">
        Audit Trails
      </text>
      <text x="91" y="92" textAnchor="middle" fontSize="11" opacity="0.8">
        physical trails
      </text>
      <text x="91" y="114" textAnchor="middle" fontSize="11" opacity="0.8">
        log files
      </text>

      <rect x="236" y="46" width="150" height="88" rx="9" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" />
      <text x="311" y="70" textAnchor="middle" fontSize="11" fontWeight="600">
        Analysis Tools
      </text>
      <text x="311" y="92" textAnchor="middle" fontSize="11" opacity="0.8">
        statistic, data mining
      </text>
      <text x="311" y="114" textAnchor="middle" fontSize="11" opacity="0.8">
        machine learning
      </text>

      <rect x="456" y="46" width="150" height="88" rx="9" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.55" />
      <text x="531" y="70" textAnchor="middle" fontSize="11" fontWeight="600">
        เอาไปทำอะไร
      </text>
      <text x="531" y="92" textAnchor="middle" fontSize="11" opacity="0.8">
        กฎของ IDS
      </text>
      <text x="531" y="114" textAnchor="middle" fontSize="11" opacity="0.8">
        นโยบายที่ดีขึ้น
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#ap-arrow)">
        <line x1="168" y1="90" x2="233" y2="90" />
        <line x1="388" y1="90" x2="453" y2="90" />
        <path d="M 531 136 L 531 172 L 91 172 L 91 136" />
      </g>

      <text x="311" y="192" textAnchor="middle" fontSize="11" opacity="0.8">
        นโยบายใหม่เปลี่ยนว่าระบบต้องเก็บอะไรเพิ่ม
      </text>
      <text x="310" y="216" textAnchor="middle" fontSize="11" opacity="0.78">
        ยิ่งรู้จักระบบของตัวเองมาก ยิ่งเขียนนโยบายได้ตรงจุด
      </text>

      <defs>
        <marker id="ap-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
