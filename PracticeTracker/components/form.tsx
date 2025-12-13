import { FormProvider, useForm } from "react-hook-form";
import { Button } from "react-native";

interface FormProps {
    title : string; 
    onSubmit : (data: any) => void;
    children : React.ReactNode;
}

export default function Form({ title, onSubmit, children }: FormProps, ) {
    const methods = useForm();

    return (
        <FormProvider {...methods}>
            {children}   
            <Button title={title} onPress={methods.handleSubmit(onSubmit)} />
        </ FormProvider>
        
         
    );
}
