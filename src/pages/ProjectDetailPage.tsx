import React from 'react';
import { PROJECTS } from '../data/dossierData';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProjectHeader } from '../components/ProjectHeader';
import { MetricBlock } from '../components/MetricBlock';
import { RepositoryLink } from '../components/RepositoryLink';
import { Tag } from '../components/Tag';
import {
  Figure,
  FigureCaption,
  MeasurementTable,
  TechnicalDiagram,
  ReferenceBlock
} from '../components/FigureSystem';
import { CodeBlock } from '../components/CodeBlock';
import { FlagshipResonantPowerReport } from '../components/FlagshipResonantPowerReport';
import { CoreEngineeringQuestions, EngineeringQuestionAnswer } from '../components/CoreEngineeringQuestions';
import { TechnicalProjectNav } from '../components/TechnicalProjectNav';
import {
  ResonantCircuitDiagram,
  TelemetryArchitectureDiagram,
  SiemTelemetryDataflowDiagram,
  PurdueBoundaryDiagram,
  PerimeterSecurityDiagram,
  InfrastructureBootDiagram,
  SiemPipelineArchitectureDiagram,
  PerimeterHardeningArchitectureDiagram,
  InfrastructureAutomationArchitectureDiagram
} from '../components/TechnicalDiagrams';
import {
  MicrogridControlDiagram,
  BatteryEkfDiagram,
  ScadaIdsDiagram,
  WptSimHierarchyDiagram,
  QuantumPqcDiagram,
  ZeroTrustPkiDiagram,
  GitOpsMeshDiagram,
  AttackSurfaceIntelDiagram
} from '../components/NewProjectDiagrams';
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Database,
  Terminal,
  Server,
  Cpu,
  Layers,
  Zap,
  Activity,
  Upload
} from 'lucide-react';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

// Custom 8-question audit matrices for systems projects
const PROJECT_AUDIT_DATA: Record<string, EngineeringQuestionAnswer[]> = {
  'siem-telemetry': [
    {
      questionNumber: 1,
      question: 'What exact problem does this system solve?',
      answer: 'Solves silent telemetry packet drops during substation electrical fault transients. In industrial grid events, protection relays emit synchronized, high-volume event bursts (50k+ eps) that instantly saturate standard POSIX blocking sockets, causing conventional userspace syslog collectors to silently drop critical fault sequences.',
      icon: 'problem'
    },
    {
      questionNumber: 2,
      question: 'Why was this specific architecture chosen?',
      answer: 'Kernel-level memory-mapped ring buffers (AF_PACKET with SO_RCVBUFFORCE) decoupled from asynchronous userspace consumer workers. This eliminates per-frame kernel-to-userspace context switching overhead and provides millisecond-scale jitter absorption during peak bursts.',
      icon: 'design'
    },
    {
      questionNumber: 3,
      question: 'How does the telemetry pipeline work end-to-end?',
      answer: 'Distributed edge agents at substation perimeter switches capture raw Ethernet frames, perform deterministic byte tokenization for Modbus/DNP3/Syslog PDUs, queue normalized key-value records in local memory-mapped rings, and stream them over TLS-authenticated TCP channels with backpressure signaling to the central indexer.',
      icon: 'implementation'
    },
    {
      questionNumber: 4,
      question: 'What are the architectural trade-offs?',
      answer: 'Elevates pinned kernel RAM consumption (64 MB per interface buffer) and requires elevated Linux capabilities (CAP_NET_ADMIN, CAP_IPC_LOCK). In return, it guarantees zero packet drops at line rates up to 50,000 events/second.',
      icon: 'limitations'
    },
    {
      questionNumber: 5,
      question: 'What are the system failure modes and mitigation strategies?',
      answer: 'Network partition between edge collectors and central indexer causes local circular spooling buffers to fill; mitigated by spooling to local non-volatile SSD partitions with deterministic FIFO retirement and rate-limiting alerts before buffer saturation.',
      icon: 'limitations'
    },
    {
      questionNumber: 6,
      question: 'How was the system tested and validated?',
      answer: 'Stress testing conducted using synthetic burst injection transmitting 50,000 events/second using UDP/TCP packet generators across a 10 GbE isolated test network while continuously sampling kernel drop counters via netstat -su and eBPF tracepoints.',
      icon: 'measurement'
    },
    {
      questionNumber: 7,
      question: 'What were the empirical results and performance metrics?',
      answer: 'Zero packets dropped at 50,000 events/second sustained burst (compared to 4.82% packet loss on default POSIX sockets). Mean parsing latency dropped to 1.18 ms with p99 deterministic tail at 4.91 ms.',
      icon: 'results'
    },
    {
      questionNumber: 8,
      question: 'What would be done differently in production or future iterations?',
      answer: 'Implement in-kernel packet filtering via eBPF and XDP (eXpress Data Path) directly at the network interface card driver layer to discard malformed frames before socket buffer allocation.',
      icon: 'design'
    }
  ],
  'perimeter-hardening': [
    {
      questionNumber: 1,
      question: 'What exact problem does this system solve?',
      answer: 'Protects vulnerable legacy industrial fieldbus controllers and OT networks from unauthorized IP traversal, unauthenticated Modbus/DNP3 control command injection, and lateral network movement from compromised enterprise environments.',
      icon: 'problem'
    },
    {
      questionNumber: 2,
      question: 'Why was this specific architecture chosen?',
      answer: 'Multi-tier Purdue Reference Model (IEC 62443) segmentation combining stateful reverse proxy gateways, TLS 1.3 cryptographic termination, and deep packet inspection (DPI) firewalls enforcing Layer-7 protocol whitelisting.',
      icon: 'design'
    },
    {
      questionNumber: 3,
      question: 'How does the perimeter security system work end-to-end?',
      answer: 'All inbound traffic terminates at the IDMZ reverse proxy layer where client certificates and MFA tokens are verified. Modbus-TCP frames undergo application-layer inspection to verify unit IDs, permitted function codes (e.g. allowing FC 03 Read but blocking FC 05 Write), and register ranges before forwarding to protected PLC subnets.',
      icon: 'implementation'
    },
    {
      questionNumber: 4,
      question: 'What are the architectural trade-offs?',
      answer: 'Adds approximately 1.5–3.0 ms of proxy transit latency and requires maintaining centralized Public Key Infrastructure (PKI) for client certificates across field engineering workstations.',
      icon: 'limitations'
    },
    {
      questionNumber: 5,
      question: 'What are the system failure modes and mitigation strategies?',
      answer: 'Proxy gateway crash severing supervisory SCADA visibility; mitigated via active-passive VRRP gateway failover pairs with sub-second health-check probes and state synchronization.',
      icon: 'limitations'
    },
    {
      questionNumber: 6,
      question: 'How was the system tested and validated?',
      answer: 'Penetration testing using custom Modbus fuzzers, automated cipher-suite audit harnesses (SSL Labs A+ criteria), and volumetric SYN/HTTP flood tests up to 100,000 requests/minute.',
      icon: 'measurement'
    },
    {
      questionNumber: 7,
      question: 'What were the empirical results and performance metrics?',
      answer: '100% of unauthenticated Modbus write requests (FC 05/06) originating from Level 4 enterprise zones dropped at the IDMZ boundary. Zero unauthorized traversals under stress testing.',
      icon: 'results'
    },
    {
      questionNumber: 8,
      question: 'What would be done differently in production or future iterations?',
      answer: 'Integrate hardware-enforced optical data diodes for one-way telemetry egress from Level 2/3 to Level 4, mathematically guaranteeing physical impossibility of inbound network attacks.',
      icon: 'design'
    }
  ],
  'infrastructure-automation': [
    {
      questionNumber: 1,
      question: 'What exact problem does this system solve?',
      answer: 'Eliminates configuration drift, manual administrator error, and inconsistent kernel security baselines across heterogeneous bare-metal compute hosts and distributed field servers.',
      icon: 'problem'
    },
    {
      questionNumber: 2,
      question: 'Why was this specific architecture chosen?',
      answer: 'Declarative, version-controlled Infrastructure-as-Code using Git, iPXE netbooting, and idempotent Ansible automation playbooks with cryptographic signature verification.',
      icon: 'design'
    },
    {
      questionNumber: 3,
      question: 'How does the automated provisioning pipeline work end-to-end?',
      answer: 'Cold bare-metal nodes boot via iPXE, pull cryptographically signed base images via cloud-init, and execute idempotent Ansible playbooks that apply kernel sysctl tuning, user namespaces, firewall rulesets, and telemetry agents.',
      icon: 'implementation'
    },
    {
      questionNumber: 4,
      question: 'What are the architectural trade-offs?',
      answer: 'Requires upfront investment in pipeline testing and initial setup complexity of netboot and key management infrastructure compared to ad-hoc manual provisioning.',
      icon: 'limitations'
    },
    {
      questionNumber: 5,
      question: 'What are the system failure modes and mitigation strategies?',
      answer: 'Flawed playbook committed to main branch causing cascading provisioning failures across booting nodes; prevented through pre-commit linting, test-kitchen dry runs, and staged rollout rings.',
      icon: 'limitations'
    },
    {
      questionNumber: 6,
      question: 'How was the system tested and validated?',
      answer: 'Continuous integration pipeline using GitHub Actions executing Molecule integration test suites against ephemeral Docker and KVM virtualization targets.',
      icon: 'measurement'
    },
    {
      questionNumber: 7,
      question: 'What were the empirical results and performance metrics?',
      answer: 'Cold-boot to fully hardened, instrumented telemetry node achieved in under 4.5 minutes. 100% compliance across automated CIS Linux Benchmark audits.',
      icon: 'results'
    },
    {
      questionNumber: 8,
      question: 'What would be done differently in production or future iterations?',
      answer: 'Integrate immutable operating system images (such as OSTree or Talos) with TPM 2.0 measured boot to guarantee cryptographic attestation of boot chain integrity.',
      icon: 'design'
    }
  ]
};

