import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Checkbox, FormControlLabel, FormGroup, FormControl } from '@mui/material';
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


const ComponentA = ({inputState,setInputState,flag, setFlag}:propsType) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><Input {...register("firstName", { required: true })} onChange={e => setInputState(e.target.value)} value={inputState}/></div>
            {errors.firstName && <div><span>This field is required</span></div>}
            <FormControl>
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={flag} onChange={()=>setFlag(!flag)}/> } label="" />
                </FormGroup>
                </FormControl>
            <div><Input type="submit" /></div>
        </form>
    );
}

export default ComponentA;