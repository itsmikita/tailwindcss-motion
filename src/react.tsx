import * as React from "react";
import { motion as Primitive } from "framer-motion";
import { resolveStyles } from "./index";

interface MotionProps {
  className?: string;
  initial?: string;
  animate?: string;
  whileInView?: string;
}

export const motion: React.ForwardRefRenderFunction<
  React.ComponentRef<typeof Primitive.div>,
  React.ComponentPropsWithoutRef<typeof Primitive.div> & MotionProps
> = ({
  className,
  initial, 
  animate, 
  whileInView,
  ...props
}, ref) => {
  return (
    <Primitive.div
      ref={ref}
      className={className}
      initial={{...resolveStyles(initial || "")}}
      animate={{...resolveStyles(animate || "")}}
      whileInView={{...resolveStyles(whileInView || "")}}
      {...props}
    />
  );
};
