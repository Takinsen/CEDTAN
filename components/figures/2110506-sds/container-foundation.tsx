// the kernel features Docker sits on, and which part of the system each one lives in
export function ContainerFoundation() {
  return (
    <svg
      viewBox="0 0 600 300"
      role="img"
      aria-label="ส่วนประกอบของ Docker: daemon และ libcontainer อยู่ใน user space ส่วน cgroups และ namespaces อยู่ใน kernel"
      className="mx-auto h-auto w-full min-w-[560px] max-w-[600px]"
      fill="currentColor"
    >
      {/* which half of the system each row belongs to */}
      <rect x="20" y="30" width="70" height="160" rx="6" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.4" />
      <text x="55" y="110" textAnchor="middle" fontSize="13" fontWeight="600" transform="rotate(-90 55 110)">
        User Space
      </text>
      <rect x="20" y="190" width="70" height="80" rx="6" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.4" />
      <text x="55" y="230" textAnchor="middle" fontSize="13" fontWeight="600" transform="rotate(-90 55 230)">
        Kernel
      </text>

      <rect x="95" y="30" width="485" height="75" rx="8" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.45" />
      <text x="337" y="62" textAnchor="middle" fontSize="15" fontWeight="600">
        Docker Daemon
      </text>
      <text x="337" y="84" textAnchor="middle" fontSize="12" opacity="0.7">
        รับคำสั่ง สร้าง image สร้าง container
      </text>

      <rect x="95" y="110" width="330" height="75" rx="8" fillOpacity="0.09" stroke="currentColor" strokeOpacity="0.45" />
      <text x="260" y="142" textAnchor="middle" fontSize="15" fontWeight="600">
        Libcontainer
      </text>
      <text x="260" y="164" textAnchor="middle" fontSize="12" opacity="0.7">
        เรียกใช้ความสามารถของ kernel ให้
      </text>

      <rect x="430" y="110" width="150" height="160" rx="8" fillOpacity="0.09" stroke="currentColor" strokeOpacity="0.45" />
      <text x="505" y="180" textAnchor="middle" fontSize="14" fontWeight="600">
        Union
      </text>
      <text x="505" y="200" textAnchor="middle" fontSize="14" fontWeight="600">
        Filesystem
      </text>
      <text x="505" y="222" textAnchor="middle" fontSize="12" opacity="0.7">
        เก็บ image
      </text>

      <rect x="95" y="190" width="160" height="80" rx="8" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.45" />
      <text x="175" y="224" textAnchor="middle" fontSize="14" fontWeight="600">
        cgroups
      </text>
      <text x="175" y="245" textAnchor="middle" fontSize="12" opacity="0.7">
        จำกัดทรัพยากร
      </text>

      <rect x="265" y="190" width="160" height="80" rx="8" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.45" />
      <text x="345" y="224" textAnchor="middle" fontSize="14" fontWeight="600">
        namespaces
      </text>
      <text x="345" y="245" textAnchor="middle" fontSize="12" opacity="0.7">
        แยกให้มองไม่เห็นกัน
      </text>

      <text x="300" y="292" textAnchor="middle" fontSize="12" opacity="0.75">
        Docker ไม่ได้คิดสามอย่างนี้ขึ้นมาใหม่ — Linux มีอยู่ก่อนแล้ว
      </text>
    </svg>
  );
}
