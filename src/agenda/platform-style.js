import {Dimensions} from 'react-native';
const dimension = Dimensions.get('window');

export default function platformStyles(appStyle) {
  return {
    knob: {
      width: 38,
      height: 7,
      marginTop: 10,
      borderRadius: 3,
      backgroundColor: "white"
    },
    weekdays: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      position: 'absolute',
      alignItems: "center",
      bottom: dimension.height - dimension.height * .35,
      flexDirection: 'row',
      paddingLeft: 16,
      paddingRight: 16,
      justifyContent: 'space-evenly',
      paddingTop: 15,
      paddingBottom: 7,
      backgroundColor: appStyle.calendarBackground,
    },
  };
}
