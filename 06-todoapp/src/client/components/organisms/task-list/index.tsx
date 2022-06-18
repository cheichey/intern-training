import {FC} from "react";
import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";
import s from "./style.css"
import {TaskEntity} from "../../../../entity/task";
import Task from "../../molecules/task";
import H2 from "../../atoms/h2";
import {classNameFactory} from "../../../utils/classNameFactory";

export type TaskListProps = {
    list: TaskEntity[];
    className: string;
}
const TaskList: FC<TaskListProps> = (props) => {
    const {list, className} = props;
    return (
        <ul className={classNameFactory(s["list"], className)}>
            <H2>タスク一覧</H2>
            <div className={s["list-wrapper"]}>
                {list.map((task) => {
                    return (
                        <li className={s.content}>
                            <Task name={task.name}></Task>
                        </li>
                    )
                })}
            </div>
        </ul>
    )
}

export default injectTSFriendlyStyles<FC<TaskListProps>>(s, TaskList);