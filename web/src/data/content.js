export const MODULES=[
{id:"m1",title:"1 · Standard views & weight-bearing",time:"10 min",tag:"Foundation",
 summary:"The views a podiatrist requests (MBS 57521/57527) and why weight-bearing films change the answer.",
 html:`<h2>Standard series</h2>
 <table class="ref"><tr><th>Region</th><th>Views</th><th>What each view answers</th></tr>
 <tr><td><b>Foot</b></td><td>Dorsoplantar (DP, ~15° cephalad), medial oblique, lateral</td><td>DP: metatarsals, phalanges, forefoot alignment (HVA, IMA). Oblique: midfoot, tarsometatarsal (Lisfranc) joints, cuboid. Lateral: arches (Meary, calcaneal pitch), calcaneus, talar dome, osteophytes.</td></tr>
 <tr><td><b>Ankle</b></td><td>AP, mortise (AP oblique 15–20° internal rotation), lateral</td><td>Mortise: ankle mortise and medial clear space without overlap. Lateral: tibiotalar joint, posterior talus, calcaneus.</td></tr>
 <tr><td><b>Specialist</b></td><td>Calcaneal axial (Harris), sesamoid axial, WB AP/lateral, stress views</td><td>Harris: calcaneal body, Böhler/Gissane. Sesamoid axial: both hallux sesamoids. Stress/WB: instability (Lisfranc, syndesmosis).</td></tr></table>
 <div class="callout"><b>Weight-bearing (WB) vs non-weight-bearing:</b> podiatry wants <b>WB</b> films for deformity, arthritis and instability — HVA, IMA, Meary, calcaneal pitch all change with loading. Always check whether the film was weight-bearing before quoting a measurement.</div>
 <h3>Positioning quality checks</h3>
 <ul class="tight"><li>DP foot centred at base of 3rd metatarsal; base of 5th metatarsal must be included (Jones/avulsion zone).</li>
 <li>Oblique: 30–40° medial rotation opens the tarsometatarsal joints.</li>
 <li>Mortise: 15–20° internal rotation — lateral malleolus must not overlap the talus.</li>
 <li>Lateral: superimposed malleoli; include whole calcaneus and 5th MT base.</li></ul>`,
 checklist:["I can name the 3 standard foot views and 3 ankle views","I know why WB films matter for measurements","I can spot a poorly positioned mortise view","I know the podiatrist-rebatable MBS items (57521/57523/57527)"]},
{id:"m2",title:"2 · A systematic reading checklist",time:"8 min",tag:"Foundation",
 summary:"A fixed search pattern so subtle findings (Lisfranc, syndesmosis, stress fractures) are not missed.",
 html:`<h2>Read every film in this order</h2>
 <ol class="tight"><li><b>Soft tissues</b> — swelling, gas (surgical emergency), foreign bodies.</li>
 <li><b>Bones</b> — follow every cortex; trabecular pattern; each named bone in turn.</li>
 <li><b>Joints</b> — joint space, alignment, subluxation, erosions.</li>
 <li><b>Alignment &amp; measurements</b> — HVA, IMA, Meary, calcaneal pitch, Böhler, Gissane, medial clear space.</li>
 <li><b>Comparison</b> — other side / prior films; the whole film, not just the painful area.</li>
 <li><b>Report</b> — indication/technique → findings → impression → recommendations.</li></ol>
 <div class="callout warn"><b>Classic misses:</b> Lisfranc (1st–2nd MT base widening on WB films), syndesmotic injury (medial clear space &gt; 4 mm), navicular stress fracture (“N spot”), talar lateral process fracture, ossicles mistaken for fractures. A normal X-ray does not exclude ligament injury or early osteomyelitis.</div>
 <h3>Structured reporting</h3>
 <p>Model your report: <b>technique</b> (views, WB/NWB) → <b>findings</b> (systematic, descriptive, no diagnosis words) → <b>impression</b> (numbered, most important first) → <b>recommendations</b>. Never put a diagnosis in the impression that is not in the findings.</p>`,
 checklist:["I use the same fixed order every time","I check soft tissues first","I measure alignment, not just look","I compare with the other side / prior films","I write findings before impression"]},
{id:"m3",title:"3 · Key angles & measurements",time:"12 min",tag:"Intermediate",
 summary:"The measurements podiatrists quote: HVA, IMA, Meary, calcaneal pitch, Böhler, Gissane, Kite, medial clear space.",
 html:`<h2>Measurements you must know</h2>
 <table class="ref"><tr><th>Measurement</th><th>View</th><th>Normal</th><th>Used for</th></tr>
 <tr><td>Hallux valgus angle (HVA)</td><td>WB AP/DP</td><td>&lt; 15°</td><td>Bunion severity (Coughlin/Mann): mild &lt; 20°, moderate 20–40°, severe &gt; 40° (IMA &lt; 11 / 11–16 / &gt; 16°)</td></tr>
 <tr><td>Intermetatarsal angle (IMA 1–2)</td><td>WB AP/DP</td><td>&lt; 9°</td><td>Hallux valgus, metatarsus primus varus</td></tr>
 <tr><td>Meary's angle (talo–1st MT)</td><td>WB lateral</td><td>≈ 0°</td><td>Pes planus (&gt; 4° convex down) vs cavus</td></tr>
 <tr><td>Calcaneal pitch</td><td>WB lateral</td><td>18–25°</td><td>Arch height; reduced in flatfoot</td></tr>
 <tr><td>Böhler angle</td><td>Lateral calcaneus</td><td>25–40°</td><td>Calcaneal compression fracture flattens it (&lt; 20°)</td></tr>
 <tr><td>Gissane (critical) angle</td><td>Lateral calcaneus</td><td>120–145°</td><td>Increased with posterior facet depression</td></tr>
 <tr><td>Medial clear space</td><td>Mortise</td><td>≤ 6 mm, = superior clear space</td><td>Deltoid/syndesmotic injury — instability</td></tr></table>
 <div class="callout"><b>Technique matters:</b> alignment angles are only valid on <b>weight-bearing</b> films. Rotation changes the measurement — always use the standardised view.</div>`,
 checklist:["I can name normal ranges for HVA, IMA, Meary, calcaneal pitch, Böhler, Gissane, medial clear space","I know which view each measurement needs","I know these require WB films","I know the instability threshold (medial clear space &gt; 4 mm on mortise)"]},
{id:"m4",title:"4 · When to image: Ottawa rules & requesting",time:"10 min",tag:"Applied",
 summary:"Clinical decision rules that reduce unnecessary radiography, and how podiatrists request imaging in Australia.",
 html:`<h2>Ottawa ankle rules (sensitivity ~100%)</h2>
 <ul class="tight"><li><b>Ankle X-ray</b> only if malleolar-zone pain <b>AND</b> any of: bony tenderness distal 6 cm posterior edge/tip of lateral malleolus; same for medial malleolus; inability to bear weight 4 steps immediately and in clinic.</li>
 <li><b>Foot X-ray</b> only if midfoot-zone pain <b>AND</b> any of: tenderness at 5th MT base; tenderness at navicular; inability to bear weight 4 steps.</li>
 <li>Validated in children ≥ 5 y (98.5% sensitivity in > 6 y cohorts). Exclusions: pregnancy, intoxication/altered mental status, head injury, multiple painful injuries, diminished sensation/neuropathy, > 10 days post-injury.</li></ul>
 <h2>Ottawa knee rules</h2>
 <p>Knee X-ray after acute injury if any of: age ≥ 55; isolated patellar tenderness; fibular head tenderness; cannot flex to 90°; cannot bear weight 4 steps.</p>
 <h2>Requesting imaging (Australia)</h2>
 <ul class="tight"><li>Registered podiatrists may request Medicare-rebatable plain radiographs: <b>57521</b> (foot/ankle/leg/femur), <b>57523</b> (knee), <b>57527</b> (combined regions), EOS lower-limb studies, limited MSK ultrasound (55834/55835).</li>
 <li>Write a clear clinical question on the request (“? Lisfranc injury — WB AP/oblique/lateral foot”) — it changes the views acquired.</li>
 <li>Podiatrist CT/MRI referrals are generally <b>not</b> MBS-rebatable; refer via a medical practitioner for advanced imaging.</li></ul>`,
 checklist:["I can apply the Ottawa ankle and foot rules","I know the common exclusions","I can write a useful imaging request with a clinical question","I know which MBS items podiatrists can request"]},
{id:"m5",title:"5 · Pitfalls: normal variants & accessory ossicles",time:"10 min",tag:"Intermediate",
 summary:"The classic trap: mistaking a normal ossicle for a fracture. a notable minority of accessory ossicles get misdiagnosed as avulsion fractures.",
 html:`<h2>Know these before you call a fracture</h2>
 <table class="ref"><tr><th>Variant</th><th>Where</th><th>Clue it is normal</th><th>Common confusion</th></tr>
 <tr><td>Os trigonum (~7–25%)</td><td>Posterior talus, lateral</td><td>Oval, fully corticated</td><td>Shepherd's fracture (lateral talar process)</td></tr>
 <tr><td>Accessory navicular (4–14%)</td><td>Medial navicular, DP/oblique</td><td>Round, corticated, often bilateral</td><td>Navicular tuberosity avulsion</td></tr>
 <tr><td>Os peroneum (~5–30%)</td><td>In peroneus longus tendon, lateral foot</td><td>Corticated; bipartite 30%, bilateral 60%</td><td>Cuboid fracture</td></tr>
 <tr><td>Bipartite sesamoid (~10–30%, bilateral ~60–80%)</td><td>Medial hallux sesamoid</td><td>Two parts, <b>both</b> corticated, bilateral</td><td>Sesamoid fracture</td></tr>
 <tr><td>Os calcaneus secundarius</td><td>Anterior calcaneus, oblique</td><td>Triangular, corticated</td><td>Anterior process fracture</td></tr>
 <tr><td>Os vesalianum</td><td>5th MT base</td><td>Small, corticated</td><td>Avulsion fracture</td></tr></table>
 <div class="callout warn"><b>Rule of thumb:</b> acute fracture lines are <b>lucent and jagged with non-corticated margins</b>; ossicles are <b>round/oval with a smooth cortical rim</b>. In doubt: compare the other side, check old films, CT/MRI.</div>`,
 checklist:["I can list the 6 most common foot/ankle ossicles","I know the corticated-margin rule","I know bipartite sesamoids are often bilateral","I know when to escalate to CT/MRI"]},
{id:"m6",title:"6 · The high-risk foot: infection vs Charcot",time:"12 min",tag:"Advanced",
 summary:"IWGDF/IDSA 2023: plain X-ray first-line for diabetic foot infection but insensitive early; know when to repeat and escalate to MRI.",
 html:`<h2>Diabetic foot osteomyelitis (IWGDF/IDSA 2023)</h2>
 <ul class="tight"><li>Initial bundle: <b>probe-to-bone + plain X-ray + inflammatory markers</b> (ESR, CRP, ± PCT).</li>
 <li>Plain X-rays of the foot in <b>all non-superficial diabetic foot infections</b>.</li>
 <li>X-ray signs: cortical destruction, periosteal reaction, sequestrum — but insensitive in the first <b>2–3 weeks</b>; repeat a normal film at 2–3 weeks if suspicion persists.</li>
 <li>Doubt remains after clinical + X-ray + labs → <b>MRI</b> (sensitivity ~90%). Bone (not soft-tissue) samples for culture.</li></ul>
 <h2>Charcot neuro-osteoarthropathy (CNO)</h2>
 <ul class="tight"><li>Hot, swollen, red foot in a neuropathic diabetic — <b>Charcot until proven otherwise</b> (IWGDF 2023 CNO guideline).</li>
 <li>X-ray (Eichenholtz): fragmentation, disorganisation, subluxation, rocker-bottom midfoot collapse; dense in chronic stages.</li>
 <li>Infection vs Charcot on X-ray is hard — distribution helps (Charcot: midfoot/multiple joints; osteomyelitis: under one ulcer). MRI ± WBC scan when uncertain.</li>
 <li>Offload immediately (total contact cast) while working up.</li></ul>
 <div class="callout bad"><b>Red flags on any foot X-ray:</b> soft-tissue gas (necrotising infection — emergency), rapidly progressive bone destruction, foreign body with surrounding lysis.</div>`,
 checklist:["I know the IWGDF initial bundle (PTB + X-ray + markers)","I know to repeat a normal X-ray at 2–3 weeks if suspicion persists","I know when MRI is indicated","I can describe Charcot stages and the hot-swollen-foot rule"]}
,
{id:"m7",title:"7 · Worked example: reading a Lisfranc film step by step",time:"12 min",tag:"Worked example",
 summary:"A fully scaffolded walkthrough of one film — watch the expert read it, then you read it unaided.",
 html:`<h2>Worked example — Lisfranc injury (case r1)</h2>
 <ol class="tight">
 <li><b>Step 1 — check the study:</b> WB DP both feet. Adequate? Both feet included for comparison — yes.</li>
 <li><b>Step 2 — soft tissues:</b> swelling over the midfoot; no gas, no foreign body.</li>
 <li><b>Step 3 — bones:</b> follow each metatarsal cortex from head to base. No cortical break on the metatarsals themselves.</li>
 <li><b>Step 4 — joints & alignment:</b> at the tarsometatarsal joints, the C1–M2 gap is widened (> 2 mm) and the medial border of the 2nd MT base is not aligned with the medial border of the intermediate cuneiform.</li>
 <li><b>Step 5 — measurements:</b> interval widening is the measurement here; angles less relevant acutely.</li>
 <li><b>Step 6 — impression:</b> Lisfranc ligament disruption with tarsometatarsal subluxation.</li>
 <li><b>Step 7 — recommend:</b> orthopaedic referral if unstable; CT if comminution; compare WB views.</li></ol>
 <div class="callout"><b>Now you try:</b> open case r1 and work the same 7 steps yourself before revealing the answer.</div>`,
 checklist:["I can run the 7-step read on a real film unaided","I know what makes a WB DP both-feet study adequate","I know the >2 mm C1–M2 Lisfranc threshold"]},
{id:"m8",title:"8 · Paediatric foot & growth-plate pitfalls",time:"10 min",tag:"Paediatric",
 summary:"Apophysitis vs fracture in children: Sever's, Köhler's, Freiberg's, Mueller-Weiss, tarsal coalition.",
 html:`<h2>Paediatric foot X-ray pitfalls</h2>
 <table class="ref"><tr><th>Condition</th><th>Age</th><th>X-ray</th><th>Key point</th></tr>
 <tr><td>Sever's disease (calcaneal apophysitis)</td><td>8–15</td><td>Fragmented/sclerotic calcaneal apophysis</td><td>Clinical diagnosis — NOT a fracture; apophysis normally irregular</td></tr>
 <tr><td>Köhler's disease (navicular)</td><td>3–7</td><td>Flattened, sclerotic navicular</td><td>Osteonecrosis of ossification centre; self-limiting</td></tr>
 <tr><td>Freiberg's infraction</td><td>12–18</td><td>Flattened 2nd MT head, sclerosis</td><td>AVN of 2nd MT head; often athletic girls</td></tr>
 <tr><td>Mueller-Weiss</td><td>Adult</td><td>Fragmented, sclerotic navicular, lateral compression</td><td>Spontaneous osteonecrosis of navicular — NOT Köhler's</td></tr>
 <tr><td>Tarsal coalition</td><td>child–adolescent</td><td>Calcaneonavicular "anteater nose" sign; C-sign (talocalcaneal)</td><td>CT best; rigid flatfoot with peroneal spasm</td></tr></table>
 <div class="callout warn"><b>Rule:</b> in a child, a sclerotic/fragmented apophysis or ossification centre is usually a normal variant or apophysitis — correlate clinically before calling fracture.</div>`,
 checklist:["I can name 5 paediatric foot conditions and their X-ray signs","I know Sever's is a clinical diagnosis, not a fracture","I know tarsal coalition needs CT","I know the difference between Köhler's and Mueller-Weiss"]},
{id:"m9",title:"9 · Fractures of the foot & ankle: patterns to know",time:"12 min",tag:"Trauma",
 summary:"Weber ankle fractures, Maisonneuve, Jones vs avulsion, fleck sign — the trauma patterns podiatry students must recognise and refer appropriately.",
 html:`<h2>Ankle fractures — Weber classification (level of fibular fracture)</h2>
 <table class="ref"><tr><th>Type</th><th>Level</th><th>Mechanism</th><th>Stability</th></tr>
 <tr><td><b>Weber A</b></td><td>Below the syndesmosis</td><td>Supination-adduction</td><td>Usually stable (syndesmosis + deltoid intact)</td></tr>
 <tr><td><b>Weber B</b></td><td>At the level of the syndesmosis</td><td>Supination-external rotation</td><td>Variable — check medial clear space &amp; syndesmosis</td></tr>
 <tr><td><b>Weber C</b></td><td>Above the syndesmosis</td><td>Pronation-external rotation</td><td>Unstable — syndesmosis disrupted</td></tr></table>
 <div class="callout warn"><b>Maisonneuve fracture:</b> proximal 1/3 fibula fracture + syndesmotic disruption + medial injury. If you see medial ankle tenderness with a widened syndesmosis, <b>X-ray the whole fibula</b>.</div>
 <h3>Stability checks on every ankle film</h3>
 <ul class="tight"><li><b>Medial clear space</b> ≤ 4 mm on mortise (widening = deltoid torn, unstable even without medial malleolus fracture).</li>
 <li><b>Tibiofibular clear space / overlap</b> — widening = syndesmotic injury (high-ankle sprain).</li>
 <li><b>Talar shift/tilt</b> — tibiotalar incongruity = unstable.</li></ul>
 <h2>5th metatarsal base</h2>
 <table class="ref"><tr><th>Injury</th><th>Location</th><th>Prognosis</th></tr>
 <tr><td><b>Avulsion (pseudo-Jones)</b></td><td>Tuberosity, at peroneus brevis insertion</td><td>Usually heals conservatively</td></tr>
 <tr><td><b>Jones fracture</b></td><td>Metaphyseal–diaphyseal junction (watershed zone)</td><td>High non-union risk — orthopaedic referral</td></tr></table>
 <div class="callout"><b>Fleck sign:</b> a small avulsion fragment at the Lisfranc interval (medial cuneiform – 2nd MT base) is pathognomonic for Lisfranc ligament rupture.</div>`,
 checklist:["I can classify an ankle fracture as Weber A/B/C","I know when to X-ray the proximal fibula (Maisonneuve)","I can distinguish Jones from avulsion at the 5th MT base","I know the medial clear space and syndesmosis stability checks"]},
{id:"m10",title:"10 · Imaging the diabetic / high-risk foot",time:"12 min",tag:"High-risk foot",
 summary:"IWGDF/IDSA 2023 pathway: plain film first, PTB + labs, MRI when in doubt; osteomyelitis vs Charcot; Charcot stage 0 has a NORMAL X-ray.",
 html:`<h2>Suspected diabetes-related foot osteomyelitis (IWGDF/IDSA 2023)</h2>
 <ol class="tight"><li><b>Probe-to-bone (PTB)</b> test at the ulcer.</li>
 <li><b>Plain X-ray</b> (cheap, available): focal cortical loss, periosteal reaction, sequestrum; serial films (changes take 2–3 weeks).</li>
 <li><b>Bloods:</b> ESR/CRP (ESR > 70 mm/h strongly suggestive), WCC often normal.</li>
 <li><b>MRI</b> when the diagnosis remains in doubt after the above — best soft-tissue + bone detail (sens/spec ~90/83%).</li></ol>
 <h2>Osteomyelitis vs Charcot on plain film</h2>
 <table class="ref"><tr><th>Osteomyelitis</th><th>Charcot neuro-osteoarthropathy</th></tr>
 <tr><td>Focal cortical destruction, periosteal reaction, usually contiguous with an ulcer</td><td>Diffuse midfoot disorganisation, fragmentation, subluxation (often TMT/naviculocuneiform)</td></tr>
 <tr><td>Later: sequestrum, involucrum</td><td>Rocker-bottom deformity when healed</td></tr></table>
 <div class="callout danger"><b>Charcot stage 0 (Eichenholtz):</b> hot, swollen neuropathic foot with a <b>NORMAL plain X-ray</b> — MRI shows the osseous injury. Never reassure a diabetic with a swollen foot on a normal film; offload and refer urgently.</div>
 <div class="callout"><b>Clinical pearl:</b> bone exposed in an ulcer → high probability of osteomyelitis (probe-to-bone may be redundant). The two conditions can coexist — MRI + labs when in doubt.</div>`,
 checklist:["I know the IWGDF/IDSA 2023 osteomyelitis work-up sequence (PTB, X-ray, ESR/CRP, MRI)","I can describe stage-0 Charcot and why a normal X-ray does not exclude it","I can differentiate osteomyelitis from Charcot on plain film","I know exposed bone = high osteomyelitis probability"]}
];

