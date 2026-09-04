// where the forwarding table gets computed: inside every router, or once in a remote controller
export function ControlPlane() {
  const routers = [20, 110, 200];
  const switches = [355, 415, 475, 535];

  return (
    <svg
      viewBox="0 0 620 250"
      role="img"
      aria-label="เปรียบเทียบ control plane แบบกระจายอยู่ในทุก router กับแบบรวมศูนย์ที่ controller"
      className="mx-auto h-auto w-full min-w-[600px] max-w-[620px]"
      fill="currentColor"
    >
      <text x="150" y="20" textAnchor="middle" fontSize="12.5" fontWeight="600">
        แบบเดิม: control plane อยู่ในทุก router
      </text>
      <text x="470" y="20" textAnchor="middle" fontSize="12.5" fontWeight="600">
        SDN: control plane ย้ายออกมารวมศูนย์
      </text>

      <line x1="305" y1="8" x2="305" y2="242" stroke="currentColor" strokeOpacity="0.2" />

      {/* every router computes its own forwarding table */}
      {routers.map((x) => (
        <g key={`router-${x}`}>
          <rect
            x={x}
            y="52"
            width="80"
            height="42"
            rx="6"
            fillOpacity="0.16"
            stroke="currentColor"
            strokeOpacity="0.45"
          />
          <text x={x + 40} y="70" textAnchor="middle" fontSize="10">
            routing
          </text>
          <text x={x + 40} y="84" textAnchor="middle" fontSize="10">
            algorithm
          </text>
          <rect
            x={x}
            y="100"
            width="80"
            height="34"
            rx="6"
            fillOpacity="0.06"
            stroke="currentColor"
            strokeOpacity="0.3"
          />
          <text x={x + 40} y="121" textAnchor="middle" fontSize="10">
            forwarding
          </text>
          <text x={x + 40} y="152" textAnchor="middle" fontSize="10" opacity="0.65">
            router
          </text>
        </g>
      ))}
      <text x="150" y="190" textAnchor="middle" fontSize="11.5" opacity="0.75">
        ทุกเครื่องคำนวณเอง แล้วคุยกันด้วยโปรโตคอล
      </text>
      <text x="150" y="212" textAnchor="middle" fontSize="11.5" opacity="0.75">
        ตั้งค่าผิดเครื่องเดียว กระทบทั้งเส้นทาง
      </text>

      {/* one controller computes the tables for every switch */}
      <rect
        x="380"
        y="42"
        width="180"
        height="36"
        rx="8"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <text x="470" y="65" textAnchor="middle" fontSize="12.5" fontWeight="600">
        Remote Controller
      </text>

      <line
        x1="320"
        y1="96"
        x2="612"
        y2="96"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeDasharray="6 5"
      />
      <text x="612" y="110" textAnchor="end" fontSize="10" opacity="0.6">
        control plane / data plane
      </text>

      {switches.map((x) => (
        <g key={`switch-${x}`}>
          <line x1={x + 23} y1="78" x2={x + 23} y2="118" stroke="currentColor" strokeOpacity="0.45" />
          <rect
            x={x}
            y="118"
            width="46"
            height="34"
            rx="6"
            fillOpacity="0.06"
            stroke="currentColor"
            strokeOpacity="0.3"
          />
          <text x={x + 23} y="139" textAnchor="middle" fontSize="10">
            CA
          </text>
          <text x={x + 23} y="170" textAnchor="middle" fontSize="10" opacity="0.65">
            switch
          </text>
        </g>
      ))}
      <text x="470" y="190" textAnchor="middle" fontSize="11.5" opacity="0.75">
        controller คำนวณตารางแล้วส่งลงไปให้ทุกตัว
      </text>
      <text x="470" y="212" textAnchor="middle" fontSize="11.5" opacity="0.75">
        switch ส่งแพ็กเก็ตตามตารางอย่างเดียว
      </text>
    </svg>
  );
}
