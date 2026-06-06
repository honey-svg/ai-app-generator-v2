import DynamicForm from "../components/dynamic/DynamicForm";
import DynamicTable from "../components/dynamic/DynamicTable";
import StatsCard from "../components/dynamic/StatsCard";
import LoadingSkeleton from "../components/dynamic/LoadingSkeleton";

export const componentRegistry: Record<
  string,
  React.ComponentType<any>
> = {
  statsCard: StatsCard,

  table: DynamicTable,

  form: DynamicForm,

  skeleton: LoadingSkeleton,
};