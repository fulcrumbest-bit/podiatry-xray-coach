/* ============================================================
   CONTENT — modules, quiz bank, and 20 real-image cases.
   Images are embedded as data URIs in IMAGE_DATA (see below);
   case.img is resolved to the data URI at boot.
   Hotspot coords are % of image width/height.
   ============================================================ */

const MODULES=[
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
 <div class="callout warn"><b>Classic misses:</b> Lisfranc (1st–2nd MT base widening on WB films), syndesmotic injury (medial clear space &gt; 6 mm), navicular stress fracture (“N spot”), talar lateral process fracture, ossicles mistaken for fractures. A normal X-ray does not exclude ligament injury or early osteomyelitis.</div>
 <h3>Structured reporting</h3>
 <p>Model your report: <b>technique</b> (views, WB/NWB) → <b>findings</b> (systematic, descriptive, no diagnosis words) → <b>impression</b> (numbered, most important first) → <b>recommendations</b>. Never put a diagnosis in the impression that is not in the findings.</p>`,
 checklist:["I use the same fixed order every time","I check soft tissues first","I measure alignment, not just look","I compare with the other side / prior films","I write findings before impression"]},
{id:"m3",title:"3 · Key angles & measurements",time:"12 min",tag:"Intermediate",
 summary:"The measurements podiatrists quote: HVA, IMA, Meary, calcaneal pitch, Böhler, Gissane, Kite, medial clear space.",
 html:`<h2>Measurements you must know</h2>
 <table class="ref"><tr><th>Measurement</th><th>View</th><th>Normal</th><th>Used for</th></tr>
 <tr><td>Hallux valgus angle (HVA)</td><td>WB AP/DP</td><td>&lt; 15°</td><td>Bunion severity: mild 15–25°, moderate 25–40°, severe &gt; 40°</td></tr>
 <tr><td>Intermetatarsal angle (IMA 1–2)</td><td>WB AP/DP</td><td>&lt; 9°</td><td>Hallux valgus, metatarsus primus varus</td></tr>
 <tr><td>Meary's angle (talo–1st MT)</td><td>WB lateral</td><td>≈ 0°</td><td>Pes planus (&gt; 4° convex down) vs cavus</td></tr>
 <tr><td>Calcaneal pitch</td><td>WB lateral</td><td>18–25°</td><td>Arch height; reduced in flatfoot</td></tr>
 <tr><td>Böhler angle</td><td>Lateral calcaneus</td><td>25–40°</td><td>Calcaneal compression fracture flattens it (&lt; 20°)</td></tr>
 <tr><td>Gissane (critical) angle</td><td>Lateral calcaneus</td><td>120–145°</td><td>Increased with posterior facet depression</td></tr>
 <tr><td>Medial clear space</td><td>Mortise</td><td>≤ 6 mm, = superior clear space</td><td>Deltoid/syndesmotic injury — instability</td></tr></table>
 <div class="callout"><b>Technique matters:</b> alignment angles are only valid on <b>weight-bearing</b> films. Rotation changes the measurement — always use the standardised view.</div>`,
 checklist:["I can name normal ranges for HVA, IMA, Meary, calcaneal pitch, Böhler, Gissane, medial clear space","I know which view each measurement needs","I know these require WB films","I know the instability thresholds (medial clear space &gt; 6 mm)"]},
{id:"m4",title:"4 · When to image: Ottawa rules & requesting",time:"10 min",tag:"Applied",
 summary:"Clinical decision rules that reduce unnecessary radiography, and how podiatrists request imaging in Australia.",
 html:`<h2>Ottawa ankle rules (sensitivity ~100%)</h2>
 <ul class="tight"><li><b>Ankle X-ray</b> only if malleolar-zone pain <b>AND</b> any of: bony tenderness distal 6 cm posterior edge/tip of lateral malleolus; same for medial malleolus; inability to bear weight 4 steps immediately and in clinic.</li>
 <li><b>Foot X-ray</b> only if midfoot-zone pain <b>AND</b> any of: tenderness at 5th MT base; tenderness at navicular; inability to bear weight 4 steps.</li>
 <li>Validated in children &gt; 6 (98.5% sensitivity). Exclusions: pregnancy, intoxication, head injury, injuries &gt; 10 days old; calcaneal body not covered by the midfoot rule.</li></ul>
 <h2>Ottawa knee rules</h2>
 <p>Knee X-ray after acute injury if any of: age ≥ 55; isolated patellar tenderness; fibular head tenderness; cannot flex to 90°; cannot bear weight 4 steps.</p>
 <h2>Requesting imaging (Australia)</h2>
 <ul class="tight"><li>Registered podiatrists may request Medicare-rebatable plain radiographs: <b>57521</b> (foot/ankle/leg/femur), <b>57523</b> (knee), <b>57527</b> (combined regions), EOS lower-limb studies, limited MSK ultrasound (55834/55835).</li>
 <li>Write a clear clinical question on the request (“? Lisfranc injury — WB AP/oblique/lateral foot”) — it changes the views acquired.</li>
 <li>Podiatrist CT/MRI referrals are generally <b>not</b> MBS-rebatable; refer via a medical practitioner for advanced imaging.</li></ul>`,
 checklist:["I can apply the Ottawa ankle and foot rules","I know the common exclusions","I can write a useful imaging request with a clinical question","I know which MBS items podiatrists can request"]},
{id:"m5",title:"5 · Pitfalls: normal variants & accessory ossicles",time:"10 min",tag:"Intermediate",
 summary:"The classic trap: mistaking a normal ossicle for a fracture. ~2.7% of accessory ossicles are misdiagnosed as avulsion fractures.",
 html:`<h2>Know these before you call a fracture</h2>
 <table class="ref"><tr><th>Variant</th><th>Where</th><th>Clue it is normal</th><th>Common confusion</th></tr>
 <tr><td>Os trigonum (7–10%)</td><td>Posterior talus, lateral</td><td>Oval, fully corticated</td><td>Shepherd's fracture (lateral talar process)</td></tr>
 <tr><td>Accessory navicular (4–14%)</td><td>Medial navicular, DP/oblique</td><td>Round, corticated, often bilateral</td><td>Navicular tuberosity avulsion</td></tr>
 <tr><td>Os peroneum (5–11%)</td><td>In peroneus longus tendon, lateral foot</td><td>Corticated; bipartite 30%, bilateral 60%</td><td>Cuboid fracture</td></tr>
 <tr><td>Bipartite sesamoid (10–30%)</td><td>Medial hallux sesamoid</td><td>Two parts, <b>both</b> corticated, bilateral</td><td>Sesamoid fracture</td></tr>
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
];

