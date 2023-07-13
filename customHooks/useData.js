import { useState } from "react";
import { useEffect } from "react";
export const useData = ()=>{
    const[data,setData] = useState({
        data1:[],
        data2:[],
        data3:[]
    })
    useEffect(() => {
        const getData = async () => {
          try {
            fetch("https://jsonplaceholder.typicode.com/posts")
              .then((res) => res.json())
              .then((res) => setData({
                data1:res.slice(0, 14),
                data2:res.slice(14, 45),
                data3:res.slice(45, 100),
    
              }))
              .catch((err) => {throw new Error(err)})
          } catch (error) {
            throw new Error(error);
          }
        };
        getData();
      }, []);

      return data
}