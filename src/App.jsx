import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

/**simple inter = prinic*year/ */


function App() {
//state to hold 
  const[principal,setPrincipal]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const[interest,setInter] = useState(0)

//condionoal 
 
     const[isPrincipal,setIsPrincipal] =useState(true)
     const[isRate,setIsRate] =useState(true)
     const[isYear,setIsYear] =useState(true)

  const validate=(e)=>{
    const{name,value}=e.target
    console.log(name);
    console.log(value);

    /*console.log(!!value.match(/^[0-9]*$/));**/

    if(!!value.match(/^[0-9]*$/)){
      if(name=='principal') {
       setPrincipal(value)
        setIsPrincipal(true)
      }
      else if (name=='rate') {
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }

    } 
    else{
      if(name=='principal'){
        setPrincipal(value)
        setIsPrincipal(false)
      }
      else if(name=='rate'){
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }
    }

    
  }
 //reset function
  const handleReset = ()=> {
    setPrincipal(0)
    setRate(0)
    setYear(0)
    setIsPrincipal(true)
    setIsRate(true)
    setIsYear(true)
    setInter(0)
  }
 //calcualate

 const handleCalcu = ()=>{
  setInter( principal*rate*year)/100
 }




  

  return (
    <>
    <div className='main'>
      <div className='sub p-5'>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest easily</p>
        <div className='w-100 d-flex justify-content-center align-items-center result rounded mt-5 shadow flex-column'>
          <h1>₹{interest}</h1>
          <p>Total simple interest</p>
        </div>
  <form action="" className='mt-5'>
  <TextField id="outlined-basic" name='principal' value={principal || ""} label=" ₹ Principal Amount" variant="outlined" className='w-100 'onChange={(e)=>validate(e)} />
   {!isPrincipal && <p className='text-danger'>Invalid input</p> }
  <TextField id="outlined-basic" name='rate'   value={rate || ""}label=" Rate of interest(p.a) % " variant="outlined" className='w-100 mt-3'onChange={(e)=>validate(e)} />
 {!isRate && <p className='text-danger'>Invalid input</p>}
  <TextField id="outlined-basic" name='year'    value={year || ""} label="Year" variant="outlined" className='w-100 mt-3' onChange={(e)=>validate(e)} />
  
  {!isYear && <p className='text-danger'>Invalid input</p>}
  <div className='d-flex mt-4 justify-content-between'>

   <Button  onClick={handleCalcu} className='w-50 p-3 me-3'   variant="contained" color='success'
   disabled={isPrincipal && isRate && isYear?false:true}>Calculate</Button>

      <Button onClick={handleReset} className='w-50 p-3 ' variant="outlined" color='primary'>Reset</Button>

  </div>

  </form>
       
      </div>

    </div>
     
    </>
  )
}

export default App
