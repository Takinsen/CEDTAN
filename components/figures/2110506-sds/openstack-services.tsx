// OpenStack's nine services: two front doors, identity checking them, and the services a VM is built from
export function OpenstackServices() {
  const box = { fillOpacity: 0.12, stroke: 'currentColor', strokeOpacity: 0.6 };
  const arrow = { stroke: 'currentColor', strokeOpacity: 0.75, strokeWidth: 1.4, markerEnd: 'url(#os-arrow)' };

  const top = [
    { x: 20, n: '1', name: 'Dashboard', th: 'หน้าเว็บสั่งงาน' },
    { x: 250, n: '2', name: 'Identity', th: 'ตรวจว่าใครขออะไรได้' },
    { x: 480, n: '9', name: 'Orchestration', th: 'สร้างทั้ง stack จากไฟล์เดียว' },
  ];
  const side = [
    { x: 40, y: 140, n: '3', name: 'Networking', th: 'เครือข่ายของ VM' },
    { x: 40, y: 220, n: '4', name: 'Block storage', th: 'ดิสก์ที่ข้อมูลไม่หาย' },
    { x: 510, y: 140, n: '6', name: 'Image storage', th: 'image ไว้บูต VM' },
    { x: 510, y: 220, n: '7', name: 'Object storage', th: 'เก็บไฟล์เป็น object' },
  ];

  return (
    <svg
      viewBox="0 0 700 360"
      role="img"
      aria-label="บริการเก้าตัวของ OpenStack Dashboard กับ Orchestration สั่งงาน Identity ตรวจสิทธิ์ และ Compute สร้าง VM จาก networking storage และ image"
      className="mx-auto h-auto w-full min-w-[620px]"
      fill="currentColor"
    >
      <defs>
        <marker id="os-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>

      {top.map((t) => (
        <g key={t.n}>
          <rect x={t.x} y="14" width="200" height="48" rx="8" {...box} fillOpacity={t.n === '2' ? 0.06 : 0.2} />
          <text x={t.x + 100} y="34" textAnchor="middle" fontSize="12.5" fontWeight="600">
            {t.n} · {t.name}
          </text>
          <text x={t.x + 100} y="52" textAnchor="middle" fontSize="11" opacity="0.8">
            {t.th}
          </text>
        </g>
      ))}
      {/* both front doors ask Identity before acting */}
      <line x1="220" y1="38" x2="248" y2="38" {...arrow} strokeDasharray="3 3" />
      <line x1="480" y1="38" x2="452" y2="38" {...arrow} strokeDasharray="3 3" />

      {/* both front doors drive every service below */}
      <line x1="120" y1="62" x2="120" y2="96" {...arrow} />
      <line x1="580" y1="62" x2="580" y2="96" {...arrow} />
      <rect x="20" y="98" width="660" height="250" rx="12" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="6 5" />
      <text x="350" y="118" textAnchor="middle" fontSize="11" opacity="0.75">
        บริการที่ Dashboard และ Orchestration สั่งได้
      </text>

      <rect x="270" y="170" width="160" height="70" rx="10" {...box} fillOpacity={0.24} strokeWidth="1.5" />
      <text x="350" y="200" textAnchor="middle" fontSize="13" fontWeight="700">
        5 · Compute
      </text>
      <text x="350" y="220" textAnchor="middle" fontSize="11" opacity="0.8">
        สร้างและรัน VM
      </text>

      {side.map((s) => (
        <g key={s.n}>
          <rect x={s.x} y={s.y} width="150" height="48" rx="8" {...box} />
          <text x={s.x + 75} y={s.y + 20} textAnchor="middle" fontSize="12" fontWeight="600">
            {s.n} · {s.name}
          </text>
          <text x={s.x + 75} y={s.y + 38} textAnchor="middle" fontSize="11" opacity="0.8">
            {s.th}
          </text>
        </g>
      ))}

      {/* what Compute takes from each neighbour */}
      <line x1="190" y1="164" x2="268" y2="190" {...arrow} />
      <line x1="190" y1="244" x2="268" y2="222" {...arrow} />
      <line x1="510" y1="164" x2="432" y2="190" {...arrow} />
      <line x1="510" y1="244" x2="432" y2="222" {...arrow} />
      <line x1="585" y1="188" x2="585" y2="218" {...arrow} />
      <text x="577" y="207" textAnchor="end" fontSize="11" opacity="0.8">
        เก็บ image เป็น object
      </text>

      <rect x="250" y="276" width="200" height="48" rx="8" {...box} fillOpacity={0.06} />
      <text x="350" y="296" textAnchor="middle" fontSize="12" fontWeight="600">
        8 · Telemetry
      </text>
      <text x="350" y="314" textAnchor="middle" fontSize="11" opacity="0.8">
        เก็บสถิติการใช้งานจากทุกบริการ
      </text>
    </svg>
  );
}
