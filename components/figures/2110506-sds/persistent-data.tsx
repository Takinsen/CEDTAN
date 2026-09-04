// two ways to make a file outlive the container that wrote it
export function PersistentData() {
  return (
    <svg
      viewBox="0 0 620 325"
      role="img"
      aria-label="bind mount ผูกโฟลเดอร์ของ host เข้ากับ container ส่วน volume mapping ใช้พื้นที่ที่ Docker สร้างและดูแลเอง"
      className="mx-auto h-auto w-full min-w-[580px] max-w-[620px]"
      fill="currentColor"
    >
      <rect x="15" y="25" width="590" height="285" rx="12" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.3" />
      <text x="30" y="302" fontSize="12" opacity="0.65">
        Host Computer
      </text>

      {/* the disk of the machine you are actually sitting at */}
      <path
        d="M 35 60 A 87 18 0 0 1 209 60 L 209 245 A 87 18 0 0 1 35 245 Z"
        fillOpacity="0.05"
        stroke="currentColor"
        strokeOpacity="0.4"
      />
      <ellipse cx="122" cy="60" rx="87" ry="18" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.4" />

      <rect x="50" y="92" width="145" height="32" rx="5" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="122" y="113" textAnchor="middle" fontSize="11.5">
        /home/user/data
      </text>
      <text x="122" y="152" textAnchor="middle" fontSize="10.5" opacity="0.65">
        /var/lib/docker/volumes/
      </text>
      <rect x="50" y="165" width="145" height="32" rx="5" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="122" y="186" textAnchor="middle" fontSize="11.5">
        Volume: myvol
      </text>
      <text x="122" y="228" textAnchor="middle" fontSize="11" opacity="0.65">
        ดิสก์ของเครื่อง
      </text>

      <rect x="330" y="50" width="260" height="215" rx="10" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.35" />
      <text x="345" y="258" fontSize="11.5" opacity="0.65">
        Docker Host
      </text>

      <rect x="355" y="70" width="215" height="80" rx="8" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.45" />
      <rect x="375" y="95" width="175" height="32" rx="5" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="462" y="116" textAnchor="middle" fontSize="11.5">
        /home/data
      </text>
      <text x="462" y="143" textAnchor="middle" fontSize="11" opacity="0.7">
        App Container
      </text>

      <rect x="355" y="160" width="215" height="80" rx="8" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.45" />
      <rect x="375" y="185" width="175" height="32" rx="5" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="462" y="206" textAnchor="middle" fontSize="11.5">
        /tmp/data
      </text>
      <text x="462" y="233" textAnchor="middle" fontSize="11" opacity="0.7">
        App Container
      </text>

      <line
        x1="210"
        y1="111"
        x2="370"
        y2="111"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeDasharray="5 4"
        markerEnd="url(#persist-arrow)"
      />
      <text x="270" y="100" textAnchor="middle" fontSize="11.5" opacity="0.8">
        bind mount
      </text>

      <line
        x1="210"
        y1="201"
        x2="370"
        y2="201"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeDasharray="5 4"
        markerEnd="url(#persist-arrow)"
      />
      <text x="270" y="190" textAnchor="middle" fontSize="11.5" opacity="0.8">
        volume mapping
      </text>

      <defs>
        <marker id="persist-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.55" />
        </marker>
      </defs>
    </svg>
  );
}
