import React from "react";
import { View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

export const ProgressRing = () => {
  const size = 72;
  const strokeWidth = 6;
  const borderWidth = 2; // Width of the border
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const gapAngle = 0; // degrees of space between segments
  const segments = [
    { color: "#FFB34E", percentage: 30 },
    { color: "#47e959", percentage: 30 },
    { color: "#4CC7FC", percentage: 40 },
  ];

  let rotation = -90;

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg width={size} height={size}>
        {/* Background circle */}
        <Circle cx={size / 2} cy={size / 2} r={radius} stroke="#E9E9E9" strokeWidth={strokeWidth} fill="none" />

        <G rotation="0" originX={size / 2} originY={size / 2}>
          {segments.map((segment, index) => {
            const angle = (segment.percentage / 100) * 360 - gapAngle;
            const length = (angle / 360) * circumference;
            const dashArray = [length, circumference];
            const currentRotation = rotation;
            rotation += (segment.percentage / 100) * 360;

            return (
              <React.Fragment key={index}>
                {/* Border circle (rendered first, behind the main segment) */}
                <Circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke="#fff" // Border color
                  strokeWidth={strokeWidth + borderWidth * 2}
                  strokeDasharray={dashArray}
                  strokeLinecap="round"
                  rotation={currentRotation}
                  originX={size / 2}
                  originY={size / 2}
                  fill="none"
                />
                {/* Main segment circle */}
                <Circle
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
              </React.Fragment>
            );
          })}
        </G>
      </Svg>
    </View>
  );
};
