import test from 'node:test'; import assert from 'node:assert/strict'; import {readFile} from 'node:fs/promises';
test('page exposes critical demo controls',async()=>{const h=await readFile(new URL('../index.html',import.meta.url),'utf8');for(const s of ['KIRASA','guard-search','schedule-grid','approve-btn','export-btn','ДЕМО-ДАННЫЕ'])assert.ok(h.includes(s),s)});
