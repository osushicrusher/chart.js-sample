// グラフ作成
const scatterChart = document.getElementById("myScatterChart");
export const myScatterChart = new Chart(scatterChart, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "1組",
        data: [
          { x: 90, y: 82 },
          { x: 39, y: 45 },
          { x: 63, y: 65 },
          { x: 83, y: 75 },
          { x: 83, y: 95 }
        ],
        backgroundColor: "RGBA(225,95,150, 1)"
      },
      {
        label: "2組",
        data: [
          { x: 97, y: 92 },
          { x: 63, y: 70 },
          { x: 48, y: 52 },
          { x: 83, y: 79 },
          { x: 66, y: 74 }
        ],
        backgroundColor: "RGBA(115,255,25, 1)"
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "試験成績"
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "英語"
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            stepSize: 10,
            callback: function (value, index, values) {
              return value + "点";
            }
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "数学"
          },
          ticks: {
            suggestedMax: 100,
            suggestedMin: 0,
            stepSize: 10,
            callback: function (value, index, values) {
              return value + "点";
            }
          }
        }
      ]
    }
  }
});
