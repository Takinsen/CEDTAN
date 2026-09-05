// every docker command in this lecture is one arrow on this map
export function ContainerStates() {
  const states = [
    { cx: 250, cy: 90, label: 'running' },
    { cx: 500, cy: 90, label: 'paused' },
    { cx: 250, cy: 225, label: 'exited' },
    { cx: 500, cy: 225, label: 'restarting' },
  ];

  return (
    <svg
      viewBox="0 0 620 300"
      role="img"
      aria-label="สถานะของ container: running, paused, exited และ restarting กับคำสั่งที่ทำให้เปลี่ยนสถานะ"
      className="mx-auto h-auto w-full min-w-[580px]"
      fill="currentColor"
    >
      {states.map((s) => (
        <g key={s.label}>
          <circle cx={s.cx} cy={s.cy} r="48" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.5" />
          <text x={s.cx} y={s.cy + 5} textAnchor="middle" fontSize="13" fontWeight="600">
            {s.label}
          </text>
        </g>
      ))}

      {/* the two ways a container comes into existence */}
      <line x1="100" y1="90" x2="197" y2="90" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
      <text x="148" y="82" textAnchor="middle" fontSize="11.5" opacity="0.8">
        run
      </text>
      <line x1="100" y1="212" x2="204" y2="212" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
      <text x="152" y="204" textAnchor="middle" fontSize="11.5" opacity="0.8">
        create
      </text>
      <line x1="204" y1="243" x2="100" y2="243" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
      <text x="152" y="262" textAnchor="middle" fontSize="11.5" opacity="0.8">
        remove
      </text>

      <line x1="299" y1="78" x2="450" y2="78" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
      <text x="374" y="70" textAnchor="middle" fontSize="11.5" opacity="0.8">
        pause
      </text>
      <line x1="450" y1="104" x2="299" y2="104" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
      <text x="374" y="121" textAnchor="middle" fontSize="11.5" opacity="0.8">
        unpause
      </text>

      <line x1="235" y1="140" x2="235" y2="174" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
      <text x="222" y="162" textAnchor="end" fontSize="11.5" opacity="0.8">
        stop | kill
      </text>
      <line x1="266" y1="174" x2="266" y2="140" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
      <text x="279" y="162" fontSize="11.5" opacity="0.8">
        start | restart
      </text>

      <line x1="450" y1="225" x2="301" y2="225" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
      <text x="376" y="245" textAnchor="middle" fontSize="11.5" opacity="0.8">
        stop
      </text>
      <line x1="466" y1="187" x2="291" y2="122" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
      <text x="424" y="148" textAnchor="middle" fontSize="11.5" opacity="0.8">
        restart
      </text>

      <text x="310" y="290" textAnchor="middle" fontSize="12" opacity="0.75">
        exited ยังมีไฟล์และข้อมูลอยู่ครบ — หายก็ต่อเมื่อสั่ง remove
      </text>

      <defs>
        <marker id="state-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.55" />
        </marker>
      </defs>
    </svg>
  );
}
