interface SplitTextProps {
  text: string;
  accentWordIndex?: number;
  className?: string;
}

export const SplitText = ({ text, accentWordIndex = 1, className = "" }: SplitTextProps) => {
  const words = text.split(" ");
  let letterIndex = 0;

  return (
    <span className={className}>
      {words.map((word, wi) => (
        <span key={`${word}-${wi}`} className="inline-block whitespace-nowrap">
          {wi > 0 ? "\u00A0" : null}
          {word.split("").map((char) => {
            const delay = 0.04 + letterIndex * 0.035;
            letterIndex += 1;
            return (
              <span key={`${wi}-${letterIndex}`} className="letter-mask">
                <span
                  style={{ animationDelay: `${delay}s` }}
                  className={wi === accentWordIndex ? "text-signal" : undefined}
                >
                  {char}
                </span>
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
};
