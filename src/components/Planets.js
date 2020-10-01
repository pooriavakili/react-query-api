import React from "react";
import Planet from "./Planet";
import {useQuery} from "react-query"
const asyncFetch=async ()=>{
const res=await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}
const Planets=()=> {
  const {data,status}=useQuery('planets',asyncFetch)
  console.log(data)
  return(
  <>

    <p>Planets</p>
    {
      status==='loading'&&(
          <div>
            <p>loading data</p>
          </div>
      )
    }
    {
      status==='error'&&(
          <div>
            <p>data fetching error</p>
          </div>
      )
    }
    {
      status==='success'&&(
          <div>
            {
              data.map((planet)=><div><Planet key={planet.title} planet={planet}/></div>)
            }
          </div>
      )
    }
  </>
  )
}
export default Planets