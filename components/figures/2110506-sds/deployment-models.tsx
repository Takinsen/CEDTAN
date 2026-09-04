type BoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  fillOpacity?: number;
  fontSize?: number;
};

// one labelled block inside a deployment stack
function Box({ x, y, w, h, label, fillOpacity = 0.07, fontSize = 10.5 }: BoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="4"
        fill="currentColor"
        fillOpacity={fillOpacity}
        stroke="currentColor"
        strokeOpacity="0.3"
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + fontSize / 3}
        textAnchor="middle"
        fontSize={fontSize}
        fill="currentColor"
      >
        {label}
      </text>
    </g>
  );
}

// three ways to place an app on hardware, told by the layers between the app and the metal
export function DeploymentModels() {
  const cols = [
    { x: 5, title: 'Virtualized', middle: 'Hypervisor' },
    { x: 205, title: 'Container', middle: 'Container Runtime' },
    { x: 405, title: 'Multi-Tenant Virtualized Container', middle: 'Hypervisor' },
  ];

  return (
    <svg
      viewBox="0 0 600 265"
      role="img"
      aria-label="เปรียบเทียบ virtual machine, container และ container ที่รันอยู่ใน virtual machine"
      className="mx-auto h-auto w-full min-w-[600px] max-w-[600px]"
      fill="currentColor"
    >
      {/* virtual machines carry a full operating system each */}
      {[7, 103].map((x) => (
        <g key={`vm-${x}`}>
          <Box x={x} y={40} w={90} h={22} label="App" fillOpacity={0.05} />
          <Box x={x} y={65} w={90} h={22} label="Bin / Library" fillOpacity={0.1} />
          <Box x={x} y={90} w={90} h={22} label="Operating System" fillOpacity={0.14} fontSize={9.5} />
          <text x={x + 45} y={127} textAnchor="middle" fontSize="9.5" opacity="0.65">
            Virtual Machine
          </text>
        </g>
      ))}

      {/* containers share the operating system underneath them */}
      {[207, 273, 339].map((x) => (
        <g key={`ct-${x}`}>
          <Box x={x} y={65} w={58} h={22} label="App" fillOpacity={0.05} />
          <Box x={x} y={90} w={58} h={22} label="Bin / Lib" fillOpacity={0.1} fontSize={9.5} />
          <text x={x + 29} y={127} textAnchor="middle" fontSize="9.5" opacity="0.65">
            Container
          </text>
        </g>
      ))}

      {/* containers running inside virtual machines */}
      {[407, 503].map((x) => (
        <g key={`mt-${x}`}>
          {[0, 46].map((dx) => (
            <g key={dx}>
              <Box x={x + dx} y={16} w={44} h={18} label="App" fillOpacity={0.05} fontSize={9} />
              <Box x={x + dx} y={36} w={44} h={18} label="Bin / Lib" fillOpacity={0.1} fontSize={8.5} />
            </g>
          ))}
          <Box x={x} y={62} w={90} h={22} label="Container Runtime" fillOpacity={0.16} fontSize={9.5} />
          <Box x={x} y={87} w={90} h={22} label="Operating System" fillOpacity={0.14} fontSize={9.5} />
          <text x={x + 45} y={127} textAnchor="middle" fontSize="9.5" opacity="0.65">
            Virtual Machine
          </text>
        </g>
      ))}

      {/* the three layers every column stands on */}
      {cols.map((col) => (
        <g key={col.title}>
          <Box x={col.x} y={136} w={190} h={24} label={col.middle} fillOpacity={0.18} fontSize={11} />
          <Box x={col.x} y={164} w={190} h={24} label="Operating System" fillOpacity={0.14} fontSize={11} />
          <Box x={col.x} y={192} w={190} h={24} label="Hardware" fillOpacity={0.1} fontSize={11} />
          <text
            x={col.x + 95}
            y={240}
            textAnchor="middle"
            fontSize={col.x === 405 ? 10.5 : 12.5}
            fontWeight="600"
          >
            {col.title}
          </text>
        </g>
      ))}
      <text x="100" y="258" textAnchor="middle" fontSize="10.5" opacity="0.6">
        Deployment
      </text>
      <text x="300" y="258" textAnchor="middle" fontSize="10.5" opacity="0.6">
        Deployment
      </text>
      <text x="500" y="258" textAnchor="middle" fontSize="10.5" opacity="0.6">
        Deployment
      </text>
    </svg>
  );
}
