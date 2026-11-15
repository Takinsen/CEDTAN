// Dropbox keeps file contents and facts about files on separate servers
const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';

export function DropboxSplit() {
  return (
    <svg
      viewBox="0 0 640 340"
      role="img"
      aria-label="Dropbox แยกเนื้อไฟล์ไว้ที่ storage servers ซึ่งเข้าถึงผ่าน processing servers ส่วนข้อมูลเกี่ยวกับไฟล์ เช่น ชื่อ ที่อยู่ เวลาแก้ล่าสุดซึ่งใช้ตอน sync อยู่ที่ metadata servers พร้อม database และ notification service ที่แจ้งเครื่องผู้ใช้เมื่อไฟล์เปลี่ยน เส้นระหว่าง storage กับ processing และระหว่างเครื่องผู้ใช้กับ processing และ metadata ผ่าน SSL ส่วนเส้นของ notification ไม่ผ่าน"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {/* file contents side */}
      <rect x="15" y="15" width="200" height="90" rx="8" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.6" />
      <text x="115" y="42" textAnchor="middle" fontSize="12" fontWeight="600">
        Storage servers
      </text>
      <text x="115" y="66" textAnchor="middle" fontSize="11" opacity="0.8">
        เก็บเนื้อไฟล์
      </text>
      <text x="115" y="84" textAnchor="middle" fontSize="11" opacity="0.8">
        เป็น block ที่เข้ารหัสแล้ว
      </text>

      <rect x="15" y="150" width="200" height="85" rx="8" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <text x="115" y="176" textAnchor="middle" fontSize="12" fontWeight="600">
        Processing servers
      </text>
      <text x="115" y="198" textAnchor="middle" fontSize="11" opacity="0.8">
        เข้ารหัส เปิดไฟล์
      </text>
      <text x="115" y="215" textAnchor="middle" fontSize="11" opacity="0.8">
        และแชร์ไฟล์ให้คนอื่น
      </text>
      <line x1="115" y1="109" x2="115" y2="146" stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.5" markerStart="url(#dbx-arrow)" markerEnd="url(#dbx-arrow)" />

      {/* facts-about-files side */}
      <rect x="250" y="15" width="375" height="220" rx="8" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.5" />
      <text x="265" y="36" fontSize="12" fontWeight="600">
        Metadata servers
      </text>
      <rect x="265" y="48" width="190" height="172" rx="6" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <text x="360" y="68" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Metadata service
      </text>
      <text x="277" y="92" fontSize="11" fontFamily={mono}>
        name: Important Document
      </text>
      <text x="277" y="110" fontSize="11" fontFamily={mono}>
        location: /files/work
      </text>
      <text x="277" y="128" fontSize="11" fontFamily={mono}>
        file type: .PPT
      </text>
      <text x="277" y="146" fontSize="11" fontFamily={mono}>
        last changed: 09/03/13
      </text>
      <text x="289" y="163" fontSize="11" opacity="0.8">
        ↑ ค่านี้ใช้ตอน sync
      </text>
      <text x="360" y="186" textAnchor="middle" fontSize="11" opacity="0.8">
        เก็บข้อมูลเกี่ยวกับไฟล์
      </text>
      <text x="360" y="203" textAnchor="middle" fontSize="11" opacity="0.8">
        ไม่ใช่ตัวไฟล์
      </text>

      <rect x="475" y="48" width="135" height="70" rx="6" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <text x="542" y="87" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Database
      </text>
      <line x1="459" y1="83" x2="471" y2="83" stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.5" markerStart="url(#dbx-arrow)" markerEnd="url(#dbx-arrow)" />

      <rect x="475" y="135" width="135" height="85" rx="6" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <text x="542" y="160" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Notification
      </text>
      <text x="542" y="176" textAnchor="middle" fontSize="11.5" fontWeight="600">
        service
      </text>
      <text x="542" y="200" textAnchor="middle" fontSize="11" opacity="0.8">
        แจ้งเมื่อไฟล์เปลี่ยน
      </text>

      {/* the user's devices */}
      <rect x="15" y="285" width="610" height="42" rx="8" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.55" />
      <text x="320" y="311" textAnchor="middle" fontSize="11.5">
        เครื่องของผู้ใช้ — คอมพิวเตอร์ มือถือ แท็บเล็ต
      </text>
      <line x1="115" y1="239" x2="115" y2="281" stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.5" markerStart="url(#dbx-arrow)" markerEnd="url(#dbx-arrow)" />
      <line x1="360" y1="224" x2="360" y2="281" stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.5" markerStart="url(#dbx-arrow)" markerEnd="url(#dbx-arrow)" />
      <line x1="542" y1="224" x2="542" y2="281" stroke="currentColor" strokeOpacity="0.65" strokeWidth="1.5" markerEnd="url(#dbx-arrow)" />
      {/* SSL marks only the links that cross an SSL layer; the notification line has none */}
      <text x="124" y="132" fontSize="11" opacity="0.75">
        SSL
      </text>
      <text x="124" y="264" fontSize="11" opacity="0.75">
        SSL
      </text>
      <text x="369" y="256" fontSize="11" opacity="0.75">
        SSL
      </text>

      <defs>
        <marker id="dbx-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.65" />
        </marker>
      </defs>
    </svg>
  );
}
