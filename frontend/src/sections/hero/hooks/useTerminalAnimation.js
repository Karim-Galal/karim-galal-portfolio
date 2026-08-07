import { useEffect, useRef, useState } from "react";

import { terminalCommands } from "@/data/terminal";

const PHASES = {
  TYPING: "typing",
  SHOW_OUTPUT: "showOutput",
  WAITING: "waiting",
};

const TYPE_SPEED = 55;
const PAUSE_AFTER_COMMAND = 300;
const PAUSE_AFTER_OUTPUT = 1400;
const PAUSE_AFTER_COMPLETE = 2500;

function useTerminalAnimation() {
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [phase, setPhase] = useState(PHASES.TYPING);

  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentCommand = terminalCommands[currentIndex];

    if (!currentCommand) return;

    if (phase === PHASES.TYPING) {
      if (
        typedCommand.length <
        currentCommand.command.length
      ) {
        timeoutRef.current = setTimeout(() => {
          setTypedCommand(
            currentCommand.command.slice(
              0,
              typedCommand.length + 1
            )
          );
        }, TYPE_SPEED);
      } else {
        timeoutRef.current = setTimeout(() => {
          setPhase(PHASES.SHOW_OUTPUT);
        }, PAUSE_AFTER_COMMAND);
      }
    }

    if (phase === PHASES.SHOW_OUTPUT) {
      timeoutRef.current = setTimeout(() => {
        setHistory((previousHistory) => [
          ...previousHistory,
          currentCommand,
        ]);

        setPhase(PHASES.WAITING);
      }, 150);
    }

    if (phase === PHASES.WAITING) {
      const isLastCommand =
        currentIndex === terminalCommands.length - 1;

      timeoutRef.current = setTimeout(() => {
        if (isLastCommand) {
          // Clear everything and restart.
          setHistory([]);
          setCurrentIndex(0);
          setTypedCommand("");
          setPhase(PHASES.TYPING);

          return;
        }

        setCurrentIndex(
          (previousIndex) => previousIndex + 1
        );

        setTypedCommand("");
        setPhase(PHASES.TYPING);
      }, isLastCommand
        ? PAUSE_AFTER_COMPLETE
        : PAUSE_AFTER_OUTPUT);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [phase, typedCommand, currentIndex]);

  return {
    history,
    typedCommand,
    currentIndex,
    phase,
  };
}

export default useTerminalAnimation;