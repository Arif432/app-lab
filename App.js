import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TextInput, Button, ImageBackground, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-slate-600">

      <View className="bg-red-600 h-48">
        <Image
        className="w-40 h-28 mt-14 ml-28"
        source={{uri: "https://th.bing.com/th/id/OIP.OF59vsDmwxPP1tw7b_8clQHaE8?pid=ImgDet&rs=1"}} />
      </View>

      <View className="bg-orange-500 justify-center h-96">
          <TextInput className="bg-white m-10 h-10 p-2 text-lg rounded-lg" placeholder='enter name' />
          <TextInput placeholder='enter password' secureTextEntry className="bg-white m-10 h-10 p-2 text-lg rounded-lg" />
      </View>

      <View className="bg-cyan-200 h-64">
          <TouchableOpacity>
            <Text className="text-lg mt-16 ml-40 text-purple-500">Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity >
            <Text className="text-lg mt-4 ml-40 text-purple-500">Sign up</Text>
          </TouchableOpacity>

      </View>
    </View>
  );
}
