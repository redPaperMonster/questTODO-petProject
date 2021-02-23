import React, { Component } from 'react'
import './../User_info.css'
import Skill from './Skill';


export default class Skill_list extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blockOpened: false,
            dadad : "closed"
        };
    }

    toggleClick = () => {
        this.setState({
            blockOpened: !this.state.blockOpened
            
        });
    };

    render() {
          
            return (
                <div className="skill_list">
                    <button onClick={this.toggleClick}>Скиллы:</button>
                    <div>
                    <div className={this.state.blockOpened ? "opened" :  "closed"}>
                        <Skill percentage="50" skill_progress_req_to_next_lvl="100" current_skill_progress="50"></Skill>
                        <Skill percentage="50" skill_progress_req_to_next_lvl="100" current_skill_progress="50"></Skill>
                        <Skill percentage="50" skill_progress_req_to_next_lvl="100" current_skill_progress="50"></Skill>
                        <Skill percentage="50" skill_progress_req_to_next_lvl="100" current_skill_progress="50"></Skill>
                        <Skill percentage="50" skill_progress_req_to_next_lvl="100" current_skill_progress="50"></Skill>
                        <Skill percentage="50" skill_progress_req_to_next_lvl="100" current_skill_progress="50"></Skill>
                    </div></div>
                </div>
            )
        

    }}