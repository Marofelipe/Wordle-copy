import React, {createContext, useState, useEffect} from 'react';
// import api from '../services/api';
// import toast from 'react-hot-toast';

export const GameContext = createContext();

export const GameProvider = ({children}) =>{
    const [word, setWord] = useState([]);
    const [dayWord, setDayWord] = useState("focus");
    const [status, setStatus] = useState([]);
    
    const submitWord = () => {
        // validar palvara
        const tempSatus = {letter: word, status:[]};
        word.map(letter => {
            if(dayWord.includes(letter)){
                tempSatus.push("wrong-place");
            }
            else{
                tempSatus.push("wrong");
            }
        })
        // alterar status
        setStatus([...status, tempStatus]);
    }

    //   useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     const userStorage = localStorage.getItem("user");
    
    //     if (userStorage) {
    //       setUser(JSON.parse(userStorage));
    //     }
    //     if (token) {
    //       api.defaults.headers.Authorization = `Bearer ${token}`;
    //     }
    //   }, []);

    return(
        <GameContext.Provider value={{word, dayWord, status, submitWord}}>
            {children}
        </GameContext.Provider>
    );
}
