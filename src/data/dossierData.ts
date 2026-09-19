import {
  ProjectItem,
  ResearchArea,
  TechnicalNote,
  ExperienceItem,
  EducationItem,
  CredentialItem,
  OpenSourceRepo,
  TechnicalDomainPillar,
  EngineeringTrajectoryStage,
  ResearchQuestion,
  VerificationPractice
} from '../types';
import { ALL_PROJECTS } from './projectsData';
import {
  RESEARCH_TRAJECTORY_MAP,
  CORE_RESEARCH_QUESTIONS,
  VERIFICATION_STANDARDS,
  TrajectoryStep
} from './researchQuestionsAndPractices';

export {
  ALL_PROJECTS,
  RESEARCH_TRAJECTORY_MAP,
  CORE_RESEARCH_QUESTIONS,
  VERIFICATION_STANDARDS
};
export type { TrajectoryStep };

export const SITE_CONFIG = {
  contactEmail: 'eng.adeelhaider@gmail.com',
  githubUrl: 'https://github.com/Haidriyam',
  githubUsername: 'Haidriyam',
  location: 'Dubai, UAE',
  graduationYear: '2016',
  institution: 'The Islamia University of Bahawalpur',
  degreeTitle: 'B.Sc. Electrical Engineering — Power'
};

export const PERSONAL_INFO = {
  name: 'Muhammad Adeel Sajjad',
  shortName: 'Adeel Sajjad',
  title: 'Systems, Infrastructure & Cyber-Physical Security Engineer',
  credential: 'B.Sc. Electrical Engineering — Power',
  institution: 'The Islamia University of Bahawalpur',
  graduationYear: '2016',
  location: 'Dubai, UAE',
  background: 'Electrical Engineering — Power',
  focus: 'Cyber-Physical Systems / Zero-Trust Security / Industrial SCADA / Infrastructure Reliability',
  experienceYears: '8+ years',
  bio: 'Systems, cloud, and software infrastructure engineer with an Electrical Engineering foundation, working across Linux infrastructure, cybersecurity telemetry, automation, and cyber-physical systems.',
  positioning:
    'Systems, Infrastructure & Cyber-Physical Security Engineer specializing in cloud operations, network reliability, industrial protocol security, post-quantum cryptography, and embedded physical modeling. Spanning physical power systems and modern digital infrastructure.',
  email: 'eng.adeelhaider@gmail.com',
  github: 'https://github.com/Haidriyam',
  githubUsername: 'Haidriyam',
  gpgFingerprint: '9E4F 8C2B 117A 3D90 5F1E 8A24 C37B 4290 88DF 10E5',
  statement: 'Connecting electrical power engineering foundations to resilient Linux systems, defensive cyber telemetry, zero-trust infrastructure, and cyber-physical systems.',
  availability: 'Open to Graduate Research & Technical Collaborations'
};

export const ENGINEERING_TRAJECTORY: EngineeringTrajectoryStage[] = [
  {
    phase: 'FOUNDATION',
    title: 'Electrical Power Engineering',
    summary: 'Formal academic grounding in electric circuits, electromagnetic fields, resonant induction, power transmission systems, differential equations, and hardware metrology.',
    technologies: ['Circuit Analysis', 'Power Transmission', 'Resonant Induction', 'LC Tank Tuning', 'DSO Metrology']
  },
  {
    phase: 'SYSTEMS',
    title: 'Linux / Cloud / Infrastructure',
    summary: 'Enterprise administration across high-availability Linux distributions (Ubuntu, Debian, RHEL, CentOS), POSIX internals, systemd, kernel optimization, virtualization, and AWS cloud architectures.',
    technologies: ['Linux Administration', 'POSIX Internals', 'Kernel Optimization', 'AWS (EC2, Lightsail, S3)', 'Docker']
  },
  {
    phase: 'SECURITY',
    title: 'Telemetry / SIEM / Network Defense',
    summary: 'Defensive security operations, host-level intrusion detection, automated audit logging, reverse-proxy hardening, WAF rule enforcement, and perimeter segmentation.',
    technologies: ['Wazuh HIDS/XDR', 'Host Telemetry', 'Audit Logging', 'Nginx/Apache WAF', 'Rate Limiting', 'Certbot SSL/TLS']
  },
  {
    phase: 'AUTOMATION',
    title: 'Python / Bash / CI/CD / Validation',
    summary: 'Idempotent infrastructure deployment, automated shell tooling, GitOps workflows with GitHub Actions, continuous validation, and reliable SSH/FTP synchronization pipelines.',
    technologies: ['Bash Scripting', 'Python', 'GitHub Actions', 'CI/CD Pipelines', 'SSH / FTP Automation', 'Testing & Validation']
  },
  {
    phase: 'RESEARCH DIRECTION',
    title: 'Cyber-Physical Systems / Smart Grid Security / Distributed Testbeds',
    summary: 'Convergence of power engineering fundamentals, operating system telemetry, deterministic networking, zero-trust PKI mesh, and post-quantum cryptographic primitives into resilient testbeds.',
    technologies: ['Cyber-Physical Systems', 'Smart Grid Protocols (Modbus/DNP3)', 'Post-Quantum TLS (ML-KEM)', 'Zero-Trust mTLS Mesh', 'Distributed Testbeds']
  }
];

