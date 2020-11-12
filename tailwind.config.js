module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },

    purge: ["./resources/views/**/*.blade.php", "./resources/css/**/*.css"],
    theme: {
        extend: {
            spacing: {
                "26": "7rem",
                "36": "9rem",
                "52": "13rem",
                "72": "18rem",
                "75": "19rem",
                "84": "21rem",
                "96": "24rem",
                "100": "26rem",
                "105": "28rem",
                "110": "30rem",
                "115": "32rem",
                "120": "34rem",
                "125": "36rem",
                "130": "38rem",
                "135": "40rem",
                "140": "42rem",
                "145": "44rem",
                "150": "46rem",
                "152": "47rem",
                "155": "48rem",
                "160": "50rem",
                "170": "55rem",
                "177": "58rem",
                "180": "61rem"
            }
        }
    },
    variants: {
        transitionProperty: ["responsive", "motion-safe", "motion-reduce"]
    },
    plugins: [require("@tailwindcss/ui")]
};
