const pieChart = document.getElementById("myPieChart");
export const myPieChart = new Chart(pieChart, {
  type: "pie",
  data: {
    labels: ["A型", "O型", "B型", "AB型"],
    datasets: [
      {
        backgroundColor: ["#BB5179", "#FAFF67", "#58A27C", "#3C00FF"],
        data: [38, 31, 21, 10]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "血液型 割合"
    }
  }
});
