import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, FormControl, MenuItem, InputLabel, Select, Radio } from '@mui/material';

type Inputs = {
    firstName: string,
};


  interface propsType {
    inputState: string;
    setInputState: (value:string)=>void
    flag:boolean,
    setFlag: (value:boolean)=> void
  }

const ComponentC = ({inputState,setInputState, flag, setFlag}:propsType) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        const JsonObj = JSON.stringify(data);
        return JsonObj;
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><Input {...register("firstName", { required: true })} onChange={e => setInputState(e.target.value)} value={inputState}/></div>
            {errors.firstName && <div><span>This field is required</span></div>}
            <FormControl >
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={flag === true ? 'Yes' : 'No'}
                    onChange={()=>setFlag(!flag)}
                >
                    <MenuItem value={'Yes'}>Yes</MenuItem>
                    <MenuItem value={'No'}>No</MenuItem>
                </Select>
            </FormControl>
            <div><Input type="submit" /></div>
        </form>
    );
}

export default ComponentC;