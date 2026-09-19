import React from 'react';

// ============================================================================
// 1. MICROGRID RESILIENT CONTROL ARCHITECTURE
// Flow: Microgrid Nodes -> Local Measurements -> Distributed Consensus -> Secondary Frequency Control -> Control Input -> Microgrid Dynamics
// FDI Attack Path entering measurement/communication layer
// Normal Control Path vs Attack / Disturbance Path
// ============================================================================
export const MicrogridControlDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 820 420"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Microgrid Resilient Secondary Frequency Control with FDI Attack Path"
    >
      <defs>
        <marker id="mg-teal-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#174A5B" />
        </marker>
        <marker id="mg-attack-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#8B263E" />
        </marker>
        <marker id="mg-gray-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#666666" />
        </marker>
        <pattern id="mg-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="820" height="420" fill="url(#mg-grid)" />

      {/* Legend */}
      <rect x="20" y="15" width="780" height="36" fill="#FFFFFF" stroke="#D9D9D4" />
      <g transform="translate(35, 33)">
        <line x1="0" y1="0" x2="30" y2="0" stroke="#174A5B" strokeWidth="2.5" markerEnd="url(#mg-teal-arrow)" />
        <text x="40" y="4" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="600">
          NORMAL CONTROL PATH (DETERMINISTIC CONSENSUS FLOW)
        </text>

        <line x1="420" y1="0" x2="450" y2="0" stroke="#8B263E" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#mg-attack-arrow)" />
        <text x="460" y="4" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#8B263E" fontWeight="600">
          ATTACK / DISTURBANCE PATH (FDI CORRUPTED MEASUREMENTS)
        </text>
      </g>

      {/* Layer 1: Physical Microgrid Nodes & Dynamics */}
      <rect x="20" y="65" width="240" height="155" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <rect x="20" y="65" width="240" height="24" fill="#174A5B" />
      <text x="30" y="81" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        [01] MICROGRID NODES (ISLANDED AC)
      </text>
      <text x="32" y="105" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        Distributed Inverter DG Units (i = 1..N)
      </text>
      <text x="32" y="122" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Primary Droop Control (P-f / Q-V)
      </text>
      <text x="32" y="137" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Local LC Filters & Coupling Impedance
      </text>
      <text x="32" y="152" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Inverter Output State: f_i, V_i, P_i, Q_i
      </text>
      <text x="32" y="180" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B" fontWeight="600">
        Microgrid Dynamics: M_i*ω̇_i + D_i*ω_i = P_mi - P_ei
      </text>

      {/* Normal Arrow: Nodes -> Local Measurements */}
      <line x1="260" y1="140" x2="300" y2="140" stroke="#174A5B" strokeWidth="2" markerEnd="url(#mg-teal-arrow)" />

      {/* Layer 2: Local Measurements */}
      <rect x="305" y="65" width="210" height="155" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
      <rect x="305" y="65" width="210" height="24" fill="#F2F2EE" />
      <text x="315" y="81" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="700">
        [02] LOCAL MEASUREMENTS
      </text>
      <text x="317" y="105" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        Digital Sensing & Filtering
      </text>
      <text x="317" y="122" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Voltage & Current PT/CT Sampling
      </text>
      <text x="317" y="137" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Frequency Estimation: ω_i(t)
      </text>
      <text x="317" y="152" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Local Active Power Measurement: P_i(t)
      </text>
      <text x="317" y="180" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#356859" fontWeight="600">
        Raw State Vector: x_i = [ω_i, P_i]^T
      </text>

      {/* FDI Attack Injection Point */}
      <g transform="translate(290, 260)">
        <rect x="0" y="0" width="240" height="135" fill="#FFF5F5" stroke="#8B263E" strokeWidth="1.5" strokeDasharray="4 3" />
        <rect x="0" y="0" width="240" height="22" fill="#8B263E" />
        <text x="10" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
          THREAT: FALSE DATA INJECTION (FDI)
        </text>
        <text x="12" y="38" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8B263E" fontWeight="600">
          Adversary Injection Vector: a_ij(t)
        </text>
        <text x="12" y="55" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
          Manipulates Communication Links:
        </text>
        <text x="12" y="70" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8B263E">
          x̃_j = x_j + a_ij (Corrupted State Exchange)
        </text>
        <text x="12" y="88" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
          Objective: Induce Frequency Drift /
        </text>
        <text x="12" y="103" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
          Destabilize Distributed Consensus Loop
        </text>
      </g>

      {/* Attack path dashed arrow entering consensus communication */}
      <path
        d="M 410 260 L 410 235 L 610 235 L 610 225"
        fill="none"
        stroke="#8B263E"
        strokeWidth="2"
        strokeDasharray="4 3"
        markerEnd="url(#mg-attack-arrow)"
      />

      {/* Normal Arrow: Measurements -> Consensus */}
      <line x1="515" y1="140" x2="555" y2="140" stroke="#174A5B" strokeWidth="2" markerEnd="url(#mg-teal-arrow)" />

      {/* Layer 3: Distributed Consensus */}
      <rect x="560" y="65" width="240" height="155" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <rect x="560" y="65" width="240" height="24" fill="#174A5B" />
      <text x="570" y="81" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        [03] DISTRIBUTED CONSENSUS
      </text>
      <text x="572" y="105" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        Neighbor State Exchange Layer
      </text>
      <text x="572" y="122" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Graph Topology: G = (V, E) adjacency matrix
      </text>
      <text x="572" y="137" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Resilient Filtering Protocol (MSR / Boundary)
      </text>
      <text x="572" y="152" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8B263E" fontWeight="600">
        FDI Detection & Outlier State Discard
      </text>
      <text x="572" y="180" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B" fontWeight="600">
        Consensus Error: e_i = ∑ a_ij(x_j - x_i)
      </text>

      {/* Normal Path downwards: Consensus -> Secondary Control */}
      <path
        d="M 680 220 L 680 255"
        fill="none"
        stroke="#174A5B"
        strokeWidth="2"
        markerEnd="url(#mg-teal-arrow)"
      />

      {/* Layer 4: Secondary Frequency Control */}
      <rect x="560" y="260" width="240" height="135" fill="#FFFFFF" stroke="#356859" strokeWidth="1.5" />
      <rect x="560" y="260" width="240" height="22" fill="#356859" />
      <text x="570" y="275" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        [04] SECONDARY FREQUENCY CONTROL
      </text>
      <text x="572" y="298" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        Consensus Restoration Controller
      </text>
      <text x="572" y="315" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Nominal Target: ω_ref = 2π·50 Hz (or 60 Hz)
      </text>
      <text x="572" y="330" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        PI Integral Correction on Consensus State
      </text>
      <text x="572" y="347" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#356859" fontWeight="600">
        Control Input Signal: u_i = δω_i
      </text>
      <text x="572" y="375" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Restores Nominal Grid Frequency
      </text>

      {/* Feedback loop to Microgrid Dynamics */}
      <path
        d="M 560 330 L 140 330 L 140 225"
        fill="none"
        stroke="#174A5B"
        strokeWidth="2"
        markerEnd="url(#mg-teal-arrow)"
      />
      <rect x="190" y="318" width="310" height="22" fill="#FFFFFF" stroke="#174A5B" />
      <text x="200" y="333" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B" fontWeight="600">
        [05] CONTROL INPUT u_i → ACTUATES INVERTER DYNAMICS
      </text>
    </svg>
  );
};

