import React,{useState} from 'react'
import {v4} from 'uuid'
import styles from './form.module.css'
import {
  Button
} from '@chakra-ui/react'
const Form = () => {
    const[form,setForm]= useState({id:v4()})
    const handeonChange=(e)=>{
        let{name,value,checked,type,files}= e.target
        if(type==="checkbox"){
            setForm({
                ...form,[name]:checked,
         })
        }else if(type==="file"){
            setForm({
                ...form,[name]:files,
         })
        }else{
            setForm({
                ...form,[name]:value,
         })
        }
    }
    const handeOnSubmit=(e)=>{
    e.preventDefault();
    fetch("http://localhost:8080/Data",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(
          form,
        )
      })
      .then((res) => res.json())
        .then((res) => {
            console.log(res)
            setForm(res)
        })
    }
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <h1  className={styles.heading}>Employee-Form</h1>
        <form onSubmit={handeOnSubmit}>
            <label>Name:</label>
            <input className={styles.input} type="text" placeholder='Enter Name...'
            name='name'
            onChange={handeonChange}/>
           <br></br>
            <label>Age:</label>
            <input className={styles.input1}type="Number" placeholder='Enter Age...'
            name='age'
            onChange={handeonChange}/>
            <br></br>
            <label>Address:</label>
            <input type="text"  className={styles.input4} placeholder='Enter Address...'
            name='address'
            onChange={handeonChange}/>
            <br></br>
            <label>Department:</label>
            <select name="department" className={styles.input5} onChange={handeonChange}>
                <option value="">select Department.</option>
                <option value="FWD">FWD</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Java Backend">Java Backend</option>
            </select>
            <br></br>
            <label>Salary:</label>
            <input className={styles.input6} type="Number" placeholder='Enter Salary...'name='salary'
            onChange={handeonChange}/>
            <br></br>
            <label >Marital: </label>
            <input name="marital"type="radio"
            value="Maried"
            onChange={handeonChange}/>
            <label>Maried </label>
            <input name="marital"type="radio"
            value="Unmaried"
            onChange={handeonChange}/>
            <label>Unmaried</label>
            <br></br>
            <label>Profile Photo: </label>
            <input type="file"
            name="photo"
            accept='image/png, image/jpeg, application/pdf'
            files={form.photo}
            onChange={handeonChange}/>
            <br></br>
            <br></br>
            <div className={styles.btn}>
            <Button type='submit'>Submit</Button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Form