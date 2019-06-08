import { StyleSheet } from "react-native";
import Colors from "./Colors";
const APPBAR_HEIGHT = 60;

export default (AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  headerBackground: {
    height: APPBAR_HEIGHT,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: Colors.orange
  },
  searchBar: {
    marginHorizontal: "2%",
    backgroundColor: Colors.white,
    padding: 10,
    fontSize: 18,
    marginVertical: 5,
    color: Colors.orange
  },
  normalHeader: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1
  },
  backIcon: {
    justifyContent: "center",
    alignContent: "center",
    paddingStart: 20
  },
  headerTitleText: {
    color: Colors.orange,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.white,
    flex: 1
  },
  viewSeparator: {
    backgroundColor: "#FFF",
    marginVertical: 5
  },
  emptyView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  emptyText: { color: Colors.orange, fontSize: 18 },
  listItem: {
    flex: 1,
    flexDirection: "column",
    elevation: 2,
    backgroundColor: Colors.very_light_gray,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10
  },
  listNameText: { fontSize: 18, fontWeight: "bold", color: Colors.orange },
  listTypeText: { fontSize: 14, fontWeight: "bold", color: Colors.black },
  imageView: { height: 250, width: "100%" },
  tableView: {
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: "column"
  },
  rowView: { flexDirection: "row", marginHorizontal: 10, alignItems: "center" },
  labelText: { color: Colors.black, fontWeight: "bold", fontSize: 18 },
  itemText: { fontSize: 18, color: Colors.bluishgray }
}));