// ============================================================================
// 2. BATTERY EKF STATE ESTIMATOR ARCHITECTURE
// Flow: Battery / Physical System -> Sensors -> CAN Bus -> Frame Validation -> EKF State Estimator -> State of Charge
// Distinguish Physical System from Software Security Boundary
// ============================================================================
export const BatteryEkfDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 820 380"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Battery Discrete EKF State Estimator and CAN-bus Validation Architecture"
    >
      <defs>
        <marker id="ekf-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#174A5B" />
        </marker>
        <pattern id="ekf-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="820" height="380" fill="url(#ekf-grid)" />

      {/* Physical System Boundary Box */}
      <rect x="15" y="15" width="270" height="350" fill="#FAF9F7" stroke="#8A8A85" strokeWidth="1.5" strokeDasharray="4 3" />
      <rect x="15" y="15" width="270" height="26" fill="#F2F2EE" />
      <text x="25" y="32" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="700">
        PHYSICAL HARDWARE DOMAIN
      </text>

      {/* Physical Block 1: Battery */}
      <rect x="30" y="55" width="235" height="120" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <rect x="30" y="55" width="235" height="20" fill="#174A5B" />
      <text x="40" y="69" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        BATTERY / PHYSICAL SYSTEM
      </text>
      <text x="40" y="93" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        Li-ion Cell / Pack Testbench
      </text>
      <text x="40" y="110" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Nonlinear OCV-SoC Characteristics
      </text>
      <text x="40" y="125" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        RC Equivalent Circuit Model (ECM)
      </text>
      <text x="40" y="142" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B">
        Electrochemical Polarization: R0, R1, C1
      </text>

      <line x1="147" y1="175" x2="147" y2="205" stroke="#174A5B" strokeWidth="2" markerEnd="url(#ekf-arrow)" />

      {/* Physical Block 2: Sensors */}
      <rect x="30" y="210" width="235" height="135" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
      <rect x="30" y="210" width="235" height="20" fill="#F2F2EE" />
      <text x="40" y="224" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="700">
        INSTRUMENTATION & SENSORS
      </text>
      <text x="40" y="248" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        Voltage, Current & Thermal Probes
      </text>
      <text x="40" y="265" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Hall-Effect Current Transducer (I_batt)
      </text>
      <text x="40" y="280" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Differential Cell Tap Voltages (V_t)
      </text>
      <text x="40" y="295" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Thermistor Array (T_cell)
      </text>
      <text x="40" y="325" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#356859" fontWeight="600">
        Analog-to-Digital Conversion (ADC)
      </text>

      {/* CAN-Bus Physical Medium Bridge */}
      <path
        d="M 265 280 L 315 280"
        fill="none"
        stroke="#174A5B"
        strokeWidth="3"
        markerEnd="url(#ekf-arrow)"
      />
      <rect x="290" y="160" width="70" height="190" fill="#FFFFFF" stroke="#174A5B" strokeWidth="2" />
      <text x="300" y="185" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#174A5B" fontWeight="700" transform="rotate(90 300 185)">
        CAN BUS (ISO 11898)
      </text>
      <text x="330" y="200" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#666666" transform="rotate(90 330 200)">
        Differential Signals CAN_H / CAN_L
      </text>

      {/* Software Security Boundary Box */}
      <rect x="375" y="15" width="430" height="350" fill="#FFFFFF" stroke="#174A5B" strokeWidth="2" />
      <rect x="375" y="15" width="430" height="26" fill="#174A5B" />
      <text x="385" y="32" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        SOFTWARE SECURITY BOUNDARY // ROOTLESS LINUX CONTAINER
      </text>

      {/* Step 1 in SW: Frame Validation */}
      <rect x="390" y="55" width="400" height="85" fill="#FAF9F7" stroke="#356859" strokeWidth="1.5" />
      <text x="400" y="73" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#356859" fontWeight="700">
        [01] CAN FRAME VALIDATION & BOUNDARY CHECKING
      </text>
      <text x="400" y="92" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
        • CAN ID Whitelisting & DLC (Data Length Code) Strict Enforcement
      </text>
      <text x="400" y="107" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
        • Dynamic Bound Checks: Voltage (V_min &lt; V &lt; V_max), Current range, dT/dt
      </text>
      <text x="400" y="122" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8B263E" fontWeight="600">
        • Frame Fuzzing Defense: Drops malformed payload bytes and CRC corruptions
      </text>

      {/* Arrow: Frame Validation -> EKF State Estimator */}
      <line x1="590" y1="140" x2="590" y2="165" stroke="#174A5B" strokeWidth="2" markerEnd="url(#ekf-arrow)" />

      {/* Step 2 in SW: Discrete EKF */}
      <rect x="390" y="170" width="400" height="110" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <text x="400" y="188" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="700">
        [02] DISCRETE EXTENDED KALMAN FILTER (EKF)
      </text>
      <text x="400" y="206" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
        • Time Update (Prediction): x̂_(k|k-1) = f(x̂_(k-1), u_k)
      </text>
      <text x="400" y="221" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        • Covariance Prediction: P_(k|k-1) = A_k·P_(k-1)·A_k^T + Q_k
      </text>
      <text x="400" y="236" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
        • Measurement Update (Correction): Kalman Gain L_k = P·C^T·(C·P·C^T + R)^-1
      </text>
      <text x="400" y="251" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#356859" fontWeight="600">
        • State Update: x̂_k = x̂_(k|k-1) + L_k·[y_k - g(x̂_(k|k-1))]
      </text>
      <text x="400" y="268" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        • Non-linear Jacobian computation of OCV(SoC) gradient
      </text>

      {/* Arrow: EKF -> State of Charge */}
      <line x1="590" y1="280" x2="590" y2="300" stroke="#174A5B" strokeWidth="2" markerEnd="url(#ekf-arrow)" />

      {/* Step 3 in SW: State of Charge Output */}
      <rect x="390" y="305" width="400" height="50" fill="#F2F2EE" stroke="#174A5B" strokeWidth="1.5" />
      <text x="400" y="323" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="700">
        [03] ESTIMATED STATE OUTPUT: STATE OF CHARGE (SoC)
      </text>
      <text x="400" y="341" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
        Filtered SoC Estimation with Covariance Bound P_k // Telemetry Payload Output
      </text>
    </svg>
  );
};

