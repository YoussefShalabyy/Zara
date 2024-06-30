import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Input from "../../components/Input";
import Btn from "../../components/Btn";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const { width, height } = Dimensions.get("window");

export default function AddItem() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      const newImages = result.assets.map((asset) => asset.uri);
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleAdd = async () => {
   if (!title||!price||!color||!size||!images) {
    Alert.alert("ZARA","Please Fill All The Fields")
    return;
   }
   setLoading(true)
   try {
    const storage = getStorage();
    const downloadUrls = [];
   
    for (const image of images) {
      const response = await fetch(image);
      const blob = await response.blob();
      const storageRef = ref(storage, "Cloth/" + Date.now() + ".jpg");
      const snapshot = await uploadBytes(storageRef, blob);
      const downloadUrl = await getDownloadURL(snapshot.ref);
      downloadUrls.push(downloadUrl);
    }
    
    const docRef = await addDoc(collection(db, "cloth"), {
      title: title,
      price: price,
      color: color,
      size: size,
      images: downloadUrls,
    });
    if (docRef.id) {
      setLoading(false)
      Alert.alert("Zara","Added Successfully..!")
      setImages([])
      setColor("")
      setPrice("")
      setTitle("")
      setSize("")
    }
   } catch (error) {
    Alert.alert("Zara",error)
   }
    
  };

  const renderImage = ({ item }) => (
    <Image source={{ uri: item }} style={[styles.image,{marginRight:"0.3%"}]} />
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <View style={styles.container}>
        
          {images.length > 0 ? (
            <View style={styles.imageContainer}>
              <FlatList
                data={images}
                renderItem={renderImage}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                contentContainerStyle={{ alignItems: "center" }}
              />
            </View>
          ) : (
            <TouchableOpacity onPress={pickImage}>
              <Image
                style={styles.image}
                source={require("../../assets/placeholder.png")}
              />
            </TouchableOpacity>
          )}
        <Input placeholder="Title" onChangeText={setTitle} value={title} />
        <Input placeholder="Price" onChangeText={setPrice} value={price} />
        <Input placeholder="Color" onChangeText={setColor} value={color} />
        <Input placeholder="Size" onChangeText={setSize} value={size} />

        <Btn
          text="Add Item"
          ps={styles.ps}
          ts={styles.ts}
          onPress={handleAdd}
          loading={loading}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    paddingVertical: 20,
  },
  imageContainer: {
    height: height * 0.3,
  },
  ps: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    width: width * 0.8,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  ts: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  image: {
    width: width * 0.6,
    height: height * 0.25,
    borderRadius: 10,
  },
  // addButton: {
  //   marginBottom: 20,
  //   padding: 10,
  //   backgroundColor: "#fff",
  //   borderRadius: 5,
  // },
  // addButtonText: {
  //   color: "#000",
  //   fontSize: 16,
  // },
});
