"use client";

import { useForm } from "react-hook-form";

interface Field {
  name: string;
  label: string;
  component: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

interface FormProps {
  title?: string;
  fields?: Field[];
}

export default function DynamicForm({
  title,
  fields = [],
}: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      
      <h2 className="mb-6 text-2xl font-bold">
        {title || "Dynamic Form"}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        {fields.map((field) => (
          <div key={field.name}>
            
            <label className="mb-1 block font-medium">
              {field.label}
            </label>

            {/* INPUT */}
            {field.component === "input" && (
              <input
                className="w-full rounded-lg border p-3"
                placeholder={field.placeholder}
                {...register(field.name, {
                  required: field.required,
                })}
              />
            )}

            {/* SELECT */}
            {field.component === "select" && (
              <select
                className="w-full rounded-lg border p-3"
                {...register(field.name)}
              >
                <option value="">
                  Select option
                </option>

                {field.options?.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </select>
            )}

            {/* ERROR */}
            {errors[field.name] && (
              <p className="mt-1 text-sm text-red-500">
                This field is required
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="rounded-lg bg-black px-4 py-3 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}