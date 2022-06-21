import React, {FC} from "react";
import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";
import s from "./style.css";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import {toClassName} from "../../../utils/toClassName";

export type FormProps = {
    buttonText: string;
    className?: string;
    onClick:  React.MouseEventHandler;
    onChange: React.ChangeEventHandler;
    onSubmit: React.FormEventHandler;
}

const Form: FC<FormProps> = (props) => {
    const {buttonText, className, onClick, onChange, onSubmit} = props;
    return (
        <form className={toClassName(s.form, className)} onSubmit={onSubmit} >
            <div>
                <Input type="text" onChange={onChange}/>
                <Button size="m" onClick={onClick}>{buttonText}</Button>
            </div>
        </form>
    )
}

export default injectTSFriendlyStyles<FC<FormProps>>(s, Form)