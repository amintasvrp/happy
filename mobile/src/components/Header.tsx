import React from "react";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { RootStackParams } from "../@types/RootStackParams";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: String;
  showCancel?: boolean;
}

export default function Header({ title, showCancel = true }: HeaderProps) {
  const { goBack, navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleGoBackToHomepage = () => {
    navigate("OrphanagesMap");
  };

  const xColor = showCancel ? "#FF669D" : "#f9fafc";

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <BorderlessButton>
          <Feather name="arrow-left" size={24} color="#15B6D6" />
        </BorderlessButton>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={handleGoBackToHomepage}>
        <BorderlessButton>
          <Feather name="x" size={24} color={xColor} />
        </BorderlessButton>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#f9fafc",
    borderBottomWidth: 1,
    borderColor: "#DDE3F0",
    paddingTop: 44,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontFamily: "Nunito_600SemiBold",
    color: "#8fa7b3",
    fontSize: 16,
  },
});
