function module(e,t,a){let n,o,s,i,r,l,c,d,u,m,h,y,g;function p(){const e=h(),t=u(()=>[["last 7 days",e("Last_7_days")],["last 30 days",e("Last_30_days")],["last 90 days",e("Last_90_days")]],[e]),[a,p]=m("last 7 days"),f=u(()=>{switch(a){case"last 7 days":return{start:c().set({hour:0,minute:0,second:0,millisecond:0}).subtract(7,"days"),end:c().set({hour:0,minute:0,second:0,millisecond:0}).subtract(1)};case"last 30 days":return{start:c().set({hour:0,minute:0,second:0,millisecond:0}).subtract(30,"days"),end:c().set({hour:0,minute:0,second:0,millisecond:0}).subtract(1)};case"last 90 days":return{start:c().set({hour:0,minute:0,second:0,millisecond:0}).subtract(90,"days"),end:c().set({hour:0,minute:0,second:0,millisecond:0}).subtract(1)}}},[a]),S=e=>p(e),b=u(()=>({start:f.start.toISOString(),end:f.end.toISOString()}),[f]),x=g("GET","engagement-dashboard/users/users-by-time-of-the-day-in-a-week",b),[k,E]=u(()=>{if(!x)return[];const e=Array.from({length:c(f.end).diff(f.start,"days")+1},(e,t)=>c(f.start).add(t,"days")),t=Array.from({length:24},(t,a)=>n({hour:String(a)},e.map(e=>({[e.toISOString()]:0})).reduce((e,t)=>n({},e,{},t),{})));for(const{users:a,hour:n,day:o,month:s,year:i}of x.week){const e=c([i,s-1,o,0,0,0,0]).toISOString();t[n][e]+=a}return[e.map(e=>e.toISOString()),t]},[x]);return d.createElement(y,{title:e("Users_by_time_of_day"),filter:d.createElement(r,{options:t,value:a,onChange:S})},d.createElement(i.Container,null,x?d.createElement(s,{style:{height:696}},d.createElement(i.Item,{align:"stretch",grow:1,shrink:0},d.createElement(s,{style:{position:"relative"}},d.createElement(s,{style:{position:"absolute",width:"100%",height:"100%"}},d.createElement(o,{data:E,indexBy:"hour",keys:k,padding:4,margin:{left:40,bottom:20},colors:["#E8F2FF","#D1EBFE","#A4D3FE","#76B7FC","#549DF9","#1D74F5","#10529E"],cellOpacity:1,enableLabels:!1,axisTop:null,axisRight:null,axisBottom:{tickSize:0,tickPadding:4,tickRotation:0,format:e=>7===k.length?c(e).format("dddd"):""},axisLeft:{tickSize:0,tickPadding:4,tickRotation:0,format:e=>c().set({hour:parseInt(e,10),minute:0,second:0}).format("LT")},hoverTarget:"cell",animate:k.length<=7,motionStiffness:90,motionDamping:15,theme:{axis:{ticks:{text:{fill:"#9EA2A8",fontFamily:'Inter, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Meiryo UI", Arial, sans-serif',fontSize:10,fontStyle:"normal",fontWeight:"600",letterSpacing:"0.2px",lineHeight:"12px"}}},tooltip:{container:{backgroundColor:"#1F2329",boxShadow:"0px 0px 12px rgba(47, 52, 61, 0.12), 0px 0px 2px rgba(47, 52, 61, 0.08)",borderRadius:2}}},tooltip:t=>{let{value:a}=t;return d.createElement(s,{textStyle:"p2",textColor:"alternative"},e("Value_users",{value:a}))}}))))):d.createElement(l,{variant:"rect",height:696})))}a.link("@babel/runtime/helpers/objectSpread2",{default(e){n=e}},0),a.export({UsersByTimeOfTheDaySection:()=>p}),a.link("@nivo/heatmap",{ResponsiveHeatMap(e){o=e}},0),a.link("@rocket.chat/fuselage",{Box(e){s=e},Flex(e){i=e},Select(e){r=e},Skeleton(e){l=e}},1),a.link("moment",{default(e){c=e}},2),a.link("react",{default(e){d=e},useMemo(e){u=e},useState(e){m=e}},3),a.link("../../../../../../client/contexts/TranslationContext",{useTranslation(e){h=e}},4),a.link("../Section",{Section(e){y=e}},5),a.link("../../hooks/useEndpointData",{useEndpointData(e){g=e}},6)}

