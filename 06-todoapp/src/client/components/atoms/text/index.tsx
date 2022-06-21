import {FC, HTMLAttributes} from "react";
import {toClassName} from "../../../utils/toClassName";
import injectTSFriendlyStyles from "../../../utils/injectTSFriendlyStyles";
import s from "./style.css";

export type TextProps = HTMLAttributes<any>
const Text: FC<TextProps> = (props: TextProps) => {
    const {children, className} = props;
    return (
        <div className={toClassName(s.text, className)}>
            {children}
        </div>
    );
}

export default injectTSFriendlyStyles<FC<TextProps>>(s, Text);
