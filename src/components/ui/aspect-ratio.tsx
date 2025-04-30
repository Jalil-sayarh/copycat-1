"use client"

import * as React from "react"
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
>(({ ...props }, ref) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "100%",
      paddingBottom: `${100 / (props.ratio || 1)}%`,
    }}
    data-radix-aspect-ratio-wrapper=""
  >
    <div
      ref={ref}
      {...props}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        height: "100%",
        width: "100%",
      }}
    />
  </div>
))
AspectRatio.displayName = "AspectRatio"

export { AspectRatio }
