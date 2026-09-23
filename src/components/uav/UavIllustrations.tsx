import React from 'react';

interface QuadplaneProps {
  className?: string;
  isHovering?: boolean; // VTOL motors spinning
  isCruising?: boolean; // Pusher motor spinning & banking
  color?: string;
  scale?: number;
}

export const QuadplaneSVG: React.FC<QuadplaneProps> = ({
  className = '',
  isHovering = true,
  isCruising = false,
  color = '#E65100',
  scale = 1,
}) => {
  return (
    <svg
      viewBox="0 0 320 200"
      className={`${className} transition-transform duration-500`}
      style={{
        transform: `scale(${scale}) ${isCruising ? 'rotate(3deg)' : 'rotate(0deg)'}`,
        filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.3))',
      }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Aerodynamic Fuselage */}
      <path
        d="M 50 100 C 65 92 110 93 250 96 C 265 96.5 275 99 285 100 C 275 101 265 103.5 250 104 C 110 107 65 108 50 100 Z"
        fill="#261E1B"
        stroke="#4A3B35"
        strokeWidth="1.5"
      />

      {/* Front Nose Sensor Gimbal (Dual Optical + Thermal) */}
      <circle cx="48" cy="100" r="8" fill="#17110F" stroke={color} strokeWidth="1.5" />
      <circle cx="46" cy="100" r="3.5" fill="#05DF72" opacity="0.9" />
      <circle cx="51" cy="98" r="2" fill="#E65100" opacity="0.9" />

      {/* Main High-Aspect Aerodynamic Fixed Wings */}
      <path
        d="M 125 100 L 155 18 L 180 20 L 165 100 L 180 180 L 155 182 Z"
        fill="#2A221F"
        stroke="#59463F"
        strokeWidth="1.5"
      />
      {/* Wing Leading Edge Spar Accents */}
      <path d="M 125 100 L 155 18" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 125 100 L 155 182" stroke={color} strokeWidth="2" strokeLinecap="round" />

      {/* Twin Carbon Fiber Booms */}
      {/* Upper Boom */}
      <rect x="90" y="50" width="150" height="4" rx="2" fill="#1A1412" stroke="#44352F" strokeWidth="1" />
      {/* Lower Boom */}
      <rect x="90" y="146" width="150" height="4" rx="2" fill="#1A1412" stroke="#44352F" strokeWidth="1" />

      {/* 4 Dedicated VTOL Motors & Propeller Discs */}
      {/* VTOL 1: Upper Front */}
      <circle cx="102" cy="52" r="5" fill="#3D302B" stroke="#05DF72" strokeWidth="1" />
      <ellipse
        cx="102"
        cy="52"
        rx="22"
        ry="4"
        fill="rgba(230,81,0,0.15)"
        stroke={isHovering ? '#E65100' : 'rgba(255,255,255,0.2)'}
        strokeWidth="1"
        strokeDasharray={isHovering ? '3 3' : 'none'}
        className={isHovering ? 'animate-spin origin-[102px_52px]' : ''}
      />

      {/* VTOL 2: Upper Rear */}
      <circle cx="228" cy="52" r="5" fill="#3D302B" stroke="#05DF72" strokeWidth="1" />
      <ellipse
        cx="228"
        cy="52"
        rx="22"
        ry="4"
        fill="rgba(230,81,0,0.15)"
        stroke={isHovering ? '#E65100' : 'rgba(255,255,255,0.2)'}
        strokeWidth="1"
        strokeDasharray={isHovering ? '3 3' : 'none'}
        className={isHovering ? 'animate-spin origin-[228px_52px]' : ''}
      />

      {/* VTOL 3: Lower Front */}
      <circle cx="102" cy="148" r="5" fill="#3D302B" stroke="#05DF72" strokeWidth="1" />
      <ellipse
        cx="102"
        cy="148"
        rx="22"
        ry="4"
        fill="rgba(230,81,0,0.15)"
        stroke={isHovering ? '#E65100' : 'rgba(255,255,255,0.2)'}
        strokeWidth="1"
        strokeDasharray={isHovering ? '3 3' : 'none'}
        className={isHovering ? 'animate-spin origin-[102px_148px]' : ''}
      />

      {/* VTOL 4: Lower Rear */}
      <circle cx="228" cy="148" r="5" fill="#3D302B" stroke="#05DF72" strokeWidth="1" />
      <ellipse
        cx="228"
        cy="148"
        rx="22"
        ry="4"
        fill="rgba(230,81,0,0.15)"
        stroke={isHovering ? '#E65100' : 'rgba(255,255,255,0.2)'}
        strokeWidth="1"
        strokeDasharray={isHovering ? '3 3' : 'none'}
        className={isHovering ? 'animate-spin origin-[228px_148px]' : ''}
      />

      {/* Inverted V / H-Tail Empennage connecting the twin booms */}
      <path
        d="M 235 52 L 270 98 L 270 102 L 235 148"
        stroke="#4A3B35"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Elevator Stabilizer */}
      <line x1="265" y1="65" x2="265" y2="135" stroke="#3D302B" strokeWidth="2.5" />

      {/* Dedicated Cruise Propulsion Pusher Motor (Rear Fuselage) */}
      <circle cx="282" cy="100" r="5" fill="#17110F" stroke={color} strokeWidth="1.5" />
      <ellipse
        cx="289"
        cy="100"
        rx="3"
        ry="18"
        fill="rgba(5,223,114,0.2)"
        stroke={isCruising ? '#05DF72' : 'rgba(255,255,255,0.2)'}
        strokeWidth="1.2"
        strokeDasharray={isCruising ? '2 2' : 'none'}
      />
      {isCruising && (
        /* Forward thrust vector lines */
        <g opacity="0.6">
          <line x1="298" y1="96" x2="315" y2="94" stroke="#05DF72" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="298" y1="100" x2="318" y2="100" stroke="#05DF72" strokeWidth="1.5" strokeDasharray="4 2" />
          <line x1="298" y1="104" x2="315" y2="106" stroke="#05DF72" strokeWidth="1" strokeDasharray="3 3" />
        </g>
      )}

      {/* High-visibility wing markings */}
      <rect x="156" y="28" width="14" height="4" fill={color} />
      <rect x="156" y="168" width="14" height="4" fill={color} />
      <text x="135" y="103" fill="#A89890" fontSize="7" fontFamily="monospace" fontWeight="bold">
        SILENTRESQ
      </text>
    </svg>
  );
};