const QUIZ=[
{q:"A 28-year-old twists her ankle playing netball: midfoot pain, no malleolar pain, tender at the 5th metatarsal base, can bear weight 4 steps. Ottawa foot rules say:",opts:["No X-ray needed","Foot X-ray series","Ankle X-ray series only","Knee X-ray"],a:1,tag:"ottawa",expl:"Midfoot pain + 5th-MT-base tenderness = foot X-ray. Weight-bearing ability does not override tenderness."},
{q:"Ottawa ankle rules are best described as:",opts:["High sensitivity, moderate specificity — a rule-out tool","High specificity, low sensitivity","100% sensitive and 100% specific","Only valid over 55"],a:0,tag:"ottawa",expl:"~100% sensitivity, modest specificity; cuts imaging 30–40%. Validated in children > 6."},
{q:"Which MBS item covers a podiatrist-requested X-ray of foot/ankle/leg/femur?",opts:["57521","57523","55834","63311"],a:0,tag:"mbs",expl:"57521 = foot/ankle/femur/leg; 57523 = knee; 57527 = combined; 55834/55835 = ultrasound; 63311 = MRI (not podiatrist-rebatable)."},
{q:"Transverse fracture at the metaphyseal–diaphyseal junction of the 5th MT base =",opts:["Jones fracture","Avulsion (pseudo-Jones)","Dancer's fracture","Stress fracture"],a:0,tag:"trauma",expl:"Jones = junction, intra-articular, non-union risk. Avulsion = tuberosity, extra-articular."},
{q:"5th-MT tuberosity avulsion is caused by pull of:",opts:["Peroneus brevis + plantar aponeurosis","Extensor digitorum longus","Flexor hallucis longus","Achilles"],a:0,tag:"trauma",expl:"Peroneus brevis inserts on the tuberosity; plantar aponeurosis also attaches."},
{q:"WB AP foot film: widening > 2 mm between 1st and 2nd MT bases suggests:",opts:["Lisfranc ligament injury","Normal variant","Hallux valgus","Pes cavus"],a:0,tag:"lisfranc",expl:"Lisfranc ligament connects medial cuneiform to 2nd MT base. Also look for the fleck sign and cuneiform–2nd MT malalignment."},
{q:"The “fleck sign” in Lisfranc injury is:",opts:["Avulsion fragment at the Lisfranc interval","Medial malleolus fracture","A gout sign","Soft-tissue gas"],a:0,tag:"lisfranc",expl:"Pathognomonic ossific fleck between medial cuneiform and 2nd MT base."},
{q:"Normal HVA on a WB AP film is:",opts:["< 15°","< 30°","< 45°","< 9°"],a:0,tag:"hallux",expl:"HVA < 15° normal; IMA < 9° normal. Mild 15–25°, moderate 25–40°, severe > 40°."},
{q:"Hallux rigidus on X-ray typically shows:",opts:["Dorsal osteophyte + 1st MTP joint space narrowing","Widened 1st MTP joint","Overhanging-edge erosions","No bony change"],a:0,tag:"oa",expl:"1st MTP OA: dorsal osteophyte blocks dorsiflexion. Gout = punched-out erosions with overhanging edges."},
{q:"Böhler angle 15° on a lateral calcaneal film indicates:",opts:["Compression fracture (flattened; normal 25–40°)","Normal calcaneus","Sever's disease","Avulsion only"],a:0,tag:"calcaneus",expl:"Böhler 25–40° normal; < 20° = height loss from compression. CT for articular extent."},
{q:"Gissane angle > 145° suggests:",opts:["Posterior facet depression in intra-articular calcaneal fracture","Normal calcaneus","Os trigonum","Ankle sprain"],a:0,tag:"calcaneus",expl:"Gissane (critical) angle 120–145° normal; increased with posterior facet depression."},
{q:"Oval fully-corticated ossicle posterior to the talus on lateral ankle = most likely:",opts:["Os trigonum","Shepherd's fracture","OA loose body","Achilles avulsion"],a:0,tag:"ossicles",expl:"Os trigonum in 7–10%. Shepherd's = jagged non-corticated lateral talar process fragment."},
{q:"Bipartite sesamoid vs sesamoid fracture — the distinguishing feature:",opts:["Both parts corticated in bipartite; fracture margins are not","Location under 5th MTP","Size > 2 cm","Soft-tissue swelling"],a:0,tag:"ossicles",expl:"Bipartite: both fragments have smooth cortical rims, often bilateral (10–30%). Fracture: lucent jagged line."},
{q:"Accessory navicular prevalence ≈",opts:["4–14%","< 1%","50%","90%"],a:0,tag:"ossicles",expl:"4–14%; can cause symptomatic accessory navicular syndrome via the posterior tibial tendon, often with flatfoot."},
{q:"IWGDF/IDSA 2023 initial bundle for suspected diabetic foot osteomyelitis:",opts:["Probe-to-bone + plain X-ray + ESR/CRP (± PCT)","MRI first always","Bone biopsy first","X-ray alone"],a:0,tag:"dfi",expl:"PTB + X-ray + markers first; MRI when doubt remains; plain film insensitive in first 2–3 weeks."},
{q:"Normal plain X-ray 5 days after ulcer onset in a diabetic foot:",opts:["Does not exclude osteomyelitis — repeat at 2–3 weeks or MRI","Excludes osteomyelitis","Excludes Charcot","Confirms infection"],a:0,tag:"dfi",expl:"Radiographic change lags infection by 2–3 weeks (needs 10–15% bone loss to be visible)."},
{q:"Hot swollen red midfoot in a neuropathic diabetic = treat as:",opts:["Acute Charcot until proven otherwise","Cellulitis only","Gout","Nothing — reassure"],a:0,tag:"charcot",expl:"IWGDF 2023 CNO: hot swollen neuropathic foot = Charcot until excluded. Offload immediately; exclude infection."},
{q:"Charcot X-ray features:",opts:["Fragmentation, disorganisation, subluxation, rocker-bottom collapse","Punched-out erosions at 1st MTP","Single lucent line","Normal alignment"],a:0,tag:"charcot",expl:"Eichenholtz stages; usually midfoot/multiple joints. Osteomyelitis usually starts under one ulcer."},
{q:"Soft-tissue gas on a foot X-ray is:",opts:["Surgical emergency (necrotising infection)","Normal","Gout sign","Artefact"],a:0,tag:"dfi",expl:"Gas in soft tissues = necrotising fasciitis until proven otherwise — urgent debridement."},
{q:"WB films matter because:",opts:["Angles (HVA, IMA, Meary, calcaneal pitch) change with loading","Less radiation","Better soft tissue","Required for rebate"],a:0,tag:"views",expl:"WB shows functional alignment; NWB under-reports deformity and Lisfranc instability."},
{q:"Mortise view ≈",opts:["15–20° internal rotation","45° external rotation","No rotation","Full plantarflexion"],a:0,tag:"views",expl:"15–20° internal rotation opens the mortise so the lateral malleolus doesn't overlap the talus."},
{q:"Medial clear space > 6 mm on mortise view suggests:",opts:["Syndesmotic/deltoid disruption — unstable ankle","Normal ankle","Lateral ligament sprain only","OA"],a:0,tag:"ankle",expl:"Widened medial or tibiofibular clear space > 6 mm = unstable; consider Maisonneuve — image the leg."},
{q:"Comminuted intra-articular calcaneal fracture after fall from height →",opts:["CT for surgical planning + check bilateral injury and lumbar spine","Symptomatic care only","MRI ankle","No further imaging"],a:0,tag:"calcaneus",expl:"~10% bilateral; axial-load lumbar injuries common. CT defines posterior facet involvement."},
{q:"In the systematic checklist, assess soft tissues first because:",opts:["Gas, foreign bodies, swelling change urgency and differential","Bones are easier to see","It is faster","Joints depend on it"],a:0,tag:"system",expl:"Soft-tissue gas = emergency; foreign bodies/swelling alter the differential before you read bones."},
{q:"Structured radiology reporting means:",opts:["Technique → findings → impression → recommendations; no impression-only diagnoses","Writing fast","Only abnormal findings","Skipping technique"],a:0,tag:"system",expl:"Findings describe; impression concludes. Never a diagnosis in the impression that isn't in the findings."},
{q:"Podiatrist-requested CT/MRI of the foot in Australia:",opts:["Generally not MBS-rebatable — refer via a medical practitioner","Fully rebated under 57521","Rebated under 57527","Rebated under 63311 by podiatrists"],a:0,tag:"mbs",expl:"Podiatrist MBS access = plain X-ray (57521/57523/57527), EOS, limited ultrasound (55834/55835). CT/MRI items not claimable on podiatrist request."},
{q:"Normal variant mistaken for fracture at the anterior calcaneus on oblique views:",opts:["Os calcaneus secundarius","Os trigonum","Os peroneum","Os vesalianum"],a:0,tag:"ossicles",expl:"Os calcaneus secundarius: triangular, corticated. Os trigonum = posterior talus; os peroneum = lateral midfoot; os vesalianum = 5th MT base."},
{q:"Bimalleolar fracture means:",opts:["Fractures of both medial and lateral malleoli","Two fracture lines in the fibula","Fracture + dislocation of ankle","Fracture of talus"],a:0,tag:"ankle",expl:"Both malleoli fractured — often with widened medial clear space = unstable; needs orthopaedic assessment."},
{q:"High-ankle (syndesmotic) sprain key X-ray finding:",opts:["Widened tibiofibular/medial clear space on mortise","Normal mortise","Calcaneal flattening","Lisfranc widening"],a:0,tag:"ankle",expl:"Syndesmotic disruption widens the distal tibiofibular and medial clear spaces; unstable cases need fixation. Normal films don't exclude it."}
];
