
import { connect } from 'react-redux';
import RightNavigation from './RightNavigation';


// const RightNavigationContainer = (props) => {

//     return (
//         <RightNavigation store = {props.store} questData = {props.store.questData.questInfo}/>
//     )

// }
let mapStateToProps = (state) =>
{
    return {
        questData: state.questData.questInfo,
        store: state,
    }
}
let mapDispatchToProps = (dispatch) =>
{
    return {

    }
}
const RightNavigationContainer =  connect(mapStateToProps,mapDispatchToProps)(RightNavigation);

export default RightNavigationContainer;