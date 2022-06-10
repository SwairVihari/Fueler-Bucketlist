import React,{useState,useEffect} from 'react'
import Styles from './ViewBuckets.module.css'
import axios from 'axios'



const ViewBuckets = () => {
   

    const [buckets, setBuckets] = useState(null);
    const getbuckets = async()=>{
        const {data}  = await axios.get("/api/v1/test/getbuckets");
        console.log(data.buckets)
        setBuckets(data.buckets)
    };

    useEffect(() => {
        getbuckets()
    }, []);
  return (
      <>
      <h1 className={Styles.header}>Bucket List of Peoples</h1>
      
          <div className={Styles.bigContainer}>
               {  
               buckets && buckets.map((item,index)=> 
               <div className={Styles.container}> 
               <p>{index+1}</p>
               <ul>
               {item.bucketitems.map((t)=>
               <li className={Styles.item}>{t.bucketitem}</li>)}
               </ul> 
               </div>)
                }
</div>

      

      </>
      
  )
}

export default ViewBuckets