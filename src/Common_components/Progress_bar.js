import css_classes from "./Common_comps.module.css";


  const Progress_bar = (props) => {
    return (
        <div>
        <div className={css_classes.progress_bar}>
          <Progress_bar_Filler percentage={props.percentage} />
        </div>
        <p className={css_classes.pb_exp}>{props.current_skill_progress}/{props.skill_progress_req_to_next_lvl}</p>
        </div>
      )
  }

  const Progress_bar_Filler = (props) => {
    return <div className={css_classes.filler} style={{ width: `${props.percentage}%` }} />
  }
  
  export default Progress_bar;

  