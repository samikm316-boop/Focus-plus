import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import GlassCard from "../../components/ui/GlassCard";
import StatCard from "../../components/ui/StatCard";
import TaskCard from "../../components/ui/TaskCard";
import GradientButton from "../../components/ui/GradientButton";

import { HomeService } from "../../services/home";

export default function HomeScreen({ openSidebar }) {
  const [data, setData] = useState(null);

  const token = "YOUR_TOKEN"; // later from AuthContext

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await HomeService.getDashboard(token);
    setData(res);
  };

  const completeTask = async (id) => {
    await HomeService.completeTask(id, token);
    load();
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#0B1220" }}
      contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
    >
      {/* HEADER */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 18,
        }}
      >
        <Text
          onPress={openSidebar}
          style={{ fontSize: 26, color: "white" }}
        >
          ☰
        </Text>

        <Text
          style={{ color: "white", fontSize: 18, fontWeight: "700" }}
        >
          Home
        </Text>

        <View style={{ width: 26 }} />
      </View>

      {/* PROFILE + XP TOP CARD */}
      <GlassCard style={{ marginBottom: 16 }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
          {data?.name || "User"}
        </Text>

        <Text style={{ color: "#9CA3AF", marginTop: 4 }}>
          Level {data?.level || 1} • {data?.location || "Unknown"}
        </Text>

        {/* XP + STREAK ROW */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 14,
          }}
        >
          <StatCard
            icon="🔥"
            label="Streak"
            value={data?.streak || 0}
            color="#F97316"
          />

          <StatCard
            icon="⭐"
            label="XP"
            value={data?.xp || 0}
            color="#6366F1"
          />
        </View>
      </GlassCard>

      {/* TODAY TASK SECTION */}
      <Text style={{ color: "#9CA3AF", marginBottom: 10 }}>
        Today’s Focus
      </Text>

      {data?.tasks?.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onComplete={completeTask}
        />
      ))}

      {/* PENDING TASK BOX */}
      <GlassCard style={{ marginTop: 16 }}>
        <Text style={{ color: "white", fontSize: 16 }}>
          Pending Tasks
        </Text>

        {data?.pending?.length ? (
          data.pending.map((t) => (
            <Text
              key={t.id}
              style={{ color: "#9CA3AF", marginTop: 6 }}
            >
              • {t.title}
            </Text>
          ))
        ) : (
          <Text style={{ color: "#9CA3AF", marginTop: 6 }}>
            No pending tasks 🎉
          </Text>
        )}
      </GlassCard>

      {/* MASTERY GAUGE */}
      <GlassCard style={{ marginTop: 16 }}>
        <Text style={{ color: "white", fontSize: 16 }}>
          Mastery
        </Text>

        <View
          style={{
            height: 8,
            backgroundColor: "#1F2937",
            borderRadius: 10,
            marginTop: 10,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: `${data?.mastery || 40}%`,
              height: 8,
              backgroundColor: "#7C3AED",
            }}
          />
        </View>

        <Text style={{ color: "#9CA3AF", marginTop: 6 }}>
          {data?.mastery || 40}% completion
        </Text>
      </GlassCard>

      {/* QUOTE SECTION (BOTTOM SPACE FIX YOU ASKED EARLIER) */}
      <GlassCard style={{ marginTop: 20 }}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontStyle: "italic",
          }}
        >
          “Discipline is built when motivation dies.”
        </Text>
      </GlassCard>
    </ScrollView>
  );
        }
