import React, {FC} from "react";
import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";
import s from "./style.css";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import {classNameFactory} from "../../../utils/classNameFactory";

export type FormProps = {
    buttonText: string;
    className?: string;
    onClick:  React.MouseEventHandler;
    onChange: React.ChangeEventHandler;
}

const Form: FC<FormProps> = (props) => {
    const {buttonText, className, onClick, onChange} = props;
    return (
        <form className={classNameFactory(s.form, className)}>
            <div>
                <Input type="text" onChange={onChange}/>
                <Button size="m" onClick={onClick}>{buttonText}</Button>
            </div>
        </form>
    )
}

export default injectTSFriendlyStyles<FC<FormProps>>(s, Form)