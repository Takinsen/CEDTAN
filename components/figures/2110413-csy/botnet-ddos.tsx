// one person, one command channel, thousands of hijacked machines, one target
const BOTS = [40, 84, 128, 172];

export function BotnetDdos() {
  return (
    <svg
      viewBox="0 0 620 262"
      role="img"
      aria-label="คนสั่งการส่งคำสั่งผ่านช่องสั่งงาน ไปยัง bot จำนวนมากที่เป็นเครื่องของคนอื่นที่ถูกยึด แล้ว bot ทั้งหมดยิงไปที่เครื่องเป้าหมายพร้อมกัน"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="24" textAnchor="middle" fontSize="11" opacity="0.8">
        bot คือเครื่องของคนอื่นที่ถูกยึด ส่วน botnet คือเครือข่ายของ bot
      </text>

      <rect x="20" y="100" width="110" height="48" rx="8" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.6" />
      <text x="75" y="129" textAnchor="middle" fontSize="11" fontWeight="600">
        คนสั่งการ
      </text>

      <rect x="170" y="100" width="120" height="48" rx="8" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.5" />
      <text x="230" y="121" textAnchor="middle" fontSize="11" fontWeight="600">
        ช่องสั่งงาน
      </text>
      <text x="230" y="140" textAnchor="middle" fontSize="11" opacity="0.78">
        IRC
      </text>

      {BOTS.map((y) => (
        <g key={y}>
          <rect x="330" y={y} width="90" height="34" rx="6" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
          <text x="375" y={y + 22} textAnchor="middle" fontSize="11">
            bot
          </text>
          <line x1="292" y1="124" x2="328" y2={y + 17} stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.3" markerEnd="url(#bn-arrow)" />
          <line x1="422" y1={y + 17} x2="458" y2="124" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.3" markerEnd="url(#bn-arrow)" />
        </g>
      ))}

      <rect x="460" y="100" width="140" height="48" rx="8" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.6" />
      <text x="530" y="129" textAnchor="middle" fontSize="11" fontWeight="600">
        เครื่องเป้าหมาย
      </text>

      <line x1="132" y1="124" x2="168" y2="124" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" markerEnd="url(#bn-arrow)" />

      <text x="310" y="226" textAnchor="middle" fontSize="11" opacity="0.78">
        ปี 2008 มีการโจมตีแบบ DDoS ราว 190,000 ครั้ง ทำเงินให้คนร้ายราว 20 ล้านดอลลาร์
      </text>
      <text x="310" y="250" textAnchor="middle" fontSize="11" opacity="0.78">
        เครือข่ายเดียวกันยังเอาไปขโมยข้อมูล ส่งสแปม และกดโฆษณาปลอมได้ด้วย
      </text>

      <defs>
        <marker id="bn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
