import { ResearchQuestion, VerificationPractice } from '../types';

export interface TrajectoryStep {
  step: string;
  name: string;
  domain: string;
  keyProjects: { slug: string; title: string }[];
  description: string;
}

export const RESEARCH_TRAJECTORY_MAP: TrajectoryStep[] = [
  {
    step: '01',
    name: 'ELECTRICAL ENGINEERING',
    domain: 'Power Theory & Electromagnetics',
    keyProjects: [{ slug: 'resonant-wireless-power', title: 'Resonant Inductive Wireless Power System' }],
    description: 'Foundational grounding in Maxwell\'s equations, AC circuits, LC resonant tanks, and high-frequency power electronics.'
  },
  {
    step: '02',
    name: 'RESONANT POWER TRANSFER',
    domain: 'Near-Field Energy Transfer',
    keyProjects: [
      { slug: 'resonant-wireless-power', title: 'Resonant Inductive Wireless Power System' },
      { slug: 'wireless-power-transmission-sim', title: 'Wireless Power Transmission Sim' }
    ],
    description: 'Coupled-mode theory derivations, helical inductor fabrication, zero-voltage switching, and benchtop DSO metrology.'
  },
  {
    step: '03',
    name: 'PHYSICAL SYSTEM MODELING',
    domain: 'Deterministic Numerical Simulation',
    keyProjects: [{ slug: 'wireless-power-transmission-sim', title: 'Wireless Power Transmission Sim' }],
    description: 'Mathematical formulation of mutual inductance, unloaded Q-factors, and automated efficiency optimization.'
  },
  {
    step: '04',
    name: 'BATTERY STATE ESTIMATION',
    domain: 'Electrochemical State Estimation',
    keyProjects: [{ slug: 'battery-ekf-state-estimator', title: 'Battery EKF State Estimator' }],
    description: 'Discrete Extended Kalman Filtering (EKF), equivalent circuit models (ECM), and nonlinear OCV-SoC mapping.'
  },
  {
    step: '05',
    name: 'MICROGRID CONTROL',
    domain: 'Distributed Inverter Droop Dynamics',
    keyProjects: [{ slug: 'microgrid-resilient-control', title: 'Microgrid Resilient Control' }],
    description: 'Secondary frequency consensus restoration across inverter-based distributed energy resources (DERs) in islanded AC grids.'
  },
  {
    step: '06',
    name: 'SCADA / OT SECURITY',
    domain: 'Industrial Protocol Inspection',
    keyProjects: [{ slug: 'scada-ids-telemetry-engine', title: 'SCADA IDS Telemetry Engine' }],
    description: 'Deep-packet APDU dissection of Modbus TCP/IEC SCADA traffic, zero-trust command whitelisting, and substation boundary rules.'
  },
  {
    step: '07',
    name: 'CYBER-PHYSICAL SECURITY',
    domain: 'Cross-Domain Threat Modeling',
    keyProjects: [
      { slug: 'microgrid-resilient-control', title: 'Microgrid Resilient Control' },
      { slug: 'battery-ekf-state-estimator', title: 'Battery EKF State Estimator' },
      { slug: 'scada-ids-telemetry-engine', title: 'SCADA IDS Telemetry Engine' }
    ],
    description: 'Detecting False Data Injection (FDI), CAN frame fuzzing, and physical invariant checking across sensor-actuator loops.'
  },
  {
    step: '08',
    name: 'DISTRIBUTED SYSTEMS',
    domain: 'Infrastructure & Fault-Tolerance',
    keyProjects: [
      { slug: 'gitops-mesh-orchestrator', title: 'GitOps Mesh Orchestrator' },
      { slug: 'infrastructure-automation', title: 'Infrastructure Automation' }
    ],
    description: 'Decentralized service discovery, TTL heartbeat leases, round-robin balancing, and token-bucket traffic shaping.'
  },
  {
    step: '09',
    name: 'ZERO-TRUST INFRASTRUCTURE',
    domain: 'Cryptographic Identity & Boundary Enforcement',
    keyProjects: [
      { slug: 'zero-trust-pki-mesh', title: 'Zero-Trust PKI Mesh' },
      { slug: 'perimeter-hardening', title: 'Reverse-Proxy & Perimeter Hardening' },
      { slug: 'attack-surface-intel-pipeline', title: 'Attack Surface Intel Pipeline' }
    ],
    description: 'Internal multi-tier X.509 Certificate Authorities, Mutual TLS (mTLS) reverse proxies, and continuous external attack surface management.'
  },
  {
    step: '10',
    name: 'POST-QUANTUM SECURITY',
    domain: 'Lattice-Based Cryptographic Protection',
    keyProjects: [{ slug: 'quantum-pqc-tls-canary', title: 'Quantum PQC TLS Canary' }],
    description: 'NIST FIPS 203 ML-KEM-768 + X25519 hybrid key encapsulation protecting long-lifecycle CPS telemetry against Harvest-Now-Decrypt-Later attacks.'
  }
];

