/* Curriculum map: AU podiatry undergraduate imaging anchors.
   Sources: Podiatry Board of Australia Professional Capabilities (2022, in force 1 Jan 2022),
   AHPRA accreditation standards (2021), MBS podiatry imaging items, ACR Appropriateness Criteria
   (acute ankle/foot trauma), IWGDF/IDSA 2023 (foot infection & Charcot), RANZCR/RHCE imaging-referral modules. */

export const CURRICULUM = [
  {
    id: 'cap1', domain: 'Domain 1 — Podiatrists practise safely and effectively',
    capabilities: ['1.1 Clinical diagnosis & reasoning', '1.4 Use of diagnostic imaging & pathology results'],
    items: [
      { label: 'Apply the Ottawa ankle/foot rules to decide who needs imaging', ref: 'ACR Appropriateness Criteria — Acute Trauma to the Ankle/Foot; RANZCR/RHCE modules', links: { quiz: 'ottawa', cases: ['Trauma'] } },
      { label: 'Request the correct weight-bearing series for foot/ankle complaints', ref: 'MBS items 57521/57523/57527 (podiatrist-requested radiography)', links: { quiz: 'mbs', cases: ['Normal anatomy', 'Trauma'] } },
      { label: 'Recognise when findings need urgent referral (fracture, gas, dislocation)', ref: 'AHPRA capability 1.5 — urgent care & escalation', links: { cases: ['Trauma'] } }
    ]
  },
  {
    id: 'cap2', domain: 'Domain 2 — Assessment & systematic reading',
    capabilities: ['2.x Collect information, interpret diagnostic test results'],
    items: [
      { label: 'Read every film with a fixed search pattern (soft tissue → bone → joint → alignment → compare)', ref: 'Standard radiology teaching; prevents Lisfranc/syndesmosis misses', links: { quiz: 'system', cases: ['Normal anatomy'] } },
      { label: 'Measure and quote HVA, IMA, Meary, calcaneal pitch, Böhler, Gissane correctly', ref: 'Weight-bearing technique required — measurements change with loading', links: { quiz: 'views', cases: ['Deformity', 'Trauma'] } },
      { label: 'Assess positioning quality before interpreting', ref: 'Mortise view, DP centring, full inclusion of 5th MT base', links: { quiz: 'views' } }
    ]
  },
  {
    id: 'cap3', domain: 'Domain 3 — Common podiatric presentations on X-ray',
    capabilities: ['Musculoskeletal, high-risk foot, paediatric'],
    items: [
      { label: 'Lisfranc (TMT) injury: fleck sign, 1st–2nd IMA > 2 mm, WB views', ref: 'ACR Acute Trauma to the Foot — suspected Lisfranc', links: { quiz: 'lisfranc', cases: ['Trauma'] } },
      { label: 'Hallux valgus & first-MTP OA: HVA/IMA, osteophytes, joint space', ref: 'Standard forefoot series', links: { quiz: 'hallux', cases: ['Deformity'] } },
      { label: 'Calcaneal fractures: Böhler < 20°, Gissane, axial (Harris) view', ref: 'Trauma series', links: { quiz: 'calcaneus', cases: ['Trauma'] } },
      { label: 'Accessory ossicles vs fracture (os trigonum, os peroneum, bipartite sesamoid); normal variants', ref: 'Compare views; clinical correlation', links: { quiz: 'ossicles', cases: ['Normal anatomy'] } },
      { label: 'Paediatric: Sever apophysitis, Kohler vs Mueller-Weiss, Salter injuries', ref: 'OAR valid ≥5–6 y; RANZCR paediatric module', links: { quiz: 'system', cases: ['Paediatric'] } },
      { label: 'Syndesmosis injury: tibiofibular clear space, medial clear space, stress views', ref: 'High-ankle sprain — normal X-ray does not exclude', links: { quiz: 'ankle', cases: ['Trauma'] } }
    ]
  },
  {
    id: 'cap4', domain: 'Domain 4 — High-risk (diabetic) foot',
    capabilities: ['4.x Diabetes-related foot disease'],
    items: [
      { label: 'Plain X-ray first for suspected osteomyelitis: cortical loss, periosteal reaction, serial change', ref: 'IWGDF/IDSA 2023 — PTB + X-ray + ESR/CRP; MRI if doubt remains', links: { quiz: 'dfi', cases: ['Diabetic foot'] } },
      { label: 'Charcot neuro-osteoarthropathy: Eichenholtz stages, midfoot collapse; stage 0 normal X-ray → MRI', ref: 'IWGDF 2023 Charcot guideline', links: { quiz: 'charcot', cases: ['Diabetic foot'] } },
      { label: 'Distinguish osteomyelitis from Charcot on plain film (distribution, periosteal vs fragmentation)', ref: 'IWGDF/IDSA 2023', links: { quiz: 'dfi' } }
    ]
  },
  {
    id: 'cap45', domain: 'Domain 4/5 — Trauma patterns & high-risk foot escalation',
    capabilities: ['Weber/Maisonneuve recognition', 'Jones vs avulsion', 'Osteomyelitis vs Charcot', 'Urgent referral'],
    items: [
      { label: 'Classify ankle fractures Weber A/B/C; know stability checks (medial clear space, syndesmosis, talar shift)', ref: 'Weber classification; ACR acute ankle trauma variants', links: { quiz: 'ankle', cases: ['Trauma'] } },
      { label: 'Recognise Maisonneuve (proximal fibula + syndesmosis) and Jones vs 5th-MT avulsion', ref: 'Trauma patterns; referral thresholds', links: { quiz: 'trauma' } },
      { label: 'Work up suspected diabetic foot osteomyelitis: PTB + X-ray + ESR/CRP, MRI if doubt', ref: 'IWGDF/IDSA 2023 infection guideline', links: { quiz: 'dfi' } },
      { label: 'Charcot stage 0 has a normal X-ray — never reassure on plain film alone', ref: 'IWGDF 2023 Charcot guideline; Eichenholtz staging', links: { quiz: 'charcot' } }
    ]
  },
  {
    id: 'cap5', domain: 'Domain 5 — Reporting & communication',
    capabilities: ['Document findings, structured report, refer appropriately'],
    items: [
      { label: 'Write a structured report: technique → findings → impression → recommendation', ref: 'Radiology reporting standards; OSCE/clinical documentation', links: { quiz: 'mbs' } },
      { label: 'Know the limits of plain film — when to escalate to MRI/CT/US or refer', ref: 'ACR variants (negative films + persistent pain → MRI); IWGDF MRI indications', links: { quiz: 'system' } }
    ]
  }
];
