function module(t,e,s){let n,a,c,u;s.export({SettingsContext:()=>o,useSetting:()=>r,useSettingDispatch:()=>l,useBatchSettingsDispatch:()=>i}),s.link("react",{createContext(t){n=t},useCallback(t){a=t},useContext(t){c=t}},0),s.link("../hooks/useObservableValue",{useObservableValue(t){u=t}},1);const o=n({get:()=>{},set:async()=>{},batchSet:async()=>{}}),r=t=>{const{get:e}=c(o);return u(s=>e(t,s))},l=t=>{const{set:e}=c(o);return a(s=>e(t,s),[e,t])},i=()=>{const{batchSet:t}=c(o);return a(e=>t(e),[])}}
