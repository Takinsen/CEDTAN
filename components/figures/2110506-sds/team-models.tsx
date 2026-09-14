// three ways to split delivery and operations work: DevOps, SRE, platform engineering
export function TeamModels() {
  return (
    <svg
      viewBox="0 0 620 300"
      role="img"
      aria-label="สามรูปแบบการแบ่งงาน DevOps ให้ทีม product ทำครบทุกขั้นรวมถึง deploy, monitor และ operate SRE ให้ทีม product ส่งมอบตาม standards ให้ทีม SRE ที่ทำ deploy, monitor และ operate ด้วย SRE tooling ส่วน platform engineering ให้ทีม product ใช้ platform tooling ที่ครอบทุกขั้นบน unified infrastructure โดยมีทีม SRE รับงาน deploy, monitor และ response"
      className="mx-auto h-auto w-full min-w-[590px]"
      fill="currentColor"
    >
      <text x="106" y="22" textAnchor="middle" fontSize="11.5" fontWeight="600">
        DevOps
      </text>
      <text x="310" y="22" textAnchor="middle" fontSize="11.5" fontWeight="600">
        SRE
      </text>
      <text x="514" y="22" textAnchor="middle" fontSize="11.5" fontWeight="600">
        Platform Engineering
      </text>

      <rect x="8" y="34" width="196" height="180" rx="9" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.5" />
      <text x="106" y="52" textAnchor="middle" fontSize="11" opacity="0.76">
        Product team
      </text>
      <rect x="14" y="62" width="184" height="28" rx="5" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="106" y="80" textAnchor="middle" fontSize="11">
        PM · Plan
      </text>
      <rect x="14" y="96" width="184" height="28" rx="5" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="106" y="114" textAnchor="middle" fontSize="11">
        Dev · Code, Build, Release
      </text>
      <rect x="14" y="130" width="184" height="28" rx="5" fillOpacity="0.12" stroke="currentColor" strokeOpacity="0.5" />
      <text x="106" y="148" textAnchor="middle" fontSize="11">
        Test · Test
      </text>
      <rect x="14" y="164" width="184" height="36" rx="5" fillOpacity="0.28" stroke="currentColor" strokeOpacity="0.6" />
      <text x="106" y="186" textAnchor="middle" fontSize="11" fontWeight="600">
        Ops · Deploy, Monitor, Operate
      </text>

      <rect x="212" y="34" width="196" height="92" rx="9" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.5" />
      <text x="310" y="52" textAnchor="middle" fontSize="11" opacity="0.76">
        Product team
      </text>
      <text x="310" y="72" textAnchor="middle" fontSize="11">
        PM · Plan
      </text>
      <text x="310" y="90" textAnchor="middle" fontSize="11">
        Dev · Code, Build, Release
      </text>
      <text x="310" y="108" textAnchor="middle" fontSize="11">
        Test · Test
      </text>
      <line x1="310" y1="128" x2="310" y2="147" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.5" markerEnd="url(#tm-arrow)" />
      <text x="302" y="142" textAnchor="end" fontSize="11" opacity="0.8">
        Standards
      </text>
      <rect x="212" y="150" width="196" height="64" rx="9" fillOpacity="0.28" stroke="currentColor" strokeOpacity="0.6" />
      <text x="310" y="170" textAnchor="middle" fontSize="11" fontWeight="600">
        SRE team
      </text>
      <text x="310" y="188" textAnchor="middle" fontSize="11">
        Deploy, Monitor, Operate
      </text>
      <text x="310" y="205" textAnchor="middle" fontSize="11" opacity="0.76">
        + SRE tooling
      </text>

      <rect x="416" y="34" width="196" height="40" rx="9" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.5" />
      <text x="514" y="50" textAnchor="middle" fontSize="11" opacity="0.76">
        Product teams
      </text>
      <text x="514" y="66" textAnchor="middle" fontSize="11">
        PM · Dev · Test
      </text>
      <rect x="416" y="80" width="196" height="40" rx="9" fillOpacity="0.28" stroke="currentColor" strokeOpacity="0.6" />
      <text x="514" y="96" textAnchor="middle" fontSize="11" fontWeight="600">
        SRE team
      </text>
      <text x="514" y="112" textAnchor="middle" fontSize="11">
        Deploy, Monitor, Response
      </text>
      <rect x="416" y="126" width="196" height="54" rx="9" fillOpacity="0.16" stroke="currentColor" strokeOpacity="0.5" />
      <text x="514" y="142" textAnchor="middle" fontSize="11" fontWeight="600">
        Platform tooling
      </text>
      <text x="514" y="157" textAnchor="middle" fontSize="11">
        Build, Test, Release
      </text>
      <text x="514" y="172" textAnchor="middle" fontSize="11">
        Deploy, Monitor, Operate
      </text>
      <rect x="416" y="186" width="196" height="28" rx="9" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.5" />
      <text x="514" y="204" textAnchor="middle" fontSize="11">
        Unified infrastructure
      </text>

      <text x="106" y="236" textAnchor="middle" fontSize="11" opacity="0.8">
        ทีมเดียวทำครบทุกขั้น
      </text>
      <text x="106" y="252" textAnchor="middle" fontSize="11" opacity="0.8">
        ใช้แนวปฏิบัติร่วมกัน
      </text>
      <text x="310" y="236" textAnchor="middle" fontSize="11" opacity="0.8">
        ส่งต่อให้ทีม SRE
      </text>
      <text x="310" y="252" textAnchor="middle" fontSize="11" opacity="0.8">
        วัดผลด้วยเป้าที่เป็นตัวเลข
      </text>
      <text x="514" y="236" textAnchor="middle" fontSize="11" opacity="0.8">
        ทีม product หยิบเครื่องมือ
      </text>
      <text x="514" y="252" textAnchor="middle" fontSize="11" opacity="0.8">
        จาก platform ไปใช้เอง
      </text>

      <text x="310" y="286" textAnchor="middle" fontSize="11" opacity="0.78">
        ช่องที่เข้มคือทีมที่รับงาน deploy และดูแลระบบที่รันจริง
      </text>

      <defs>
        <marker id="tm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.65" />
        </marker>
      </defs>
    </svg>
  );
}
