import React from 'react';

// 1. Resonant Inductive Coupling Circuit Schematic
export const ResonantCircuitDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 760 260"
      className="w-full max-w-2xl h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Schematic diagram of Series-Series Resonant Inductive Power Link"
    >
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#174A5B" />
        </marker>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      {/* Subtle coordinate grid */}
      <rect width="760" height="260" fill="url(#grid)" />

      {/* Primary Tank Enclosure */}
      <rect x="20" y="20" width="320" height="210" fill="#FAF9F7" stroke="#D9D9D4" strokeDasharray="3 3" />
      <text x="35" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#174A5B" fontWeight="600">
        PRIMARY STAGE (TX) — RESONANT INVERTER
      </text>

      {/* Secondary Tank Enclosure */}
      <rect x="420" y="20" width="320" height="210" fill="#FAF9F7" stroke="#D9D9D4" strokeDasharray="3 3" />
      <text x="435" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#356859" fontWeight="600">
        SECONDARY STAGE (RX) — RECTIFIER & LOAD
      </text>

      {/* Inverter Source Symbol */}
      <circle cx="70" cy="120" r="22" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
      <path d="M 60 120 Q 65 110 70 120 T 80 120" fill="none" stroke="#111111" strokeWidth="1.5" />
      <text x="58" y="156" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#666666">V_in (AC)</text>
      <text x="40" y="170" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B">f_0: VERIFIED VALUE REQUIRED</text>

      {/* Primary Wire Top */}
      <line x1="70" y1="98" x2="70" y2="80" stroke="#111111" strokeWidth="1.5" />
      <line x1="70" y1="80" x2="130" y2="80" stroke="#111111" strokeWidth="1.5" />

      {/* Primary Series Capacitor C1 */}
      <line x1="130" y1="70" x2="130" y2="90" stroke="#111111" strokeWidth="2" />
      <line x1="138" y1="70" x2="138" y2="90" stroke="#111111" strokeWidth="2" />
      <text x="127" y="62" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#111111">C_1</text>
      <text x="100" y="104" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#666666">VERIFIED VALUE REQUIRED</text>

      {/* Resistor R_s1 */}
      <line x1="138" y1="80" x2="175" y2="80" stroke="#111111" strokeWidth="1.5" />
      <rect x="175" y="74" width="30" height="12" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
      <text x="180" y="62" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#111111">R_s1</text>
      <text x="178" y="104" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666">ESR</text>

      {/* Inductor L1 Coils */}
      <line x1="205" y1="80" x2="250" y2="80" stroke="#111111" strokeWidth="1.5" />
      <path d="M 250 80 Q 257 65 264 80 Q 271 65 278 80 Q 285 65 292 80 Q 299 65 306 80" fill="none" stroke="#174A5B" strokeWidth="2.5" />
      <text x="270" y="62" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#174A5B" fontWeight="600">L_1</text>
      <text x="240" y="104" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#666666">VERIFIED VALUE REQUIRED</text>

      {/* Primary Wire Bottom */}
      <line x1="306" y1="80" x2="315" y2="80" stroke="#111111" strokeWidth="1.5" />
      <line x1="315" y1="80" x2="315" y2="180" stroke="#111111" strokeWidth="1.5" />
      <line x1="315" y1="180" x2="70" y2="180" stroke="#111111" strokeWidth="1.5" />
      <line x1="70" y1="180" x2="70" y2="142" stroke="#111111" strokeWidth="1.5" />

      {/* Mutual Coupling Magnetic Field Zone */}
      <path d="M 330 90 Q 370 70 410 90" fill="none" stroke="#174A5B" strokeWidth="1.5" strokeDasharray="3 2" />
      <path d="M 330 115 Q 370 95 410 115" fill="none" stroke="#174A5B" strokeWidth="1.5" strokeDasharray="3 2" />
      <path d="M 330 140 Q 370 120 410 140" fill="none" stroke="#174A5B" strokeWidth="1.5" strokeDasharray="3 2" />
      <text x="350" y="64" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#174A5B" fontWeight="600">M</text>
      <text x="345" y="165" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666">k = M/√(L1 L2)</text>
      <text x="348" y="180" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B">k &gt; k_crit</text>

      {/* Secondary Inductor L2 */}
      <line x1="435" y1="80" x2="445" y2="80" stroke="#111111" strokeWidth="1.5" />
      <path d="M 445 80 Q 452 65 459 80 Q 466 65 473 80 Q 480 65 487 80 Q 494 65 501 80" fill="none" stroke="#356859" strokeWidth="2.5" />
      <text x="465" y="62" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#356859" fontWeight="600">L_2</text>
      <text x="435" y="104" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#666666">VERIFIED VALUE REQUIRED</text>

      {/* Resistor R_s2 */}
      <line x1="501" y1="80" x2="535" y2="80" stroke="#111111" strokeWidth="1.5" />
      <rect x="535" y="74" width="30" height="12" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
      <text x="540" y="62" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#111111">R_s2</text>
      <text x="538" y="104" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666">ESR</text>

      {/* Secondary Series Capacitor C2 */}
      <line x1="565" y1="80" x2="595" y2="80" stroke="#111111" strokeWidth="1.5" />
      <line x1="595" y1="70" x2="595" y2="90" stroke="#111111" strokeWidth="2" />
      <line x1="603" y1="70" x2="603" y2="90" stroke="#111111" strokeWidth="2" />
      <text x="593" y="62" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#111111">C_2</text>
      <text x="570" y="104" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#666666">VERIFIED VALUE REQUIRED</text>

      {/* Load Resistor R_L */}
      <line x1="603" y1="80" x2="680" y2="80" stroke="#111111" strokeWidth="1.5" />
      <line x1="680" y1="80" x2="680" y2="105" stroke="#111111" strokeWidth="1.5" />
      <rect x="674" y="105" width="12" height="40" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
      <text x="696" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#111111" fontWeight="600">R_L</text>
      <text x="696" y="145" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666">Matched Load</text>

      {/* Secondary Wire Bottom */}
      <line x1="680" y1="145" x2="680" y2="180" stroke="#111111" strokeWidth="1.5" />
      <line x1="680" y1="180" x2="435" y2="180" stroke="#111111" strokeWidth="1.5" />
      <line x1="435" y1="180" x2="435" y2="80" stroke="#111111" strokeWidth="1.5" />

      {/* Ground Reference */}
      <line x1="190" y1="180" x2="190" y2="195" stroke="#666666" strokeWidth="1.5" />
      <line x1="182" y1="195" x2="198" y2="195" stroke="#666666" strokeWidth="1.5" />
      <line x1="185" y1="200" x2="195" y2="200" stroke="#666666" strokeWidth="1.5" />
      <line x1="188" y1="205" x2="192" y2="205" stroke="#666666" strokeWidth="1.5" />
      <text x="180" y="220" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8A8A85">GND_TX</text>

      <line x1="550" y1="180" x2="550" y2="195" stroke="#666666" strokeWidth="1.5" />
      <line x1="542" y1="195" x2="558" y2="195" stroke="#666666" strokeWidth="1.5" />
      <line x1="545" y1="200" x2="555" y2="200" stroke="#666666" strokeWidth="1.5" />
      <line x1="548" y1="205" x2="552" y2="205" stroke="#666666" strokeWidth="1.5" />
      <text x="540" y="220" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8A8A85">GND_RX</text>
    </svg>
  );
};

// 2. High-Throughput Telemetry Pipeline Architecture
export const TelemetryArchitectureDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 760 220"
      className="w-full max-w-2xl h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="High-throughput industrial telemetry pipeline architecture diagram"
    >
      <defs>
        <marker id="arrow2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#174A5B" />
        </marker>
      </defs>

      {/* Stage 1: Field Ingestion */}
      <rect x="20" y="30" width="130" height="150" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
      <rect x="20" y="30" width="130" height="24" fill="#F2F2EE" stroke="#D9D9D4" strokeWidth="1" />
      <text x="32" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        STAGE 1: FIELD I/O
      </text>
      <text x="30" y="80" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#333333">• Modbus-TCP</text>
      <text x="30" y="100" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#333333">• DNP3 Polling</text>
      <text x="30" y="120" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#333333">• Syslog 5424</text>
      <text x="30" y="145" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B">50k+ eps bursts</text>

      {/* Arrow 1 -> 2 */}
      <line x1="150" y1="105" x2="195" y2="105" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#arrow2)" />

      {/* Stage 2: Kernel Ring Buffer */}
      <rect x="200" y="30" width="150" height="150" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <rect x="200" y="30" width="150" height="24" fill="#174A5B" />
      <text x="210" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="600">
        STAGE 2: KERNEL BUFFER
      </text>
      <text x="212" y="80" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#333333">SO_RCVBUFFORCE</text>
      <text x="212" y="100" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#333333">64MB Ring Buffer</text>
      <text x="212" y="120" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#333333">AF_PACKET MMAP</text>
      <text x="212" y="145" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#356859">Zero-Copy (0.0% loss)</text>

      {/* Arrow 2 -> 3 */}
      <line x1="350" y1="105" x2="395" y2="105" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#arrow2)" />

      {/* Stage 3: Deterministic Parser */}
      <rect x="400" y="30" width="150" height="150" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
      <rect x="400" y="30" width="150" height="24" fill="#F2F2EE" stroke="#D9D9D4" strokeWidth="1" />
      <text x="410" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        STAGE 3: PARSER
      </text>
      <text x="412" y="80" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#333333">PDU Decoder</text>
      <text x="412" y="100" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#333333">Schema Extraction</text>
      <text x="412" y="120" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#333333">Time Normalization</text>
      <text x="412" y="145" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B">p99 &lt; 5.0ms</text>

      {/* Arrow 3 -> 4 */}
      <line x1="550" y1="105" x2="595" y2="105" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#arrow2)" />

      {/* Stage 4: Analysis & Alerting */}
      <rect x="600" y="30" width="140" height="150" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
      <rect x="600" y="30" width="140" height="24" fill="#F2F2EE" stroke="#D9D9D4" strokeWidth="1" />
      <text x="610" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        STAGE 4: ENGINE
      </text>
      <text x="612" y="80" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#333333">State Estimation</text>
      <text x="612" y="100" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#333333">Anomaly Classifier</text>
      <text x="612" y="120" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#333333">Time-Series Index</text>
      <text x="612" y="145" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#356859">Deterministic Alert</text>
    </svg>
  );
};