// ============================================================================
// 3. SCADA IDS TELEMETRY ENGINE ARCHITECTURE
// Flow: Industrial Network -> SCADA/OT Traffic -> Packet/APDU Dissection -> Protocol Validation -> Command Whitelist -> Physical Boundary Check -> Telemetry/Alert
// ============================================================================
export const ScadaIdsDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 820 400"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SCADA IDS Telemetry Engine Pipeline Architecture"
    >
      <defs>
        <marker id="scada-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#174A5B" />
        </marker>
        <marker id="scada-alert-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#8B263E" />
        </marker>
        <pattern id="scada-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="820" height="400" fill="url(#scada-grid)" />

      {/* Stage 1: Industrial Network */}
      <rect x="20" y="30" width="220" height="90" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <rect x="20" y="30" width="220" height="22" fill="#174A5B" />
      <text x="30" y="45" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        [01] INDUSTRIAL NETWORK
      </text>
      <text x="30" y="68" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        Substation OT Subnets
      </text>
      <text x="30" y="85" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Ethernet TAP / SPAN Port Mirrors
      </text>
      <text x="30" y="102" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Purdue Level 1/2 Fieldbus Network
      </text>

      <line x1="240" y1="75" x2="280" y2="75" stroke="#174A5B" strokeWidth="2" markerEnd="url(#scada-arrow)" />

      {/* Stage 2: SCADA/OT Traffic Ingestion */}
      <rect x="285" y="30" width="230" height="90" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
      <rect x="285" y="30" width="230" height="22" fill="#F2F2EE" />
      <text x="295" y="45" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="700">
        [02] SCADA / OT TRAFFIC
      </text>
      <text x="295" y="68" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        Raw Industrial Frames
      </text>
      <text x="295" y="85" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Modbus TCP (Port 502)
      </text>
      <text x="295" y="102" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        IEC 60870-5-104 / DNP3 Telemetry
      </text>

      <line x1="515" y1="75" x2="555" y2="75" stroke="#174A5B" strokeWidth="2" markerEnd="url(#scada-arrow)" />

      {/* Stage 3: Packet / APDU Dissection */}
      <rect x="560" y="30" width="240" height="90" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <rect x="560" y="30" width="240" height="22" fill="#174A5B" />
      <text x="570" y="45" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        [03] PACKET & APDU DISSECTION
      </text>
      <text x="570" y="68" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        Deep Packet Inspection (DPI)
      </text>
      <text x="570" y="85" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        MBAP Header Extraction (Unit ID, Length)
      </text>
      <text x="570" y="102" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B">
        APDU Function Code & Byte Splitting
      </text>

      {/* Step Down to Stage 4 */}
      <path
        d="M 680 120 L 680 155"
        fill="none"
        stroke="#174A5B"
        strokeWidth="2"
        markerEnd="url(#scada-arrow)"
      />

      {/* Stage 4: Protocol Validation */}
      <rect x="560" y="160" width="240" height="95" fill="#FFFFFF" stroke="#356859" strokeWidth="1.5" />
      <rect x="560" y="160" width="240" height="22" fill="#356859" />
      <text x="570" y="175" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        [04] PROTOCOL VALIDATION
      </text>
      <text x="570" y="198" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        RFC / Specification Conformance
      </text>
      <text x="570" y="215" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        PDU Length vs Buffer Integrity
      </text>
      <text x="570" y="230" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#356859">
        Memory Safety Boundary Checks
      </text>

      {/* Step Left to Stage 5 */}
      <line x1="560" y1="205" x2="520" y2="205" stroke="#174A5B" strokeWidth="2" markerEnd="url(#scada-arrow)" />

      {/* Stage 5: Command Whitelist */}
      <rect x="285" y="160" width="230" height="95" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <rect x="285" y="160" width="230" height="22" fill="#174A5B" />
      <text x="295" y="175" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        [05] COMMAND WHITELIST
      </text>
      <text x="295" y="198" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        Zero-Trust Function Filtering
      </text>
      <text x="295" y="215" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Permits Authorized FCs (e.g. Read 03/04)
      </text>
      <text x="295" y="230" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8B263E">
        Enforces Policy on Write (05/06/16)
      </text>

      {/* Step Left to Stage 6 */}
      <line x1="285" y1="205" x2="245" y2="205" stroke="#174A5B" strokeWidth="2" markerEnd="url(#scada-arrow)" />

      {/* Stage 6: Physical Boundary Check */}
      <rect x="20" y="160" width="220" height="95" fill="#FFFFFF" stroke="#356859" strokeWidth="1.5" />
      <rect x="20" y="160" width="220" height="22" fill="#356859" />
      <text x="30" y="175" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        [06] PHYSICAL BOUNDARY CHECK
      </text>
      <text x="30" y="198" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        Domain-Specific Safety Rules
      </text>
      <text x="30" y="215" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Substation Transformer Limits
      </text>
      <text x="30" y="230" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#356859">
        Breaker Status Consistency Checks
      </text>

      {/* Step Down to Stage 7 */}
      <path
        d="M 130 255 L 130 295"
        fill="none"
        stroke="#174A5B"
        strokeWidth="2"
        markerEnd="url(#scada-arrow)"
      />

      {/* Stage 7: Telemetry & Alerts Output */}
      <rect x="20" y="300" width="780" height="80" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
      <rect x="20" y="300" width="780" height="22" fill="#F2F2EE" />
      <text x="30" y="315" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="700">
        [07] TELEMETRY DISPATCH & INCIDENT ALERTING
      </text>
      <g transform="translate(30, 335)">
        <text x="0" y="15" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#356859" fontWeight="600">
          ✓ VALIDATED OT TELEMETRY → Streaming JSON / Wazuh HIDS / SIEM Ingestion
        </text>
        <text x="0" y="32" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#8B263E" fontWeight="600">
          ⚠ PROTOCOL ANOMALY / WHITELIST VIOLATION → Immediate Security Alert & Event Isolation
        </text>
      </g>
    </svg>
  );
};

