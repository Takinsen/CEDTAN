// the internet protocol stack drawn as an hourglass: many protocols above and below, one in the middle
export function IpHourglass() {
  const rows = [
    { y: 26, items: ['HTTP', 'SMTP', 'QUIC', 'DASH', 'RTP', '…'], note: 'application' },
    { y: 78, items: ['TCP', 'UDP'], note: 'transport' },
    { y: 130, items: ['IP'], note: 'network', waist: true },
    { y: 182, items: ['Ethernet', 'WiFi', 'Bluetooth', 'PPP', 'PDCP', '…'], note: 'link' },
    { y: 234, items: ['copper', 'radio', 'fiber'], note: 'physical' },
  ];

  return (
    <svg
      viewBox="0 0 620 290"
      role="img"
      aria-label="รูปนาฬิกาทราย โปรโตคอลจำนวนมากอยู่บนและล่าง แต่ชั้น network มี IP ตัวเดียว"
      className="mx-auto h-auto w-full min-w-[520px]"
      fill="currentColor"
    >
      {rows.map((row) => {
        const width = row.waist ? 110 : Math.min(80 * row.items.length, 420);
        const start = 310 - width / 2;
        const slot = width / row.items.length;
        return (
          <g key={row.note}>
            {row.items.map((item, i) => (
              <g key={item}>
                <rect
                  x={start + i * slot + 4}
                  y={row.y}
                  width={slot - 8}
                  height="36"
                  rx="6"
                  fillOpacity={row.waist ? 0.2 : 0.07}
                  stroke="currentColor"
                  strokeOpacity={row.waist ? 0.6 : 0.28}
                  strokeWidth={row.waist ? 2 : 1}
                />
                <text
                  x={start + i * slot + slot / 2}
                  y={row.y + 23}
                  textAnchor="middle"
                  fontSize={row.waist ? 16 : 12.5}
                  fontWeight={row.waist ? 700 : 400}
                >
                  {item}
                </text>
              </g>
            ))}
            <text x="600" y={row.y + 23} textAnchor="end" fontSize="12" opacity="0.6">
              {row.note}
            </text>
          </g>
        );
      })}

      <text x="20" y="153" fontSize="12.5" fontWeight="600" opacity="0.8">
        thin waist
      </text>
      <text x="20" y="171" fontSize="11.5" opacity="0.6">
        ทุกเครื่องต้องพูดได้
      </text>
    </svg>
  );
}