// 3. Purdue 4-Tier Industrial Boundary Model
export const PurdueBoundaryDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 760 270"
      className="w-full max-w-2xl h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="IEC 62443 / Purdue reference architecture boundary defense diagram"
    >
      {/* Level 4 */}
      <rect x="30" y="15" width="700" height="42" fill="#FAF9F7" stroke="#D9D9D4" strokeWidth="1.2" />
      <text x="45" y="32" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#8A8A85" fontWeight="600">LEVEL 4: ENTERPRISE NETWORK</text>
      <text x="45" y="47" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111">Corporate WAN · Central IT · Enterprise Analytics</text>
      <text x="580" y="38" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666">UNTRUSTED RELATIVE TO OT</text>

      {/* Demarcation Firewall Line */}
      <line x1="30" y1="68" x2="730" y2="68" stroke="#174A5B" strokeWidth="2" strokeDasharray="4 2" />
      <text x="280" y="65" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B" fontWeight="600">
        ── STATEFUL FIREWALL / IDMZ DEMARCATION ──
      </text>

      {/* Level 3.5 IDMZ */}
      <rect x="30" y="78" width="700" height="46" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <text x="45" y="96" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="600">LEVEL 3.5: INDUSTRIAL DMZ (IDMZ)</text>
      <text x="45" y="112" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#333333">Dual-Homed Bastion Host · MFA Proxy · Jump Box · Data Diode Emulation</text>

      {/* Level 3 SCADA */}
      <rect x="30" y="134" width="700" height="42" fill="#FAF9F7" stroke="#D9D9D4" strokeWidth="1.2" />
      <text x="45" y="151" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#356859" fontWeight="600">LEVEL 3: SITE OPERATIONS / SCADA</text>
      <text x="45" y="166" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111">HMI Consoles · Engineering Workstations · Historian · Alarm Servers</text>

      {/* Level 2 Control */}
      <rect x="30" y="186" width="700" height="38" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.2" />
      <text x="45" y="202" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">LEVEL 2: AREA CONTROL & PLCs</text>
      <text x="45" y="216" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#444444">Programmable Logic Controllers (PLCs) · RTUs · Protection Relays (IEDs)</text>

      {/* Level 1 Field */}
      <rect x="30" y="232" width="700" height="30" fill="#F2F2EE" stroke="#D9D9D4" strokeWidth="1" />
      <text x="45" y="247" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666">
        LEVEL 1 &amp; 0: SENSORS, VOLTAGE TRANSFORMERS, ACTUATORS &amp; PHYSICAL PROCESS BUS
      </text>
    </svg>
  );
};

// 4. Infrastructure Cold-Boot to Active Node Flow
export const InfrastructureBootDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 760 160"
      className="w-full max-w-2xl h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Infrastructure automation state transition diagram"
    >
      <defs>
        <marker id="arrow3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#174A5B" />
        </marker>
      </defs>

      {/* State 1 */}
      <rect x="25" y="35" width="120" height="90" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
      <text x="35" y="55" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#8A8A85">STATE 01</text>
      <text x="35" y="75" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#111111" fontWeight="600">COLD BOOT</text>
      <text x="35" y="95" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">IPMI / PXE DHCP</text>
      <text x="35" y="110" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">MAC Verification</text>

      <line x1="145" y1="80" x2="185" y2="80" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#arrow3)" />

      {/* State 2 */}
      <rect x="190" y="35" width="135" height="90" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
      <text x="200" y="55" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#8A8A85">STATE 02</text>
      <text x="200" y="75" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#111111" fontWeight="600">KERNEL SEED</text>
      <text x="200" y="95" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">iPXE Chainload</text>
      <text x="200" y="110" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">cloud-init Partition</text>

      <line x1="325" y1="80" x2="365" y2="80" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#arrow3)" />

      {/* State 3 */}
      <rect x="370" y="35" width="145" height="90" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <text x="380" y="55" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B">STATE 03</text>
      <text x="380" y="75" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#174A5B" fontWeight="600">ANSIBLE PLAY</text>
      <text x="380" y="95" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#333333">Sysctl Kernel Tune</text>
      <text x="380" y="110" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#333333">SSH / nftables Hardened</text>

      <line x1="515" y1="80" x2="555" y2="80" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#arrow3)" />

      {/* State 4 */}
      <rect x="560" y="35" width="165" height="90" fill="#FFFFFF" stroke="#356859" strokeWidth="1.5" />
      <text x="570" y="55" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#356859">STATE 04</text>
      <text x="570" y="75" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#356859" fontWeight="600">ACTIVE TELEMETRY</text>
      <text x="570" y="95" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#333333">eBPF Probes Attached</text>
      <text x="570" y="110" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#333333">Health-Check Verified</text>
    </svg>
  );
};

// 5. System Interconnection Architecture (Hero Diagram: Power, Networks, Computation, Security, Sensors, Testbeds)
export const SystemInterconnectionDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 680 220"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Systems Interconnection Diagram: Power, Networks, Computation, Security, Sensors, Testbeds"
    >
      <defs>
        <pattern id="heroGrid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
        <marker id="dot" viewBox="0 0 6 6" refX="3" refY="3" markerWidth="4" markerHeight="4">
          <circle cx="3" cy="3" r="2" fill="#174A5B" />
        </marker>
      </defs>

      <rect width="680" height="220" fill="url(#heroGrid)" stroke="#D9D9D4" strokeWidth="1" />

      {/* Top Banner Track */}
      <rect x="0" y="0" width="680" height="20" fill="#F2F2EE" stroke="#D9D9D4" strokeWidth="1" />
      <text x="12" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8A8A85" fontWeight="600" letterSpacing="0.08em">
        SYS-ARCH // CYBER-PHYSICAL INTERCONNECTION TOPOLOGY
      </text>
      <text x="540" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B">
        [DETERMINISTIC COUPLING]
      </text>

      {/* Interconnecting Busses & Channels */}
      <line x1="110" y1="65" x2="230" y2="65" stroke="#D9D9D4" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="350" y1="65" x2="450" y2="65" stroke="#D9D9D4" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="110" y1="165" x2="230" y2="165" stroke="#D9D9D4" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="350" y1="165" x2="450" y2="165" stroke="#D9D9D4" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Vertical Interconnects */}
      <line x1="110" y1="95" x2="110" y2="135" stroke="#174A5B" strokeWidth="1.5" />
      <line x1="290" y1="95" x2="290" y2="135" stroke="#174A5B" strokeWidth="1.5" />
      <line x1="510" y1="95" x2="510" y2="135" stroke="#356859" strokeWidth="1.5" />

      {/* Diagonal Coupling Indicators */}
      <path d="M 160 95 L 240 135" stroke="#D9D9D4" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M 400 95 L 460 135" stroke="#D9D9D4" strokeWidth="1" strokeDasharray="2 2" />

      {/* Node 1: POWER */}
      <g>
        <rect x="50" y="38" width="120" height="56" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
        <rect x="50" y="38" width="120" height="16" fill="#174A5B" />
        <text x="58" y="50" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
          01. POWER
        </text>
        <text x="58" y="70" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
          Grid &amp; Inverters
        </text>
        <text x="58" y="84" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Resonant Tanks (LC)
        </text>
      </g>

      {/* Node 2: NETWORKS */}
      <g>
        <rect x="230" y="38" width="120" height="56" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
        <rect x="230" y="38" width="120" height="16" fill="#F2F2EE" />
        <text x="238" y="50" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
          02. NETWORKS
        </text>
        <text x="238" y="70" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
          Fieldbus Protocol
        </text>
        <text x="238" y="84" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Modbus / DNP3 / IP
        </text>
      </g>

      {/* Node 3: COMPUTATION */}
      <g>
        <rect x="450" y="38" width="120" height="56" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
        <rect x="450" y="38" width="120" height="16" fill="#F2F2EE" />
        <text x="458" y="50" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
          03. COMPUTATION
        </text>
        <text x="458" y="70" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
          State Estimation
        </text>
        <text x="458" y="84" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Zero-Copy Buffers
        </text>
      </g>

      {/* Node 4: SENSORS */}
      <g>
        <rect x="50" y="136" width="120" height="56" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
        <rect x="50" y="136" width="120" height="16" fill="#F2F2EE" />
        <text x="58" y="148" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
          04. SENSORS
        </text>
        <text x="58" y="168" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
          Rogowski / CTs
        </text>
        <text x="58" y="182" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Sub-ms Metrology
        </text>
      </g>

      {/* Node 5: SECURITY */}
      <g>
        <rect x="230" y="136" width="120" height="56" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
        <rect x="230" y="136" width="120" height="16" fill="#174A5B" />
        <text x="238" y="148" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
          05. SECURITY
        </text>
        <text x="238" y="168" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
          Boundary Defense
        </text>
        <text x="238" y="182" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          IEC 62443 Whitelist
        </text>
      </g>

      {/* Node 6: TESTBEDS */}
      <g>
        <rect x="450" y="136" width="120" height="56" fill="#FFFFFF" stroke="#356859" strokeWidth="1.5" />
        <rect x="450" y="136" width="120" height="16" fill="#356859" />
        <text x="458" y="148" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
          06. TESTBEDS
        </text>
        <text x="458" y="168" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
          HIL Validation
        </text>
        <text x="458" y="182" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF">
          GitOps Provisioning
        </text>
      </g>

      {/* Small Coordinate Indicators */}
      <circle cx="110" cy="115" r="2.5" fill="#174A5B" />
      <circle cx="290" cy="115" r="2.5" fill="#174A5B" />
      <circle cx="510" cy="115" r="2.5" fill="#356859" />
    </svg>
  );
};