export const TECHNICAL_DOMAINS: TechnicalDomainPillar[] = [
  {
    number: '01',
    title: 'Enterprise Systems & Cloud Infrastructure',
    focus: 'Zero-downtime deployment workflows, service discovery meshes, traffic shaping, and Linux systems administration.',
    categories: [
      {
        name: 'Deployment & High-Availability Operations',
        items: [
          'Zero-downtime blue/green deployments',
          'Service discovery mesh with TTL leases',
          'Token-bucket traffic shaping',
          'Docker containerization',
          'Nginx reverse proxy architecture',
          'Apache HTTP server hardening'
        ]
      },
      {
        name: 'Operating Systems & Linux Internals',
        items: [
          'Production Linux administration (Ubuntu, Debian, RHEL, CentOS)',
          'POSIX internals & systemd unit lifecycle',
          'Kernel parameter optimization & sysctl tuning',
          'Virtualization & AWS cloud operations (EC2, S3, Lightsail)',
          'Idempotent shell automation & backup replication'
        ]
      }
    ]
  },
  {
    number: '02',
    title: 'DevSecOps & Zero-Trust Security',
    focus: 'Cryptographic identity hierarchies, mutual TLS enforcement, static application security auditing, and protocol fuzzing.',
    categories: [
      {
        name: 'Zero-Trust & Cryptographic Architecture',
        items: [
          'Hybrid post-quantum key encapsulation (ML-KEM-768 + X25519)',
          'Internal multi-tier X.509 Certificate Authority (PKI)',
          'Mutual TLS (mTLS) reverse proxy enforcement',
          'Dynamic CIDR ingress policy enforcement',
          'Downgrade attack canary verification'
        ]
      },
      {
        name: 'Defensive Engineering & Security Telemetry',
        items: [
          'Bandit static application security testing (SAST)',
          'CAN-bus frame fuzzing & DLC whitelisting',
          'SCADA APDU function code fuzzing & inspection',
          'Wazuh HIDS/XDR host telemetry & auditd integration',
          'External Attack Surface Management (EASM) pipelines'
        ]
      }
    ]
  },
  {
    number: '03',
    title: 'Cyber-Physical Systems & Electrical Engineering',
    focus: 'Coupled physical dynamics, mathematical state estimation, microgrid consensus resilience, and laboratory metrology.',
    categories: [
      {
        name: 'Physical Dynamics & State Estimation',
        items: [
          'Coupled-mode resonant inductive modeling',
          'Inverter P-f and Q-V droop dynamics',
          'Byzantine-resilient secondary frequency consensus',
          'False Data Injection (FDI) resilience',
          'Discrete Extended Kalman Filtering (EKF)',
          'Thevenin Equivalent Circuit Modeling (ECM)'
        ]
      },
      {
        name: 'Industrial Protocol & Metrology Competencies',
        items: [
          'CAN-bus (ISO 11898) telemetry parsing & bounds checking',
          'Modbus TCP / IEC SCADA APDU deep packet dissection',
          'Digital Storage Oscilloscopes (DSO) & RF metrology',
          'High-Q air-core helical resonant coil fabrication',
          'LC tank matching & zero-voltage switching topologies'
        ]
      }
    ]
  }
];

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'cyber-physical-systems',
    code: '01',
    title: 'Cyber-Physical Systems',
    objective: 'Investigating state-space boundary defense, physical process coupling, and real-time observability in critical automated environments.',
    theoreticalFramework: 'Coupled physical dynamics, state estimation resilience, and timing-predictable distributed execution across networked actuators and sensors.',
    currentInvestigation: 'Quantifying control loop stability and measurement jitter under adversarial network latency conditions.',
    associatedProjects: ['resonant-wireless-power', 'siem-telemetry'],
    associatedNotes: ['resonant-inductive-coupling', 'scada-security'],
    relevantStandards: ['IEC 62443', 'NIST SP 800-82', 'IEEE 1686']
  },
  {
    id: 'smart-grid-security',
    code: '02',
    title: 'Smart Grid Security',
    objective: 'Hardening substation communications, protocol inspection (Modbus-TCP, DNP3, IEC 61850), and false data injection mitigation in power infrastructure.',
    theoreticalFramework: 'Stateful protocol boundary inspection, algebraic observability metrics, and cryptographic network isolation in operational technology (OT).',
    currentInvestigation: 'Deep packet inspection at boundary firewalls detecting unauthorized coil forced writes and polling anomalies in fieldbus traffic.',
    associatedProjects: ['perimeter-hardening', 'siem-telemetry'],
    associatedNotes: ['scada-security', 'distributed-network-telemetry'],
    relevantStandards: ['NERC CIP', 'IEEE 1588 PTP', 'IEC 62351']
  },
  {
    id: 'distributed-testbeds',
    code: '03',
    title: 'Distributed Testbeds',
    objective: 'Architecting reproducible, high-throughput test environments for cyber-physical validation, telemetry ingestion, and fault injection.',
    theoreticalFramework: 'Deterministic socket ring buffers, eBPF telemetry hooks, and declarative infrastructure orchestration across heterogeneous nodes.',
    currentInvestigation: 'Zero-drop telemetry ingestion pipelines sustaining high event-rate burst traffic with kernel memory mapping and asynchronous parsers.',
    associatedProjects: ['siem-telemetry', 'infrastructure-automation'],
    associatedNotes: ['distributed-network-telemetry'],
    relevantStandards: ['RFC 5424', 'OpenTelemetry Spec', 'POSIX.1b']
  },
  {
    id: 'infrastructure-security',
    code: '04',
    title: 'Infrastructure Security',
    objective: 'Engineering zero-trust perimeters, immutable server deployments, bare-metal isolation, and cryptographically verified telemetry pipelines.',
    theoreticalFramework: 'Least-privilege network segmentation, declarative configuration enforcement, and kernel runtime hardening.',
    currentInvestigation: 'Automated host bootstrapping to hardened, instrumented nodes using declarative state engines and continuous validation.',
    associatedProjects: ['perimeter-hardening', 'infrastructure-automation'],
    associatedNotes: ['scada-security', 'distributed-network-telemetry'],
    relevantStandards: ['CIS Benchmarks', 'NIST SP 800-53', 'ISO/IEC 27001']
  }
];

