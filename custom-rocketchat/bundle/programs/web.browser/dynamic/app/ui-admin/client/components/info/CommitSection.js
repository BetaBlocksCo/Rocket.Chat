function module(t,e,n){let a,l,r,c;function i(t){let{info:e}=t;const n=r(),{commit:i={}}=e;return l.createElement(l.Fragment,null,l.createElement(a,{"data-qa":"commit-title"},n("Commit")),l.createElement(c,{"data-qa":"commit-list"},l.createElement(c.Entry,{label:n("Hash")},i.hash),l.createElement(c.Entry,{label:n("Date")},i.date),l.createElement(c.Entry,{label:n("Branch")},i.branch),l.createElement(c.Entry,{label:n("Tag")},i.tag),l.createElement(c.Entry,{label:n("Author")},i.author),l.createElement(c.Entry,{label:n("Subject")},i.subject)))}n.export({CommitSection:()=>i}),n.link("@rocket.chat/fuselage",{Subtitle(t){a=t}},0),n.link("react",{default(t){l=t}},1),n.link("../../../../../client/contexts/TranslationContext",{useTranslation(t){r=t}},2),n.link("./DescriptionList",{DescriptionList(t){c=t}},3)}