export const MultirotorSVG: React.FC<{
  className?: string;
  isHovering?: boolean;
}> = ({ className = '', isHovering = true }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className} transition-transform duration-300`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Hub */}
      <circle cx="100" cy="100" r="18" fill="#2A221F" stroke="#55443D" strokeWidth="2" />
      <circle cx="100" cy="100" r="10" fill="#17110F" />

      {/* 4 Diagonal Carbon Arms */}
      <line x1="100" y1="100" x2="45" y2="45" stroke="#3D302B" strokeWidth="6" strokeLinecap="round" />
      <line x1="100" y1="100" x2="155" y2="45" stroke="#3D302B" strokeWidth="6" strokeLinecap="round" />
      <line x1="100" y1="100" x2="45" y2="155" stroke="#3D302B" strokeWidth="6" strokeLinecap="round" />
      <line x1="100" y1="100" x2="155" y2="155" stroke="#3D302B" strokeWidth="6" strokeLinecap="round" />

      {/* 4 Motors & Heavy Rotor Discs (All battling gravity constantly) */}
      {[
        { cx: 45, cy: 45 },
        { cx: 155, cy: 45 },
        { cx: 45, cy: 155 },
        { cx: 155, cy: 155 },
      ].map((motor, idx) => (
        <g key={idx}>
          <circle cx={motor.cx} cy={motor.cy} r="6" fill="#17110F" stroke="#E65100" strokeWidth="1" />
          <circle
            cx={motor.cx}
            cy={motor.cy}
            r="30"
            fill="rgba(230,81,0,0.12)"
            stroke={isHovering ? '#E65100' : 'rgba(255,255,255,0.2)'}
            strokeWidth="1.2"
            strokeDasharray="4 4"
            className={isHovering ? 'animate-spin origin-center' : ''}
          />
        </g>
      ))}

      {/* Front indicator LED */}
      <circle cx="100" cy="85" r="3" fill="#E65100" />
      <text x="75" y="103" fill="#887770" fontSize="7" fontFamily="monospace">
        MULTIROTOR
      </text>
    </svg>
  );
};
