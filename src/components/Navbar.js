import React from "react";
export default function Navbar({setPage}){
  return(
        <>
          <button onClick={()=>setPage('planets')}>Planets</button>
          <button onClick={()=>setPage('people')}>people</button>
          </>

  )
}