// 6. Flagship System Architecture Diagram: Resonant Inductive Wireless Power Transmission
// DC INPUT -> SWITCHING DRIVER -> TRANSMITTER LC TANK -> TRANSMITTER COIL )))) AIR GAP (((( RECEIVER COIL -> RECTIFICATION -> LOAD
export const WirelessPowerArchitectureDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 880 320"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="System Architecture Diagram: Resonant Inductive Wireless Power Transmission"
    >
      <defs>
        <marker id="eng-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" fill="#174A5B" />
        </marker>
        <pattern id="diagGrid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      {/* Blueprint Grid Background */}
      <rect width="880" height="320" fill="url(#diagGrid)" />
      <rect width="880" height="320" fill="none" stroke="#D9D9D4" strokeWidth="1" />

      {/* Top Banner Track */}
      <rect x="0" y="0" width="880" height="24" fill="#F2F2EE" stroke="#D9D9D4" strokeWidth="1" />
      <text x="14" y="16" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="600" letterSpacing="0.08em">
        SYS-ARCH // RESONANT INDUCTIVE POWER TRANSMISSION TOPOLOGY
      </text>
      <text x="730" y="16" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8A8A85">
        SPEC: SS-SERIES-SERIES
      </text>

      {/* Transmitter Domain Boundary */}
      <rect x="20" y="40" width="370" height="260" fill="#FFFFFF" fillOpacity="0.8" stroke="#174A5B" strokeWidth="1.2" strokeDasharray="4 2" />
      <text x="32" y="58" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="700">
        TRANSMITTER STAGE (TX)
      </text>

      {/* Receiver Domain Boundary */}
      <rect x="490" y="40" width="370" height="260" fill="#FFFFFF" fillOpacity="0.8" stroke="#356859" strokeWidth="1.2" strokeDasharray="4 2" />
      <text x="502" y="58" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#356859" fontWeight="700">
        RECEIVER STAGE (RX)
      </text>

      {/* Block 1: DC INPUT */}
      <g>
        <rect x="40" y="80" width="130" height="70" fill="#FAF9F7" stroke="#111111" strokeWidth="1.2" />
        <rect x="40" y="80" width="130" height="18" fill="#174A5B" />
        <text x="48" y="93" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
          01. DC INPUT
        </text>
        <text x="50" y="116" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
          V_in = [VALUE] V
        </text>
        <text x="50" y="132" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Regulated Bench Supply
        </text>
      </g>

      {/* Arrow: DC INPUT -> SWITCHING DRIVER */}
      <line x1="105" y1="150" x2="105" y2="190" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#eng-arrow)" />
      <text x="112" y="174" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
        DC BUS
      </text>

      {/* Block 2: SWITCHING DRIVER */}
      <g>
        <rect x="40" y="195" width="130" height="75" fill="#FAF9F7" stroke="#111111" strokeWidth="1.2" />
        <rect x="40" y="195" width="130" height="18" fill="#111111" />
        <text x="48" y="208" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
          02. SWITCHING DRIVER
        </text>
        <text x="50" y="231" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
          ZVS Full/Half Bridge
        </text>
        <text x="50" y="247" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          MOSFET / PWM Timing
        </text>
        <text x="50" y="260" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B">
          f_sw = [VALUE] kHz
        </text>
      </g>

      {/* Arrow: SWITCHING DRIVER -> TRANSMITTER LC TANK */}
      <path d="M 170 232 L 210 232 L 210 135 L 230 135" fill="none" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#eng-arrow)" />
      <text x="180" y="180" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
        HF AC
      </text>

      {/* Block 3: TRANSMITTER LC TANK */}
      <g>
        <rect x="235" y="80" width="135" height="85" fill="#FAF9F7" stroke="#111111" strokeWidth="1.2" />
        <rect x="235" y="80" width="135" height="18" fill="#174A5B" />
        <text x="243" y="93" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
          03. TX LC TANK
        </text>
        <text x="245" y="116" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
          Series Resonant C_1
        </text>
        <text x="245" y="132" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          C_1 = [VALUE] nF
        </text>
        <text x="245" y="148" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B">
          Q_1 = ω_0 L_1 / R_s1
        </text>
      </g>

      {/* Arrow: TRANSMITTER LC TANK -> TRANSMITTER COIL */}
      <line x1="302" y1="165" x2="302" y2="195" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#eng-arrow)" />

      {/* Block 4: TRANSMITTER COIL */}
      <g>
        <rect x="235" y="200" width="135" height="75" fill="#FAF9F7" stroke="#174A5B" strokeWidth="1.5" />
        <rect x="235" y="200" width="135" height="18" fill="#174A5B" />
        <text x="243" y="213" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
          04. TX COIL (L_1)
        </text>
        <text x="245" y="236" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
          Planar Spiral Coil
        </text>
        <text x="245" y="252" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          L_1 = [VALUE] µH
        </text>
        <text x="245" y="265" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B">
          B-Field Radiator
        </text>
      </g>

      {/* AIR GAP COUPLING ZONE (MIDDLE) */}
      <g>
        <rect x="400" y="40" width="80" height="260" fill="#FAF9F7" stroke="#D9D9D4" strokeDasharray="3 3" />
        
        {/* Magnetic Field Flux Curves )))) (((( */}
        <path d="M 420 110 Q 440 90 420 70" fill="none" stroke="#174A5B" strokeWidth="1.8" />
        <path d="M 428 120 Q 452 90 428 60" fill="none" stroke="#174A5B" strokeWidth="1.8" />
        <path d="M 436 130 Q 464 90 436 50" fill="none" stroke="#174A5B" strokeWidth="1.8" />

        <path d="M 460 110 Q 440 90 460 70" fill="none" stroke="#356859" strokeWidth="1.8" />
        <path d="M 452 120 Q 428 90 452 60" fill="none" stroke="#356859" strokeWidth="1.8" />
        <path d="M 444 130 Q 416 90 444 50" fill="none" stroke="#356859" strokeWidth="1.8" />

        {/* Labels in Air Gap */}
        <text x="440" y="160" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="700" textAnchor="middle">
          AIR GAP (d)
        </text>
        <text x="440" y="178" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B" textAnchor="middle" fontWeight="600">
          [VALUE] mm
        </text>
        <text x="440" y="200" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666" textAnchor="middle">
          MUTUAL LINK
        </text>
        <text x="440" y="214" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111" textAnchor="middle">
          M = k√(L1 L2)
        </text>
        <text x="440" y="235" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85" textAnchor="middle">
          k = [VALUE]
        </text>
        
        {/* Double directional coupling arrow */}
        <line x1="375" y1="237" x2="505" y2="237" stroke="#174A5B" strokeWidth="1.5" strokeDasharray="2 2" markerEnd="url(#eng-arrow)" />
      </g>

      {/* Block 5: RECEIVER COIL */}
      <g>
        <rect x="510" y="200" width="135" height="75" fill="#FAF9F7" stroke="#356859" strokeWidth="1.5" />
        <rect x="510" y="200" width="135" height="18" fill="#356859" />
        <text x="518" y="213" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
          05. RX COIL (L_2)
        </text>
        <text x="520" y="236" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
          Planar Pickup Coil
        </text>
        <text x="520" y="252" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          L_2 = [VALUE] µH
        </text>
        <text x="520" y="265" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859">
          Induced EMF (Faraday)
        </text>
      </g>

      {/* Arrow: RECEIVER COIL -> RECEIVER LC TANK */}
      <line x1="577" y1="200" x2="577" y2="170" stroke="#356859" strokeWidth="1.5" markerEnd="url(#eng-arrow)" />

      {/* Block 5B: RECEIVER LC TANK */}
      <g>
        <rect x="510" y="80" width="135" height="85" fill="#FAF9F7" stroke="#111111" strokeWidth="1.2" />
        <rect x="510" y="80" width="135" height="18" fill="#356859" />
        <text x="518" y="93" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
          05B. RX LC TANK
        </text>
        <text x="520" y="116" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
          Series Resonant C_2
        </text>
        <text x="520" y="132" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          C_2 = [VALUE] nF
        </text>
        <text x="520" y="148" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859">
          f_0 = 1 / (2π√L2 C2)
        </text>
      </g>

      {/* Arrow: RX LC TANK -> RECTIFICATION */}
      <path d="M 645 122 L 675 122" fill="none" stroke="#356859" strokeWidth="1.5" markerEnd="url(#eng-arrow)" />
      <text x="648" y="114" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
        AC_RX
      </text>

      {/* Block 6: RECTIFICATION */}
      <g>
        <rect x="685" y="80" width="140" height="85" fill="#FAF9F7" stroke="#111111" strokeWidth="1.2" />
        <rect x="685" y="80" width="140" height="18" fill="#111111" />
        <text x="693" y="93" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
          06. RECTIFICATION
        </text>
        <text x="695" y="116" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
          Fast Schottky Bridge
        </text>
        <text x="695" y="132" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Capacitive Filter C_filt
        </text>
        <text x="695" y="148" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859">
          Low-Vf Drop Diodes
        </text>
      </g>

      {/* Arrow: RECTIFICATION -> LOAD */}
      <line x1="755" y1="165" x2="755" y2="195" stroke="#356859" strokeWidth="1.5" markerEnd="url(#eng-arrow)" />
      <text x="762" y="184" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
        DC OUT
      </text>

      {/* Block 7: LOAD */}
      <g>
        <rect x="685" y="200" width="140" height="75" fill="#FAF9F7" stroke="#356859" strokeWidth="1.5" />
        <rect x="685" y="200" width="140" height="18" fill="#356859" />
        <text x="693" y="213" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
          07. LOAD RESISTOR
        </text>
        <text x="695" y="236" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
          R_L = [VALUE] Ω
        </text>
        <text x="695" y="252" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          P_out = V_out² / R_L
        </text>
        <text x="695" y="265" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B">
          η = P_out / P_in
        </text>
      </g>
    </svg>
  );
};

// 7. Scientific Measurement Plot: Figure 01 - Oscilloscope Waveform (ZVS Switching Resonant Transition)
export const Figure01OscilloscopeWaveform: React.FC = () => {
  return (
    <svg
      viewBox="0 0 680 320"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Figure 01: Oscilloscope waveform showing zero-voltage switching drain voltage and gate drive"
    >
      <defs>
        <pattern id="scopeGraticule" width="40" height="30" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 30" fill="none" stroke="#2A3B32" strokeWidth="0.75" strokeDasharray="1 2" />
        </pattern>
      </defs>

      {/* Bezel */}
      <rect width="680" height="320" fill="#121A16" rx="4" />
      <rect x="8" y="8" width="664" height="304" fill="#0C1410" stroke="#2D4638" strokeWidth="1.5" />

      {/* Screen Header Track */}
      <rect x="8" y="8" width="664" height="26" fill="#16241D" />
      <text x="20" y="24" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#58A67B" fontWeight="600">
        DSO-TEKTRONIX // CH1: V_DS (TX DRAIN)  CH2: V_GS (GATE DRIVE)
      </text>
      <text x="500" y="24" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#A8D5BA">
        TB: 1.00 µs/div · TRIG: EDGE CH2
      </text>

      {/* Oscilloscope Screen Grid */}
      <rect x="30" y="45" width="620" height="240" fill="url(#scopeGraticule)" stroke="#3D5A48" strokeWidth="1" />
      {/* Center crosshairs */}
      <line x1="30" y1="165" x2="650" y2="165" stroke="#4C705B" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="340" y1="45" x2="340" y2="285" stroke="#4C705B" strokeWidth="1" strokeDasharray="3 3" />

      {/* CH1 Resonant Half-Sinusoid Waveform (V_DS across switch during off-state) */}
      <path
        d="M 40 220 
           L 110 220 
           C 115 220, 130 65, 170 65 
           C 210 65, 225 220, 230 220 
           L 290 220 
           C 295 220, 310 65, 350 65 
           C 390 65, 405 220, 410 220 
           L 470 220 
           C 475 220, 490 65, 530 65 
           C 570 65, 585 220, 590 220 
           L 640 220"
        fill="none"
        stroke="#E8FF59"
        strokeWidth="2.2"
      />

      {/* CH2 Gate PWM Pulse Waveform (V_GS) */}
      <path
        d="M 40 260 
           L 100 260 L 100 230 L 220 230 L 220 260 
           L 280 260 L 280 230 L 400 230 L 400 260 
           L 460 260 L 460 230 L 580 230 L 580 260 
           L 640 260"
        fill="none"
        stroke="#39D6FF"
        strokeWidth="1.8"
      />

      {/* ZVS Turn-On Callout Marker */}
      <circle cx="230" cy="220" r="4" fill="none" stroke="#FF4D4D" strokeWidth="1.5" />
      <line x1="230" y1="220" x2="230" y2="185" stroke="#FF4D4D" strokeWidth="1" strokeDasharray="2 2" />
      <rect x="175" y="160" width="110" height="22" fill="#1C0D0D" stroke="#FF4D4D" strokeWidth="1" />
      <text x="180" y="174" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FF8080" fontWeight="600">
        ZVS: V_DS = 0V at ON
      </text>

      {/* On-screen measurements readout */}
      <rect x="40" y="52" width="220" height="52" fill="#0E1712" fillOpacity="0.85" stroke="#3D5A48" strokeWidth="1" />
      <text x="48" y="66" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#E8FF59" fontWeight="600">
        CH1 V_pk-pk: VERIFIED VALUE REQUIRED
      </text>
      <text x="48" y="80" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#39D6FF">
        CH2 V_max:   VERIFIED VALUE REQUIRED
      </text>
      <text x="48" y="94" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#A8D5BA">
        Period (T):  VERIFIED VALUE REQUIRED
      </text>

      {/* Footer frequency readout */}
      <text x="360" y="278" fontFamily="IBM Plex Mono, monospace" fontSize="8.5" fill="#58A67B">
        f_meas = 1/T: VERIFIED VALUE REQUIRED
      </text>
    </svg>
  );
};