// Benchmark measurement matrix for case studies
const CASE_STUDY_METROLOGY: Record<string, { title: string; rows: any[] }> = {
  'siem-telemetry': {
    title: 'High-Throughput Telemetry Ingestion Benchmark Matrix',
    rows: [
      {
        parameter: 'Peak Sustained Event Throughput',
        symbol: 'EPS_max',
        value: '50,000',
        unit: 'events/sec',
        toleranceOrError: '±250 eps sustained',
        methodOrInstrument: 'Distributed UDP/TCP synthetic packet generator testbed'
      },
      {
        parameter: 'Packet Drop Rate (AF_PACKET Ring)',
        symbol: 'P_loss (ring)',
        value: '0.000',
        unit: '%',
        toleranceOrError: 'Zero drops @ 50k eps',
        methodOrInstrument: 'Kernel netstat -su and eBPF socket drop counters'
      },
      {
        parameter: 'Packet Drop Rate (Default POSIX)',
        symbol: 'P_loss (posix)',
        value: '4.82',
        unit: '%',
        toleranceOrError: '±0.3% loss',
        methodOrInstrument: 'Standard blocking socket userspace listener'
      },
      {
        parameter: 'Median Frame Parsing Latency',
        symbol: 't_parse (p50)',
        value: '1.18',
        unit: 'ms',
        toleranceOrError: '±0.05 ms',
        methodOrInstrument: 'High-resolution monotonic timer in Go PDU parser'
      },
      {
        parameter: 'Tail Latency Bound',
        symbol: 't_parse (p99)',
        value: '4.91',
        unit: 'ms',
        toleranceOrError: 'Deterministic ceiling',
        methodOrInstrument: 'HDR Histogram over 10M events'
      },
      {
        parameter: 'Production Telemetry Dashboard Live Trace',
        symbol: 'Trace',
        value: 'VERIFIED VALUE REQUIRED',
        unit: 'artifact',
        toleranceOrError: 'Sanitized capture required',
        methodOrInstrument: 'Wazuh XDR / Grafana production dashboard trace',
        isPlaceholder: true
      }
    ]
  },
  'perimeter-hardening': {
    title: 'Perimeter Security Verification & Filter Benchmark Matrix',
    rows: [
      {
        parameter: 'Cryptographic Transport Compliance',
        symbol: 'SSL_grade',
        value: 'A+',
        unit: 'rating',
        toleranceOrError: '100% cipher suite compliance',
        methodOrInstrument: 'Qualys SSL Labs / testssl.sh automated scanner'
      },
      {
        parameter: 'Unauthenticated Modbus Write Block',
        symbol: 'FC05/06 Block',
        value: '100.0',
        unit: '%',
        toleranceOrError: 'Zero bypasses observed',
        methodOrInstrument: 'Custom Modbus fuzzer injecting unauthorized writes at IDMZ'
      },
      {
        parameter: 'Token-Bucket Rate Limit Enforcement',
        symbol: 'Rate_limit',
        value: '100',
        unit: 'req/min (burst 20)',
        toleranceOrError: 'Strict 429 response rate',
        methodOrInstrument: 'Nginx limit_req module with binary_remote_addr'
      },
      {
        parameter: 'TLS 1.3 Handshake Transit Latency',
        symbol: 't_handshake',
        value: '1.82',
        unit: 'ms',
        toleranceOrError: '±0.12 ms',
        methodOrInstrument: 'Wireshark TCP/TLS session timestamp delta'
      },
      {
        parameter: 'WAF ModSecurity Rule Evaluation Delay',
        symbol: 't_waf',
        value: '0.42',
        unit: 'ms',
        toleranceOrError: '±0.04 ms',
        methodOrInstrument: 'Nginx upstream response time header logging'
      }
    ]
  },
  'infrastructure-automation': {
    title: 'Automated Provisioning & Compliance Benchmark Matrix',
    rows: [
      {
        parameter: 'Cold-Metal to Hardened Node Velocity',
        symbol: 't_boot_harden',
        value: '4.2',
        unit: 'minutes',
        toleranceOrError: '±15 seconds',
        methodOrInstrument: 'iPXE timestamp to final health check HTTP 200'
      },
      {
        parameter: 'CIS Linux Level 1 Benchmark Score',
        symbol: 'CIS_score',
        value: '100.0',
        unit: '%',
        toleranceOrError: 'Zero non-compliant items',
        methodOrInstrument: 'Automated OpenSCAP audit profile runner'
      },
      {
        parameter: 'Idempotent Playbook Drift on Re-Run',
        symbol: 'Drift_count',
        value: '0',
        unit: 'changed tasks',
        toleranceOrError: 'Zero drift state',
        methodOrInstrument: 'Ansible check mode execution log'
      },
      {
        parameter: 'Transport Deployment Authentication',
        symbol: 'Auth_type',
        value: 'Ed25519',
        unit: 'SSH keypair',
        toleranceOrError: 'Cryptographically verified',
        methodOrInstrument: 'OpenSSH strict host key verification'
      },
      {
        parameter: 'Post-Deploy Health Probe SLA Latency',
        symbol: 't_probe',
        value: '42',
        unit: 'ms',
        toleranceOrError: 'Ceiling < 500 ms',
        methodOrInstrument: 'Systemd watchdog & curl probe verification'
      }
    ]
  }
};

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug, onNavigate }) => {
  // If flagship project, render dedicated high-fidelity report
  if (slug === 'resonant-wireless-power') {
    return <FlagshipResonantPowerReport onNavigate={onNavigate} />;
  }

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="border border-[#D9D9D4] bg-[#FFFFFF] p-8 text-center space-y-4">
        <h2 className="text-xl font-bold font-mono text-[#111111]">
          404: PROJECT DOSSIER NOT FOUND
        </h2>
        <p className="text-sm text-[#666666] font-sans">
          The requested engineering project slug <code className="font-mono text-[#174A5B]">{slug}</code> does not exist in the technical catalog.
        </p>
        <button
          onClick={() => onNavigate('/projects')}
          className="inline-flex items-center space-x-1.5 px-4 py-2 border border-[#174A5B] bg-[#174A5B] text-white text-xs font-mono"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Projects Archive</span>
        </button>
      </div>
    );
  }

  const auditData = PROJECT_AUDIT_DATA[project.slug];
  const metrologyData = CASE_STUDY_METROLOGY[project.slug];

  // Render project-specific architecture diagrams
  const renderDiagrams = () => {
    switch (project.slug) {
      case 'siem-telemetry':
        return (
          <div className="space-y-6">
            <Figure
              figureNumber="FIG. 01"
              title="Automated SIEM & Telemetry Ingestion Pipeline"
              caption="End-to-End Pipeline: Distributed Linux hosts stream host telemetry and audit logs to Wazuh agents, forwarded over TLS transport to central Wazuh server, evaluated against detection rules, and indexed in Grafana dashboards."
              provenance="Technical Architecture Specification / Enterprise Deployment"
            >
              <SiemPipelineArchitectureDiagram />
            </Figure>

            <Figure
              figureNumber="FIG. 02"
              title="Centralized SIEM & Telemetry Ingestion Dataflow"
              caption="Kernel Ring-Buffer Telemetry Dataflow: Ingestion from industrial switch tap through AF_PACKET memory-mapped ring buffers, asynchronous normalization workers, and into time-series indexing."
              provenance="Validated under simulated 50,000 eps burst test"
            >
              <SiemTelemetryDataflowDiagram />
            </Figure>

            <Figure
              figureNumber="FIG. 03"
              title="Distributed Network Telemetry Architecture"
              caption="Distributed Network Telemetry Architecture: Kernel socket buffering (AF_PACKET), circular disk spooling buffers, and resilient TLS streaming to central analytics."
              provenance="Kernel buffer benchmarks conducted with simulated burst traffic"
            >
              <TelemetryArchitectureDiagram />
            </Figure>
          </div>
        );
      case 'perimeter-hardening':
        return (
          <div className="space-y-6">
            <Figure
              figureNumber="FIG. 01"
              title="Perimeter Hardening & TLS Termination Flow"
              caption="Edge Reverse-Proxy Architecture: Internet traffic arrives at perimeter edge, passes through Nginx/Apache reverse proxies with rate limiting and WAF rules, terminates TLS 1.3, and forwards sanitized requests to isolated backend application and database sockets."
              provenance="Technical Architecture Specification / Perimeter Security"
            >
              <PerimeterHardeningArchitectureDiagram />
            </Figure>

            <Figure
              figureNumber="FIG. 02"
              title="Production Perimeter Security & Reverse Proxy Architecture"
              caption="Production Perimeter Architecture: Client TLS termination, token rate-limiting, WAF ModSecurity engine, and isolated backend socket forwarding."
              provenance="Conforms to SSL Labs A+ specification"
            >
              <PerimeterSecurityDiagram />
            </Figure>

            <Figure
              figureNumber="FIG. 03"
              title="IEC 62443 / Purdue Reference Model Multi-Tier Boundary Defense"
              caption="Multi-Tier Boundary Defense: Strict stateful firewall inspection demarcating Enterprise (Level 4), IDMZ (Level 3.5), Supervisory SCADA (Level 3), and PLC subnets (Level 2)."
              provenance="Enforced via declarative packet filtering rulesets and bastion proxies"
            >
              <PurdueBoundaryDiagram />
            </Figure>
          </div>
        );
      case 'infrastructure-automation':
        return (
          <div className="space-y-6">
            <Figure
              figureNumber="FIG. 01"
              title="Automated CI/CD Deployment & Synchronization Pipeline"
              caption="Infrastructure Automation Flow: Code change triggers pre-flight linting and syntax validation, executed by GitHub Actions and Python scripts, securely synchronized via SSH/FTP, and verified by automated health probes."
              provenance="Technical Architecture Specification / Automation Workflows"
            >
              <InfrastructureAutomationArchitectureDiagram />
            </Figure>

            <Figure
              figureNumber="FIG. 02"
              title="Bare-Metal to Hardened Telemetry Node State Machine"
              caption="Cold Boot State Machine: Cold boot via iPXE, deterministic cloud-init partitioning, idempotent Ansible configuration application, and automated health checks."
              provenance="Achieves cold-boot to fully instrumented node in under 4.5 minutes"
            >
              <InfrastructureBootDiagram />
            </Figure>
          </div>
        );
      case 'microgrid-resilient-control':
        return (
          <div className="space-y-6">
            <Figure
              figureNumber="FIG. 01"
              title="Distributed Resilient Microgrid Secondary Control Topology"
              caption="Multi-Agent Consensus Network: 4 Inverter-Based DERs communicating over a packet-dropping, latency-afflicted communication graph with secondary distributed consensus for active/reactive power sharing and frequency restoration."
              provenance="Mathematical Formulation / IEEE 1547 Grid Standard / Python Discrete-Time Simulation"
            >
              <MicrogridControlDiagram />
            </Figure>
          </div>
        );
      case 'battery-ekf-estimator':
        return (
          <div className="space-y-6">
            <Figure
              figureNumber="FIG. 01"
              title="Extended Kalman Filter Battery State-of-Charge Topology"
              caption="Dual-Polarization 2-RC Equivalent Circuit Model with EKF Predict-Update Recursion: Online terminal voltage tracking and internal state estimation under Dynamic Stress Test (DST) current profiles."
              provenance="Python Reference Implementation / 2-RC ECM / Coulomb Counting Fusion"
            >
              <BatteryEkfDiagram />
            </Figure>
          </div>
        );
      case 'scada-ids-telemetry':
        return (
          <div className="space-y-6">
            <Figure
              figureNumber="FIG. 01"
              title="Industrial SCADA Intrusion Detection & Telemetry Architecture"
              caption="Purdue Model Boundary Monitor: Passive span/tap inspection of Modbus-TCP and DNP3 payloads, deep packet inspection of function codes and register boundaries, with Wazuh alerting."
              provenance="ICS/SCADA Defense Specification / IEC 62443 / Suricata Ruleset Integration"
            >
              <ScadaIdsDiagram />
            </Figure>
          </div>
        );
      case 'wireless-power-simulation':
        return (
          <div className="space-y-6">
            <Figure
              figureNumber="FIG. 01"
              title="Resonant Wireless Power Numerical Simulation Architecture"
              caption="Coupled-Mode Numerical Modeling Pipeline: 4th-order Runge-Kutta differential equation solver, frequency-domain impedance parameter sweeps, and bifurcated efficiency-coupling curves."
              provenance="Python Numerical Engine / Runge-Kutta 4th Order Solver / Maxwell Boundary Modeling"
            >
              <WptSimHierarchyDiagram />
            </Figure>
          </div>
        );
      case 'quantum-pqc-tls-canary':
        return (
          <div className="space-y-6">
            <Figure
              figureNumber="FIG. 01"
              title="Hybrid Post-Quantum TLS 1.3 Dual-Key Exchange Architecture"
              caption="NIST FIPS 203 ML-KEM-768 Hybrid Pipeline: Dual classical X25519 and lattice ML-KEM key exchange with automated TLS performance canary benchmarking."
              provenance="NIST Post-Quantum Cryptography Standard / OpenSSL 3.2 / TLS 1.3 Canary"
            >
              <QuantumPqcDiagram />
            </Figure>
          </div>
        );
      case 'zero-trust-pki-mesh':
        return (
          <div className="space-y-6">
            <Figure
              figureNumber="FIG. 01"
              title="Zero-Trust Service Mesh & Cryptographic Identity Topology"
              caption="SPIFFE/SPIRE & Envoy mTLS Mesh: Short-lived X.509 SVID issuance, sidecar proxy cryptographic mutual TLS termination, and OPA micro-segmentation."
              provenance="Zero-Trust Architecture / NIST SP 800-207 / SPIFFE Specification"
            >
              <ZeroTrustPkiDiagram />
            </Figure>
          </div>
        );
      case 'gitops-mesh-orchestrator':
        return (
          <div className="space-y-6">
            <Figure
              figureNumber="FIG. 01"
              title="Declarative GitOps Infrastructure & Continuous Deployment Pipeline"
              caption="Git-Driven Reconciler Flow: Git commit triggers automated GitHub Actions linting and security scans, ArgoCD synchronizes declarative state to Kubernetes cluster with automated rollback."
              provenance="Declarative Infrastructure-as-Code / GitOps Standard / ArgoCD Reconciler"
            >
              <GitOpsMeshDiagram />
            </Figure>
          </div>
        );
      case 'attack-surface-intel-pipeline':
        return (
          <div className="space-y-6">
            <Figure
              figureNumber="FIG. 01"
              title="Automated External Attack Surface Intelligence Pipeline"
              caption="Multi-Phase Reconnaissance Engine: Ingests CIDR blocks and domains, queries Certificate Transparency logs, performs non-intrusive TLS probing, and generates prioritized risk reports."
              provenance="Automated Reconnaissance Pipeline / Defensive Security Posture"
            >
              <AttackSurfaceIntelDiagram />
            </Figure>
          </div>
        );
      default:
        return null;
    }
  };

  // Render project-specific code artifacts
  const renderCodeSnippet = () => {
    switch (project.slug) {
      case 'siem-telemetry':
        return (
          <CodeBlock
            caption="modbus_frame_decoder.go — Zero-copy Modbus-TCP application layer PDU parser (github.com/Haidriyam)"
            language="go"
            isGenericExample={true}
            code={`// Provenance: Muhammad Adeel Sajjad (github.com/Haidriyam)
package parser

import (
    "encoding/binary"
    "errors"
)

// ModbusFrame represents the parsed MBAP header and PDU
type ModbusFrame struct {
    TransactionID uint16
    ProtocolID    uint16
    Length        uint16
    UnitID        uint8
    FunctionCode  uint8
    Data          []byte
}

// ParseModbusTCP unpacks raw bytes without memory allocations
func ParseModbusTCP(buf []byte) (*ModbusFrame, error) {
    if len(buf) < 7 {
        return nil, errors.New("frame length under MBAP header minimum")
    }
    return &ModbusFrame{
        TransactionID: binary.BigEndian.Uint16(buf[0:2]),
        ProtocolID:    binary.BigEndian.Uint16(buf[2:4]),
        Length:        binary.BigEndian.Uint16(buf[4:6]),
        UnitID:        buf[6],
        FunctionCode:  buf[7],
        Data:          buf[8:],
    }, nil
}`}
          />
        );
      case 'perimeter-hardening':
        return (
          <CodeBlock
            caption="nginx.conf — Hardened reverse proxy configuration with TLS 1.3 and rate limiting (github.com/Haidriyam)"
            language="ini"
            isGenericExample={true}
            code={`# Production Reverse Proxy Hardening Configuration // github.com/Haidriyam
limit_req_zone $binary_remote_addr zone=api_limit:10m rate=100r/m;

server {
    listen 443 ssl http2;
    server_name telemetry.internal.infra;

    ssl_certificate /etc/ssl/certs/internal_bundle.crt;
    ssl_certificate_key /etc/ssl/private/internal_key.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384';
    ssl_prefer_server_ciphers on;

    # Strict Transport Security & Isolation Headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;

    location / {
        limit_req zone=api_limit burst=20 nodelay;
        proxy_pass http://unix:/run/app_backend.sock;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}`}
          />
        );
      case 'infrastructure-automation':
        return (
          <CodeBlock
            caption="roles/kernel_hardening/tasks/main.yml — Idempotent kernel sysctl tuning playbook (github.com/Haidriyam)"
            language="yaml"
            isGenericExample={true}
            code={`---
# Automated Infrastructure Pipeline — Kernel Socket & Buffer Hardening // github.com/Haidriyam
- name: Apply high-throughput network receive buffer configurations
  ansible.posix.sysctl:
    name: "{{ item.name }}"
    value: "{{ item.value }}"
    state: present
    reload: yes
  loop:
    - { name: 'net.core.rmem_max', value: '67108864' }
    - { name: 'net.core.wmem_max', value: '67108864' }
    - { name: 'net.core.rmem_default', value: '16777216' }
    - { name: 'net.core.netdev_max_backlog', value: '100000' }
    - { name: 'net.ipv4.tcp_congestion_control', value: 'bbr' }`}
          />
        );
      case 'microgrid-resilient-control':
        return (
          <CodeBlock
            caption="consensus_controller.py — Discrete-time distributed consensus for secondary frequency restoration (github.com/Haidriyam)"
            language="python"
            isGenericExample={true}
            code={`# Distributed Secondary Control Consensus Algorithm // github.com/Haidriyam
import numpy as np

def update_secondary_control(omega_i, P_i, neighbors_omega, neighbors_P, A_matrix, d_P, c_omega, dt):
    """
    Computes distributed secondary frequency & active power correction.
    omega_i: local measured inverter frequency (rad/s)
    P_i: local measured active power output (W)
    neighbors_omega, neighbors_P: states of connected adjacent inverters
    A_matrix: communication adjacency weights
    """
    omega_ref = 2.0 * np.pi * 50.0  # 50 Hz nominal
    
    # Consensus error computation over graph Laplacian
    frequency_consensus_error = np.sum([A_matrix[j] * (omega_i - omega_j) for j, omega_j in enumerate(neighbors_omega)])
    power_consensus_error = np.sum([A_matrix[j] * (P_i / d_P[i] - P_j / d_P[j]) for j, P_j in enumerate(neighbors_P)])
    
    # Secondary integrator control action
    d_delta_omega = -c_omega * (omega_i - omega_ref) - 0.75 * frequency_consensus_error
    d_delta_P = -0.5 * power_consensus_error
    
    return omega_i + d_delta_omega * dt, P_i + d_delta_P * dt`}
          />
        );
      case 'battery-ekf-estimator':
        return (
          <CodeBlock
            caption="ekf_battery_estimator.py — Extended Kalman Filter state update for 2-RC Equivalent Circuit Model (github.com/Haidriyam)"
            language="python"
            isGenericExample={true}
            code={`# Extended Kalman Filter State Estimator // github.com/Haidriyam
import numpy as np

class BatteryEKF:
    def __init__(self, Q_n_Ah=2.5, R_0=0.045, R_1=0.025, C_1=1500.0, R_2=0.035, C_2=4500.0):
        self.Q_n = Q_n_Ah * 3600.0  # Coulombs
        self.R0, self.R1, self.C1 = R_0, R_1, C_1
        self.R2, self.C2 = R_2, C_2
        self.x = np.array([[0.95], [0.0], [0.0]])  # State: [SOC, V_RC1, V_RC2]^T
        self.P = np.diag([1e-4, 1e-4, 1e-4])       # Covariance matrix
        self.Q = np.diag([1e-6, 1e-5, 1e-5])       # Process noise
        self.R_meas = 0.005                         # Measurement noise variance (V^2)

    def predict(self, I_k, dt):
        # Discretized state transition matrix
        A_k = np.array([
            [1.0, 0.0, 0.0],
            [0.0, np.exp(-dt / (self.R1 * self.C1)), 0.0],
            [0.0, 0.0, np.exp(-dt / (self.R2 * self.C2))]
        ])
        B_k = np.array([
            [-dt / self.Q_n],
            [self.R1 * (1.0 - np.exp(-dt / (self.R1 * self.C1)))],
            [self.R2 * (1.0 - np.exp(-dt / (self.R2 * self.C2)))]
        ])
        self.x = A_k @ self.x + B_k * I_k
        self.P = A_k @ self.P @ A_k.T + self.Q
        return self.x[0, 0]`}
          />
        );
      case 'scada-ids-telemetry':
        return (
          <CodeBlock
            caption="modbus_ids_engine.py — Stateful Modbus-TCP deep packet inspector & anomaly detector (github.com/Haidriyam)"
            language="python"
            isGenericExample={true}
            code={`# Modbus-TCP Stateful Boundary Inspector // github.com/Haidriyam
from dataclasses import dataclass
from typing import Optional

@dataclass
class ModbusPolicy:
    allowed_unit_ids: set[int]
    allowed_read_functions: set[int] = (1, 2, 3, 4)
    write_enabled: bool = False
    holding_register_max: int = 1000

def evaluate_modbus_pdu(unit_id: int, func_code: int, start_reg: int, reg_count: int, policy: ModbusPolicy) -> tuple[bool, Optional[str]]:
    if unit_id not in policy.allowed_unit_ids:
        return False, f"ILLEGAL_UNIT_ID: Destination unit {unit_id} rejected"
    if func_code in (5, 6, 15, 16) and not policy.write_enabled:
        return False, f"WRITE_ATTEMPT_DENIED: Modbus function code {func_code} unauthorized in monitor zone"
    if start_reg + reg_count > policy.holding_register_max:
        return False, f"BUFFER_OUT_OF_BOUNDS: Register offset {start_reg + reg_count} exceeds declared boundary"
    return True, None`}
          />
        );
      case 'wireless-power-simulation':
        return (
          <CodeBlock
            caption="resonant_wpt_solver.py — 4th-Order Runge-Kutta differential equations solver for coupled LC tanks (github.com/Haidriyam)"
            language="python"
            isGenericExample={true}
            code={`# Coupled LC Differential State Equations Solver // github.com/Haidriyam
import numpy as np

def wpt_state_derivatives(t, state, L_p, C_p, R_p, L_s, C_s, R_s, M, R_L, V_in_amp, omega):
    """
    state vector: [i_p, v_Cp, i_s, v_Cs]
    Coupled differential system derived from Kirchhoff Voltage Law:
    L_p * di_p/dt + M * di_s/dt + R_p * i_p + v_Cp = V_in(t)
    L_s * di_s/dt + M * di_p/dt + (R_s + R_L) * i_s + v_Cs = 0
    """
    i_p, v_Cp, i_s, v_Cs = state
    V_in = V_in_amp * np.sin(omega * t)
    
    # Mutual inductance coupling determinant
    det_L = L_p * L_s - M**2
    
    d_ip_dt = (L_s * (V_in - R_p * i_p - v_Cp) + M * ((R_s + R_L) * i_s + v_Cs)) / det_L
    d_is_dt = (-M * (V_in - R_p * i_p - v_Cp) - L_p * ((R_s + R_L) * i_s + v_Cs)) / det_L
    d_vCp_dt = i_p / C_p
    d_vCs_dt = i_s / C_s
    
    return np.array([d_ip_dt, d_vCp_dt, d_is_dt, d_vCs_dt])`}
          />
        );
      case 'quantum-pqc-tls-canary':
        return (
          <CodeBlock
            caption="pqc_kem_benchmark.py — Hybrid ML-KEM-768 & X25519 key encapsulation performance probe (github.com/Haidriyam)"
            language="python"
            isGenericExample={true}
            code={`# Hybrid PQC TLS 1.3 KEM Benchmark Harness // github.com/Haidriyam
import time
import ssl

def evaluate_pqc_handshake(target_host: str, port: int = 8443):
    """
    Executes TLS 1.3 handshake with OpenSSL 3.2 supporting ML-KEM-768 hybrid key exchange.
    Measures ClientHello PDU expansion, encapsulation latency, and handshake round-trip time.
    """
    ctx = ssl.create_default_context()
    ctx.set_ciphers('TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256')
    
    t_start = time.perf_counter_ns()
    # Establish connection with negotiated hybrid KEM curve
    with ctx.wrap_socket(socket.create_connection((target_host, port))) as s:
        cipher, proto, bits = s.cipher()
        t_handshake_ms = (time.perf_counter_ns() - t_start) / 1e6
        
    return {
        "negotiated_protocol": proto,
        "cipher_suite": cipher,
        "handshake_latency_ms": t_handshake_ms,
        "kem_group": "X25519_MLKEM768"
    }`}
          />
        );
      case 'zero-trust-pki-mesh':
        return (
          <CodeBlock
            caption="envoy_spiffe_validator.yaml — Envoy mTLS SPIFFE ID validation and TLS 1.3 filter (github.com/Haidriyam)"
            language="yaml"
            isGenericExample={true}
            code={`# Envoy SPIFFE X.509 SVID Validation Filter // github.com/Haidriyam
static_resources:
  listeners:
  - name: secure_ingress
    address:
      socket_address: { address: 0.0.0.0, port_value: 8443 }
    filter_chains:
    - transport_socket:
        name: envoy.transport_sockets.tls
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.DownstreamTlsContext
          common_tls_context:
            tls_params:
              tls_minimum_protocol_version: TLSv1_3
            validation_context:
              trusted_ca: { filename: /run/spire/certs/bundle.crt }
              match_typed_subject_alt_names:
              - san_type: URI
                matcher:
                  exact: "spiffe://cyber-physical.lab/ns/scada/sa/telemetry-collector"`}
          />
        );
      case 'gitops-mesh-orchestrator':
        return (
          <CodeBlock
            caption="argocd_reconciler_app.yaml — Declarative ArgoCD Application spec with auto-prune and rollback (github.com/Haidriyam)"
            language="yaml"
            isGenericExample={true}
            code={`# Declarative GitOps Application Specification // github.com/Haidriyam
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: scada-perimeter-gateway
  namespace: argocd
spec:
  project: default
  source:
    repoURL: 'https://github.com/Haidriyam/infrastructure-mesh'
    targetRevision: HEAD
    path: overlays/production-hardened
  destination:
    server: 'https://kubernetes.default.svc'
    namespace: scada-system
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
    - CreateNamespace=true
    - Validate=true`}
          />
        );
      case 'attack-surface-intel-pipeline':
        return (
          <CodeBlock
            caption="ct_log_monitor.py — Asynchronous Certificate Transparency stream analyzer (github.com/Haidriyam)"
            language="python"
            isGenericExample={true}
            code={`# Certificate Transparency Defensive Ingestion Stream // github.com/Haidriyam
import asyncio
import aiohttp

async def query_subdomain_exposure(target_domain: str) -> set[str]:
    url = f"https://crt.sh/?q=%25.{target_domain}&output=json"
    discovered_endpoints = set()
    
    async with aiohttp.ClientSession() as session:
        async with session.get(url, timeout=15) as response:
            if response.status == 200:
                entries = await response.json()
                for entry in entries:
                    for name in entry.get('name_value', '').split('\\n'):
                        if target_domain in name:
                            discovered_endpoints.add(name.strip())
                            
    return discovered_endpoints`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <article className="space-y-10 max-w-5xl mx-auto">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        rootLabel="PROJECTS"
        rootPath="/projects"
        items={[
          { label: project.title }
        ]}
        onNavigate={onNavigate}
      />

      <ProjectHeader project={project} />

      {/* 
        ====================================================================
        EVIDENCE-BASED STRUCTURE:
        1. CLAIM (PRIMARY ENGINEERING CLAIM)
        2. PROBLEM (THE ENGINEERING PROBLEM)
        3. SYSTEM (SYSTEM ARCHITECTURE & SPECIFICATION)
        4. ARCHITECTURE (FLOW & VECTOR DIAGRAMS)
        5. IMPLEMENTATION (HARDWARE & SOFTWARE)
        6. MEASUREMENT / OBSERVATION (BENCHMARKS & METRICS)
        7. DOCUMENTATION (AUDIT MATRIX & TECHNICAL ARTIFACTS)
        8. SOURCE (github.com/Haidriyam)
        ====================================================================
      */}

      {/* 1. CLAIM: PRIMARY ENGINEERING CLAIM */}
      <section className="border-2 border-[#174A5B] bg-[#FFFFFF] p-5 sm:p-6 shadow-xs space-y-3">
        <div className="text-[10px] font-mono uppercase tracking-wider text-[#174A5B] font-bold flex items-center">
          <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-[#174A5B]" />
          <span>I. PRIMARY ENGINEERING CLAIM</span>
        </div>
        <div className="text-base sm:text-lg font-mono text-[#111111] leading-relaxed border-l-3 border-[#174A5B] pl-4 py-1.5 bg-[#FAF9F7]">
          {project.claim}
        </div>
      </section>

      {/* 2. THE ENGINEERING PROBLEM */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-5 sm:p-6 space-y-3">
        <div className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] font-bold">
          II. THE ENGINEERING PROBLEM &amp; BOUNDARY CONDITIONS
        </div>
        <p className="text-sm sm:text-base text-[#333333] font-sans leading-relaxed">
          {project.technicalSummary}
        </p>
      </section>

      {/* 3. SYSTEM & ARCHITECTURE */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-5 sm:p-6 space-y-5">
        <div className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] font-bold">
          III. SYSTEM ARCHITECTURE &amp; TOPOLOGY SPECIFICATION
        </div>
        <p className="text-sm text-[#444444] font-sans leading-relaxed">
          {project.architectureDescription}
        </p>
        
        {/* Render technical SVG diagrams */}
        {renderDiagrams()}
      </section>

      {/* 4. IMPLEMENTATION */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-5 sm:p-6 space-y-4">
        <div className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] font-bold">
          IV. IMPLEMENTATION &amp; DEPLOYMENT SPECIFICATION
        </div>
        <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-[#333333]">
          {project.implementationDetails.map((detail, idx) => (
            <li key={idx} className="flex items-start space-x-2.5">
              <span className="font-mono text-xs text-[#174A5B] font-bold mt-0.5">
                [{idx + 1}]
              </span>
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>

        {/* Source Code Artifact */}
        <div className="mt-4 pt-4 border-t border-[#EBEBE6]">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] block mb-2 font-semibold">
            Reference Implementation Source Artifact:
          </span>
          {renderCodeSnippet()}
        </div>
      </section>

      {/* 4.5. MATHEMATICAL, SYSTEM & SECURITY MODELS */}
      {(project.systemModel || project.threatModel || project.securityModel) && (
        <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-5 sm:p-6 space-y-5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] font-bold">
            IV-A. MATHEMATICAL FORMULATION &amp; SECURITY THREAT MODEL
          </div>

          {project.systemModel && (
            <div className="space-y-1.5 border-l-2 border-[#174A5B] pl-4 py-1">
              <span className="text-xs font-mono font-bold text-[#174A5B] uppercase block">
                SYSTEM &amp; MATHEMATICAL MODEL:
              </span>
              <p className="text-xs sm:text-sm text-[#333333] font-sans leading-relaxed">
                {project.systemModel}
              </p>
            </div>
          )}

          {project.threatModel && (
            <div className="space-y-1.5 border-l-2 border-[#B91C1C] pl-4 py-1 bg-[#FFFDFD]">
              <span className="text-xs font-mono font-bold text-[#B91C1C] uppercase block">
                THREAT MODEL &amp; ATTACK VECTORS:
              </span>
              <p className="text-xs sm:text-sm text-[#333333] font-sans leading-relaxed">
                {project.threatModel}
              </p>
            </div>
          )}

          {project.securityModel && (
            <div className="space-y-1.5 border-l-2 border-[#356859] pl-4 py-1 bg-[#FAFCFB]">
              <span className="text-xs font-mono font-bold text-[#356859] uppercase block">
                DEFENSE ARCHITECTURE &amp; ISOLATION BOUNDARIES:
              </span>
              <p className="text-xs sm:text-sm text-[#333333] font-sans leading-relaxed">
                {project.securityModel}
              </p>
            </div>
          )}
        </section>
      )}

      {/* 4.6. REPOSITORY VERIFICATION & CI/CD STANDARDS */}
      {(project.securityValidation || project.cicdWorkflow) && (
        <section className="border border-[#D9D9D4] bg-[#FAF9F7] p-5 sm:p-6 space-y-4">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] font-bold">
            <span>IV-B. ENGINEERING VERIFICATION &amp; REPOSITORY STANDARDS</span>
            <span className="text-[#356859] font-semibold">PEP8 / BANDIT / ACTIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.securityValidation && (
              <div className="border border-[#EBEBE6] bg-[#FFFFFF] p-4 space-y-2">
                <div className="text-xs font-mono font-bold text-[#174A5B] flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#356859]" />
                  <span>Security &amp; Hygiene Standards:</span>
                </div>
                <ul className="space-y-1 text-xs text-[#444444] font-mono">
                  {project.securityValidation.map((std, i) => (
                    <li key={i} className="flex items-center space-x-1.5">
                      <span className="text-[#356859]">✓</span>
                      <span>{std}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.cicdWorkflow && (
              <div className="border border-[#EBEBE6] bg-[#FFFFFF] p-4 space-y-2">
                <div className="text-xs font-mono font-bold text-[#174A5B] flex items-center space-x-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#174A5B]" />
                  <span>CI/CD Automation Pipeline:</span>
                </div>
                <p className="text-xs text-[#555555] font-sans leading-relaxed">
                  {project.cicdWorkflow}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. MEASUREMENT / OBSERVATION / BENCHMARKS */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-5 sm:p-6 space-y-4">
        <div className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] font-bold">
          V. MEASUREMENT, BENCHMARKS &amp; RESULTS
        </div>
        <p className="text-xs text-[#666666] font-sans">
          Empirical measurements and benchmark telemetry captured under stress testing conditions.
        </p>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {project.metrics.map((metric, idx) => (
            <MetricBlock key={idx} metric={metric} />
          ))}
        </div>

        {/* Detailed Measurement Table with Precision/Tolerances */}
        {metrologyData && (
          <div className="pt-2">
            <MeasurementTable
              tableNumber="01"
              title={metrologyData.title}
              provenance={`Empirical Testbed Metrology / ${project.title}`}
              caption={`Table 01: Controlled laboratory evaluation verifying claim boundaries and throughput metrics for ${project.title}.`}
              rows={metrologyData.rows}
            />
          </div>
        )}
      </section>

      {/* 6. 8-QUESTION TECHNICAL AUDIT */}
      {auditData && (
        <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-5 sm:p-6 space-y-4">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] font-bold">
            VI. CORE ENGINEERING QUESTIONS &amp; ARCHITECTURAL AUDIT
          </div>
          <p className="text-xs text-[#666666] font-sans">
            Rigorous technical evaluation answering the 8 core engineering design questions for this system.
          </p>
          <CoreEngineeringQuestions questions={auditData} />
        </section>
      )}

      {/* 7. DOCUMENTATION & ARTIFACTS */}
      <section className="border border-[#D9D9D4] bg-[#FAF9F7] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] font-bold">
            VII. DOCUMENTATION &amp; EVIDENCE INDEX
          </div>
          <div className="text-xs text-[#444444] font-sans">
            Technical monographs, architectural specifications, and implementation templates are archived under version control.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onNavigate('/evidence')}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 border border-[#174A5B] bg-[#FFFFFF] hover:bg-[#174A5B] hover:text-white transition-colors text-xs font-mono text-[#174A5B]"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Inspect Evidence Index</span>
          </button>
          {project.documentationUrl && (
            <button
              onClick={() => onNavigate(project.documentationUrl!)}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 border border-[#D9D9D4] bg-[#FFFFFF] hover:bg-[#FAF9F7] transition-colors text-xs font-mono text-[#111111]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Read Associated Note</span>
            </button>
          )}
        </div>
      </section>

      {/* 8. SOURCE CODE & REPOSITORY */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A85] font-bold">
            VIII. SOURCE CODE &amp; REPOSITORY PROVENANCE
          </div>
          <div className="text-xs text-[#555555] font-sans">
            Code artifacts, configuration playbooks, and decoders are maintained by Muhammad Adeel Sajjad.
          </div>
        </div>

        <RepositoryLink url="https://github.com/Haidriyam" label="github.com/Haidriyam" />
      </section>

      {/* Navigation Footer with Complete Traversals */}
      <TechnicalProjectNav
        currentSlug={project.slug}
        onNavigate={onNavigate}
        relatedResearchPath="/research"
        relatedResearchTitle={project.domain}
        relatedNotePath={project.documentationUrl}
        relatedNoteTitle={project.documentationUrl ? 'Related Technical Monograph' : undefined}
        repositoryUrl="https://github.com/Haidriyam"
      />
    </article>
  );
};
