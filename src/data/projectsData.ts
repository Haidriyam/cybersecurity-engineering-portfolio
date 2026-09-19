import { ProjectItem } from '../types';

export const ALL_PROJECTS: ProjectItem[] = [
  // ==========================================================================
  // [01] FLAGSHIP ACADEMIC CAPSTONE
  // Taxonomy: FOUNDATIONAL ENGINEERING PROJECTS & CYBER-PHYSICAL SYSTEMS
  // ==========================================================================
  {
    slug: 'resonant-wireless-power',
    id: 'PROJECT / WPT-001',
    projectNumber: '01',
    title: 'Resonant Inductive Wireless Power Transmission System',
    subtitle: 'Undergraduate capstone thesis: Near-field electromagnetic energy transfer modeling, resonant LC tank compensation, and hardware inverter implementation.',
    domain: 'Electrical Engineering / Electromagnetic Modeling',
    taxonomyCategory: 'FOUNDATIONAL ENGINEERING PROJECTS',
    filterDomains: ['ELECTRICAL', 'CYBER-PHYSICAL', 'DISTRIBUTED SYSTEMS'],
    date: 'Aug 2015 — Jun 2016 / CAPSTONE THESIS',
    status: 'Complete',
    claim: 'Modeled Maxwell equations and coupled-mode theory to design, construct, and evaluate a series-series resonant inductive power link with zero-voltage switching driving topologies.',
    technicalSummary: 'Modeled Maxwell\'s equations and coupled-mode theory for near-field electromagnetic energy transfer over variable air gaps (0–150 mm). Designed, wound, and tuned helical magnetic induction coils. Developed primary and secondary resonant LC tanks to cancel reactive power and maximize power factor. Fabricated switching driver/inverter hardware with gate-drive isolation. Evaluated transmission efficiency curves, Q factors, and thermal behavior using DSO oscilloscopes, RF power meters, and signal generators. Authored thesis documentation containing mathematical derivations, schematic designs, and empirical performance metrics, defended before the examination board.',
    architectureDescription: 'The experimental system comprises a regulated DC input supply, a high-frequency half-bridge power inverter utilizing switching power MOSFETs, primary and secondary air-core helical resonant coils with series discrete polypropylene film capacitors, a high-speed synchronous rectification bridge, and an adjustable resistive load bench.',
    implementationDetails: [
      'Modeled Maxwell\'s equations and coupled-mode theory for near-field electromagnetic energy transfer over variable air gaps.',
      'Designed, wound, and tuned helical magnetic induction coils to achieve high quality factor (Q).',
      'Developed primary and secondary resonant LC tanks to cancel reactive power and maximize power factor.',
      'Fabricated switching driver/inverter hardware with gate-drive isolation and adjustable dead time.',
      'Evaluated transmission efficiency curves, Q factors, and thermal behavior using DSO oscilloscopes, RF power meters, and signal generators.',
      'Authored thesis documentation containing mathematical derivations, schematic designs, and empirical performance metrics, defended before the examination board.'
    ],
    technicalFocus: [
      'near-field electromagnetic energy transfer',
      'resonant LC tank compensation',
      'coupled-mode theory',
      'unloaded Q-factor optimization',
      'zero-voltage switching inverter topology',
      'laboratory metrology with DSO and RF instruments'
    ],
    keyTechnologies: ['Coupled-Mode Theory', 'LC Resonant Tanks', 'ZVS Inverter', 'Helical Coils', 'DSO Metrology', 'RF Power Meters'],
    securityValidation: ['Galvanic isolation metrology', 'High-voltage gate-drive barrier validation', 'Thermal dissipation safety testing'],
    metrics: [
      { label: 'Institution', value: 'The Islamia University of Bahawalpur', unit: 'university' },
      { label: 'Department', value: 'Department of Electrical Engineering', unit: 'academic unit' },
      { label: 'Period', value: 'Aug 2015 — Jun 2016', unit: 'capstone' },
      { label: 'Evaluation Grade', value: 'Grade A', unit: 'board defense' }
    ],
    tags: ['Resonant Induction', 'LC Tank Matching', 'Power Electronics', 'Helical Coils', 'DSO Metrology', 'Capstone Thesis'],
    repositoryUrl: 'https://github.com/Haidriyam/wireless-power-transmission-sim',
    documentationUrl: '/notes/resonant-inductive-coupling',
    isCapstone: true,
    institution: 'The Islamia University of Bahawalpur',
    period: 'Aug 2015 — Jun 2016',
    grade: 'Grade A',
    problemStatement: 'Air-gap separation introduces strong magnetic leakage flux, causing severe inductive reactance that degrades transmission efficiency unless compensated by precisely tuned resonant tanks.',
    systemModel: 'Coupled linear differential equations linking primary and secondary RLC loops via mutual inductance M(d), where M is a function of spatial axial separation d.',
    securityModel: 'Physical layer isolation: Galvanic isolation barrier separating mains power driver from secondary low-voltage rectified load bench.',
    validationApproach: 'Empirical benchtop metrology using calibrated DSO oscilloscopes, differential probes, and RF power meters across 0–150 mm physical test runs.',
    relatedResearch: ['Electromagnetic Field Theory', 'Resonant Inductive Coupling Dynamics', 'Power Electronics Inverters'],
    relatedProjects: [
      { slug: 'wireless-power-transmission-sim', title: 'Wireless Power Transmission Simulation', relationshipReason: 'Open-source Python numerical suite implementing the mathematical models first derived in this capstone.' },
      { slug: 'microgrid-resilient-control', title: 'Microgrid Resilient Control', relationshipReason: 'Extends foundational electrical power engineering concepts to islanded microgrid control dynamics.' }
    ],
    evidenceStatus: 'VERIFIED_ARTIFACT'
  },

  // ==========================================================================
  // [02] MICROGRID RESILIENT CONTROL
  // Category: CYBER-PHYSICAL SYSTEMS & ELECTRICAL INFRASTRUCTURE
  // ==========================================================================
  {
    slug: 'microgrid-resilient-control',
    id: 'PROJECT / CPS-001',
    projectNumber: '02',
    title: 'MICROGRID RESILIENT CONTROL',
    subtitle: 'Secondary frequency consensus restoration on islanded AC microgrids under False Data Injection (FDI) attacks.',
    domain: 'Cyber-Physical Systems / Electrical Infrastructure / Control Security',
    taxonomyCategory: 'CYBER-PHYSICAL SYSTEMS & ELECTRICAL INFRASTRUCTURE',
    filterDomains: ['CYBER-PHYSICAL', 'ELECTRICAL', 'INDUSTRIAL SECURITY'],
    date: '2025 / OPEN-SOURCE CPS REPOSITORY',
    status: 'Active Testbed',
    claim: 'Implements secondary frequency consensus restoration on islanded AC microgrid dynamics resilient to adversarial measurement corruption.',
    technicalSummary: 'Secondary frequency consensus restoration on islanded AC microgrids under False Data Injection (FDI) attacks. Features distributed cooperative control algorithms for inverter-based distributed energy resources (DERs), modeling physical frequency droop dynamics coupled with resilient state exchange across communication topologies. Incorporates detection and mitigation of adversarial data corruption targeting consensus communication links.',
    architectureDescription: 'Distributed cyber-physical architecture coupling physical inverter droop dynamics (P-f, Q-V) with a discrete consensus communication graph. Each node computes local state measurements, exchanges state vectors with graph neighbors, applies resilient filtering to detect FDI anomalies, and generates secondary frequency restoration control inputs.',
    implementationDetails: [
      'Formulated state-space mathematical model of inverter-based distributed generation units in an islanded AC microgrid.',
      'Implemented primary P-f droop control coupled with distributed secondary consensus restoration.',
      'Constructed False Data Injection (FDI) threat vectors corrupting inter-inverter communication channels.',
      'Developed resilient consensus filtering rejecting outlier neighbor states exceeding physical dynamical bounds.',
      'Integrated continuous CPS dynamics test suite evaluating stability during dynamic islanding transitions.'
    ],
    technicalFocus: [
      'islanded AC microgrids',
      'secondary frequency control',
      'distributed consensus',
      'False Data Injection attacks',
      'resilient control',
      'CPS dynamics'
    ],
    keyTechnologies: [
      'Inverter Droop Dynamics (P-f / Q-V)',
      'Distributed Consensus Graph Theory',
      'Byzantine Resilient Filtering',
      'Python CPS Dynamics Suite',
      'Docker Rootless Image'
    ],
    securityValidation: [
      'Bandit SAST security scanning',
      'PEP8 / flake8 code hygiene enforcement',
      'CPS dynamics test suite for frequency stability bounds',
      'Hardened rootless Docker containerization'
    ],
    threatModel: 'False Data Injection (FDI) targeting measurement and communication links between inverter agents, attempting to deceive distributed secondary controllers and induce grid frequency collapse.',
    problemStatement: 'Distributed consensus algorithms in islanded microgrids assume honest state reporting; malicious manipulation of exchanged frequency data drives inverters into desynchronization and trip conditions.',
    systemModel: 'Physical microgrid dynamics M_i·ω̇_i + D_i·ω_i = P_mi - P_ei combined with discrete communication graph Laplacian L and secondary PI consensus feedback.',
    securityModel: 'Resilient consensus filtering: Validates incoming state deviations against known physical slew limits before incorporating them into local frequency integrators.',
    validationApproach: 'Automated CPS dynamics simulation test suite verifying that state consensus is restored without exceeding frequency trip thresholds under simulated FDI injections.',
    cicdWorkflow: [
      'GitHub Actions automated pipeline on push/PR',
      'Bandit static application security testing (SAST)',
      'Flake8 code hygiene and style compliance',
      'Pytest suite verifying numerical convergence and boundary conditions',
      'Rootless Docker container build with minimal attack surface'
    ],
    metrics: [
      { label: 'Control Tier', value: 'Secondary Frequency Restoration', unit: 'microgrid' },
      { label: 'Network Model', value: 'Islanded AC Distributed Topology', unit: 'CPS' },
      { label: 'Threat Class', value: 'False Data Injection (FDI)', unit: 'threat model' },
      { label: 'Verification', value: 'Bandit SAST & Dynamics Suite', unit: 'CI/CD gate' }
    ],
    tags: ['Microgrid', 'Resilient Control', 'False Data Injection', 'Consensus Algorithms', 'Inverter Droop', 'Cyber-Physical'],
    repositoryUrl: 'https://github.com/Haidriyam/microgrid-resilient-control',
    documentationUrl: '/projects/microgrid-resilient-control',
    relatedResearch: [
      'Cyber-Physical Systems Boundary Security',
      'Distributed Consensus Algorithms',
      'Smart Grid Resilience under FDI Attacks'
    ],
    relatedProjects: [
      { slug: 'scada-ids-telemetry-engine', title: 'SCADA IDS Telemetry Engine', relationshipReason: 'Complements control-layer resilience with network-layer deep packet inspection of industrial substation traffic.' },
      { slug: 'battery-ekf-state-estimator', title: 'Battery EKF State Estimator', relationshipReason: 'Shares the embedded cyber-physical state estimation paradigm applied to battery storage systems.' }
    ],
    evidenceStatus: 'LABORATORY_BENCHMARK'
  },

  // ==========================================================================
  // [03] BATTERY EKF STATE ESTIMATOR
  // Category: CYBER-PHYSICAL SYSTEMS & ELECTRICAL INFRASTRUCTURE
  // ==========================================================================
  {
    slug: 'battery-ekf-state-estimator',
    id: 'PROJECT / CPS-002',
    projectNumber: '03',
    title: 'BATTERY EKF STATE ESTIMATOR',
    subtitle: 'Discrete Extended Kalman Filter (EKF) for Li-ion State-of-Charge estimation combined with boundary-checked CAN-bus telemetry parsing and frame fuzzing.',
    domain: 'Cyber-Physical Systems / Battery Systems / Embedded Security',
    taxonomyCategory: 'CYBER-PHYSICAL SYSTEMS & ELECTRICAL INFRASTRUCTURE',
    filterDomains: ['CYBER-PHYSICAL', 'ELECTRICAL', 'DEVSECOPS', 'AUTOMATION'],
    date: '2025 / OPEN-SOURCE CPS REPOSITORY',
    status: 'Active Testbed',
    claim: 'Pairs discrete Extended Kalman Filtering with strict CAN-bus frame boundary validation and frame fuzzing to secure battery telemetry against malformed data injection.',
    technicalSummary: 'Discrete Extended Kalman Filter (EKF) for Li-ion State-of-Charge estimation combined with boundary-checked CAN-bus telemetry parsing and frame fuzzing. Implements an equivalent circuit model (Thevenin ECM) capturing battery polarization dynamics and nonlinear open-circuit voltage curves. Pairs filtering mathematics with defensive embedded software engineering, including frame validation, range boundaries, and fuzzing resistance.',
    architectureDescription: 'Dual-domain architecture separating physical electrochemical dynamics from the embedded software security boundary. Physical sensors stream voltage, current, and temperature telemetry over a CAN-bus interface. The software layer performs strict CAN frame decoding, boundary validation, and sanitization before feeding telemetry into the discrete EKF algorithm.',
    implementationDetails: [
      'Implemented discrete Extended Kalman Filter (EKF) state-space formulation with analytical Jacobian matrix computation.',
      'Modeled nonlinear Open-Circuit Voltage versus State-of-Charge (OCV-SoC) relationship for Li-ion cells.',
      'Engineered CAN-bus message dissector enforcing strict Data Length Code (DLC) and Identifier whitelisting.',
      'Developed boundary-checking rules discarding anomalous voltage steps, out-of-range currents, and thermal spikes.',
      'Constructed automated CAN frame fuzzing test suite verifying parser robustness against corrupted byte payloads.'
    ],
    technicalFocus: [
      'Li-ion battery state estimation',
      'State of Charge (SoC)',
      'discrete Extended Kalman Filter',
      'CAN-bus telemetry',
      'boundary validation',
      'protocol fuzzing'
    ],
    keyTechnologies: [
      'Discrete Extended Kalman Filter (EKF)',
      'Equivalent Circuit Model (Thevenin ECM)',
      'CAN Bus (ISO 11898) Parser',
      'Boundary Validation Rules',
      'Protocol Fuzzing Harness'
    ],
    securityValidation: [
      'Stochastic convergence verification across noisy drive cycles',
      'CAN frame fuzzing suite evaluating memory safety and crash resilience',
      'Bandit SAST security audit',
      'Rootless container build preventing host privilege escalation'
    ],
    threatModel: 'Compromised CAN-bus nodes transmitting out-of-spec frames, integer overflows, or corrupted CRC payloads to crash the battery management system (BMS) or corrupt state estimation.',
    problemStatement: 'Standard Kalman filters assume honest sensor data; unvalidated CAN frames can exploit parser vulnerabilities or inject arbitrary state offsets, hiding thermal runaway or catastrophic cell depletion.',
    systemModel: 'Discrete state-space model: x_k = [SoC_k, V_1,k]^T with nonlinear measurement function y_k = OCV(SoC_k) - R_1·I_1,k - R_0·I_k + v_k.',
    securityModel: 'Software security boundary: Multi-stage input validation rejecting frame lengths != 8, verifying identifier whitelist, and enforcing physical delta-limits (|dV/dt| < threshold).',
    validationApproach: 'Stochastic convergence testing across synthetic dynamic drive cycles combined with automated frame fuzzing feeding 100,000+ malformed CAN packets.',
    cicdWorkflow: [
      'GitHub Actions automated test matrix',
      'Unit tests for Jacobian matrices and Kalman gain calculation',
      'Protocol fuzzing harness executed in rootless container',
      'Bandit SAST and PEP8 compliance gate'
    ],
    metrics: [
      { label: 'Algorithm', value: 'Discrete Extended Kalman Filter (EKF)', unit: 'estimation' },
      { label: 'Bus Protocol', value: 'CAN 2.0B Telemetry Ingestion', unit: 'interface' },
      { label: 'Validation Tier', value: 'Frame Fuzzing & Boundary Checking', unit: 'embedded security' },
      { label: 'Build Target', value: 'Rootless Containerized Pipeline', unit: 'DevSecOps' }
    ],
    tags: ['Battery Systems', 'Extended Kalman Filter', 'State of Charge', 'CAN-Bus', 'Fuzzing', 'Embedded Security'],
    repositoryUrl: 'https://github.com/Haidriyam/battery-ekf-state-estimator',
    documentationUrl: '/projects/battery-ekf-state-estimator',
    relatedResearch: [
      'Electrochemical State Estimation',
      'Embedded Automotive Network Security',
      'Resilient Sensor Telemetry'
    ],
    relatedProjects: [
      { slug: 'microgrid-resilient-control', title: 'Microgrid Resilient Control', relationshipReason: 'Integrates battery storage state estimation into islanded microgrid energy management and control.' },
      { slug: 'scada-ids-telemetry-engine', title: 'SCADA IDS Telemetry Engine', relationshipReason: 'Complements embedded CAN telemetry validation with industrial substation SCADA telemetry analysis.' }
    ],
    evidenceStatus: 'LABORATORY_BENCHMARK'
  },

  // ==========================================================================
  // [04] SCADA IDS TELEMETRY ENGINE
  // Category: CYBER-PHYSICAL SYSTEMS & ELECTRICAL INFRASTRUCTURE
  // ==========================================================================
  {
    slug: 'scada-ids-telemetry-engine',
    id: 'PROJECT / CPS-003',
    projectNumber: '04',
    title: 'SCADA IDS TELEMETRY ENGINE',
    subtitle: 'Deep-packet APDU dissector for Modbus TCP/IEC SCADA protocols with zero-trust command whitelisting and substation physical anomaly detection.',
    domain: 'Industrial Security / SCADA / OT Security',
    taxonomyCategory: 'CYBER-PHYSICAL SYSTEMS & ELECTRICAL INFRASTRUCTURE',
    filterDomains: ['INDUSTRIAL SECURITY', 'CYBER-PHYSICAL', 'ZERO TRUST', 'DEVSECOPS'],
    date: '2025 / OPEN-SOURCE CPS REPOSITORY',
    status: 'Active Testbed',
    claim: 'Performs deep APDU protocol inspection and zero-trust command whitelisting to detect industrial network intrusions and physical boundary violations.',
    technicalSummary: 'Deep-packet APDU dissector for Modbus TCP/IEC SCADA protocols with zero-trust command whitelisting and substation physical anomaly detection. Inspects industrial network traffic at the application protocol data unit (APDU) layer, enforcing zero-trust command policies (e.g. blocking unauthorized coil writes or register overrides) and verifying telemetry against physical domain constraints.',
    architectureDescription: 'Passive industrial packet processing engine sitting on mirrored SPAN/TAP ports. Deconstructs TCP/IP framing into MBAP headers, extracts protocol function codes and memory addresses, evaluates commands against strict policy whitelists, and computes physical consistency metrics before streaming normalized telemetry to SIEM collectors.',
    implementationDetails: [
      'Engineered deep-packet APDU parser for Modbus TCP (port 502) extracting Unit ID, Function Code, and byte-level payload.',
      'Implemented zero-trust function code whitelisting (permitting read operations, restricting unauthorized write sequences).',
      'Configured physical boundary rule validation checking register values against transformer ratings and breaker states.',
      'Engineered streaming telemetry dispatch generating structured JSON alerts compatible with Wazuh and enterprise SIEMs.',
      'Integrated automated memory safety fuzzing test suite ensuring APDU parsing resilience against truncated packets.'
    ],
    technicalFocus: [
      'Modbus TCP',
      'IEC SCADA protocols',
      'APDU inspection',
      'deep packet analysis',
      'command whitelisting',
      'substation physical anomaly detection',
      'industrial telemetry'
    ],
    keyTechnologies: [
      'Modbus TCP Protocol Parser',
      'APDU Header Dissection',
      'Zero-Trust Command Whitelisting',
      'Physical Domain Rule Engine',
      'Wazuh / SIEM JSON Telemetry Stream'
    ],
    securityValidation: [
      'Memory safety fuzzing on malformed MBAP headers and truncated APDU payloads',
      'Physical boundary rule test suite for substation telemetry violations',
      'Bandit SAST security audit',
      'Automated CI/CD regression verification'
    ],
    threatModel: 'Adversaries attempting unauthorized control override (e.g., forcing trip coils, modifying protective relay thresholds) via unauthenticated industrial protocols inside Purdue Level 1/2 networks.',
    problemStatement: 'Legacy SCADA protocols lack native authentication and encryption; unauthorized commands blend seamlessly with legitimate polling unless inspected at the APDU layer against operational rules.',
    systemModel: 'Finite state machine modeling expected SCADA master-outstation polling cycles coupled with physical boundary limits for substation telemetry variables.',
    securityModel: 'Zero-trust command whitelisting: Rejects non-whitelisted function codes (e.g. FC 05, 06, 16) originating from untrusted ingress addresses, logging immediate high-severity alerts.',
    validationApproach: 'Fuzz testing parser with mutated MBAP headers and out-of-order byte streams, paired with replay of real-world substation PCAP traces.',
    cicdWorkflow: [
      'GitHub Actions test runner verifying APDU dissector against edge cases',
      'Bandit SAST scan evaluating injection risks and string handling',
      'Code style enforcement with flake8',
      'Packaging into hardened rootless Docker container'
    ],
    metrics: [
      { label: 'Protocols Supported', value: 'Modbus TCP & IEC SCADA APDU', unit: 'industrial OT' },
      { label: 'Inspection Depth', value: 'Application Protocol Data Unit (APDU)', unit: 'packet layer' },
      { label: 'Security Policy', value: 'Zero-Trust Command Whitelisting', unit: 'enforcement' },
      { label: 'Output Stream', value: 'Normalized JSON SIEM Telemetry', unit: 'integration' }
    ],
    tags: ['SCADA', 'Modbus TCP', 'APDU Inspection', 'OT Security', 'Industrial IDS', 'Zero-Trust'],
    repositoryUrl: 'https://github.com/Haidriyam/scada-ids-telemetry-engine',
    documentationUrl: '/projects/scada-ids-telemetry-engine',
    relatedResearch: [
      'Industrial Control System Security (IEC 62443)',
      'Deep Packet Inspection in Cyber-Physical Systems',
      'Substation Telemetry Integrity'
    ],
    relatedProjects: [
      { slug: 'microgrid-resilient-control', title: 'Microgrid Resilient Control', relationshipReason: 'Protects the underlying industrial communication fabric that microgrid consensus controllers rely upon.' },
      { slug: 'zero-trust-pki-mesh', title: 'Zero-Trust PKI Mesh', relationshipReason: 'Provides mutual TLS cryptographic identity for industrial service endpoints.' }
    ],
    evidenceStatus: 'LABORATORY_BENCHMARK'
  },

  // ==========================================================================
  // [05] WIRELESS POWER TRANSMISSION SIMULATION
  // Category: FOUNDATIONAL ENGINEERING PROJECTS & ELECTRICAL INFRASTRUCTURE
  // ==========================================================================
  {
    slug: 'wireless-power-transmission-sim',
    id: 'PROJECT / WPT-002',
    projectNumber: '05',
    title: 'WIRELESS POWER TRANSMISSION SIMULATION',
    subtitle: 'Mathematical modeling of resonant magnetic inductive coupling, unloaded Q-factor dynamics, and mutual link efficiency optimization.',
    domain: 'Electrical Engineering / Electromagnetic Modeling',
    taxonomyCategory: 'FOUNDATIONAL ENGINEERING PROJECTS',
    filterDomains: ['ELECTRICAL', 'CYBER-PHYSICAL', 'AUTOMATION'],
    date: '2025 / OPEN-SOURCE NUMERICAL SUITE',
    status: 'Active Testbed',
    claim: 'Provides numerical validation of resonant inductive wireless power transfer dynamics, directly connecting undergraduate capstone hardware with open-source modeling.',
    technicalSummary: 'Mathematical modeling of resonant magnetic inductive coupling, unloaded Q-factor dynamics, and mutual link efficiency optimization. Developed in Python with automated numerical testing, this repository translates physical electromagnetic hardware experiments into reusable simulation models.',
    architectureDescription: 'Numerical modeling hierarchy connecting physical electromagnetic parameters (coil geometry, wire gauge, turns ratio, ESR) to coupled-mode mathematical derivations, computing spatial mutual inductance curves M(d) and resonant tank efficiency surfaces.',
    implementationDetails: [
      'Implemented coupled-mode theory differential equations for series-series resonant circuits.',
      'Derived numerical calculation routines for mutual inductance M over variable axial distance d.',
      'Formulated unloaded quality factor (Q = ωL / R) dynamics across frequency sweeps.',
      'Created automated parametric optimization scripts determining maximum efficiency impedance matching.',
      'Configured deterministic test suite verifying numerical model convergence against theoretical benchmarks.'
    ],
    technicalFocus: [
      'resonant magnetic inductive coupling',
      'unloaded Q-factor dynamics',
      'mutual link efficiency optimization',
      'numerical modeling',
      'coupled-mode theory',
      'electromagnetics'
    ],
    keyTechnologies: [
      'Coupled-Mode Mathematical Equations',
      'Python Numerical Modeling (NumPy / SciPy)',
      'Parametric Optimization Routines',
      'Deterministic Numerical Testing',
      'Automated CI Workflow'
    ],
    securityValidation: [
      'Deterministic numerical verification tests with fixed tolerance bounds',
      'PEP8 style enforcement and code hygiene audits',
      'Automated GitHub Actions CI validation across multiple Python versions'
    ],
    problemStatement: 'Designing efficient resonant wireless power transfer systems requires evaluating complex trade-offs between coil geometry, Q-factor, and operating frequency across spatial separations.',
    systemModel: 'Series-series resonant circuit model where reflected impedance Z_ref = (ωM)^2 / (R_2 + j(ωL_2 - 1/(ωC_2))) is matched to inverter output impedance.',
    securityModel: 'Software integrity: Enforces deterministic numerical stability and reproducible test results with zero external runtime dependencies.',
    validationApproach: 'Automated test suite asserting numerical results against analytical closed-form solutions with relative tolerance < 1e-6.',
    cicdWorkflow: [
      'GitHub Actions automated build and test pipeline',
      'Pytest suite verifying numerical consistency across frequency vectors',
      'Flake8 code hygiene enforcement'
    ],
    metrics: [
      { label: 'Foundation', value: 'Resonant Inductive Capstone Thesis', unit: 'academic basis' },
      { label: 'Methodology', value: 'Coupled-Mode Mathematical Modeling', unit: 'theory' },
      { label: 'Test Suite', value: 'Deterministic Numerical Verification', unit: 'quality' },
      { label: 'Code Hygiene', value: 'PEP8 / Flake8 Compliant', unit: 'standard' }
    ],
    tags: ['Wireless Power', 'Resonant Induction', 'Numerical Simulation', 'Coupled-Mode Theory', 'Q-Factor', 'Python'],
    repositoryUrl: 'https://github.com/Haidriyam/wireless-power-transmission-sim',
    documentationUrl: '/projects/wireless-power-transmission-sim',
    relatedResearch: [
      'Resonant Magnetic Inductive Coupling Dynamics',
      'Near-Field Wireless Energy Transmission',
      'High-Q Coil Design and Optimization'
    ],
    relatedProjects: [
      { slug: 'resonant-wireless-power', title: 'Resonant Inductive Wireless Power Transmission System', relationshipReason: 'Direct physical implementation and academic capstone thesis on which this numerical model is founded.' },
      { slug: 'microgrid-resilient-control', title: 'Microgrid Resilient Control', relationshipReason: 'Applies electrical network modeling techniques to larger-scale distributed power systems.' }
    ],
    evidenceStatus: 'VERIFIED_ARTIFACT'
  },

  // ==========================================================================
  // [06] QUANTUM PQC TLS CANARY
  // Category: ENTERPRISE IT, ZERO-TRUST & DEVSECOPS
  // ==========================================================================
  {
    slug: 'quantum-pqc-tls-canary',
    id: 'PROJECT / SEC-001',
    projectNumber: '06',
    title: 'QUANTUM PQC TLS CANARY',
    subtitle: 'NIST FIPS 203 ML-KEM-768 + X25519 hybrid key encapsulation canary protecting edge CPS telemetry against Harvest-Now-Decrypt-Later (HNDL) attacks.',
    domain: 'Post-Quantum Cryptography / CPS Security / Network Security',
    taxonomyCategory: 'ENTERPRISE IT, ZERO-TRUST & DEVSECOPS',
    filterDomains: ['CRYPTOGRAPHY', 'ZERO TRUST', 'CYBER-PHYSICAL', 'DEVSECOPS'],
    date: '2025 / OPEN-SOURCE SECURITY REPOSITORY',
    status: 'Active Testbed',
    claim: 'Demonstrates hybrid post-quantum key encapsulation (ML-KEM-768 + X25519) to safeguard edge CPS telemetry against long-term Harvest-Now-Decrypt-Later cryptanalytic threats.',
    technicalSummary: 'NIST FIPS 203 ML-KEM-768 + X25519 hybrid key encapsulation canary protecting edge CPS telemetry against Harvest-Now-Decrypt-Later (HNDL) attacks. Explores post-quantum cryptographic primitives on constrained communication channels, measuring overhead, handshake latency, and TLS encapsulation behavior.',
    architectureDescription: 'Hybrid cryptographic key encapsulation mechanism combining classical elliptic curve Diffie-Hellman (X25519) with lattice-based post-quantum key encapsulation (ML-KEM-768). Edge CPS nodes negotiate hybrid shared secrets before transmitting sensitive operational telemetry over untrusted networks.',
    implementationDetails: [
      'Implemented NIST FIPS 203 ML-KEM-768 lattice-based key encapsulation mechanism.',
      'Combined post-quantum KEM with classical X25519 ECDH in a hybrid key exchange construction.',
      'Engineered downgrade-attack canary detecting any TLS negotiation falling back to purely classical suites.',
      'Profiled wire overhead and transmission packet size constraints for constrained industrial edge devices.',
      'Automated security auditing pipeline with Bandit SAST and continuous cryptographic unit tests.'
    ],
    technicalFocus: [
      'ML-KEM-768',
      'X25519',
      'hybrid key encapsulation',
      'TLS',
      'edge CPS telemetry',
      'post-quantum cryptography',
      'Harvest-Now-Decrypt-Later threat model'
    ],
    keyTechnologies: [
      'NIST FIPS 203 ML-KEM-768',
      'X25519 Hybrid Key Exchange',
      'Cryptographic Key Derivation (HKDF)',
      'TLS Canary Instrumentation',
      'Wire Overhead Profiler'
    ],
    securityValidation: [
      'Downgrade attack detection test harness',
      'Wire overhead profiling across simulated constrained bandwidth links',
      'Bandit SAST static analysis gate',
      'Automated GitHub Actions continuous integration'
    ],
    threatModel: 'Harvest-Now-Decrypt-Later (HNDL): Adversaries passively record encrypted industrial telemetry today, intending to decrypt it once cryptanalytically relevant quantum computers (CRQCs) become viable.',
    problemStatement: 'Industrial infrastructure operational lifecycles span 15–30 years; classical public-key cryptography (RSA, ECDH) will be broken by Shor\'s algorithm well within the operational lifetime of deployed assets.',
    systemModel: 'Hybrid KEM scheme where shared secret K = HKDF(SS_PQC || SS_Classical); secure as long as AT LEAST ONE underlying primitive remains unbroken.',
    securityModel: 'Defense-in-depth: Classical X25519 provides proven defense against current threats, while ML-KEM-768 provides lattice-based quantum resistance.',
    validationApproach: 'Automated test suite verifying hybrid key derivation correctness, resistance to downgrade attempts, and wire transmission overhead profiling.',
    cicdWorkflow: [
      'GitHub Actions automated build and test runner',
      'Bandit security scan for cryptographic safety issues',
      'Test suite asserting ML-KEM-768 encapsulation/decapsulation round-trip',
      'Downgrade attack simulation test cases'
    ],
    metrics: [
      { label: 'PQC Primitive', value: 'NIST FIPS 203 ML-KEM-768', unit: 'lattice KEM' },
      { label: 'Classical Primitive', value: 'X25519 ECDH', unit: 'curve exchange' },
      { label: 'Threat Model', value: 'Harvest-Now-Decrypt-Later (HNDL)', unit: 'threat classification' },
      { label: 'Canary Gate', value: 'Automated Downgrade Detection', unit: 'verification' }
    ],
    tags: ['Post-Quantum Cryptography', 'ML-KEM-768', 'X25519', 'Hybrid KEM', 'Zero-Trust', 'CPS Telemetry'],
    repositoryUrl: 'https://github.com/Haidriyam/quantum-pqc-tls-canary',
    documentationUrl: '/projects/quantum-pqc-tls-canary',
    relatedResearch: [
      'Post-Quantum Cryptography for Edge Infrastructure',
      'Long-Term Telemetry Confidentiality (HNDL)',
      'Hybrid Key Exchange Standards'
    ],
    relatedProjects: [
      { slug: 'zero-trust-pki-mesh', title: 'Zero-Trust PKI Mesh', relationshipReason: 'Complements internal X.509 PKI authentication with quantum-resistant key exchange for edge telemetry.' },
      { slug: 'scada-ids-telemetry-engine', title: 'SCADA IDS Telemetry Engine', relationshipReason: 'Secures the transmission channels carrying industrial SCADA telemetry against future decryption.' }
    ],
    evidenceStatus: 'LABORATORY_BENCHMARK'
  },

  // ==========================================================================
  // [07] ZERO-TRUST PKI MESH
  // Category: ENTERPRISE IT, ZERO-TRUST & DEVSECOPS
  // ==========================================================================
  {
    slug: 'zero-trust-pki-mesh',
    id: 'PROJECT / SEC-002',
    projectNumber: '07',
    title: 'ZERO-TRUST PKI MESH',
    subtitle: 'Internal X.509 Certificate Authority provisioning root, intermediate, and leaf certificates for edge Mutual TLS (mTLS) reverse proxy enforcement.',
    domain: 'Zero Trust / PKI / Infrastructure Security',
    taxonomyCategory: 'ENTERPRISE IT, ZERO-TRUST & DEVSECOPS',
    filterDomains: ['ZERO TRUST', 'INFRASTRUCTURE', 'DEVSECOPS', 'DISTRIBUTED SYSTEMS'],
    date: '2025 / OPEN-SOURCE SECURITY REPOSITORY',
    status: 'Active Testbed',
    claim: 'Establishes a hardened internal multi-tier X.509 Public Key Infrastructure provisioning cryptographic identities for edge Mutual TLS reverse proxy enforcement.',
    technicalSummary: 'Internal X.509 Certificate Authority provisioning root, intermediate, and leaf certificates for edge Mutual TLS (mTLS) reverse proxy enforcement. Demonstrates multi-tier CA hierarchy management, certificate lifecycle tracking, and hardened Nginx reverse proxy configuration for mutual authentication.',
    architectureDescription: 'Hierarchical PKI architecture with an offline Root CA issuing scoped Intermediate CAs, which provision short-lived Leaf certificates to service endpoints. Hardened Nginx edge reverse proxies enforce bidirectional client certificate validation (ssl_verify_client on), ensuring zero unauthenticated network access.',
    implementationDetails: [
      'Engineered multi-tier X.509 CA hierarchy separating Root CA from operational Intermediate issuing CAs.',
      'Configured automated CSR signing workflows with strict Subject Alternative Name (SAN) enforcement.',
      'Designed certificate lifecycle state machine tracking issuance, distribution, mutual authentication, and revocation.',
      'Implemented hardened Nginx reverse proxy configuration mandating client certificate validation.',
      'Automated cryptographic lifecycle validation and handshake testing in continuous integration.'
    ],
    technicalFocus: [
      'internal X.509 Certificate Authority',
      'Root and Intermediate CA hierarchy',
      'Mutual TLS (mTLS)',
      'reverse proxy enforcement',
      'certificate lifecycle management',
      'zero-trust network architecture'
    ],
    keyTechnologies: [
      'X.509 Public Key Infrastructure (PKI)',
      'Multi-Tier CA Hierarchy',
      'Mutual TLS (mTLS) 1.3',
      'Nginx Reverse Proxy Gateway',
      'Certificate Revocation List (CRL)'
    ],
    securityValidation: [
      'Cryptographic certificate chain validation test suite',
      'Nginx mTLS handshake verification tests with valid and expired client certs',
      'Static application security testing (Bandit SAST)',
      'Automated CI/CD build gate'
    ],
    threatModel: 'Lateral movement and man-in-the-middle attacks within perimeter networks exploiting unauthenticated internal service-to-service communications.',
    problemStatement: 'Perimeter-only defense assumes internal traffic is trusted; compromised edge nodes can freely pivot unless every service connection requires cryptographic mutual authentication.',
    systemModel: 'Trust chain hierarchy: Root CA (self-signed, offline) -> Intermediate CA (pathlen:0) -> Leaf Certificates (clientAuth, serverAuth keyUsages).',
    securityModel: 'Zero-Trust Architecture: No network packet reaches application backend code without a cryptographically valid client certificate signed by the trusted intermediate CA.',
    validationApproach: 'Automated test suite asserting successful TLS handshakes with valid certificates and immediate rejection (HTTP 400/495/496) for invalid, self-signed, or expired client certificates.',
    cicdWorkflow: [
      'GitHub Actions test runner verifying PKI script execution and certificate validity',
      'Nginx configuration syntax and SSL parameter verification',
      'Bandit SAST scan on provisioning automation'
    ],
    metrics: [
      { label: 'Hierarchy', value: 'Multi-Tier Root & Intermediate CAs', unit: 'PKI structure' },
      { label: 'Authentication', value: 'Mutual TLS (mTLS) Bidirectional', unit: 'handshake' },
      { label: 'Gateway Enforcement', value: 'Nginx Reverse Proxy Gateway', unit: 'perimeter' },
      { label: 'Validation', value: 'Cryptographic Chain & Handshake CI', unit: 'test gate' }
    ],
    tags: ['Zero-Trust', 'PKI', 'mTLS', 'X.509', 'Nginx', 'Infrastructure Security'],
    repositoryUrl: 'https://github.com/Haidriyam/zero-trust-pki-mesh',
    documentationUrl: '/projects/zero-trust-pki-mesh',
    relatedResearch: [
      'Zero-Trust Network Architecture (NIST SP 800-207)',
      'Public Key Infrastructure Security',
      'Automated Mutual TLS Enforcement'
    ],
    relatedProjects: [
      { slug: 'gitops-mesh-orchestrator', title: 'GitOps Mesh Orchestrator', relationshipReason: 'Orchestrates the dynamic service discovery mesh secured by this PKI identity tier.' },
      { slug: 'quantum-pqc-tls-canary', title: 'Quantum PQC TLS Canary', relationshipReason: 'Extends classical PKI TLS handshakes with post-quantum hybrid key encapsulation.' },
      { slug: 'attack-surface-intel-pipeline', title: 'Attack Surface Intelligence Pipeline', relationshipReason: 'Scans infrastructure perimeters to verify mTLS boundary enforcement and identify exposed non-mTLS ports.' }
    ],
    evidenceStatus: 'LABORATORY_BENCHMARK'
  },

  // ==========================================================================
  // [08] GITOPS MESH ORCHESTRATOR
  // Category: ENTERPRISE IT, ZERO-TRUST & DEVSECOPS
  // ==========================================================================
  {
    slug: 'gitops-mesh-orchestrator',
    id: 'PROJECT / INF-001',
    projectNumber: '08',
    title: 'GITOPS MESH ORCHESTRATOR',
    subtitle: 'Service mesh orchestrator featuring dynamic TTL heartbeat leases, round-robin load distribution, token-bucket burst rate-limiting, and CIDR ingress inspection.',
    domain: 'Distributed Systems / Infrastructure / Network Reliability',
    taxonomyCategory: 'ENTERPRISE IT, ZERO-TRUST & DEVSECOPS',
    filterDomains: ['DISTRIBUTED SYSTEMS', 'INFRASTRUCTURE', 'DEVSECOPS', 'ZERO TRUST'],
    date: '2025 / OPEN-SOURCE INFRASTRUCTURE REPOSITORY',
    status: 'Active Testbed',
    claim: 'Orchestrates distributed service discovery and traffic shaping with dynamic TTL leases, token-bucket rate limiting, and zero-trust CIDR ingress inspection.',
    technicalSummary: 'Service mesh orchestrator featuring dynamic TTL heartbeat leases, round-robin load distribution, token-bucket burst rate-limiting, and CIDR ingress inspection. Built for resilient service discovery and load balancing across multi-node topologies without centralized single-points-of-failure.',
    architectureDescription: 'Distributed service mesh control plane maintaining an active node registry via periodic TTL heartbeat leases. Requests arriving at ingress nodes undergo CIDR boundary inspection, token-bucket rate limiting, and round-robin load balancing across healthy backend instances.',
    implementationDetails: [
      'Architected decentralized service discovery engine using dynamic TTL heartbeat leases and health probes.',
      'Implemented token-bucket traffic shaping algorithm accommodating burst traffic while enforcing strict rate caps.',
      'Engineered round-robin and weighted load distribution across healthy backend registry nodes.',
      'Formulated CIDR ingress filtering rules validating source network prefixes before routing.',
      'Developed distributed multi-node test harness simulating node failures and network partitions.'
    ],
    technicalFocus: [
      'service discovery',
      'TTL heartbeat leases',
      'round-robin load distribution',
      'token-bucket rate limiting',
      'CIDR ingress inspection',
      'distributed node coordination'
    ],
    keyTechnologies: [
      'Distributed Node Registry',
      'TTL Heartbeat Lease Engine',
      'Token-Bucket Traffic Shaper',
      'Round-Robin Load Balancer',
      'CIDR Ingress Inspection'
    ],
    securityValidation: [
      'Distributed multi-node test harness verifying partition recovery and failover',
      'Injection payload defense tests for header and routing parameters',
      'Rootless container build with unprivileged execution',
      'Continuous integration automated test suite'
    ],
    threatModel: 'Distributed denial-of-service (DDoS), resource exhaustion through request flooding, and stale node routing following infrastructure failovers.',
    problemStatement: 'Distributed cloud services suffer downtime when central registries crash or traffic bursts overwhelm downstream backends without localized rate-shaping.',
    systemModel: 'Dynamic node pool where node state S_i is valid for lease time T_lease; background sweep thread evicts nodes when (t_current - t_last_heartbeat) > T_lease.',
    securityModel: 'Dual-layer boundary: CIDR whitelist verifies ingress network boundaries, while token-bucket leaky algorithm caps burst capacity to prevent buffer overflow.',
    validationApproach: 'Simulated multi-node cluster tests measuring failover latency, load distribution variance, and rate-limiting rejection accuracy under 10x traffic spikes.',
    cicdWorkflow: [
      'GitHub Actions workflow running multi-node unit and integration tests',
      'Flake8 code hygiene and style enforcement',
      'Bandit SAST static analysis security gate',
      'Rootless Docker container build'
    ],
    metrics: [
      { label: 'Discovery Architecture', value: 'Decentralized TTL Heartbeat Leases', unit: 'service mesh' },
      { label: 'Traffic Control', value: 'Token-Bucket Rate Limiting', unit: 'shaping' },
      { label: 'Load Balancer', value: 'Weighted Round-Robin Distribution', unit: 'routing' },
      { label: 'Packaging', value: 'Hardened Rootless Container', unit: 'DevSecOps' }
    ],
    tags: ['Service Mesh', 'GitOps', 'Load Balancing', 'Rate Limiting', 'Distributed Systems', 'Infrastructure'],
    repositoryUrl: 'https://github.com/Haidriyam/gitops-mesh-orchestrator',
    documentationUrl: '/projects/gitops-mesh-orchestrator',
    relatedResearch: [
      'Distributed Systems Reliability and Fault-Tolerance',
      'Traffic Shaping and Congestion Control',
      'Decentralized Service Discovery'
    ],
    relatedProjects: [
      { slug: 'zero-trust-pki-mesh', title: 'Zero-Trust PKI Mesh', relationshipReason: 'Supplies the cryptographic mTLS identity layer for all service endpoints in the mesh.' },
      { slug: 'attack-surface-intel-pipeline', title: 'Attack Surface Intelligence Pipeline', relationshipReason: 'Monitors the mesh perimeter for unmapped ingress points or misconfigured CIDR blocks.' }
    ],
    evidenceStatus: 'LABORATORY_BENCHMARK'
  },

  // ==========================================================================
  // [09] ATTACK SURFACE INTEL PIPELINE
  // Category: ENTERPRISE IT, ZERO-TRUST & DEVSECOPS
  // ==========================================================================
  {
    slug: 'attack-surface-intel-pipeline',
    id: 'PROJECT / SEC-004',
    projectNumber: '09',
    title: 'ATTACK SURFACE INTELLIGENCE PIPELINE',
    subtitle: 'External Attack Surface Management (EASM) engine aggregating multi-source reconnaissance data, scoring exposure vectors, and outputting SIEM-ready JSON telemetry.',
    domain: 'Cybersecurity / External Attack Surface Management / Security Automation',
    taxonomyCategory: 'ENTERPRISE IT, ZERO-TRUST & DEVSECOPS',
    filterDomains: ['INFRASTRUCTURE', 'ZERO TRUST', 'DEVSECOPS', 'AUTOMATION'],
    date: '2025 / OPEN-SOURCE SECURITY REPOSITORY',
    status: 'Active Testbed',
    claim: 'Automates external attack surface reconnaissance, normalizing multi-source telemetry, scoring exposure vectors, and streaming SIEM-ready security records.',
    technicalSummary: 'External Attack Surface Management (EASM) engine aggregating multi-source reconnaissance data, scoring exposure vectors, and outputting SIEM-ready JSON telemetry. Automates discovery of exposed infrastructure assets, domain names, certificate anomalies, and open network services.',
    architectureDescription: 'Modular data pipeline ingesting reconnaissance feeds from DNS zone lookups, certificate transparency logs, and service banners. Normalizes disparate data into a unified asset schema, calculates exposure risk scores using heuristic rules, and dispatches formatted events to SIEM clusters.',
    implementationDetails: [
      'Constructed ingestion collectors parsing DNS zone data, certificate transparency records, and port banners.',
      'Developed data normalization engine transforming heterogeneous input feeds into unified JSON asset models.',
      'Formulated exposure scoring heuristic ranking assets based on vulnerability severity, age, and exposure type.',
      'Engineered streaming telemetry dispatch generating standardized alerts for Wazuh and enterprise SIEMs.',
      'Configured unit test suite validating exposure heuristics and edge case normalization.'
    ],
    technicalFocus: [
      'External Attack Surface Management (EASM)',
      'reconnaissance data aggregation',
      'exposure vector scoring',
      'data normalization',
      'SIEM-ready JSON telemetry',
      'security automation'
    ],
    keyTechnologies: [
      'EASM Discovery Engine',
      'Data Normalization Pipeline',
      'Exposure Scoring Heuristics',
      'SIEM JSON Dispatcher',
      'Automated Reconnaissance Feeds'
    ],
    securityValidation: [
      'Exposure heuristic unit tests against known vulnerability datasets',
      'Bandit SAST security gate preventing command injection and unsafe deserialization',
      'PEP8 / flake8 code compliance',
      'Automated Docker build in CI'
    ],
    threatModel: 'Shadow IT assets, orphaned cloud instances, expired SSL certificates, and misconfigured external-facing services exposing organizational perimeters to external attackers.',
    problemStatement: 'Enterprise network perimeters continuously drift as teams deploy cloud instances; manual inventory quickly becomes obsolete, leaving unknown exposed assets unmonitored.',
    systemModel: 'Continuous asset pipeline: Ingestion -> Canonicalization -> Heuristic Exposure Scoring (0–100) -> Alert Generation.',
    securityModel: 'Least-privilege execution: Pipeline operates purely through passive reconnaissance, requires no elevated privileges, and outputs structured, sanitized telemetry.',
    validationApproach: 'Automated test suite asserting score reproducibility across varied asset inputs and verifying zero malformed JSON outputs.',
    cicdWorkflow: [
      'GitHub Actions automated build and test pipeline',
      'Pytest suite verifying exposure scoring heuristics',
      'Bandit SAST scan enforcing secure coding standards',
      'Automated container packaging'
    ],
    metrics: [
      { label: 'Scope', value: 'External Attack Surface Management', unit: 'EASM' },
      { label: 'Pipeline Architecture', value: 'Multi-Source Recon & Normalization', unit: 'ingestion' },
      { label: 'Scoring Engine', value: 'Heuristic Exposure Prioritization', unit: 'risk analysis' },
      { label: 'Telemetry Output', value: 'Standardized SIEM-Ready JSON', unit: 'Wazuh integration' }
    ],
    tags: ['EASM', 'Attack Surface', 'Threat Intelligence', 'Reconnaissance', 'SIEM', 'DevSecOps'],
    repositoryUrl: 'https://github.com/Haidriyam/attack-surface-intel-pipeline',
    documentationUrl: '/projects/attack-surface-intel-pipeline',
    relatedResearch: [
      'Continuous Attack Surface Assessment',
      'Automated Perimeter Threat Intelligence',
      'Defensive SIEM Telemetry Integration'
    ],
    relatedProjects: [
      { slug: 'siem-telemetry', title: 'Automated SIEM & Telemetry Pipeline', relationshipReason: 'Direct consumer of the normalized external exposure telemetry generated by this pipeline.' },
      { slug: 'zero-trust-pki-mesh', title: 'Zero-Trust PKI Mesh', relationshipReason: 'Validates that external assets identified by this pipeline adhere to mTLS and internal PKI policies.' }
    ],
    evidenceStatus: 'LABORATORY_BENCHMARK'
  },

  // ==========================================================================
  // [10] AUTOMATED SIEM & TELEMETRY PIPELINE (EXISTING)
  // Category: ENTERPRISE IT, ZERO-TRUST & DEVSECOPS
  // ==========================================================================
  {
    slug: 'siem-telemetry',
    id: 'PROJECT / TEL-002',
    projectNumber: '10',
    title: 'Automated SIEM & Telemetry Pipeline',
    subtitle: 'Automated telemetry and security monitoring pipeline using Wazuh HIDS/XDR to ingest host telemetry and audit logs',
    domain: 'Enterprise Infrastructure / Security Engineering',
    taxonomyCategory: 'ENTERPRISE IT, ZERO-TRUST & DEVSECOPS',
    filterDomains: ['INFRASTRUCTURE', 'DEVSECOPS', 'AUTOMATION'],
    date: '2025 / ENTERPRISE DEPLOYMENT',
    status: 'Active Testbed',
    claim: 'Establishes continuous host-level telemetry ingestion and automated security log auditing across distributed Linux nodes with real-time detection rule sets.',
    technicalSummary: 'Engineered an automated telemetry and security monitoring pipeline using Wazuh HIDS/XDR to ingest host telemetry and audit logs. Configured real-time agent forwarding, kernel auditd integration, log normalization, and alert dispatching across multi-tier enterprise server environments.',
    architectureDescription: 'Distributed host telemetry pipeline utilizing lightweight Wazuh security agents installed across Linux hosts, streaming real-time system events, file integrity monitoring hashes, and authentication records over encrypted TLS channels to a central analysis cluster.',
    implementationDetails: [
      'Deployed Wazuh HIDS/XDR agents across multi-tier Ubuntu, Debian, and RHEL server nodes.',
      'Configured Linux kernel auditd integration for real-time tracking of process executions, privilege escalation attempts, and socket bindings.',
      'Engineered custom rule sets and decoder extensions for application and web server access logs.',
      'Configured automated alert notifications and incident dashboards in Grafana for unified security visibility.'
    ],
    technicalFocus: [
      'Wazuh HIDS / XDR',
      'Linux kernel auditd',
      'host-level intrusion detection',
      'log normalization',
      'automated security alerting',
      'Grafana visualization'
    ],
    keyTechnologies: ['Wazuh HIDS / XDR', 'Linux Kernel Auditd', 'Log Normalization Decoders', 'Grafana Dashboards', 'TLS Log Forwarding'],
    securityValidation: ['Host file integrity validation', 'Kernel audit rule verification', 'Real-time alert dispatch benchmarking'],
    metrics: [
      { label: 'Platform', value: 'Wazuh HIDS / XDR', unit: 'security engine' },
      { label: 'Telemetry Streams', value: 'Host & Audit Logs', unit: 'ingestion' },
      { label: 'Operating System', value: 'Linux (Ubuntu, Debian, RHEL)', unit: 'environment' },
      { label: 'Visualization', value: 'Grafana Dashboards', unit: 'monitoring' }
    ],
    tags: ['Wazuh', 'HIDS / XDR', 'Linux Auditd', 'SIEM Telemetry', 'Log Auditing', 'Grafana'],
    repositoryUrl: 'https://github.com/Haidriyam',
    documentationUrl: '/systems',
    problemStatement: 'Distributed server environments experience untracked privilege escalation and lateral movement unless kernel-level audit telemetry is centrally ingested and analyzed in real time.',
    systemModel: 'Agent-manager architecture where agent forwarders deliver cryptographically signed log events to clustered analysis engines.',
    securityModel: 'Host-based defense: Real-time syscall inspection via auditd and file integrity monitoring (FIM) alerting on unauthorized binary modifications.',
    validationApproach: 'Injecting simulated privilege escalation attacks and verifying automated alert dispatch latency in Grafana.',
    relatedResearch: ['Host Intrusion Detection Systems', 'Kernel Telemetry Ingestion', 'Zero-Trust Host Observability'],
    relatedProjects: [
      { slug: 'attack-surface-intel-pipeline', title: 'Attack Surface Intelligence Pipeline', relationshipReason: 'Correlates internal host telemetry with external attack surface exposure records.' },
      { slug: 'scada-ids-telemetry-engine', title: 'SCADA IDS Telemetry Engine', relationshipReason: 'Provides endpoint monitoring alongside industrial SCADA network inspection.' }
    ],
    evidenceStatus: 'VERIFIED_ARTIFACT'
  },

  // ==========================================================================
  // [11] REVERSE-PROXY & PERIMETER HARDENING (EXISTING)
  // Category: ENTERPRISE IT, ZERO-TRUST & DEVSECOPS
  // ==========================================================================
  {
    slug: 'perimeter-hardening',
    id: 'PROJECT / SEC-003',
    projectNumber: '11',
    title: 'Reverse-Proxy & Perimeter Hardening',
    subtitle: 'Production perimeter security, rate limiting, automated SSL/TLS certificate management, and WAF threat mitigation',
    domain: 'Enterprise Infrastructure / Security Engineering',
    taxonomyCategory: 'ENTERPRISE IT, ZERO-TRUST & DEVSECOPS',
    filterDomains: ['INFRASTRUCTURE', 'ZERO TRUST', 'DEVSECOPS'],
    date: '2025 / PERIMETER SPECIFICATION',
    status: 'Documented',
    claim: 'Hardens web and network perimeters against unauthorized traffic through reverse-proxy isolation, token-bucket rate limiting, and automated cryptographic renewal.',
    technicalSummary: 'Implemented robust reverse-proxy architectures using Nginx and Apache to isolate backend application nodes. Configured granular rate limiting, Web Application Firewall (WAF) rule sets, Certbot automated SSL/TLS provisioning, and TLS configuration tuning to enforce modern cryptographic standards and mitigate threat vectors.',
    architectureDescription: 'Dual-tier perimeter architecture terminating client TLS connections at hardened Nginx/Apache reverse proxies, enforcing rate-limit policies, inspecting payloads against WAF rules, and forwarding sanitized traffic to isolated internal backend sockets.',
    implementationDetails: [
      'Configured Nginx and Apache reverse-proxy tiers with optimized worker connections, keepalive pools, and buffer limits.',
      'Enforced burst-tolerant token-bucket rate limiting to prevent denial-of-service and brute-force traffic spikes.',
      'Automated zero-downtime SSL/TLS certificate issuance, renewal, and OCSP stapling via Certbot.',
      'Implemented Web Application Firewall (WAF) rule sets for header validation, request size constraints, and payload inspection.'
    ],
    technicalFocus: [
      'Nginx reverse proxy',
      'Apache HTTP server',
      'token-bucket rate limiting',
      'Certbot automated SSL/TLS',
      'WAF rule sets',
      'TLS 1.2/1.3 hardening'
    ],
    keyTechnologies: ['Nginx', 'Apache HTTP Server', 'Certbot / Let\'s Encrypt', 'Token-Bucket Rate Limiter', 'WAF Rules'],
    securityValidation: ['SSL Labs A+ cryptographic benchmark', 'Rate limit stress testing', 'Header inspection validation'],
    metrics: [
      { label: 'Reverse Proxies', value: 'Nginx / Apache', unit: 'web servers' },
      { label: 'Certificate Automation', value: 'Certbot / Let\'s Encrypt', unit: 'SSL/TLS' },
      { label: 'Traffic Control', value: 'Token-Bucket Rate Limiting', unit: 'policy' },
      { label: 'Defensive Layer', value: 'WAF Rule Sets', unit: 'filtering' }
    ],
    tags: ['Nginx', 'Apache', 'WAF', 'Rate Limiting', 'Certbot', 'SSL/TLS', 'Perimeter Hardening'],
    repositoryUrl: 'https://github.com/Haidriyam',
    documentationUrl: '/systems',
    problemStatement: 'Directly exposed application servers are vulnerable to denial-of-service, unencrypted snooping, and application-layer exploit payloads.',
    systemModel: 'Reverse proxy gateway terminating TLS 1.3, enforcing rate limit buckets, and proxying sanitized HTTP traffic via internal Unix sockets.',
    securityModel: 'Perimeter isolation: Strips sensitive server header tokens, blocks malicious user-agents, and rejects requests exceeding strict payload boundaries.',
    validationApproach: 'Automated SSL scanning verifying cipher suite strength, forward secrecy, and OCSP stapling, coupled with high-frequency HTTP load injection.',
    relatedResearch: ['Perimeter Security Engineering', 'Reverse Proxy Performance Optimization', 'TLS Cryptographic Standards'],
    relatedProjects: [
      { slug: 'zero-trust-pki-mesh', title: 'Zero-Trust PKI Mesh', relationshipReason: 'Upgrades standard public TLS reverse proxy termination to mutual TLS with internal X.509 CA.' },
      { slug: 'gitops-mesh-orchestrator', title: 'GitOps Mesh Orchestrator', relationshipReason: 'Integrates token-bucket rate-limiting algorithms into distributed service mesh routing.' }
    ],
    evidenceStatus: 'VERIFIED_ARTIFACT'
  },

  // ==========================================================================
  // [12] INFRASTRUCTURE AUTOMATION & CI/CD PIPELINES (EXISTING)
  // Category: ENTERPRISE IT, ZERO-TRUST & DEVSECOPS
  // ==========================================================================
  {
    slug: 'infrastructure-automation',
    id: 'PROJECT / SYS-004',
    projectNumber: '12',
    title: 'Infrastructure Automation & CI/CD Pipelines',
    subtitle: 'Automated deployment pipelines, infrastructure synchronization, shell tooling, and operational validation workflows',
    domain: 'Enterprise Infrastructure / Distributed Systems',
    taxonomyCategory: 'ENTERPRISE IT, ZERO-TRUST & DEVSECOPS',
    filterDomains: ['INFRASTRUCTURE', 'DEVSECOPS', 'AUTOMATION', 'DISTRIBUTED SYSTEMS'],
    date: '2025 / AUTOMATION WORKFLOWS',
    status: 'Active Testbed',
    claim: 'Eliminates manual deployment drift and automates multi-environment synchronization using GitHub Actions, Bash utilities, and secure SSH/FTP pipelines.',
    technicalSummary: 'Architected automated deployment workflows and infrastructure synchronization pipelines using Bash, Python, and GitHub Actions. Automated secure SSH/FTP delivery, environment health validation, configuration templating, and operational maintenance routines to guarantee reliable application delivery.',
    architectureDescription: 'Continuous integration and deployment workflow where code commits trigger automated linting and syntax checks in GitHub Actions, followed by secure SSH/FTP synchronization to target server environments, idempotent configuration updates, and automated health checks.',
    implementationDetails: [
      'Authored modular Bash and Python utility scripts for database snapshot backups, log archiving, and service recovery.',
      'Configured GitHub Actions CI/CD workflows for automated build, test, and release artifact packaging.',
      'Automated secure remote file synchronization and atomic code deployments via SSH and encrypted FTP pipelines.',
      'Integrated pre-deployment validation drills and post-deployment health check probes for fault isolation.'
    ],
    technicalFocus: [
      'GitHub Actions CI/CD',
      'Bash shell automation',
      'Python operations scripts',
      'atomic SSH deployments',
      'idempotent synchronization',
      'health probe validation'
    ],
    keyTechnologies: ['GitHub Actions', 'Bash Shell Scripting', 'Python Automation', 'SSH Transport', 'Automated Health Probes'],
    securityValidation: ['Encrypted SSH deployment keys with restricted commands', 'Pre-flight linting gates', 'Rollback verification drills'],
    metrics: [
      { label: 'Automation Stack', value: 'Bash, Python, GitHub Actions', unit: 'tooling' },
      { label: 'Deployment Protocols', value: 'SSH / Secure FTP', unit: 'transport' },
      { label: 'Verification', value: 'Automated Health Checks', unit: 'reliability' },
      { label: 'Execution Model', value: 'Idempotent Sync Pipelines', unit: 'pipeline' }
    ],
    tags: ['CI/CD', 'GitHub Actions', 'Bash Scripting', 'Python', 'SSH Automation', 'Infrastructure'],
    repositoryUrl: 'https://github.com/Haidriyam',
    documentationUrl: '/systems',
    problemStatement: 'Manual deployments introduce configuration drift, missed security patches, and deployment downtime across multi-server environments.',
    systemModel: 'Git-triggered automated delivery pipeline: Commit -> Lint -> Unit Test -> Build -> Atomic Sync -> Health Probe -> Rollback on failure.',
    securityModel: 'Least privilege: Deployment credentials utilize scoped SSH keys restricted to specific remote directories with zero shell interactive access.',
    validationApproach: 'Automated post-deployment health probes verifying HTTP 200 responses, process daemon uptime, and database connectivity.',
    relatedResearch: ['Continuous Integration & Deployment Security', 'Infrastructure as Code Idempotence', 'Automated Fault Isolation'],
    relatedProjects: [
      { slug: 'gitops-mesh-orchestrator', title: 'GitOps Mesh Orchestrator', relationshipReason: 'Advances static CI/CD synchronization to dynamic, self-healing GitOps mesh orchestration.' },
      { slug: 'attack-surface-intel-pipeline', title: 'Attack Surface Intelligence Pipeline', relationshipReason: 'Shares automated GitHub Actions CI/CD workflows and containerized build pipelines.' }
    ],
    evidenceStatus: 'VERIFIED_ARTIFACT'
  }
];
