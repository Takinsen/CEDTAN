// identical plaintext blocks stay identical under ECB, and stop being identical once a chain is added
export function EcbPattern() {
  const blocks = ['A', 'A', 'B', 'A', 'B'];
  const ecb = ['7F', '7F', 'C2', '7F', 'C2'];
  const cbc = ['7F', '31', '9D', '4E', 'A8'];
  const x = (i: number) => 158 + i * 84;

  return (
    <svg
      viewBox="0 0 620 262"
      role="img"
      aria-label="ข้อความต้นฉบับห้าบล็อกที่มีบล็อกซ้ำกัน เมื่อเข้ารหัสแบบ ECB บล็อกที่เหมือนกันได้ผลลัพธ์เหมือนกัน ลายเดิมจึงยังอยู่ ส่วนแบบ CBC ที่เอาผลของบล็อกก่อนหน้ามาผสม ได้ผลลัพธ์ต่างกันหมด"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="22" textAnchor="middle" fontSize="11" opacity="0.8">
        บล็อกเดิมซ้ำที่ไหน ลายก็โผล่ที่นั่น
      </text>

      <text x="16" y="62" fontSize="11" fontWeight="600">
        ต้นฉบับ
      </text>
      {blocks.map((b, i) => (
        <g key={`p-${i}`}>
          <rect x={x(i)} y={44} width="64" height="26" rx="5" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x(i) + 32} y={62} textAnchor="middle" fontSize="11">
            {b}
          </text>
        </g>
      ))}

      <text x="16" y="122" fontSize="11" fontWeight="600">
        ECB
      </text>
      <text x="16" y="143" fontSize="11" opacity="0.8">
        ไม่มี IV
      </text>
      <text x="16" y="164" fontSize="11" opacity="0.8">
        ไม่ต่อกัน
      </text>
      {ecb.map((c, i) => (
        <g key={`e-${i}`}>
          <rect
            x={x(i)}
            y={104}
            width="64"
            height="26"
            rx="5"
            fillOpacity={c === '7F' ? 0.2 : 0.08}
            stroke="currentColor"
            strokeOpacity="0.55"
          />
          <text x={x(i) + 32} y={122} textAnchor="middle" fontSize="11">
            {c}
          </text>
        </g>
      ))}
      <text x="158" y="152" fontSize="11" opacity="0.85">
        ช่องที่ 1, 2 และ 4 ได้ค่าเดียวกัน เพราะต้นฉบับเหมือนกัน
      </text>

      <text x="16" y="204" fontSize="11" fontWeight="600">
        CBC
      </text>
      <text x="16" y="225" fontSize="11" opacity="0.8">
        มี IV
      </text>
      <text x="16" y="246" fontSize="11" opacity="0.8">
        ต่อกันเป็นลูกโซ่
      </text>
      {cbc.map((c, i) => (
        <g key={`c-${i}`}>
          <rect x={x(i)} y={186} width="64" height="26" rx="5" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" />
          <text x={x(i) + 32} y={204} textAnchor="middle" fontSize="11">
            {c}
          </text>
        </g>
      ))}
      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#ep-arrow)">
        {[0, 1, 2, 3].map((i) => (
          <path key={`k-${i}`} d={`M ${x(i) + 32} 214 L ${x(i) + 32} 226 L ${x(i + 1) + 32} 226 L ${x(i + 1) + 32} 216`} />
        ))}
      </g>
      <text x="158" y="252" fontSize="11" opacity="0.85">
        ผลของบล็อกก่อนหน้าถูกผสมเข้าไปก่อน ค่าที่ออกมาจึงไม่ซ้ำกัน
      </text>

      <defs>
        <marker id="ep-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
