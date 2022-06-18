import {FC} from "react";
import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";
import s from "./style.css"
import Card from "../card";
import Button from "../../atoms/button";

export type TaskProps = {
    name: string
}
const Task: FC<TaskProps> = (props) => {
    const {name} = props;
    return (
        <div className={s.task}>
            <Card header="task">{name}</Card>
            <Button size="m">完了</Button>
        </div>
    )
}

export default injectTSFriendlyStyles(s, Task);
