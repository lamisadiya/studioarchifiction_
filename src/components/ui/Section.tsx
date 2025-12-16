import Container from "./Container";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  containerClassName?: string;
}

export default function Section({ 
  className, 
  containerClassName, 
  children, 
  ...props 
}: SectionProps) {
  return (
    <section className={cn("py-16 lg:py-24", className)} {...props}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}