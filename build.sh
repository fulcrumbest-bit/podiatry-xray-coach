#!/bin/bash
# assemble + minify the single-file app
set -e
cd "$(dirname "$0")"
OUT=../app_v7.html
cat head.html m1_style.html m2_body.html > "$OUT"
printf '<script>\n' >> "$OUT"
cat src/03_modules_quiz.js src/04_cases.js src/05_image_data.js src/01_core.js src/02_router_views.js src/06_viewer.js src/07_caseflow.js src/08_quiz.js >> "$OUT"
printf '\nnav("home");\n</script>\n</body>\n</html>\n' >> "$OUT"
node -e "
const fs=require('fs');
const html=fs.readFileSync('$OUT','utf8');
const js=html.match(/<script>([\s\S]*)<\/script>/)[1];
fs.writeFileSync('/tmp/v7_check.js',js);
console.log('assembled bytes:',Buffer.byteLength(html));
"
node --check /tmp/v7_check.js && echo BUILD_OK
