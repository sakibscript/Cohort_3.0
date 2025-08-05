///children example

export default function CardApp() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Card>
        <div style={{ color: "blue", fontSize: "20px" }}>
          What do you want to post?
          <input
            type="text"
            placeholder="Type your message here..."
            style={{ width: "80%", padding: "8px", marginTop: "8px" }}
          />
        </div>
      </Card>
      <Card>
        <div>Hi there</div>
      </Card>
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {children}
    </div>
  );
}