// ============================================================================
// 4. WIRELESS POWER TRANSMISSION SIMULATION HIERARCHY
// Flow: Academic Capstone -> Physical Implementation -> Mathematical Model -> Simulation / Validation
// ============================================================================
export const WptSimHierarchyDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 820 280"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Relationship between Academic Capstone and Numerical Simulation"
    >
      <defs>
        <marker id="wpt-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#174A5B" />
        </marker>
        <pattern id="wpt-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="820" height="280" fill="url(#wpt-grid)" />

      {/* Node 1: Academic Capstone */}
      <rect x="20" y="30" width="175" height="190" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <rect x="20" y="30" width="175" height="24" fill="#174A5B" />
      <text x="28" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        ACADEMIC CAPSTONE
      </text>
      <text x="28" y="75" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
        Islamia University (2016)
      </text>
      <text x="28" y="95" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        B.S. Electrical Eng (Power)
      </text>
      <text x="28" y="115" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Resonant WPT Thesis
      </text>
      <text x="28" y="135" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#356859" fontWeight="600">
        Grade A Board Defense
      </text>
      <text x="28" y="170" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
        Theoretical Foundations:
      </text>
      <text x="28" y="185" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B">
        Near-Field Maxwell Derivations
      </text>

      <line x1="195" y1="125" x2="225" y2="125" stroke="#174A5B" strokeWidth="2" markerEnd="url(#wpt-arrow)" />

      {/* Node 2: Physical Implementation */}
      <rect x="230" y="30" width="175" height="190" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
      <rect x="230" y="30" width="175" height="24" fill="#F2F2EE" />
      <text x="238" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="700">
        PHYSICAL HARDWARE
      </text>
      <text x="238" y="75" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
        Constructed Testbed
      </text>
      <text x="238" y="95" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Helical Copper Coils (L1, L2)
      </text>
      <text x="238" y="115" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Polypropylene Series Tank
      </text>
      <text x="238" y="135" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        ZVS Power MOSFET Inverter
      </text>
      <text x="238" y="170" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
        Metrology Data:
      </text>
      <text x="238" y="185" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B">
        0–150 mm Spatial Separation
      </text>

      <line x1="405" y1="125" x2="435" y2="125" stroke="#174A5B" strokeWidth="2" markerEnd="url(#wpt-arrow)" />

      {/* Node 3: Mathematical Model */}
      <rect x="440" y="30" width="175" height="190" fill="#FFFFFF" stroke="#356859" strokeWidth="1.5" />
      <rect x="440" y="30" width="175" height="24" fill="#356859" />
      <text x="448" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        MATHEMATICAL MODEL
      </text>
      <text x="448" y="75" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
        Coupled-Mode Equations
      </text>
      <text x="448" y="95" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Mutual Inductance M(d)
      </text>
      <text x="448" y="115" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Unloaded Q-Factor: Q = ωL/R
      </text>
      <text x="448" y="135" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Link Efficiency: η(k, Q1, Q2)
      </text>
      <text x="448" y="170" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
        Circuit Equations:
      </text>
      <text x="448" y="185" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859">
        Reflected Impedance Z_ref
      </text>

      <line x1="615" y1="125" x2="645" y2="125" stroke="#174A5B" strokeWidth="2" markerEnd="url(#wpt-arrow)" />

      {/* Node 4: Simulation & Validation */}
      <rect x="650" y="30" width="150" height="190" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <rect x="650" y="30" width="150" height="24" fill="#174A5B" />
      <text x="658" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        SIMULATION
      </text>
      <text x="658" y="75" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
        github.com/Haidriyam/
      </text>
      <text x="658" y="90" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B">
        wireless-power-sim
      </text>
      <text x="658" y="115" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Deterministic Tests
      </text>
      <text x="658" y="135" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        PEP8 Code Hygiene
      </text>
      <text x="658" y="170" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8A8A85">
        CI Workflow:
      </text>
      <text x="658" y="185" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859">
        Automated Matrix Tests
      </text>

      <rect x="20" y="235" width="780" height="30" fill="#FAF9F7" stroke="#D9D9D4" />
      <text x="35" y="254" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111">
        PROGRESSION: Hardware Undergraduate Capstone (2016) ──▶ Open-Source Python Numerical Modeling Suite (2025)
      </text>
    </svg>
  );
};