export const CORE_RESEARCH_QUESTIONS: ResearchQuestion[] = [
  {
    id: 'rq-01',
    code: 'RQ-01',
    title: 'Distributed Control Under Malicious Manipulation',
    question: 'How can distributed control systems remain resilient under malicious measurement manipulation?',
    theoreticalContext:
      'Inverter-based microgrids rely on distributed consensus state exchange over shared digital communication graphs. False Data Injection (FDI) can bias neighbor averaging and induce systemic frequency desynchronization.',
    methodology:
      'Investigating graph-theoretic consensus algorithms with outlier rejection (e.g. MSR / resilient consensus), pairing primary droop control with boundary-constrained integral restoration.',
    connectedProjects: [
      { slug: 'microgrid-resilient-control', title: 'Microgrid Resilient Control' }
    ]
  },
  {
    id: 'rq-02',
    code: 'RQ-02',
    title: 'Physical Constraints for Cyber Attack Detection',
    question: 'How can physical constraints improve detection of cyber attacks against industrial systems?',
    theoreticalContext:
      'Traditional IT intrusion detection systems lack awareness of physical invariants (e.g. transformer thermal dissipation, breaker state interlocks, fluid continuity). Attackers commanding valid protocol commands can induce physical damage without triggering signature-based alerts.',
    methodology:
      'Formulating physics-informed boundary inspection rules within the APDU dissection pipeline, asserting that incoming control actions conform to thermodynamic and electrical network invariants.',
    connectedProjects: [
      { slug: 'scada-ids-telemetry-engine', title: 'SCADA IDS Telemetry Engine' }
    ]
  },
  {
    id: 'rq-03',
    code: 'RQ-03',
    title: 'Embedded Telemetry Security Boundaries',
    question: 'How can embedded telemetry pipelines enforce security boundaries without losing operational visibility?',
    theoreticalContext:
      'Constrained physical nodes (battery management units, remote telemetry units) operate under strict memory and compute limits. Heavy cryptographic handshakes or unbuffered parsing can cause buffer overruns or telemetry dropped frames.',
    methodology:
      'Designing lightweight input validation, strict Data Length Code (DLC) whitelisting, and deterministic streaming decoders that quarantine malformed payloads without interrupting real-time state estimation.',
    connectedProjects: [
      { slug: 'battery-ekf-state-estimator', title: 'Battery EKF State Estimator' },
      { slug: 'siem-telemetry', title: 'Automated SIEM & Telemetry Pipeline' }
    ]
  },
  {
    id: 'rq-04',
    code: 'RQ-04',
    title: 'Zero-Trust Identity for Distributed CPS',
    question: 'How can zero-trust identity models be applied to distributed CPS infrastructure?',
    theoreticalContext:
      'Industrial and enterprise edge systems historically trusted all nodes within a physical perimeter. As edge components connect across cellular, mesh, and hybrid cloud fabrics, perimeter assumptions collapse.',
    methodology:
      'Evaluating multi-tier X.509 PKI hierarchies with short-lived certificates, automated mutual TLS (mTLS) enforcement at reverse proxies, and token-bucket ingress traffic shaping.',
    connectedProjects: [
      { slug: 'zero-trust-pki-mesh', title: 'Zero-Trust PKI Mesh' },
      { slug: 'gitops-mesh-orchestrator', title: 'GitOps Mesh Orchestrator' }
    ]
  },
  {
    id: 'rq-05',
    code: 'RQ-05',
    title: 'Hybrid Post-Quantum Cryptography for Telemetry',
    question: 'How can hybrid post-quantum cryptography protect telemetry channels against future cryptanalytic threats?',
    theoreticalContext:
      'Harvest-Now-Decrypt-Later (HNDL) threat actors intercept encrypted industrial and electrical telemetry today. Long-lifecycle infrastructure deployed for decades will remain exposed if protected only by classical ECDH or RSA.',
    methodology:
      'Prototyping hybrid key encapsulation combining NIST FIPS 203 ML-KEM-768 with classical X25519, profiling wire overhead, latency impact, and downgrade resistance on constrained telemetry channels.',
    connectedProjects: [
      { slug: 'quantum-pqc-tls-canary', title: 'Quantum PQC TLS Canary' }
    ]
  },
  {
    id: 'rq-06',
    code: 'RQ-06',
    title: 'State Estimation Combined with Protocol Validation',
    question: 'How can state estimation and protocol validation be combined for resilient embedded systems?',
    theoreticalContext:
      'Kalman filter estimators are susceptible to corrupted sensor inputs that subtly drift estimated states over time without triggering basic threshold checks.',
    methodology:
      'Synthesizing discrete Extended Kalman Filtering (EKF) with pre-filtering CAN frame sanitization, boundary rate-of-change checks, and protocol fuzzing resistance.',
    connectedProjects: [
      { slug: 'battery-ekf-state-estimator', title: 'Battery EKF State Estimator' }
    ]
  }
];

