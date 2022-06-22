import React, {FC, useEffect, useState} from "react";
import TaskList from "../organisms/task-list";
import s from "./style/todo-page.css"
import injectTSFriendlyStyles from "../../utils/injectTSFriendlyStyles";
import {TaskEntity} from "../../../entity/task";
import H1 from "../atoms/h1";
import axios from "axios";

export type TodoPageProps = {
    data?: TaskEntity[];
}
let maxTaskId = 0;

const useLogic = (initialData: TaskEntity[]) => {
    const [tasks, setTasks] = useState<TaskEntity[]>(initialData);
    const [input, setInput] = useState<string>(null);
    useEffect(() => {
        if (!tasks.length) return;
        maxTaskId = tasks.slice(-1)[0].id;
        }, []
    )
    const onChangeInput: React.ChangeEventHandler = (e: React.ChangeEvent) => {
        if(!(e.target instanceof HTMLInputElement)) return;
        setInput(e.target.value);
    }
    const addTask: React.MouseEventHandler | React.FormEventHandler = (e) => {
        if(!(e.target instanceof HTMLButtonElement || e.target  instanceof HTMLFormElement)) return;
        maxTaskId++;
        const newTask = new TaskEntity(maxTaskId, input);
        setTasks(tasks.concat(newTask));
    }

    const onFinishButtonClick: React.MouseEventHandler = (e: React.MouseEvent) => {
        if(!(e.target instanceof  HTMLButtonElement)) return;
        const targetTaskId = Number(e.currentTarget.parentElement.dataset.id);
        setTasks(tasks.filter((task) => task.id !== targetTaskId));
    }

    const onSave: React.MouseEventHandler = (e) => {
        if(!(e.target instanceof HTMLButtonElement)) return;
        axios.post('/todo', tasks).then(() => window.alert("保存されました。"));
    }
    return {onChangeInput, addTask, tasks, onFinishButtonClick, onSave};
}

const TodoPages: FC<TodoPageProps> = (props) => {
    const {data} = props;
    const {onChangeInput, addTask, tasks, onFinishButtonClick, onSave} = useLogic(data);
    return <>
        <H1>TodoList</H1>
        <TaskList
            list={tasks} onAddButtonClick={addTask}
            onFinishButtonClick={onFinishButtonClick}
            onChangeInput={onChangeInput}
            onSaveButtonClick={onSave}
            onSubmit={addTask}
        />
    </>
}

export default injectTSFriendlyStyles(s, TodoPages);