// ============================================================================
// 5. QUANTUM PQC TLS CANARY ARCHITECTURE
// Flow: CPS Edge Device -> Telemetry Channel -> Hybrid KEM (ML-KEM-768 + X25519) -> Secure Channel -> Telemetry Service
// Labeled Threat Model: Harvest-Now-Decrypt-Later (HNDL)
// ============================================================================
export const QuantumPqcDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 820 400"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Quantum PQC Hybrid KEM TLS Architecture and HNDL Threat Model"
    >
      <defs>
        <marker id="pqc-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#174A5B" />
        </marker>
        <marker id="pqc-threat-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#8B263E" />
        </marker>
        <pattern id="pqc-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="820" height="400" fill="url(#pqc-grid)" />

      {/* Threat Model Callout: Harvest Now Decrypt Later */}
      <rect x="20" y="20" width="780" height="65" fill="#FFF5F5" stroke="#8B263E" strokeWidth="1.5" />
      <text x="35" y="40" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#8B263E" fontWeight="700">
        THREAT MODEL: HARVEST-NOW-DECRYPT-LATER (HNDL) & CRYPTANALYTIC RISK
      </text>
      <text x="35" y="58" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
        Adversaries passively intercept and store encrypted industrial telemetry on long-lifecycle CPS assets. Future large-scale quantum computers (CRQCs) running Shor's algorithm threaten standard discrete-log / ECC key exchange (e.g. standard ECDH/RSA).
      </text>
      <text x="35" y="74" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8B263E" fontWeight="600">
        Mitigation Approach: Hybrid KEM combines classical X25519 with lattice-based NIST FIPS 203 ML-KEM-768 for defense-in-depth.
      </text>

      {/* Block 1: CPS Edge Device */}
      <rect x="20" y="110" width="180" height="150" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <rect x="20" y="110" width="180" height="24" fill="#174A5B" />
      <text x="30" y="126" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        [01] CPS EDGE DEVICE
      </text>
      <text x="30" y="152" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        Industrial Sensor / RTU
      </text>
      <text x="30" y="172" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Substation Sensor Node
      </text>
      <text x="30" y="189" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Low-Footprint Edge Client
      </text>
      <text x="30" y="210" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B" fontWeight="600">
        Generates Critical OT Telemetry
      </text>

      {/* Arrow to Telemetry Channel */}
      <line x1="200" y1="185" x2="235" y2="185" stroke="#174A5B" strokeWidth="2" markerEnd="url(#pqc-arrow)" />

      {/* Block 2: Telemetry Channel */}
      <rect x="240" y="110" width="160" height="150" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
      <rect x="240" y="110" width="160" height="24" fill="#F2F2EE" />
      <text x="250" y="126" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="700">
        [02] TELEMETRY CHANNEL
      </text>
      <text x="250" y="152" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="600">
        Network Ingress
      </text>
      <text x="250" y="172" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        JSON / Protobuf Stream
      </text>
      <text x="250" y="189" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        Public / Boundary Network
      </text>
      <text x="250" y="210" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8B263E">
        Target of Passive Wiretap
      </text>

      {/* Arrow to Hybrid KEM */}
      <line x1="400" y1="185" x2="435" y2="185" stroke="#174A5B" strokeWidth="2" markerEnd="url(#pqc-arrow)" />

      {/* Block 3: Hybrid KEM Layer */}
      <rect x="440" y="105" width="200" height="160" fill="#FFFFFF" stroke="#174A5B" strokeWidth="2" />
      <rect x="440" y="105" width="200" height="24" fill="#174A5B" />
      <text x="450" y="121" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        [03] HYBRID KEM CANARY
      </text>
      <rect x="450" y="137" width="180" height="35" fill="#FAF9F7" stroke="#174A5B" />
      <text x="458" y="152" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B" fontWeight="700">
        NIST FIPS 203: ML-KEM-768
      </text>
      <text x="458" y="165" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Module Lattice Post-Quantum
      </text>

      <text x="535" y="183" fontFamily="IBM Plex Mono, monospace" fontSize="12" fill="#174A5B" fontWeight="700">
        +
      </text>

      <rect x="450" y="190" width="180" height="35" fill="#FAF9F7" stroke="#356859" />
      <text x="458" y="205" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#356859" fontWeight="700">
        CLASSICAL: X25519 ECDH
      </text>
      <text x="458" y="218" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        FIPS/Industry Proven Primitive
      </text>

      <text x="450" y="248" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111" fontWeight="600">
        KDF = HKDF(SS_PQC || SS_Classical)
      </text>

      {/* Arrow to Secure Channel */}
      <line x1="640" y1="185" x2="665" y2="185" stroke="#174A5B" strokeWidth="2" markerEnd="url(#pqc-arrow)" />

      {/* Block 4: Telemetry Service */}
      <rect x="670" y="110" width="130" height="150" fill="#FFFFFF" stroke="#356859" strokeWidth="1.5" />
      <rect x="670" y="110" width="130" height="24" fill="#356859" />
      <text x="678" y="126" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="700">
        [04] TELEMETRY
      </text>
      <text x="678" y="152" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
        Collector Service
      </text>
      <text x="678" y="172" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Authenticated
      </text>
      <text x="678" y="189" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Zero Downgrade
      </text>
      <text x="678" y="210" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="600">
        Decrypted Record
      </text>

      {/* Verification & Canary Safeguard Banner */}
      <rect x="20" y="285" width="780" height="95" fill="#FAF9F7" stroke="#D9D9D4" />
      <text x="35" y="305" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="700">
        CANARY VALIDATION & DOWNGRADE DEFENSE
      </text>
      <text x="35" y="325" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
        • Downgrade Detection: Canary flags any TLS client negotiation falling back to purely classical cipher suites.
      </text>
      <text x="35" y="342" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
        • Wire Overhead Profiling: Tracks transmission overhead of ML-KEM public keys (1,184 bytes) and ciphertexts (1,088 bytes).
      </text>
      <text x="35" y="360" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        • Bandit SAST & CI: Python cryptography audit pipeline validating memory safety and key zeroization upon session close.
      </text>
    </svg>
  );
};

