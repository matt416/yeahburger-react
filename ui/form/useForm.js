import { useState }  from 'react';

export default function useForm(){
  const [status, setStatus] = useState({
    isSuccess: false,
    isLoading: false,
    isError: false
  })

  function updateState(newState){
    setStatus(prevState => ({
      ...prevState, ...newState
    }))
  }

  async function onSubmit (callback) {
    updateState({ isLoading: true })

    if (callback && typeof callback === "function"){
      try {
        await callback()
      } catch(e) {
        updateState({ isError: true })
        console.log("Error: ", e)
      } finally {
        updateState({ isLoading: false, isSuccess: true })
      }
    }
  }

  return { status, onSubmit }
}