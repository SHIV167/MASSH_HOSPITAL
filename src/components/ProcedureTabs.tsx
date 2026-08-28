"use client";

import { useState } from "react";

const groups = [
  { label:"3D Laparoscopy", items:["Gall Bladder Stone","Bariatric Surgery","Hernia","Ovarian Cyst","Fibroid Removal","Appendicitis"] },
  { label:"Laser", items:["Kidney Stone","Enlarged Prostate (BPH)","Ureteric Stricture","Piles","Anal Fissure","Laser Circumcision"] },
  { label:"Bone & Joint", items:["Arthritis","Frozen Shoulder","Disc Tear","Sports Injuries","Sciatica","Back, Hip & Knee Pain"] },
  { label:"Cancer Care", items:["Breast Cancer","Colorectal Cancer","Bladder Cancer","Prostate Cancer","Cervical Cancer","Kidney Cancer"] },
];

export default function ProcedureTabs() {
  const [active, setActive] = useState(0);
  return <div className="procedure-panel">
    <div className="tabs" role="tablist" aria-label="Procedure categories">
      {groups.map((group,index)=><button key={group.label} type="button" role="tab" id={`procedure-tab-${index}`} aria-selected={active===index} aria-controls={`procedure-panel-${index}`} tabIndex={active===index?0:-1} className={active===index?"is-active":""} onClick={()=>setActive(index)}>{group.label}</button>)}
    </div>
    <div role="tabpanel" id={`procedure-panel-${active}`} aria-labelledby={`procedure-tab-${active}`}><ul>{groups[active].items.map(item=><li key={item}>{item}</li>)}</ul></div>
  </div>;
}
