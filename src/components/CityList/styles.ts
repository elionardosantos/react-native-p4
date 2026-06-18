import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 12,
    fontWeight: "600",
    color: "#6B7280",
    textTransform: "uppercase",
    letterSpacing: 0.7,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  emptyList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 14,
  },
  itemEmoji: {
    fontSize: 25,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
  itemCountry: {
    fontSize: 12,
    color: "#9ca3af",
    marginTop: 2,
  },
  separator: {
    height: 8,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
    gap: 8,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#347151",
    marginTop: 8,
  },
  emptySubtitle: {
    fontSize: 13,
    color: "#9ca3af",
    textAlign: "center",
  },
});