// ============================================================================
// 6. ZERO-TRUST PKI MESH ARCHITECTURE
// Flow: Root CA -> Intermediate CA -> Leaf Certificates -> Service Identity -> mTLS Reverse Proxy -> Authorized Service
// Lifecycle: Issue -> Distribute -> Authenticate -> Rotate / Revoke
// ============================================================================
export const ZeroTrustPkiDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 820 400"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Zero-Trust PKI Mesh Architecture and Certificate Lifecycle"
    >
      <defs>
        <marker id="pki-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#174A5B" />
        </marker>
        <pattern id="pki-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="820" height="400" fill="url(#pki-grid)" />

      {/* Top Half: Trust Chain Hierarchy */}
      <rect x="20" y="20" width="780" height="190" fill="#FFFFFF" stroke="#D9D9D4" />
      <rect x="20" y="20" width="780" height="24" fill="#F2F2EE" />
      <text x="30" y="36" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="700">
        X.509 MUTUAL TLS (mTLS) CERTIFICATE CHAIN ARCHITECTURE
      </text>

      {/* Root CA */}
      <rect x="35" y="60" width="105" height="130" fill="#FAF9F7" stroke="#174A5B" strokeWidth="1.5" />
      <text x="45" y="80" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="700">
        ROOT CA
      </text>
      <text x="45" y="100" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Offline Key
      </text>
      <text x="45" y="115" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        4096-bit RSA /
      </text>
      <text x="45" y="128" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Ed25519
      </text>
      <text x="45" y="150" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
        Signs Intermediates
      </text>

      <line x1="140" y1="125" x2="165" y2="125" stroke="#174A5B" strokeWidth="2" markerEnd="url(#pki-arrow)" />

      {/* Intermediate CA */}
      <rect x="170" y="60" width="115" height="130" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <text x="180" y="80" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="700">
        INTERMEDIATE CA
      </text>
      <text x="180" y="100" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Scoped Issuing CA
      </text>
      <text x="180" y="115" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Edge Mesh Domain
      </text>
      <text x="180" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Strict Path Length = 0
      </text>
      <text x="180" y="150" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="600">
        Issues Leaf Certs
      </text>

      <line x1="285" y1="125" x2="310" y2="125" stroke="#174A5B" strokeWidth="2" markerEnd="url(#pki-arrow)" />

      {/* Leaf Certificates */}
      <rect x="315" y="60" width="115" height="130" fill="#FAF9F7" stroke="#356859" strokeWidth="1.5" />
      <text x="325" y="80" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#356859" fontWeight="700">
        LEAF CERTS
      </text>
      <text x="325" y="100" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Client & Server
      </text>
      <text x="325" y="115" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        SAN DNS / SPIFFE
      </text>
      <text x="325" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Short Validity TTL
      </text>
      <text x="325" y="150" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
        Cryptographic ID
      </text>

      <line x1="430" y1="125" x2="455" y2="125" stroke="#174A5B" strokeWidth="2" markerEnd="url(#pki-arrow)" />

      {/* Service Identity */}
      <rect x="460" y="60" width="105" height="130" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
      <text x="470" y="80" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="700">
        SERVICE ID
      </text>
      <text x="470" y="100" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        mTLS Peer Identity
      </text>
      <text x="470" y="115" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Client Cert Auth
      </text>
      <text x="470" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Zero Static Passwords
      </text>
      <text x="470" y="150" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="600">
        Strict Mutual Auth
      </text>

      <line x1="565" y1="125" x2="590" y2="125" stroke="#174A5B" strokeWidth="2" markerEnd="url(#pki-arrow)" />

      {/* mTLS Reverse Proxy */}
      <rect x="595" y="60" width="115" height="130" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <text x="605" y="80" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#174A5B" fontWeight="700">
        mTLS REVERSE PROXY
      </text>
      <text x="605" y="100" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Nginx Gateway
      </text>
      <text x="605" y="115" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        ssl_verify_client on
      </text>
      <text x="605" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        CRL / OCSP Checks
      </text>
      <text x="605" y="150" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
        Enforces Boundary
      </text>

      <line x1="710" y1="125" x2="730" y2="125" stroke="#174A5B" strokeWidth="2" markerEnd="url(#pki-arrow)" />

      {/* Authorized Service */}
      <rect x="735" y="60" width="60" height="130" fill="#F2F2EE" stroke="#356859" strokeWidth="1.5" />
      <text x="740" y="95" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="700">
        SERVICE
      </text>
      <text x="740" y="115" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Protected
      </text>
      <text x="740" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Internal
      </text>
      <text x="740" y="145" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Socket
      </text>

      {/* Bottom Half: Certificate Lifecycle */}
      <rect x="20" y="230" width="780" height="150" fill="#FFFFFF" stroke="#D9D9D4" />
      <rect x="20" y="230" width="780" height="24" fill="#F2F2EE" />
      <text x="30" y="246" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="700">
        CERTIFICATE LIFECYCLE STATE MACHINE
      </text>

      <g transform="translate(35, 275)">
        {/* State 1: Issue */}
        <rect x="0" y="0" width="150" height="80" fill="#FAF9F7" stroke="#174A5B" strokeWidth="1.5" />
        <text x="15" y="24" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#174A5B" fontWeight="700">
          1. ISSUE
        </text>
        <text x="15" y="44" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
          CSR verification
        </text>
        <text x="15" y="59" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
          CA signature generation
        </text>

        <line x1="150" y1="40" x2="190" y2="40" stroke="#174A5B" strokeWidth="2" markerEnd="url(#pki-arrow)" />

        {/* State 2: Distribute */}
        <rect x="195" y="0" width="150" height="80" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
        <text x="210" y="24" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#111111" fontWeight="700">
          2. DISTRIBUTE
        </text>
        <text x="210" y="44" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
          Atomic key delivery
        </text>
        <text x="210" y="59" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
          POSIX file permissions 0600
        </text>

        <line x1="345" y1="40" x2="385" y2="40" stroke="#174A5B" strokeWidth="2" markerEnd="url(#pki-arrow)" />

        {/* State 3: Authenticate */}
        <rect x="390" y="0" width="160" height="80" fill="#FAF9F7" stroke="#356859" strokeWidth="1.5" />
        <text x="405" y="24" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#356859" fontWeight="700">
          3. AUTHENTICATE
        </text>
        <text x="405" y="44" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
          TLS 1.3 handshake
        </text>
        <text x="405" y="59" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#356859">
          Bidirectional cert validation
        </text>

        <line x1="550" y1="40" x2="590" y2="40" stroke="#174A5B" strokeWidth="2" markerEnd="url(#pki-arrow)" />

        {/* State 4: Rotate / Revoke */}
        <rect x="595" y="0" width="155" height="80" fill="#FFFFFF" stroke="#8B263E" strokeWidth="1.5" />
        <text x="610" y="24" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#8B263E" fontWeight="700">
          4. ROTATE / REVOKE
        </text>
        <text x="610" y="44" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
          Expiry inspection
        </text>
        <text x="610" y="59" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#8B263E">
          CRL update on compromise
        </text>
      </g>
    </svg>
  );
};

