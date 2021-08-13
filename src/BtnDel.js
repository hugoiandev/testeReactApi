import React from 'react'

const BtnDel = ({event}) => {
    return (
        <img style={{cursor: 'pointer', marginLeft: '15px'}} src='EXCLUIR.png' alt='delete' onClick={event}></img>
    )
}

export default BtnDel