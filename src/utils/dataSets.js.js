const dataSets = {
  "1d": [
    { name: "Hour 1", uv: 6379.71 },
    { name: "Hour 2", uv: 4158.52 },
    { name: "Hour 3", uv: 2883.14 },
    { name: "Hour 4", uv: 4935.78 },
    { name: "Hour 5", uv: 2197.95 },
    { name: "Hour 6", uv: 3725.87 },
    { name: "Hour 7", uv: 2804.63 },
    { name: "Hour 8", uv: 4591.14 },
    { name: "Hour 9", uv: 1967.84 },
    { name: "Hour 10", uv: 3205.22 },
    { name: "Hour 11", uv: 5905.93 },
    { name: "Hour 12", uv: 4598.31 },
    { name: "Hour 13", uv: 1970.24 },
    { name: "Hour 14", uv: 3650.77 },
    { name: "Hour 15", uv: 2456.93 },
    { name: "Hour 16", uv: 3168.42 },
    { name: "Hour 17", uv: 2671.59 },
    { name: "Hour 18", uv: 3934.65 },
    { name: "Hour 19", uv: 3648.19 },
    { name: "Hour 20", uv: 3721.87 },
    { name: "Hour 21", uv: 3721.33 },
  ],
  "3d": [
    { name: "Day 1", uv: 3809.51 },
    { name: "Day 2", uv: 2134.89 },
    { name: "Day 3", uv: 4107.68 },
    { name: "Day 4", uv: 3210.24 },
    { name: "Day 5", uv: 2904.15 },
    { name: "Day 6", uv: 2234.22 },
    { name: "Day 7", uv: 3964.78 },
    { name: "Day 8", uv: 4310.59 },
    { name: "Day 9", uv: 2812.63 },
    { name: "Day 10", uv: 3468.93 },
    { name: "Day 11", uv: 1887.24 },
    { name: "Day 12", uv: 3607.95 },
    { name: "Day 13", uv: 2098.33 },
    { name: "Day 14", uv: 3726.41 },
    { name: "Day 15", uv: 2516.12 },
    { name: "Day 16", uv: 3392.76 },
    { name: "Day 17", uv: 2841.98 },
    { name: "Day 18", uv: 3660.12 },
  ],
  "1w": [
    { name: "Day 1", uv: 2395.83 },
    { name: "Day 2", uv: 3718.24 },
    { name: "Day 3", uv: 2879.62 },
    { name: "Day 4", uv: 4057.29 },
    { name: "Day 5", uv: 1742.39 },
    { name: "Day 6", uv: 3129.57 },
    { name: "Day 7", uv: 2697.4 },
    { name: "Day 8", uv: 4265.12 },
    { name: "Day 9", uv: 2984.94 },
    { name: "Day 10", uv: 3798.85 },
    { name: "Day 11", uv: 1992.6 },
    { name: "Day 12", uv: 3651.87 },
    { name: "Day 13", uv: 2372.39 },
    { name: "Day 14", uv: 4219.93 },
    { name: "Day 15", uv: 3190.84 },
    { name: "Day 16", uv: 2662.75 },
    { name: "Day 17", uv: 1532.23 },
  ],
  "1m": [
    { name: "Day 1", uv: 3795.22 },
    { name: "Day 2", uv: 2391.87 },
    { name: "Day 3", uv: 2672.4 },
    { name: "Day 4", uv: 4187.96 },
    { name: "Day 5", uv: 1962.51 },
    { name: "Day 6", uv: 3119.78 },
    { name: "Day 7", uv: 2281.67 },
    { name: "Day 8", uv: 3890.62 },
    { name: "Day 9", uv: 2745.94 },
    { name: "Day 10", uv: 3576.4 },
    { name: "Day 11", uv: 1438.29 },
    { name: "Day 12", uv: 3280.94 },
    { name: "Day 13", uv: 2110.23 },
    { name: "Day 14", uv: 3876.51 },
    { name: "Day 15", uv: 3064.12 },
    { name: "Day 16", uv: 2754.42 },
    { name: "Day 17", uv: 1625.68 },
    { name: "Day 18", uv: 3321.4 },
    { name: "Day 19", uv: 2098.76 },
    { name: "Day 20", uv: 3964.99 },
    { name: "Day 21", uv: 2891.47 },
    { name: "Day 22", uv: 1582.91 },
    { name: "Day 23", uv: 3463.83 },
    { name: "Day 24", uv: 2457.92 },
    { name: "Day 25", uv: 3985.4 },
    { name: "Day 26", uv: 2654.89 },
    { name: "Day 27", uv: 1784.55 },
    { name: "Day 28", uv: 3392.64 },
    { name: "Day 29", uv: 2310.95 },
    { name: "Day 30", uv: 4127.32 },
  ],
  "6m": [
    { name: "Month 1", uv: 3689.42 },
    { name: "Month 2", uv: 2911.85 },
    { name: "Month 3", uv: 2710.97 },
    { name: "Month 4", uv: 4123.5 },
    { name: "Month 5", uv: 1902.7 },
    { name: "Month 6", uv: 3185.34 },
    { name: "Month 7", uv: 2179.76 },
    { name: "Month 8", uv: 2809.42 },
    { name: "Month 9", uv: 4012.83 },
    { name: "Month 10", uv: 1439.89 },
    { name: "Month 11", uv: 3390.78 },
    { name: "Month 12", uv: 3560.24 },
  ],
  "1y": [
    { name: "Jan", uv: 1500.0 },
    { name: "Feb", uv: 2540.99 },
    { name: "Mar", uv: 2965.62 },
    { name: "Apr", uv: 3985.73 },
    { name: "May", uv: 1762.44 },
    { name: "Jun", uv: 3128.59 },
    { name: "Jul", uv: 2071.31 },
    { name: "Aug", uv: 3684.42 },
    { name: "Sep", uv: 4056.53 },
    { name: "Oct", uv: 2687.4 },
    { name: "Nov", uv: 3174.88 },
    { name: "Dec", uv: 1587.12 },
  ],
  max: [
    { name: "Jan", uv: 1532.95 },
    { name: "Feb", uv: 2498.29 },
    { name: "Mar", uv: 2891.75 },
    { name: "Apr", uv: 4095.68 },
    { name: "May", uv: 1922.19 },
    { name: "Jun", uv: 3085.43 },
    { name: "Jul", uv: 2134.87 },
    { name: "Aug", uv: 3734.92 },
    { name: "Sep", uv: 4157.49 },
    { name: "Oct", uv: 2652.34 },
    { name: "Nov", uv: 3287.98 },
    { name: "Dec", uv: 1502.73 },
    { name: "Year 1", uv: 3458.67 },
    { name: "Year 2", uv: 4025.11 },
    { name: "Year 3", uv: 2674.83 },
  ],
};

export default dataSets;
