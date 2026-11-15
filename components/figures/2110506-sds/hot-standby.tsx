// a labelled box, two lines at most
function Box({ x, y, w, lines, opacity = 0.1 }: { x: number; y: number; w: number; lines: string[]; opacity?: number }) {
  const h = lines.length === 1 ? 30 : 42;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="5" fillOpacity={opacity} stroke="currentColor" strokeOpacity="0.6" />
      {lines.map((l, i) => (
        <text key={l} x={x + w / 2} y={y + (lines.length === 1 ? 19 : 18 + i * 15)} textAnchor="middle" fontSize="11.5" fontWeight={i === 0 ? 600 : 400}>
          {l}
        </text>
      ))}
    </g>
  );
}

// hot standby across a corporate data center and an AWS region: both serve users, the database mirrors to AWS
export function HotStandby() {
  const arrow = { stroke: 'currentColor', strokeOpacity: 0.65, strokeWidth: 1.5, markerEnd: 'url(#hs-arrow)' };

  return (
    <svg
      viewBox="0 0 640 380"
      role="img"
      aria-label="Route 53 ส่งผู้ใช้ของ www.example.com ไปทั้ง corporate data center และ AWS region ทั้งสองฝั่ง active ฝั่ง corporate มี reverse proxy, application server และ master database ฝั่ง AWS มี elastic load balancer, reverse proxy, application server และ subordinate database master replicate ข้อมูลไปที่ subordinate ตลอดเวลา application server ฝั่ง AWS อ่านข้อมูลจาก subordinate ในฝั่งเดียวกันและเขียนข้อมูลไปที่ master และเมื่อ master ใช้ไม่ได้ application server เปลี่ยนแหล่งข้อมูลไปที่ subordinate"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <Box x={250} y={10} w={140} lines={['Route 53', 'www.example.com']} opacity={0.24} />
      <line x1="250" y1="31" x2="120" y2="62" {...arrow} />
      <line x1="390" y1="31" x2="520" y2="62" {...arrow} />
      <text x="175" y="36" textAnchor="middle" fontSize="11" fontWeight="600">
        Active
      </text>
      <text x="465" y="36" textAnchor="middle" fontSize="11" fontWeight="600">
        Active
      </text>

      <rect x="10" y="62" width="220" height="262" rx="10" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.55" />
      <text x="120" y="314" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Corporate data center
      </text>
      <rect x="410" y="62" width="220" height="262" rx="10" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.55" />
      <text x="520" y="314" textAnchor="middle" fontSize="11.5" fontWeight="600">
        AWS region
      </text>

      {/* corporate side */}
      <Box x={50} y={110} w={140} lines={['Reverse proxy', 'caching server']} />
      <line x1="120" y1="152" x2="120" y2="174" {...arrow} />
      <Box x={50} y={176} w={140} lines={['Application server']} />
      <line x1="120" y1="206" x2="120" y2="256" {...arrow} />
      <Box x={50} y={258} w={140} lines={['Master DB']} opacity={0.3} />

      {/* aws side */}
      <Box x={450} y={74} w={140} lines={['Elastic load balancer']} />
      <line x1="520" y1="104" x2="520" y2="122" {...arrow} />
      <Box x={450} y={124} w={140} lines={['Reverse proxy', 'caching server']} />
      <line x1="520" y1="166" x2="520" y2="184" {...arrow} />
      <Box x={450} y={186} w={140} lines={['Application server']} />
      <line x1="520" y1="216" x2="520" y2="256" {...arrow} />
      <Box x={450} y={258} w={140} lines={['Subordinate DB']} opacity={0.3} />

      {/* the aws application server reads its local subordinate and writes to the master */}
      <line x1="450" y1="206" x2="192" y2="266" {...arrow} />
      <text x="374" y="192" textAnchor="middle" fontSize="11" opacity="0.9">
        เขียนข้อมูล
      </text>
      <text x="374" y="207" textAnchor="middle" fontSize="11" opacity="0.9">
        ไปที่ master
      </text>

      {/* replication keeps the subordinate current */}
      <line x1="190" y1="283" x2="448" y2="283" stroke="currentColor" strokeOpacity="0.85" strokeWidth="3" markerEnd="url(#hs-arrow)" />
      <text x="320" y="276" textAnchor="middle" fontSize="11.5" fontWeight="600">
        mirroring / replication
      </text>

      {/* cut over: when the master is gone, the application reads and writes the subordinate */}
      <line x1="192" y1="196" x2="448" y2="266" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="6 4" markerEnd="url(#hs-arrow)" />
      <text x="320" y="350" textAnchor="middle" fontSize="11" opacity="0.9">
        เส้นประ: cut over เมื่อ master ใช้ไม่ได้
      </text>
      <text x="320" y="365" textAnchor="middle" fontSize="11" opacity="0.9">
        application server เปลี่ยนไปใช้ subordinate
      </text>

      <defs>
        <marker id="hs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.75" />
        </marker>
      </defs>
    </svg>
  );
}
