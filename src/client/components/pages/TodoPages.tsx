import React, {FC, useEffect, useState} from "react";
import TaskList from "../organisms/task-list";
import s from "./style/todo-page.css"
import injectTSFriendlyStyles from "../../utils/injectTSFriendlyStyles";
import {TaskEntity} from "../../../entity/task";
import H1 from "../atoms/h1";
import axios from "axios";

export type TodoPageProps = {
    data: TaskEntity[];
}
let maxTaskId;

const useLogic = (initialData: TaskEntity[]) => {
    const [tasks, setTasks] = useState<TaskEntity[]>(initialData);
    const [input, setInput] = useState<string>(null);
    useEffect(() => { maxTaskId = initialData.slice(-1)[0].id}, [])
    const onChangeInput: React.ChangeEventHandler = (e: React.ChangeEvent) => {
        if(!(e.target instanceof HTMLInputElement)) return;
        setInput(e.target.value);
    }
    const onAddButtonClick: React.MouseEventHandler = (e: React.MouseEvent) => {
        if(!(e.target instanceof HTMLButtonElement)) return;
        maxTaskId++;
        const newTask = new TaskEntity(maxTaskId, input);
        setTasks(tasks.concat(newTask));
    }

    const onFinishButtonClick: React.MouseEventHandler = (e: React.MouseEvent) => {
        if(!(e.target instanceof  HTMLButtonElement)) return;
        const targetTaskId = Number(e.currentTarget.parentElement.dataset.id);
        setTasks(tasks.filter((task) => task.id !== targetTaskId));
    }

    const onSaveButtonClick: React.MouseEventHandler = (e) => {
        if(!(e.target instanceof HTMLButtonElement)) return;
        axios.post('/todo', tasks);
    }
    return {onChangeInput, onAddButtonClick, tasks, onFinishButtonClick, onSaveButtonClick};
}

const TodoPages: FC<TodoPageProps> = (props) => {
    const {data} = props;
    const {onChangeInput, onAddButtonClick, tasks, onFinishButtonClick, onSaveButtonClick} = useLogic(data);
    return <>
        <H1>TodoList</H1>
        <TaskList
            list={tasks} onAddButtonClick={onAddButtonClick}
            onFinishButtonClick={onFinishButtonClick}
            onChangeInput={onChangeInput}
            onSaveButtonClick={onSaveButtonClick}
        />
    </>
}

export default injectTSFriendlyStyles(s, TodoPages);