// ============================================================================
// 7. GITOPS MESH ORCHESTRATOR ARCHITECTURE
// Flow: Control / GitOps Config -> Service Discovery -> TTL Heartbeats -> Node Registry -> Load Distribution -> Rate Limiting -> Ingress Policy
// ============================================================================
export const GitOpsMeshDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 820 380"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="GitOps Service Mesh Orchestrator Architecture"
    >
      <defs>
        <marker id="mesh-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#174A5B" />
        </marker>
        <pattern id="mesh-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="820" height="380" fill="url(#mesh-grid)" />

      {/* Step 1: Control / GitOps Config */}
      <rect x="20" y="30" width="180" height="90" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <rect x="20" y="30" width="180" height="22" fill="#174A5B" />
      <text x="28" y="45" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        [01] GITOPS CONFIG
      </text>
      <text x="28" y="68" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
        Declarative State Spec
      </text>
      <text x="28" y="83" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Git repository version control
      </text>
      <text x="28" y="98" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B">
        Continuous reconciliation loop
      </text>

      <line x1="200" y1="75" x2="225" y2="75" stroke="#174A5B" strokeWidth="2" markerEnd="url(#mesh-arrow)" />

      {/* Step 2: Service Discovery */}
      <rect x="230" y="30" width="180" height="90" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
      <rect x="230" y="30" width="180" height="22" fill="#F2F2EE" />
      <text x="238" y="45" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#111111" fontWeight="700">
        [02] SERVICE DISCOVERY
      </text>
      <text x="238" y="68" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
        Dynamic Endpoint Registry
      </text>
      <text x="238" y="83" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Multi-node coordination
      </text>
      <text x="238" y="98" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Automated peer registration
      </text>

      <line x1="410" y1="75" x2="435" y2="75" stroke="#174A5B" strokeWidth="2" markerEnd="url(#mesh-arrow)" />

      {/* Step 3: TTL Heartbeats */}
      <rect x="440" y="30" width="170" height="90" fill="#FFFFFF" stroke="#356859" strokeWidth="1.5" />
      <rect x="440" y="30" width="170" height="22" fill="#356859" />
      <text x="448" y="45" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        [03] TTL HEARTBEATS
      </text>
      <text x="448" y="68" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
        Liveness Leases
      </text>
      <text x="448" y="83" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Periodic health pings
      </text>
      <text x="448" y="98" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859">
        Sub-second stale node eviction
      </text>

      <line x1="610" y1="75" x2="635" y2="75" stroke="#174A5B" strokeWidth="2" markerEnd="url(#mesh-arrow)" />

      {/* Step 4: Node Registry */}
      <rect x="640" y="30" width="160" height="90" fill="#FAF9F7" stroke="#174A5B" strokeWidth="1.5" />
      <rect x="640" y="30" width="160" height="22" fill="#174A5B" />
      <text x="648" y="45" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        [04] NODE REGISTRY
      </text>
      <text x="648" y="68" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
        Active Topology View
      </text>
      <text x="648" y="83" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        In-memory routing table
      </text>
      <text x="648" y="98" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B">
        Weighted backend pool
      </text>

      {/* Step down to execution tier */}
      <path
        d="M 720 120 L 720 160"
        fill="none"
        stroke="#174A5B"
        strokeWidth="2"
        markerEnd="url(#mesh-arrow)"
      />

      {/* Step 5: Load Distribution */}
      <rect x="520" y="165" width="280" height="95" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <rect x="520" y="165" width="280" height="22" fill="#174A5B" />
      <text x="530" y="180" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        [05] LOAD DISTRIBUTION
      </text>
      <text x="530" y="202" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
        Round-Robin & Weighting Algorithm
      </text>
      <text x="530" y="217" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Spreads requests evenly across registered live nodes
      </text>
      <text x="530" y="232" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B">
        Bypasses degraded or unverified targets
      </text>

      {/* Step left to Step 6 */}
      <line x1="520" y1="212" x2="480" y2="212" stroke="#174A5B" strokeWidth="2" markerEnd="url(#mesh-arrow)" />

      {/* Step 6: Rate Limiting */}
      <rect x="220" y="165" width="255" height="95" fill="#FFFFFF" stroke="#356859" strokeWidth="1.5" />
      <rect x="220" y="165" width="255" height="22" fill="#356859" />
      <text x="230" y="180" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        [06] TOKEN-BUCKET RATE LIMITING
      </text>
      <text x="230" y="202" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
        Burst Traffic Shaping & Leaky Bucket
      </text>
      <text x="230" y="217" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Prevents resource exhaustion under sudden spikes
      </text>
      <text x="230" y="232" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859">
        Rejects out-of-quota flood payloads
      </text>

      {/* Step left to Step 7 */}
      <line x1="220" y1="212" x2="185" y2="212" stroke="#174A5B" strokeWidth="2" markerEnd="url(#mesh-arrow)" />

      {/* Step 7: Ingress Policy */}
      <rect x="20" y="165" width="160" height="95" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <rect x="20" y="165" width="160" height="22" fill="#174A5B" />
      <text x="28" y="180" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#FFFFFF" fontWeight="700">
        [07] INGRESS POLICY
      </text>
      <text x="28" y="202" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
        CIDR Inspection
      </text>
      <text x="28" y="217" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        IP prefix validation
      </text>
      <text x="28" y="232" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B">
        Zero-trust boundary
      </text>

      {/* Verification footer */}
      <rect x="20" y="280" width="780" height="75" fill="#FAF9F7" stroke="#D9D9D4" />
      <text x="35" y="300" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="700">
        VERIFICATION: MULTI-NODE TEST HARNESS & ROOTLESS CONTAINER
      </text>
      <text x="35" y="320" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
        • Distributed Test Harness: Validates consensus and failover across simulated network partitions.
      </text>
      <text x="35" y="338" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        • Injection Payload Defense: Boundary checks guard against injection payloads in header keys and routing parameters.
      </text>
    </svg>
  );
};

