import { Placeholder } from "../placeholder";

export const ArticleBox = (props) => (
  <div className={props.className}>
    <div style={{ height: "140px", width: "100%" }}>
      <img src={props.img} style={{ height: "100%", width: "100%" }} />
    </div>

    <div style={{ height: "72px", width: "100%", whiteSpace: "nowrap" }}>
      <Placeholder height='8px' display='block' />
      <div>
        <Placeholder width='8px' display='inline-block' />
        <div style={{ display: 'inline', color: "black", opacity: "85%", fontSize: "16px", whiteSpace: "nowrap" }}>{props.bigTitle}</div>
      </div>

      <Placeholder height='8px' display='block' />
      <div>
        <Placeholder width='8px' display='inline-block' />
        <div style={{ display: 'inline', color: "black", opacity: "65%", fontSize: "14px", whiteSpace: "nowrap" }}>{props.littleTitle}</div>
      </div>
    </div>
  </div >
);
