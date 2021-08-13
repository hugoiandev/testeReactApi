import React from 'react'
import BtnClean from './BtnClean'
import BtnDel from './BtnDel'
import classeFetch from './classeFetch'

const classes = new classeFetch()


const Painel = ({dados, stateBtn}) => {

    const [notification, setNotification] = React.useState(null)
    const [id, setId] = React.useState(null)
    const [del, setDel] = React.useState(false)


    const handleClick = async () => {
        const response = await fetch("http://internal-api.dividendos.me:1124/Notification", {
          headers: {
            Accept: "application/json",
            Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6WyIwMzRkMDM3OC05YzcyLTRjMWYtYTM4MS04NzJmOTFjMWRlMDMiLCIwMzRkMDM3OC05YzcyLTRjMWYtYTM4MS04NzJmOTFjMWRlMDMiXSwianRpIjoiNjA5ODM0OTE2ZWNhNDIyOTk0NDNmMTg0NDA3YzEyZDMiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTYyNTc0OTU1OSwiZXhwIjoxNzgzNDI5NTU5LCJpYXQiOjE2MjU3NDk1NTksImlzcyI6IkRpdmlkZW5kb3MiLCJhdWQiOiJEaXZpZGVuZG9zIn0.5oG9uJif-CJXU8LOMJ7my7QUuSv7fPWyv4uNpkUc1tQ"
          }
        })
        const json = await response.json()
        
        setNotification(json)
    }




    React.useEffect(() => {
        if (dados) {
            setNotification(dados)
        }
    }, [dados])

    React.useEffect(() => {
        id && classes.handleClickDel(id)
        handleClick()
    }, [id])

    React.useEffect(() => {
        classes.handleClickDelAll()
        del && handleClick()
    }, [del])

    React.useEffect(() => {
        if (stateBtn === false) {
            setDel(false)
        }
    }, [stateBtn])


    return (
        <>
            <div className={`shadow-painel ${stateBtn ? 'ativo' : 'inativo'}`}>
                <div className='shadow'>
                    <div className='painel'>
                        <div style={{zIndex: '999', position: 'fixed', width: '473px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '15px', paddingTop: '30px', borderBottom: '1px solid #DCDCDC', background: '#ffffff'}}>
                            <span style={{fontWeight: 'bold'}}><img src='lapis.png' alt='lapis' style={{marginRight: '10px'}}></img>Editar notificoes</span>
                            <BtnClean event={() => {
                                setDel(true)
                            }} />
                        </div>
                        <div style={{paddingTop: '70px'}}>
                            {notification && notification.value.map(({notificationHistoricalGuid, createdDate, text, title}) => {
                                return (
                                    <div style={{paddingTop: '25px', paddingBottom: '15px', borderBottom: '1px solid #DCDCDC', display: 'flex', alignItems: 'center'}} key={notificationHistoricalGuid}>
                                        <div>
                                            <h4 style={{margin: 0}}>{title}</h4>
                                            <p>{text}</p>
                                            <span>{createdDate}</span>
                                        </div>
                                        <div>
                                            <BtnDel event={() => setId(notificationHistoricalGuid)} />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Painel