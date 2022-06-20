import React, {ChangeEventHandler, FC, MouseEventHandler} from "react";
import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";
import s from "./style.css"
import {TaskEntity} from "../../../../entity/task";
import Task from "../../molecules/task";
import H2 from "../../atoms/h2";
import {classNameFactory} from "../../../utils/classNameFactory";
import Form from "../../molecules/form";
import Button from "../../atoms/button";

export type TaskListProps = {
    list: TaskEntity[];
    className?: string;
    onAddButtonClick: MouseEventHandler
    onFinishButtonClick: MouseEventHandler
    onChangeInput: ChangeEventHandler
    onSaveButtonClick: MouseEventHandler
}
const TaskList: FC<TaskListProps> = (props) => {
    const {list, className, onAddButtonClick, onFinishButtonClick, onChangeInput, onSaveButtonClick} = props;
    return (
        <div>
            <div className={s["add-form"]}>
                <Form buttonText="追加" onClick={(e) => onAddButtonClick(e)} onChange={(e) => onChangeInput(e) }/>
            </div>
            <ul className={classNameFactory(s["list"], className)}>
                <H2>タスク一覧</H2>
                <div className={s["list-wrapper"]}>
                    {list.map((task) => {
                        return (
                            <li className={s["list-content"]} key={task.id}>
                                <Task name={task.name} onClick={(e) => onFinishButtonClick(e)} id={task.id}></Task>
                            </li>
                        )
                    })}
                </div>
            </ul>
            <div><Button size="l" onClick={onSaveButtonClick}>保存</Button></div>
        </div>
    )
}

export default injectTSFriendlyStyles<FC<TaskListProps>>(s, TaskList);