// 8. Scientific Measurement Plot: Figure 02 - Efficiency vs Air Gap
export const Figure02EfficiencyAirGapPlot: React.FC = () => {
  return (
    <svg
      viewBox="0 0 680 320"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Figure 02: Transmission Efficiency vs Air Gap Distance curve"
    >
      <defs>
        <pattern id="plotGrid" width="40" height="30" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 30" fill="none" stroke="#EDEDEA" strokeWidth="0.75" />
        </pattern>
      </defs>

      {/* White background */}
      <rect width="680" height="320" fill="#FFFFFF" />
      <rect width="680" height="320" fill="none" stroke="#D9D9D4" strokeWidth="1" />

      {/* Plot Title */}
      <text x="60" y="26" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#111111" fontWeight="700">
        FIG. 02: DC-TO-DC POWER TRANSFER EFFICIENCY (η) vs. AIR GAP DISTANCE (d)
      </text>
      <text x="60" y="40" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666">
        R_L = [VALUE] Ω (Matched) · f_0 = [VALUE] kHz · Measured vs. Analytical Coupled-Mode Model
      </text>

      {/* Plot Area */}
      <g transform="translate(60, 55)">
        {/* Grid */}
        <rect width="560" height="210" fill="url(#plotGrid)" stroke="#D9D9D4" strokeWidth="1" />

        {/* Y Axis Grid lines & labels (Efficiency %) */}
        <text x="-10" y="10" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666" textAnchor="end">100%</text>
        <text x="-10" y="52" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666" textAnchor="end">80%</text>
        <text x="-10" y="94" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666" textAnchor="end">60%</text>
        <text x="-10" y="136" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666" textAnchor="end">40%</text>
        <text x="-10" y="178" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666" textAnchor="end">20%</text>
        <text x="-10" y="215" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666" textAnchor="end">0%</text>

        <line x1="0" y1="42" x2="560" y2="42" stroke="#EBEBE6" strokeWidth="1" />
        <line x1="0" y1="84" x2="560" y2="84" stroke="#EBEBE6" strokeWidth="1" />
        <line x1="0" y1="126" x2="560" y2="126" stroke="#EBEBE6" strokeWidth="1" />
        <line x1="0" y1="168" x2="560" y2="168" stroke="#EBEBE6" strokeWidth="1" />

        {/* X Axis labels (Air gap mm) */}
        <text x="0" y="226" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666" textAnchor="middle">0</text>
        <text x="112" y="226" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666" textAnchor="middle">10</text>
        <text x="224" y="226" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666" textAnchor="middle">20</text>
        <text x="336" y="226" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666" textAnchor="middle">30</text>
        <text x="448" y="226" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666" textAnchor="middle">40</text>
        <text x="560" y="226" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666" textAnchor="middle">50 mm</text>

        {/* Critical Distance Boundary */}
        <line x1="280" y1="0" x2="280" y2="210" stroke="#174A5B" strokeWidth="1" strokeDasharray="3 3" />
        <rect x="285" y="10" width="130" height="32" fill="#FAF9F7" stroke="#174A5B" strokeWidth="1" />
        <text x="290" y="23" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
          d_crit = [VALUE] mm
        </text>
        <text x="290" y="36" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Critical Coupling k_crit
        </text>

        {/* Theoretical Analytical Model Curve (Solid Teal Line) */}
        <path
          d="M 0 35 
             C 60 36, 140 38, 220 44 
             C 270 50, 310 65, 360 110 
             C 420 160, 480 190, 560 200"
          fill="none"
          stroke="#174A5B"
          strokeWidth="2.5"
        />

        {/* Measured Laboratory Data Points (Placeholders indicated) with Error Bars */}
        {[
          { x: 20, y: 36, label: '[VAL 1]' },
          { x: 80, y: 37, label: '[VAL 2]' },
          { x: 140, y: 39, label: '[VAL 3]' },
          { x: 200, y: 43, label: '[VAL 4]' },
          { x: 260, y: 52, label: '[VAL 5]' },
          { x: 320, y: 82, label: '[VAL 6]' },
          { x: 380, y: 125, label: '[VAL 7]' },
          { x: 440, y: 168, label: '[VAL 8]' },
          { x: 500, y: 192, label: '[VAL 9]' }
        ].map((pt, idx) => (
          <g key={idx}>
            {/* Error bar */}
            <line x1={pt.x} y1={pt.y - 6} x2={pt.x} y2={pt.y + 6} stroke="#356859" strokeWidth="1.2" />
            <line x1={pt.x - 3} y1={pt.y - 6} x2={pt.x + 3} y2={pt.y - 6} stroke="#356859" strokeWidth="1.2" />
            <line x1={pt.x - 3} y1={pt.y + 6} x2={pt.x + 3} y2={pt.y + 6} stroke="#356859" strokeWidth="1.2" />
            {/* Square data marker */}
            <rect x={pt.x - 3.5} y={pt.y - 3.5} width="7" height="7" fill="#FFFFFF" stroke="#356859" strokeWidth="1.5" />
          </g>
        ))}

        {/* Legend Box */}
        <rect x="420" y="10" width="130" height="42" fill="#FAF9F7" stroke="#D9D9D4" strokeWidth="1" />
        <line x1="428" y1="22" x2="448" y2="22" stroke="#174A5B" strokeWidth="2.5" />
        <text x="454" y="25" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111">Analytical Model</text>
        <rect x="432" y="32" width="6" height="6" fill="#FFFFFF" stroke="#356859" strokeWidth="1.5" />
        <text x="454" y="38" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111">Measured Lab Points</text>
      </g>
    </svg>
  );
};

// 9. Scientific Measurement Plot: Figure 03 - Frequency Response & Bifurcation
export const Figure03FrequencyResponsePlot: React.FC = () => {
  return (
    <svg
      viewBox="0 0 680 320"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Figure 03: Frequency Response showing resonance bifurcation phenomena"
    >
      <defs>
        <pattern id="freqGrid" width="40" height="30" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 30" fill="none" stroke="#EDEDEA" strokeWidth="0.75" />
        </pattern>
      </defs>

      <rect width="680" height="320" fill="#FFFFFF" />
      <rect width="680" height="320" fill="none" stroke="#D9D9D4" strokeWidth="1" />

      {/* Plot Title */}
      <text x="60" y="26" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#111111" fontWeight="700">
        FIG. 03: FREQUENCY BIFURCATION (TRANSMITTED POWER vs. OPERATING FREQUENCY)
      </text>
      <text x="60" y="40" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666">
        Comparison of Over-Coupled (k &gt; k_crit), Critically-Coupled (k = k_crit), and Under-Coupled (k &lt; k_crit) States
      </text>

      <g transform="translate(60, 55)">
        <rect width="560" height="210" fill="url(#freqGrid)" stroke="#D9D9D4" strokeWidth="1" />

        {/* Center line (Resonant Frequency f0) */}
        <line x1="280" y1="0" x2="280" y2="210" stroke="#111111" strokeWidth="1" strokeDasharray="3 3" />
        <text x="280" y="226" fontFamily="IBM Plex Mono, monospace" fontSize="8.5" fill="#111111" textAnchor="middle" fontWeight="600">
          f_0: VERIFIED VALUE REQUIRED
        </text>

        {/* Left and right frequency bounds */}
        <text x="60" y="226" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666" textAnchor="middle">f_0 - Δf</text>
        <text x="500" y="226" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#666666" textAnchor="middle">f_0 + Δf</text>

        {/* Curve 1: Over-coupled state (bifurcation double peak) */}
        <path
          d="M 20 200 
             C 80 195, 120 160, 160 50 
             C 180 20, 200 60, 240 100 
             C 280 120, 320 100, 360 60 
             C 400 20, 420 160, 460 195 
             L 540 200"
          fill="none"
          stroke="#174A5B"
          strokeWidth="2.5"
        />

        {/* Curve 2: Critically coupled state (maximum single flat peak at f0) */}
        <path
          d="M 40 200 
             C 140 198, 200 120, 250 40 
             C 270 25, 290 25, 310 40 
             C 360 120, 420 198, 520 200"
          fill="none"
          stroke="#356859"
          strokeWidth="2"
          strokeDasharray="4 2"
        />

        {/* Curve 3: Under-coupled state (single low peak at f0) */}
        <path
          d="M 60 200 
             C 160 199, 220 170, 260 130 
             C 275 118, 285 118, 300 130 
             C 340 170, 400 199, 500 200"
          fill="none"
          stroke="#8A8A85"
          strokeWidth="1.5"
        />

        {/* Peak Callout Labels */}
        <text x="160" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600" textAnchor="middle">
          f_L (Odd Mode)
        </text>
        <text x="400" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600" textAnchor="middle">
          f_H (Even Mode)
        </text>

        {/* Legend */}
        <rect x="20" y="15" width="165" height="60" fill="#FAF9F7" stroke="#D9D9D4" strokeWidth="1" />
        <line x1="28" y1="30" x2="48" y2="30" stroke="#174A5B" strokeWidth="2.5" />
        <text x="54" y="33" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111">Over-Coupled (k &gt; k_crit)</text>
        
        <line x1="28" y1="46" x2="48" y2="46" stroke="#356859" strokeWidth="2" strokeDasharray="3 2" />
        <text x="54" y="49" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111">Critical (k = k_crit)</text>
        
        <line x1="28" y1="62" x2="48" y2="62" stroke="#8A8A85" strokeWidth="1.5" />
        <text x="54" y="65" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111">Under-Coupled (k &lt; k_crit)</text>
      </g>
    </svg>
  );
};