// ============================================================================
// 8. ATTACK SURFACE INTEL PIPELINE ARCHITECTURE
// Flow: Multi-Source Recon Data -> Normalization -> Asset / Exposure Analysis -> Exposure Scoring -> SIEM-Ready JSON
// ============================================================================
export const AttackSurfaceIntelDiagram: React.FC = () => {
  return (
    <svg
      viewBox="0 0 820 320"
      className="w-full h-auto text-[#111111]"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Attack Surface Intelligence Pipeline Architecture"
    >
      <defs>
        <marker id="intel-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 8 5 L 0 9 z" fill="#174A5B" />
        </marker>
        <pattern id="intel-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#EDEDEA" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="820" height="320" fill="url(#intel-grid)" />

      {/* Step 1: Multi-Source Recon Data */}
      <rect x="20" y="30" width="145" height="175" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <rect x="20" y="30" width="145" height="24" fill="#174A5B" />
      <text x="28" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="700">
        [01] RECON DATA
      </text>
      <text x="28" y="75" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
        Multi-Source Feeds
      </text>
      <text x="28" y="95" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        DNS Zone Telemetry
      </text>
      <text x="28" y="112" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Certificate Logs (CT)
      </text>
      <text x="28" y="129" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Exposed Port Banners
      </text>
      <text x="28" y="146" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        ASN / IP Ranges
      </text>
      <text x="28" y="170" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#174A5B" fontWeight="600">
        Raw Ingestion
      </text>

      <line x1="165" y1="115" x2="190" y2="115" stroke="#174A5B" strokeWidth="2" markerEnd="url(#intel-arrow)" />

      {/* Step 2: Normalization */}
      <rect x="195" y="30" width="145" height="175" fill="#FFFFFF" stroke="#D9D9D4" strokeWidth="1.5" />
      <rect x="195" y="30" width="145" height="24" fill="#F2F2EE" />
      <text x="203" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="700">
        [02] NORMALIZATION
      </text>
      <text x="203" y="75" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
        Schema Harmonization
      </text>
      <text x="203" y="95" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Deduplication engine
      </text>
      <text x="203" y="112" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        FQDN canonicalization
      </text>
      <text x="203" y="129" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        IPv4 / IPv6 validation
      </text>
      <text x="203" y="146" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        UTC timestamp sync
      </text>
      <text x="203" y="170" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="600">
        Clean Schema Record
      </text>

      <line x1="340" y1="115" x2="365" y2="115" stroke="#174A5B" strokeWidth="2" markerEnd="url(#intel-arrow)" />

      {/* Step 3: Asset & Exposure Analysis */}
      <rect x="370" y="30" width="150" height="175" fill="#FFFFFF" stroke="#356859" strokeWidth="1.5" />
      <rect x="370" y="30" width="150" height="24" fill="#356859" />
      <text x="378" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="700">
        [03] EXPOSURE ANALYSIS
      </text>
      <text x="378" y="75" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
        Vector Inspection
      </text>
      <text x="378" y="95" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Service fingerprinting
      </text>
      <text x="378" y="112" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Expired / weak certs
      </text>
      <text x="378" y="129" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Orphaned cloud assets
      </text>
      <text x="378" y="146" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Open administrative ports
      </text>
      <text x="378" y="170" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="600">
        Identifies Vectors
      </text>

      <line x1="520" y1="115" x2="545" y2="115" stroke="#174A5B" strokeWidth="2" markerEnd="url(#intel-arrow)" />

      {/* Step 4: Exposure Scoring */}
      <rect x="550" y="30" width="125" height="175" fill="#FFFFFF" stroke="#174A5B" strokeWidth="1.5" />
      <rect x="550" y="30" width="125" height="24" fill="#174A5B" />
      <text x="558" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="700">
        [04] SCORING
      </text>
      <text x="558" y="75" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111" fontWeight="600">
        Heuristic Weights
      </text>
      <text x="558" y="95" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Severity tiers
      </text>
      <text x="558" y="112" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Impact assessment
      </text>
      <text x="558" y="129" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Exploitability metric
      </text>
      <text x="558" y="170" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#8B263E" fontWeight="600">
        Risk Priority
      </text>

      <line x1="675" y1="115" x2="700" y2="115" stroke="#174A5B" strokeWidth="2" markerEnd="url(#intel-arrow)" />

      {/* Step 5: SIEM-Ready JSON */}
      <rect x="705" y="30" width="95" height="175" fill="#FAF9F7" stroke="#356859" strokeWidth="1.5" />
      <rect x="705" y="30" width="95" height="24" fill="#356859" />
      <text x="712" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FFFFFF" fontWeight="700">
        [05] JSON
      </text>
      <text x="712" y="75" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#111111" fontWeight="600">
        SIEM-Ready
      </text>
      <text x="712" y="95" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Standardized
      </text>
      <text x="712" y="110" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Payload
      </text>
      <text x="712" y="130" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Wazuh /
      </text>
      <text x="712" y="145" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#555555">
        Elastic
      </text>
      <text x="712" y="170" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#356859" fontWeight="600">
        Telemetry Out
      </text>

      {/* Footer Info */}
      <rect x="20" y="225" width="780" height="75" fill="#FFFFFF" stroke="#D9D9D4" />
      <text x="35" y="247" fontFamily="IBM Plex Mono, monospace" fontSize="10" fill="#174A5B" fontWeight="700">
        RELIABILITY & DEVSECOPS VERIFICATION
      </text>
      <text x="35" y="267" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#111111">
        • Exposure Heuristic Unit Tests: Verified test suites validate scoring algorithms across known vulnerability datasets.
      </text>
      <text x="35" y="284" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#555555">
        • Bandit SAST & Automated Docker: Continuous static analysis gate and rootless container build enforcing zero privilege escalation.
      </text>
    </svg>
  );
};
