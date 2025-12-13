import { FormProvider, useForm } from 'react-hook-form';
import { Button, StyleSheet } from 'react-native';

interface FormProps {
    action: string;
    onSubmit: (data: any) => void;
    children : React.ReactNode;
}

export default function Form({ action, onSubmit, children } : FormProps) {
    const methods = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
    });
    

    return (
        <FormProvider {...methods}>
            {children}
            <Button title={action} onPress={methods.handleSubmit(onSubmit)} />
        </FormProvider>
    )
}

const styles = StyleSheet.create({

});