export const sampleConfig = {
  title: "Employee Dashboard",
  components: [
    {
      type: "statsCard",
      title: "Total Employees",
      value: 120,
      span: 6,
    },
    {
      type: "statsCard",
      title: "Active Projects",
      value: 18,
      span: 6,
    },
    {
      type: "table",
      columns: ["Name", "Role"],
      span: 12,
      data: [
        {
          Name: "Aditi",
          Role: "Frontend Developer",
        },
        {
          Name: "Rahul",
          Role: "Backend Developer",
        },
      ],
    },
    {
      type: "form",
      title: "Employee Form",
      span: 12,
      fields: [
        {
          name: "name",
          label: "Full Name",
          component: "input",
          placeholder: "Enter name",
          required: true,
        },
        {
          name: "email",
          label: "Email",
          component: "input",
          placeholder: "Enter email",
          required: true,
        },
        {
          name: "role",
          label: "Role",
          component: "select",
          options: [
            "Frontend Developer",
            "Backend Developer",
            "Designer",
          ],
        },
      ],
    },
  ],
};