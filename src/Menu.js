import React from 'react'

const Menu = ({event}) => {

    return (
        <>
            <nav>
                <div>
                    <img onClick={event} style={{cursor: 'pointer'}} src='notificacao.png' alt='notificacao'></img>
                </div>
            </nav>
        </>
    )
}

export default Menu