function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heebo: "'Heebo', sans-serif",
        raleway: "'Raleway', sans-serif",
      },

      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-text-inverted"),
          "svg-accent": withOpacity("--color-svg-accent"),
          "svg-muted": withOpacity("--color-svg-accent-muted"),
          "svg-hover": withOpacity("--color-svg-hover"),
          "svg-hover-muted": withOpacity("--color-svg-hover-muted"),
        },
      },
      backgroundColor: {
        skin: {
          base: withOpacity("--color-base"),
          muted: withOpacity("--color-muted"),
          hue: withOpacity("--color-green-hue"),
          dull: withOpacity("--color-dull"),
          highlight: withOpacity("--color-highlight-base"),
          "btn-accent": withOpacity("--color-button-accent"),
          "btn-hover": withOpacity("--color-button-hover"),
          "btn-muted": withOpacity("--color-button-muted"),
        },
      },
      borderColor: {
        skin: {
          base: withOpacity(" --color-border-base"),
          muted: withOpacity(" --color-border-muted"),
        },
      },
      gradientColorStops: {
        skin: {
          base1: withOpacity("--color-gradient-base1"),
          base2: withOpacity("--color-gradient-base2"),
          complete1: withOpacity("--color-gradient-completed1"),
          complete2: withOpacity("--color-gradient-completed2"),
          wrong1: withOpacity("--color-gradient-wrong1"),
          wrong2: withOpacity("--color-gradient-wrong2"),
        },
      },
    },
  },
  plugins: [],
};
