import css from './header.module.scss'
import {Profile} from "./profile/profile";
import React from 'react';

export const Header = () => {
    return (
        <header className={css.header}>
            <h1>Awesome Kanban Board</h1>
            <Profile/>
        </header>
    )
}
