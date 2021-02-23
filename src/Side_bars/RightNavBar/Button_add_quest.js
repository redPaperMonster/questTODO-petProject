
import ModalWindow from '../../Common_components/ModalWindow/ModalWindow';
import css_classes from './RightNavigation.module.css';
import { useState } from 'react'
import CreateQuestForm from './CreateQuestForm/CreateQuestForm';
import CreateQuestFormContainer from './CreateQuestForm/CreateQuestFormContainer';

const Button_add_quest = (props) => {
    const [modalActive, setModalActive] = useState(false)
    const modalClose = () => {
        setModalActive(false)
    }
    return (
        <div> <button onClick={() => setModalActive(true)}>Добавить квест</button>
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <CreateQuestFormContainer modalClose={modalClose} />
            </ModalWindow>
        </div>
    )
}

export default Button_add_quest;