/**
 * v0 by Vercel.
 * @see https://v0.dev/t/robVxfqisew
 */
import { BackToDemos } from "@/components/layout";

export default function DemoLayout(props: { children: React.ReactNode }) {
  return (
    <>
      {props.children}
      <BackToDemos />
    </>
  );
}
