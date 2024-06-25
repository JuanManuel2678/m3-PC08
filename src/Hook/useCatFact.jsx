import { useState, useEffect } from 'react'
import { useFact } from './useFact';

export const useCatFact = () => {
    const [fact, setFact ] = useState();
  
    const refreshFact = () => {
      useFact().then(newFact => setFact(newFact))
    }
  
    useEffect(refreshFact, [])
  
    return {fact, refreshFact}
  }
  