import { DetailedHTMLProps, FormHTMLAttributes } from "react";

interface GRFormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  className?: undefined;
}

export default function GRForm(props: GRFormProps) {
  return (
    <form
      className={`bg-white text-black p-8 overflow-y-auto max-h-[90vh] rounded-xl shadow-lg max-w-md w-full`}
      autoFocus
      {...(props as DetailedHTMLProps<
        FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
      >)}
    >
      {props.children}
    </form>
  );
}
