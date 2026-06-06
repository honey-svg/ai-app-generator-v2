interface TableProps {
  columns?: string[];
  data?: Record<string, any>[];
}

export default function DynamicTable({
  columns = [],
  data = [],
}: TableProps) {
  if (!columns.length) {
    return (
      <div className="rounded-lg border border-red-500 p-4 text-red-500">
        Invalid Table Config
      </div>
    );
  }

  return (
    <div className="overflow-auto rounded-xl border bg-white">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="p-3 text-left"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-t"
            >
              {columns.map((col) => (
                <td
                  key={col}
                  className="p-3"
                >
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}