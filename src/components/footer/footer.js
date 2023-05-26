import css from './fotter.module.scss'
import {useTasks} from "../../hooks/tasks/use-tasks";
import React from 'react';

export const Footer = (props) => {
    const {getActiveTaskCount, getFinishedTaskCount} = useTasks();

    return (
        <footer className={css.footer}>
            <span>Active task: {getActiveTaskCount()}</span>
            <span>Finished task: {getFinishedTaskCount()}</span>
        </footer>
    )
}
