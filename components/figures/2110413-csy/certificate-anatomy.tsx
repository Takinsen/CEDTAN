// the fields a certificate binds together, and the signature that covers all of them
export function CertificateAnatomy() {
  return (
    <svg
      viewBox="0 0 620 330"
      role="img"
      aria-label="ใบรับรองหนึ่งใบ ประกอบด้วยชื่อผู้ถือ กุญแจสาธารณะของผู้ถือ ชื่อผู้ออก เลขลำดับ อายุ รุ่นของรูปแบบ และส่วนขยาย ทุกบรรทัดถูกย่อด้วย hash แล้วเซ็นด้วยกุญแจส่วนตัวของผู้ออก กลายเป็นลายเซ็นที่อยู่ท้ายใบ"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="310" y="20" textAnchor="middle" fontSize="11" opacity="0.8">
        ใบรับรองคือเอกสารที่มัดชื่อเข้ากับกุญแจ แล้วให้คนอื่นเซ็นทับ
      </text>

      <g stroke="currentColor" strokeOpacity="0.55">
        <rect x="140" y="34" width="400" height="192" rx="8" fillOpacity="0.04" />
        <rect x="156" y="50" width="368" height="40" rx="5" fillOpacity="0.12" />
        <rect x="156" y="98" width="368" height="40" rx="5" fillOpacity="0.12" />
        <rect x="156" y="146" width="368" height="30" rx="5" fillOpacity="0.06" />
        <rect x="156" y="184" width="368" height="30" rx="5" fillOpacity="0.06" />
        <rect x="156" y="256" width="368" height="52" rx="5" fillOpacity="0.18" />
      </g>

      <text x="168" y="66" fontSize="11" opacity="0.75">
        Subject — ใบนี้เป็นของใคร
      </text>
      <text x="168" y="83" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
        CN = www.chula.ac.th
      </text>

      <text x="168" y="114" fontSize="11" opacity="0.75">
        Subject Public Key — กุญแจสาธารณะของเจ้าของใบ
      </text>
      <text x="168" y="131" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
        RSA 2048 bit : 00:a9:96:9b:d4:...
      </text>

      <text x="168" y="166" fontSize="11">
        Issuer — ใครเป็นคนออกใบนี้ :{' '}
        <tspan fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">CN = Thawte TLS RSA CA G1</tspan>
      </text>

      <text x="168" y="204" fontSize="11">
        Version, Serial number, Validity period, Extensions, Signing algorithm
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none">
        <path d="M 128 40 L 120 40 L 120 220 L 128 220" />
        <path d="M 120 130 L 112 130" markerEnd="url(#ca-arrow)" />
        <path d="M 340 226 L 340 250" markerEnd="url(#ca-arrow)" />
      </g>

      <text x="10" y="118" fontSize="11">
        ทุกบรรทัดในกรอบ
      </text>
      <text x="10" y="135" fontSize="11">
        ถูกย่อด้วย hash
      </text>
      <text x="10" y="152" fontSize="11">
        แล้วล็อกด้วย
      </text>
      <text x="10" y="169" fontSize="11">
        priv ของ issuer
      </text>

      <text x="168" y="276" fontSize="11" opacity="0.75">
        Issuer Digital Signature — ลายเซ็นของผู้ออก
      </text>
      <text x="168" y="295" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
        60:77:e2:84:04:44:36:d4:bb:19:...
      </text>

      <text x="310" y="324" textAnchor="middle" fontSize="11" fontWeight="600">
        แก้บรรทัดไหนก็ตามในกรอบ ลายเซ็นท้ายใบจะไม่ตรงทันที
      </text>

      <defs>
        <marker id="ca-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
