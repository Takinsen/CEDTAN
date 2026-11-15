const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

type PillProps = { cx: number; y: number; w?: number; label: string };

// one component a request passes through, centred in its tier column
function Pill({ cx, y, w = 104, label }: PillProps) {
  return (
    <g>
      <rect x={cx - w / 2} y={y} width={w} height="26" rx="13" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.6" />
      <text x={cx} y={y + 17} textAnchor="middle" fontSize="11.5" fontWeight="600">
        {label}
      </text>
    </g>
  );
}

type TierProps = { x: number; title: string; host: string; parts: [string, string][] };

// one tier of KhunLook: the machine it rents and the software inside it
function Tier({ x, title, host, parts }: TierProps) {
  return (
    <g>
      <rect x={x} y="22" width="140" height="122" rx="7" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <text x={x + 70} y="40" textAnchor="middle" fontSize="12" fontWeight="600">
        {title}
      </text>
      {parts.map(([name, sw], i) => (
        <g key={name}>
          <rect x={x + 10} y={50 + i * 38} width="120" height="32" rx="4" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
          <text x={x + 70} y={63 + i * 38} textAnchor="middle" fontSize="11.5" fontWeight="600">
            {name}
          </text>
          <text x={x + 70} y={77 + i * 38} textAnchor="middle" fontSize="11" opacity="0.8">
            {sw}
          </text>
        </g>
      ))}
      <text x={x + 70} y="137" textAnchor="middle" fontSize="11" fontFamily={MONO} opacity="0.85">
        {host}
      </text>
    </g>
  );
}

// KhunLook's three tiers on AWS, and which components each of the three user actions passes through
export function KhunlookPaths() {
  const front = 225;
  const logic = 385;
  const back = 545;

  return (
    <svg
      viewBox="0 0 630 330"
      role="img"
      aria-label="KhunLook มีสามชั้น front-end บน EC2 มี Content กับ Web, business logic บน EC2 มี Auth กับ App, back-end มี DB บน RDS และ S3 การ login ผ่าน Web ไป Auth, การดูเนื้อหาเว็บผ่าน Web ไป DB โดยไม่ผ่านชั้นกลาง, การ sync ผ่าน Web ไป App แล้ว App backup ลง S3 และ DB"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="45" y="75" textAnchor="middle" fontSize="11.5" fontWeight="600">
        ผู้ใช้
      </text>
      <text x="45" y="91" textAnchor="middle" fontSize="11.5" fontWeight="600">
        มือถือ
      </text>
      <line x1="80" y1="83" x2="137" y2="83" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" markerEnd="url(#kp-arrow)" />
      <line x1="145" y1="18" x2="145" y2="150" stroke="currentColor" strokeOpacity="0.6" strokeWidth="3" strokeDasharray="5 3" />
      <text x="145" y="164" textAnchor="middle" fontSize="11" opacity="0.85">
        Firewall
      </text>

      <Tier x={front - 70} title="Front-end" host="EC2 instance" parts={[['Content', 'Joomla'], ['Web', 'Apache']]} />
      <Tier x={logic - 70} title="Business logic" host="EC2 instance" parts={[['Auth', 'Apache Directory'], ['App', 'Tomcat']]} />
      <Tier x={back - 70} title="Back-end" host="RDS + S3" parts={[['S3', 'ที่เก็บไฟล์'], ['DB', 'MariaDB']]} />

      <line x1="10" y1="182" x2="620" y2="182" stroke="currentColor" strokeOpacity="0.5" />
      <text x="10" y="200" fontSize="11" opacity="0.85">
        การกระทำของผู้ใช้วิ่งผ่านชิ้นไหนบ้าง
      </text>

      <g stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.5" fill="none">
        <line x1={front + 53} y1="228" x2={logic - 55} y2="228" markerEnd="url(#kp-arrow)" />
        <line x1={front + 53} y1="268" x2={back - 55} y2="268" markerEnd="url(#kp-arrow)" />
        <line x1={front + 53} y1="308" x2={logic - 55} y2="308" markerEnd="url(#kp-arrow)" />
        <line x1={logic + 53} y1="308" x2={back - 55} y2="308" markerEnd="url(#kp-arrow)" />
      </g>

      <text x="10" y="232" fontSize="11.5" fontWeight="600">
        login
      </text>
      <Pill cx={front} y={215} label="Web" />
      <Pill cx={logic} y={215} label="Auth" />

      <text x="10" y="272" fontSize="11.5" fontWeight="600">
        ดูเนื้อหาเว็บ
      </text>
      <Pill cx={front} y={255} label="Content / Web" />
      <text x={logic} y="262" textAnchor="middle" fontSize="11" opacity="0.85">
        ไม่ผ่านชั้นกลาง
      </text>
      <Pill cx={back} y={255} label="DB" />

      <text x="10" y="312" fontSize="11.5" fontWeight="600">
        sync
      </text>
      <Pill cx={front} y={295} label="Web" />
      <Pill cx={logic} y={295} label="App" />
      <Pill cx={back} y={295} label="backup → S3, DB" w={116} />

      <defs>
        <marker id="kp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.7" />
        </marker>
      </defs>
    </svg>
  );
}
