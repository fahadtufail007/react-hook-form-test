import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
// import Button from '@mui/material/Button';

type Inputs = {
    firstName: string,
};

interface propsType {
    inputState: string;
    setInputState: (value:string)=>void
    flag:boolean,
    setFlag: (value:boolean)=> void
  }

const ComponentB = ({inputState,setInputState,flag, setFlag}:propsType) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        const JsonObj = JSON.stringify(data);
        return JsonObj;
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><Input {...register("firstName", { required: true })}  onChange={e => setInputState(e.target.value)} value={inputState}/></div>
            {errors.firstName && <div><span>This field is required</span></div>}
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="yes" control={<Radio  checked={flag === true} onChange={()=>{setFlag(true)}} />} label="YES" />
                    <FormControlLabel value="No" control={<Radio  checked={flag === false} onChange={()=>{setFlag(false)}}/>} label="NO" />
                </RadioGroup>
            </FormControl>
            <div><Input type="submit" /></div>
        </form>
    );
}

export default ComponentB;