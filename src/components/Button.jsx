import { useCatFact } from "../Hook/useCatFact"

export const Button = ({text}) => {
    const { refreshFact  } = useCatFact()

    const handleClick = async () => {
        refreshFact()
   };
   

  return (
    <button onClick={handleClick} className=" py-2 px-4 rounded-lg bg-[#721d1d] text-white cursor-pointer hover:bg-white  hover:text-black">
    {text}
     </button>
  )
}


