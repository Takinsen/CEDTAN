// what one docker-compose file leaves running: three services, pinned versions, one private network
export function ComposeResult() {
  return (
    <svg
      viewBox="0 0 600 300"
      role="img"
      aria-label="ผลลัพธ์หลังสั่ง docker compose up: webapp, todo service และ redis ต่อกันบนเครือข่าย todo-net"
      className="mx-auto h-auto w-full min-w-[520px]"
      fill="currentColor"
    >
      <rect
        x="20"
        y="20"
        width="560"
        height="260"
        rx="12"
        fillOpacity="0.04"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeDasharray="7 5"
      />
      <text x="36" y="266" fontSize="12" opacity="0.6">
        Infrastructure
      </text>

      {/* the browser-facing front end */}
      <text x="150" y="62" textAnchor="middle" fontSize="12" opacity="0.7">
        Port: 3000
      </text>
      <rect
        x="70"
        y="72"
        width="160"
        height="52"
        rx="8"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeOpacity="0.45"
      />
      <text x="150" y="103" textAnchor="middle" fontSize="14" fontWeight="600">
        Todo Webapp
      </text>
      <text x="248" y="103" fontSize="12" opacity="0.7">
        todo-webapp:release-1
      </text>

      {/* the API and the database it talks to */}
      <text x="150" y="172" textAnchor="middle" fontSize="12" opacity="0.7">
        Port: 8000
      </text>
      <rect
        x="70"
        y="182"
        width="160"
        height="52"
        rx="8"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeOpacity="0.45"
      />
      <text x="150" y="213" textAnchor="middle" fontSize="14" fontWeight="600">
        Todo Service
      </text>
      <text x="150" y="252" textAnchor="middle" fontSize="11.5" opacity="0.7">
        todo:release-2
      </text>

      <text x="430" y="172" textAnchor="middle" fontSize="12" opacity="0.7">
        Port: 6379
      </text>
      <rect
        x="350"
        y="182"
        width="160"
        height="52"
        rx="8"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeOpacity="0.45"
      />
      <text x="430" y="213" textAnchor="middle" fontSize="14" fontWeight="600">
        Redis
      </text>
      <text x="430" y="252" textAnchor="middle" fontSize="11.5" opacity="0.7">
        redis:7.0.12
      </text>

      {/* the private network the two of them share */}
      <line
        x1="230"
        y1="208"
        x2="344"
        y2="208"
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="1.8"
        markerEnd="url(#compose-arrow)"
      />
      <rect
        x="278"
        y="192"
        width="14"
        height="32"
        rx="3"
        fillOpacity="0.28"
        stroke="currentColor"
        strokeOpacity="0.6"
      />
      <text x="285" y="243" textAnchor="middle" fontSize="12" opacity="0.75">
        todo-net
      </text>

      <defs>
        <marker
          id="compose-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" fillOpacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
}
