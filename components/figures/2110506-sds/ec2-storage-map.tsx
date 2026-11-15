// where each EC2 storage lives: instance store on the host, EBS over the network in one AZ, snapshots in S3
const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';

function Disk({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <path
        d={`M ${x} ${y} A 17 5 0 0 1 ${x + 34} ${y} L ${x + 34} ${y + 30} A 17 5 0 0 1 ${x} ${y + 30} Z`}
        fillOpacity="0.1"
        stroke="currentColor"
        strokeOpacity="0.55"
      />
      <ellipse cx={x + 17} cy={y} rx="17" ry="5" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.55" />
      <text x={x + 17} y={y + 52} textAnchor="middle" fontSize="11" fontFamily={mono} opacity="0.75">
        {label}
      </text>
    </g>
  );
}

// one EBS volume: its primary and the replica it mirrors to, side by side
function Volume({ y, name }: { y: number; name: string }) {
  return (
    <g>
      <rect x="310" y={y} width="64" height="50" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.6" />
      <text x="342" y={y + 21} textAnchor="middle" fontSize="11" fontFamily={mono}>
        {name}
      </text>
      <text x="342" y={y + 39} textAnchor="middle" fontSize="11" opacity="0.75">
        primary
      </text>
      <rect x="384" y={y} width="64" height="50" rx="5" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.5" />
      <text x="416" y={y + 21} textAnchor="middle" fontSize="11" fontFamily={mono}>
        {name}
      </text>
      <text x="416" y={y + 39} textAnchor="middle" fontSize="11" opacity="0.75">
        replica
      </text>
    </g>
  );
}

export function Ec2StorageMap() {
  return (
    <svg
      viewBox="0 0 680 400"
      role="img"
      aria-label="instance store เป็นดิสก์สี่ลูกบนเครื่อง host เดียวกับ instance Instance A ใช้ทั้ง eph0 และ EBS volume หนึ่งตัว Instance B ใช้ EBS volume สองตัว EBS อยู่นอกเครื่อง ต่อผ่านเครือข่าย และแต่ละ volume มีสำเนาอีกชุดใน availability zone เดียวกัน ส่วน snapshot ของ EBS ถูกเก็บใน S3 ซึ่งอยู่ระดับ region"
      className="mx-auto h-auto w-full min-w-[620px]"
      fill="currentColor"
    >
      {/* region */}
      <rect x="8" y="8" width="664" height="384" rx="12" fillOpacity="0.02" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="6 4" />
      <text x="22" y="383" fontSize="11.5" opacity="0.75">
        Region
      </text>

      {/* availability zone */}
      <rect x="22" y="22" width="450" height="340" rx="10" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.5" />
      <text x="36" y="354" fontSize="11.5" opacity="0.75">
        Availability Zone
      </text>

      {/* host computer */}
      <rect x="36" y="36" width="200" height="298" rx="8" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.5" />
      <text x="50" y="56" fontSize="12" fontWeight="600">
        Host computer
      </text>
      <rect x="50" y="68" width="172" height="34" rx="6" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.55" />
      <text x="136" y="90" textAnchor="middle" fontSize="11.5">
        Instance A
      </text>
      <rect x="50" y="112" width="172" height="34" rx="6" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.55" />
      <text x="136" y="134" textAnchor="middle" fontSize="11.5">
        Instance B
      </text>
      <rect x="50" y="200" width="172" height="122" rx="6" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" />
      <text x="136" y="218" textAnchor="middle" fontSize="11" opacity="0.75">
        instance store
      </text>
      <Disk x={58} y={240} label="eph0" />
      <Disk x={98} y={240} label="eph1" />
      <Disk x={138} y={240} label="eph2" />
      <Disk x={178} y={240} label="eph3" />
      {/* instance A reaches eph0 inside the host */}
      <path d="M 50 85 H 43 V 256 H 54" fill="none" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" markerEnd="url(#esm-arrow)" />

      {/* EBS */}
      <rect x="296" y="36" width="162" height="298" rx="8" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.5" />
      <text x="310" y="56" fontSize="12" fontWeight="600">
        EBS
      </text>
      <Volume y={72} name="vol-1" />
      <Volume y={150} name="vol-2" />
      <Volume y={228} name="vol-3" />
      <path d="M 352 280 Q 379 304 406 280" fill="none" stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.3" markerEnd="url(#esm-arrow)" />
      <text x="379" y="318" textAnchor="middle" fontSize="11" opacity="0.75">
        mirror
      </text>

      {/* instances reach their volumes over the network */}
      <line x1="222" y1="85" x2="306" y2="97" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#esm-arrow)" />
      <line x1="222" y1="124" x2="306" y2="175" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#esm-arrow)" />
      <line x1="222" y1="136" x2="306" y2="253" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#esm-arrow)" />
      <text x="266" y="292" textAnchor="middle" fontSize="11" opacity="0.8">
        ผ่าน
      </text>
      <text x="266" y="306" textAnchor="middle" fontSize="11" opacity="0.8">
        เครือข่าย
      </text>

      {/* S3 */}
      <rect x="496" y="36" width="162" height="298" rx="8" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.5" />
      <text x="510" y="56" fontSize="12" fontWeight="600">
        S3
      </text>
      <rect x="510" y="150" width="134" height="50" rx="5" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.55" />
      <text x="577" y="171" textAnchor="middle" fontSize="11">
        snapshot
      </text>
      <text x="577" y="189" textAnchor="middle" fontSize="11" fontFamily={mono} opacity="0.75">
        of vol-2
      </text>
      <line x1="448" y1="175" x2="506" y2="175" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" markerEnd="url(#esm-arrow)" />
      <text x="577" y="250" textAnchor="middle" fontSize="11" opacity="0.75">
        เก็บระดับ region
      </text>
      <text x="577" y="266" textAnchor="middle" fontSize="11" opacity="0.75">
        ไม่ผูกกับ AZ ใด
      </text>

      <defs>
        <marker id="esm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.7" />
        </marker>
      </defs>
    </svg>
  );
}