export const VERIFICATION_STANDARDS: VerificationPractice[] = [
  {
    title: 'Automated Continuous Integration Workflows',
    category: 'CONTINUOUS INTEGRATION',
    tooling: 'GitHub Actions Matrix Workflows',
    specification:
      'Automated GitHub Actions pipelines execute on all commits and pull requests, testing across designated language versions and dependency matrices to verify reproducible execution.',
    associatedProjects: [
      { slug: 'microgrid-resilient-control', title: 'Microgrid Resilient Control' },
      { slug: 'battery-ekf-state-estimator', title: 'Battery EKF State Estimator' },
      { slug: 'scada-ids-telemetry-engine', title: 'SCADA IDS Telemetry Engine' },
      { slug: 'wireless-power-transmission-sim', title: 'Wireless Power Transmission Sim' },
      { slug: 'quantum-pqc-tls-canary', title: 'Quantum PQC TLS Canary' },
      { slug: 'zero-trust-pki-mesh', title: 'Zero-Trust PKI Mesh' },
      { slug: 'gitops-mesh-orchestrator', title: 'GitOps Mesh Orchestrator' },
      { slug: 'attack-surface-intel-pipeline', title: 'Attack Surface Intel Pipeline' },
      { slug: 'infrastructure-automation', title: 'Infrastructure Automation' }
    ]
  },
  {
    title: 'Static Application Security Testing (SAST)',
    category: 'STATIC ANALYSIS',
    tooling: 'Bandit Security Auditing Engine',
    specification:
      'Bandit SAST scans every Python codebase for cryptographic weaknesses, hardcoded secrets, shell injection vectors, unsafe deserialization, and unvalidated string operations.',
    associatedProjects: [
      { slug: 'microgrid-resilient-control', title: 'Microgrid Resilient Control' },
      { slug: 'battery-ekf-state-estimator', title: 'Battery EKF State Estimator' },
      { slug: 'scada-ids-telemetry-engine', title: 'SCADA IDS Telemetry Engine' },
      { slug: 'quantum-pqc-tls-canary', title: 'Quantum PQC TLS Canary' },
      { slug: 'zero-trust-pki-mesh', title: 'Zero-Trust PKI Mesh' },
      { slug: 'gitops-mesh-orchestrator', title: 'GitOps Mesh Orchestrator' },
      { slug: 'attack-surface-intel-pipeline', title: 'Attack Surface Intel Pipeline' }
    ]
  },
  {
    title: 'Code Hygiene & Strict Style Compliance',
    category: 'CODE HYGIENE',
    tooling: 'PEP8 / Flake8 Compliance Audits',
    specification:
      'Strict adherence to PEP8 standards enforced via flake8, ensuring consistent syntax, deterministic import structures, typed signatures, and maintainable engineering codebases.',
    associatedProjects: [
      { slug: 'microgrid-resilient-control', title: 'Microgrid Resilient Control' },
      { slug: 'battery-ekf-state-estimator', title: 'Battery EKF State Estimator' },
      { slug: 'scada-ids-telemetry-engine', title: 'SCADA IDS Telemetry Engine' },
      { slug: 'wireless-power-transmission-sim', title: 'Wireless Power Transmission Sim' },
      { slug: 'quantum-pqc-tls-canary', title: 'Quantum PQC TLS Canary' },
      { slug: 'gitops-mesh-orchestrator', title: 'GitOps Mesh Orchestrator' },
      { slug: 'attack-surface-intel-pipeline', title: 'Attack Surface Intel Pipeline' }
    ]
  },
  {
    title: 'Unit & Domain-Specific Test Suites',
    category: 'AUTOMATED TESTING',
    tooling: 'Pytest, Fuzzing Engines & Dynamics Verification',
    specification:
      'Comprehensive automated test suites testing mathematical convergence, protocol fuzzing, edge cases, fault injection, and network partition failovers.',
    associatedProjects: [
      { slug: 'microgrid-resilient-control', title: 'Microgrid Resilient Control (CPS Dynamics Suite)' },
      { slug: 'battery-ekf-state-estimator', title: 'Battery EKF State Estimator (CAN Fuzzing & ECM Tests)' },
      { slug: 'scada-ids-telemetry-engine', title: 'SCADA IDS Telemetry Engine (APDU Dissector Tests)' },
      { slug: 'wireless-power-transmission-sim', title: 'Wireless Power Sim (Deterministic Numerical Tests)' },
      { slug: 'quantum-pqc-tls-canary', title: 'Quantum PQC TLS Canary (Downgrade Defense Tests)' },
      { slug: 'zero-trust-pki-mesh', title: 'Zero-Trust PKI Mesh (mTLS Handshake Tests)' },
      { slug: 'gitops-mesh-orchestrator', title: 'GitOps Mesh Orchestrator (Multi-Node Harness)' },
      { slug: 'attack-surface-intel-pipeline', title: 'Attack Surface Intel (Heuristic Scoring Tests)' }
    ]
  },
  {
    title: 'Hardened Rootless Container Packaging',
    category: 'HARDENED PACKAGING',
    tooling: 'Rootless Docker Images & Unprivileged Daemons',
    specification:
      'Deployment images are built with non-root runtime users, minimal base images (Alpine/Debian-slim), read-only root filesystems where applicable, and zero privilege escalation capabilities.',
    associatedProjects: [
      { slug: 'microgrid-resilient-control', title: 'Microgrid Resilient Control' },
      { slug: 'battery-ekf-state-estimator', title: 'Battery EKF State Estimator' },
      { slug: 'scada-ids-telemetry-engine', title: 'SCADA IDS Telemetry Engine' },
      { slug: 'gitops-mesh-orchestrator', title: 'GitOps Mesh Orchestrator' },
      { slug: 'attack-surface-intel-pipeline', title: 'Attack Surface Intel Pipeline' },
      { slug: 'siem-telemetry', title: 'Automated SIEM & Telemetry Pipeline' }
    ]
  }
];
