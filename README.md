# Cybersecurity & Systems Engineering Portfolio

**Adeel Haider**  
*Cybersecurity & Systems Engineer | Security Research | Systems & Network Engineering*

A technical portfolio documenting engineering and research work across cyber-physical systems security, network telemetry, zero-trust architecture, post-quantum cryptography, and DevSecOps automation.

---

## About

I am a systems and cybersecurity engineer with a background across high-availability Linux environments, network telemetry, edge ingress hardening, and automated DevSecOps validation pipelines.

My research-oriented work focuses on protocol-level deep packet inspection, industrial SCADA communications security, cyber-physical systems (CPS) testbeds, intrusion detection, and zero-trust verification models.

This repository serves as a centralized index of my curriculum vitae, technical repositories, research prototypes, and supporting engineering artifacts.

---

## Curriculum Vitae

📄 **[View / Download Curriculum Vitae (PDF)](CV/Adeel_Haider_CV.pdf)**

The CV provides an overview of:
- Professional systems and cloud infrastructure experience
- Electrical engineering and systems computing foundations
- Academic research interests in cyber-physical security
- Verified credentials and technical accreditations
- Hands-on engineering competencies and tooling

---

## Research Interests

- **Cyber-Physical Systems (CPS) Security:** Resilience against False Data Injection (FDI) and telemetry spoofing in distributed control networks.
- **Industrial Communication Protocols:** Deep-packet APDU dissection and zero-trust command filtering for Modbus-TCP and IEC telemetry standards.
- **Network Intrusion Detection & Telemetry:** Line-rate protocol inspection, asynchronous network reconnaissance, and event correlation.
- **Applied & Post-Quantum Cryptography:** Migration pathways to NIST FIPS 203 (ML-KEM-768), hybrid key exchanges, and wire-overhead profiling.
- **Zero-Trust & Infrastructure Security:** Mutual TLS (mTLS) mesh identity, dynamic ingress policy enforcement, and continuous SAST automation.

---

## Selected Technical Projects

