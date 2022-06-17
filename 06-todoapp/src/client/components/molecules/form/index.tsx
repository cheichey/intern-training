import {FC} from "react";
import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";
import s from "./style.css";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import {classNameFactory} from "../../../utils/classNameFactory";

export type FormProps = {
    buttonText: string;
}

const Form: FC<FormProps> = (props) => {
    const {buttonText} = props;
    return (
        <form className={classNameFactory(s.form)}>
            <div>
                <Input type="text"/>
                <Button size="m">{buttonText}</Button>
            </div>
        </form>
    )
}

export default injectTSFriendlyStyles<FC<FormProps>>(s, Form)