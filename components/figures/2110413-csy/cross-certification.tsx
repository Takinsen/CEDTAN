// two separate hierarchies joined by a cross-certificate, and the path a verifier walks to reach the other side
export function CrossCertification() {
  return (
    <svg
      viewBox="0 0 620 316"
      role="img"
      aria-label="สองลำดับชั้นที่แยกกัน ฝั่งซ้ายมี root ที่เราเชื่ออยู่แล้วเซ็นต่อลงมาถึงพนักงานของตัวเอง ฝั่งขวามี root อีกใบที่เซ็นต่อลงมาถึงผู้ส่งอีเมล root ฝั่งซ้ายเซ็นใบข้ามให้ root ฝั่งขวาที่ลูกศรหมายเลขหนึ่ง จากนั้นการตรวจเดินลงต่อที่ลูกศรหมายเลขสองและสามจนถึงใบของผู้ส่ง"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="18" textAnchor="middle" fontSize="11" opacity="0.8">
        เราเชื่อ root เดียว แต่ตรวจใบของอีกองค์กรได้ ถ้ามีใบข้ามเชื่อมสองฝั่งไว้
      </text>

      <g stroke="currentColor" strokeOpacity="0.55">
        <rect x="24" y="44" width="164" height="42" rx="6" fillOpacity="0.18" />
        <rect x="34" y="140" width="130" height="38" rx="6" fillOpacity="0.1" />
        <rect x="24" y="230" width="150" height="38" rx="6" fillOpacity="0.06" />
        <rect x="424" y="44" width="150" height="42" rx="6" fillOpacity="0.12" />
        <rect x="436" y="140" width="130" height="38" rx="6" fillOpacity="0.1" />
        <rect x="416" y="230" width="164" height="38" rx="6" fillOpacity="0.06" />
      </g>

      <text x="106" y="62" textAnchor="middle" fontSize="11" fontWeight="600">
        Root ของฝั่งเรา
      </text>
      <text x="106" y="79" textAnchor="middle" fontSize="11" opacity="0.85">
        ใบเดียวที่เครื่องเราเชื่อ
      </text>
      <text x="99" y="164" textAnchor="middle" fontSize="11">
        CA ลูกของฝั่งเรา
      </text>
      <text x="99" y="254" textAnchor="middle" fontSize="11">
        พนักงานฝั่งเรา
      </text>

      <text x="499" y="62" textAnchor="middle" fontSize="11" fontWeight="600">
        Root ของอีกองค์กร
      </text>
      <text x="499" y="79" textAnchor="middle" fontSize="11" opacity="0.85">
        เครื่องเราไม่เคยเห็น
      </text>
      <text x="501" y="164" textAnchor="middle" fontSize="11">
        CA ลูกของอีกองค์กร
      </text>
      <text x="498" y="254" textAnchor="middle" fontSize="11">
        คนที่ส่งอีเมลมาหาเรา
      </text>

      <g stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.4" fill="none" markerEnd="url(#cx-arrow)">
        <line x1="99" y1="90" x2="99" y2="136" />
        <line x1="99" y1="182" x2="99" y2="226" />
        <line x1="501" y1="90" x2="501" y2="136" />
        <line x1="501" y1="182" x2="501" y2="226" />
      </g>

      <g stroke="currentColor" strokeOpacity="0.8" strokeWidth="2" strokeDasharray="6 4" fill="none" markerEnd="url(#cx-arrow)">
        <line x1="192" y1="65" x2="420" y2="65" />
      </g>
      <text x="306" y="56" textAnchor="middle" fontSize="11" fontWeight="600">
        cross-certificate
      </text>
      <text x="306" y="86" textAnchor="middle" fontSize="11">
        root ฝั่งเราเซ็นใบให้ root ฝั่งโน้น
      </text>

      <text x="205" y="58" fontSize="11" fontWeight="600">
        1
      </text>
      <text x="511" y="116" fontSize="11" fontWeight="600">
        2
      </text>
      <text x="511" y="210" fontSize="11" fontWeight="600">
        3
      </text>

      <text x="306" y="196" textAnchor="middle" fontSize="11" fontWeight="600">
        เส้นทางที่ path discovery หาเจอ
      </text>
      <text x="306" y="216" textAnchor="middle" fontSize="11">
        เริ่มจาก root ที่เราเชื่อ เดินข้ามไปที่ 1
      </text>
      <text x="306" y="234" textAnchor="middle" fontSize="11">
        ลงต่อที่ 2 แล้วจบที่ใบของผู้ส่งที่ 3
      </text>

      <text x="310" y="300" textAnchor="middle" fontSize="11" fontWeight="600">
        ไม่มีใบข้ามใบนี้ อีเมลฉบับเดิมจะตรวจไม่ผ่าน ทั้งที่ลายเซ็นถูกต้องทุกประการ
      </text>

      <defs>
        <marker id="cx-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
