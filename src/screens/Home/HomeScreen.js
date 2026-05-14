import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { HomeService } from "../../services/home";

export default function HomeScreen() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = "YOUR_TOKEN_HERE"; // later from AuthContext

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await HomeService.getDashboard(token);
    setData(res);
  };

  const completeTask = async (id) => {
    setLoading(true);
    await HomeService.completeTask(id, token);
    await loadData();
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#0B1220" }}>
      <Text style={{ color: "white", fontSize: 22, marginBottom: 10 }}>
        Welcome 👋
      </Text>

      {/* XP Cards */}
      <View style={{ flexDirection: "row" }}>
        <Card title="Streak" value={data?.streak || 0} icon="🔥" color="#F97316" />
        <Card title="Study XP" value={data?.xp || 0} icon="⭐" color="#6366F1" />
      </View>

      {/* Task Section */}
      <Text style={{ color: "#9CA3AF", marginTop: 20 }}>Today's Tasks</Text>

      {data?.tasks?.map((task) => (
        <View
          key={task.id}
          style={{
            backgroundColor: "#111827",
            padding: 14,
            borderRadius: 12,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white" }}>{task.title}</Text>

          <Button
            title={`Complete +${task.xp} XP`}
            loading={loading}
            onPress={() => completeTask(task.id)}
          />
        </View>
      ))}
    </View>
  );
            }
