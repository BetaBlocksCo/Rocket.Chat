function module(t,o,n){let a,c;n.export({formatNumber:()=>r,formatDate:()=>e,formatHumanReadableTime:()=>l,formatCPULoad:()=>u}),n.link("moment",{default(t){a=t}},0),n.link("underscore.string",{default(t){c=t}},1);const r=t=>c.numberFormat(t,2),e=t=>t?a(t).format("LLL"):null,l=(t,o)=>{const n=Math.floor(t/86400),a=Math.floor(t%86400/3600),c=Math.floor(t%86400%3600/60),r=Math.floor(t%86400%3600%60);let e="";return n>0&&(e+="".concat(n," ").concat(o("days"),", ")),a>0&&(e+="".concat(a," ").concat(o("hours"),", ")),c>0&&(e+="".concat(c," ").concat(o("minutes"),", ")),r>0&&(e+="".concat(r," ").concat(o("seconds"))),e},u=t=>{if(!t)return null;const[o,n,a]=t;return"".concat(r(o),", ").concat(r(n),", ").concat(r(a))}}
