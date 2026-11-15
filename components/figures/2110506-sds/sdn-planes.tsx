// the three planes of an SDN deployment and the API that joins each pair
export function SdnPlanes() {
  const apps = ['monitoring', 'load balancing', 'security', 'traffic control'];
  const devices = ['physical switch', 'virtual switch', 'access point'];

  // a vertical two-headed arrow between planes
  const vArrow = (x: number, y1: number, y2: number) => (
    <g>
      <line x1={x} y1={y1 + 6} x2={x} y2={y2 - 6} stroke="currentColor" strokeOpacity="0.75" strokeWidth="2" />
      <polygon points={`${x - 6},${y1 + 8} ${x + 6},${y1 + 8} ${x},${y1}`} />
      <polygon points={`${x - 6},${y2 - 8} ${x + 6},${y2 - 8} ${x},${y2}`} />
    </g>
  );

  return (
    <svg
      viewBox="0 0 640 400"
      role="img"
      aria-label="สามชั้นของ SDN: แอปอยู่บน controller อยู่กลาง อุปกรณ์อยู่ล่าง เชื่อมกันด้วย northbound API, southbound API และ east-west API ระหว่าง controller"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {/* management plane: the network apps */}
      <rect x="20" y="10" width="600" height="80" rx="10" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.6" />
      <text x="36" y="32" fontSize="13" fontWeight="600">
        Management plane — แอปที่บอกว่าเครือข่ายควรทำอะไร
      </text>
      {apps.map((a, i) => (
        <g key={a}>
          <rect x={40 + i * 145} y="46" width="130" height="30" rx="6" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.55" />
          <text x={105 + i * 145} y="66" textAnchor="middle" fontSize="12">
            {a}
          </text>
        </g>
      ))}

      {vArrow(150, 92, 140)}
      <text x="166" y="112" fontSize="12" fontWeight="600">
        Northbound API
      </text>
      <text x="166" y="128" fontSize="11" opacity="0.75">
        แอปสั่ง controller เช่น REST, JSON
      </text>

      {/* control plane: two controller clusters that keep each other in sync */}
      <rect x="20" y="140" width="600" height="110" rx="10" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.6" />
      <text x="36" y="162" fontSize="13" fontWeight="600">
        Control plane — controller ที่ตัดสินใจ
      </text>
      <rect x="40" y="176" width="200" height="56" rx="8" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.65" />
      <text x="140" y="200" textAnchor="middle" fontSize="12.5" fontWeight="600">
        controller ชุด A
      </text>
      <text x="140" y="218" textAnchor="middle" fontSize="11" opacity="0.75">
        เช่น ONOS, Ryu
      </text>
      <rect x="400" y="176" width="200" height="56" rx="8" fillOpacity="0.18" stroke="currentColor" strokeOpacity="0.65" />
      <text x="500" y="200" textAnchor="middle" fontSize="12.5" fontWeight="600">
        controller ชุด B
      </text>
      <text x="500" y="218" textAnchor="middle" fontSize="11" opacity="0.75">
        อีกชุดที่ต้องเห็นข้อมูลตรงกัน
      </text>
      <line x1="248" y1="204" x2="392" y2="204" stroke="currentColor" strokeOpacity="0.75" strokeWidth="2" />
      <polygon points="242,204 250,198 250,210" />
      <polygon points="398,204 390,198 390,210" />
      <text x="320" y="196" textAnchor="middle" fontSize="12" fontWeight="600">
        East-West API
      </text>
      <text x="320" y="224" textAnchor="middle" fontSize="11" opacity="0.75">
        Raft, Zookeeper, AMQP
      </text>

      {vArrow(150, 252, 300)}
      <text x="166" y="272" fontSize="12" fontWeight="600">
        Southbound API
      </text>
      <text x="166" y="288" fontSize="11" opacity="0.75">
        controller เขียนลงอุปกรณ์ เช่น OpenFlow
      </text>

      {/* data plane: the devices that move packets */}
      <rect x="20" y="300" width="600" height="86" rx="10" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.6" />
      <text x="36" y="322" fontSize="13" fontWeight="600">
        Data plane — อุปกรณ์ที่ส่ง packet ตามตาราง
      </text>
      {devices.map((d, i) => (
        <g key={d}>
          <rect x={40 + i * 195} y="338" width="170" height="32" rx="6" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.55" />
          <text x={125 + i * 195} y="359" textAnchor="middle" fontSize="12">
            {d}
          </text>
        </g>
      ))}
    </svg>
  );
}
