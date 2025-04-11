import colors from "@/constants/colors";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={44} color={colors.green} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 34,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