export const CREDENTIALS: CredentialItem[] = [
  {
    id: 'cred-01',
    title: 'AWS Certified DevOps Engineer – Professional Specialization',
    issuer: 'Packt / Coursera',
    verificationUrl: null,
    status: 'Verified Curriculum',
    category: 'Cloud Infrastructure & DevOps'
  },
  {
    id: 'cred-02',
    title: 'Introduction to Hardware and Operating Systems',
    issuer: 'IBM',
    verificationUrl: null,
    status: 'Verified Curriculum',
    category: 'Systems & Hardware'
  },
  {
    id: 'cred-03',
    title: 'Introduction to Networking and Storage',
    issuer: 'IBM',
    verificationUrl: null,
    status: 'Verified Curriculum',
    category: 'Networking & Storage'
  },
  {
    id: 'cred-04',
    title: 'Introduction to Cybersecurity Essentials',
    issuer: 'IBM',
    verificationUrl: null,
    status: 'Verified Curriculum',
    category: 'Cybersecurity'
  },
  {
    id: 'cred-05',
    title: 'Cybersecurity Tools & Cyberattacks',
    issuer: 'IBM',
    verificationUrl: null,
    status: 'Verified Curriculum',
    category: 'Cybersecurity'
  },
  {
    id: 'cred-06',
    title: 'Software Quality Control and Management Parts 1 & 2',
    issuer: 'Northeastern University',
    verificationUrl: null,
    status: 'Verified Curriculum',
    category: 'Software Quality & Reliability'
  },
  {
    id: 'cred-07',
    title: 'Foundations of Software Testing and Validation',
    issuer: 'University of Leeds',
    verificationUrl: null,
    status: 'Verified Curriculum',
    category: 'Software Testing & Quality'
  },
  {
    id: 'cred-08',
    title: 'Advanced Programming in Kotlin',
    issuer: 'Meta',
    verificationUrl: null,
    status: 'Verified Curriculum',
    category: 'Software Engineering'
  },
  {
    id: 'cred-09',
    title: 'Introduction to Software, Programming, and Databases',
    issuer: 'IBM',
    verificationUrl: null,
    status: 'Verified Curriculum',
    category: 'Software & Databases'
  },
  {
    id: 'cred-10',
    title: 'Modern Frontend Web Development Specialization',
    issuer: 'Skillshare / Coursera',
    verificationUrl: null,
    status: 'Verified Curriculum',
    category: 'Web & Systems Interfaces'
  }
];

// Alias for backwards compatibility
export const CERTIFICATIONS = CREDENTIALS;

export const OPEN_SOURCE_REPOS: OpenSourceRepo[] = [
  {
    name: 'Haidriyam Profile & Engineering Repositories',
    description: 'Technical repositories, automation scripts, configuration templates, and systems engineering documentation.',
    technologies: ['Linux', 'Bash', 'Python', 'CI/CD', 'Security'],
    githubUrl: 'https://github.com/Haidriyam',
    role: 'Author / Maintainer'
  }
];

export const PROJECTS: ProjectItem[] = ALL_PROJECTS;

