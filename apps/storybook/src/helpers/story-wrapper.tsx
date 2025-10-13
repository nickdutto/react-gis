import type { CSSProperties } from "react";

export type StoryWrapperProps<T extends React.ElementType> = React.ComponentProps<T> & {
  sbWidth?: number;
  sbHeight?: number;
  sbPadding?: number;
  sbMargin?: number;
};

type InternalStoryWrapperProps<T extends React.ElementType> = StoryWrapperProps<T> & {
  component: T;
};

export const StoryWrapper = <T extends React.ElementType>({
  sbWidth,
  sbHeight,
  sbPadding,
  sbMargin,
  component: Component,
  ...props
}: InternalStoryWrapperProps<T>) => {
  const styles: CSSProperties = {
    width: sbWidth ? `${sbWidth}px` : "100%",
    height: sbHeight ? `${sbHeight}px` : "100%",
    padding: sbPadding ? `${sbPadding}px` : undefined,
    margin: sbMargin ? `${sbMargin}px` : undefined,
  };

  return (
    <div style={styles}>
      <Component {...props} />
    </div>
  );
};
