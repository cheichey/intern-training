import withStyles from "isomorphic-style-loader/withStyles"
import {FC} from "react";

export default function injectTSFriendlyStyles<T extends FC>(s: any, t: T): T {
    return withStyles(s)(t) as T
}