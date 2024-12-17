import React from 'react';
import headerImage from './header.jpg'; // Verifique se o nome está correto
import './Style.css'; // Verifique se o caminho do CSS está correto

export function Header() {
    return (
        <header className="cabecalho">
            <img 
                src={headerImage} 
                alt="Logo da aceleradora inclusiva, onde tem a imagem de um 'A' combinado com um 'I' em degrade do amarelo forte para o rosa avermelhado" 
                className="logo"
            />
        </header>
    );
}
