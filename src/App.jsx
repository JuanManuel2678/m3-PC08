import { useCatFact } from "./Hook/useCatFact";
import { Imagenes } from "./components/Imagenes";
import { Title } from "./components/Title";
import { useImage } from "./Hook/useImage";
import React from "react";

export default function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useImage({ fact }) 


  const handleClick = async () => {
      refreshFact()
 };
   
 

  return (
    <main className="flex flex-col justify-center items-center max-w-[1800px] h-[909px] m-auto font-[system-ui] gap-4 bg-[#074a66]">

      <Title title='App de gatitos'/>

      <button onClick={handleClick} className=" py-2 px-4 rounded-lg bg-[#721d1d] text-white cursor-pointer hover:bg-white  hover:text-black">
      Refresh img
    </button>

      {/* <Imagenes/> */}
      {imageUrl && (<img className="rounded-lg border-2 border-black h-[600px] shadow-gray-900"
          src={imageUrl}
          alt={`imgaen estraide del ${fact}`}
        />
      )}
     
      {fact && <p className="text-center font-bold text-white">{fact}</p>}

    </main>
  );
}








