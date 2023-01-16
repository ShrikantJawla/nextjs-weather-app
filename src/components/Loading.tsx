import React, { useEffect } from 'react'
import Lottie from 'lottie-react'
import loadingAnim from '../assets/99274-loading.json'

interface Props {}

const Loading = (props: Props) => {
  const [isVisible, setIsVisible] = React.useState(true)
  useEffect(() => {
    let id: NodeJS.Timeout
    id = setTimeout(() => {
      setIsVisible(false)
    }, 5000)
    return () => clearTimeout(id)
  }, [])
  return (
    <>
      {isVisible && (
        <div className="w-full fixed z-[100] top-0 left-0 h-[100vh] flex justify-center items-center bg-black">
          <Lottie
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: 'inherit',
            }}
            animationData={loadingAnim}
          />
        </div>
      )}
    </>
  )
}

export default Loading
