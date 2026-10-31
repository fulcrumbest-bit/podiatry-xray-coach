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
  hotspots:[{"x": 29.8, "y": 61.1, "label": "Widened first–second metatarsal base interval, image-left foot", "hint": "Gap just below the blue arrow, between the 1st and 2nd metatarsal bases on the image-left foot", "expl": "On the affected (image-left) foot the C1–M2 / M1–M2 gap at the metatarsal bases is widened vs the other side — Lisfranc ligament disruption. Low-res photo: compare sides, don’t quote mm."},{"x": 27.4, "y": 62.8, "label": "Medial 2nd-metatarsal base / second-TMT alignment region", "hint": "Medial margin of the 2nd base at the TMT level", "expl": "The medial border of the 2nd MT base should align with the medial border of the intermediate (middle) cuneiform on a DP view — here it is offset. A dot alone doesn’t show this; check the cortical line on the full image."},{"x": 79.5, "y": 67.8, "label": "Contralateral first–second metatarsal base interval — compare", "hint": "Same proximal interval on the image-right foot", "expl": "The image-right foot is the comparison reference for this case — its interval is narrower. Always compare both feet on WB films."}],
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
  stem:"55-year-old male. The image is a composite: sagittal CT on TOP, lateral foot radiograph BELOW. Find the tarsometatarsal disruption on each panel.",
  hotspots:[{"x": 48.0, "y": 70.4, "label": "Dorsal TMT malalignment on the lower lateral radiograph", "hint": "Dorsal step at the metatarsal-base/cuneiform junction in the LOWER panel", "expl": "On the lateral film the plantar/dorsal alignment of the metatarsal bases vs the cuneiforms is disrupted — dorsal TMT subluxation, the lateral-view sign of a Lisfranc fracture-dislocation."},{"x": 52.7, "y": 28.9, "label": "TMT disruption on the upper sagittal CT panel", "hint": "Into the disrupted TMT region in the UPPER panel", "expl": "CT (top panel) delineates which TMT joints are disrupted and any avulsion fragments — used for surgical planning."}],
  ddx:["Charcot midfoot — usually multiple joints, neuropathic","Midfoot sprain"],
  pearls:["CT for surgical planning in fracture-dislocation","Check the whole film, not just the painful area"],
  refs:["Lisfranc injury imaging"], quizTag:"lisfranc",
  report:"TECHNIQUE: Lateral foot X-ray + sagittal CT.\nFINDINGS: Dorsal subluxation of metatarsal bases vs cuneiforms; comminution at TMT joints on CT.\nIMPRESSION: Lisfranc fracture-dislocation.\nRECOMMENDATION: CT for surgical planning; orthopaedic referral (likely ORIF).",
  teach:["CT defines comminution and articular involvement", "Fracture-dislocation is more unstable than ligament-only injury"],
},
{
  id:"r3", title:"Gout \u2014 advanced erosive arthropathy (both panels)", topic:"Inflammatory", diff:2,
  img:"images/Gichtfuss_im_Roentgen.jpg", imgW:556, imgH:600,
  attr:"Gichtfuss im Röntgen (gout foot X-ray) — Hellerhoff, via Wikimedia Commons, CC BY-SA 3.0",
  stem:"Foot X-rays of a patient with chronic gout. Both panels show established erosive arthropathy \u2014 NOT early disease with preserved joint space.",
  hotspots:[{"x": 39.0, "y": 34.3, "label": "Erosive change at the first-metatarsal head, left panel", "hint": "Destructive margin of the 1st MT head in the left panel", "expl": "Advanced gout: destructive/erosive change at the first-metatarsal head. In this small JPEG don’t demand a sharply resolved overhanging edge — look for the destructive margin."},{"x": 49.1, "y": 34.2, "label": "Periarticular soft-tissue prominence, first MTP", "hint": "Soft tissues medial to the 1st MTP, left panel", "expl": "Possible tophaceous soft-tissue prominence around the 1st MTP in the supplied gout context."},{"x": 42.4, "y": 27.2, "label": "First-MTP joint arthropathy", "hint": "The visibly abnormal 1st MTP articulation, left panel", "expl": "The 1st MTP joint is arthropathic — joint space is NOT preserved here; this is established, not early, gout."},{"x": 20.3, "y": 58.7, "label": "Midfoot/TMT arthropathy", "hint": "Abnormal lateral/central TMT region, left panel", "expl": "The midfoot/TMT region also shows destructive change — gout here is polyarticular, not a single clean erosion."}],
  ddx:["Hallux rigidus (OA) — joint space narrowing, dorsal osteophyte","Septic arthritis — rapid destruction, clinical sepsis"],
  pearls:["Established gout: erosions + tophaceous swelling, joint space NOT preserved", "Gout vs OA: gout = erosions with overhanging edges; OA = joint-space narrowing + dorsal osteophyte"],
  refs:["Gout imaging reviews"], quizTag:"oa",
  report:"TECHNIQUE: Foot X-rays (two panels).\nFINDINGS: Established erosive arthropathy \u2014 destructive change at the 1st MT head/1st MTP and midfoot TMT region; periarticular soft-tissue prominence. Joint space not preserved.\nIMPRESSION: Chronic gouty arthropathy.\nRECOMMENDATION: Serum urate and adherence to urate-lowering therapy; exclude septic arthritis clinically.",
  teach:["Don\u2019t call this early/preserved-space gout \u2014 it is advanced erosive disease", "Check distribution across forefoot AND midfoot"],
},
{
  id:"r4", title:"Calcaneal apophysis in a symptomatic adolescent", topic:"Paediatric", diff:1,
  img:"images/Sever_calcaneal_apophysis.jpg", imgW:789, imgH:751,
  compare:"images/X-ray_normal_right_foot_lateral.jpg", compareW:2638, compareH:1322,
  attr:"Sclerosis and fragmentation of the calcaneal apophysis (Sever's disease) — Mikael Häggström, via Wikimedia Commons, CC0",
  stem:"Adolescent athlete with heel pain worse with activity. Lateral calcaneal view \u2014 note the apophysis is an ossification centre; X-ray alone does not diagnose Sever disease.",
  hotspots:[{"x": 78.7, "y": 79.2, "label": "Calcaneal apophysis: sclerosis and segmentation", "hint": "Posterior-inferior apophyseal ossification band, just in front of the white arrows", "expl": "The apophyseal ossification centre looks sclerotic/segmented — a NONSPECIFIC finding that can occur in asymptomatic children. Sever disease is a CLINICAL diagnosis; the film is supportive at most."},{"x": 91.1, "y": 77.2, "label": "Posterior heel soft tissues — inspect clinically", "hint": "Soft tissues just behind the heel", "expl": "Use only as an anatomical review prompt — this image alone does not prove swelling or a specific diagnosis."},{"x": 50.8, "y": 36.0, "label": "Posterior subtalar joint region", "hint": "The dark cleft between talus and calcaneus", "expl": "Regional pointer to the subtalar joint — don’t call the whole joint normal from one point."}],
  ddx:["Calcaneal stress fracture — sclerotic band in the body, Böhler preserved","Normal apophyseal irregularity in adolescents"],
  pearls:["Sever disease is a CLINICAL diagnosis \u2014 apophyseal density/segmentation is nonspecific", "Treat: heel raises, activity modification, calf stretching"],
  refs:["Sever's disease reviews"], quizTag:"ossicles",
  report:"TECHNIQUE: Lateral calcaneus.\nFINDINGS: Sclerotic/segmented calcaneal apophysis (nonspecific). No definite swelling demonstrated on this film.\nIMPRESSION: Apophyseal appearance compatible with \u2014 but not diagnostic of \u2014 Sever\u2019s apophysitis; diagnosis is clinical.\nRECOMMENDATION: Heel raises, activity modification, calf stretching; correlate clinically.",
  teach:["Apophysis \u2260 growth plate \u2014 it is an ossification centre", "Radiographs alone do not diagnose Sever disease"],
},
{
  id:"r5", title:"Normal lateral foot — anatomy reference", topic:"Normal anatomy", diff:1,
  img:"images/X-ray_normal_right_foot_lateral.jpg", imgW:2638, imgH:1322,
  attr:"X-ray of normal right foot, lateral projection — Mikael Häggström, M.D., via Wikimedia Commons, CC0",
  stem:"Use this as your normal reference. Identify the calcaneus, talus, navicular and 1st metatarsal; note Meary's line and calcaneal pitch.",
  hotspots:[{"x": 82.6, "y": 72.6, "label": "Calcaneal body", "hint": "Centrally within the heel bone on the right (heel is image-right)", "expl": "Heel bone. On a lateral view, Böhler angle (normal 20–40°) is measured on the superior calcaneal contour for compression fractures."},{"x": 76.5, "y": 36.8, "label": "Talar dome: superior articular surface", "hint": "Convex superior talar cortex just below the ankle joint", "expl": "The talar dome should be smooth — check for osteochondral lesions/AVN."},{"x": 61.8, "y": 62.4, "label": "Navicular", "hint": "Anterior to the talar head, posterior to the cuneiforms", "expl": "Midfoot bone. (The clinical “N spot” is a dorsal-navicular palpation site — a bone-centre dot on X-ray is not that exam point.)"},{"x": 45.1, "y": 66.2, "label": "First-metatarsal base region", "hint": "Just distal to the 1st TMT joint in the proximal 1st MT", "expl": "Proximal 1st MT. Meary’s angle needs two separate axes (talus, 1st MT) — a single dot can’t represent it; use the angle tool on a WB lateral."}],
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
  hotspots:[{"x": 60.0, "y": 27.5, "label": "Upper projection: metatarsal shafts", "hint": "Metatarsal shafts of the upper panel", "expl": "Upper panel (AP/DP): assess metatarsal alignment. Low-res/overexposed — regional orientation only, not for mm-precise Lisfranc measurement."},{"x": 58.0, "y": 76.5, "label": "Lower projection: metatarsal shafts", "hint": "Visible shaft region of the lower (oblique) panel", "expl": "Lower panel (oblique): complements the DP view for midfoot/TMT — don’t claim a clearly open Lisfranc interval from this small image."}],
  ddx:["—"],
  pearls:["Systematic: soft tissues → bones → joints → alignment → measurements → compare"],
  refs:["Systematic foot X-ray reading"], quizTag:"system",
  report:"TECHNIQUE: Foot X-ray AP + oblique views.\nFINDINGS: Normal bony alignment; metatarsals, TMT joints and tarsals systematically reviewed; no acute abnormality.\nIMPRESSION: Normal foot series (two views).\nRECOMMENDATION: Use the systematic checklist on every film.",
  teach:["Two views complement each other - AP for alignment, oblique for TMT joints", "A normal film still needs a systematic read"],
},
{
  id:"r7", title:"Lisfranc fracture \u2014 left foot", topic:"Trauma", diff:2,
  img:"images/LisFranc.png", imgW:384, imgH:621,
  attr:"LisFranc.png — James Heilman, MD, via Wikimedia Commons, CC BY-SA 4.0",
  stem:"DP foot radiograph of a LEFT-foot Lisfranc (TMT) fracture. The 2nd MT base is the \u2018keystone\u2019 held by the Lisfranc ligament (C1\u2013M2).",
  hotspots:[{"x": 56.0, "y": 64.7, "label": "Second-TMT malalignment / injury region", "hint": "Junction of the 2nd MT base and intermediate cuneiform", "expl": "Disruption at the 2nd TMT joint — the hallmark of Lisfranc injury. (To trace the whole TMT line, follow all five rays, not one shaft point.)"},{"x": 55.5, "y": 60.2, "label": "Injured second-metatarsal base", "hint": "Proximal 2nd MT just distal to the disrupted TMT joint", "expl": "The 2nd MT base sits in a mortise of the three cuneiforms and is held by the Lisfranc ligament from the medial cuneiform (C1–M2). Displacement here = Lisfranc injury."}],
  ddx:["—"],
  pearls:["Lisfranc ligament joins medial cuneiform (C1) to the 2nd MT base (M2)", "The TMT complex also includes the cuboid\u2013M4/M5 articulations"],
  refs:["Lisfranc anatomy"], quizTag:"lisfranc",
  report:"TECHNIQUE: DP foot radiograph, left foot.\nFINDINGS: Disruption/malalignment at the 2nd TMT (Lisfranc) joint \u2014 2nd MT base loses alignment with the intermediate cuneiform.\nIMPRESSION: Lisfranc (tarsometatarsal) injury, left foot.\nRECOMMENDATION: WB comparison views, CT if equivocal; orthopaedic referral if unstable.",
  teach:["2nd MT base = keystone; displacement at 2nd TMT = Lisfranc injury", "Most commonly missed midfoot fracture"],
}
];
REAL_CASES.push({
  id:"r8", title:"Bimalleolar ankle fracture", topic:"Trauma", diff:2,
  img:"images/Bimalleolar_fracture.jpg", imgW:455, imgH:469,
  attr:"Bimalleolar fracture legend — Steven Fruitsmaak, via Wikimedia Commons, CC BY-SA 3.0",
  stem:"Adult ankle injury, AP view. Identify both malleolar fracture lines.",
  hotspots:[{"x": 51.4, "y": 27.3, "label": "Distal fibular fracture", "hint": "Oblique lucent disruption through the distal fibula (image-left), above the big white arrowhead", "expl": "The fibula is on the image LEFT. The visible line is oblique/irregular on this projection — don’t call it transverse. The white arrowheads are not the fracture line."},{"x": 74.1, "y": 38.6, "label": "Medial malleolar fracture", "hint": "Separation between distal tibia and the medial malleolar fragment", "expl": "Fracture of the medial malleolus — with the fibular fracture this is a bimalleolar ankle fracture."},{"x": 67.7, "y": 42.9, "label": "Medial tibiotalar incongruity", "hint": "Abnormal interval between medial talus and malleolar fragment", "expl": "Describe incongruity qualitatively — one uncalibrated rotated image can’t give a valid medial-clear-space mm measurement."}],
  ddx:["Unimalleolar fracture with deltoid sprain","Maisonneuve fracture — check proximal fibula and image the leg"],
  pearls:["Fibula is image-left on this AP; arrowheads \u2260 fracture lines", "Assess stability with medial clear space on a proper mortise (> 4 mm = deltoid disruption), not from one rotated film"],
  refs:["Ankle fracture classification"], quizTag:"ankle",
  report:"TECHNIQUE: AP ankle.\nFINDINGS: Fracture lines through both lateral and medial malleoli.\nIMPRESSION: Bimalleolar ankle fracture.\nRECOMMENDATION: Assess stability (medial clear space); orthopaedic referral; check proximal fibula (Maisonneuve).",
  teach:["Bimalleolar = both malleoli; check medial clear space on mortise", "Don\u2019t derive mm measurements from an uncalibrated photo"],
},
{
  id:"r9", title:"AP ankle \u2014 anatomical regions (no fracture asserted)", topic:"Trauma", diff:2,
  img:"images/Left_ankle_AP.jpg", imgW:1306, imgH:2330,
  attr:"Left ankle x-ray, adult male (diagnostic medical image) \u2014 via Wikimedia Commons, public domain",
  stem:"AP ankle radiograph used for anatomical orientation only. The advertised Weber-B fracture/widening is NOT verified in this image \u2014 use a verified fracture case for that teaching.",
  hotspots:[{"x": 72.9, "y": 60.3, "label": "Distal fibula / lateral malleolus — anatomical region", "hint": "Outer distal fibula on this AP", "expl": "Anatomical pointer only — do not label this a ‘Weber B fracture’; Weber describes fracture level and isn’t automatically unstable."},{"x": 47.1, "y": 59.8, "label": "Medial clear-space region — anatomical location", "hint": "Between medial talus and medial malleolus", "expl": "Point of the medial clear space. Measure it properly on a calibrated mortise/stress view (normal ≤ 4 mm, ≤ superior clear space) — not widened here as far as this image shows."},{"x": 67.4, "y": 53.0, "label": "Distal tibiofibular interval — anatomical region", "hint": "Between distal tibia and fibula", "expl": "Anatomical pointer to the syndesmosis region. Tibiofibular clear space is measured 1 cm above the plafond on a calibrated film (normal < 6 mm); this photo has no physical scale."}],
  ddx:["Isolated lateral ligament sprain — no fracture, no widening","Syndesmotic injury — also widened tibiofibular clear space"],
  pearls:["Medial clear space normal \u2264 4 mm on mortise and \u2264 superior clear space", "Tibiofibular clear space < 6 mm at 1 cm above plafond; overlap > 1 mm on mortise"],
  refs:["Ankle instability imaging"], quizTag:"ankle",
  report:"TECHNIQUE: AP ankle.\nFINDINGS: Anatomical orientation study \u2014 distal fibula, medial clear-space region, distal tibiofibular interval identified. No fracture or widening asserted from this image.\nIMPRESSION: Normal-appearing AP ankle (anatomy teaching).\nRECOMMENDATION: For fracture/stability teaching use a verified fracture case + calibrated mortise/stress views.",
  teach:["Measure clear spaces on a calibrated mortise/stress study, not a photo", "Weber B = fracture level, not automatic instability"],
},
{
  id:"r10", title:"Normal lateral ankle — reference", topic:"Normal anatomy", diff:1,
  img:"images/Left_ankle_lat.jpg", imgW:1318, imgH:2330,
  attr:"Left ankle x-ray, adult male, side view (diagnostic medical image) \u2014 via Wikimedia Commons, public domain",
  stem:"Normal lateral ankle. Identify the talar dome, posterior talus (os trigonum region) and calcaneus.",
  hotspots:[{"x": 49.3, "y": 60.5, "label": "Distal fibula projected over posterior ankle", "hint": "Overlapping distal-fibular region posterior to the talar body", "expl": "On a lateral projection the fibula overlaps the posterior ankle — a poor view for isolated malleolar outlines; use the AP image for a scored fibular task."},{"x": 61.3, "y": 58.3, "label": "Tibiotalar joint space", "hint": "Dark joint cleft between tibial plafond and superior talar dome", "expl": "The ankle joint line on the lateral."},{"x": 41.0, "y": 74.5, "label": "Calcaneal body", "hint": "Centrally inside the heel bone (heel is image-left here)", "expl": "Centre of the calcaneus. Böhler/Gissane need three landmarks on the superior contour — not a centre-of-bone dot."}],
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
  hotspots:[{"x": 64.9, "y": 56.4, "label": "Intersection of the drawn Böhler lines / facet-apex region", "hint": "Crossing of the two baked-in white lines", "expl": "The white lines are burned into the image and partly obscure cortex — this registers the teaching construction, not a validated patient measurement. Böhler displayed here is the ACUTE angle (supplement of the large internal A–B–C angle)."},{"x": 42.2, "y": 62.7, "label": "Anterior-process endpoint of the drawn Böhler construction", "hint": "Anteroinferior white line at the anterior calcaneal process", "expl": "Endpoint A of the construction (anterior process highest point)."},{"x": 92.8, "y": 60.0, "label": "Posterior-tuberosity endpoint of the drawn Böhler construction", "hint": "Posterior-superior tuberosity along the second white line", "expl": "Endpoint C of the construction (posterior tuberosity highest point). For learner measurement use a CLEAN lateral — not this annotated raster."}],
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
  stem:"Lateral calcaneus with a Gissane-angle DIAGRAM (dashed construction lines baked in). Note: this drawing measures ~99\u00b0, so it is not a normal 120\u2013145\u00b0 example \u2014 use a validated clean image for measurement teaching.",
  hotspots:[{"x": 57.7, "y": 65.5, "label": "Gissane vertex at the superior calcaneal angle", "hint": "Lower V-shaped meeting point of the dashed lines", "expl": "The vertex is the angular change in the superior calcaneal contour (calcaneal sulcus), NOT the talar dome. The drawn rays here measure ~99°, inconsistent with a normal 120–145° example — treat as a diagram-registration exercise; don’t infer pathology from the mismatch."},{"x": 73.6, "y": 60.0, "label": "Anterior-process limb of the Gissane construction", "hint": "Right-hand dashed limb from the vertex toward the anterior process (image right)", "expl": "Limb toward the anterior process."},{"x": 50.1, "y": 56.5, "label": "Posterior-facet limb of the Gissane construction", "hint": "Left-hand dashed limb from the posterior facet toward the vertex", "expl": "Limb toward the posterior facet."}],
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
  stem:"WB lateral foot with calcaneal-pitch DIAGRAM: green inferior-calcaneal line, blue bony reference, separate horizontal ground line. Talus is cropped \u2014 no Meary task on this asset. Pitch = angle between inferior calcaneal line and ground.",
  hotspots:[{"x": 90.4, "y": 73.8, "label": "Drawn calcaneal/reference-line intersection", "hint": "Rightmost black-ringed green/blue intersection (heel is image-right)", "expl": "This is the intersection of the drawn green inferior-calcaneal line and blue reference line — NOT the floor-line intersection. The orange arc is not drawn on the horizontal ground line."},{"x": 77.6, "y": 62.3, "label": "Inferior calcaneal reference line", "hint": "On the green line between anterior inferior calcaneus and posterior heel", "expl": "The inferior-border line used for pitch."},{"x": 51.6, "y": 90.5, "label": "Horizontal supporting-surface (ground) reference", "hint": "Middle of the bottom horizontal lavender line", "expl": "The ground line defines floor direction for pitch. Talus is cropped in this asset — Meary angle can’t be assessed here."}],
  ddx:["—"],
  pearls:["Pair with Meary's angle for arch assessment","Always measure on weight-bearing films"],
  refs:["Foot alignment angles (JAPMA)"], quizTag:"hallux",
  report:"TECHNIQUE: WB lateral foot.\nFINDINGS: Calcaneal pitch measured on WB lateral - normal ~18-30 deg.\nIMPRESSION: Normal calcaneal pitch.\nRECOMMENDATION: < 17-18 deg suggests pes planus; pair with Meary's angle.",
  teach:["Only valid on weight-bearing films", "Arch assessment = calcaneal pitch + Meary + Kite angle"],
},
{
  id:"r14", title:"Accessory-bone atlas \u2014 DP schematic over a radiograph", topic:"Pitfalls", diff:2,
  img:"images/Accessory_sesamoid_DP.jpg", imgW:1219, imgH:2500,
  attr:"Accessory and sesamoid bones of the foot, dorsoplantar projection — Mikael Häggström, via Wikimedia Commons, CC0",
  stem:"Schematic LOCATION atlas (painted coloured shapes with prevalence coding) \u2014 not one patient showing every variant. Do not infer cortication or exclude fractures from the painted shapes.",
  hotspots:[{"x": 70.6, "y": 79.6, "label": "Os peroneum — schematic location", "hint": "Small red shape beside the lateral midfoot (not the word ‘Peroneum’)", "expl": "Painted example location of the os peroneum (in peroneus longus, near cuboid). Schematic landmark, not a proven ossicle in this patient."},{"x": 23.9, "y": 85.0, "label": "Accessory navicular, type 1 — schematic location", "hint": "Small yellow-outlined oval medial to the navicular", "expl": "Type 1 = small sesamoid in the distal posterior tibial tendon. Type 2 is a separate larger shape — alternative variants."},{"x": 23.1, "y": 36.2, "label": "Medial (tibial) hallux sesamoid — schematic location", "hint": "Image-left peach shape beneath the 1st MT head", "expl": "Paired sesamoids under the 1st MTP — split into two targets; the lateral partner is the image-right peach shape."},{"x": 33.4, "y": 36.8, "label": "Lateral (fibular) hallux sesamoid — schematic location", "hint": "Image-right peach shape at the 1st MT head", "expl": "Lateral partner of the paired hallux sesamoids."},{"x": 45.1, "y": 59.8, "label": "Os intermetatarseum — schematic location", "hint": "Small yellow oval between proximal 1st and 2nd MTs", "expl": "Painted example location."},{"x": 75.3, "y": 72.1, "label": "Os vesalianum — schematic location", "hint": "Small cyan shape adjacent to the 5th MT base", "expl": "Painted example location."}],
  ddx:["Avulsion fractures — jagged lucent lines, non-corticated margins"],
  pearls:["Rule of thumb: corticated + round = variant; jagged + lucent = fracture","Compare with the other foot; old films help"],
  refs:["Accessory ossicles (AJR 2019)"], quizTag:"ossicles",
  report:"TECHNIQUE: Schematic atlas over a DP foot radiograph.\nFINDINGS: Painted schematic locations of accessory bones/sesamoids (prevalence graphics, not measured findings in this individual).\nIMPRESSION: Accessory-bone location atlas (schematic).\nRECOMMENDATION: On real films, corticated+round = variant; jagged+lucent = fracture \u2014 compare sides.",
  teach:["Corticated + round = variant; jagged + lucent = fracture", "a notable minority of ossicles get misread as fractures — always check cortication and compare sides"],
},
{
  id:"r15", title:"Accessory-bone atlas \u2014 lateral schematic", topic:"Pitfalls", diff:2,
  img:"images/Accessory_sesamoid_lat.jpg", imgW:2500, imgH:1061,
  attr:"Accessory and sesamoid bones of the foot, lateral projection — Mikael Häggström, via Wikimedia Commons, CC0",
  stem:"Schematic LOCATION atlas (painted shapes) over a lateral foot \u2014 not proven ossicles in this patient.",
  hotspots:[{"x": 83.6, "y": 46.4, "label": "Os trigonum — schematic location", "hint": "Red triangular symbol immediately posterior to the talus (image right)", "expl": "Painted example of os trigonum (unfused posterior talar process). Shepherd fracture involves the POSTEROLATERAL tubercle of the posterior process — distinct from a lateral-process (‘snowboarder’s’) fracture."},{"x": 67.6, "y": 85.4, "label": "Os peroneum — schematic location", "hint": "Small red oval plantar to the cuboid / anterior calcaneal region", "expl": "Painted example location (peroneus longus sesamoid)."},{"x": 67.2, "y": 63.2, "label": "Os calcaneus secundarius — schematic location", "hint": "Magenta symbol at the anterior calcaneal region", "expl": "Painted example location — anterior-superior calcaneus."}],
  ddx:["Shepherd's fracture (lateral talar process) — jagged, acute","Anterior process calcaneal fracture — non-corticated"],
  pearls:["Same rule on lateral: corticated = variant","MRI if symptomatic ossicle (oedema at interface)"],
  refs:["Accessory ossicles (AJR 2019)"], quizTag:"ossicles",
  report:"TECHNIQUE: Schematic atlas over a lateral foot.\nFINDINGS: Painted schematic locations of accessory ossicles.\nIMPRESSION: Accessory-bone location atlas (schematic, lateral).\nRECOMMENDATION: On real films use the cortication rule; Shepherd = posterolateral tubercle of the posterior talar process.",
  teach:["Same cortication rule on lateral views", "MRI if a symptomatic ossicle (interface oedema)"],
},
{
  id:"r16", title:"Normal oblique foot — Lisfranc interval", topic:"Normal anatomy", diff:1,
  img:"images/Normal_foot_oblique.jpg", imgW:1077, imgH:2029,
  attr:"X-ray of normal right foot by oblique projection — Mikael Häggström, via Wikimedia Commons, CC0",
  stem:"Normal oblique view — the best view for the tarsometatarsal (Lisfranc) joints. Check alignment here.",
  hotspots:[{"x": 35.8, "y": 70.9, "label": "Medial cuneiform–2nd-metatarsal-base (C1–M2) region", "hint": "C1–M2 interface in the proximal third of the foot", "expl": "Regional orientation on the oblique. The DP view is the principal view for M2–C2 alignment and C1–M2 diastasis; oblique complements it (especially lateral TMT joints)."},{"x": 41.7, "y": 68.3, "label": "Second-metatarsal base", "hint": "Centrally in the 2nd MT base, just distal to its TMT joint", "expl": "Proximal 2nd MT — check M2–C2 cortical alignment on the DP view separately."},{"x": 75.3, "y": 77.8, "label": "Fifth-metatarsal tuberosity — avulsion (zone-1) region", "hint": "Prominent lateral 5th base", "expl": "The tuberosity is the zone-1 AVULSION site; a Jones fracture is more distal at the metaphyseal–diaphyseal junction. Don’t conflate tuberosity, Jones zone and cuboid."},{"x": 58.0, "y": 85.8, "label": "Cuboid", "hint": "Lateral tarsal bone proximal to the 4th/5th TMT joints", "expl": "Lateral midfoot tarsal."},{"x": 29.1, "y": 85.0, "label": "Navicular", "hint": "Medial tarsal bone proximal to the cuneiforms, anterior to talus", "expl": "Medial midfoot tarsal."}],
  ddx:["—"],
  pearls:["Oblique view opens the TMT joints — use it for suspected Lisfranc","WB oblique stress views can reveal instability"],
  refs:["Foot views guide"], quizTag:"lisfranc",
  report:"TECHNIQUE: Oblique foot.\nFINDINGS: Normal tarsometatarsal alignment; C1–M2 gap < 2 mm.\nIMPRESSION: Normal oblique foot - best view for Lisfranc joints.\nRECOMMENDATION: Use oblique + WB views for suspected Lisfranc.",
  teach:["Oblique opens the TMT joints", "WB oblique stress views can reveal instability"],
},
{
  id:"r17", title:"Single DP foot projection (Dispe)", topic:"Normal anatomy", diff:1,
  img:"images/Ankle_foot_DP_Dispe.jpg", imgW:1199, imgH:1980,
  attr:"Radiografia tibiotarsica, proiezione dorsoplantare — Dispe, via Wikimedia Commons, CC BY-SA 4.0",
  stem:"One DP foot image (toes top, hindfoot bottom) \u2014 NOT a three-panel ankle montage. Use for foot anatomy/Lisfranc region on DP; use r18 for lateral ankle+foot.",
  hotspots:[{"x": 45.1, "y": 47.7, "label": "C1–M2 / Lisfranc region on the DP foot", "hint": "Proximal 1st/2nd metatarsal region (not the superimposed hindfoot)", "expl": "DP view is the principal view for C1–M2 diastasis and M2–C2 alignment."},{"x": 46.0, "y": 68.1, "label": "Talar head on DP foot", "hint": "Talar head region", "expl": "Anatomy target only — not an ankle-mortise substitute."},{"x": 42.1, "y": 60.2, "label": "Navicular on DP foot", "hint": "Centrally in the navicular, anterior to the talar head", "expl": "Anatomy target."}],
  ddx:["—"],
  pearls:["Three views minimum for ankle trauma: AP, mortise, lateral","Check soft tissues for swelling/gas first"],
  refs:["Ankle series guide"], quizTag:"views",
  report:"TECHNIQUE: Single DP foot projection.\nFINDINGS: DP anatomy reviewed \u2014 C1\u2013M2/Lisfranc region, talar head, navicular identified. No ankle mortise assessable on this projection.\nIMPRESSION: DP foot anatomy orientation.\nRECOMMENDATION: For ankle/mortise assessment use a dedicated AP/mortise ankle image.",
  teach:["Medial clear space ≤ 4 mm and ≤ superior clear space", "Three views minimum for ankle trauma: AP, mortise, lateral"],
},
{
  id:"r18", title:"Lateral ankle + foot — Dispe series", topic:"Normal anatomy", diff:1,
  img:"images/Ankle_foot_lat_Dispe.jpg", imgW:2336, imgH:2476,
  attr:"Radiografia tibiotarsica, proiezione laterale — Dispe, via Wikimedia Commons, CC BY-SA 4.0",
  stem:"Lateral ankle+foot. Identify talar dome, calcaneus, navicular and midfoot. Use for Böhler/Gissane and arch angles.",
  hotspots:[{"x": 57.8, "y": 43.7, "label": "Tibiotalar joint space", "hint": "Dark ankle joint cleft between tibial plafond and talar dome", "expl": "The ankle joint line on this lateral (heel image-right, toes image-left)."},{"x": 65.0, "y": 49.5, "label": "Posterior talar process / os-trigonum region", "hint": "Posterior talar process just above the posterior calcaneus", "expl": "Regional pointer — does not assert a separate os trigonum is visible."},{"x": 64.4, "y": 58.6, "label": "Calcaneal body", "hint": "Centrally in the heel bone", "expl": "Böhler/Gissane need separate superior-contour landmarks, not a centre-of-bone dot."},{"x": 49.9, "y": 66.5, "label": "Fifth-metatarsal tuberosity region", "hint": "Proximal 5th MT prominence anterior to the cuboid", "expl": "Zone-1 avulsion site. Jones zone is more distal — use DP/oblique to distinguish zones."},{"x": 58.1, "y": 45.0, "label": "Talar dome", "hint": "Convex superior talar articular surface below the joint", "expl": "Anatomy target."},{"x": 48.1, "y": 57.3, "label": "Navicular", "hint": "Bone immediately anterior to the talar head", "expl": "Anatomy target."}],
  ddx:["—"],
  pearls:["Lateral view is where you measure Böhler, Gissane, calcaneal pitch, Meary","WB lateral for functional angles"],
  refs:["Lateral foot anatomy"], quizTag:"views",
  report:"TECHNIQUE: Lateral ankle+foot.\nFINDINGS: Normal talar dome, calcaneus, navicular, midfoot alignment.\nIMPRESSION: Normal lateral ankle+foot.\nRECOMMENDATION: This is the view for Bohler/Gissane/calcaneal pitch/Meary.",
  teach:["Lateral view carries all the angle measurements", "WB lateral for functional assessment"],
},
{
  id:"r19", title:"WITHDRAWN from ankle training \u2014 forefoot syndesmosis-procedure image", topic:"Withdrawn", diff:2,
  img:"images/Syndesmosis_postop.jpg", imgW:356, imgH:368,
  attr:"2 years after syndesmosis surgery — Personalo, via Wikimedia Commons, CC BY-SA 3.0",
  stem:"This bilateral forefoot image is linked to a forefoot \u2018syndesmosis procedure\u2019 (hallux-valgus context), NOT distal tibiofibular ankle fixation. Removed from ankle-trauma training until a verified ankle-fixation image is substituted.",
  hotspots:[],
  ddx:["Isolated lateral ligament sprain — normal syndesmosis","Maisonneuve fracture — proximal fibula fracture with syndesmotic disruption"],
  pearls:["Verify image provenance before teaching a diagnosis from it"],
  refs:["Syndesmotic injury"], quizTag:"system",
  report:"WITHDRAWN \u2014 this image is a bilateral forefoot study, not an ankle syndesmotic-fixation film. No ankle mortise/medial clear space/syndesmosis target is valid here.",
  teach:["This asset is withdrawn from ankle training"],
},
{
  id:"r20", title:"Single lateral foot projection \u2014 systematic review", topic:"Normal anatomy", diff:1,
  img:"images/Foot_xrays_pair.jpg", imgW:500, imgH:500,
  attr:"Foot x-rays — Hamelin de Guettelet, via Wikimedia Commons, Public domain",
  stem:"A single lateral foot radiograph (despite the filename) \u2014 500 px, so not for subtle-lesion scoring. HVA/IMA need a DP/AP forefoot view \u2014 not this lateral.",
  hotspots:[{"x": 53.2, "y": 60.0, "label": "Midfoot / TMT region on lateral projection", "hint": "Proximal metatarsal–cuneiform region", "expl": "Regional checklist prompt: soft tissues → bones → joints → alignment → compare."},{"x": 79.2, "y": 68.8, "label": "Calcaneal body", "hint": "Centrally in the heel bone", "expl": "Heel bone on the lateral."},{"x": 73.8, "y": 61.4, "label": "Posterior subtalar joint region", "hint": "Cleft between talus and calcaneus, above the calcaneal body", "expl": "Separate pointer for the subtalar joint."}],
  ddx:["—"],
  pearls:["Fixed order every time prevents misses","Check the whole film, not just the painful area"],
  refs:["Systematic reading checklist"], quizTag:"system",
  report:"TECHNIQUE: Foot X-ray pair.\nFINDINGS: Systematic review - soft tissues, all cortices, joints, alignment.\nIMPRESSION: Practice film for systematic reading.\nRECOMMENDATION: Run the fixed checklist every time.",
  teach:["Fixed order prevents misses", "Check the whole film, not just the painful area"],
});
