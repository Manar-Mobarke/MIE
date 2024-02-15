import "../styles/DribbleButton.css";

export default function DribbleButton({ dribble }) {
  console.log(dribble);
  console.log("heart " + (dribble && "heart heart-active"));

  return (
    <>
      <span
        className={"heart " + (dribble && "heart heart-active")}
        style={{
          backgroundImage: "url(img.png)",
        }}
      />
    </>
  );
}
