import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: { name: string } | undefined;
};

export default function Profile() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
          navigation.navigate("Home", { name: "Jane" })
        }}>
          <Text>This is my Home</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  