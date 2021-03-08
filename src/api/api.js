import axios from 'axios'


//Criando a api, usando o axios, colocamos a baseURL que vai servir como base do nossa api
export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

//Como sabemos, buscar algo em servidor pode levar um tempo, por isso colocamos o async
//E como colocamos o async, temos que colocar o await para que ele pegue primeiro o api.get(url)
export const busca = async(url, setDado) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}