import test from 'node:test'; import assert from 'node:assert/strict';
import {daysInMonth,shiftHours,calculateGuardPayroll,assessWorkload,canEditSchedule} from '../src/domain.mjs';
test('calendar respects month length',()=>{assert.equal(daysInMonth(2024,2),29);assert.equal(daysInMonth(2025,2),28);assert.equal(daysInMonth(2026,4),30);assert.equal(daysInMonth(2026,8),31)});
test('shift types map to hours',()=>{for(const h of [6,8,12,24]) assert.equal(shiftHours(String(h)),h)});
test('payroll supports hourly, shifts and bonus',()=>{assert.deepEqual(calculateGuardPayroll([{hours:12},{hours:8}],{mode:'HOURLY',amount:500},2000),{hours:20,shifts:2,base:10000,bonus:2000,total:12000});assert.equal(calculateGuardPayroll([{hours:12}],{mode:'SHIFT',amount:6000},0).total,6000)});
test('workload reports fatigue risk',()=>{assert.equal(assessWorkload(Array(9).fill({hours:24})).level,'HIGH');assert.equal(assessWorkload([{hours:8}]).level,'OK')});
test('approved schedule is locked',()=>assert.equal(canEditSchedule({status:'APPROVED'}),false));
