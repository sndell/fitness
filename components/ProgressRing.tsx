import React from "react";
import { View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

export const ProgressRing = () => {
  const size = 200;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const gapAngle = 8; // degrees of space between segments
  const segments = [
    { color: "#E9E9E9", percentage: 100 },
    { color: "#4CAF50", percentage: 60 },
    { color: "#FFA726", percentage: 25 },
  ];

  let rotation = -90;

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg width={size} height={size}>
        {/* Background circle to act as white border */}
        <Circle cx={size / 2} cy={size / 2} r={radius} stroke="#fff" strokeWidth={strokeWidth} fill="none" />

        <G rotation="0" originX={size / 2} originY={size / 2}>
          {segments.map((segment, index) => {
            // Reduce the length slightly to allow for a gap
            const angle = (segment.percentage / 100) * 360 - gapAngle;
            const length = (angle / 360) * circumference;
            const dashArray = [length, circumference];
            const currentRotation = rotation;
            rotation += (segment.percentage / 100) * 360;

            return (
              <Circle
                key={index}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={segment.color}
                strokeWidth={strokeWidth}
                strokeDasharray={dashArray}
                strokeLinecap="round"
                rotation={currentRotation}
                originX={size / 2}
                originY={size / 2}
                fill="none"
              />
            );
          })}
        </G>
      </Svg>
    </View>
  );
};
