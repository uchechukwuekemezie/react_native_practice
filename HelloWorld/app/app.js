import { View, Text, Image, ScrollView, Button, Pressable } from "react-native";
const logoImg = require("../assets/react native.png")

// Use <ImageBackground></<ImageBackground> component to render images as a background. Other components can be nested within the image background component. 
// The ScrollView component helps to scroll the screen to view the content at the tail end of the screen. It does this by a wrapping technique.
// The disabled prop when using the button component serves as a tool to prevnt the button from registering an event when clicked or fired.

export default function App() {
    return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 30}}>
        <ScrollView>
        <Button title="Click me" onPress={() => console.log("Button pressed")} />
        <Pressable onPress={() => console.log("Image pressed")} >
            <Image source={logoImg} style={{ width: 300, height: 300}} />
        </Pressable>
        <Pressable onPress={() => console.log("Text pressed")} >
            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex modi accusamus omnis repudiandae eligendi facere doloremque numquam, nisi necessitatibus! Cumque neque iste necessitatibus aliquid. Soluta, aliquid amet repellendus temporibus unde modi dicta fuga cumque assumenda labore, voluptatum doloribus tempore debitis incidunt suscipit voluptas aperiam ducimus rem nulla sed nesciunt quia. Unde, nulla numquam? Officia repudiandae, iusto sunt repellendus, et repellat at rem est harum similique voluptate assumenda quam laudantium aut? Cumque velit ad praesentium corrupti eaque doloribus? Suscipit, cupiditate aut fuga eos quae magni accusamus nam delectus deserunt officia! Modi culpa impedit reprehenderit minima quaerat, fugit blanditiis a quam? Dolores?

            </Text>
        </Pressable>
        <Image source={logoImg} style={{ width: 300, height: 300}} />
        
        </ScrollView>
    </View>
        )
}

