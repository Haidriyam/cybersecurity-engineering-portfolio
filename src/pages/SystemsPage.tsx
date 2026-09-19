import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SectionHeader } from '../components/SectionHeader';
import { SYSTEMS_DOSSIERS } from '../data/dossierData';
import {
  TelemetryArchitectureDiagram,
  InfrastructureBootDiagram,
  ReverseProxyPipelineDiagram
} from '../components/TechnicalDiagrams';
import { ResearchTrajectoryVisualizer } from '../components/ResearchTrajectoryVisualizer';
import { EngineeringVerificationSection } from '../components/EngineeringVerificationSection';
import { ArrowRight, Server, Shield, Terminal, CheckCircle2, Layers } from 'lucide-react';

interface SystemsPageProps {
  onNavigate: (path: string) => void;
}

export const SystemsPage: React.FC<SystemsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Engineering Dossier', path: '/' },
          { label: 'Systems Laboratory' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="space-y-4 border-b border-[#D9D9D4] pb-6">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#8A8A85]">
          <span className="px-2 py-0.5 bg-[#F2F2EE] text-[#174A5B] font-semibold">LAB / SYS-001</span>
          <span>PRODUCTION INFRASTRUCTURE &amp; TESTBEDS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-sans font-bold text-[#111111] tracking-tight">
          SYSTEMS LABORATORY
        </h1>
        <p className="text-base text-[#444444] max-w-3xl font-sans leading-relaxed">
          Infrastructure, telemetry, security, automation, and reliability engineering. Documenting production architectures, defensive host telemetry pipelines, reverse-proxy hardening, and automated deployment workflows.
        </p>
      </div>

      {/* Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-[#D9D9D4] bg-[#FFFFFF] p-5 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#174A5B]">
            <Server className="w-4 h-4" />
            <span className="font-semibold">01 / TELEMETRY &amp; SIEM</span>
          </div>
          <h3 className="font-sans font-bold text-base text-[#111111]">
            Host Intrusion Detection &amp; Audit Logs
          </h3>
          <p className="text-xs text-[#555555] leading-relaxed">
            Wazuh HIDS/XDR agent fleet ingesting Linux auditd kernel streams, file integrity hashes, and authentication records with zero host disruption.
          </p>
        </div>

        <div className="border border-[#D9D9D4] bg-[#FFFFFF] p-5 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#174A5B]">
            <Shield className="w-4 h-4" />
            <span className="font-semibold">02 / PERIMETER DEFENSE</span>
          </div>
          <h3 className="font-sans font-bold text-base text-[#111111]">
            Reverse-Proxy &amp; Traffic Shaper
          </h3>
          <p className="text-xs text-[#555555] leading-relaxed">
            Nginx and Apache gateway layer terminating TLS 1.2/1.3, enforcing token-bucket rate limiting, Certbot SSL automation, and WAF protection.
          </p>
        </div>

        <div className="border border-[#D9D9D4] bg-[#FFFFFF] p-5 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#174A5B]">
            <Terminal className="w-4 h-4" />
            <span className="font-semibold">03 / CI/CD AUTOMATION</span>
          </div>
          <h3 className="font-sans font-bold text-base text-[#111111]">
            Declarative Sync &amp; Deployments
          </h3>
          <p className="text-xs text-[#555555] leading-relaxed">
            GitHub Actions and Bash/Python pipelines delivering code via encrypted SSH/FTP transports with pre-flight linting and automated health probes.
          </p>
        </div>
      </div>

      {/* Dossier A: Automated SIEM & Telemetry Pipeline */}
      <div className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-[#EBEBE6] pb-4 gap-2">
          <div>
            <div className="text-[11px] font-mono text-[#8A8A85] uppercase tracking-wider">
              SYSTEM DOSSIER A // TELEMETRY &amp; MONITORING
            </div>
            <h2 className="text-2xl font-sans font-bold text-[#111111]">
              Automated SIEM &amp; Telemetry Pipeline
            </h2>
          </div>
          <span className="px-2.5 py-1 bg-[#F2F2EE] text-[#174A5B] font-mono text-xs font-semibold self-start sm:self-auto">
            ACTIVE ENTERPRISE TESTBED
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm text-[#333333] leading-relaxed">
              An automated telemetry and security monitoring pipeline using <strong>Wazuh HIDS/XDR</strong> to ingest host telemetry and audit logs across multi-tier Linux infrastructure. Provides real-time visibility into process executions, privilege escalation attempts, and unauthorized configuration modifications.
            </p>

            <div className="space-y-2">
              <div className="text-xs font-mono font-semibold text-[#174A5B] uppercase">
                Documented Architectural Principles:
              </div>
              <ul className="space-y-1.5 text-xs text-[#444444]">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#356859] mt-0.5 flex-shrink-0" />
                  <span>Deployment of lightweight Wazuh agents across Ubuntu Server, Debian, and RHEL nodes.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#356859] mt-0.5 flex-shrink-0" />
                  <span>Linux kernel auditd hook integration for immutable privilege escalation tracking.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#356859] mt-0.5 flex-shrink-0" />
                  <span>Custom regex decoders normalizing application and web server access logs.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#356859] mt-0.5 flex-shrink-0" />
                  <span>Centralized Grafana telemetry dashboards providing sub-second security query latency.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap gap-1.5">
              {['Wazuh HIDS/XDR', 'Linux auditd', 'Telemetry', 'SIEM/XDR', 'Log Auditing', 'Grafana'].map((t) => (
                <span key={t} className="px-2 py-0.5 bg-[#FAF9F7] border border-[#D9D9D4] text-[11px] font-mono text-[#555555]">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/projects/siem-telemetry')}
                className="inline-flex items-center space-x-2 text-xs font-mono text-[#174A5B] hover:underline font-semibold"
              >
                <span>View Complete Project Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 border border-[#D9D9D4] bg-[#FAF9F7] p-3">
            <div className="text-[10px] font-mono text-[#8A8A85] pb-1 border-b border-[#EBEBE6] mb-2 flex justify-between">
              <span>FIG. 01 // HOST TELEMETRY &amp; AUDIT PIPELINE</span>
              <span>WAZUH HIDS / XDR</span>
            </div>
            <TelemetryArchitectureDiagram />
          </div>
        </div>
      </div>

      {/* Dossier B: Reverse-Proxy & Perimeter Hardening */}
      <div className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-[#EBEBE6] pb-4 gap-2">
          <div>
            <div className="text-[11px] font-mono text-[#8A8A85] uppercase tracking-wider">
              SYSTEM DOSSIER B // PERIMETER SECURITY
            </div>
            <h2 className="text-2xl font-sans font-bold text-[#111111]">
              Reverse-Proxy &amp; Perimeter Hardening
            </h2>
          </div>
          <span className="px-2.5 py-1 bg-[#F2F2EE] text-[#174A5B] font-mono text-xs font-semibold self-start sm:self-auto">
            DOCUMENTED SPECIFICATION
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm text-[#333333] leading-relaxed">
              A fortified perimeter architecture leveraging <strong>Nginx</strong> and <strong>Apache</strong> reverse proxies, granular rate limiting, automated SSL/TLS certificate management, and Web Application Firewall (WAF) rule sets to protect internal application tiers from public network exposure.
            </p>

            <div className="space-y-2">
              <div className="text-xs font-mono font-semibold text-[#174A5B] uppercase">
                Documented Architectural Principles:
              </div>
              <ul className="space-y-1.5 text-xs text-[#444444]">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#356859] mt-0.5 flex-shrink-0" />
                  <span>Isolation of backend application sockets behind hardened reverse-proxy ingress points.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#356859] mt-0.5 flex-shrink-0" />
                  <span>Enforcement of burst-tolerant token-bucket rate limits on sensitive administrative endpoints.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#356859] mt-0.5 flex-shrink-0" />
                  <span>Automated cryptographic renewal using Certbot with Let's Encrypt and OCSP stapling.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#356859] mt-0.5 flex-shrink-0" />
                  <span>Enforcement of modern cipher suites (TLS 1.2/1.3, forward secrecy) and strict security headers.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap gap-1.5">
              {['Nginx', 'Apache', 'WAF Rule Sets', 'Rate Limiting', 'Certbot', 'SSL/TLS'].map((t) => (
                <span key={t} className="px-2 py-0.5 bg-[#FAF9F7] border border-[#D9D9D4] text-[11px] font-mono text-[#555555]">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/projects/perimeter-hardening')}
                className="inline-flex items-center space-x-2 text-xs font-mono text-[#174A5B] hover:underline font-semibold"
              >
                <span>View Complete Perimeter Specification</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 border border-[#D9D9D4] bg-[#FAF9F7] p-3">
            <div className="text-[10px] font-mono text-[#8A8A85] pb-1 border-b border-[#EBEBE6] mb-2 flex justify-between">
              <span>FIG. 02 // REVERSE-PROXY TERMINATION &amp; SHIELD</span>
              <span>NGINX / APACHE</span>
            </div>
            <ReverseProxyPipelineDiagram />
          </div>
        </div>
      </div>

      {/* Dossier C: Infrastructure Automation & CI/CD */}
      <div className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-[#EBEBE6] pb-4 gap-2">
          <div>
            <div className="text-[11px] font-mono text-[#8A8A85] uppercase tracking-wider">
              SYSTEM DOSSIER C // AUTOMATION &amp; WORKFLOWS
            </div>
            <h2 className="text-2xl font-sans font-bold text-[#111111]">
              Infrastructure Automation &amp; CI/CD Pipelines
            </h2>
          </div>
          <span className="px-2.5 py-1 bg-[#F2F2EE] text-[#174A5B] font-mono text-xs font-semibold self-start sm:self-auto">
            AUTOMATED WORKFLOWS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm text-[#333333] leading-relaxed">
              Automated deployment pipelines and infrastructure synchronization workflows driven by <strong>Bash</strong>, <strong>Python</strong>, and <strong>GitHub Actions</strong>. Eliminates manual configuration drift, enforces pre-deployment linting, and delivers releases across target server environments via encrypted SSH and FTP protocols.
            </p>

            <div className="space-y-2">
              <div className="text-xs font-mono font-semibold text-[#174A5B] uppercase">
                Documented Architectural Principles:
              </div>
              <ul className="space-y-1.5 text-xs text-[#444444]">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#356859] mt-0.5 flex-shrink-0" />
                  <span>Declarative GitHub Actions workflows executing code linting, syntax validation, and packaging.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#356859] mt-0.5 flex-shrink-0" />
                  <span>Automated remote artifact delivery over encrypted SSH and secure FTP pipelines.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#356859] mt-0.5 flex-shrink-0" />
                  <span>Custom Bash and Python scripts executing database backups, rotation, and health verification.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#356859] mt-0.5 flex-shrink-0" />
                  <span>Atomic deployment switching with post-deployment health check validation probes.</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap gap-1.5">
              {['Bash', 'Python', 'GitHub Actions', 'SSH', 'FTP', 'CI/CD Pipelines'].map((t) => (
                <span key={t} className="px-2 py-0.5 bg-[#FAF9F7] border border-[#D9D9D4] text-[11px] font-mono text-[#555555]">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/projects/infrastructure-automation')}
                className="inline-flex items-center space-x-2 text-xs font-mono text-[#174A5B] hover:underline font-semibold"
              >
                <span>View Complete Automation Documentation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 border border-[#D9D9D4] bg-[#FAF9F7] p-3">
            <div className="text-[10px] font-mono text-[#8A8A85] pb-1 border-b border-[#EBEBE6] mb-2 flex justify-between">
              <span>FIG. 03 // IMMUTABLE BOOTSTRAP &amp; PIPELINE FLOW</span>
              <span>GITHUB ACTIONS &amp; BASH</span>
            </div>
            <InfrastructureBootDiagram />
          </div>
        </div>
      </div>

      {/* Next-Gen Distributed Infrastructure & Zero-Trust Architecture */}
      <section className="border border-[#D9D9D4] bg-[#FFFFFF] p-6 space-y-6">
        <div className="border-b border-[#EBEBE6] pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <div className="text-[11px] font-mono text-[#174A5B] uppercase tracking-wider font-semibold">
              ADVANCED ARCHITECTURE MODULES
            </div>
            <h2 className="text-2xl font-sans font-bold text-[#111111]">
              Zero-Trust &amp; Distributed Cloud-Native Infrastructure
            </h2>
          </div>
          <span className="px-2.5 py-1 bg-[#F2F2EE] text-[#174A5B] font-mono text-xs font-semibold self-start sm:self-auto">
            MODERN ENTERPRISE &amp; POST-QUANTUM
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="border border-[#EBEBE6] bg-[#FAF9F7] p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono border-b border-[#EBEBE6] pb-2">
              <span className="font-bold text-[#174A5B]">SYS-004</span>
              <span className="text-[#8A8A85]">CRYPTOGRAPHIC IDENTITY</span>
            </div>
            <h3 className="text-base font-sans font-bold text-[#111111]">
              Zero-Trust PKI Mesh &amp; Sidecar Proxy Architecture
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed">
              Automated multi-tier X.509 Certificate Authority provisioning short-lived SPIFFE/SPIRE SVIDs. Sidecar proxies enforce mutual TLS (mTLS) with Open Policy Agent micro-segmentation.
            </p>
            <button
              onClick={() => onNavigate('/projects/zero-trust-pki-mesh')}
              className="text-xs font-mono text-[#174A5B] hover:underline inline-flex items-center space-x-1 font-semibold pt-1"
            >
              <span>Inspect Zero-Trust Mesh Dossier</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="border border-[#EBEBE6] bg-[#FAF9F7] p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono border-b border-[#EBEBE6] pb-2">
              <span className="font-bold text-[#174A5B]">SYS-005</span>
              <span className="text-[#8A8A85]">DECLARATIVE RECONCILIATION</span>
            </div>
            <h3 className="text-base font-sans font-bold text-[#111111]">
              GitOps Mesh Orchestrator &amp; Continuous Deployment
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed">
              ArgoCD-based continuous synchronization reconciles declarative Kubernetes manifests with automated health probes, zero-downtime canary rollouts, and cryptographic provenance checks.
            </p>
            <button
              onClick={() => onNavigate('/projects/gitops-mesh-orchestrator')}
              className="text-xs font-mono text-[#174A5B] hover:underline inline-flex items-center space-x-1 font-semibold pt-1"
            >
              <span>Inspect GitOps Orchestrator Dossier</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="border border-[#EBEBE6] bg-[#FAF9F7] p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono border-b border-[#EBEBE6] pb-2">
              <span className="font-bold text-[#174A5B]">SYS-006</span>
              <span className="text-[#8A8A85]">DEFENSIVE RECONNAISSANCE</span>
            </div>
            <h3 className="text-base font-sans font-bold text-[#111111]">
              Attack Surface Intel &amp; Perimeter Monitoring Pipeline
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed">
              Continuous reconnaissance engine ingesting Certificate Transparency logs, validating DNS SPF/DMARC hygiene, and conducting non-intrusive TLS probing for internet-facing systems.
            </p>
            <button
              onClick={() => onNavigate('/projects/attack-surface-intel-pipeline')}
              className="text-xs font-mono text-[#174A5B] hover:underline inline-flex items-center space-x-1 font-semibold pt-1"
            >
              <span>Inspect Attack Surface Pipeline Dossier</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="border border-[#EBEBE6] bg-[#FAF9F7] p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono border-b border-[#EBEBE6] pb-2">
              <span className="font-bold text-[#174A5B]">SYS-007</span>
              <span className="text-[#8A8A85]">POST-QUANTUM TRANSITION</span>
            </div>
            <h3 className="text-base font-sans font-bold text-[#111111]">
              Quantum PQC TLS 1.3 Canary &amp; KEM Benchmarking
            </h3>
            <p className="text-xs text-[#555555] leading-relaxed">
              NIST FIPS 203 ML-KEM-768 hybrid key encapsulation benchmarking testbed measuring handshake latency overhead, packet fragmentation, and cipher negotiation in OpenSSL 3.2.
            </p>
            <button
              onClick={() => onNavigate('/projects/quantum-pqc-tls-canary')}
              className="text-xs font-mono text-[#174A5B] hover:underline inline-flex items-center space-x-1 font-semibold pt-1"
            >
              <span>Inspect PQC Canary Dossier</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* Trajectory & Verification */}
      <ResearchTrajectoryVisualizer onNavigate={onNavigate} />
      <EngineeringVerificationSection onNavigate={onNavigate} />

      {/* Navigation Footer */}
      <div className="border-t border-[#D9D9D4] pt-6 flex justify-between items-center text-xs font-mono">
        <button
          onClick={() => onNavigate('/projects')}
          className="text-[#555555] hover:text-[#111111]"
        >
          ← All Engineering Projects
        </button>
        <button
          onClick={() => onNavigate('/notes')}
          className="text-[#174A5B] hover:underline flex items-center space-x-1 font-semibold"
        >
          <span>Research Notes &amp; Derivations</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};
