import { useState } from "react"

const useCounter = (min, max) => {
    const [count, setCount] = useState(min)
    const handleCounter = () => {
        if (count < max) {
            setCount(count + 1)
        }
    }

    const handleCounterLess = () => {
        if (count > min) {
            setCount(count - 1)
        }
    }
    return {
        count,
        handleCounter,
        handleCounterLess
    }
}

export default useCounter