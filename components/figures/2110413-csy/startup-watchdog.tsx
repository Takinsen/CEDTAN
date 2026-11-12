// how the card kept `mobile` alive: rc.local starts it at boot, cron restarts it every three minutes
export function StartupWatchdog() {
  return (
    <svg
      viewBox="0 0 620 270"
      role="img"
      aria-label="สองทางที่ทำให้โปรแกรม mobile รันอยู่ตลอด ทางแรกตอนเปิดเครื่อง rc.local ลบไฟล์ .bash_history และ .mobile.cfg.swp สั่ง switch 0 รอหนึ่งวินาทีแล้วเปิด mobile ทางที่สอง cron เรียก chkmobi ทุกสามนาที ถ้า pidof mobile ว่าง แปลว่า mobile ไม่ได้รัน chkmobi จะฆ่า mobile กับ osmocon สั่ง switch 0 แล้วเปิด mobile ใหม่ ถ้าไม่ว่างก็พิมพ์ nothing"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <rect x="16" y="22" width="120" height="28" rx="14" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" />
      <text x="76" y="40" textAnchor="middle" fontSize="11" fontWeight="600">
        เปิดเครื่อง
      </text>

      <rect x="16" y="76" width="244" height="132" rx="7" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <text x="28" y="96" fontSize="11" fontWeight="600">
        /etc/rc.local
      </text>
      <g fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" opacity="0.85">
        <text x="28" y="118">rm /root/.bash_history</text>
        <text x="28" y="134">rm /root/.mobile.cfg.swp</text>
        <text x="28" y="150">switch 0</text>
        <text x="28" y="166">sleep 1</text>
        <text x="28" y="182">mobile &amp;</text>
      </g>
      <text x="28" y="200" fontSize="11" opacity="0.8">
        ลบประวัติคำสั่งทุกครั้งที่บูต
      </text>

      <rect x="330" y="22" width="200" height="28" rx="14" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.55" />
      <text x="430" y="40" textAnchor="middle" fontSize="11" fontWeight="600">
        cron ทุก 3 นาที (*/3 * * * *)
      </text>

      <rect x="350" y="76" width="160" height="46" rx="7" fillOpacity="0.14" stroke="currentColor" strokeOpacity="0.55" />
      <text x="430" y="95" textAnchor="middle" fontSize="11" fontWeight="600">
        /usr/sbin/chkmobi
      </text>
      <text x="430" y="112" textAnchor="middle" fontSize="11" opacity="0.85">
        pidof mobile ว่างไหม
      </text>

      <rect x="290" y="156" width="196" height="64" rx="7" fillOpacity="0.2" stroke="currentColor" strokeOpacity="0.55" />
      <g fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" opacity="0.9">
        <text x="300" y="176">killall -9 mobile osmocon</text>
        <text x="300" y="192">switch 0</text>
        <text x="300" y="208">/usr/local/bin/mobile &amp;</text>
      </g>

      <rect x="506" y="156" width="98" height="34" rx="7" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.55" />
      <text x="555" y="177" textAnchor="middle" fontSize="11" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" opacity="0.85">
        echo nothing
      </text>

      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" fill="none" markerEnd="url(#sw-arrow)">
        <line x1="76" y1="51" x2="76" y2="73" />
        <line x1="430" y1="51" x2="430" y2="73" />
        <line x1="400" y1="123" x2="400" y2="153" />
        <path d="M 480 123 L 555 153" />
      </g>
      <text x="394" y="143" textAnchor="end" fontSize="11" opacity="0.85">
        ว่าง = ไม่ได้รัน
      </text>
      <text x="530" y="132" fontSize="11" opacity="0.85">
        ไม่ว่าง
      </text>

      <text x="310" y="252" textAnchor="middle" fontSize="11" opacity="0.78">
        mobile ที่ตายไปจะถูกเปิดใหม่ภายใน 3 นาทีเสมอ ส่วนประวัติคำสั่งหายไปทุกครั้งที่เปิดเครื่อง
      </text>

      <defs>
        <marker id="sw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
