// injected JavaScript runs inside the victim's own browser, so it reads whatever is typed into the login form
export function JsInjection() {
  const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';
  return (
    <svg
      viewBox="0 0 620 288"
      role="img"
      aria-label="หน้าต่างเบราว์เซอร์ของเหยื่อเปิดหน้าล็อกอินอยู่ มีช่องชื่อผู้ใช้และช่องรหัสผ่าน คนร้ายฉีดสคริปต์เข้าไปในเบราว์เซอร์เดียวกัน สคริปต์จึงอ่านค่าในช่องทั้งสองได้ แล้วส่งชื่อผู้ใช้กับรหัสผ่านออกไปให้คนร้าย"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      {/* browser window */}
      <rect x="18" y="26" width="356" height="236" rx="10" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" />
      {/* address bar */}
      <rect x="34" y="42" width="324" height="26" rx="6" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
      <text x="46" y="59" fontSize="11" fontFamily={mono} opacity="0.8">account.it.chula.ac.th</text>
      <text x="196" y="90" textAnchor="middle" fontSize="12" fontWeight="600">หน้าล็อกอินของเหยื่อ</text>

      {/* username field */}
      <text x="46" y="118" fontSize="11" opacity="0.8">Username</text>
      <rect x="46" y="126" width="298" height="26" rx="5" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.5" />
      <text x="58" y="143" fontSize="11" fontFamily={mono} opacity="0.9">pkrerk</text>

      {/* password field */}
      <text x="46" y="178" fontSize="11" opacity="0.8">Password</text>
      <rect x="46" y="186" width="298" height="26" rx="5" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.5" />
      <text x="58" y="203" fontSize="13" fontFamily={mono} opacity="0.9">••••••••••</text>

      {/* login button */}
      <rect x="46" y="224" width="86" height="24" rx="5" fillOpacity="0.3" stroke="currentColor" strokeOpacity="0.55" />
      <text x="89" y="240" textAnchor="middle" fontSize="11" fontWeight="600">LOGIN</text>

      {/* injected script overlay */}
      <rect x="150" y="224" width="208" height="26" rx="5" fillOpacity="0.26" stroke="currentColor" strokeOpacity="0.6" strokeDasharray="4 3" />
      <text x="162" y="241" fontSize="10.5" fontFamily={mono} opacity="0.92">สคริปต์ที่คนร้ายฉีด</text>

      {/* reads the two fields */}
      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.2" fill="none" strokeDasharray="4 3">
        <path d="M254 224 V152" />
        <path d="M300 224 V212" />
      </g>

      {/* arrow out to attacker */}
      <g stroke="currentColor" strokeOpacity="0.78" strokeWidth="1.7" fill="none" markerEnd="url(#js-arrow)">
        <path d="M374 150 H452" />
      </g>
      <text x="413" y="126" textAnchor="middle" fontSize="11" opacity="0.82">อ่านค่า</text>
      <text x="413" y="141" textAnchor="middle" fontSize="11" opacity="0.82">แล้วส่งออก</text>

      {/* attacker */}
      <rect x="456" y="118" width="146" height="64" rx="10" fillOpacity="0.28" stroke="currentColor" strokeOpacity="0.6" />
      <text x="529" y="142" textAnchor="middle" fontSize="12" fontWeight="600">คนร้าย</text>
      <text x="529" y="162" textAnchor="middle" fontSize="11" fontFamily={mono} opacity="0.85">pkrerk / •••••</text>

      <text x="18" y="282" fontSize="11" opacity="0.74">สคริปต์รันในเบราว์เซอร์ของเหยื่อเอง จึงมีสิทธิ์เท่าหน้าเว็บนั้น อ่านทุกอย่างที่เหยื่อพิมพ์ในหน้านั้นได้</text>

      <defs>
        <marker id="js-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.72" />
        </marker>
      </defs>
    </svg>
  );
}
