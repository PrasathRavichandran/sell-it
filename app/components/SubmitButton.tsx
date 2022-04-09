import React from "react";
import {useFormikContext} from "formik";

import {Colors} from "../config/Colors";
import Button from "./Button";

const SubmitButton: React.FC<{ title: string }> = ({title}) => {
    const {handleSubmit} = useFormikContext();
    return (
        <Button backgroundColor={Colors.tomato} onPress={handleSubmit}>
            {title}
        </Button>
    );
}

export default SubmitButton;