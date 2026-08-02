import ConnectorLine from "./ConnectorLine";
import PhonePreview from "./PhonePreview";

import {
  BriefcaseCard,
  MedicalIconCard,
  PersonCard,
  RecommendationCard,
} from "./ProjectCards";

function DesktopConnectors() {
  return (
    <>
      <ConnectorLine
        className="left-[8%] top-[43%] h-[17%] w-[34%]"
        segments={[
          { type: "horizontal", left: 45, top: 12, size: 51 },
          { type: "vertical", left: 45, top: 12, size: 66 },
          { type: "horizontal", left: 4, top: 78, size: 41 },
        ]}
        points={[
          { x: 96, y: 12 },
          { x: 45, y: 12 },
          { x: 45, y: 78 },
          { x: 4, y: 78 },
        ]}
        delay={0.72}
        dotDuration={3.2}
        reverse
      />

      <ConnectorLine
        className="right-[12%] top-[9%] h-[30%] w-[35%]"
        segments={[
          { type: "horizontal", left: 4, top: 92, size: 52 },
          { type: "vertical", left: 56, top: 10, size: 82 },
          { type: "horizontal", left: 56, top: 10, size: 40 },
        ]}
        points={[
          { x: 4, y: 92 },
          { x: 56, y: 92 },
          { x: 56, y: 10 },
          { x: 96, y: 10 },
        ]}
        delay={0.82}
        dotDuration={3.4}
      />

      <ConnectorLine
        className="right-[20%] top-[39%] h-[12%] w-[25%]"
        segments={[
          { type: "horizontal", left: 4, top: 50, size: 92 },
        ]}
        points={[
          { x: 4, y: 50 },
          { x: 96, y: 50 },
        ]}
        delay={0.92}
        dotDuration={2.4}
      />

      <ConnectorLine
        className="bottom-[8%] right-[11%] h-[31%] w-[37%]"
        segments={[
          { type: "horizontal", left: 4, top: 6, size: 56 },
          { type: "vertical", left: 60, top: 6, size: 84 },
          { type: "horizontal", left: 60, top: 90, size: 36 },
        ]}
        points={[
          { x: 4, y: 6 },
          { x: 60, y: 6 },
          { x: 60, y: 90 },
          { x: 96, y: 90 },
        ]}
        delay={1.02}
        dotDuration={3.6}
      />
    </>
  );
}

function RosettaVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[760px] overflow-visible">
      <div className="flex w-full items-center justify-center py-6 lg:hidden">
        <PhonePreview mobile />
      </div>

      <div className="relative hidden min-h-[560px] w-full max-w-[760px] overflow-visible lg:block">
        <DesktopConnectors />
        <MedicalIconCard />
        <PhonePreview />
        <PersonCard />
        <RecommendationCard />
        <BriefcaseCard />
      </div>
    </div>
  );
}

function SingleImageVisual({ image, title }) {
  return (
    <div className="relative mx-auto flex min-h-[300px] w-full max-w-[760px] items-center justify-center overflow-visible sm:min-h-[400px] lg:min-h-[520px]">
      <img
        src={image}
        alt={title || "Project preview"}
        draggable={false}
        className="relative z-10 max-h-[520px] w-full max-w-[720px] select-none object-contain"
      />
    </div>
  );
}

export default function ProjectVisual({ project }) {
  if (project?.slug === "rosetta-medical") {
    return <RosettaVisual />;
  }

  return (
    <SingleImageVisual
      image={project?.heroImage || project?.image}
      title={project?.shortTitle || project?.title}
    />
  );
}
