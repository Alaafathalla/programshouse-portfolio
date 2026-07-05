import * as React from "react";
import { cn } from "@/lib/utils";

function Card({
  className,
  size = "default",
  ...props
}) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        `
        group/card
        flex
        flex-col
        overflow-hidden
        rounded-xl
        bg-card
        text-sm
        text-card-foreground
        ring-1
        ring-white/10
        gap-4
        py-4
        data-[size=sm]:gap-3
        data-[size=sm]:py-3
        `,
        className
      )}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        `
        grid
        auto-rows-min
        items-start
        gap-1
        rounded-t-xl
        px-4
        has-[>[data-slot=card-action]]:grid-cols-[1fr_auto]
        `,
        className
      )}
      {...props}
    />
  );
}

function CardTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-base font-medium leading-snug data-[size=sm]:text-sm",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

function CardAction({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "px-4",
        className
      )}
      {...props}
    />
  );
}

function CardFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        `
        flex
        items-center
        rounded-b-xl
        border-t
        border-white/10
        bg-muted/50
        p-4
        `,
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};