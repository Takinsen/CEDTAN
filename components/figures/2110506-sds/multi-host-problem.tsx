// two hosts each build a network with the same name, and the two names still mean two separate networks
export function MultiHostProblem() {
  return (
    <svg
      viewBox="0 0 620 250"
      role="img"
      aria-label="สองเครื่องต่างสร้างเครือข่ายชื่อ mynet ของตัวเอง ชื่อซ้ำกันแต่เป็นคนละเครือข่าย container ข้ามเครื่องจึงเรียกกันด้วยชื่อไม่ได้"
      className="mx-auto h-auto w-full min-w-[580px]"
      fill="currentColor"
    >
      <rect x="20" y="30" width="265" height="150" rx="9" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.45" />
      <text x="152" y="23" textAnchor="middle" fontSize="11.5" fontWeight="600">
        computer
      </text>
      <rect x="34" y="48" width="118" height="52" rx="7" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.4" />
      <text x="93" y="70" textAnchor="middle" fontSize="11" fontWeight="600">
        prometheus
      </text>
      <text x="93" y="88" textAnchor="middle" fontSize="10" opacity="0.7">
        9090
      </text>
      <rect x="160" y="48" width="112" height="52" rx="7" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.4" />
      <text x="216" y="70" textAnchor="middle" fontSize="11" fontWeight="600">
        grafana
      </text>
      <text x="216" y="88" textAnchor="middle" fontSize="10" opacity="0.7">
        3000
      </text>
      <rect x="34" y="120" width="238" height="30" rx="6" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.45" />
      <text x="153" y="140" textAnchor="middle" fontSize="11" fontFamily="monospace">
        mynet
      </text>

      <rect x="335" y="30" width="265" height="150" rx="9" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.45" />
      <text x="467" y="23" textAnchor="middle" fontSize="11.5" fontWeight="600">
        raspberrypi
      </text>
      <rect x="405" y="48" width="126" height="52" rx="7" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.4" />
      <text x="468" y="70" textAnchor="middle" fontSize="11" fontWeight="600">
        node-exporter
      </text>
      <text x="468" y="88" textAnchor="middle" fontSize="10" opacity="0.7">
        9100
      </text>
      <rect x="349" y="120" width="238" height="30" rx="6" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.45" />
      <text x="468" y="140" textAnchor="middle" fontSize="11" fontFamily="monospace">
        mynet
      </text>

      <line x1="274" y1="135" x2="347" y2="135" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.4" strokeDasharray="5 4" />
      <line x1="302" y1="127" x2="318" y2="143" stroke="currentColor" strokeOpacity="0.85" strokeWidth="2.2" />
      <line x1="318" y1="127" x2="302" y2="143" stroke="currentColor" strokeOpacity="0.85" strokeWidth="2.2" />

      <text x="310" y="205" textAnchor="middle" fontSize="11.5" opacity="0.78">
        ชื่อเครือข่ายเหมือนกัน แต่เป็นคนละเครือข่าย prometheus จึงหา node-exporter ด้วยชื่อไม่เจอ
      </text>
      <text x="310" y="228" textAnchor="middle" fontSize="11.5" opacity="0.78">
        ทางออกเฉพาะหน้าคือเปิดพอร์ตออกมาแล้วชี้กันด้วยหมายเลข IP
      </text>
    </svg>
  );
}
