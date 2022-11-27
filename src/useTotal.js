import {useState} from "react"

export default function useTotal() {
  const [total, setTotal] = useState(0)

  function more(prev) {
    setTotal(prev + 1)
  }

  function less(prev) {
   if(prev > 0) {
    setTotal(prev -1)
   } else {
    setTotal(0)
   }
  }

  return {total, more, less}
}