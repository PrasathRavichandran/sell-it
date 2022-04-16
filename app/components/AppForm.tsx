import React from "react";
import {Formik, FormikValues} from 'formik';

import {FormikHelpers} from "formik/dist/types";

type AppFormProps = {
    initialValues: FormikValues,
    onSubmit: (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => void | Promise<any>,
    validationSchema: any
}

const AppForm: React.FC<AppFormProps> = ({initialValues, onSubmit, validationSchema, children}) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    );
}

export default AppForm;