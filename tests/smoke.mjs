import test from 'node:test'; import assert from 'node:assert/strict'; import {readFile} from 'node:fs/promises';
test('page exposes critical demo controls',async()=>{const h=await readFile(new URL('../index.html',import.meta.url),'utf8');for(const s of ['guard-search','schedule-grid','approve-btn','export-btn','ДЕМО-ДАННЫЕ'])assert.ok(h.includes(s),s)});
test('demo password remains in login logic',async()=>{const js=await readFile(new URL('../src/app.mjs',import.meta.url),'utf8');assert.match(js,/value==='KIRASA'/)});
test('hidden login overlay is actually removed from layout',async()=>{const css=await readFile(new URL('../styles.css',import.meta.url),'utf8');assert.match(css,/\[hidden\]\s*\{[^}]*display\s*:\s*none\s*!important/)});
test('login page does not disclose the password',async()=>{const h=await readFile(new URL('../index.html',import.meta.url),'utf8');assert.doesNotMatch(h,/Пароль для просмотра:\s*KIRASA/)});
