import {Text, TextProps} from "react-native";
import React from "react";

const CustomText: React.FC<TextProps> = ({children, style, ...props}) => {
    return (
        <Text style={style} {...props}>
            {children}
        </Text>
    );
};

export default CustomText;
