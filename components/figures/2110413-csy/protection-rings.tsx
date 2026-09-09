// concentric privilege rings, and the one legal way from outside to inside
export function ProtectionRings() {
  return (
    <svg
      viewBox="0 0 620 262"
      role="img"
      aria-label="วงแหวนสี่ชั้นซ้อนกัน ชั้นในสุดคือ ring 0 ของ kernel ชั้นนอกสุดคือ ring 3 ของโปรแกรมผู้ใช้ ชั้นในอ่านชั้นนอกได้ตรง ๆ แต่ชั้นนอกเข้าชั้นในได้ทางเดียวคือผ่าน system call"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="22" textAnchor="middle" fontSize="11" opacity="0.8">
        หน่วยความจำถูกแบ่งเป็นช่อง แต่ละช่องผูกกับวงแหวนหนึ่งวง
      </text>

      <g stroke="currentColor" strokeOpacity="0.55">
        <circle cx="140" cy="130" r="92" fillOpacity="0.04" />
        <circle cx="140" cy="130" r="69" fillOpacity="0.07" />
        <circle cx="140" cy="130" r="46" fillOpacity="0.11" />
        <circle cx="140" cy="130" r="23" fillOpacity="0.2" />
      </g>

      <text x="140" y="56" textAnchor="middle" fontSize="11" opacity="0.85">
        ring 3
      </text>
      <text x="140" y="79" textAnchor="middle" fontSize="11" opacity="0.85">
        ring 2
      </text>
      <text x="140" y="102" textAnchor="middle" fontSize="11" opacity="0.85">
        ring 1
      </text>
      <text x="140" y="135" textAnchor="middle" fontSize="11" fontWeight="600">
        ring 0
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#pr-arrow)">
        <path d="M 296 92 L 214 116" />
        <path d="M 214 148 L 296 172" />
      </g>

      <text x="300" y="76" fontSize="11" fontWeight="600">
        ขาเข้า มีประตูเดียว
      </text>
      <text x="300" y="97" fontSize="11" opacity="0.85">
        ring 3 เรียก ring 0 ได้ผ่าน system call เท่านั้น
      </text>
      <text x="300" y="118" fontSize="11" opacity="0.85">
        เรียกตรงไม่ได้ ตัวประมวลผลจะขัดขึ้นมาเอง
      </text>

      <text x="300" y="158" fontSize="11" fontWeight="600">
        ขาออก ผ่านได้ตลอด
      </text>
      <text x="300" y="179" fontSize="11" opacity="0.85">
        ring 0 อ่านเขียนของ ring 3 ได้ตรง ๆ
      </text>

      <text x="300" y="212" fontSize="11" opacity="0.8">
        ring 0 คือ kernel ส่วน ring 3 คือโปรแกรมของผู้ใช้
      </text>

      <text x="310" y="250" textAnchor="middle" fontSize="11" opacity="0.78">
        Intel x86 มีสี่วง แต่ระบบปฏิบัติการส่วนใหญ่ใช้แค่ 0 กับ 3
      </text>

      <defs>
        <marker id="pr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
