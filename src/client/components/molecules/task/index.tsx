import {FC, MouseEventHandler} from "react";
import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";
import s from "./style.css"
import Card from "../card";
import Button from "../../atoms/button";

export type TaskProps = {
    name: string;
    id: number;
    onClick: MouseEventHandler
}
const Task: FC<TaskProps> = (props) => {
    const {name, onClick, id} = props;
    return (
        <div className={s.task} data-id={id}>
            <Card header="task">{name}</Card>
            <Button size="m" onClick={onClick}>完了</Button>
        </div>
    )
}

export default injectTSFriendlyStyles(s, Task);
