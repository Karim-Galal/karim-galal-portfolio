import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  SiBootstrap,
  SiGithub,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const technologies = {
  forward: [
    { name: "PHP", icon: SiPhp },
    { name: "Laravel", icon: SiLaravel },
    { name: "React", icon: SiReact },
    { name: "JavaScript", icon: SiJavascript },
  ],

  reverse: [
    { name: "MySQL", icon: SiMysql },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: SiGithub },
    { name: "Vite", icon: SiVite },
  ],
};

const MARQUEE_SPEED = 45;
// const ITEM_GAP = 32;

function TechItem({ technology }) {
  const Icon = technology.icon;

  return (
    <div className="flex shrink-0 items-center gap-2 text-foreground-muted">
      <Icon className="size-5" aria-hidden="true" />

      <span className="whitespace-nowrap text-sm">
        {technology.name}
      </span>
    </div>
  );
}

function TechGroup({ items, measureRef }) {
  return (
    <div
      ref={measureRef}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {items.map((technology) => (
        <TechItem
          key={technology.name}
          technology={technology}
        />
      ))}
    </div>
  );
}

function MarqueeRow({ items, direction }) {
  const groupRef = useRef(null);
  const [groupWidth, setGroupWidth] = useState(0);

  const isForward = direction === "forward";

  useLayoutEffect(() => {
    if (!groupRef.current) return;

    const updateWidth = () => {
      setGroupWidth(groupRef.current.getBoundingClientRect().width);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(groupRef.current);

    return () => observer.disconnect();
  }, [items]);


  const groups = [0, 1, 2, 3];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max"
        initial={false}
        animate={
          groupWidth
            ? {
                x: isForward
                  ? [0, -groupWidth]
                  : [-groupWidth, 0],
              }
            : undefined
        }
        transition={{
          duration: groupWidth / MARQUEE_SPEED,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {groups.map((group) => (
          <TechGroup
            key={group}
            items={items}
            measureRef={group === 0 ? groupRef : undefined}
          />
        ))}
      </motion.div>
    </div>
  );
}

function TechMarquee() {
  return (
    <div className="mt-14 overflow-hidden">
      <h3 className="mb-5 text-lg font-semibold text-foreground">
        Technologies
      </h3>

      <div className="space-y-4">
        <MarqueeRow
          items={technologies.forward}
          direction="forward"
        />

        <MarqueeRow
          items={technologies.reverse}
          direction="reverse"
        />
      </div>
    </div>
  );
}

export default TechMarquee;