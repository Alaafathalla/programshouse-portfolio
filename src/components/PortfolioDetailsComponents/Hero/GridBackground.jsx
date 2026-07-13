export default function GridBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(119, 166, 208, 0.14) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(119, 166, 208, 0.14) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "56px 56px",
        }}
      />

      <div
        className="
          pointer-events-none absolute left-1/2 top-[72%]
          h-[300px] w-[300px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full bg-[#77A6D0]/10 blur-[110px]
          sm:h-[380px] sm:w-[380px]
          lg:left-[68%] lg:top-1/2
          lg:h-[420px] lg:w-[420px] lg:blur-[140px]
        "
      />
    </>
  );
}