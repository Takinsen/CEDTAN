// a controller writes rows into an OpenFlow switch's flow table; each row is priority, rule, action and counters
export function OpenflowSwitch() {
  const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';
  const cols = [
    { x: 40, w: 70, head: 'priority' },
    { x: 110, w: 250, head: 'rule (match)' },
    { x: 360, w: 120, head: 'action' },
    { x: 480, w: 120, head: 'stats' },
  ];
  const rows = [
    { p: '200', rule: 'tcp, dport = 22', action: 'drop', stats: '1 pkt, 118 B' },
    { p: '100', rule: 'vlan 1, MAC dst 00:1f:00:00:00:01', action: 'port 6, 7, 9', stats: '0' },
    { p: '100', rule: 'ip, IP dst = 5.6.7.8', action: 'port 6', stats: '3 pkt, 354 B' },
    { p: '0', rule: 'ทุก packet ที่เหลือ', action: 'ส่งให้ controller', stats: '0' },
  ];
  const top = 176;
  const rowH = 24;
  const ports = [
    { x: 40, label: 'port 1' },
    { x: 150, label: 'port 2' },
    { x: 260, label: '…' },
    { x: 370, label: 'port N' },
  ];

  return (
    <svg
      viewBox="0 0 640 350"
      role="img"
      aria-label="controller ส่งคำสั่งผ่าน OpenFlow ไปเขียนแถวลงใน flow table ของ switch แต่ละแถวมี priority, rule, action และตัวนับ"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {/* the controller and the OpenFlow channel down to the switch */}
      <rect x="230" y="10" width="180" height="40" rx="8" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" />
      <text x="320" y="35" textAnchor="middle" fontSize="13" fontWeight="600">
        Controller
      </text>
      <line x1="320" y1="50" x2="320" y2="96" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" />
      <text x="332" y="72" fontSize="12">
        OpenFlow protocol
      </text>
      <text x="332" y="88" fontSize="11" opacity="0.75">
        controller สั่งเพิ่ม ลบ แก้แถว และขอดูตัวนับ
      </text>

      {/* the switch */}
      <rect x="20" y="96" width="600" height="206" rx="10" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.6" />
      <text x="608" y="114" textAnchor="end" fontSize="12" fontWeight="600">
        OpenFlow switch
      </text>
      <rect x="40" y="122" width="400" height="28" rx="6" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" />
      <text x="240" y="141" textAnchor="middle" fontSize="12">
        OpenFlow client — รับคำสั่งมาเขียนลงตาราง
      </text>
      <text x="40" y="170" fontSize="12" fontWeight="600">
        flow table
      </text>

      {/* the table: header row, then one row per flow entry */}
      {cols.map((c) => (
        <g key={c.head}>
          <rect x={c.x} y={top} width={c.w} height={rowH} fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.55" />
          <text x={c.x + 8} y={top + 16} fontSize="12" fontWeight="600">
            {c.head}
          </text>
        </g>
      ))}
      {rows.map((r, i) => {
        const y = top + rowH * (i + 1);
        const cells = [r.p, r.rule, r.action, r.stats];
        return (
          <g key={`${r.p}-${r.rule}`}>
            {cols.map((c, j) => (
              <g key={c.head}>
                <rect x={c.x} y={y} width={c.w} height={rowH} fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.5" />
                <text
                  x={c.x + 8}
                  y={y + 16}
                  fontSize="11.5"
                  fontFamily={j === 1 && i < 3 ? mono : undefined}
                >
                  {cells[j]}
                </text>
              </g>
            ))}
          </g>
        );
      })}

      {/* ports along the bottom edge */}
      {ports.map((p) => (
        <g key={p.label}>
          <rect x={p.x} y="302" width="80" height="28" rx="4" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.6" />
          <text x={p.x + 40} y="321" textAnchor="middle" fontSize="12">
            {p.label}
          </text>
        </g>
      ))}
      <text x="466" y="321" fontSize="11" opacity="0.75">
        packet เข้าออกทาง port
      </text>
    </svg>
  );
}
