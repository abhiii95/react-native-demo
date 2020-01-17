import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { format } from "date-fns";
import { Colors, Layout } from "../constants";

export default class TalkFooter extends React.PureComponent {
  render() {
    const { details } = this.props;
    const formattedStart = format(details.eventStart, "h:mmA");
    let roomName = details.card[0].room ? details.card[0].room.name : null;
    if (roomName && roomName.length > 20) {
      roomName = roomName.substring(0, 17) + `...`;
    }
    return (
      <View style={styles.container}>
        <View style={styles.details}>
          <View style={styles.detail}>
            <Text style={styles.detailLabel}>Start</Text>
            <Text style={styles.detailText}>{formattedStart}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailLabel}>Duration</Text>
            <Text style={styles.detailText}>
              {`${details.duration} Minutes`}
            </Text>
          </View>
          {roomName && (
            <View style={styles.detail}>
              <Text style={styles.detailLabel}>Room</Text>
              <Text
                style={[styles.detailText, { color: details.card[0].room.color.hex }]}
              >
                {`${roomName}`}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 13,
    paddingHorizontal: Layout.doubleBaseMargin,
    borderBottomLeftRadius: Layout.cardRadius,
    borderBottomRightRadius: Layout.cardRadius,
    backgroundColor: Colors.silver
  },
  details: {
    flex: 1,
    flexDirection: "row"
  },
  detail: {
    paddingRight: Layout.doubleBaseMargin
  },
  detailLabel: {
    fontFamily: "Montserrat-Light",
    fontSize: 11,
    color: Colors.lightText,
    letterSpacing: 0
  },
  detailText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 11,
    color: Colors.darkPurple,
    letterSpacing: 0
  },
  remindMe: {
    flex: 1,
    alignItems: "stretch"
  },
  socialButtons: {
    alignItems: "center",
    flexDirection: "row"
  }
});
