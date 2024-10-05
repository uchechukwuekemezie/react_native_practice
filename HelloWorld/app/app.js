import { View, Text, Image } from "react-native";
const logoImg = require("../assets/react native.png")

export default function App() {
    return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60}}>
        <Text>Trying out React native for the first time</Text>
        <Image source={logoImg} style={{ width: 200, height: 200}} />
        <Image source={{uri: "https://picsum.photos/seed/picsum/200"}} style={{ width: 200, height: 200}} />
    </View>
        )
}

