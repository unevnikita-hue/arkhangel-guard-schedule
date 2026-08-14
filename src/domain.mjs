export const daysInMonth=(y,m)=>new Date(y,m,0).getDate();
export const shiftHours=t=>Number(t);
export function calculateGuardPayroll(items,rate,bonus=0){const hours=items.reduce((s,x)=>s+x.hours,0),shifts=items.length;const base=rate.mode==='HOURLY'?hours*rate.amount:shifts*rate.amount;return{hours,shifts,base,bonus:Number(bonus)||0,total:base+(Number(bonus)||0)}}
export function calculatePayrollSummary(guards,assignments,rate,bonuses={},budget=0){const rows=guards.map(guard=>({guard,...calculateGuardPayroll(assignments.filter(a=>a.guardId===guard.id),rate,bonuses[guard.id]?.amount)}));const total=rows.reduce((sum,row)=>sum+row.total,0);return{rows,total,budget:Number(budget)||0,overBudget:Number(budget)>0&&total>Number(budget),difference:total-(Number(budget)||0)}}
export function assessWorkload(items){const hours=items.reduce((s,x)=>s+x.hours,0);const consecutive=items.length;const high=hours>184||consecutive>8;const warn=!high&&(hours>160||consecutive>6);return{level:high?'HIGH':warn?'WARN':'OK',hours,reasons:high?['Высокая месячная нагрузка: возможны усталость и ошибки']:warn?['Нагрузка приближается к контрольному пределу']:[]}}
export const canEditSchedule=s=>s?.status!=='APPROVED';
export function reopenScheduleDraft(schedule){const draft={...schedule,status:'DRAFT'};delete draft.approvedAt;return draft}