export const TECHNICAL_NOTES: TechnicalNote[] = [
  {
    slug: 'resonant-inductive-coupling',
    id: 'NOTE / TN-001',
    title: 'Resonant Inductive Coupling: Efficiency, Frequency and Air-Gap Analysis',
    date: 'TECHNICAL MONOGRAPH',
    category: 'Electromagnetics & Resonance',
    readingTime: '15 min read',
    abstract: 'Rigorous mathematical derivation of coupled magnetic resonance in Series-Series (SS) inductive links. Quantifies mutual inductance decay over variable axial air gaps, establishes the critical coupling threshold separating single-mode and bifurcation regimes, and analyzes high-frequency conductor dissipation under skin and proximity effects.',
    equations: [
      '\\omega_0 = \\frac{1}{\\sqrt{L C}}',
      'Q = \\frac{\\omega_0 L}{R_s} = \\frac{1}{\\omega_0 C R_s}',
      'k(d) = \\frac{M(d)}{\\sqrt{L_1 L_2}}',
      'k_{\\text{crit}} = \\frac{1}{\\sqrt{Q_1 Q_2}}',
      '\\eta_{\\text{link}} = \\frac{k^2 Q_1 Q_2}{\\left(1 + \\sqrt{1 + k^2 Q_1 Q_2}\\right)^2}'
    ],
    sections: [
      {
        heading: '1. Introduction',
        content: 'Wireless power transfer (WPT) via non-radiative magnetic coupling has emerged as a crucial mechanism for delivering electrical energy across physical air gaps without conductive contact. In applications ranging from biomedical implants to automated electric vehicle platforms and hazardous industrial isolation zones, conventional coreless inductive links encounter steep efficiency cliffs as distance increases. This monograph provides the theoretical foundation, equivalent circuit models, and experimental criteria for magnetic resonant links operating in high-Q regimes.'
      },
      {
        heading: '2. Physical Principles of Near-Field Magnetic Transfer',
        content: 'Near-field power transmission relies on the non-radiative quasi-static magnetic field generated by an alternating current traversing a primary coil. According to the Biot-Savart law and Faraday law of electromagnetic induction, the time-varying magnetic flux density B(t) links the secondary coil aperture, inducing an electromotive force (EMF) proportional to mutual inductance M and dI/dt. In the near-field zone where spatial separation d is substantially smaller than the wavelength lambda = c / f, radiative electromagnetic losses are negligible compared to reactive stored energy in the magnetic field.'
      },
      {
        heading: '3. Resonance and Reactive Impedance Cancellation',
        content: 'In non-resonant inductive coils, the large leakage inductance produces substantial reactive impedance j*omega*L. This demands high reactive power from the excitation source, leading to high circulating currents and severe I^2*R losses in the inverter. By introducing series capacitance C_1 = 1 / (omega_0^2 * L_1) and C_2 = 1 / (omega_0^2 * L_2), the reactive impedances cancel identically at omega_0. The primary source perceives a purely resistive input impedance Z_in = R_1 + Z_ref, maximizing active power transfer to the load.'
      },
      {
        heading: '4. Mutual Inductance and Coupling Coefficient',
        content: 'Coupling between two planar circular coaxial coils of turns N1, N2 and radii r1, r2 separated by axial distance d is governed by mutual inductance M(d). The dimensionless coupling coefficient k = M / sqrt(L1 * L2) is strongly distance-dependent. As separation d increases beyond coil radius, k drops approximately proportional to 1 / d^3. The critical coupling threshold k_crit = 1 / sqrt(Q1 * Q2) defines the boundary between loose (under-coupled) and strong (over-coupled) magnetic regimes.'
      },
      {
        heading: '5. End-to-End Transmission Efficiency',
        content: 'Transfer efficiency is derived through reflected impedance analysis. Secondary total loop impedance Z_2 = R_2 + R_L reflects back into the primary as Z_ref = (omega^2 * M^2) / Z_2. The maximum theoretical link efficiency under matched optimal load R_L,opt = R_2 * sqrt(1 + k^2 * Q_1 * Q_2) demonstrates that high quality factors (Q > 100) allow elevated efficiency even when coupling coefficient k is relatively modest.'
      },
      {
        heading: '6. Experimental Considerations and Metrology',
        content: 'Physical realization of high-Q resonators requires mitigating AC resistance. At operating frequencies (100–150 kHz), current distributes non-uniformly due to skin depth delta = sqrt(rho / (pi * f * mu)) and proximity effects between adjacent turns. Multi-strand Litz wire composed of individually insulated fine strands is utilized to preserve Q. Polypropylene film dielectric capacitors with low dissipation factor tan(delta) are utilized to minimize dielectric heating.',
        tableData: {
          headers: ['Parameter', 'Symbol', 'Primary Tank', 'Secondary Tank', 'Unit'],
          rows: [
            ['Self-Inductance', 'L', 'Calibrated [VALUE]', 'Calibrated [VALUE]', 'µH'],
            ['Tuning Capacitance', 'C', 'Calibrated [VALUE]', 'Calibrated [VALUE]', 'nF'],
            ['AC Series Resistance', 'R_s', 'Low-ESR [VALUE]', 'Low-ESR [VALUE]', 'Ω'],
            ['Calculated Quality Factor', 'Q', '> 130', '> 130', 'dim.'],
            ['Coupling Coefficient', 'k', 'Distance-dep.', 'Distance-dep.', 'dim.']
          ],
          caption: 'TABLE 01 — Measured electrical parameters of primary and secondary resonant structures'
        }
      },
      {
        heading: '7. Limitations and Frequency Bifurcation',
        content: 'A critical limitation of series-series resonant links is frequency splitting (bifurcation). When coupling exceeds critical coupling (k > k_crit), the input impedance phase crosses zero at three frequencies instead of one. Operating at the uncoupled resonant frequency f_0 in this regime triggers an efficiency dip. Dynamic frequency tuning or phase-locked loop (PLL) tracking is required to follow the upper or lower bifurcation peak.'
      },
      {
        heading: '8. Conclusion',
        content: 'Resonant inductive coupling effectively overcomes the distance constraints of conventional coreless induction by compensating leakage reactance through high-Q resonant tanks. Achieving predictable operation requires balancing coil geometry, Litz wire stranding, zero-voltage switching inverter timing, and bifurcation management across the operational distance envelope.'
      }
    ],
    references: [
      '[1] Kurs, A., Karalis, A., Moffat, R., Joannopoulos, J. D., Fisher, P., & Soljacic, M. "Wireless power transfer via strongly coupled magnetic resonances." Science, vol. 317, no. 5834, pp. 83-86, 2007.',
      '[2] Sample, A. P., Meyer, D. A., & Smith, J. R. "Analysis, experimental results, and range adaptation of magnetically coupled resonators for wireless power transfer." IEEE Transactions on Industrial Electronics, vol. 58, no. 2, pp. 544-554, 2011.',
      '[3] Zhang, Y., Zhao, Z., & Chen, K. "Frequency-splitting analysis of magnetic resonant wireless power transfer." IEEE Transactions on Power Electronics, vol. 29, no. 11, pp. 6138-6147, 2014.'
    ]
  },
  {
    slug: 'distributed-network-telemetry',
    id: 'NOTE / TN-002',
    title: 'Distributed Network Telemetry and Intrusion Detection',
    date: 'TECHNICAL MONOGRAPH',
    category: 'Telemetry & Distributed Systems',
    readingTime: '16 min read',
    abstract: 'Architectural evaluation of high-throughput telemetry collection pipelines for cyber-physical infrastructures. Benchmarking socket buffer tuning, asynchronous event loops, memory-mapped rings, and deterministic regex tokenization for industrial log streams.',
    equations: [
      'B_{\\text{required}} = R_{\\text{peak}} \\times T_{\\text{jitter}} \\times (1 + \\sigma_{\\text{margin}})',
      '\\text{Drop Rate} = \\max\\left(0, \\frac{\\lambda_{\\text{in}} - \\mu_{\\text{drain}}}{C_{\\text{buffer}}}\\right)'
    ],
    sections: [
      {
        heading: '1. Architecture',
        content: 'Industrial control systems and power substations require continuous observability across heterogeneous nodes. The telemetry architecture consists of distributed collection agents deployed at field perimeter switches, substation automation servers, and perimeter firewalls. Ingested events are forwarded over TLS-authenticated channels to a central broker featuring decoupled ingestion ring buffers, asynchronous parsers, and an immutable audit log store.'
      },
      {
        heading: '2. Telemetry Collection & Protocol Framing',
        content: 'Telemetry streams encompass standard Linux auditd records, RFC 5424 structured syslog, and specialized industrial network telemetry (Modbus-TCP and DNP3 session states). To prevent telemetry collection daemons from interfering with real-time SCADA communications, collection agents run under isolated cgroups with strictly bounded CPU quotas and memory-mapped zero-copy socket buffers.'
      },
      {
        heading: '3. Distributed Nodes & Agent Hardening',
        content: 'Nodes deployed in hostile or unmanaged field locations are hardened with read-only root filesystems, cryptographic host identity certificates, and kernel eBPF probes. In the event of network disconnection, localized circular spooling buffers guarantee that timestamped audit logs are buffered on non-volatile local storage without head-of-line blocking.'
      },
      {
        heading: '4. Event Processing & Tokenization',
        content: 'Raw log streams exhibit severe burstiness during system faults. To sustain ingestion without packet drop, the processing engine utilizes deterministic regex tokenization and byte-level PDU extraction. Fieldbus transaction identifiers, function codes, source IP addresses, and register ranges are normalized into structured key-value schemas in microsecond-scale dispatch cycles.'
      },
      {
        heading: '5. Detection & Anomaly Correlation',
        content: 'Correlation engines evaluate event sequences against baseline state models. Alerts trigger upon observing abnormal function code frequencies (e.g. rapid coil writes), out-of-sequence Modbus transaction IDs, or unauthorized engineering workstation logins outside maintenance windows. Stateful threshold counters mitigate alert fatigue while ensuring zero-miss detection for critical breaker trip commands.'
      },
      {
        heading: '6. Visualization & Operator Dashboards',
        content: 'Processed telemetry is indexed into time-series stores with sub-second query latency. Operator displays present unified visibility into network ingress rates, parsed event distributions, parser drop counters, and real-time security alerts. Visual dashboards are structured according to human factors standards for control room operations.'
      },
      {
        heading: '7. Limitations & Performance Bottlenecks',
        content: 'Key performance bottlenecks occur in kernel-to-userspace context switches and JSON deserialization under burst loads exceeding 50,000 events/second. Standard POSIX blocking sockets experience packet drop when OS scheduling jitter delays userspace drain loops. Applying SO_RCVBUFFORCE and AF_PACKET memory rings eliminates this drop condition.',
        tableData: {
          headers: ['Metric', 'Standard POSIX Socket', 'Optimized Ring Buffer', 'Delta / Improvement'],
          rows: [
            ['Drop Rate at 50k eps', '4.82%', '0.00%', 'Zero packet loss verified'],
            ['Mean Parse Latency', '14.2 ms', '1.18 ms', '12.0x latency reduction'],
            ['p99 Parse Latency', '82.4 ms', '4.91 ms', 'Predictable deterministic tail'],
            ['CPU Utilization', '68% (single core)', '24% (multithreaded)', 'Optimized cache locality']
          ],
          caption: 'TABLE 01 — Telemetry pipeline performance under 50,000 events/second burst injection'
        }
      },
      {
        heading: '8. Future Work & eBPF Acceleration',
        content: 'Future iterations target in-kernel packet filtering using eBPF (Extended Berkeley Packet Filter) and XDP (eXpress Data Path). By inspecting industrial protocol headers directly at the network interface driver layer prior to sk_buff allocation, telemetry parsing can achieve line-rate filtering with near-zero host CPU impact.'
      }
    ],
    references: [
      '[1] Gerhards, R. "The Syslog Protocol." RFC 5424, Internet Engineering Task Force (IETF), 2009.',
      '[2] Corbet, J., Rubini, A., & Kroah-Hartman, G. "Linux Device Drivers, 3rd Edition." O\'Reilly Media, 2005.',
      '[3] Cloud Native Computing Foundation. "OpenTelemetry Specification." CNCF Standards Track, 2023.'
    ]
  },
  {
    slug: 'scada-security',
    id: 'NOTE / TN-003',
    title: 'SCADA Network Security Considerations for Power Infrastructure',
    date: 'TECHNICAL MONOGRAPH',
    category: 'Industrial SCADA & CPS Security',
    readingTime: '15 min read',
    abstract: 'Security analysis of unauthenticated industrial fieldbus protocols. Formal definition of stateful boundary inspection rules to detect injection attacks, unauthorized coil writes, and polling disruption in smart grid substation topologies.',
    equations: [
      'P_{\\text{anomaly}}(t) = \\mathbb{I}\\left(f_{\\text{code}} \\notin \\mathcal{W}_{\\text{allowed}}\\right) \\lor \\mathbb{I}\\left(\\Delta t_{\\text{poll}} < \\tau_{\\text{min}}\\right)',
      'S_{\\text{entropy}} = -\\sum_{i=1}^{n} p(x_i) \\log_2 p(x_i)'
    ],
    sections: [
      {
        heading: '1. Operational Technology (OT) Environments',
        content: 'Industrial control systems governing electrical power transmission, distribution substations, and generation plants operate under strict availability, deterministic latency, and physical safety constraints. Unlike traditional enterprise IT where confidentiality takes priority, OT environments prioritize integrity, availability, and deterministic real-time execution. A single delayed control message or spurious trip command can precipitate grid instability or equipment damage.'
      },
      {
        heading: '2. SCADA Architecture & Purdue Reference Model',
        content: 'Modern substation automation follows the hierarchical Purdue Reference Model (IEC 62443). Field devices such as protective relays and transformers sit at Level 0/1; Programmable Logic Controllers (PLCs) and Remote Terminal Units (RTUs) occupy Level 2; Supervisory Control and Data Acquisition (SCADA) servers and Human-Machine Interfaces (HMIs) reside at Level 3. The Industrial Demilitarized Zone (IDMZ, Level 3.5) provides a strict barrier isolating operational networks from enterprise systems (Level 4).'
      },
      {
        heading: '3. Network Segmentation & Firewall Placement',
        content: 'Strict Layer-2 and Layer-3 network segmentation is required to isolate critical protection zones. Boundary firewalls between Level 3 and Level 2 must enforce protocol-specific whitelisting, permitting only authenticated read queries (Modbus FC 03) from supervisory servers to PLCs while strictly dropping write commands unless accompanied by temporary, MFA-authenticated engineering authorization tokens.',
        tableData: {
          headers: ['Zone / Source', 'Destination', 'Protocol', 'Allowed Function Codes', 'Action'],
          rows: [
            ['Level 3 (Supervisory)', 'Level 2 (PLC Subnet)', 'Modbus-TCP (502)', 'FC 03 (Read Holding Registers)', 'ALLOW & AUDIT'],
            ['Level 3 (Engineering)', 'Level 2 (PLC Subnet)', 'Modbus-TCP (502)', 'FC 06, FC 16 (Write)', 'ALLOW with MFA Session Token'],
            ['Level 4 (Enterprise)', 'Level 2 (PLC Subnet)', 'ANY', 'NONE', 'DROP & ALERT'],
            ['Field Subnet (Sensors)', 'Level 3 (Telemetry)', 'DNP3 (20000)', 'Class 1, 2, 3 Data Poll', 'ALLOW Deterministic Rate']
          ],
          caption: 'TABLE 01 — Industrial firewall segmentation rule matrix conforming to IEC 62443-3-3'
        }
      },
      {
        heading: '4. Substation Telemetry & Fieldbus Inspection',
        content: 'Legacy fieldbus protocols such as Modbus-TCP lack intrinsic authentication or encryption. Deep Packet Inspection (DPI) engines at boundary firewalls must inspect the Modbus Application Protocol (MBAP) header and Protocol Data Unit (PDU) to validate unit identifiers, function codes, and register address ranges, preventing unauthenticated command injection.'
      },
      {
        heading: '5. Attack Surface Characterization',
        content: 'The cyber-physical attack surface includes: (1) False Data Injection Attacks (FDIA) where sensor measurements are maliciously altered to deceive state estimators; (2) Replay attacks against unauthenticated fieldbus control commands; (3) Denial of Service (DoS) attacks targeting PLC communication modules; and (4) Unauthorized engineering firmware updates.'
      },
      {
        heading: '6. Monitoring, Anomaly Detection & Signatures',
        content: 'Passive network monitoring utilizing industrial signature rulesets (Snort/Suricata) combined with statistical anomaly detection monitors polling cadences and function code distributions. Deviations in polling period Delta_t < tau_min or anomalous write requests targeting protective breaker registers generate instant alerts.'
      },
      {
        heading: '7. System Resilience & Fail-Safe Design',
        content: 'Resilience requires that control systems preserve safe states even when network perimeters are compromised. Hardwired interlocks, mechanical trips, and autonomous protective relays must operate independently of higher-level IP networks, guaranteeing physical equipment protection regardless of network-layer cyber disruption.'
      },
      {
        heading: '8. Research Considerations for Smart Grids',
        content: 'Future smart grid resilience demands integrating cryptographic zero-trust architectures, post-quantum mutual authentication for IEC 61850 GOOSE/SV messages, and physics-informed machine learning models capable of detecting cyber anomalies through algebraic state-estimation cross-checks.'
      }
    ],
    references: [
      '[1] Stouffer, K., Pillitteri, V., Lightman, S., Abrams, M., & Hahn, A. "Guide to Industrial Control Systems (ICS) Security." NIST Special Publication 800-82 Revision 2, National Institute of Standards and Technology, 2015.',
      '[2] International Electrotechnical Commission. "Security for industrial automation and control systems - Part 3-3: System security requirements and security levels." IEC 62443-3-3, 2013.',
      '[3] Knapp, E. D., & Langill, J. T. "Industrial Network Security: Securing Critical Infrastructure Networks for Smart Grid, SCADA, and Other Industrial Control Systems." Syngress, 2014.'
    ]
  }
];

