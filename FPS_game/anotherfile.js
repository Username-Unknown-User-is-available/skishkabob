AFRAME.registerComponent("player-movement-sound", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        if (
          e.key === "ArrowUp" ||
          e.key === "ArrowRight" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowDown" &&
          e.key === "z"
        ) {
            
        }
      });
    },
  });