
import { useImage } from "../Hook/useImage";

export const Imagenes = () => {
 const { imageUrl } = useImage({ fact: 'cat' }) 

  return (
  <>
   {imageUrl && (<img className="rounded-lg border-2 border-black h-[600px] shadow-gray-900"
          src={imageUrl }
        />
      )}
  </>
  )
}

