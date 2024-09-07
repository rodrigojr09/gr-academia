import { DetailedHTMLProps, FormHTMLAttributes } from "react";

interface GRFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

export default function GRForm(props: GRFormProps) {
  return (
    <form
      {...props}
      className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
    >
      {props.children}
    </form>
  );
}
