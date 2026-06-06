"use client";
import ErrorBoundary from "./ErrorBoundary";
import { componentRegistry } from "../../../registry/componentRegistry";
import { ComponentSchema } from "../../../schemas/componentSchema";
import type { ZodIssue } from "zod";

interface RendererProps {
  config: any;
}

export default function DynamicRenderer({
  config,
}: RendererProps) {
  if (!config?.components || !Array.isArray(config.components)) {
    return (
      <div className="rounded-lg border border-yellow-500 bg-yellow-50 p-4">
        <h2 className="font-bold text-yellow-700">
          Invalid Page Config
        </h2>
        <p className="mt-2 text-sm text-yellow-800">
          The page config must contain a valid `components` array.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {config.components.map(
        (component: any, index: number) => {
          const validation = ComponentSchema.safeParse(component);

          if (!validation.success) {
            const errorMessages = validation.error.issues
              .map((error: ZodIssue) => {
                const path = error.path.length
                  ? error.path.join(".")
                  : "component";
                return `${path}: ${error.message}`;
              })
              .join("\n");

            return (
              <div
                key={index}
                className="rounded-lg border border-yellow-500 bg-yellow-50 p-4"
              >
                <h2 className="font-bold text-yellow-700">
                  Invalid Component Config
                </h2>
                <pre className="mt-2 text-sm overflow-auto whitespace-pre-wrap">
                  {errorMessages}
                </pre>
              </div>
            );
          }

          const Component = componentRegistry[component.type];

          if (!Component) {
            return (
              <div
                key={index}
                className="rounded-lg border border-yellow-500 bg-yellow-50 p-4"
              >
                <h2 className="font-bold text-yellow-700">
                  Unknown Component
                </h2>
                <p className="mt-2 text-sm text-yellow-800">
                  Component type `{component.type}` is not registered.
                </p>
              </div>
            );
          }

          return (
            <div
              key={index}
              className={`col-span-12 md:col-span-${
                component.span || 12
              }`}
            >
              <ErrorBoundary>
                <Component {...component} />
              </ErrorBoundary>
            </div>
          );
        }
      )}
    </div>
  );
}