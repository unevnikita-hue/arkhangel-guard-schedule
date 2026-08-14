import test from 'node:test'; import assert from 'node:assert/strict';
import {demoData} from '../src/data.mjs'; import {LocalScheduleRepository} from '../src/repository.mjs';
test('demo contains seven guards and dictionaries',()=>{assert.equal(demoData.guards.length,7);assert.ok(demoData.legalEntities[0].objects[0].posts.length);assert.ok(demoData.templates.length)});
test('repository saves and resets schedules',()=>{const m=new Map(), storage={getItem:k=>m.get(k)||null,setItem:(k,v)=>m.set(k,v),removeItem:k=>m.delete(k)};const r=new LocalScheduleRepository(storage);r.save({month:'2026-08',assignments:[1]});assert.equal(r.load('2026-08').assignments.length,1);r.reset('2026-08');assert.equal(r.load('2026-08'),null)});
