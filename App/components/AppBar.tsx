import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { ReactNode } from "react"

enum AllOptions {
    Notes,
    Timer,
    Quiz
}

export function Option(props: { option: AllOptions }) {
    let imageUrl = ""

    switch (props.option) {
        case AllOptions.Notes:
            imageUrl = "https://img.icons8.com/dotty/1x/notepad.png"
            break
    }

    return (
        <TouchableOpacity style={styles.option_button}>
            <Image source={{ height: 70, width: 70, uri: imageUrl}}/>
        </TouchableOpacity>
    )
}

export function Options(props: { children: ReactNode }) {
    return (
        <View style={styles.option_bar}>
            {props.children}
        </View>
    )
}

export function HomeButton() {
    return (
        <TouchableOpacity style={styles.home_button}>
            <Image source={{ height: 90, width: 90, uri: "https://toppng.com/uploads/preview/hombutton-white-home-button-11563211148zdfdwfoi16.png"}}/>
        </TouchableOpacity>
    )
}

export default function AppBar() {
  return (
    <View style={styles.container}>
        <View style={styles.container2}>
            <Options>
                <Option option={AllOptions.Notes}/>
            </Options>
            
            <HomeButton />

            <Options>
                <Option option={AllOptions.Quiz}/>
            </Options>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",

    backgroundColor: '#000453',

    height: "100px",
    width: "100%",

    position: "absolute",
    bottom: 0,
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    backgroundColor: "#000294",
    
    height: "100%",
    width: "95%",
    maxWidth: 1000,
  },
  home_button: {
    height: 90,
    width: 90,
    backgroundColor: "#ffffff"
  },
  option_bar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    backgroundColor: '#000000',

    width: "40%",
    height: "100%"
  },
  option_button: {
    height: 70,
    width: 70,
    backgroundColor: '#ffffff',
  }
});
