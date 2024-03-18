import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { login } from "./../services/auth";

export default function WelcomePage({ setAuthenticated }) {
    // const navigation = useNavigation();

    // const handleDemoLogin = async () => {
    //     const user = await login("demo@aa.io", "password");
    //     if (!user.errors) {
    //         setAuthenticated(true);
    //         navigation.navigate("Home"); // Replace "Home" with the name of your home screen
    //     }
    // };

    return (
        <View style={[styles.container]}>
            <ImageBackground
                source={require("../assets/images/homePage.png")}
                style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    backgroundColor: "blue",
                    height: "auto",
                }}
            >
                <View style={styles.headerTextWrapper}>
                    <Text style={styles.welcomeText}>Welcome to Umami</Text>
                    <Text style={styles.headerText}>
                        The Ultimate {"\n"}CookBook App.
                    </Text>
                    <Text style={styles.welcomeTextAbout}>
                        On the site, you will find recipes for many of the most
                        popular dishes,{" "}
                        <Text style={styles.welcomeTextAboutBreak} />
                        as well as a number of traditional recipes that you can
                        explore.
                    </Text>
                    <TouchableOpacity
                        // onPress={handleDemoLogin}
                        style={styles.demoButton}
                    >
                        <Text style={styles.demoButtonText}>Demo User</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue", // Set your desired background color
    },
    headerTextWrapper: {
        alignItems: "center",
    },
    welcomeText: {
        fontSize: 16,
        marginBottom: 10,
    },
    headerText: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 20,
    },
    welcomeTextAbout: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
    welcomeTextAboutBreak: {
        textAlign: "center",
    },
    demoButton: {
        backgroundColor: "#007BFF", // Set your desired button color
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
    },
    demoButtonText: {
        color: "#fff", // Set your desired button text color
        fontSize: 16,
        textAlign: "center",
    },
});