export const QUIZ=[
{q:"A 28-year-old twists her ankle playing netball: midfoot pain, no malleolar pain, tender at the 5th metatarsal base, can bear weight 4 steps. Ottawa foot rules say:",opts:["No X-ray needed","Foot X-ray series","Ankle X-ray series only","Knee X-ray"],a:1,tag:"ottawa",expl:"Midfoot pain + 5th-MT-base tenderness = foot X-ray. Weight-bearing ability does not override tenderness."},
{q:"Ottawa ankle rules are best described as:",opts:["High sensitivity, moderate specificity — a rule-out tool","High specificity, low sensitivity","100% sensitive and 100% specific","Only valid over 55"],a:0,tag:"ottawa",expl:"~100% sensitivity, modest specificity; cuts imaging ~30–40%. Validated in children ≥ 5–6 y."},
{q:"Which MBS item covers a podiatrist-requested X-ray of the FOOT, ANKLE, LEG or FEMUR?",opts:["57521","57523","55834","63311"],a:0,tag:"mbs",expl:"57521 = foot/ankle/leg/femur; 57523 = KNEE; 57527 = combined regions (foot+ankle, ankle+leg, knee+leg/femur); 55834/55835/55840 = ultrasound; CT/MRI (e.g. 63311) not podiatrist-rebatable."},
{q:"Transverse fracture at the metaphyseal–diaphyseal junction of the 5th MT base =",opts:["Jones fracture","Avulsion (pseudo-Jones)","Dancer's fracture","Stress fracture"],a:0,tag:"trauma",expl:"Jones = junction, intra-articular, non-union risk. Avulsion = tuberosity, extra-articular."},
{q:"5th-MT tuberosity avulsion is caused by pull of:",opts:["Peroneus brevis + plantar aponeurosis","Extensor digitorum longus","Flexor hallucis longus","Achilles"],a:0,tag:"trauma",expl:"Peroneus brevis inserts on the tuberosity; plantar aponeurosis also attaches."},
{q:"WB AP foot film: C1–M2 gap > 2 mm (or M1–M2 diastasis) suggests:",opts:["Lisfranc ligament injury","Normal variant","Hallux valgus","Pes cavus"],a:0,tag:"lisfranc",expl:"Lisfranc ligament connects medial cuneiform to 2nd MT base. Also look for the fleck sign and cuneiform–2nd MT malalignment."},
{q:"The “fleck sign” in Lisfranc injury is:",opts:["Avulsion fragment at the Lisfranc interval","Medial malleolus fracture","A gout sign","Soft-tissue gas"],a:0,tag:"lisfranc",expl:"Pathognomonic ossific fleck between medial cuneiform and 2nd MT base."},
{q:"Normal HVA on a WB AP film is:",opts:["< 15°","< 30°","< 45°","< 9°"],a:0,tag:"hallux",expl:"HVA < 15° normal; IMA < 9° normal. Severity (Coughlin/Mann): mild HVA < 20°, moderate 20–40°, severe > 40°."},
{q:"Hallux rigidus on X-ray typically shows:",opts:["Dorsal osteophyte + 1st MTP joint space narrowing","Widened 1st MTP joint","Overhanging-edge erosions","No bony change"],a:0,tag:"oa",expl:"1st MTP OA: dorsal osteophyte blocks dorsiflexion. Gout = punched-out erosions with overhanging edges."},
{q:"Böhler angle 15° on a lateral calcaneal film indicates:",opts:["Compression fracture (flattened; normal 25–40°)","Normal calcaneus","Sever's disease","Avulsion only"],a:0,tag:"calcaneus",expl:"Böhler normal 20–40° (25–40° also quoted); < 20° = height loss from compression fracture. CT for articular extent."},
{q:"Gissane angle > 145° suggests:",opts:["Posterior facet depression in intra-articular calcaneal fracture","Normal calcaneus","Os trigonum","Ankle sprain"],a:0,tag:"calcaneus",expl:"Gissane (critical) angle 120–145° normal; increased with posterior facet depression."},
{q:"Oval fully-corticated ossicle posterior to the talus on lateral ankle = most likely:",opts:["Os trigonum","Shepherd's fracture","OA loose body","Achilles avulsion"],a:0,tag:"ossicles",expl:"Os trigonum in ~7–25% of adults (reported 1.7–32.5%). Shepherd's = jagged non-corticated lateral talar process fragment."},
{q:"Bipartite sesamoid vs sesamoid fracture — the distinguishing feature:",opts:["Both parts corticated in bipartite; fracture margins are not","Location under 5th MTP","Size > 2 cm","Soft-tissue swelling"],a:0,tag:"ossicles",expl:"Bipartite: both fragments have smooth cortical rims, often bilateral (10–30%). Fracture: lucent jagged line."},
{q:"Accessory navicular prevalence ≈",opts:["4–14%","< 1%","50%","90%"],a:0,tag:"ossicles",expl:"4–14%; can cause symptomatic accessory navicular syndrome via the posterior tibial tendon, often with flatfoot."},
{q:"IWGDF/IDSA 2023 initial bundle for suspected diabetic foot osteomyelitis:",opts:["Probe-to-bone + plain X-ray + ESR/CRP (± PCT)","MRI first always","Bone biopsy first","X-ray alone"],a:0,tag:"dfi",expl:"PTB + X-ray + markers first; MRI when doubt remains; plain film insensitive in first 2–3 weeks."},
{q:"Normal plain X-ray 5 days after ulcer onset in a diabetic foot:",opts:["Does not exclude osteomyelitis — repeat at 2–3 weeks or MRI","Excludes osteomyelitis","Excludes Charcot","Confirms infection"],a:0,tag:"dfi",expl:"Radiographic change lags infection by 2–3 weeks (needs 10–15% bone loss to be visible)."},
{q:"Hot swollen red midfoot in a neuropathic diabetic = treat as:",opts:["Acute Charcot until proven otherwise","Cellulitis only","Gout","Nothing — reassure"],a:0,tag:"charcot",expl:"IWGDF 2023 CNO: hot swollen neuropathic foot = Charcot until excluded. Offload immediately; exclude infection."},
{q:"Charcot X-ray features:",opts:["Fragmentation, disorganisation, subluxation, rocker-bottom collapse","Punched-out erosions at 1st MTP","Single lucent line","Normal alignment"],a:0,tag:"charcot",expl:"Eichenholtz stages; usually midfoot/multiple joints. Osteomyelitis usually starts under one ulcer."},
{q:"Soft-tissue gas on a foot X-ray is:",opts:["Surgical emergency (necrotising infection)","Normal","Gout sign","Artefact"],a:0,tag:"dfi",expl:"Gas in soft tissues = necrotising fasciitis until proven otherwise — urgent debridement."},
{q:"WB films matter because:",opts:["Angles (HVA, IMA, Meary, calcaneal pitch) change with loading","Less radiation","Better soft tissue","Required for rebate"],a:0,tag:"views",expl:"WB shows functional alignment; NWB under-reports deformity and Lisfranc instability."},
{q:"Mortise view ≈",opts:["15–20° internal rotation","45° external rotation","No rotation","Full plantarflexion"],a:0,tag:"views",expl:"15–20° internal rotation opens the mortise so the lateral malleolus doesn't overlap the talus."},
{q:"Medial clear space > 4 mm on a mortise view suggests:",opts:["Deltoid disruption / lateral talar shift — unstable ankle","Normal ankle","Lateral ligament sprain only","OA"],a:0,tag:"ankle",expl:"Normal medial clear space is <= 4 mm and should not exceed the superior clear space. Widening = deltoid disruption; consider Maisonneuve — image the whole fibula."},
{q:"Comminuted intra-articular calcaneal fracture after fall from height →",opts:["CT for surgical planning + check bilateral injury and lumbar spine","Symptomatic care only","MRI ankle","No further imaging"],a:0,tag:"calcaneus",expl:"~10% bilateral; axial-load lumbar injuries common. CT defines posterior facet involvement."},
{q:"In the systematic checklist, assess soft tissues first because:",opts:["Gas, foreign bodies, swelling change urgency and differential","Bones are easier to see","It is faster","Joints depend on it"],a:0,tag:"system",expl:"Soft-tissue gas = emergency; foreign bodies/swelling alter the differential before you read bones."},
{q:"Structured radiology reporting means:",opts:["Technique → findings → impression → recommendations; no impression-only diagnoses","Writing fast","Only abnormal findings","Skipping technique"],a:0,tag:"system",expl:"Findings describe; impression concludes. Never a diagnosis in the impression that isn't in the findings."},
{q:"Podiatrist-requested CT/MRI of the foot in Australia:",opts:["Generally not MBS-rebatable — refer via a medical practitioner","Fully rebated under 57521","Rebated under 57527","Rebated under 63311 by podiatrists"],a:0,tag:"mbs",expl:"Podiatrist MBS access = plain X-ray (57521/57523/57527), EOS, limited ultrasound (55834/55835). CT/MRI items not claimable on podiatrist request."},
{q:"Normal variant mistaken for fracture at the anterior calcaneus on oblique views:",opts:["Os calcaneus secundarius","Os trigonum","Os peroneum","Os vesalianum"],a:0,tag:"ossicles",expl:"Os calcaneus secundarius: triangular, corticated. Os trigonum = posterior talus; os peroneum = lateral midfoot; os vesalianum = 5th MT base."},
{q:"Bimalleolar fracture means:",opts:["Fractures of both medial and lateral malleoli","Two fracture lines in the fibula","Fracture + dislocation of ankle","Fracture of talus"],a:0,tag:"ankle",expl:"Both malleoli fractured — often with widened medial clear space = unstable; needs orthopaedic assessment."},
{q:"High-ankle (syndesmotic) sprain key X-ray finding:",opts:["Widened tibiofibular/medial clear space on mortise","Normal mortise","Calcaneal flattening","Lisfranc widening"],a:0,tag:"ankle",expl:"Syndesmotic disruption widens the distal tibiofibular and medial clear spaces; unstable cases need fixation. Normal films don't exclude it."}
,
{q:"Sever's disease on X-ray shows:",opts:["Fragmented/sclerotic calcaneal apophysis — a clinical diagnosis, not a fracture","A lucent fracture line through the calcaneal body","Flattened 2nd MT head","Anteater-nose sign"],a:0,tag:"ossicles",expl:"Apophysitis. The apophysis is normally irregular in adolescents — treat clinically (heel raises, activity modification)."},
{q:"Kohler's disease affects the:",opts:["Navicular ossification centre (ages 3-7)","Calcaneal apophysis","2nd metatarsal head","Talus"],a:0,tag:"ossicles",expl:"Osteonecrosis of the navicular ossification centre — flattened, sclerotic navicular in a young child; self-limiting."},
{q:"Freiberg's infraction is AVN of the:",opts:["2nd metatarsal head","Navicular","Calcaneus","Talus"],a:0,tag:"oa",expl:"2nd MT head AVN in adolescent athletes — flattened, sclerotic head."},
{q:"Mueller-Weiss differs from Kohler's because:",opts:["It occurs in adults (spontaneous navicular osteonecrosis)","It is an apophysitis","It always needs surgery","It affects the calcaneus"],a:0,tag:"ossicles",expl:"Adult spontaneous navicular osteonecrosis with lateral compression — different population and prognosis."},
{q:"Tarsal coalition is best confirmed on:",opts:["CT (bony coalition)","Plain X-ray alone","MRI","Ultrasound"],a:0,tag:"ossicles",expl:"Anteater-nose sign (calcaneonavicular, oblique) and C-sign (talocalcaneal, lateral) on plain films; CT confirms."},
{q:"Rigid flatfoot with peroneal spasm in a 13-year-old suggests:",opts:["Tarsal coalition","Sever's disease","Normal variant","Flexible pes planus"],a:0,tag:"ossicles",expl:"Classic presentation of tarsal coalition — get CT."},
{q:"Lisfranc injury on WB films: the key measurement is:",opts:["C1–M2 gap > 2 mm (M1–M2 diastasis also used)","HVA > 15 deg","Medial clear space > 4 mm","Bohler < 20 deg"],a:0,tag:"lisfranc",expl:"C1–M2 > 2 mm + loss of 2nd MT–middle cuneiform alignment = ligament disruption."},
{q:"Gout vs OA at the 1st MTP on X-ray:",opts:["Gout = punched-out erosions with overhanging edges, joint space preserved early; OA = narrowing + dorsal osteophyte","Gout = joint space narrowing","OA = erosions","They look identical"],a:0,tag:"oa",expl:"Erosions with overhanging edges and preserved space = gout; narrowing + dorsal spur = OA."}
,
{q:"A 45-year-old with diabetes and a neuropathic ulcer has probe-to-bone positive and X-ray showing cortical erosion at the 1st MT head. IWGDF/IDSA 2023 approach:",opts:["Start IV antibiotics immediately without further imaging","PTB + X-ray + ESR/CRP support osteomyelitis; MRI if doubt remains","Order a bone scan first","Treat as cellulitis only"],a:1,tag:"dfi",expl:"IWGDF/IDSA 2023: combine probe-to-bone, plain X-ray and ESR/CRP; MRI when diagnosis remains in doubt. Serial X-ray changes take 2-3 weeks."},
{q:"Plain-film features most suggestive of diabetic foot osteomyelitis (vs Charcot) are:",opts:["Diffuse periarticular osteopenia","Focal cortical loss + periosteal reaction, often at a pressure point/ulcer site","Broad midfoot collapse with disorganisation","Subchondral cysts in the talus"],a:1,tag:"dfi",expl:"Osteomyelitis: focal cortical destruction, periosteal reaction, usually contiguous with an ulcer. Charcot: diffuse disorganisation, fragmentation, midfoot collapse - often with NORMAL early X-ray (stage 0 -> MRI)."},
{q:"Active Charcot neuro-osteoarthropathy stage 0 (Eichenholtz) is characterised by:",opts:["Normal plain X-ray but MRI shows osseous oedema; hot swollen foot","Established midfoot dislocation on X-ray","Healed rocker-bottom deformity","Gas in soft tissues"],a:0,tag:"charcot",expl:"IWGDF 2023 Charcot guideline: stage 0 = clinical signs of active CNO with NORMAL plain radiographs; MRI demonstrates the osseous injury. Do not reassure on a normal X-ray."},
{q:"Charcot vs osteomyelitis on plain film - the most helpful distinguishing pattern is:",opts:["Both always show gas","Distribution: Charcot = diffuse midfoot disorganisation/fragmentation; osteomyelitis = focal cortical loss at the ulcer site","Both identical","Charcot never affects bone"],a:1,tag:"charcot",expl:"Use distribution and ulcer contiguity. When in doubt: MRI (and labs) - the two can coexist."},
{q:"Weber classification: a fibular fracture BELOW the syndesmosis (Weber A) is usually:",opts:["Always unstable, needs ORIF","Usually stable - often treated conservatively","A Maisonneuve pattern","Always a trimalleolar fracture"],a:1,tag:"ankle",expl:"Weber A = below the syndesmosis, typically from supination-adduction; usually stable (intact syndesmosis/deltoid). Weber B at the level, Weber C above = potentially unstable - assess medial clear space and syndesmosis."},
{q:"Maisonneuve fracture consists of:",opts:["Proximal fibula fracture + syndesmotic disruption + medial injury (deltoid/medial malleolus)","Distal fibula fracture only","Calcaneal fracture + tibial shaft","Talar neck fracture"],a:0,tag:"trauma",expl:"Maisonneuve = proximal 1/3 fibula fracture with syndesmosis disruption and medial-sided injury. Always X-ray the proximal fibula when there is medial ankle tenderness + syndesmosis widening."},
{q:"Jones fracture (5th MT) vs pseudo-Jones (avulsion) - the distinguishing feature is:",opts:["Location: Jones = metaphyseal-diaphyseal junction (watershed zone, higher non-union risk); avulsion = tuberosity at peroneus brevis insertion","Pain level","Patient age","Nothing - identical"],a:0,tag:"trauma",expl:"Jones fracture at the metaphyseal-diaphyseal junction has poor blood supply -> higher non-union; often needs orthopaedic referral. Avulsion (pseudo-Jones) at the tuberosity usually heals conservatively."},
{q:"On a mortise view, the normal medial clear space is:",opts:["< 4 mm (or less than the superior tibiofibular clear space)","> 8 mm","Equal to the joint space","Not measurable"],a:0,tag:"ankle",expl:"Medial clear space <=4 mm on the mortise (and <= tibiofibular clear space). Widening = deltoid ligament disruption -> unstable ankle even without a medial malleolus fracture."},
{q:"Ottawa ankle rules EXCLUDE which group from rule-based imaging decisions?",opts:["Children under 5, plus intoxicated/altered, head-injured, multiple injuries, neuropathic, > 10 days old, pregnancy","Everyone over 65","Pregnant women only","All diabetics"],a:0,tag:"ottawa",expl:"OAR validated >=5-6 years; Exclusions: intoxication/altered mental status, head injury, multiple painful injuries, diminished sensation/neuropathy, pregnancy, > 10 days post-injury. If rules can't be applied, image on clinical suspicion."},
{q:"Hallux valgus severity is graded by the HVA (hallux valgus angle); severe is generally:",opts:["> 40 deg","15-20 deg","< 15 deg","30-40 deg"],a:0,tag:"hallux",expl:"HVA <15 normal, mild <20°, moderate 20–40°, severe >40° (Coughlin & Mann). IMA <9° normal; mild <11, moderate 11–16, severe >16. Measure on WB DP films."},
{q:"First-MTP osteoarthritis (hallux rigidus) on X-ray typically shows:",opts:["Dorsal osteophyte + joint space narrowing + subchondral sclerosis","Erosions with overhanging edges","Normal joint","Dislocation"],a:0,tag:"oa",expl:"Hallux rigidus: dorsal osteophyte (blocking dorsiflexion), joint space narrowing, sclerosis - unlike gout (erosions, preserved space early)."},
{q:"A 6-year-old with a limp and navicular pain after jumping - most likely diagnosis:",opts:["Kohler's disease (navicular osteonecrosis)","Osgood-Schlatter","Sever's","Transient synovitis of hip"],a:0,tag:"ossicles",expl:"Kohler's = osteonecrosis of the navicular in 3-7 y/o, self-limiting; X-ray shows flattened/sclerotic navicular. (Sever's = calcaneal apophysis; Osgood-Schlatter = tibial tubercle, knee.)"},
{q:"Accessory navicular (os tibiale externum) is associated with:",opts:["Flatfoot and posterior tibial tendon dysfunction","High arches only","Hallux valgus","Nothing"],a:0,tag:"ossicles",expl:"Type II accessory navicular within the posterior tibial tendon - associated with pes planus and PTTD; can be a pain source (accessory navicular syndrome)."},
{q:"The lisfranc ligament specifically connects:",opts:["Medial cuneiform to the base of the 2nd metatarsal","1st to 2nd metatarsal bases","Talus to navicular","Calcaneus to cuboid"],a:0,tag:"lisfranc",expl:"Medial cuneiform -> 2nd MT base. There is NO interosseous ligament between 1st and 2nd MT bases, which is why the 2nd MT base is the 'keystone' that displaces in Lisfranc injuries."},
{q:"Best plain-film view to assess the Lisfranc (1st-2nd TMT) interval is:",opts:["Weight-bearing DP (and medial oblique) foot","Lateral only","AP ankle","Harris axial"],a:0,tag:"lisfranc",expl:"WB DP + oblique open the TMT joints. Look for >2 mm widening of the 1st-2nd interval, fleck sign (avulsion at Lisfranc ligament), and loss of 2nd MT - intermediate cuneiform alignment."},
{q:"MBS item 57527 covers podiatrist-requested radiography of:",opts:["Combined regions — foot+ankle, ankle+leg, knee+leg, knee+femur (57521 = foot/ankle/leg/femur; 57523 = knee)","Lumbar spine","Chest","Shoulder"],a:0,tag:"mbs",expl:"Podiatrist MBS X-ray items: 57521 (foot/ankle/leg/femur), 57523 (knee), 57527 (two combined regions). Ultrasound 55834/55835/55840. CT/MRI are not podiatrist-rebatable."},
{q:"A podiatrist requests an ANKLE series under MBS 57521 - the standard views are:",opts:["AP, mortise (15-20 deg internal rotation), lateral","AP and lateral only","Mortise only","Stress views routinely"],a:0,tag:"views",expl:"AP + mortise (15-20 deg internal rotation) + lateral. The mortise view shows the joint without malleolar overlap - essential for medial clear space measurement. (57523 is the KNEE item.)"},
{q:"Which measurement requires a weight-bearing lateral foot film?",opts:["Meary angle, calcaneal pitch, HVA/IMA","Bohler angle only","Medial clear space","Tibiofibular clear space"],a:0,tag:"views",expl:"Meary, calcaneal pitch, HVA and IMA all change with loading - always quote WB vs NWB. Bohler/Gissane and clear spaces are measured on their standard views."}
];

