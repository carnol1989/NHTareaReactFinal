import { useState } from "react"

const useForm = (initiaValueForm) => {
    const [formValue, setForm] = useState(initiaValueForm)

    const handleInput = ({ target }) => {
        setForm({
            ...formValue,
            [target.name]: target.value
        })
    }
    const setInitialForm = () => {
        setForm(initiaValueForm)
    }
    return [formValue, handleInput, setInitialForm]
}

export default useForm