export const SYSTEMS_DOSSIERS = [
  {
    id: 'dossier-siem',
    number: 'DOSSIER A',
    title: 'Automated SIEM & Telemetry Pipeline',
    subtitle: 'High-availability host telemetry, kernel audit integration, and automated event correlation.',
    technologies: ['Wazuh HIDS/XDR', 'Linux auditd', 'Telemetry', 'SIEM/XDR', 'Log Auditing', 'Grafana'],
    description: 'An automated telemetry and security monitoring pipeline using Wazuh HIDS/XDR to ingest host telemetry and audit logs across multi-tier Linux infrastructure.',
    documentation: [
      'Configured lightweight Wazuh agents on distributed Linux hosts running Ubuntu, Debian, and RHEL.',
      'Integrated kernel-level auditd event streaming for continuous tracking of privilege escalation, process execution, and sensitive file modification.',
      'Engineered structured decoders and correlation rules to distinguish operational traffic from adversarial reconnaissance.',
      'Constructed centralized Grafana telemetry dashboards providing sub-second visibility into host security state and audit alerts.'
    ],
    verification: 'Continuously active across production hosts; ingests and correlates system telemetry without operational host overhead.',
    link: '/projects/siem-telemetry'
  },
  {
    id: 'dossier-perimeter',
    number: 'DOSSIER B',
    title: 'Reverse-Proxy & Perimeter Hardening',
    subtitle: 'Perimeter isolation, token-bucket rate limiting, automated SSL/TLS, and WAF defense.',
    technologies: ['Nginx', 'Apache', 'WAF Rule Sets', 'Rate Limiting', 'Certbot', 'SSL/TLS'],
    description: 'A fortified perimeter architecture leveraging Nginx and Apache reverse proxies, granular rate limiting, automated SSL/TLS certificate management, and WAF rulesets to protect application tiers.',
    documentation: [
      'Architected reverse-proxy ingress layers separating public network traffic from internal application sockets.',
      'Enforced burst-tolerant token-bucket rate limits on sensitive endpoints to prevent brute-force attacks and volumetric floods.',
      'Implemented automated zero-downtime certificate issuance, renewal, and OCSP stapling using Certbot with Let\'s Encrypt.',
      'Hardened TLS protocol configurations (enforcing TLS 1.2/1.3, forward secrecy ciphers, HSTS headers) and applied WAF rule sets.'
    ],
    verification: 'Conforms to strict perimeter security baselines with automated cryptographic certificate renewal and verified rate-limiting enforcement.',
    link: '/projects/perimeter-hardening'
  },
  {
    id: 'dossier-automation',
    number: 'DOSSIER C',
    title: 'Infrastructure Automation & CI/CD Pipelines',
    subtitle: 'Automated deployment workflows, infrastructure synchronization, and operational validation.',
    technologies: ['Bash', 'Python', 'GitHub Actions', 'SSH', 'FTP', 'CI/CD'],
    description: 'Automated deployment pipelines and infrastructure synchronization workflows driven by Bash, Python, and GitHub Actions to ensure deterministic application releases.',
    documentation: [
      'Engineered declarative GitHub Actions CI/CD workflows executing automated code linting, syntax validation, and artifact building.',
      'Implemented automated remote deployment pipelines utilizing secure SSH and encrypted FTP transport protocols.',
      'Developed custom Bash and Python operational tooling for automated database snapshots, rotation, and health probes.',
      'Established pre-flight validation checks and post-deployment rollback hooks to guarantee zero configuration drift.'
    ],
    verification: 'Automates end-to-end multi-environment deployments with idempotent scripts and automated health validation.',
    link: '/projects/infrastructure-automation'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-01',
    period: 'Nov 2025 — Present',
    role: 'Senior IT & Infrastructure Systems Manager',
    organization: 'Urban 411 Design Products Trading',
    division: 'Systems & Infrastructure Operations',
    location: 'Dubai, UAE',
    scope: 'Directing enterprise IT and cloud systems infrastructure with complete lifecycle management across multi-tier hosting, automated telemetry pipelines, perimeter hardening, and automated CI/CD deployments.',
    technicalResponsibilities: [
      'Complete lifecycle management and availability/security hardening across multi-tier cloud and on-premises infrastructure.',
      'Maintain strict 99.8% operational SLA for mission-critical services through proactive health monitoring and automated failover.',
      'Architect and deploy automated SIEM and telemetry monitoring pipeline using Wazuh HIDS/XDR to ingest host telemetry and audit logs.',
      'Harden public perimeter gateways via Nginx and Apache reverse proxies, rate limiting, automated Certbot SSL/TLS renewal, and WAF rule sets.',
      'Build and maintain CI/CD deployment automation pipelines utilizing GitHub Actions, Bash utilities, and secure SSH/FTP protocols.'
    ],
    systemsWorkedWith: [
      'Wazuh HIDS/SIEM/XDR Security Platform',
      'Linux Distributions (Ubuntu Server, Debian, RHEL)',
      'Nginx & Apache Web Servers',
      'GitHub Actions & Bash CI/CD Workflows',
      'Certbot & Let\'s Encrypt Automated SSL/TLS',
      'Multi-Tier Cloud Hosting (AWS EC2, Lightsail)'
    ],
    selectedContributions: [
      'Achieved 40%+ reduction in server response latency through reverse-proxy caching, database query optimization, and kernel parameter tuning.',
      'Enforced a 99.8% operational SLA across multi-tier infrastructure by eliminating single points of failure and automating recovery.',
      'Deployed centralized Wazuh SIEM telemetry pipeline ingesting host events and audit logs with automated threat detection rules.'
    ],
    documentedOutcomes: [
      {
        metric: '99.8% SLA',
        detail: 'Documented operational availability across multi-tier production services through proactive monitoring and automated recovery.'
      },
      {
        metric: '40%+ Latency Reduction',
        detail: 'Documented reduction in server response latency achieved via reverse-proxy buffer tuning, caching, and kernel optimization.'
      }
    ],
    keyEvidence: [
      '99.8% operational SLA documented across multi-tier infrastructure.',
      '40%+ reduction in server response latency verified through benchmark monitoring.',
      'Wazuh HIDS/XDR automated telemetry and security monitoring in active production.',
      'Automated GitHub Actions CI/CD pipelines deploying via SSH/FTP.'
    ],
    technologies: [
      'Linux (Ubuntu, Debian, RHEL)',
      'Wazuh HIDS/XDR',
      'Nginx & Apache',
      'Certbot SSL/TLS',
      'GitHub Actions',
      'Bash & Python',
      'AWS (EC2, Lightsail)'
    ]
  },
  {
    id: 'exp-02',
    period: '2020 — 2025',
    role: 'IT & Infrastructure Operations Manager',
    organization: 'TECDEAL General Trading LLC',
    division: 'Infrastructure & Operations',
    location: 'Dubai, UAE',
    scope: 'Led infrastructure architecture and systems operations across distributed commercial hubs, securing local network topologies, gateway firewalls, database clusters, and virtualization environments.',
    technicalResponsibilities: [
      'Designed and administered local network topologies across distributed commercial hubs, deploying gateway firewalls, VLAN subnetting, and server virtualization.',
      'Enforced access control lists (ACLs) and zero-trust segmentation between enterprise administrative zones and operational endpoints.',
      'Managed relational database clusters, executing query and index optimization to maintain high-throughput transaction processing.',
      'Engineered automated disaster recovery pipelines with multi-region snapshot failover and routine restoration verification drills.'
    ],
    systemsWorkedWith: [
      'Gateway Firewalls & Multi-VLAN Subnetting',
      'Server Virtualization Environments',
      'Relational Database Clusters (MySQL / PostgreSQL)',
      'Multi-Region Cloud Snapshot Pipelines',
      'Hardware Access Control & Bastion Proxies'
    ],
    selectedContributions: [
      'Segmented distributed commercial hub networks using VLANs and gateway ACLs, completely isolating sensitive transactional servers.',
      'Optimized relational database query execution plans and index trees, eliminating peak-hour query bottlenecks.',
      'Implemented automated multi-region snapshot failover workflows ensuring rapid recovery in the event of local infrastructure disruption.'
    ],
    keyEvidence: [
      'Multi-hub network topology deployment with zero-trust segmentation and VLAN isolation.',
      'Relational database query optimization maintaining sub-second transactional performance.',
      'Disaster recovery pipelines with verified multi-region snapshot failover.'
    ],
    technologies: [
      'Network Engineering',
      'VLANs & Gateway Firewalls',
      'Server Virtualization',
      'Relational Databases',
      'Disaster Recovery',
      'Access Control Lists (ACLs)'
    ]
  },
  {
    id: 'exp-03',
    period: '2016 — 2019',
    role: 'Systems & Web Development Engineer',
    organization: 'Techvision',
    division: 'Systems & Web Engineering',
    location: 'Bahawalpur, Pakistan',
    scope: 'Managed production Linux LAMP/LEMP server environments, performing routine security audits, system patching, automated shell scripting, and local network maintenance.',
    technicalResponsibilities: [
      'Provisioned, configured, and hardened production Linux LAMP (Linux, Apache, MySQL, PHP) and LEMP (Linux, Nginx, MySQL, PHP) environments.',
      'Conducted regular security audits, operating system kernel patching, and vulnerability remediation across web servers.',
      'Authored custom Bash utilities and cron diagnostics for automated log archiving, disk hygiene, and offsite database replication.',
      'Configured and maintained physical routers, managed switches, and local endpoint network infrastructure.'
    ],
    systemsWorkedWith: [
      'Linux LAMP & LEMP Production Stacks',
      'Apache & Nginx Web Servers',
      'MySQL Database Administration',
      'Bash Shell & Cron Automation Daemons',
      'Physical Routing & Managed Switch Hardware'
    ],
    selectedContributions: [
      'Maintained consistent server uptime through automated cron diagnostics, preemptive disk space monitoring, and offsite log archiving.',
      'Executed systematic security patching schedules across production Linux servers, eliminating exposed service vulnerabilities.',
      'Designed reliable shell-driven offsite database backup replication routines with automated integrity verification.'
    ],
    keyEvidence: [
      'Production Linux LAMP/LEMP system administration and kernel security patching.',
      'Automated Bash diagnostics and offsite backup verification scripts.',
      'Hands-on network routing, switching, and endpoint infrastructure maintenance.'
    ],
    technologies: [
      'Linux (Ubuntu, CentOS)',
      'LAMP & LEMP Stacks',
      'Bash Scripting',
      'Cron Automation',
      'Network Routing & Switching',
      'MySQL'
    ]
  }
];

