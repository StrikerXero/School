let students = [
  { id: "01", name: "Jacob", sports: "Soccer" },
  { id: "02", name: "Valerie", sports: "Basketball" },
  { id: "03", name: "Blake", sports: "Soccer" },
  { id: "04", name: "Todd", sports: "Basketball" },
  { id: "05", name: "Virginia", sports: "Hockey" },
  { id: "06", name: "Leo", sports: "Tennis" },
  { id: "07", name: "Killian", sports: "Hockey" },
  { id: "08", name: "Jennifer", sports: "Basketball" },
  { id: "09", name: "Leo", sports: "Tennis" },
  { id: "10", name: "Duke", sports: "Basketball" },
];
console.log("beforefilter");
const sportsFilter = students.filter((sport) => sport.sports == "Basketball");
const basketballPlayers = sportsFilter.map((names) => names.name);
console.log(basketballPlayers);