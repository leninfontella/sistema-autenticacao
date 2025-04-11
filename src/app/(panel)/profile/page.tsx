import { useAuth } from "@/src/contexts/AuthContexts";
import { supabase } from "@/src/lib/supabase";
import { Alert, Button } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default function Profile() {
  const { setAuth, user } = useAuth();

  async function handleSignout() {
    const { error } = await supabase.auth.signOut();
    setAuth(null);

    if (error) {
      Alert.alert("Error", "Erro ao sair da conta");
      return;
    }
  }

  return (
    <View style={styles.container}>
      <Text>Você Entrou</Text>
      <Text>{user?.email}</Text>
      <Text>{user?.id}</Text>

      <Button title="Deslogar" onPress={handleSignout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
