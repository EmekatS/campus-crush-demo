import * as React from "react"

import { cn } from "@components/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      placeholder="Bio"
      className={cn(
        "border-0 py-2 px-4 outline-0 placeholder:text-muted-foreground w-full bg-pink-50 rounded-2xl h-40 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props} />
  );
}

export { Textarea }
