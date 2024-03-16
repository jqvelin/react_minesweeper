import React, { ChangeEvent, useEffect, useState } from 'react';
import './ThemeSwitcherComponent.scss'
import { Themes } from '../../models/Themes';

const ThemeSwitcherComponent = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const nextTheme = localStorage.getItem('theme')
        if (nextTheme) {
            document.documentElement.setAttribute('data-theme', nextTheme)
            setTheme(nextTheme)
        }
    }, [])

    function handleChangeTheme(e: ChangeEvent){
        const target = e.target as HTMLSelectElement
        const nextTheme = target.value
        localStorage.setItem('theme', nextTheme)
        document.documentElement.setAttribute('data-theme', nextTheme)
        setTheme(nextTheme)
    }

    return (
        <select value={theme} onChange={e => handleChangeTheme(e)}>
            <option value={Themes.LIGHT}>Светлая</option>
            <option value={Themes.DARK}>Тёмная</option>
        </select>
    );
};

export default ThemeSwitcherComponent;