// 10. Scientific Measurement Plot: Figure 04 - Experimental Setup Benchtop Layout
export const Figure04ExperimentalSetupSchematic: React.FC = () => {
  return (
    <svg
      viewBox="0 0 680 340"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Figure 04: Laboratory Benchtop Experimental Setup Layout"
    >
      <defs>
        <pattern id="benchGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="680" height="340" fill="#FAF9F7" />
      <rect width="680" height="340" fill="none" stroke="#D9D9D4" strokeWidth="1" />

      {/* Header bar */}
      <rect x="0" y="0" width="680" height="24" fill="#F2F2EE" stroke="#D9D9D4" strokeWidth="1" />
      <text x="12" y="16" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        FIG. 04: LABORATORY EXPERIMENTAL BENCHTOP SETUP &amp; INSTRUMENTATION
      </text>
      <text x="530" y="16" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8A8A85">
        CALIBRATED RIG // REV 2.4
      </text>

      {/* Bench Surface */}
      <rect x="20" y="40" width="640" height="280" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1" />

      {/* 1. DC Power Supply */}
      <g>
        <rect x="40" y="60" width="130" height="85" fill="#FAF9F7" stroke="#111111" strokeWidth="1.2" />
        <rect x="40" y="60" width="130" height="18" fill="#174A5B" />
        <text x="48" y="73" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
          [01] DC POWER SUPPLY
        </text>
        <text x="50" y="96" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
          Regulated 0–60V / 10A
        </text>
        <circle cx="60" cy="115" r="5" fill="#FF4D4D" />
        <circle cx="80" cy="115" r="5" fill="#111111" />
        <text x="95" y="118" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          V_in Sensing
        </text>
      </g>

      {/* 2. ZVS Inverter PCB */}
      <g>
        <rect x="40" y="180" width="130" height="110" fill="#FAF9F7" stroke="#174A5B" strokeWidth="1.5" />
        <rect x="40" y="180" width="130" height="18" fill="#174A5B" />
        <text x="48" y="193" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
          [02] INVERTER / DRIVER
        </text>
        <text x="50" y="215" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111">
          Dual MOSFET ZVS Bridge
        </text>
        <text x="50" y="230" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Heatsink &amp; Poly Cap Bank
        </text>
        <text x="50" y="250" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B">
          Series Cap C_1
        </text>
        <text x="50" y="270" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
          Trigger Sync Out
        </text>
      </g>

      {/* Wire from Supply to Driver */}
      <line x1="105" y1="145" x2="105" y2="180" stroke="#FF4D4D" strokeWidth="1.5" />

      {/* 3. Transmitter Coil & Micrometer Slide */}
      <g>
        <rect x="220" y="160" width="80" height="135" fill="#FAF9F7" stroke="#174A5B" strokeWidth="1.5" />
        <rect x="220" y="160" width="80" height="18" fill="#174A5B" />
        <text x="226" y="173" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
          [03] TX COIL L1
        </text>
        {/* Spiral representation */}
        <circle cx="260" cy="225" r="30" fill="none" stroke="#174A5B" strokeWidth="2" strokeDasharray="3 2" />
        <circle cx="260" cy="225" r="20" fill="none" stroke="#174A5B" strokeWidth="2" />
        <circle cx="260" cy="225" r="10" fill="none" stroke="#174A5B" strokeWidth="2" />
        <text x="230" y="280" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111">
          Fixed Stage
        </text>
      </g>

      {/* Cable from Driver to TX Coil */}
      <line x1="170" y1="235" x2="220" y2="235" stroke="#111111" strokeWidth="2" />

      {/* 4. Optical/Micrometer Air Gap Rail */}
      <g>
        <rect x="220" y="295" width="220" height="14" fill="#D9D9D4" stroke="#8A8A85" strokeWidth="1" />
        <text x="330" y="306" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111" textAnchor="middle" fontWeight="600">
          CALIBRATED MICROMETER SLIDE (0.1 mm RESOLUTION)
        </text>
      </g>

      {/* 5. Receiver Coil & Movable Stage */}
      <g>
        <rect x="360" y="160" width="80" height="135" fill="#FAF9F7" stroke="#356859" strokeWidth="1.5" />
        <rect x="360" y="160" width="80" height="18" fill="#356859" />
        <text x="366" y="173" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
          [04] RX COIL L2
        </text>
        {/* Spiral representation */}
        <circle cx="400" cy="225" r="30" fill="none" stroke="#356859" strokeWidth="2" strokeDasharray="3 2" />
        <circle cx="400" cy="225" r="20" fill="none" stroke="#356859" strokeWidth="2" />
        <circle cx="400" cy="225" r="10" fill="none" stroke="#356859" strokeWidth="2" />
        <text x="370" y="280" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111">
          Movable Stage
        </text>
      </g>

      {/* Air Gap Dimension Label */}
      <line x1="300" y1="225" x2="360" y2="225" stroke="#111111" strokeWidth="1.2" />
      <line x1="300" y1="215" x2="300" y2="235" stroke="#111111" strokeWidth="1" />
      <line x1="360" y1="215" x2="360" y2="235" stroke="#111111" strokeWidth="1" />
      <text x="330" y="220" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" textAnchor="middle" fontWeight="600">
        GAP d
      </text>

      {/* 6. Rectifier & Load Unit */}
      <g>
        <rect x="490" y="180" width="140" height="110" fill="#FAF9F7" stroke="#356859" strokeWidth="1.5" />
        <rect x="490" y="180" width="140" height="18" fill="#356859" />
        <text x="498" y="193" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
          [05] RECTIFIER &amp; LOAD
        </text>
        <text x="500" y="215" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111">
          Schottky Bridge + C_2
        </text>
        <text x="500" y="230" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Ceramic Non-Inductive Load
        </text>
        <text x="500" y="250" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859">
          R_L = [VALUE] Ω
        </text>
        <text x="500" y="270" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
          Current Shunt Resistor
        </text>
      </g>

      {/* Cable RX Coil to Rectifier */}
      <line x1="440" y1="235" x2="490" y2="235" stroke="#111111" strokeWidth="2" />

      {/* 7. Tektronix 4-Channel DSO */}
      <g>
        <rect x="220" y="60" width="200" height="85" fill="#FAF9F7" stroke="#111111" strokeWidth="1.2" />
        <rect x="220" y="60" width="200" height="18" fill="#111111" />
        <text x="228" y="73" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
          [06] TEKTRONIX 4-CH 200MHz DSO
        </text>
        <rect x="230" y="86" width="100" height="50" fill="#16241D" stroke="#3D5A48" strokeWidth="1" />
        {/* Tiny wave on scope */}
        <path d="M 235 110 Q 245 95 255 110 T 275 110 T 295 110 T 315 110" fill="none" stroke="#E8FF59" strokeWidth="1" />
        <text x="340" y="98" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111">
          Probe 1: V_DS
        </text>
        <text x="340" y="112" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111">
          Probe 2: V_GS
        </text>
        <text x="340" y="126" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111">
          Diff: V_out (Load)
        </text>
      </g>

      {/* 8. Precision Power Analyzer / Multimeter */}
      <g>
        <rect x="450" y="60" width="180" height="85" fill="#FAF9F7" stroke="#111111" strokeWidth="1.2" />
        <rect x="450" y="60" width="180" height="18" fill="#174A5B" />
        <text x="458" y="73" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
          [07] POWER ANALYZER / LCR
        </text>
        <text x="460" y="98" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B" fontWeight="600">
          η = [VALUE] %
        </text>
        <text x="460" y="114" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          True RMS Volts &amp; Amperes
        </text>
        <text x="460" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
          Precision Shunt Ingestion
        </text>
      </g>

      {/* Scope Probe Leads */}
      <path d="M 235 136 C 210 160, 180 180, 170 200" fill="none" stroke="#E8FF59" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M 330 136 C 370 150, 480 170, 500 200" fill="none" stroke="#39D6FF" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
};

// 11. Systems Architecture Diagram: SIEM & Telemetry
// Linux Nodes -> Log Collection -> Wazuh -> Event Processing -> Grafana / Telemetry
export const SiemTelemetryDataflowDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 880 260"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Systems Architecture Diagram: SIEM & Telemetry Pipeline"
    >
      <defs>
        <marker id="siem-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" fill="#174A5B" />
        </marker>
        <pattern id="siemGrid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="880" height="260" fill="url(#siemGrid)" />
      <rect width="880" height="260" fill="none" stroke="#D9D9D4" strokeWidth="1" />

      {/* Top Banner Track */}
      <rect x="0" y="0" width="880" height="24" fill="#F2F2EE" stroke="#D9D9D4" strokeWidth="1" />
      <text x="14" y="16" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="600" letterSpacing="0.08em">
        DATA-FLOW // DISTRIBUTED LINUX TELEMETRY &amp; SIEM EVENT PROCESSING
      </text>
      <text x="730" y="16" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8A8A85">
        INGESTION &gt; 50k EPS
      </text>

      {/* 5-Stage Pipeline Container */}
      <g transform="translate(20, 45)">
        {/* Step 1: Linux Nodes */}
        <g transform="translate(0, 0)">
          <rect width="145" height="175" fill="#FFFFFF" stroke="#111111" strokeWidth="1.2" />
          <rect width="145" height="22" fill="#111111" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            01. LINUX NODES
          </text>
          <text x="12" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
            Distributed Hosts
          </text>
          <text x="12" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Auditd / Syslog / Auth
          </text>
          <text x="12" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Kernel ebpf / Socket Dumps
          </text>
          <text x="12" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            SCADA Fieldbus Gateways
          </text>
          <rect x="10" y="115" width="125" height="42" fill="#FAF9F7" stroke="#D9D9D4" strokeWidth="1" />
          <text x="16" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            Local Spooling
          </text>
          <text x="16" y="144" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
            Non-blocking ring buf
          </text>
        </g>

        {/* Arrow 1 -> 2 */}
        <line x1="145" y1="88" x2="175" y2="88" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#siem-arrow)" />

        {/* Step 2: Log Collection */}
        <g transform="translate(175, 0)">
          <rect width="145" height="175" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.2" />
          <rect width="145" height="22" fill="#174A5B" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            02. LOG COLLECTION
          </text>
          <text x="12" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
            Lightweight Agents
          </text>
          <text x="12" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Wazuh Agent / Fluentbit
          </text>
          <text x="12" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            TLS Mutual Auth (mTLS)
          </text>
          <text x="12" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Backpressure Throttling
          </text>
          <rect x="10" y="115" width="125" height="42" fill="#FAF9F7" stroke="#D9D9D4" strokeWidth="1" />
          <text x="16" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            Wire Compression
          </text>
          <text x="16" y="144" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
            GZIP stream encryption
          </text>
        </g>

        {/* Arrow 2 -> 3 */}
        <line x1="320" y1="88" x2="350" y2="88" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#siem-arrow)" />

        {/* Step 3: Wazuh Server / Cluster */}
        <g transform="translate(350, 0)">
          <rect width="145" height="175" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
          <rect width="145" height="22" fill="#174A5B" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            03. WAZUH MANAGER
          </text>
          <text x="12" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
            Detection Engine
          </text>
          <text x="12" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Analysisd Core Daemon
          </text>
          <text x="12" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Rule Correlation
          </text>
          <text x="12" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Rootcheck &amp; Syscheck (FIM)
          </text>
          <rect x="10" y="115" width="125" height="42" fill="#FAF9F7" stroke="#D9D9D4" strokeWidth="1" />
          <text x="16" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            MITRE ATT&amp;CK
          </text>
          <text x="16" y="144" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
            Rule ID Categorization
          </text>
        </g>

        {/* Arrow 3 -> 4 */}
        <line x1="495" y1="88" x2="525" y2="88" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#siem-arrow)" />

        {/* Step 4: Event Processing / Queue */}
        <g transform="translate(525, 0)">
          <rect width="145" height="175" fill="#FFFFFF" stroke="#356859" strokeWidth="1.2" />
          <rect width="145" height="22" fill="#356859" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            04. EVENT PROCESSING
          </text>
          <text x="12" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
            Indexer &amp; Normalizer
          </text>
          <text x="12" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Wazuh-Indexer / OpenSearch
          </text>
          <text x="12" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            JSON Field Extraction
          </text>
          <text x="12" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            GeoIP &amp; ASN Enrichment
          </text>
          <rect x="10" y="115" width="125" height="42" fill="#FAF9F7" stroke="#D9D9D4" strokeWidth="1" />
          <text x="16" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="600">
            Sharded Storage
          </text>
          <text x="16" y="144" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
            Retention &amp; Index Roll
          </text>
        </g>

        {/* Arrow 4 -> 5 */}
        <line x1="670" y1="88" x2="700" y2="88" stroke="#356859" strokeWidth="1.5" markerEnd="url(#siem-arrow)" />

        {/* Step 5: Grafana / Telemetry Visualization */}
        <g transform="translate(700, 0)">
          <rect width="140" height="175" fill="#FFFFFF" stroke="#356859" strokeWidth="1.5" />
          <rect width="140" height="22" fill="#356859" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            05. GRAFANA / TELEMETRY
          </text>
          <text x="12" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
            Real-Time Dashboards
          </text>
          <text x="12" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Security Incident Triage
          </text>
          <text x="12" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Substation Network Status
          </text>
          <text x="12" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Threshold Alerting
          </text>
          <rect x="10" y="115" width="120" height="42" fill="#FAF9F7" stroke="#D9D9D4" strokeWidth="1" />
          <text x="16" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="600">
            Operational Telemetry
          </text>
          <text x="16" y="144" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
            Sub-second refresh
          </text>
        </g>
      </g>
    </svg>
  );
};