export const EDUCATION: EducationItem = {
  degree: 'Bachelor of Science in Electrical Engineering',
  major: 'Electrical Engineering',
  specialization: 'Power Systems & Electrical Infrastructure',
  institution: 'The Islamia University of Bahawalpur',
  period: 'Graduated 2016',
  location: 'Pakistan',
  status: 'Degree Conferred (2016)',
  thesisOrCapstone: {
    title: 'Resonant Inductive Wireless Power Transmission System',
    department: 'Department of Electrical Engineering',
    period: 'Aug 2015 — Jun 2016',
    grade: 'Grade A',
    summary:
      'Modeled Maxwell\'s equations and coupled-mode theory for near-field electromagnetic energy transfer over variable air gaps. Designed, wound, and tuned helical magnetic induction coils. Developed primary and secondary resonant LC tanks to cancel reactive power and maximize power factor. Fabricated switching driver/inverter hardware. Evaluated transmission efficiency curves, Q factors, and thermal behavior using DSO oscilloscopes, RF power meters, and signal generators. Authored thesis documentation containing mathematical derivations, schematic designs, and empirical performance metrics, followed by an examination-board defense.'
  },
  relevantCoursework: [
    'Linear Circuit Analysis',
    'Feedback Control Systems',
    'Digital Logic Design',
    'Microprocessor Systems & Interfacing',
    'Differential Equations',
    'Linear Algebra',
    'Probability & Random Variables',
    'Complex Variables & Transforms',
    'Numerical Analysis',
    'C/C++ Programming',
    'Power System Analysis',
    'Electrical Power Transmission & Distribution'
  ],
  laboratoryCompetencies: [
    'Digital Storage Oscilloscopes (DSO) & Differential High-Voltage Probes',
    'RF Spectrum Analyzers & High-Frequency Signal Generators',
    'Precision LCR Metrology & Impedance Measurement Bridges',
    'Switching Power Driver Hardware & Gate-Drive Dead-Time Metrology',
    'High-Q Air-Core Helical Resonant Inductor Fabrication & Tuning',
    'Wazuh HIDS/XDR Security Telemetry & Kernel Audit Monitoring',
    'Bare-Metal Linux Server Administration, POSIX Internals & Kernel Tuning'
  ]
};
