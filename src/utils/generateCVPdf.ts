import { jsPDF } from 'jspdf';
import {
  PERSONAL_INFO,
  EDUCATION,
  EXPERIENCE,
  PROJECTS,
  CREDENTIALS
} from '../data/dossierData';

export function generateAcademicCVPdf(): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const marginX = 14;
  const contentWidth = pageWidth - marginX * 2; // 182mm
  const maxContentY = 282; // Safe vertical boundary above running footer (pageHeight - 15)

  let y = 14;

  const drawSectionHeader = (title: string) => {
    y += 2.6;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.2);
    doc.setTextColor(23, 74, 91); // #174A5B
    doc.text(title.toUpperCase(), marginX, y);
    y += 1.2;
    doc.setDrawColor(217, 217, 212);
    doc.setLineWidth(0.3);
    doc.line(marginX, y, marginX + contentWidth, y);
    y += 4.2;
  };

  // =========================================================================
  // PAGE 1: HEADER, PROFILE, RESEARCH INTERESTS, EDUCATION, EXPERIENCE
  // =========================================================================

  // --- 1. HEADER ---
  // Candidate Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16.5);
  doc.setTextColor(17, 17, 17);
  doc.text(PERSONAL_INFO.name.toUpperCase(), marginX, y);
  y += 5.5;

  // Professional Title (Line 1 of header - prominent, never truncated)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(23, 74, 91);
  doc.text('SYSTEMS, INFRASTRUCTURE & CYBER-PHYSICAL SECURITY ENGINEER', marginX, y);
  y += 4.2;

  // Verified Degree (Line 2 of header - independent line, full breathing room)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.0);
  doc.setTextColor(40, 40, 40);
  doc.text('B.Sc. ELECTRICAL ENGINEERING — POWER', marginX, y);
  y += 4.5;

  // Contact Metadata & Security Credentials
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(85, 85, 85);
  const contactText = `Email: ${PERSONAL_INFO.email}   •   Location: ${PERSONAL_INFO.location}   •   GitHub: github.com/Haidriyam   •   GPG: ${PERSONAL_INFO.gpgFingerprint.slice(0, 24)}...`;
  doc.text(contactText, marginX, y);
  y += 3.8;

  // Header separator rule
  doc.setDrawColor(17, 17, 17);
  doc.setLineWidth(0.5);
  doc.line(marginX, y, marginX + contentWidth, y);
  y += 4.5;

  // --- 2. PROFILE / SUMMARY ---
  drawSectionHeader('1. Profile / Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(45, 45, 45);
  const profileText =
    'Systems & Infrastructure Engineer with a foundational degree in Electrical Engineering (Power Systems) and over 8 years of enterprise infrastructure experience. Rigorous training in electromagnetic field modeling, resonant power electronics, and high-voltage transmission, combined with deep operational expertise in deterministic kernel telemetry pipelines, bare-metal infrastructure automation, and industrial control systems (SCADA) network boundary defense.';
  const profileLines = doc.splitTextToSize(profileText, contentWidth);
  doc.text(profileLines, marginX, y);
  y += profileLines.length * 4.0 + 2.4;

  // --- 3. RESEARCH INTERESTS ---
  drawSectionHeader('2. Research Interests');
  const researchItems = [
    {
      label: 'Resilient Cyber-Physical Systems (CPS)',
      desc: 'Analyzing failure modes & attack surfaces where unauthenticated industrial protocols (Modbus-TCP, DNP3) couple with physical power converter dynamics and protection relays.'
    },
    {
      label: 'Smart Grid Security & Anomaly Detection',
      desc: 'Deterministic packet inspection, state-estimation defense against false data injection (FDI), and IEC 62443 / Purdue reference architecture enforcement.'
    },
    {
      label: 'Resonant Inductive Coupling',
      desc: 'High-Q magnetic resonance link optimization, mutual inductance parameter extraction, and zero-voltage-switching (ZVS) power electronics.'
    },
    {
      label: 'Distributed Testbed Infrastructure',
      desc: 'Hardware-in-the-loop (HIL) environments, kernel-level zero-drop ring buffering, and reproducible bare-metal infrastructure orchestration.'
    }
  ];

  researchItems.forEach((item) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.3);
    doc.setTextColor(23, 74, 91);
    const prefix = `•  ${item.label}: `;
    doc.text(prefix, marginX, y);
    const prefixW = doc.getTextWidth(prefix);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(45, 45, 45);
    const descLines = doc.splitTextToSize(item.desc, contentWidth - prefixW);
    doc.text(descLines[0], marginX + prefixW, y);
    if (descLines.length > 1) {
      const restLines = descLines.slice(1);
      doc.text(restLines, marginX + 4, y + 3.8);
      y += restLines.length * 3.8;
    }
    y += 4.4;
  });

  // --- 4. EDUCATION & CAPSTONE THESIS ---
  drawSectionHeader('3. Education & Academic Foundation');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.setTextColor(17, 17, 17);
  doc.text('Bachelor of Science in Electrical Engineering — Power Systems', marginX, y);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.4);
  doc.setTextColor(23, 74, 91);
  doc.text(EDUCATION.period, marginX + contentWidth, y, { align: 'right' });
  y += 4.2;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.0);
  doc.setTextColor(80, 80, 80);
  const eduMeta = `${EDUCATION.institution} — ${EDUCATION.location}   •   Specialization: ${EDUCATION.specialization}   •   Status: ${EDUCATION.status}`;
  const eduMetaLines = doc.splitTextToSize(eduMeta, contentWidth);
  doc.text(eduMetaLines, marginX, y);
  y += eduMetaLines.length * 3.4 + 1.0;

  // Verified Capstone Thesis Box
  if (EDUCATION.thesisOrCapstone) {
    const capstoneSummary =
      "Modeled Maxwell's equations and coupled-mode theory for near-field electromagnetic energy transfer over variable air gaps. Designed, wound, and tuned helical magnetic induction coils. Developed primary and secondary resonant LC tanks to cancel reactive power and maximize power factor. Fabricated switching driver hardware and evaluated transmission efficiency curves, Q factors, and thermal behavior using DSO oscilloscopes and RF instruments. Authored thesis documentation followed by an examination-board defense.";
    const capstoneLines = doc.splitTextToSize(capstoneSummary, contentWidth - 8);
    const capBoxHeight = 5.2 + capstoneLines.length * 3.5 + 2.0;

    doc.setDrawColor(23, 74, 91);
    doc.setLineWidth(0.35);
    doc.rect(marginX, y, contentWidth, capBoxHeight);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.setTextColor(23, 74, 91);
    doc.text(
      `Capstone Thesis: "${EDUCATION.thesisOrCapstone.title}" (${EDUCATION.thesisOrCapstone.period}, Grade A)`,
      marginX + 4,
      y + 4.4
    );

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(55, 55, 55);
    doc.text(capstoneLines, marginX + 4, y + 8.6);
    y += capBoxHeight + 4.0;
  }

  // --- 5. PROFESSIONAL ENGINEERING EXPERIENCE ---
  drawSectionHeader('4. Professional Engineering Experience');

  EXPERIENCE.forEach((exp, idx) => {
    // Role & Period
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.6);
    doc.setTextColor(17, 17, 17);
    doc.text(exp.role, marginX, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.setTextColor(23, 74, 91);
    doc.text(exp.period, marginX + contentWidth, y, { align: 'right' });
    y += 4.0;

    // Organization & Location
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.0);
    doc.setTextColor(80, 80, 80);
    const orgText = `${exp.organization}${exp.division ? ' · ' + exp.division : ''} — ${exp.location}`;
    const orgLines = doc.splitTextToSize(orgText, contentWidth);
    doc.text(orgLines, marginX, y);
    y += orgLines.length * 3.4 + 0.2;

    // Scope
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(45, 45, 45);
    const scopeLines = doc.splitTextToSize(exp.scope, contentWidth);
    doc.text(scopeLines, marginX, y);
    y += scopeLines.length * 3.5 + 1.4;

    // Selected Contributions (3 rich bullet points per role)
    if (exp.selectedContributions && exp.selectedContributions.length > 0) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.6);
      doc.setTextColor(35, 35, 35);
      exp.selectedContributions.slice(0, 3).forEach((item) => {
        const itemLines = doc.splitTextToSize(`•  ${item}`, contentWidth - 4);
        doc.text(itemLines, marginX + 2, y);
        y += itemLines.length * 3.4 + 0.8;
      });
    }

    // Systems Worked With
    if (exp.systemsWorkedWith && exp.systemsWorkedWith.length > 0) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.4);
      doc.setTextColor(85, 85, 85);
      const sysLine = `Systems: ${exp.systemsWorkedWith.join(', ')}`;
      const sysLines = doc.splitTextToSize(sysLine, contentWidth);
      doc.text(sysLines, marginX, y);
      y += sysLines.length * 3.1 + (idx < EXPERIENCE.length - 1 ? 4.0 : 1.5);
    }
  });

  // =========================================================================
  // PAGE 2: SELECTED PROJECTS, TECHNICAL NOTES, COMPETENCIES, CREDENTIALS
  // =========================================================================
  doc.addPage();
  y = 14;

  // Running header on Page 2
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.0);
  doc.setTextColor(138, 138, 133);
  doc.text(`${PERSONAL_INFO.name.toUpperCase()} — ACADEMIC CURRICULUM VITAE`, marginX, 9);
  doc.text('PAGE 2 OF 2', pageWidth - marginX, 9, { align: 'right' });
  doc.setDrawColor(217, 217, 212);
  doc.setLineWidth(0.25);
  doc.line(marginX, 11, pageWidth - marginX, 11);

  // --- 6. SELECTED PROJECTS & CYBER-PHYSICAL SYSTEMS ---
  drawSectionHeader('5. Selected Projects & Cyber-Physical Systems');

  // Audited flagship academic and cyber-physical research projects
  const selectedProjectIds = [
    'PROJECT / WPT-001',
    'PROJECT / CPS-001',
    'PROJECT / CPS-002',
    'PROJECT / CPS-003',
    'PROJECT / SEC-001',
    'PROJECT / SYS-004'
  ];
  const projectsToRender = selectedProjectIds
    .map((id) => PROJECTS.find((p) => p.id === id)!)
    .filter(Boolean);

  projectsToRender.forEach((prj, idx) => {
    // Project ID & Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.4);
    doc.setTextColor(17, 17, 17);
    doc.text(`[${prj.id}]  ${prj.title}`, marginX, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.6);
    doc.setTextColor(110, 110, 110);
    doc.text(prj.date, marginX + contentWidth, y, { align: 'right' });
    y += 3.4;

    // Domain & Technologies
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(23, 74, 91);
    doc.text('Domain: ', marginX, y);
    const domainPrefixW = doc.getTextWidth('Domain: ');
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(55, 55, 55);
    const domainText = `${prj.domain}   •   Technologies: ${prj.keyTechnologies?.slice(0, 4).join(', ') || prj.tags.slice(0, 4).join(', ')}`;
    const domainLines = doc.splitTextToSize(domainText, contentWidth - domainPrefixW);
    doc.text(domainLines, marginX + domainPrefixW, y);
    y += domainLines.length * 3.0 + 0.5;

    // Technical Description (natural wrapping across available 182mm width)
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(45, 45, 45);
    const summaryLines = doc.splitTextToSize(prj.technicalSummary, contentWidth);
    doc.text(summaryLines, marginX, y);
    y += summaryLines.length * 3.0 + 0.5;

    // Verification & Repository (Wrapped safely, clean GitHub link formatting)
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.0);
    doc.setTextColor(90, 90, 90);

    const repoName = prj.repositoryUrl
      ? prj.repositoryUrl.replace('https://github.com/Haidriyam/', 'GitHub / ').replace('https://github.com/', 'GitHub / ')
      : 'GitHub / Haidriyam';
    const ciSummary =
      prj.securityValidation && prj.securityValidation.length > 0
        ? prj.securityValidation[0]
        : 'CI / Automated Testing';
    const metaText = `Verification: ${ciSummary}   •   Repository: ${repoName}`;
    const metaLines = doc.splitTextToSize(metaText, contentWidth);
    doc.text(metaLines, marginX, y);

    // Attach active clickable link if repository exists
    if (prj.repositoryUrl) {
      const repoSubstr = `Repository: ${repoName}`;
      const repoSubW = doc.getTextWidth(repoSubstr);
      const lineLastW = doc.getTextWidth(metaLines[metaLines.length - 1]);
      const linkX = marginX + Math.max(0, lineLastW - repoSubW);
      doc.link(linkX, y - 2.2, repoSubW + 2, 3.4, { url: prj.repositoryUrl });
    }

    y += metaLines.length * 2.8 + (idx < projectsToRender.length - 1 ? 2.2 : 1.2);
  });

  // --- 7. TECHNICAL NOTES & ENGINEERING MONOGRAPHS ---
  drawSectionHeader('6. Technical Notes & Engineering Monographs');

  const techNotesData = [
    {
      id: 'TN-001',
      title: 'Resonant Inductive Coupling: Efficiency, Frequency and Air-Gap Analysis',
      category: 'Electromagnetics & Resonance',
      desc: 'Rigorous mathematical derivation of coupled magnetic resonance in Series-Series (SS) inductive links. Quantifies mutual inductance decay over variable air gaps, establishes the critical coupling threshold separating single-mode and bifurcation regimes, and analyzes conductor AC resistance dissipation.'
    },
    {
      id: 'TN-002',
      title: 'Distributed Network Telemetry and Intrusion Detection',
      category: 'Telemetry & Distributed Systems',
      desc: 'Architecture of deterministic telemetry ingestion pipelines for cyber-physical infrastructure; kernel socket buffer tuning (SO_RCVBUFFORCE), AF_PACKET MMAP ring buffers, and deterministic APDU regex tokenization under burst traffic.'
    },
    {
      id: 'TN-003',
      title: 'SCADA Network Security Considerations for Power Infrastructure',
      category: 'Industrial SCADA & CPS Security',
      desc: 'Cyber-physical vulnerability and boundary inspection analysis of unauthenticated industrial fieldbus protocols (Modbus-TCP, DNP3, IEC 60870-5-104); prevention of false data injection (FDI) and MITM coil forced writes via IEC 62443 zone segmentation.'
    }
  ];

  techNotesData.forEach((note, idx) => {
    // 1. Note ID & Title (first line)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.8);
    doc.setTextColor(23, 74, 91);
    doc.text(`[${note.id}]`, marginX, y);

    doc.setTextColor(17, 17, 17);
    const titleLines = doc.splitTextToSize(`"${note.title}"`, contentWidth - 20);
    doc.text(titleLines, marginX + 18, y);
    y += titleLines.length * 3.0 + 0.3;

    // 2. Category (second line, completely independent coordinate)
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.0);
    doc.setTextColor(100, 100, 100);
    doc.text(`Category: ${note.category}`, marginX + 18, y);
    y += 2.6;

    // 3. Short description (third block, naturally wrapping)
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.0);
    doc.setTextColor(50, 50, 50);
    const descLines = doc.splitTextToSize(note.desc, contentWidth - 18);
    doc.text(descLines, marginX + 18, y);
    y += descLines.length * 2.8 + (idx < techNotesData.length - 1 ? 2.0 : 1.0);
  });

  // --- 8. TECHNICAL COMPETENCIES ---
  drawSectionHeader('7. Technical Competencies');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.6);
  doc.setTextColor(23, 74, 91);
  doc.text('Power Systems & Hardware: ', marginX, y);
  const pwrW = doc.getTextWidth('Power Systems & Hardware: ');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.2);
  doc.setTextColor(45, 45, 45);
  const powerSkills =
    'High-Q Resonant Inductive Coupling, Series-Series Tank Compensation, zero-voltage-switching (ZVS) inverters, transmission fault studies, DSO oscilloscopes, precision LCR meters, and spectrum analyzers.';
  const powerLines = doc.splitTextToSize(powerSkills, contentWidth - pwrW);
  doc.text(powerLines, marginX + pwrW, y);
  y += powerLines.length * 2.8 + 1.0;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.6);
  doc.setTextColor(23, 74, 91);
  doc.text('Infrastructure, Security & Networking: ', marginX, y);
  const infW = doc.getTextWidth('Infrastructure, Security & Networking: ');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.2);
  doc.setTextColor(45, 45, 45);
  const infraSkills =
    'Linux kernel sockets (SO_RCVBUFFORCE), AF_PACKET MMAP ring buffers, SCADA Modbus-TCP / DNP3 deep packet inspection, IEC 62443 zone segmentation, Ansible automation, and WireGuard mesh.';
  const infraLines = doc.splitTextToSize(infraSkills, contentWidth - infW);
  doc.text(infraLines, marginX + infW, y);
  y += infraLines.length * 2.8 + 1.4;

  // --- 9. VERIFIED CURRICULA & CREDENTIALS ---
  drawSectionHeader('8. Verified Curricula & Credentials');
  const colWidth = (contentWidth - 6) / 2;
  const leftX = marginX;
  const rightX = marginX + colWidth + 6;

  for (let i = 0; i < CREDENTIALS.length; i += 2) {
    const credLeft = CREDENTIALS[i];
    const credRight = CREDENTIALS[i + 1];

    // Left item
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.2);
    doc.setTextColor(23, 74, 91);
    doc.text(`${credLeft.issuer}: `, leftX, y);
    const leftIssuerW = doc.getTextWidth(`${credLeft.issuer}: `);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(30, 30, 30);
    const leftTitleLines = doc.splitTextToSize(credLeft.title, colWidth - leftIssuerW - 22);
    doc.text(leftTitleLines, leftX + leftIssuerW, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.6);
    doc.setTextColor(53, 104, 89);
    doc.text('Verified Curriculum', leftX + colWidth, y, { align: 'right' });

    let rowHeight = Math.max(leftTitleLines.length * 2.6, 2.6);

    // Right item
    if (credRight) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.2);
      doc.setTextColor(23, 74, 91);
      doc.text(`${credRight.issuer}: `, rightX, y);
      const rightIssuerW = doc.getTextWidth(`${credRight.issuer}: `);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(30, 30, 30);
      const rightTitleLines = doc.splitTextToSize(credRight.title, colWidth - rightIssuerW - 22);
      doc.text(rightTitleLines, rightX + rightIssuerW, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.6);
      doc.setTextColor(53, 104, 89);
      doc.text('Verified Curriculum', rightX + colWidth, y, { align: 'right' });

      rowHeight = Math.max(rowHeight, rightTitleLines.length * 2.6);
    }

    y += rowHeight + 0.6;
  }

  // --- 10. REFERENCES & INSTITUTIONAL NOTICE ---
  y += 1.4;
  doc.setDrawColor(217, 217, 212);
  doc.setLineWidth(0.25);
  doc.line(marginX, y, marginX + contentWidth, y);
  y += 2.8;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.2);
  doc.setTextColor(90, 90, 90);
  doc.text('REFERENCES & INSTITUTIONAL VALIDATION: ', marginX, y);
  const refLabelW = doc.getTextWidth('REFERENCES & INSTITUTIONAL VALIDATION: ');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(100, 100, 100);
  const refNotice =
    'Academic supervisor recommendations, authenticated degree transcripts, and institutional validation records available immediately upon request during formal evaluation.';
  const refNoticeLines = doc.splitTextToSize(refNotice, contentWidth - refLabelW);
  doc.text(refNoticeLines, marginX + refLabelW, y);
  y += refNoticeLines.length * 2.6;

  // Add running footers with exact total page count on all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(138, 138, 133);
    doc.text(
      `Muhammad Adeel Sajjad — Academic Curriculum Vitae   |   Page ${i} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 7,
      { align: 'center' }
    );
  }

  // Trigger download if in browser
  if (typeof window !== 'undefined') {
    doc.save('Muhammad_Adeel_Sajjad_Academic_CV.pdf');
  }

  return doc;
}