// 12. Systems Architecture Diagram: Perimeter Security & Reverse Proxy
// INTERNET -> NGINX -> RATE LIMITING -> TLS / SECURITY -> APPLICATION
export const PerimeterSecurityDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 880 260"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Systems Architecture Diagram: Perimeter Security & Reverse Proxy"
    >
      <defs>
        <marker id="perim-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" fill="#174A5B" />
        </marker>
        <pattern id="perimGrid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="880" height="260" fill="url(#perimGrid)" />
      <rect width="880" height="260" fill="none" stroke="#D9D9D4" strokeWidth="1" />

      {/* Top Banner Track */}
      <rect x="0" y="0" width="880" height="24" fill="#F2F2EE" stroke="#D9D9D4" strokeWidth="1" />
      <text x="14" y="16" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="600" letterSpacing="0.08em">
        SYS-ARCH // REVERSE PROXY &amp; PERIMETER HARDENING TOPOLOGY
      </text>
      <text x="730" y="16" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8A8A85">
        A+ TLS / WAF ISOLATION
      </text>

      {/* 5-Stage Pipeline Container */}
      <g transform="translate(20, 45)">
        {/* Step 1: Internet / Untrusted Traffic */}
        <g transform="translate(0, 0)">
          <rect width="145" height="175" fill="#FFFFFF" stroke="#111111" strokeWidth="1.2" />
          <rect width="145" height="22" fill="#111111" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            01. INTERNET
          </text>
          <text x="12" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
            Untrusted Ingress
          </text>
          <text x="12" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Public Clients &amp; APIs
          </text>
          <text x="12" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Adversarial Scanners
          </text>
          <text x="12" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Layer 4 SYN / DDoS Floods
          </text>
          <rect x="10" y="115" width="125" height="42" fill="#FAF9F7" stroke="#D9D9D4" strokeWidth="1" />
          <text x="16" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            Border Gateway
          </text>
          <text x="16" y="144" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
            BGP Anycast / Edge
          </text>
        </g>

        {/* Arrow 1 -> 2 */}
        <line x1="145" y1="88" x2="175" y2="88" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#perim-arrow)" />

        {/* Step 2: NGINX Ingress Proxy */}
        <g transform="translate(175, 0)">
          <rect width="145" height="175" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.2" />
          <rect width="145" height="22" fill="#174A5B" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            02. NGINX PROXY
          </text>
          <text x="12" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
            Edge Reverse Proxy
          </text>
          <text x="12" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Single TCP/443 Entry
          </text>
          <text x="12" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Epoll Non-Blocking Core
          </text>
          <text x="12" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Header Normalization
          </text>
          <rect x="10" y="115" width="125" height="42" fill="#FAF9F7" stroke="#D9D9D4" strokeWidth="1" />
          <text x="16" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            Server Shield
          </text>
          <text x="16" y="144" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
            server_tokens off
          </text>
        </g>

        {/* Arrow 2 -> 3 */}
        <line x1="320" y1="88" x2="350" y2="88" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#perim-arrow)" />

        {/* Step 3: Rate Limiting & Filter */}
        <g transform="translate(350, 0)">
          <rect width="145" height="175" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
          <rect width="145" height="22" fill="#174A5B" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            03. RATE LIMITING
          </text>
          <text x="12" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
            Traffic Shaper &amp; WAF
          </text>
          <text x="12" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            limit_req_zone (Leaky Bucket)
          </text>
          <text x="12" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            limit_conn_zone Per IP
          </text>
          <text x="12" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Burst Buffering + nodelay
          </text>
          <rect x="10" y="115" width="125" height="42" fill="#FAF9F7" stroke="#D9D9D4" strokeWidth="1" />
          <text x="16" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            DoS Mitigation
          </text>
          <text x="16" y="144" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
            Automated HTTP 429 Drop
          </text>
        </g>

        {/* Arrow 3 -> 4 */}
        <line x1="495" y1="88" x2="525" y2="88" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#perim-arrow)" />

        {/* Step 4: TLS 1.3 / Security Headers */}
        <g transform="translate(525, 0)">
          <rect width="145" height="175" fill="#FFFFFF" stroke="#356859" strokeWidth="1.2" />
          <rect width="145" height="22" fill="#356859" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            04. TLS / SECURITY
          </text>
          <text x="12" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
            Cryptographic Termination
          </text>
          <text x="12" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            TLS 1.2 / 1.3 Only (ECDHE)
          </text>
          <text x="12" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            HSTS (max-age=31536000)
          </text>
          <text x="12" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Strict CSP &amp; X-Frame Options
          </text>
          <rect x="10" y="115" width="125" height="42" fill="#FAF9F7" stroke="#D9D9D4" strokeWidth="1" />
          <text x="16" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="600">
            SSL Labs A+ Grade
          </text>
          <text x="16" y="144" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
            Forward Secrecy Enforced
          </text>
        </g>

        {/* Arrow 4 -> 5 */}
        <line x1="670" y1="88" x2="700" y2="88" stroke="#356859" strokeWidth="1.5" markerEnd="url(#perim-arrow)" />

        {/* Step 5: Protected Application Backend */}
        <g transform="translate(700, 0)">
          <rect width="140" height="175" fill="#FFFFFF" stroke="#356859" strokeWidth="1.5" />
          <rect width="140" height="22" fill="#356859" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            05. APPLICATION
          </text>
          <text x="12" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
            Isolated Backend
          </text>
          <text x="12" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Internal Unix Socket / Loopback
          </text>
          <text x="12" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Zero Direct Public Exposure
          </text>
          <text x="12" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
            Sandboxed Process Namespace
          </text>
          <rect x="10" y="115" width="120" height="42" fill="#FAF9F7" stroke="#D9D9D4" strokeWidth="1" />
          <text x="16" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="600">
            Purdue DMZ Isolation
          </text>
          <text x="16" y="144" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
            Strict Egress Whitelist
          </text>
        </g>
      </g>
    </svg>
  );
};

export const ReverseProxyPipelineDiagram: React.FC = PerimeterSecurityDiagram;

// =========================================================================
// SPEC-EXACT ARCHITECTURE DIAGRAMS (ENGINEERING EVIDENCE PLATFORM REQUIREMENT)
// =========================================================================

// 1. FLAGSHIP RESONANT POWER:
// INPUT / SOURCE -> SWITCHING DRIVER / INVERTER -> PRIMARY LC RESONANT NETWORK -> PRIMARY INDUCTION COIL
// ~~~ AIR GAP ~~~
// -> SECONDARY INDUCTION COIL -> SECONDARY LC RESONANT NETWORK -> LOAD
// Labels: frequency, resonance, coupling, air gap, power transfer
export const ResonantInductiveArchitectureDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 960 300"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Resonant Inductive Wireless Power Transmission System Architecture"
    >
      <defs>
        <marker id="eng-arrow-dark" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" fill="#174A5B" />
        </marker>
        <pattern id="archGrid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="960" height="300" fill="url(#archGrid)" />
      <rect width="960" height="300" fill="none" stroke="#D9D9D4" strokeWidth="1" />

      {/* Header Banner */}
      <rect x="0" y="0" width="960" height="26" fill="#F2F2EE" stroke="#D9D9D4" strokeWidth="1" />
      <text x="14" y="17" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="600" letterSpacing="0.08em">
        SYS-ARCH // RESONANT INDUCTIVE WIRELESS POWER TRANSMISSION ARCHITECTURE
      </text>
      <text x="760" y="17" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8A8A85">
        SERIES-SERIES TOPOLOGY
      </text>

      {/* Stage 1: INPUT / SOURCE */}
      <g transform="translate(15, 45)">
        <rect width="105" height="180" fill="#FFFFFF" stroke="#111111" strokeWidth="1.2" />
        <rect width="105" height="20" fill="#111111" />
        <text x="8" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
          01. INPUT / SOURCE
        </text>
        <text x="8" y="38" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
          DC Bench Supply
        </text>
        <text x="8" y="56" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          V_in (Regulated)
        </text>
        <text x="8" y="72" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Low ripple DC bus
        </text>
        <rect x="6" y="125" width="93" height="45" fill="#FAF9F7" stroke="#D9D9D4" />
        <text x="10" y="140" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
          POWER TRANSFER
        </text>
        <text x="10" y="156" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
          P_in = V_in × I_in
        </text>
      </g>

      <line x1="120" y1="135" x2="135" y2="135" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#eng-arrow-dark)" />

      {/* Stage 2: SWITCHING DRIVER / INVERTER */}
      <g transform="translate(135, 45)">
        <rect width="115" height="180" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.2" />
        <rect width="115" height="20" fill="#174A5B" />
        <text x="8" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
          02. DRIVER / INVERTER
        </text>
        <text x="8" y="38" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
          HF Switch Topology
        </text>
        <text x="8" y="56" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          MOSFET Half/Full Bridge
        </text>
        <text x="8" y="72" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Dead-time timing
        </text>
        <rect x="6" y="125" width="103" height="45" fill="#FAF9F7" stroke="#D9D9D4" />
        <text x="10" y="140" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
          FREQUENCY
        </text>
        <text x="10" y="156" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
          f_sw tuned to f_0
        </text>
      </g>

      <line x1="250" y1="135" x2="265" y2="135" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#eng-arrow-dark)" />

      {/* Stage 3: PRIMARY LC RESONANT NETWORK */}
      <g transform="translate(265, 45)">
        <rect width="115" height="180" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.2" />
        <rect width="115" height="20" fill="#174A5B" />
        <text x="8" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
          03. PRIMARY LC TANK
        </text>
        <text x="8" y="38" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
          Series Resonant C_1
        </text>
        <text x="8" y="56" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Low-ESR Capacitance
        </text>
        <text x="8" y="72" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Reactive cancellation
        </text>
        <rect x="6" y="125" width="103" height="45" fill="#FAF9F7" stroke="#D9D9D4" />
        <text x="10" y="140" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
          RESONANCE
        </text>
        <text x="10" y="156" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
          ω_0 = 1 / √(L_1 C_1)
        </text>
      </g>

      <line x1="380" y1="135" x2="395" y2="135" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#eng-arrow-dark)" />

      {/* Stage 4: PRIMARY INDUCTION COIL */}
      <g transform="translate(395, 45)">
        <rect width="115" height="180" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
        <rect width="115" height="20" fill="#174A5B" />
        <text x="8" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
          04. TX INDUCTION COIL
        </text>
        <text x="8" y="38" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
          Helical Inductor L_1
        </text>
        <text x="8" y="56" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          High Quality Factor Q_1
        </text>
        <text x="8" y="72" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Oscillating B-Field
        </text>
        <rect x="6" y="125" width="103" height="45" fill="#FAF9F7" stroke="#D9D9D4" />
        <text x="10" y="140" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
          COUPLING
        </text>
        <text x="10" y="156" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
          Faraday Induction
        </text>
      </g>

      {/* AIR GAP COUPLING ZONE */}
      <g transform="translate(515, 35)">
        <rect width="70" height="200" fill="#FAF9F7" stroke="#D9D9D4" strokeDasharray="3 3" />
        {/* Magnetic flux ripples */}
        <path d="M 12 70 Q 22 55 12 40" fill="none" stroke="#174A5B" strokeWidth="1.6" />
        <path d="M 22 80 Q 34 55 22 30" fill="none" stroke="#174A5B" strokeWidth="1.6" />
        <path d="M 58 70 Q 48 55 58 40" fill="none" stroke="#356859" strokeWidth="1.6" />
        <path d="M 48 80 Q 36 55 48 30" fill="none" stroke="#356859" strokeWidth="1.6" />

        <text x="35" y="115" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700" textAnchor="middle">
          AIR GAP
        </text>
        <text x="35" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600" textAnchor="middle">
          d (mm)
        </text>
        <text x="35" y="150" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#666666" textAnchor="middle">
          MUTUAL LINK
        </text>
        <text x="35" y="165" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111" textAnchor="middle">
          k = M/√(L1 L2)
        </text>
        <text x="35" y="185" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#8A8A85" textAnchor="middle">
          B-Field Decay
        </text>
      </g>

      {/* Stage 5: SECONDARY INDUCTION COIL */}
      <g transform="translate(590, 45)">
        <rect width="115" height="180" fill="#FFFFFF" stroke="#356859" strokeWidth="1.5" />
        <rect width="115" height="20" fill="#356859" />
        <text x="8" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
          05. RX INDUCTION COIL
        </text>
        <text x="8" y="38" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
          Helical Inductor L_2
        </text>
        <text x="8" y="56" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Induced EMF Field
        </text>
        <text x="8" y="72" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Magnetic Capture
        </text>
        <rect x="6" y="125" width="103" height="45" fill="#FAF9F7" stroke="#D9D9D4" />
        <text x="10" y="140" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="600">
          COUPLING
        </text>
        <text x="10" y="156" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
          Faraday's Law EMF
        </text>
      </g>

      <line x1="705" y1="135" x2="720" y2="135" stroke="#356859" strokeWidth="1.5" markerEnd="url(#eng-arrow-dark)" />

      {/* Stage 6: SECONDARY LC RESONANT NETWORK */}
      <g transform="translate(720, 45)">
        <rect width="115" height="180" fill="#FFFFFF" stroke="#356859" strokeWidth="1.2" />
        <rect width="115" height="20" fill="#356859" />
        <text x="8" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
          06. SECONDARY LC TANK
        </text>
        <text x="8" y="38" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
          Series Resonant C_2
        </text>
        <text x="8" y="56" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Secondary Tuning C_2
        </text>
        <text x="8" y="72" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Unity Power Factor
        </text>
        <rect x="6" y="125" width="103" height="45" fill="#FAF9F7" stroke="#D9D9D4" />
        <text x="10" y="140" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="600">
          RESONANCE
        </text>
        <text x="10" y="156" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
          ω_0 = 1 / √(L_2 C_2)
        </text>
      </g>

      <line x1="835" y1="135" x2="850" y2="135" stroke="#356859" strokeWidth="1.5" markerEnd="url(#eng-arrow-dark)" />

      {/* Stage 7: LOAD */}
      <g transform="translate(850, 45)">
        <rect width="95" height="180" fill="#FFFFFF" stroke="#111111" strokeWidth="1.2" />
        <rect width="95" height="20" fill="#111111" />
        <text x="8" y="14" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
          07. LOAD
        </text>
        <text x="8" y="38" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
          Rectifier &amp; R_L
        </text>
        <text x="8" y="56" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Schottky Bridge
        </text>
        <text x="8" y="72" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">
          Filter / Load Tank
        </text>
        <rect x="6" y="125" width="83" height="45" fill="#FAF9F7" stroke="#D9D9D4" />
        <text x="8" y="140" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
          POWER TRANSFER
        </text>
        <text x="8" y="156" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
          η = P_load / P_in
        </text>
      </g>

      {/* Bottom Technical Notation Ribbon */}
      <rect x="15" y="240" width="930" height="45" fill="#FAF9F7" stroke="#D9D9D4" />
      <text x="25" y="258" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B" fontWeight="600">
        PHYSICAL PARAMETERS:
      </text>
      <text x="175" y="258" fontFamily="IBM Plex Mono, monospace" fontSize="8.5" fill="#333333">
        Resonant Tuning f_0 = 1/(2π√LC) · Quality Factor Q = ωL/R_s · Coupling Coefficient k = M/√(L1·L2) · Efficiency η = P_out / P_in
      </text>
      <text x="25" y="274" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
        Source Provenance: Undergraduate Capstone Engineering Thesis (2016) — The Islamia University of Bahawalpur
      </text>
    </svg>
  );
};

