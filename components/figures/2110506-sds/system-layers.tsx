// the classic computer system stack, with the software-defined name for each layer
export function SystemLayers() {
  const layers = [
    { y: 30, en: 'networked applications', en2: 'and distributed systems', sd: 'Orchestration' },
    { y: 100, en: 'networks', sd: 'Software-Defined Networks' },
    { y: 170, en: 'operating systems', sd: 'Software-Defined Servers' },
    { y: 260, en: 'physical resources:', en2: 'compute, storage', sd: 'Software-Defined Storage' },
  ];

  return (
    <svg
      viewBox="0 0 640 340"
      role="img"
      aria-label="ชั้นของระบบคอมพิวเตอร์ และชื่อของแต่ละชั้นเมื่อถูกทำให้เป็น software-defined"
      className="mx-auto h-auto w-full min-w-[560px] max-w-[640px]"
      fill="currentColor"
    >
      <text x="410" y="16" textAnchor="middle" fontSize="13" fontWeight="600" opacity="0.7">
        ระบบคอมพิวเตอร์
      </text>
      <text x="150" y="16" textAnchor="middle" fontSize="13" fontWeight="600" opacity="0.7">
        ชื่อเมื่อถูกกำหนดด้วยซอฟต์แวร์
      </text>

      {layers.map((layer) => (
        <g key={layer.sd}>
          <rect
            x="290"
            y={layer.y}
            width="240"
            height={layer.y === 260 ? 60 : 56}
            rx="8"
            fillOpacity="0.07"
            stroke="currentColor"
            strokeOpacity="0.3"
          />
          <text
            x="410"
            y={layer.en2 ? layer.y + 24 : layer.y + 33}
            textAnchor="middle"
            fontSize="14"
          >
            {layer.en}
          </text>
          {layer.en2 && (
            <text x="410" y={layer.y + 42} textAnchor="middle" fontSize="14">
              {layer.en2}
            </text>
          )}
          <line
            x1="270"
            y1={layer.y + 28}
            x2="286"
            y2={layer.y + 28}
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="1.5"
          />
          <text x="262" y={layer.y + 33} textAnchor="end" fontSize="14" fontWeight="600">
            {layer.sd}
          </text>
        </g>
      ))}

      {['Virtualization', 'Clouds', 'Containers'].map((item, i) => (
        <text key={item} x="262" y={222 + i * 20} textAnchor="end" fontSize="12.5" opacity="0.75">
          ‣ {item}
        </text>
      ))}
    </svg>
  );
}
