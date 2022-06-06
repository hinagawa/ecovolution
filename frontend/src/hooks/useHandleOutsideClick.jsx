import { useRef, useEffect } from 'react'

const useHandleOutsideClick = () => {
  const ref = useRef()

  useEffect(() => {
    const handleClick = (event) => {
      if (
        ref.current && !ref.current.contains(event.target)
      ) {
        console.log('ssss')
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref])

  return ref
}
export default useHandleOutsideClick
