import React,{useContext} from 'react';
import AlertContext from '../../context/alert/AlertContext'
import {IoMdAlert} from 'react-icons/io'

const Alert = () => {
    const alertContext = useContext (AlertContext);

    const {alert} = alertContext;

    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <IoMdAlert /> {alert.msg}
            </div>
        )
    )
}
export default Alert ;
