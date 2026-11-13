// deleting removes the index entry, not the bytes: once for a file, once for a whole partition
export function DeleteKeepsData() {
  return (
    <svg
      viewBox="0 0 620 304"
      role="img"
      aria-label="สองระดับของการลบ ระดับไฟล์ ชื่อ mountain.jpg ถูกลบออกจาก directory block 1194 ถึง 1204 ถูกนับว่าว่าง แต่ไบต์ของรูปยังอยู่ครบ carving จึงหาไบต์ FF D8 FF แล้วตัดรูปออกมาได้ ระดับ partition รายการ partition Linux ที่เริ่ม sector 8192 ยาว 4194304 sector ถูกลบ ข้อมูล ext4 ยังอยู่ แต่ระบบเห็นเป็นดิสก์ที่ยังไม่ format TestDisk หาจุดเริ่มของระบบไฟล์ในไบต์ดิบแล้วรายงานตำแหน่งให้"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="16" y="22" fontSize="11" fontWeight="600">
        ระดับไฟล์ — ลบรูป mountain.jpg ออกจากระบบไฟล์ ext4
      </text>

      <rect x="16" y="34" width="190" height="80" rx="7" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <text x="28" y="52" fontSize="11" fontWeight="600">
        directory /
      </text>
      <g fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" opacity="0.85">
        <text x="28" y="72">11 lost+found</text>
        <text x="28" y="88">13 mountain.jpg</text>
        <text x="28" y="104">14 note.txt</text>
      </g>
      <line x1="26" y1="84" x2="132" y2="84" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.4" />

      <g stroke="currentColor" strokeOpacity="0.55">
        <rect x="246" y="52" width="60" height="34" fillOpacity="0.04" />
        <rect x="306" y="52" width="210" height="34" fillOpacity="0.2" />
        <rect x="516" y="52" width="88" height="34" fillOpacity="0.04" />
      </g>
      <text x="411" y="74" textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
        FF D8 FF E0 ...
      </text>
      <text x="411" y="44" textAnchor="middle" fontSize="11" opacity="0.85">
        block 1194–1204
      </text>
      <path d="M 136 88 L 240 70" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" strokeDasharray="4 3" />
      <g stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.4">
        <line x1="182" y1="72" x2="194" y2="84" />
        <line x1="194" y1="72" x2="182" y2="84" />
      </g>
      <text x="425" y="104" textAnchor="middle" fontSize="11" opacity="0.85">
        ถูกนับว่าว่างแล้ว แต่ไบต์ของรูปยังอยู่ครบ 42261 ไบต์
      </text>
      <text x="310" y="132" textAnchor="middle" fontSize="11" opacity="0.8">
        carving อ่านไบต์ดิบทั้งก้อน หา FF D8 FF แล้วตัดออกมา โดยไม่ต้องพึ่ง directory เลย
      </text>

      <line x1="16" y1="150" x2="604" y2="150" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="4 4" />

      <text x="16" y="174" fontSize="11" fontWeight="600">
        ระดับ partition — microSD ในคดี (sector ละ 512 ไบต์)
      </text>

      <rect x="16" y="186" width="190" height="64" rx="7" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <text x="28" y="204" fontSize="11" fontWeight="600">
        partition table
      </text>
      <text x="28" y="224" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" opacity="0.85">
        Linux 8192 4194304
      </text>
      <line x1="26" y1="220" x2="160" y2="220" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.4" />
      <text x="28" y="242" fontSize="11" opacity="0.8">
        รายการถูกลบทิ้ง
      </text>

      <g stroke="currentColor" strokeOpacity="0.55">
        <rect x="246" y="196" width="40" height="34" fillOpacity="0.04" />
        <rect x="286" y="196" width="190" height="34" fillOpacity="0.2" />
        <rect x="476" y="196" width="128" height="34" fillOpacity="0.04" />
      </g>
      <text x="381" y="218" textAnchor="middle" fontSize="11">
        ext4 ขนาด 2 GiB
      </text>
      <text x="540" y="218" textAnchor="middle" fontSize="11" opacity="0.8">
        ส่วนที่เหลือ
      </text>
      <text x="286" y="246" textAnchor="middle" fontSize="11" opacity="0.85">
        sector 8192
      </text>
      <text x="476" y="246" textAnchor="middle" fontSize="11" opacity="0.85">
        4202495
      </text>
      <text x="425" y="266" textAnchor="middle" fontSize="11" opacity="0.85">
        ข้อมูลยังอยู่ แต่ระบบปกติเห็นเป็นดิสก์ที่ยังไม่ได้ format
      </text>
      <text x="310" y="292" textAnchor="middle" fontSize="11" opacity="0.8">
        TestDisk ไล่หาจุดเริ่มของระบบไฟล์ในไบต์ดิบ แล้วรายงานว่า partition เริ่มและจบที่ไหน
      </text>
    </svg>
  );
}
