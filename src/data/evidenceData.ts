import { EvidenceItem } from '../types';

export const EVIDENCE_ITEMS: EvidenceItem[] = [
  // Flagship: Resonant Inductive Wireless Power
  {
    id: 'EVD-WPT-01',
    projectSlug: 'resonant-wireless-power',
    projectTitle: 'Resonant Inductive Wireless Power Transmission System',
    evidenceType: 'Architecture Diagram',
    title: 'Resonant Power Transmission Signal Flow Architecture',
    description: 'Vector architecture diagram depicting energy path from DC input rail through high-frequency switching inverter, primary LC tank, magnetic air gap, secondary receiver, and load.',
    status: 'AVAILABLE',
    source: 'Technical Architecture Specification / SVG',
    targetRef: '/projects/resonant-wireless-power#section-04-architecture'
  },
  {
    id: 'EVD-WPT-02',
    projectSlug: 'resonant-wireless-power',
    projectTitle: 'Resonant Inductive Wireless Power Transmission System',
    evidenceType: 'Architecture Diagram',
    title: 'Lumped-Element Series-Series (SS) Equivalent Circuit Schematic',
    description: 'Equivalent electrical schematic detailing source impedance, primary resonant network, mutual inductance M(d), secondary tuning capacitor, and dynamic load resistor.',
    status: 'AVAILABLE',
    source: 'Circuit Schematic / SPICE Topology',
    targetRef: '/projects/resonant-wireless-power#section-04-architecture'
  },
  {
    id: 'EVD-WPT-03',
    projectSlug: 'resonant-wireless-power',
    projectTitle: 'Resonant Inductive Wireless Power Transmission System',
    evidenceType: 'Technical Note',
    title: 'Research Note TN-001: Resonant Inductive Coupling Monograph',
    description: 'Analytical derivations for series-series resonance, quality factor formulations, coupling coefficient decay over air gap, and critical coupling bifurcation threshold.',
    status: 'AVAILABLE',
    source: 'Technical Monograph TN-001',
    sourceUrl: '/notes/resonant-inductive-coupling',
    targetRef: '/notes/resonant-inductive-coupling'
  },
  {
    id: 'EVD-WPT-04',
    projectSlug: 'resonant-wireless-power',
    projectTitle: 'Resonant Inductive Wireless Power Transmission System',
    evidenceType: 'Repository',
    title: 'Analytical Resonance & Bifurcation Calculation Script',
    description: 'Python script for numerical calculation of critical coupling k_crit, theoretical efficiency bounds, and split resonant peak frequencies in the over-coupled regime.',
    status: 'AVAILABLE',
    source: 'github.com/Haidriyam',
    sourceUrl: 'https://github.com/Haidriyam',
    targetRef: '/projects/resonant-wireless-power#section-08-source'
  },
  {
    id: 'EVD-WPT-05',
    projectSlug: 'resonant-wireless-power',
    projectTitle: 'Resonant Inductive Wireless Power Transmission System',
    evidenceType: 'Thesis',
    title: 'Undergraduate Engineering Capstone Thesis Defense Record',
    description: 'Bachelor of Science in Electrical Engineering (Power Systems) capstone thesis awarded Grade A by the examination board, The Islamia University of Bahawalpur.',
    status: 'AVAILABLE',
    source: 'The Islamia University of Bahawalpur (Aug 2015 — Jun 2016)',
    targetRef: '/education'
  },
  {
    id: 'EVD-WPT-06',
    projectSlug: 'resonant-wireless-power',
    projectTitle: 'Resonant Inductive Wireless Power Transmission System',
    evidenceType: 'Lab Measurement',
    title: 'FIG. 01: Digital Storage Oscilloscope ZVS Waveform Trace',
    description: 'High-frequency switching drain-source voltage (V_DS) and tank current (I_tank) waveform trace demonstrating Zero Voltage Switching (ZVS) transitions.',
    status: 'PLACEHOLDER',
    source: 'Original laboratory measurement required (200 MHz DSO trace capture).',
    targetRef: '/projects/resonant-wireless-power#section-06-measurement'
  },
  {
    id: 'EVD-WPT-07',
    projectSlug: 'resonant-wireless-power',
    projectTitle: 'Resonant Inductive Wireless Power Transmission System',
    evidenceType: 'Lab Measurement',
    title: 'FIG. 02: Power Transfer Efficiency vs. Axial Air Gap Metric Plot',
    description: 'Empirical transfer efficiency η plotted as a continuous function of axial coil separation d (mm) over the 5 mm to 120 mm range.',
    status: 'PLACEHOLDER',
    source: 'Original laboratory measurement required (micrometer optical rail test).',
    targetRef: '/projects/resonant-wireless-power#section-06-measurement'
  },
  {
    id: 'EVD-WPT-08',
    projectSlug: 'resonant-wireless-power',
    projectTitle: 'Resonant Inductive Wireless Power Transmission System',
    evidenceType: 'Lab Measurement',
    title: 'FIG. 03: Frequency Response & Resonance Bifurcation Plot',
    description: 'Frequency sweep curve contrasting single-peak resonant response in the under-coupled regime with dual-peak frequency bifurcation in the over-coupled regime.',
    status: 'PLACEHOLDER',
    source: 'Original laboratory measurement required (80 kHz – 180 kHz frequency sweep).',
    targetRef: '/projects/resonant-wireless-power#section-06-measurement'
  },
  {
    id: 'EVD-WPT-09',
    projectSlug: 'resonant-wireless-power',
    projectTitle: 'Resonant Inductive Wireless Power Transmission System',
    evidenceType: 'Lab Measurement',
    title: 'FIG. 04: Continuous Load Thermal Dissipation Profile',
    description: 'Thermal rise log for transmitter multi-strand coil windings and MOSFET heatsinks over a 30-minute full-load bench trial.',
    status: 'PLACEHOLDER',
    source: 'Original laboratory measurement required (calibrated thermal probe log).',
    targetRef: '/projects/resonant-wireless-power#section-06-measurement'
  },
  {
    id: 'EVD-WPT-10',
    projectSlug: 'resonant-wireless-power',
    projectTitle: 'Resonant Inductive Wireless Power Transmission System',
    evidenceType: 'Lab Measurement',
    title: 'FIG. 05: Resonant Waveform & Zero-Phase Alignment Trace',
    description: 'Dual-channel oscilloscope capture verifying zero phase angle displacement between primary tank voltage and circulating current at resonance.',
    status: 'PLACEHOLDER',
    source: 'Original laboratory measurement required (differential probe & Rogowski sensor).',
    targetRef: '/projects/resonant-wireless-power#section-06-measurement'
  },
  {
    id: 'EVD-WPT-11',
    projectSlug: 'resonant-wireless-power',
    projectTitle: 'Resonant Inductive Wireless Power Transmission System',
    evidenceType: 'Thesis',
    title: 'Original Full Capstone Manuscript Scan (PDF Archive)',
    description: 'Scanned physical capstone document authored in 2016 and archived in the university departmental library.',
    status: 'PLACEHOLDER',
    source: 'Physical manuscript transcription from institutional archive required.',
    targetRef: '/projects/resonant-wireless-power#section-07-documentation'
  },

  // SIEM & Host Telemetry Pipeline
  {
    id: 'EVD-TEL-01',
    projectSlug: 'siem-telemetry',
    projectTitle: 'Automated SIEM & Telemetry Pipeline',
    evidenceType: 'Architecture Diagram',
    title: 'End-to-End SIEM Telemetry Ingestion Pipeline Diagram',
    description: 'Multi-stage pipeline specification: Distributed Linux hosts → Wazuh agents → Encrypted transport → Central indexer → Automated rule analysis → Grafana visualization.',
    status: 'AVAILABLE',
    source: 'Technical Architecture Specification / SVG',
    targetRef: '/projects/siem-telemetry'
  },
  {
    id: 'EVD-TEL-02',
    projectSlug: 'siem-telemetry',
    projectTitle: 'Automated SIEM & Telemetry Pipeline',
    evidenceType: 'Architecture Diagram',
    title: 'Kernel Socket Ring-Buffer (AF_PACKET) Ingestion Architecture',
    description: 'Zero-copy kernel memory mapping architecture utilizing ring buffers and asynchronous userspace consumer workers to absorb 50,000+ eps substation bursts.',
    status: 'AVAILABLE',
    source: 'Kernel Telemetry Architecture Specification',
    targetRef: '/projects/siem-telemetry'
  },
  {
    id: 'EVD-TEL-03',
    projectSlug: 'siem-telemetry',
    projectTitle: 'Automated SIEM & Telemetry Pipeline',
    evidenceType: 'Configuration',
    title: 'Zero-Copy Modbus-TCP PDU Application-Layer Decoder',
    description: 'Optimized Go reference decoder unpacking raw MBAP headers and Modbus function code data structures without heap memory allocations.',
    status: 'AVAILABLE',
    source: 'github.com/Haidriyam',
    sourceUrl: 'https://github.com/Haidriyam',
    targetRef: '/projects/siem-telemetry'
  },
  {
    id: 'EVD-TEL-04',
    projectSlug: 'siem-telemetry',
    projectTitle: 'Automated SIEM & Telemetry Pipeline',
    evidenceType: 'Benchmark',
    title: 'High-Throughput Burst Ingestion Benchmark Table',
    description: 'Empirical comparison between default blocking POSIX sockets (4.82% loss) and kernel ring buffer architecture (0.00% loss at 50,000 events/second).',
    status: 'AVAILABLE',
    source: 'Laboratory Testbed Stress Benchmark',
    targetRef: '/projects/siem-telemetry'
  },
  {
    id: 'EVD-TEL-05',
    projectSlug: 'siem-telemetry',
    projectTitle: 'Automated SIEM & Telemetry Pipeline',
    evidenceType: 'System Screenshot',
    title: 'Production Wazuh XDR / Grafana Incident Telemetry Dashboard',
    description: 'Sanitized production screenshot showing real-time host intrusion alerts, MITRE ATT&CK correlation, and log volume histograms.',
    status: 'PLACEHOLDER',
    source: 'Production testbed telemetry capture required.',
    targetRef: '/projects/siem-telemetry'
  },

  // Perimeter Hardening & Reverse Proxy
  {
    id: 'EVD-SEC-01',
    projectSlug: 'perimeter-hardening',
    projectTitle: 'Reverse-Proxy & Perimeter Hardening',
    evidenceType: 'Architecture Diagram',
    title: 'Multi-Tier Perimeter Hardening & TLS Termination Architecture',
    description: 'Edge reverse-proxy architecture showing token-bucket rate limiting, Web Application Firewall (WAF) rule engines, automated Certbot TLS renewal, and isolated socket proxying.',
    status: 'AVAILABLE',
    source: 'Technical Architecture Specification / SVG',
    targetRef: '/projects/perimeter-hardening'
  },
  {
    id: 'EVD-SEC-02',
    projectSlug: 'perimeter-hardening',
    projectTitle: 'Reverse-Proxy & Perimeter Hardening',
    evidenceType: 'Architecture Diagram',
    title: 'IEC 62443 / Purdue Reference Model Boundary Segmentation',
    description: 'Industrial cyber-physical boundary defense separating Enterprise (Level 4), Industrial DMZ (Level 3.5), Supervisory SCADA (Level 3), and PLC automation networks (Level 2).',
    status: 'AVAILABLE',
    source: 'Purdue Reference Model Topology',
    targetRef: '/projects/perimeter-hardening'
  },
  {
    id: 'EVD-SEC-03',
    projectSlug: 'perimeter-hardening',
    projectTitle: 'Reverse-Proxy & Perimeter Hardening',
    evidenceType: 'Configuration',
    title: 'Hardened Nginx Reverse Proxy & TLS 1.3 Configuration',
    description: 'Production configuration enforcing ECDHE cipher suites, HSTS 31536000s headers, X-Frame-Options DENY, and 100 req/min token-bucket rate limits.',
    status: 'AVAILABLE',
    source: 'Production Configuration Specification',
    targetRef: '/projects/perimeter-hardening'
  },
  {
    id: 'EVD-SEC-04',
    projectSlug: 'perimeter-hardening',
    projectTitle: 'Reverse-Proxy & Perimeter Hardening',
    evidenceType: 'Benchmark',
    title: 'SSL Labs A+ Cryptographic Audit & Modbus Filter Metric Matrix',
    description: 'Verification audit confirming 100% blocking of unauthenticated Modbus write functions (FC 05/06) at boundary and zero unauthorized IDMZ traversals.',
    status: 'AVAILABLE',
    source: 'Perimeter Verification Audit',
    targetRef: '/projects/perimeter-hardening'
  },

  // Infrastructure Automation & CI/CD
  {
    id: 'EVD-SYS-01',
    projectSlug: 'infrastructure-automation',
    projectTitle: 'Infrastructure Automation & CI/CD Pipelines',
    evidenceType: 'Architecture Diagram',
    title: 'Automated CI/CD Deployment & Synchronization Pipeline Flow',
    description: 'Five-stage continuous deployment workflow: Code commit → Pre-flight syntax validation → GitHub Actions automation runner → Encrypted SSH/FTP synchronization → Health check verification.',
    status: 'AVAILABLE',
    source: 'Technical Architecture Specification / SVG',
    targetRef: '/projects/infrastructure-automation'
  },
  {
    id: 'EVD-SYS-02',
    projectSlug: 'infrastructure-automation',
    projectTitle: 'Infrastructure Automation & CI/CD Pipelines',
    evidenceType: 'Architecture Diagram',
    title: 'Bare-Metal Node Provisioning Finite State Machine',
    description: 'State transition model depicting cold bare-metal boot via iPXE, cloud-init disk partitioning, idempotent Ansible configuration, and automated health checks.',
    status: 'AVAILABLE',
    source: 'State Machine Specification',
    targetRef: '/projects/infrastructure-automation'
  },
  {
    id: 'EVD-SYS-03',
    projectSlug: 'infrastructure-automation',
    projectTitle: 'Infrastructure Automation & CI/CD Pipelines',
    evidenceType: 'Configuration',
    title: 'Idempotent Kernel Socket & Receive Buffer Hardening Playbook',
    description: 'Ansible role enforcing net.core.rmem_max 64MB buffers, netdev_max_backlog 100k, and BBR congestion control across target compute nodes.',
    status: 'AVAILABLE',
    source: 'github.com/Haidriyam',
    sourceUrl: 'https://github.com/Haidriyam',
    targetRef: '/projects/infrastructure-automation'
  },
  {
    id: 'EVD-SYS-04',
    projectSlug: 'infrastructure-automation',
    projectTitle: 'Infrastructure Automation & CI/CD Pipelines',
    evidenceType: 'Benchmark',
    title: 'Provisioning Velocity & CIS Benchmark Compliance Matrix',
    description: 'Empirical measurement confirming cold-boot to fully instrumented node in under 4.5 minutes with 100% CIS Linux Level 1 benchmark compliance.',
    status: 'AVAILABLE',
    source: 'CI/CD Automated Execution Logs',
    targetRef: '/projects/infrastructure-automation'
  }
];
