import React from "react";
import {StyleProp, View, ViewStyle} from 'react-native';

type customViewProps = {
    style?: StyleProp<ViewStyle>;
}

const CustomView: React.FC<customViewProps> = ({children, style, ...props}) => {
    return (
        <View style={style} {...props}>
            {children}
        </View>
    )
}

export default CustomView;