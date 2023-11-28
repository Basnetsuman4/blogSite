import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)



    useEffect(() => {
        // console.log('use effect ran')
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }) //fetch with this url
                // action after fetch
                .then((res) => {
                    // console.log(res)
                    // check the staus if true or not
                    if (!res.ok) {
                        // console this message if status is flase
                        setError(true)
                        setIsPending(false)
                        throw Error(`Opss!! Error Encountered. ${res.status} ${res.statusText}`)
                    }

                    return res.json() // this one is promise
                })
                .then((data) => {
                    // here comes the data
                    // console.log(data)
                    setData(data)
                    setIsPending(false)
                })
                .catch((err) => {

                    if (err.name === 'AbortError') {
                        console.log('fetch aborted!!!');
                    }
                    else {

                        setError(err.message)
                        setIsPending(false)
                    }

                })
        }, 300)

        return () => {
            console.log('Clean Up');
            abortCont.abort();
        }

    }, [])

    return { data, isPending, error }



}

export default useFetch;