import { StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList, SafeAreaView  } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import '@expo/match-media'

import { useMediaQuery } from "react-responsive";

const workspaceData = [
  { id: "1", name: "math" },
  { id: "2", name: "english" },
  { id: "3", name: "physics" },
  { id: "4", name: "english" },
]

export type RootStackParamList = {
  Profile: { name: string } | undefined;
};

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const isPhone = useMediaQuery({    
    maxWidth: 550,
  });
  const isTablet = useMediaQuery({    
    maxWidth: 768,
    minWidth: 551
  });
  const isLaptop = useMediaQuery({    
    maxWidth: 1024,
    minWidth: 769
  });

  const workspace = ({item}: {item: {id: string, name: string}}) => {
    let style: {} = styles.card_desktop
    let device = "Desktop"
    if (isPhone) {
      style = styles.card_phone
      device = "Phone"
    }
    if (isTablet) {
      style = styles.card_tablet
      device = "Tablet"
    }
    
    return (
      <View style={[styles.card, style]}>
          {`${item.name} ${device}`}
      </View>
    )
  }

  let columns = 2

  if (isTablet || isPhone) {
    columns = 1
  }

  return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <View style={{height: "10%", width: "100%", backgroundColor: "#FFFFFF"}}>
            <TouchableOpacity onPress={() => {
              navigation.navigate("Profile", { name: "Jane" })
            }}>
              <Text>This is my Hos123123me</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView style={styles.workspaces}>
            <FlatList 
              data={workspaceData} 
              renderItem={workspace} 
              keyExtractor={(item) => item.id} 
              extraData={{isLaptop, isPhone, isTablet}}
              contentContainerStyle={styles.containerStype}
              numColumns={columns}
              key={columns}
            />
          </ScrollView>
        </View>
      </View>
  )
}
//style={styles.workspaces} centerContent={true} fadingEdgeLength={1} showsHorizontalScrollIndicator={false} 
const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",

      backgroundColor: '#ACF123',
      height: "89%",
    },
    container2: {
      backgroundColor: '#000299',
      height: "80%",
      width: "90%",
      maxWidth: 1000,
    },
    workspaces: {
      height: "90%", 
      width: "100%", 
      backgroundColor: "#AGE615"
    },
    card: {
      backgroundColor: "#ADE123",
      borderColor: "#000000",
      borderWidth: 2,
    },
    card_phone: {
      width: "100%",
      maxWidth: 400,
      height: 200
    },
    card_desktop: {
      width: "100%",
      maxWidth: 480,
      height: 200
    },
    card_tablet: {
      width: "100%",
      maxWidth: 495,
      height: 200
    },
    containerStype: {
      display: "flex",
      justifyContent: "center",
      
      padding: 10,
      gap: 10,

      width: "100%",
      height: "100%",
      backgroundColor: "#000000",
    }
  });
  