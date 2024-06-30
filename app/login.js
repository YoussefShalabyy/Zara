import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Btn from "../components/Btn";
import { router } from "expo-router";
import Input from "../components/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    router.navigate("home")
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ZARA</Text>
      </View>

      <View style={styles.body}>
        <Input
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          style={styles.in}
        />
        <Input
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          style={styles.in}
          secureTextEntry={true}
        />
        <View style={{ width: "100%" }}>
          <Btn
            text="Forgot Password?"
            ts={{ color: "#89CFF0", marginLeft: "6%", fontSize: 20 }}
            onPress={handleLogin}
          />
        </View>
        <Btn text="Login" ps={styles.ps} ts={styles.ts} onPress={handleLogin} />
        <View style={{ width: "100%" }}>
          <Btn
            text="Need An Account? Register"
            ts={{ color: "#89CFF0", marginLeft: "6%", fontSize: 20 }}
            onPress={()=>router.navigate("register")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flex: 1, // Adjust this value to control the size of the header section
    justifyContent: "center",
    alignItems: "center",
    
  },
  headerText: {
    color: "#fff",
    fontSize: 60,
    fontWeight: "500", 
    marginTop:"20%"
  },
  body: {
    flex: 3, // Adjust this value to control the size of the body section
    alignItems: "center",
  },
  in: {
    fontSize: 25,
    paddingHorizontal: 20,
    paddingVertical: 20,
    minWidth: "95%",
  },
  ps: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    borderWidth: 1,
    borderColor: "white",
    width: "95%",
    borderRadius: 999,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  ts: {
    color: "white",
    fontSize: 25,
  },
});
