import React from 'react'

const BtnClean = ({event}) => {
    return (
        <button onClick={event} style={{fontWeight: 'bold', padding: '10px 20px', color: '#ffffff', border: 'none', background: '#DB1356', borderRadius: '5px', cursor: 'pointer'}}>LIMPAR</button>
    )
}

export default BtnClean