import { FormEvent, ReactElement } from "react";
import GRButton from "@/components/GRButton/GRButton";
import GRForm from "@/components/GRForm/GRForm";

interface GRAdminSectionProps {
  title: string;
  formFields: ReactElement;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  goBack?: () => void;
}

export default function GRAdminSection({
  title,
  formFields,
  onSubmit,
  goBack,
}: GRAdminSectionProps) {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <GRForm onSubmit={onSubmit}>
        {formFields}
        <div className="flex justify-between mt-4">
          <GRButton type="submit">Enviar</GRButton>
          {goBack && (
            <GRButton type="button" onClick={goBack} className="bg-gray-500">
              Voltar
            </GRButton>
          )}
        </div>
      </GRForm>
    </div>
  );
}
