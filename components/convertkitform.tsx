import { useState, useEffect } from 'react'
import Script from 'next/script'

export default function ConvertkitForm() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)

    }, [])

    useEffect(() => {
        let container = document.querySelector(".convertkit");
        let renderedForm = document.querySelector("[data-uid='1a638a3aff']")
        console.log("Reattaching the convertkit form where it should be rendered!", renderedForm)
        if (renderedForm) {
            container.appendChild(renderedForm)
        }
    }, [isClient])

    return (
        isClient ? <>
            <Script async data-uid="1a638a3aff" src="https://indie-dublin.ck.page/1a638a3aff/index.js"></Script>
        </> : <div>...!</div>)
} 