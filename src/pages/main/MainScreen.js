import React from 'react'
import { useSelector } from 'react-redux'

export const MainScreen = () => {

    const {name} = useSelector(state => state.auth)

    return (
        <div >
            <h1>¡Bienvenido {name} a tu Mesa de Regalos!</h1>
        </div>
    )
}