// 2. SIEM TELEMETRY ARCHITECTURE DIAGRAM:
// HOSTS -> WAZUH AGENTS -> TELEMETRY / LOG COLLECTION -> WAZUH SERVER -> SECURITY ANALYSIS -> VISUALIZATION / DASHBOARD
export const SiemPipelineArchitectureDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 960 260"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SIEM & Telemetry Pipeline Architecture"
    >
      <defs>
        <marker id="siem-arrow-exact" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" fill="#174A5B" />
        </marker>
        <pattern id="siemGrid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="960" height="260" fill="url(#siemGrid)" />
      <rect width="960" height="260" fill="none" stroke="#D9D9D4" strokeWidth="1" />

      {/* Top Banner Track */}
      <rect x="0" y="0" width="960" height="26" fill="#F2F2EE" stroke="#D9D9D4" strokeWidth="1" />
      <text x="14" y="17" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="600" letterSpacing="0.08em">
        SYS-ARCH // HOST TELEMETRY &amp; SIEM LOG PIPELINE
      </text>
      <text x="750" y="17" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8A8A85">
        WAZUH HIDS/XDR · LINUX AUDITD
      </text>

      {/* 6-Stage Pipeline */}
      <g transform="translate(15, 45)">
        {/* Stage 1: HOSTS */}
        <g transform="translate(0, 0)">
          <rect width="140" height="185" fill="#FFFFFF" stroke="#111111" strokeWidth="1.2" />
          <rect width="140" height="22" fill="#111111" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            01. HOSTS
          </text>
          <text x="10" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Multi-Tier Linux
          </text>
          <text x="10" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Ubuntu, Debian, RHEL</text>
          <text x="10" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Kernel auditd hooks</text>
          <text x="10" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">System authentication logs</text>
          <text x="10" y="108" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Process execution events</text>
          <rect x="8" y="125" width="124" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="12" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            OS KERNEL HOOKS
          </text>
          <text x="12" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            syscall tracking &amp; FIM
          </text>
        </g>

        {/* Arrow 1 -> 2 */}
        <line x1="140" y1="92" x2="160" y2="92" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#siem-arrow-exact)" />

        {/* Stage 2: WAZUH AGENTS */}
        <g transform="translate(160, 0)">
          <rect width="140" height="185" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.2" />
          <rect width="140" height="22" fill="#174A5B" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            02. WAZUH AGENTS
          </text>
          <text x="10" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Host Ingestion
          </text>
          <text x="10" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Lightweight agent daemon</text>
          <text x="10" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Local spooling buffer</text>
          <text x="10" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Non-blocking file polling</text>
          <text x="10" y="108" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Privilege verification</text>
          <rect x="8" y="125" width="124" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="12" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            AGENT HARDENING
          </text>
          <text x="12" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            Strict cgroup memory quota
          </text>
        </g>

        {/* Arrow 2 -> 3 */}
        <line x1="300" y1="92" x2="320" y2="92" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#siem-arrow-exact)" />

        {/* Stage 3: TELEMETRY / LOG COLLECTION */}
        <g transform="translate(320, 0)">
          <rect width="140" height="185" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.2" />
          <rect width="140" height="22" fill="#174A5B" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
            03. LOG COLLECTION
          </text>
          <text x="10" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Encrypted Ingress
          </text>
          <text x="10" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">TLS 1.3 / mTLS transport</text>
          <text x="10" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Secure TCP port 1514</text>
          <text x="10" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Backpressure queues</text>
          <text x="10" y="108" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Socket buffer tuning</text>
          <rect x="8" y="125" width="124" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="12" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            TRANSPORT SECURITY
          </text>
          <text x="12" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            Mutual certificate auth
          </text>
        </g>

        {/* Arrow 3 -> 4 */}
        <line x1="460" y1="92" x2="480" y2="92" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#siem-arrow-exact)" />

        {/* Stage 4: WAZUH SERVER */}
        <g transform="translate(480, 0)">
          <rect width="140" height="185" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
          <rect width="140" height="22" fill="#174A5B" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            04. WAZUH SERVER
          </text>
          <text x="10" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Core Controller
          </text>
          <text x="10" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">analysisd processing daemon</text>
          <text x="10" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Decoders &amp; tokenizers</text>
          <text x="10" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Central manager cluster</text>
          <text x="10" y="108" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Agent key registry</text>
          <rect x="8" y="125" width="124" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="12" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            EVENT NORMALIZATION
          </text>
          <text x="12" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            JSON field extraction
          </text>
        </g>

        {/* Arrow 4 -> 5 */}
        <line x1="620" y1="92" x2="640" y2="92" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#siem-arrow-exact)" />

        {/* Stage 5: SECURITY ANALYSIS */}
        <g transform="translate(640, 0)">
          <rect width="140" height="185" fill="#FFFFFF" stroke="#356859" strokeWidth="1.2" />
          <rect width="140" height="22" fill="#356859" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
            05. SECURITY ANALYSIS
          </text>
          <text x="10" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Rule Correlation
          </text>
          <text x="10" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Custom XML rule logic</text>
          <text x="10" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Threshold frequency tracking</text>
          <text x="10" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Integrity checksum diffing</text>
          <text x="10" y="108" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Severity level tagging</text>
          <rect x="8" y="125" width="124" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="12" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="600">
            DETECTION ENGINE
          </text>
          <text x="12" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            Deterministic rule triggers
          </text>
        </g>

        {/* Arrow 5 -> 6 */}
        <line x1="780" y1="92" x2="800" y2="92" stroke="#356859" strokeWidth="1.5" markerEnd="url(#siem-arrow-exact)" />

        {/* Stage 6: VISUALIZATION / DASHBOARD */}
        <g transform="translate(800, 0)">
          <rect width="130" height="185" fill="#FFFFFF" stroke="#111111" strokeWidth="1.2" />
          <rect width="130" height="22" fill="#111111" />
          <text x="8" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
            06. VISUALIZATION
          </text>
          <text x="8" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Dashboards
          </text>
          <text x="8" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Grafana time-series</text>
          <text x="8" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Real-time alerts log</text>
          <text x="8" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Agent connectivity</text>
          <text x="8" y="108" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Audit compliance status</text>
          <rect x="6" y="125" width="118" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="10" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            OPERATIONAL DISPLAY
          </text>
          <text x="10" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            Continuous visibility
          </text>
        </g>
      </g>
    </svg>
  );
};

