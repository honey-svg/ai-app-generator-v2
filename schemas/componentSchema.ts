import { z } from "zod";

export const StatsCardSchema = z.object({
  type: z.literal("statsCard"),
  title: z.string().optional(),
  value: z.number().optional(),
});

export const TableSchema = z.object({
  type: z.literal("table"),

  columns: z.array(z.string()),

  data: z.array(z.record(z.string(), z.any())),
});

export const FormSchema = z.object({
  type: z.literal("form"),

  title: z.string().optional(),

  fields: z.array(
    z.object({
      name: z.string(),

      label: z.string(),

      component: z.string(),

      placeholder: z.string().optional(),

      required: z.boolean().optional(),

      options: z.array(z.string()).optional(),
    })
  ),
});

export const LoadingSkeletonSchema = z.object({
  type: z.literal("skeleton"),
  count: z.number().optional(),
  height: z.enum(["sm", "md", "lg"]).optional(),
});

export const ComponentSchema = z.union([
  StatsCardSchema,
  TableSchema,
  FormSchema,
  LoadingSkeletonSchema,
]);