import Lottie from "lottie-react";
import NotFoundAnimation from '../Assets/NotFoundAnimation.json'

const NotFound = ({ setResultShown }) => {
  return (
    <div className="flex flex-col w-full h-full my-16 items-center justify-between gap-10">
      <Lottie animationData={NotFoundAnimation} />
      <div className="text-center -mt-4">
        <h2 className="text-3xl font-bold ">Oops! no results found.</h2>
        <p className="mt-3 text-slate-500">We cannot found any results based on your search!</p>
      </div>
      <div>
        <button className="py-3 px-8 rounded-full bg-transparent border font-medium" onClick={() => setResultShown(prev => !prev)}>Go back</button>
      </div>
    </div>
  )
}

export default NotFound;