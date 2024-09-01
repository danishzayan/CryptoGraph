const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#4B40EE",
          color: "white",
          width: "98px",
          height: "33px",
          borderRadius: "5px",
          opacity: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ margin: 0 }}>{`${label} ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;