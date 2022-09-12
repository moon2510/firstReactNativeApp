import { StatusBar } from 'expo-status-bar';
import {SafeAreaView,ScrollView, StyleSheet, Text, TouchableOpacity,View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker';
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

export default function App() {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }
  
  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) => (
      current === CameraType.back ? CameraType.front : CameraType.back
    ));
    }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text>Hello My name is Nguyệt Mobile dễ ẹc</Text>
      <StatusBar style="auto" />
      
      {/* <Image
          style={{
            width: '100%', 
            height: '10%',

          }}
          source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}}
      /> */}
      

      <Card containerStyle={styles.card_today}>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider/>
        <Card.Image source={require('../AwesomeProject/assets/meo.jpg')} />
        {/* <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
        </Text> */}
        <Text style={styles.instructions}>
          To share a photo from your phone with a friend, just press the button below!
        </Text>

        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Text style={styles.buttonText}  ><Icon type='antdesign' name='camera' color='#ffffff' />Pick a photo</Text>
        </TouchableOpacity>
        {/* <Button
          icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='HAHA' /> */}
      </Card>
      {/* <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera> */}
      
      <ImagedCarouselCard
            height={200}
            width={200}
            shadowColor="#051934"
            source={{
              uri:
                "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
            }}
          />
          <View style={{ marginTop: 32 }}>
            <ImagedCarouselCard />
          </View>

          <View style={{ marginTop: 32 }}>
            <ImagedCarouselCard
              height={200}
              width={200}
              shadowColor="#051934"
              source={{
                uri:
                  "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              }}
            />
          </View>

      <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      
    </ScrollView>
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 1,
    
  },
  text: {
    fontSize: 42,
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFA451',
    padding: 20,
    borderRadius: 5,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  card_today: {
    display: "flex",
    flexDirection: "column", 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    borderRadius: 10,
  },
  camera: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});