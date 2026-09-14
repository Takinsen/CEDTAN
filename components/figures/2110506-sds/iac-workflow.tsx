// infrastructure code goes through version control and testing before automation applies it
export function IacWorkflow() {
  const pillars = [
    ['Infrastructure', 'Automation'],
    ['Configuration', 'Management'],
    ['Version', 'Control'],
    ['Automated', 'Testing'],
    ['Deployment', 'Automation'],
  ];

  return (
    <svg
      viewBox="0 0 620 285"
      role="img"
      aria-label="Infrastructure as Code มีห้าด้าน คือ infrastructure automation, configuration management, version control, automated testing และ deployment automation นักพัฒนาเขียน infrastructure code ที่เก็บใน version control และผ่าน testing แล้ว automation API หรือ server นำไป deploy และจัดการเครื่องทั้งบนคลาวด์และ on-premises ด้วยวิธี push หรือ pull"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {pillars.map(([top, bottom], i) => (
        <g key={top + bottom}>
          <rect x={15 + i * 118} y="12" width="112" height="40" rx="6" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
          <text x={71 + i * 118} y="29" textAnchor="middle" fontSize="11" fontWeight="600">
            {top}
          </text>
          <text x={71 + i * 118} y="44" textAnchor="middle" fontSize="11" fontWeight="600">
            {bottom}
          </text>
        </g>
      ))}

      <rect x="15" y="130" width="90" height="44" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="60" y="156" textAnchor="middle" fontSize="11" fontWeight="600">
        Developers
      </text>

      <rect x="150" y="122" width="120" height="60" rx="8" fillOpacity="0.22" stroke="currentColor" strokeOpacity="0.6" />
      <text x="210" y="148" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Infrastructure
      </text>
      <text x="210" y="164" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Code
      </text>

      <rect x="160" y="70" width="100" height="30" rx="6" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="210" y="90" textAnchor="middle" fontSize="11">
        Testing
      </text>

      <rect x="160" y="204" width="100" height="30" rx="6" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="210" y="224" textAnchor="middle" fontSize="11">
        Version Control
      </text>

      <rect x="350" y="122" width="110" height="60" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="405" y="148" textAnchor="middle" fontSize="11" fontWeight="600">
        Automation
      </text>
      <text x="405" y="164" textAnchor="middle" fontSize="11" fontWeight="600">
        API / Server
      </text>

      <rect x="500" y="72" width="105" height="44" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="552" y="98" textAnchor="middle" fontSize="11">
        Cloud
      </text>
      <rect x="500" y="190" width="105" height="44" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="552" y="216" textAnchor="middle" fontSize="11">
        On-premises
      </text>

      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" fill="none">
        <line x1="107" y1="152" x2="147" y2="152" markerEnd="url(#iw-arrow)" />
        <line x1="210" y1="104" x2="210" y2="119" markerStart="url(#iw-arrow)" markerEnd="url(#iw-arrow)" />
        <line x1="210" y1="185" x2="210" y2="201" markerStart="url(#iw-arrow)" markerEnd="url(#iw-arrow)" />
        <line x1="274" y1="152" x2="346" y2="152" markerStart="url(#iw-arrow)" markerEnd="url(#iw-arrow)" />
      </g>
      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="4 3" fill="none">
        <line x1="463" y1="136" x2="497" y2="104" markerStart="url(#iw-arrow)" markerEnd="url(#iw-arrow)" />
        <line x1="463" y1="168" x2="497" y2="202" markerStart="url(#iw-arrow)" markerEnd="url(#iw-arrow)" />
      </g>
      <text x="127" y="144" textAnchor="middle" fontSize="11" opacity="0.8">
        write
      </text>
      <text x="490" y="160" textAnchor="middle" fontSize="11" fontWeight="600" opacity="0.85">
        push / pull
      </text>
      <text x="552" y="132" textAnchor="middle" fontSize="11" opacity="0.76">
        deploy, manage
      </text>
      <text x="552" y="182" textAnchor="middle" fontSize="11" opacity="0.76">
        deploy, manage
      </text>

      <text x="310" y="270" textAnchor="middle" fontSize="11" opacity="0.78">
        โค้ดของโครงสร้างพื้นฐานผ่านขั้นตอนเดียวกับโค้ดของแอป — เก็บใน git ทดสอบ แล้วเครื่องมือทำให้เป็นจริง
      </text>

      <defs>
        <marker id="iw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.65" />
        </marker>
      </defs>
    </svg>
  );
}
