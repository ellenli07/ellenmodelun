/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.htm'],
  theme: {
    extend: {
      keyframes: {
        //This sets the keyframes of the slide animation.
        slidein: {
          from: {
            //This means that the element starts invisible and slightly above its end position
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            //This means that the element ends opaque and at its end position
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      //This sets how long the animation takes, and sets a slidein-delay variable. When the animation ends, the text is shown again with forwards, meaning that the element will retain the style values that is set on the last keyframe.
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
      },
    },
  },
  plugins: [],
}

