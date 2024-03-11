export const WithPower = (title1: string, title2: string) => {
  return (
    <>
      <span style={{ position: "relative" }}>{title1}</span>
      <sub style={{ fontSize: 16, position: "relative", top: -13 }}>
        {title2}
      </sub>
    </>
  );
};
