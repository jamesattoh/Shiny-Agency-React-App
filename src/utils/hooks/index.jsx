import { useState, useEffect } from 'react'

 

export function useFetch(url) { //pour notre nouveau hook useFetch, on lui passe en paramètre l’URL de l’API qu’on veut appeler

    const [data, setData] = useState({})

    const [isLoading, setLoading] = useState(true) //le state interne de ce hook lui permet de stocker la data, et de savoir si la data est en train de charger avec isLoading

    const [error, setError] = useState(false)
 

    useEffect(() => {

        if (!url) return //le hook fait un return  vide si le paramètre de l’URL est vide, et commence par mettre isLoading  à true

        setLoading(true)

        async function fetchData() { //déclaration de la fonction asynchrone fetchData qui appelle fetch - parse ce qui est retourné avec data.json() - et change l’état de isLoading

            try {
                const response = await fetch(url)

                const data = await response.json()
    
                setData(data)

            } catch (err) {

                console.log(err)

                setError(true)

            } finally {

                setLoading(false)

            }

        }

        fetchData() //puis on appelle notre fonction fetchData

        }, [url]) //url  fait partie du tableau de dépendances du useEffect, ce qui permettra de redéclencher le call en cas de changement d’URL passée en paramètre

 

    return { isLoading, data, error }

}