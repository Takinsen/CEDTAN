// where the line is drawn: a VM copies the whole OS, a container shares the kernel it runs on
export function VmVsContainer() {
  const apps = ['App A', 'App B', 'App C'];

  return (
    <svg
      viewBox="0 0 620 290"
      role="img"
      aria-label="เทียบชั้นของ virtual machine กับ container: VM มี guest OS ของตัวเอง ส่วน container ใช้ kernel ของ host ร่วมกัน"
      className="mx-auto h-auto w-full min-w-[580px]"
      fill="currentColor"
    >
      <text x="155" y="30" textAnchor="middle" fontSize="15" fontWeight="600">
        Virtual Machine
      </text>
      <text x="155" y="50" textAnchor="middle" fontSize="12" opacity="0.7">
        ใหญ่ระดับ GB บูตช้า
      </text>
      <text x="465" y="30" textAnchor="middle" fontSize="15" fontWeight="600">
        Container
      </text>
      <text x="465" y="50" textAnchor="middle" fontSize="12" opacity="0.7">
        ใหญ่ระดับ MB เริ่มเร็ว
      </text>

      {apps.map((app, i) => {
        const lx = 20 + i * 93;
        const rx = 330 + i * 93;
        return (
          <g key={app}>
            <rect x={lx} y="66" width="84" height="32" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.45" />
            <text x={lx + 42} y="87" textAnchor="middle" fontSize="11.5">
              {app}
            </text>
            <rect x={lx} y="102" width="84" height="32" rx="5" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.45" />
            <text x={lx + 42} y="123" textAnchor="middle" fontSize="11">
              Bins/Libs
            </text>
            <rect x={lx} y="138" width="84" height="32" rx="5" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.45" />
            <text x={lx + 42} y="159" textAnchor="middle" fontSize="11">
              Guest OS
            </text>

            <rect x={rx} y="66" width="84" height="32" rx="5" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.45" />
            <text x={rx + 42} y="87" textAnchor="middle" fontSize="11.5">
              {app}
            </text>
            <rect x={rx} y="102" width="84" height="32" rx="5" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.45" />
            <text x={rx + 42} y="123" textAnchor="middle" fontSize="11">
              Bins/Libs
            </text>
          </g>
        );
      })}

      <rect x="20" y="176" width="270" height="34" rx="6" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.45" />
      <text x="155" y="198" textAnchor="middle" fontSize="12.5">
        Hypervisor
      </text>
      <rect x="20" y="214" width="270" height="34" rx="6" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.45" />
      <text x="155" y="236" textAnchor="middle" fontSize="12.5">
        Infrastructure
      </text>

      <rect x="330" y="138" width="270" height="34" rx="6" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
      <text x="465" y="160" textAnchor="middle" fontSize="12.5" fontWeight="600">
        Docker Engine
      </text>
      <rect x="330" y="176" width="270" height="34" rx="6" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.45" />
      <text x="465" y="198" textAnchor="middle" fontSize="12.5">
        Host OS
      </text>
      <rect x="330" y="214" width="270" height="34" rx="6" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.45" />
      <text x="465" y="236" textAnchor="middle" fontSize="12.5">
        Infrastructure
      </text>

      <text x="310" y="276" textAnchor="middle" fontSize="12" opacity="0.75">
        ชั้นที่หายไปฝั่งขวาคือ Guest OS สามชุด — นั่นคือที่มาของ GB ที่ประหยัดได้
      </text>
    </svg>
  );
}