### 1. [SCADA IDS Telemetry Engine](https://github.com/Haidriyam/scada-ids-telemetry-engine)
*Industrial Protocol Deep Packet Inspection & CPS Anomaly Engine*
- Software-defined testbed for parsing and inspecting industrial Modbus-TCP application-layer frames.
- Enforces strict zero-trust function-code whitelisting to detect and block unauthorized coil writes and slave control tampering.
- Employs continuous static security auditing (Bandit SAST), boundary fuzzing, and non-root container packaging.
- 🔗 **[Explore Repository →](https://github.com/Haidriyam/scada-ids-telemetry-engine)**

### 2. [Quantum-PQC TLS Canary](https://github.com/Haidriyam/quantum-pqc-tls-canary)
*Hybrid Post-Quantum Cryptography (NIST ML-KEM-768 + X25519) Ingress Canary*
- Implements hybrid classical/post-quantum key encapsulation to mitigate Harvest-Now-Decrypt-Later (HNDL) threats on edge telemetry.
- Evaluates protocol overhead, MTU boundary expansion, and active downgrade-stripping detection.
- Fully automated continuous verification pipeline validating shared-secret convergence and cryptographic agility.
- 🔗 **[Explore Repository →](https://github.com/Haidriyam/quantum-pqc-tls-canary)**

### 3. [Microgrid Resilient Control](https://github.com/Haidriyam/microgrid-resilient-control)
*Decentralized Secondary Frequency Consensus with FDI Mitigation*
- Models nonlinear primary droop dynamics ($P\text{--}f$) and distributed secondary consensus for islanded AC microgrids.
- Integrates cyber-attack defense mechanisms that isolate and discard out-of-band telemetry injection attempts.
- 🔗 **[Explore Repository →](https://github.com/Haidriyam/microgrid-resilient-control)**

### 4. [Battery EKF State Estimator](https://github.com/Haidriyam/battery-ekf-state-estimator)
*Lithium-Ion Dynamic SoC Estimation & CAN-Bus Ingestion Fuzzing*
- Discrete Extended Kalman Filter implementing Thevenin equivalent circuit tracking for internal cell overpotential.
- Pairs state estimation with an industrial CAN-bus frame parser and boundary fuzzer to protect against malformed payloads.
- 🔗 **[Explore Repository →](https://github.com/Haidriyam/battery-ekf-state-estimator)**

### 5. [Zero-Trust PKI Mesh](https://github.com/Haidriyam/zero-trust-pki-mesh)
*Automated X.509 Certificate Authority & Mutual TLS Edge Gateway*
- Internal automated PKI engine managing full cryptographic lifecycles for root, intermediate, and ephemeral leaf certificates.
- Nginx edge ingress configuration requiring bidirectional client certificate verification (`mTLS`).
- 🔗 **[Explore Repository →](https://github.com/Haidriyam/zero-trust-pki-mesh)**

### 6. [GitOps Mesh Orchestrator](https://github.com/Haidriyam/gitops-mesh-orchestrator)
*Autonomous Service Mesh Ingress, Token-Bucket Shaper & Policy Engine*
- Active TTL-based node lease tracking, round-robin load distribution, and token-bucket rate limiting.
- Ingress zero-trust enforcement inspecting CIDR network ranges and blocking malicious payload injections.
- 🔗 **[Explore Repository →](https://github.com/Haidriyam/gitops-mesh-orchestrator)**

### 7. [Attack Surface Intel Pipeline](https://github.com/Haidriyam/attack-surface-intel-pipeline)
*External Attack Surface Management (EASM) & SIEM Telemetry Engine*
- Ingests multi-source reconnaissance artifacts, scores exposure vectors, and formats structured SIEM-ready events.
- 🔗 **[Explore Repository →](https://github.com/Haidriyam/attack-surface-intel-pipeline)**

### 8. [Wireless Power Transmission Simulation](https://github.com/Haidriyam/wireless-power-transmission-sim)
*Resonant Inductive Coupling Modeling & Link Efficiency Optimization*
- Numerical solver for coupled-mode magnetic resonance circuits and quality factor optimization under CI validation.
- 🔗 **[Explore Repository →](https://github.com/Haidriyam/wireless-power-transmission-sim)**

---

## Technical Competencies

| Domain | Core Technologies & Methodologies |
| :--- | :--- |
| **Cybersecurity & IDS** | Deep Packet Inspection, Zero-Trust Architecture, Threat Modeling, SAST (`bandit`), Vulnerability Mitigation |
| **Industrial & CPS Security** | Modbus-TCP, CAN-Bus Telemetry, Protocol Parsing, Sensor Bounds Checking, Anomaly Detection |
| **Applied Cryptography** | Post-Quantum Cryptography (ML-KEM-768), X.509 PKI, Mutual TLS (mTLS), X25519 ECDH, Cryptographic Agility |
| **Systems & Networking** | Linux Hardening, High-Availability Ingress, Socket Programming, TCP/IP, Reverse Proxies (Nginx) |
| **DevSecOps & Reliability** | CI/CD Pipelines (GitHub Actions), Docker, Container Security, Token-Bucket Traffic Shaping, Pytest |
| **Scientific & Physical Computing**| Nonlinear State-Space Modeling, Extended Kalman Filtering (EKF), Coupled-Mode Resonance, NumPy, SciPy |

---

## Professional & Research Context

My professional background centers on high-availability Linux infrastructure, network operations, cloud ingress routing, and automated deployment pipelines. My research projects build directly upon these foundations to explore protocol-level security, industrial telemetry validation, and cyber-physical robustness.

### Distinction Between Research and Operational Deployments
Where projects model industrial control, SCADA, or energy infrastructure, this portfolio explicitly distinguishes between production systems engineering and software-defined research prototypes:
- Industrial protocol and power grid projects presented here are developed within **software-defined simulation environments, captured traffic datasets, local testbeds, and mathematical emulation models**.
- They do not represent claims of deploying experimental controls onto live commercial power grids, physical substations, or regulated operational technology facilities without formal authorization.

---

## Repository Structure

```text
.
├── CV/
│   └── Adeel_Haider_CV.pdf
│
├── Research/
│   ├── research-interests.md
│   └── technical-notes/
│
├── Certifications/
│   └── README.md
│
└── README.md
