// block storage lets a program rewrite part of a file; object storage replaces a whole object per key
const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';

export function BlockVsObject() {
  const blocks = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <svg
      viewBox="0 0 640 300"
      role="img"
      aria-label="ฝั่ง block storage โปรแกรมเขียนทับ block เดียวกลางไฟล์ได้ ฝั่ง object storage จะแก้ object ต้อง PUT ทั้ง object ใหม่ด้วย key เดิม"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {/* left: a file on a block device */}
      <rect x="10" y="10" width="300" height="280" rx="10" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.4" />
      <text x="25" y="36" fontSize="13" fontWeight="600">
        Block storage
      </text>
      <text x="25" y="54" fontSize="11" opacity="0.7">
        EBS, instance store — POSIX file system
      </text>
      <text x="25" y="92" fontSize="11.5" fontFamily={mono}>
        /data/album.db
      </text>
      {blocks.map((b) => (
        <rect
          key={b}
          x={25 + b * 33}
          y="102"
          width="30"
          height="34"
          rx="3"
          fillOpacity={b === 5 ? 0.35 : 0.08}
          stroke="currentColor"
          strokeOpacity="0.55"
        />
      ))}
      {blocks.map((b) => (
        <text key={b} x={40 + b * 33} y="124" textAnchor="middle" fontSize="11" fontFamily={mono} opacity="0.8">
          {b}
        </text>
      ))}
      <line x1="205" y1="175" x2="205" y2="142" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" markerEnd="url(#bvo-arrow)" />
      <text x="205" y="192" textAnchor="middle" fontSize="11.5">
        เขียนทับแค่ block 5
      </text>
      <text x="205" y="208" textAnchor="middle" fontSize="11" opacity="0.7">
        ส่วนอื่นของไฟล์ไม่ถูกแตะ
      </text>
      <text x="25" y="250" fontSize="11" opacity="0.7">
        คำสั่งที่ใช้ได้
      </text>
      <text x="25" y="270" fontSize="11.5" fontFamily={mono}>
        open  seek  write  append  rename
      </text>

      {/* right: an object in a bucket */}
      <rect x="330" y="10" width="300" height="280" rx="10" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.4" />
      <text x="345" y="36" fontSize="13" fontWeight="600">
        Object storage
      </text>
      <text x="345" y="54" fontSize="11" opacity="0.7">
        S3 — REST, not POSIX
      </text>
      <rect x="345" y="72" width="270" height="110" rx="8" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" />
      <text x="357" y="90" fontSize="11" opacity="0.7">
        bucket: club-album
      </text>
      <text x="357" y="116" fontSize="11.5" fontFamily={mono}>
        photos/dog.jpg
      </text>
      <rect x="490" y="101" width="112" height="22" rx="3" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" />
      <text x="546" y="116" textAnchor="middle" fontSize="11" opacity="0.8">
        object
      </text>
      <text x="357" y="160" fontSize="11.5" fontFamily={mono}>
        photos/cat.jpg
      </text>
      <rect x="490" y="145" width="112" height="22" rx="3" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" />
      <text x="546" y="160" textAnchor="middle" fontSize="11" opacity="0.8">
        object v1
      </text>
      <rect x="490" y="200" width="112" height="22" rx="3" fillOpacity="0.35" stroke="currentColor" strokeOpacity="0.6" />
      <text x="546" y="215" textAnchor="middle" fontSize="11">
        object v2
      </text>
      <line x1="546" y1="198" x2="546" y2="171" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" markerEnd="url(#bvo-arrow)" />
      <text x="357" y="208" fontSize="11.5" fontFamily={mono}>
        PUT photos/cat.jpg
      </text>
      <text x="357" y="226" fontSize="11" opacity="0.7">
        ส่งใหม่ทั้งก้อน
      </text>
      <text x="345" y="250" fontSize="11" opacity="0.7">
        คำสั่งที่ใช้ได้
      </text>
      <text x="345" y="270" fontSize="11.5" fontFamily={mono}>
        PUT  GET  DELETE  LIST
      </text>

      <defs>
        <marker id="bvo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.7" />
        </marker>
      </defs>
    </svg>
  );
}
