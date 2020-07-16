import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Androw from "react-native-androw";
import Spinner from "react-native-spinkit";
/**
 * ? Local Imports
 */
import styles, { _container } from "./Button.style";

const Button = (props) => {
  const {
    text,
    width,
    height,
    onPress,
    spinnerEnable,
    backgroundColor,
    spinnerVisibility,
    TextComponent = Text,
  } = props;
  return (
    <Androw style={styles.shadowStyle}>
      <TouchableOpacity
        onPress={onPress}
        style={_container(width, height, backgroundColor)}
      >
        {spinnerEnable && (
          <Spinner
            size={15}
            color="#fff"
            type="FadingCircleAlt"
            isVisible={spinnerVisibility}
          />
        )}
        {!spinnerVisibility && (
          <TextComponent style={styles.textStyle} {...props}>
            {text}
          </TextComponent>
        )}
      </TouchableOpacity>
    </Androw>
  );
};

Button.defaultProps = {
  width: 150,
  height: 40,
  text: "Gönder",
  spinnerEnable: false,
  spinnerVisibility: false,
  backgroundColor: "#059",
};

export default Button;
