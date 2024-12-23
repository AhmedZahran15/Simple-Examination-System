const progressBarElement = document.querySelector(".progress-bar");
export function createProgressBar(score) {
  const Circle = new ProgressBar.Circle(progressBarElement, {
    trailWidth: 2,
    trailColor: "#60adff",
    easing: "easeInOut",
    duration: 1400,
    text: {
      style: {
        color: "#0056b3",
        font: "bold 3rem Arial",
        position: "absolute",
        left: "50%",
        top: "50%",
        padding: 0,
        margin: 0,
        transform: "translate(-50%, -50%)",
      },
      autoStyleContainer: false,
      value: score,
    },
    from: { color: "#007bff", width: 4 },
    to: { color: "#0056b3", width: 4 },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);
      circle.path.setAttribute("stroke-width", state.width);
      const value = Math.round(circle.value() * 10);
      circle.setText(value);
    },
  });
  Circle.animate(score / 10);
}
