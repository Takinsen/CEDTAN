// service-centric access: a request names a service, the switch asks the controller, the network finds the server
function Step({ x, y, n }: { x: number; y: number; n: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="9" fill="var(--color-fd-background, white)" stroke="currentColor" strokeOpacity="0.75" />
      <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fontWeight="600">
        {n}
      </text>
    </g>
  );
}

function Switch({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x} y={y} width="70" height="28" rx="14" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.55" />
      <text x={x + 35} y={y + 18} textAnchor="middle" fontSize="11">
        switch
      </text>
    </g>
  );
}

function Server({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width="120" height="34" rx="6" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
      <text x={x + 60} y={y + 21} textAnchor="middle" fontSize="11" fontWeight="600">
        {label}
      </text>
    </g>
  );
}

export function ServiceCentricAccess() {
  return (
    <svg
      viewBox="0 0 680 320"
      role="img"
      aria-label="1 มือถือส่งคำขอบริการสุขภาพถึง switch ตัวแรก 2 switch ถาม SDN controller ซึ่งต่อกับ service discovery ผ่าน northbound interface 3 controller ติดตั้งกฎกลับมา 4 และ 5 คำขอวิ่งผ่าน switch ตัวถัดไป 6 ถึงเซิร์ฟเวอร์ Healthcare ส่วนเซิร์ฟเวอร์ face recognition, video streaming และ speech processing อยู่บน switch อื่น"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="250" y="8" width="200" height="30" rx="6" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.55" />
      <text x="350" y="27" textAnchor="middle" fontSize="11">
        Service Discovery & Orchestration
      </text>
      <rect x="250" y="60" width="200" height="30" rx="6" fillOpacity="0.24" stroke="currentColor" strokeOpacity="0.6" />
      <text x="350" y="79" textAnchor="middle" fontSize="11.5" fontWeight="600">
        SDN Controller
      </text>
      <line x1="350" y1="41" x2="350" y2="57" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" markerStart="url(#sca-arrow)" markerEnd="url(#sca-arrow)" />
      <text x="460" y="53" fontSize="11" opacity="0.85">
        northbound interface
      </text>

      <rect x="10" y="140" width="110" height="44" rx="6" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <text x="65" y="158" textAnchor="middle" fontSize="11" fontWeight="600">
        มือถือผู้ใช้
      </text>
      <text x="65" y="175" textAnchor="middle" fontSize="11" opacity="0.8">
        ผ่าน access point
      </text>
      <text x="150" y="125" textAnchor="middle" fontSize="11">
        Health service request
      </text>

      <g stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2">
        <line x1="355" y1="202" x2="445" y2="142" />
        <line x1="370" y1="214" x2="450" y2="214" />
        <line x1="250" y1="281" x2="430" y2="292" />
        <line x1="485" y1="228" x2="465" y2="278" />
        <line x1="500" y1="129" x2="550" y2="129" />
        <line x1="520" y1="214" x2="550" y2="214" />
        <line x1="500" y1="294" x2="550" y2="294" />
      </g>

      <g stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.8" fill="none" markerEnd="url(#sca-arrow)">
        <line x1="120" y1="160" x2="176" y2="160" />
        <line x1="245" y1="174" x2="298" y2="203" />
        <line x1="302" y1="228" x2="250" y2="268" />
        <line x1="180" y1="281" x2="124" y2="281" />
      </g>
      <g stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.4" strokeDasharray="5 4" fill="none" markerEnd="url(#sca-arrow)">
        <line x1="205" y1="145" x2="285" y2="93" />
        <line x1="320" y1="93" x2="240" y2="146" />
      </g>

      <Switch x={180} y={146} />
      <Switch x={300} y={200} />
      <Switch x={180} y={267} />
      <Switch x={430} y={115} />
      <Switch x={450} y={200} />
      <Switch x={430} y={280} />

      <Server x={0} y={264} label="Healthcare" />
      <Server x={550} y={112} label="Face recognition" />
      <Server x={550} y={197} label="Video streaming" />
      <Server x={550} y={277} label="Speech processing" />

      <Step x={148} y={145} n={1} />
      <Step x={222} y={110} n={2} />
      <Step x={300} y={128} n={3} />
      <Step x={258} y={200} n={4} />
      <Step x={290} y={258} n={5} />
      <Step x={152} y={300} n={6} />

      <defs>
        <marker id="sca-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.75" />
        </marker>
      </defs>
    </svg>
  );
}
