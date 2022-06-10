import React, {useState} from 'react'
import Styles from './CreateBucket.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBucket = () => {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState([{  bucketitem : ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
     }
        
    let addFormFields = () => {
        setFormValues([...formValues, { bucketitem: "" }])
     }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    const handleSubmit = async(e) => {
        try{
        e.preventDefault()
        if(formValues[0].bucketitem === ""){
            alert("It can't be null")
            return;
        }
        const data = await axios.post("/api/v1/test/createbucket", formValues)
        console.log(data)
        alert("bucket list created")
        setFormValues([{bucketitem:" "}])
        navigate("/bucketlists")
    }
    catch(error){
        alert("Opps! There is an error")
    }
    }

    return (
        <div className={Styles.box}>
            <h4 className={Styles.header}>Create your BucketList</h4>
        <form  onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className={Styles.inputbox} key={index}>
              {/* <label>Bucket Item</label> */}
              <input className={Styles.input} placeholder="Enter your bucketlist item" type="text" name="bucketitem" value={element.bucketitem || ""} onChange={e => handleChange(index, e)} />

              {
                index ? 
                  <button type="button"  className={Styles.removebutton} onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className={Styles.buttonsection}>
              <button className={Styles.button} type="button" onClick={() => addFormFields()}>Add Item</button>
              <button className={Styles.button} type="submit">Submit</button>
          </div>
      </form>
      </div>
    )
}

export default CreateBucket