export const REAL_CASES=[
{
  id:"r1", title:"Lisfranc dislocation — DP both feet", topic:"Trauma", diff:3,
  img:"images/Lisfranc Dislocation Rupture.jpg", imgW:800, imgH:923,
  attr:"Lisfranc Dislocation Rupture — Mark A. Dreyer, DPM, FACFAS, via Wikimedia Commons, CC BY 4.0",
  stem:"DP weight-bearing view of both feet after twisting injury. Compare the 1st–2nd metatarsal base interval on each side.",
  hotspots:[{x:25,y:52,label:"Widened Lisfranc (1st–2nd TMT) interval — affected foot",hint:"On the image-left foot, the gap between the 1st and 2nd metatarsal bases",expl:"Gap between the 1st and 2nd metatarsal bases is widened (>2 mm vs the other side) — the hallmark of Lisfranc ligament disruption. Always compare both feet on WB films."},
{x:28,y:52,label:"2nd metatarsal base — loses alignment with intermediate cuneiform",hint:"Just lateral to the widened gap",expl:"The medial border of the 2nd MT base should line up with the medial border of the intermediate (middle) cuneiform — here it is offset, confirming TMT subluxation."},
{x:67,y:52,label:"Normal contralateral foot — compare",hint:"Same region on the image-right foot",expl:"The opposite foot shows a normal, narrow 1st–2nd interval and congruent TMT joints. Side-to-side comparison on WB views is the single most useful check."}],
  ddx:["Normal variant splaying — compare both feet","Midfoot sprain — stress views / MRI if X-ray subtle"],
  pearls:["Get WB views; check alignment of medial 2nd MT base with intermediate cuneiform","Unstable Lisfranc → orthopaedic referral (ORIF)"],
  refs:["Lisfranc injury reviews"], quizTag:"lisfranc",
  report:"TECHNIQUE: WB DP both feet.\nFINDINGS: Widening of the 1st-2nd intermetatarsal interval on the affected side; loss of normal cuneiform-2nd MT alignment.\nIMPRESSION: Lisfranc (tarsometatarsal) subluxation.\nRECOMMENDATION: Orthopaedic referral if unstable; consider CT; compare WB views both feet.",
  teach:["WB views are essential - NWB can look normal", "Always compare both feet", "Check the whole film for associated injuries"],
},
{
  id:"r2", title:"Lisfranc fracture-dislocation — lateral X-ray + CT", topic:"Trauma", diff:3,
  img:"images/Lisfranc-Luxationsfraktur_55M.jpg", imgW:1430, imgH:1323,
  attr:"Lisfranc-Luxationsfraktur 55M — Hellerhoff, via Wikimedia Commons, CC BY-SA 4.0",
  stem:"55-year-old male, lateral foot X-ray (bottom) with sagittal CT (top). Find the tarsometatarsal disruption.",
  hotspots:[{x:40,y:60,label:"Dorsal dislocation of metatarsal bases (lateral view)",hint:"On the lateral film, trace the plantar line of the tarsus vs the metatarsal bases",expl:"The plantar cortex of the metatarsal bases no longer aligns with the plantar line of the cuneiforms/cuboid — dorsal TMT dislocation, the lateral-view equivalent of the DP widening."},
{x:70,y:30,label:"CT confirms TMT fracture-dislocation",hint:"The CT slice on the right shows the disrupted tarsometatarsal joints in cross-section",expl:"CT delineates the exact TMT joints involved and any avulsion fragments — used when plain films are equivocal or for surgical planning."}],
  ddx:["Charcot midfoot — usually multiple joints, neuropathic","Midfoot sprain"],
  pearls:["CT for surgical planning in fracture-dislocation","Check the whole film, not just the painful area"],
  refs:["Lisfranc injury imaging"], quizTag:"lisfranc",
  report:"TECHNIQUE: Lateral foot X-ray + sagittal CT.\nFINDINGS: Dorsal subluxation of metatarsal bases vs cuneiforms; comminution at TMT joints on CT.\nIMPRESSION: Lisfranc fracture-dislocation.\nRECOMMENDATION: CT for surgical planning; orthopaedic referral (likely ORIF).",
  teach:["CT defines comminution and articular involvement", "Fracture-dislocation is more unstable than ligament-only injury"],
},
{
  id:"r3", title:"Gout (podagra) — 1st MTP erosions", topic:"Inflammatory", diff:2,
  img:"images/Gichtfuss_im_Roentgen.jpg", imgW:556, imgH:600,
  attr:"Gichtfuss im Röntgen (gout foot X-ray) — Hellerhoff, via Wikimedia Commons, CC BY-SA 3.0",
  stem:"Foot X-ray of a patient with recurrent first-MTP attacks. Look at the big-toe joint.",
  hotspots:[{x:24,y:35,label:"Punched-out erosion with overhanging edge, 1st MTP",hint:"The big-toe (1st MTP) joint margin",expl:"Classic gouty erosion: well-defined 'punched-out' lytic defect with a sclerotic overhanging edge at the 1st MTP joint margin."},
{x:23,y:33,label:"Soft-tissue swelling / tophus at 1st MTP",hint:"Soft tissues just around the 1st MTP joint",expl:"Eccentric soft-tissue density (tophus) adjacent to the joint — gout causes swelling despite preserved joint space early on."},
{x:26,y:36,label:"Preserved joint space (early gout)",hint:"The 1st MTP joint space itself",expl:"Joint space is preserved until late — distinguishes gout from OA, where space narrows early."},
{x:50,y:55,label:"Midfoot — no erosions (distribution matters)",hint:"The midfoot joints for comparison",expl:"Gout favours the 1st MTP and midfoot/hindfoot; check distribution before calling a single erosion."}],
  ddx:["Hallux rigidus (OA) — joint space narrowing, dorsal osteophyte","Septic arthritis — rapid destruction, clinical sepsis"],
  pearls:["Gout erosions spare joint space early; OA narrows it","Check urate-lowering therapy adherence in known gout"],
  refs:["Gout imaging reviews"], quizTag:"oa",
  report:"TECHNIQUE: Foot X-ray.\nFINDINGS: Punched-out erosions with sclerotic overhanging margins at the 1st MTP; joint space relatively preserved.\nIMPRESSION: Gout (podagra).\nRECOMMENDATION: Serum urate; review urate-lowering therapy; exclude septic arthritis clinically.",
  teach:["Gout erosions spare joint space early - OA narrows it", "Overhanging edges are characteristic"],
},
{
  id:"r4", title:"Sever's disease — calcaneal apophysitis", topic:"Paediatric", diff:1,
  img:"images/Sever_calcaneal_apophysis.jpg", imgW:789, imgH:751,
  compare:"images/X-ray_normal_right_foot_lateral.jpg",
  attr:"Sclerosis and fragmentation of the calcaneal apophysis (Sever's disease) — Mikael Häggström, via Wikimedia Commons, CC0",
  stem:"Adolescent athlete with heel pain worse with activity. Lateral calcaneal view.",
  hotspots:[{x:72,y:84,label:"Fragmented, sclerotic calcaneal apophysis",hint:"The posterior-inferior corner of the heel bone",expl:"The apophysis (growth plate at the back of the heel) appears fragmented and dense — Sever's calcaneal apophysitis, a traction injury in active children. NOT a fracture."},
{x:88,y:90,label:"Posterior soft-tissue swelling",hint:"Soft tissues just behind the heel",expl:"Swelling over the posterior calcaneus supports symptomatic apophysitis (heel pain in a growing child, worse with activity)."},
{x:60,y:60,label:"Normal talocalcaneal (subtalar) joint for comparison",hint:"The joint just in front of the apophysis",expl:"The subtalar joint is normal — in Sever's the pain is at the apophysis, not the joint. Clinical correlation makes the diagnosis."}],
  ddx:["Calcaneal stress fracture — sclerotic band in the body, Böhler preserved","Normal apophyseal irregularity in adolescents"],
  pearls:["Treat clinically: heel raises, activity modification, calf stretching","Don't call it a fracture on X-ray alone"],
  refs:["Sever's disease reviews"], quizTag:"ossicles",
  report:"TECHNIQUE: Lateral calcaneus.\nFINDINGS: Fragmented, sclerotic calcaneal apophysis.\nIMPRESSION: Sever's disease (calcaneal apophysitis) - clinical diagnosis, X-ray supportive.\nRECOMMENDATION: Heel raises, activity modification, calf stretching.",
  teach:["This is NOT a fracture", "Apophysis is normally irregular in adolescents - correlate clinically"],
},
{
  id:"r5", title:"Normal lateral foot — anatomy reference", topic:"Normal anatomy", diff:1,
  img:"images/X-ray_normal_right_foot_lateral.jpg", imgW:2638, imgH:1322,
  compare:"images/X-ray_normal_right_foot_lateral.jpg",
  attr:"X-ray of normal right foot, lateral projection — Mikael Häggström, M.D., via Wikimedia Commons, CC0",
  stem:"Use this as your normal reference. Identify the calcaneus, talus, navicular and 1st metatarsal; note Meary's line and calcaneal pitch.",
  hotspots:[{x:35,y:60,label:"Calcaneus",expl:"Heel bone. On the lateral view assess Böhler angle (normal 20–40°) for compression fractures."},
{x:45,y:45,label:"Talus / talar dome",expl:"Sits in the ankle mortise; the dome should be smooth — check for osteochondral lesions."},
{x:50,y:50,label:"Navicular",expl:"Midfoot keystone — tenderness here suggests navicular stress fracture (MRI if suspected)."},
{x:60,y:55,label:"1st metatarsal base / Meary's line",expl:"A line through the long axis of the talus and the 1st MT should be straight (Meary ≈ 0°); deviation > 4° indicates pes planus (plantar) or cavus (dorsal)."}],
  ddx:["—"],
  pearls:["Always compare with the symptomatic side","Measure angles only on weight-bearing films"],
  refs:["Normal foot & ankle radiographic anatomy (Christman)"], quizTag:"views",
  report:"TECHNIQUE: WB lateral foot.\nFINDINGS: Normal alignment; Meary line straight; calcaneal pitch normal; Bohler 20-40 deg.\nIMPRESSION: Normal lateral foot.\nRECOMMENDATION: Use as the reference for abnormal films.",
  teach:["Measure Bohler on every lateral calcaneus after trauma", "WB lateral is where arch angles are valid"],
},
{
  id:"r6", title:"Foot X-ray — AP and oblique views", topic:"Normal anatomy", diff:1,
  img:"images/X-ray_foot.jpg", imgW:500, imgH:601,
  attr:"X-ray foot — Alex Khimich, via Wikimedia Commons, CC BY-SA 3.0",
  stem:"Two views of a foot (AP top, oblique bottom). Identify the metatarsals, tarsometatarsal joints and any abnormality.",
  hotspots:[{x:30,y:45,label:"DP/AP view — forefoot & metatarsals",hint:"Top half of the image",expl:"DP view: assess metatarsal alignment, HVA/IMA, phalanges, and the 1st–2nd intermetatarsal interval."},
{x:30,y:80,label:"Oblique view — midfoot & TMT (Lisfranc) joints open",hint:"Bottom half of the image",expl:"The oblique view opens the tarsometatarsal joints — the best plain view for the Lisfranc interval and the cuboid/5th MT base."}],
  ddx:["—"],
  pearls:["Systematic: soft tissues → bones → joints → alignment → measurements → compare"],
  refs:["Systematic foot X-ray reading"], quizTag:"system",
  report:"TECHNIQUE: Foot X-ray AP + oblique views.\nFINDINGS: Normal bony alignment; metatarsals, TMT joints and tarsals systematically reviewed; no acute abnormality.\nIMPRESSION: Normal foot series (two views).\nRECOMMENDATION: Use the systematic checklist on every film.",
  teach:["Two views complement each other - AP for alignment, oblique for TMT joints", "A normal film still needs a systematic read"],
},
{
  id:"r7", title:"Lisfranc annotated diagram", topic:"Trauma", diff:2,
  img:"images/LisFranc.png", imgW:384, imgH:621,
  attr:"LisFranc.png — James Heilman, MD, via Wikimedia Commons, CC BY-SA 4.0",
  stem:"Annotated-style reference image of Lisfranc anatomy/alignment on a foot X-ray. Use it to rehearse naming the tarsometatarsal joints.",
  hotspots:[{x:50,y:45,label:"Lisfranc (tarsometatarsal) joint line",hint:"Between the cuneiforms and the metatarsal bases",expl:"The Lisfranc joint complex spans the 1st–3rd TMT joints; the 2nd MT base has no direct ligament to the medial cuneiform — the 'keystone' held by the Lisfranc ligament from the medial cuneiform to the 2nd MT base."},
{x:50,y:30,label:"2nd metatarsal base — the keystone",hint:"The base of the middle metatarsal in the mortise",expl:"The 2nd MT base sits in a mortise formed by the three cuneiforms. Displacement here = Lisfranc injury — the most commonly missed midfoot fracture."}],
  ddx:["—"],
  pearls:["Name the joints out loud before reading pathology — builds a fixed search pattern"],
  refs:["Lisfranc anatomy"], quizTag:"lisfranc",
  report:"TECHNIQUE: Foot X-ray with reference markings of the Lisfranc joint line.\nFINDINGS: Tarsometatarsal joint line from medial cuneiform-1st MT to lateral cuneiform-5th MT.\nIMPRESSION: Lisfranc anatomy reference.\nRECOMMENDATION: Name the joints before reading pathology - builds a fixed search pattern.",
  teach:["Disruption of the Lisfranc joint line = Lisfranc injury", "Rehearse anatomy out loud on every film"],
}
];
REAL_CASES.push({
  id:"r8", title:"Bimalleolar ankle fracture", topic:"Trauma", diff:2,
  img:"images/Bimalleolar_fracture.jpg", imgW:455, imgH:469,
  attr:"Bimalleolar fracture legend — Steven Fruitsmaak, via Wikimedia Commons, CC BY-SA 3.0",
  stem:"Adult ankle injury, AP view. Identify both malleolar fracture lines.",
  hotspots:[{x:75,y:30,label:"Transverse lateral malleolus fracture",hint:"The outer (fibular) malleolus",expl:"Transverse fracture of the lateral malleolus — one component of the bimalleolar injury."},
{x:90,y:40,label:"Medial malleolus fracture",hint:"The inner malleolus of the tibia",expl:"Fracture of the medial malleolus — together with the lateral fracture this is a bimalleolar ankle fracture."},
{x:80,y:45,label:"Talar dome / medial clear space — check for shift",hint:"Centre of the ankle joint, inner side",expl:"Assess tibiotalar congruity and medial clear space (> 4 mm = deltoid disruption = unstable)."}],
  ddx:["Unimalleolar fracture with deltoid sprain","Maisonneuve fracture — check proximal fibula and image the leg"],
  pearls:["Assess stability: medial clear space > 4 mm on mortise (or talar shift) = unstable","Always X-ray the whole leg if proximal fibula tenderness (Maisonneuve)"],
  refs:["Ankle fracture classification"], quizTag:"ankle",
  report:"TECHNIQUE: AP ankle.\nFINDINGS: Fracture lines through both lateral and medial malleoli.\nIMPRESSION: Bimalleolar ankle fracture.\nRECOMMENDATION: Assess stability (medial clear space); orthopaedic referral; check proximal fibula (Maisonneuve).",
  teach:["Both malleoli + widened medial clear space (>4 mm) = unstable", "Always image the leg if proximal fibular tenderness"],
},
{
  id:"r9", title:"Lateral malleolus fracture with widened medial clear space", topic:"Trauma", diff:2,
  img:"images/Left_ankle_AP.jpg", imgW:1306, imgH:2330,
  attr:"Left ankle x-ray, adult male — US Government work (public domain), via Wikimedia Commons",
  stem:"AP ankle view after inversion injury. What is fractured, and what does the medial clear space tell you?",
  hotspots:[{x:50,y:40,label:"Fibular fracture at syndesmosis level (Weber B)",hint:"Outer malleolus, at the level of the ankle joint",expl:"Spiral/oblique fibular fracture starting at the joint line — Weber B, the most common unstable ankle fracture pattern."},
{x:60,y:60,label:"Widened medial clear space (deltoid disruption)",hint:"Space between the medial malleolus and the talus",expl:"Medial clear space > 4 mm on the mortise (normal <= 4 mm and <= superior clear space) means deltoid disruption — unstable even if the medial malleolus is intact."},
{x:55,y:35,label:"Tibiofibular (syndesmosis) clear space",hint:"Between the distal tibia and fibula above the talus",expl:"Tibiofibular clear space measured 1 cm above the plafond; normal < 6 mm; overlap > 1 mm on mortise. Widening = syndesmotic injury (high-ankle sprain)."}],
  ddx:["Isolated lateral ligament sprain — no fracture, no widening","Syndesmotic injury — also widened tibiofibular clear space"],
  pearls:["Measure medial clear space on the mortise view; > 4 mm (or talar shift) = deltoid disruption/unstable","Gravity-stress views can confirm instability"],
  refs:["Ankle instability imaging"], quizTag:"ankle",
  report:"TECHNIQUE: AP ankle.\nFINDINGS: Lateral malleolus fracture; medial clear space widened.\nIMPRESSION: Unstable ankle injury - fibula fracture with deltoid disruption.\nRECOMMENDATION: Mortise + stress views; orthopaedic referral.",
  teach:["Medial clear space > 4 mm on mortise = deltoid disruption", "Gravity-stress views can confirm"],
},
{
  id:"r10", title:"Normal lateral ankle — reference", topic:"Normal anatomy", diff:1,
  img:"images/Left_ankle_lat.jpg", imgW:1318, imgH:2330,
  attr:"Left ankle x-ray, adult male, side view — US Government work (public domain), via Wikimedia Commons",
  stem:"Normal lateral ankle. Identify the talar dome, posterior talus (os trigonum region) and calcaneus.",
  hotspots:[{x:65,y:20,label:"Lateral malleolus — intact fibula",hint:"Outer ankle bone",expl:"Normal lateral malleolus — compare with fracture cases r8/r9."},
{x:50,y:50,label:"Tibiotalar joint — congruent, normal space",hint:"The ankle joint line",expl:"Normal tibiotalar joint: even space, no talar shift."},
{x:40,y:70,label:"Calcaneus — normal Böhler region",hint:"Heel bone on the lateral",expl:"Normal calcaneal contour — compare with Böhler/Gissane angle cases r11/r12."}],
  ddx:["—"],
  pearls:["Corticated + round = ossicle; jagged + lucent = fracture","Compare both ankles if unsure"],
  refs:["Normal ankle anatomy"], quizTag:"views",
  report:"TECHNIQUE: Lateral ankle.\nFINDINGS: Normal tibiotalar alignment; smooth talar dome; calcaneus intact.\nIMPRESSION: Normal lateral ankle.\nRECOMMENDATION: Reference film for the os trigonum region.",
  teach:["Corticated ossicle posterior to talus = os trigonum, not fracture", "Shepherd's fracture is jagged and non-corticated"],
},
{
  id:"r11", title:"Böhler angle — calcaneus lateral", topic:"Measurements", diff:2,
  img:"images/Calcaneus_Bohler_angle.jpg", imgW:818, imgH:1274,
  attr:"Böhler's angle — Thomas Steiner, via Wikimedia Commons, CC BY-SA 3.0",
  stem:"Lateral calcaneus with Böhler angle drawn. Vertex at the highest point of the posterior facet; arms to the anterior process and posterior tuberosity.",
  hotspots:[{x:50,y:50,label:"Böhler angle apex — posterior facet highest point",hint:"The peak of the angle drawn on the calcaneus",expl:"Böhler angle = line from anterior process highest point to posterior facet highest point, then to posterior tuberosity. Normal 20–40° (25–40° also quoted); < 20° = flattened by compression fracture."},
{x:35,y:35,label:"Line 1: anterior process → posterior facet",hint:"The upper line of the drawn angle",expl:"First limb of Böhler's angle."},
{x:65,y:75,label:"Line 2: posterior facet → posterior tuberosity",hint:"The lower line of the drawn angle",expl:"Second limb. A flattened angle (<20°) indicates calcaneal compression fracture with posterior facet collapse."}],
  ddx:["—"],
  pearls:["Böhler < 20° = compression fracture, not simple avulsion","CT for intra-articular extension; check spine/other heel in fall-from-height"],
  refs:["Calcaneal fracture measurements"], quizTag:"calcaneus",
  report:"TECHNIQUE: Lateral calcaneus.\nFINDINGS: Bohler angle measured at posterior facet vertex - normal 20-40 deg in this reference.\nIMPRESSION: Normal Bohler measurement technique.\nRECOMMENDATION: < 20 deg in trauma = compression fracture.",
  teach:["Vertex = highest point of posterior facet", "Pair with Gissane (120-145 deg)"],
},
{
  id:"r12", title:"Gissane (critical) angle — calcaneus", topic:"Measurements", diff:2,
  img:"images/Gissane_angle.jpg", imgW:749, imgH:979,
  attr:"Gissane angle — Benoudina samir, via Wikimedia Commons, CC BY-SA 4.0",
  stem:"Lateral calcaneus, Gissane angle drawn at the posterior facet. Normal 120–145°.",
  hotspots:[{x:50,y:45,label:"Gissane (critical) angle apex",hint:"The angle drawn over the posterior facet region",expl:"Gissane angle between the downward slope of the anterior process and the upward slope of the posterior facet. Normal 120–145°."},
{x:40,y:30,label:"Anterior (inferior) process slope",hint:"Front part of the calcaneus",expl:"Line along the anterior process — one limb of Gissane's angle."},
{x:60,y:70,label:"Posterior facet slope",hint:"The back part of the calcaneus",expl:"Line along the posterior facet. Angle >130–145° suggests fracture through the posterior facet (intra-articular calcaneal fracture)."}],
  ddx:["—"],
  pearls:["Böhler + Gissane together assess calcaneal compression","CT defines articular step-off for surgery"],
  refs:["Calcaneal fracture measurements"], quizTag:"calcaneus",
  report:"TECHNIQUE: Lateral calcaneus.\nFINDINGS: Gissane (critical) angle at posterior facet - normal 120-145 deg here.\nIMPRESSION: Normal Gissane measurement technique.\nRECOMMENDATION: > 145 deg suggests posterior facet depression - CT.",
  teach:["Gissane + Bohler together assess calcaneal compression", "CT defines articular step-off"],
},
{
  id:"r13", title:"Calcaneal pitch — WB lateral foot", topic:"Measurements", diff:1,
  img:"images/Calcaneal_pitch.jpg", imgW:2230, imgH:751,
  attr:"Calcaneal pitch — Mikael Häggström, via Wikimedia Commons, CC0",
  stem:"Weight-bearing lateral foot with calcaneal pitch drawn. Normal ~18–30° (17–32 reported); < 17–18° indicates pes planus.",
  hotspots:[{x:20,y:75,label:"Calcaneal pitch angle vertex",hint:"Where the two drawn lines meet at the back-bottom of the heel",expl:"Calcaneal pitch = angle between the floor and a inferior calcaneus on WB lateral. Normal ~18–30°; < 17–18° = flatfoot."},
{x:50,y:60,label:"Inferior calcaneal line",hint:"The line along the bottom of the calcaneus",expl:"Pitch < 17–18° = pes planus; > 30° suggests pes cavus. Always quote WB status — pitch changes with loading."},
{x:80,y:45,label:"Forefoot — assess Meary angle region",hint:"Midfoot arch region",expl:"On the WB lateral, also check Meary's angle (talar — 1st MT axis): normal ~0°, apex plantar = cavus, apex dorsal = flatfoot."}],
  ddx:["—"],
  pearls:["Pair with Meary's angle for arch assessment","Always measure on weight-bearing films"],
  refs:["Foot alignment angles (JAPMA)"], quizTag:"hallux",
  report:"TECHNIQUE: WB lateral foot.\nFINDINGS: Calcaneal pitch measured on WB lateral - normal ~18-30 deg.\nIMPRESSION: Normal calcaneal pitch.\nRECOMMENDATION: < 17-18 deg suggests pes planus; pair with Meary's angle.",
  teach:["Only valid on weight-bearing films", "Arch assessment = calcaneal pitch + Meary + Kite angle"],
},
{
  id:"r14", title:"Accessory ossicles & sesamoids — DP foot", topic:"Pitfalls", diff:2,
  img:"images/Accessory_sesamoid_DP.jpg", imgW:1219, imgH:2500,
  attr:"Accessory and sesamoid bones of the foot, dorsoplantar projection — Mikael Häggström, via Wikimedia Commons, CC0",
  stem:"DP foot showing many normal variants at once. Tap each one you can recognise — none of these are fractures.",
  hotspots:[{x:75,y:70,label:"Os peroneum — near cuboid / lateral midfoot",hint:"Outer midfoot, by the cuboid",expl:"Accessory ossicle within the peroneus longus tendon — corticated and round = variant, present in ~5–30%; can fracture in lateral injuries."},
{x:20,y:80,label:"Accessory navicular (os tibiale externum) — medial midfoot",hint:"Inner edge of the midfoot next to the navicular",expl:"Present in 4–14%; sits within the posterior tibial tendon and is associated with flatfoot/PTTD. Round, corticated, often bilateral — not an avulsion."},
{x:45,y:90,label:"Hallux sesamoids region — 1st MTP",hint:"Under the big-toe joint",expl:"The sesamoids under the 1st MTP can be bipartite (two corticated halves, ~10–30%, often bilateral) — a normal variant, not a sesamoid fracture."}],
  ddx:["Avulsion fractures — jagged lucent lines, non-corticated margins"],
  pearls:["Rule of thumb: corticated + round = variant; jagged + lucent = fracture","Compare with the other foot; old films help"],
  refs:["Accessory ossicles (AJR 2019)"], quizTag:"ossicles",
  report:"TECHNIQUE: DP foot.\nFINDINGS: Multiple corticated accessory ossicles/sesamoids (hallux sesamoids, accessory navicular, os peroneum, os intermetatarseum, os vesalianum). No acute lucent fracture lines.\nIMPRESSION: Normal variants - accessory ossicles and sesamoids.\nRECOMMENDATION: Do not over-call fractures; compare contralateral if unsure.",
  teach:["Corticated + round = variant; jagged + lucent = fracture", "a notable minority of ossicles get misread as fractures — always check cortication and compare sides"],
},
{
  id:"r15", title:"Accessory ossicles — lateral foot", topic:"Pitfalls", diff:2,
  img:"images/Accessory_sesamoid_lat.jpg", imgW:2500, imgH:1061,
  attr:"Accessory and sesamoid bones of the foot, lateral projection — Mikael Häggström, via Wikimedia Commons, CC0",
  stem:"Lateral foot showing os trigonum, os calcaneus secundarius and others. All corticated = normal variants.",
  hotspots:[{x:85,y:25,label:"Os trigonum — posterior to talus",hint:"Just behind the back of the talus",expl:"Accessory ossicle behind the talus (unfused posterior talar process), present in ~7–25%. Corticated and round = variant; can cause posterior ankle impingement in plantarflexion."},
{x:75,y:65,label:"Os peroneum — lateral midfoot (in peroneus longus)",hint:"Outer border of the midfoot",expl:"Sesamoid within the peroneus longus tendon near the cuboid. Differentiate from a 5th MT base fracture: ossicles are round and corticated, fractures are jagged."},
{x:70,y:50,label:"Os calcaneus secundarius — anterior calcaneus",hint:"Front-top corner of the calcaneus",expl:"Triangular corticated ossicle at the anterior-superior calcaneus — a normal variant often mistaken for an anterior process fracture on oblique views."}],
  ddx:["Shepherd's fracture (lateral talar process) — jagged, acute","Anterior process calcaneal fracture — non-corticated"],
  pearls:["Same rule on lateral: corticated = variant","MRI if symptomatic ossicle (oedema at interface)"],
  refs:["Accessory ossicles (AJR 2019)"], quizTag:"ossicles",
  report:"TECHNIQUE: Lateral foot.\nFINDINGS: Corticated os trigonum posterior to talus; os calcaneus secundarius at anterior calcaneus.\nIMPRESSION: Normal variants.\nRECOMMENDATION: Fractures at these sites are jagged and non-corticated.",
  teach:["Same cortication rule on lateral views", "MRI if a symptomatic ossicle (interface oedema)"],
},
{
  id:"r16", title:"Normal oblique foot — Lisfranc interval", topic:"Normal anatomy", diff:1,
  img:"images/Normal_foot_oblique.jpg", imgW:1077, imgH:2029,
  attr:"X-ray of normal right foot by oblique projection — Mikael Häggström, via Wikimedia Commons, CC0",
  stem:"Normal oblique view — the best view for the tarsometatarsal (Lisfranc) joints. Check alignment here.",
  hotspots:[{x:55,y:35,label:"Lisfranc interval (1st–2nd TMT joint) — normal",hint:"Between the medial cuneiform and 2nd MT base",expl:"On this normal oblique view the 1st–2nd TMT interval is narrow and aligned — the oblique view opens the TMT joints and is the best plain-film check for Lisfranc injury."},
{x:58,y:32,label:"2nd metatarsal base — medial border aligns with intermediate cuneiform",hint:"The base of the 2nd MT",expl:"The medial edge of the 2nd MT base should line up with the medial edge of the intermediate cuneiform — loss of this line = Lisfranc subluxation."},
{x:75,y:40,label:"Cuboid & 5th MT base (Jones/avulsion zone)",hint:"Outer midfoot",expl:"Always include the 5th MT base on foot films — the classic site of avulsion (pseudo-Jones) and Jones fractures."}],
  ddx:["—"],
  pearls:["Oblique view opens the TMT joints — use it for suspected Lisfranc","WB oblique stress views can reveal instability"],
  refs:["Foot views guide"], quizTag:"lisfranc",
  report:"TECHNIQUE: Oblique foot.\nFINDINGS: Normal tarsometatarsal alignment; C1–M2 gap < 2 mm.\nIMPRESSION: Normal oblique foot - best view for Lisfranc joints.\nRECOMMENDATION: Use oblique + WB views for suspected Lisfranc.",
  teach:["Oblique opens the TMT joints", "WB oblique stress views can reveal instability"],
},
{
  id:"r17", title:"Normal ankle + foot — three views (AP, lateral, oblique)", topic:"Normal anatomy", diff:1,
  img:"images/Ankle_foot_DP_Dispe.jpg", imgW:1199, imgH:1980,
  attr:"Radiografia tibiotarsica, proiezione dorsoplantare — Dispe, via Wikimedia Commons, CC BY-SA 4.0",
  stem:"AP ankle+foot. Identify the mortise, talar dome, distal fibula and the Lisfranc interval. (Lateral and oblique views of the same foot are also in this library.)",
  hotspots:[{x:50,y:25,label:"AP ankle view — mortise & medial clear space",hint:"Top portion of the composite",expl:"AP ankle: check the mortise, medial clear space (≤ 4 mm and ≤ superior clear space) and tibiofibular overlap (> 1 mm on mortise)."},
{x:50,y:55,label:"Lateral view — tibiotalar joint & posterior talus",hint:"Middle portion",expl:"Lateral: tibiotalar congruity, posterior talus/calcaneus, os trigonum region."},
{x:50,y:85,label:"Oblique/DP foot view — TMT (Lisfranc) interval",hint:"Bottom portion",expl:"Foot view: metatarsals, TMT joints (Lisfranc), 5th MT base — a complete ankle+foot series covers all three regions."}],
  ddx:["—"],
  pearls:["Three views minimum for ankle trauma: AP, mortise, lateral","Check soft tissues for swelling/gas first"],
  refs:["Ankle series guide"], quizTag:"views",
  report:"TECHNIQUE: AP ankle+foot.\nFINDINGS: Normal mortise; medial clear space <= 4 mm; normal Lisfranc interval.\nIMPRESSION: Normal AP ankle+foot.\nRECOMMENDATION: Compare with lateral and oblique of the same series.",
  teach:["Medial clear space ≤ 4 mm and ≤ superior clear space", "Three views minimum for ankle trauma: AP, mortise, lateral"],
},
{
  id:"r18", title:"Lateral ankle + foot — Dispe series", topic:"Normal anatomy", diff:1,
  img:"images/Ankle_foot_lat_Dispe.jpg", imgW:2336, imgH:2476,
  attr:"Radiografia tibiotarsica, proiezione laterale — Dispe, via Wikimedia Commons, CC BY-SA 4.0",
  stem:"Lateral ankle+foot. Identify talar dome, calcaneus, navicular and midfoot. Use for Böhler/Gissane and arch angles.",
  hotspots:[{x:55,y:30,label:"Tibiotalar joint — lateral view",hint:"Upper ankle region",expl:"Tibiotalar joint space and alignment on the lateral."},
{x:55,y:45,label:"Posterior talus / os trigonum region",hint:"Behind the talus",expl:"Check for os trigonum and posterior impingement."},
{x:35,y:65,label:"Calcaneal body — Bohler/Gissane region",hint:"The heel bone",expl:"Calcaneus: assess Böhler/Gissane angles if trauma suspected."},
{x:30,y:75,label:"5th metatarsal base (Jones zone)",hint:"Outer forefoot base",expl:"5th MT base — include fully on every lateral foot film; Jones/avulsion fractures here."}],
  ddx:["—"],
  pearls:["Lateral view is where you measure Böhler, Gissane, calcaneal pitch, Meary","WB lateral for functional angles"],
  refs:["Lateral foot anatomy"], quizTag:"views",
  report:"TECHNIQUE: Lateral ankle+foot.\nFINDINGS: Normal talar dome, calcaneus, navicular, midfoot alignment.\nIMPRESSION: Normal lateral ankle+foot.\nRECOMMENDATION: This is the view for Bohler/Gissane/calcaneal pitch/Meary.",
  teach:["Lateral view carries all the angle measurements", "WB lateral for functional assessment"],
},
{
  id:"r19", title:"Post-syndesmosis fixation — healed", topic:"Trauma", diff:2,
  img:"images/Syndesmosis_postop.jpg", imgW:356, imgH:368,
  attr:"2 years after syndesmosis surgery — Personalo, via Wikimedia Commons, CC BY-SA 3.0",
  stem:"Follow-up film 2 years after syndesmotic fixation for a high-ankle sprain. What was the injury and what does the film show?",
  hotspots:[{x:50,y:35,label:"Distal tibiofibular syndesmosis region",hint:"Between the distal tibia and fibula, above the talus",expl:"The syndesmosis (tibiofibular ligaments) stabilises the ankle mortise — the region injured in 'high ankle sprain' and fixed with a syndesmotic screw."},
{x:50,y:60,label:"Medial clear space — check it is restored",hint:"Between medial malleolus and talus",expl:"On this follow-up film the medial clear space is normal (≤4 mm) — a sign the ankle mortise is stable after fixation."},
{x:50,y:48,label:"Ankle mortise — congruent",hint:"The ankle joint itself",expl:"Tibiotalar joint congruent with no talar shift — compare with the acute injury films."}],
  ddx:["Isolated lateral ligament sprain — normal syndesmosis","Maisonneuve fracture — proximal fibula fracture with syndesmotic disruption"],
  pearls:["High ankle sprain: pain above the joint, worse with external rotation/squeeze","Normal X-ray does not exclude syndesmotic injury — stress views/MRI"],
  refs:["Syndesmotic injury"], quizTag:"ankle",
  report:"TECHNIQUE: Follow-up ankle X-ray 2 years post syndesmotic fixation.\nFINDINGS: Restored distal tibiofibular and medial clear spaces.\nIMPRESSION: Healed syndesmotic (high-ankle) injury post fixation.\nRECOMMENDATION: Compare acute films; stress views if pain persists.",
  teach:["High-ankle sprain: pain above joint, worse with external rotation/squeeze", "Normal acute X-ray does not exclude syndesmotic injury"],
},
{
  id:"r20", title:"Foot X-ray pair — compare views", topic:"Normal anatomy", diff:1,
  img:"images/Foot_xrays_pair.jpg", imgW:500, imgH:500,
  attr:"Foot x-rays — Hamelin de Guettelet, via Wikimedia Commons, Public domain",
  stem:"Foot radiograph for systematic practice: soft tissues → bones → joints → alignment → compare.",
  hotspots:[{x:40,y:45,label:"Midfoot / metatarsal region — run the systematic checklist",hint:"Central foot",expl:"Use this film for systematic practice: soft tissues → each cortex → joints → alignment (HVA/IMA/Meary) → compare views."},
{x:70,y:60,label:"Calcaneus & subtalar joint",hint:"Heel region",expl:"Check the calcaneus, subtalar joint and Bohler region — then the whole film, not just the painful area."}],
  ddx:["—"],
  pearls:["Fixed order every time prevents misses","Check the whole film, not just the painful area"],
  refs:["Systematic reading checklist"], quizTag:"system",
  report:"TECHNIQUE: Foot X-ray pair.\nFINDINGS: Systematic review - soft tissues, all cortices, joints, alignment.\nIMPRESSION: Practice film for systematic reading.\nRECOMMENDATION: Run the fixed checklist every time.",
  teach:["Fixed order prevents misses", "Check the whole film, not just the painful area"],
});