// 3. PERIMETER HARDENING ARCHITECTURE DIAGRAM:
// INTERNET -> EDGE -> NGINX / APACHE -> RATE LIMITING / WAF -> TLS TERMINATION -> APPLICATION -> DATABASE / INTERNAL SERVICES
export const PerimeterHardeningArchitectureDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 960 260"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Reverse Proxy & Perimeter Hardening Architecture"
    >
      <defs>
        <marker id="perim-arrow-exact" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" fill="#174A5B" />
        </marker>
        <pattern id="perimGrid2" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="960" height="260" fill="url(#perimGrid2)" />
      <rect width="960" height="260" fill="none" stroke="#D9D9D4" strokeWidth="1" />

      {/* Top Banner Track */}
      <rect x="0" y="0" width="960" height="26" fill="#F2F2EE" stroke="#D9D9D4" strokeWidth="1" />
      <text x="14" y="17" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="600" letterSpacing="0.08em">
        SYS-ARCH // REVERSE PROXY &amp; PERIMETER HARDENING ARCHITECTURE
      </text>
      <text x="730" y="17" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8A8A85">
        NGINX / APACHE · WAF · TLS 1.3
      </text>

      {/* 7-Stage Pipeline */}
      <g transform="translate(15, 45)">
        {/* Stage 1: INTERNET */}
        <g transform="translate(0, 0)">
          <rect width="115" height="185" fill="#FFFFFF" stroke="#111111" strokeWidth="1.2" />
          <rect width="115" height="22" fill="#111111" />
          <text x="8" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
            01. INTERNET
          </text>
          <text x="8" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Untrusted Traffic
          </text>
          <text x="8" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Public web clients</text>
          <text x="8" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Automated probes</text>
          <text x="8" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Volumetric floods</text>
          <rect x="6" y="125" width="103" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="10" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            PUBLIC INGRESS
          </text>
          <text x="10" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            TCP Port 80 / 443
          </text>
        </g>

        {/* Arrow 1 -> 2 */}
        <line x1="115" y1="92" x2="135" y2="92" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#perim-arrow-exact)" />

        {/* Stage 2: EDGE */}
        <g transform="translate(135, 0)">
          <rect width="115" height="185" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.2" />
          <rect width="115" height="22" fill="#174A5B" />
          <text x="8" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
            02. EDGE
          </text>
          <text x="8" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Gateway Firewall
          </text>
          <text x="8" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">iptables / UFW drops</text>
          <text x="8" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">SYN flood cookies</text>
          <text x="8" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">BGP perimeter filter</text>
          <rect x="6" y="125" width="103" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="10" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            L3/L4 FILTER
          </text>
          <text x="10" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            Connection policing
          </text>
        </g>

        {/* Arrow 2 -> 3 */}
        <line x1="250" y1="92" x2="270" y2="92" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#perim-arrow-exact)" />

        {/* Stage 3: NGINX / APACHE */}
        <g transform="translate(270, 0)">
          <rect width="125" height="185" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
          <rect width="125" height="22" fill="#174A5B" />
          <text x="8" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
            03. REVERSE PROXY
          </text>
          <text x="8" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Nginx / Apache
          </text>
          <text x="8" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Epoll event loops</text>
          <text x="8" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Header sanitation</text>
          <text x="8" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">server_tokens off</text>
          <rect x="6" y="125" width="113" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="10" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            BUFFER TUNING
          </text>
          <text x="10" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            Zero-copy proxy_pass
          </text>
        </g>

        {/* Arrow 3 -> 4 */}
        <line x1="395" y1="92" x2="415" y2="92" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#perim-arrow-exact)" />

        {/* Stage 4: RATE LIMITING / WAF */}
        <g transform="translate(415, 0)">
          <rect width="125" height="185" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.2" />
          <rect width="125" height="22" fill="#174A5B" />
          <text x="8" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
            04. RATE LIMIT / WAF
          </text>
          <text x="8" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Traffic Shaper
          </text>
          <text x="8" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">limit_req token bucket</text>
          <text x="8" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Burst buffer nodelay</text>
          <text x="8" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">OWASP CRS filtering</text>
          <rect x="6" y="125" width="113" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="10" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            ABUSE DEFENSE
          </text>
          <text x="10" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            429 Too Many Requests
          </text>
        </g>

        {/* Arrow 4 -> 5 */}
        <line x1="540" y1="92" x2="560" y2="92" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#perim-arrow-exact)" />

        {/* Stage 5: TLS TERMINATION */}
        <g transform="translate(560, 0)">
          <rect width="125" height="185" fill="#FFFFFF" stroke="#356859" strokeWidth="1.2" />
          <rect width="125" height="22" fill="#356859" />
          <text x="8" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
            05. TLS TERMINATION
          </text>
          <text x="8" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Certbot Automation
          </text>
          <text x="8" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Let's Encrypt renewal</text>
          <text x="8" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">TLS 1.2 / 1.3 only</text>
          <text x="8" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">HSTS &amp; OCSP stapling</text>
          <rect x="6" y="125" width="113" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="10" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="600">
            SECURITY RATING
          </text>
          <text x="10" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            A+ Cryptographic Grade
          </text>
        </g>

        {/* Arrow 5 -> 6 */}
        <line x1="685" y1="92" x2="705" y2="92" stroke="#356859" strokeWidth="1.5" markerEnd="url(#perim-arrow-exact)" />

        {/* Stage 6: APPLICATION */}
        <g transform="translate(705, 0)">
          <rect width="110" height="185" fill="#FFFFFF" stroke="#356859" strokeWidth="1.2" />
          <rect width="110" height="22" fill="#356859" />
          <text x="8" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
            06. APPLICATION
          </text>
          <text x="8" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Upstream Tier
          </text>
          <text x="8" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Loopback / Sockets</text>
          <text x="8" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Zero public port</text>
          <text x="8" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Least-privilege runtime</text>
          <rect x="6" y="125" width="98" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="10" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="600">
            DMZ ISOLATION
          </text>
          <text x="10" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            Host segregation
          </text>
        </g>

        {/* Arrow 6 -> 7 */}
        <line x1="815" y1="92" x2="835" y2="92" stroke="#356859" strokeWidth="1.5" markerEnd="url(#perim-arrow-exact)" />

        {/* Stage 7: DATABASE / INTERNAL SERVICES */}
        <g transform="translate(835, 0)">
          <rect width="95" height="185" fill="#FFFFFF" stroke="#111111" strokeWidth="1.2" />
          <rect width="95" height="22" fill="#111111" />
          <text x="6" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#FFFFFF" fontWeight="600">
            07. INTERNAL
          </text>
          <text x="6" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Database Tier
          </text>
          <text x="6" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">VLAN Subnetting</text>
          <text x="6" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Strict ACL drops</text>
          <text x="6" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Encrypted data</text>
          <rect x="4" y="125" width="87" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="6" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            ZERO TRUST
          </text>
          <text x="6" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            Internal boundary
          </text>
        </g>
      </g>
    </svg>
  );
};

// 4. INFRASTRUCTURE AUTOMATION ARCHITECTURE DIAGRAM:
// CODE CHANGE -> VALIDATION -> AUTOMATION -> DEPLOYMENT / SYNCHRONIZATION -> VERIFICATION
export const InfrastructureAutomationArchitectureDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 960 260"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Infrastructure Automation & CI/CD Pipeline Architecture"
    >
      <defs>
        <marker id="auto-arrow-exact" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" fill="#174A5B" />
        </marker>
        <pattern id="autoGrid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="960" height="260" fill="url(#autoGrid)" />
      <rect width="960" height="260" fill="none" stroke="#D9D9D4" strokeWidth="1" />

      {/* Top Banner Track */}
      <rect x="0" y="0" width="960" height="26" fill="#F2F2EE" stroke="#D9D9D4" strokeWidth="1" />
      <text x="14" y="17" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="600" letterSpacing="0.08em">
        SYS-ARCH // INFRASTRUCTURE AUTOMATION &amp; CI/CD SYNCHRONIZATION
      </text>
      <text x="740" y="17" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8A8A85">
        GITHUB ACTIONS · BASH · PYTHON · SSH
      </text>

      {/* 5-Stage Pipeline */}
      <g transform="translate(20, 45)">
        {/* Stage 1: CODE CHANGE */}
        <g transform="translate(0, 0)">
          <rect width="165" height="185" fill="#FFFFFF" stroke="#111111" strokeWidth="1.2" />
          <rect width="165" height="22" fill="#111111" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            01. CODE CHANGE
          </text>
          <text x="12" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Git Commit / Push
          </text>
          <text x="12" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Feature branch merge</text>
          <text x="12" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Release tag creation</text>
          <text x="12" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Configuration update</text>
          <text x="12" y="108" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Signed GPG commit</text>
          <rect x="10" y="125" width="145" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="14" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            VERSION CONTROL
          </text>
          <text x="14" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            Git Repository trigger
          </text>
        </g>

        {/* Arrow 1 -> 2 */}
        <line x1="165" y1="92" x2="190" y2="92" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#auto-arrow-exact)" />

        {/* Stage 2: VALIDATION */}
        <g transform="translate(190, 0)">
          <rect width="165" height="185" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.2" />
          <rect width="165" height="22" fill="#174A5B" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            02. VALIDATION
          </text>
          <text x="12" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Automated Checks
          </text>
          <text x="12" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Syntax linting &amp; audit</text>
          <text x="12" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Static code analysis</text>
          <text x="12" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Config schema validation</text>
          <text x="12" y="108" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Dependency vulnerability scan</text>
          <rect x="10" y="125" width="145" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="14" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            PRE-FLIGHT GATE
          </text>
          <text x="14" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            Fast fail on defect
          </text>
        </g>

        {/* Arrow 2 -> 3 */}
        <line x1="355" y1="92" x2="380" y2="92" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#auto-arrow-exact)" />

        {/* Stage 3: AUTOMATION */}
        <g transform="translate(380, 0)">
          <rect width="165" height="185" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
          <rect width="165" height="22" fill="#174A5B" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            03. AUTOMATION
          </text>
          <text x="12" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            GitHub Actions / Bash
          </text>
          <text x="12" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Declarative YAML runner</text>
          <text x="12" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Python deployment scripts</text>
          <text x="12" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Artifact packaging</text>
          <text x="12" y="108" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Database snapshot trigger</text>
          <rect x="10" y="125" width="145" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="14" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            ORCHESTRATION
          </text>
          <text x="14" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            Deterministic build matrix
          </text>
        </g>

        {/* Arrow 3 -> 4 */}
        <line x1="545" y1="92" x2="570" y2="92" stroke="#174A5B" strokeWidth="1.5" markerEnd="url(#auto-arrow-exact)" />

        {/* Stage 4: DEPLOYMENT / SYNCHRONIZATION */}
        <g transform="translate(570, 0)">
          <rect width="175" height="185" fill="#FFFFFF" stroke="#356859" strokeWidth="1.2" />
          <rect width="175" height="22" fill="#356859" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="8.5" fill="#FFFFFF" fontWeight="600">
            04. DEPLOY / SYNC
          </text>
          <text x="12" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Secure Remote Sync
          </text>
          <text x="12" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">SSH keypair authentication</text>
          <text x="12" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Encrypted FTP transport</text>
          <text x="12" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Atomic symlink switching</text>
          <text x="12" y="108" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Zero-downtime reload</text>
          <rect x="10" y="125" width="155" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="14" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="600">
            TRANSPORT SECURITY
          </text>
          <text x="14" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            Idempotent synchronization
          </text>
        </g>

        {/* Arrow 4 -> 5 */}
        <line x1="745" y1="92" x2="770" y2="92" stroke="#356859" strokeWidth="1.5" markerEnd="url(#auto-arrow-exact)" />

        {/* Stage 5: VERIFICATION */}
        <g transform="translate(770, 0)">
          <rect width="150" height="185" fill="#FFFFFF" stroke="#111111" strokeWidth="1.2" />
          <rect width="150" height="22" fill="#111111" />
          <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="600">
            05. VERIFICATION
          </text>
          <text x="12" y="42" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
            Health Probes
          </text>
          <text x="12" y="60" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">HTTP 200 health probe</text>
          <text x="12" y="76" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Service daemon status</text>
          <text x="12" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Automated rollback hook</text>
          <text x="12" y="108" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666">Telemetry alert confirmation</text>
          <rect x="10" y="125" width="130" height="48" fill="#FAF9F7" stroke="#D9D9D4" />
          <text x="14" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
            OPERATIONAL SLA
          </text>
          <text x="14" y="158" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fill="#8A8A85">
            Zero configuration drift
          </text>
        </g>
      </g>
    </svg>
  );
};


