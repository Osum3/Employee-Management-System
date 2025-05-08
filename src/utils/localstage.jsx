const employee = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Design landing page",
          description: "Create the initial draft for the landing page UI.",
          date: "2025-05-07",
          category: "Design"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Fix login bug",
          description: "Resolve the issue with incorrect password handling.",
          date: "2025-05-05",
          category: "Development"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Deploy to staging",
          description: "Deployment failed due to server crash.",
          date: "2025-05-04",
          category: "DevOps"
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Database migration",
          description: "Migrate user data to new schema.",
          date: "2025-05-07",
          category: "Database"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Write API docs",
          description: "Document the authentication endpoints.",
          date: "2025-05-01",
          category: "Documentation"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Refactor auth module",
          description: "Code did not pass tests after refactor.",
          date: "2025-05-03",
          category: "Development"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Test payment gateway",
          description: "Verify integration with Stripe sandbox.",
          date: "2025-05-07",
          category: "Testing"
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Update user guide",
          description: "Add screenshots to setup instructions.",
          date: "2025-04-30",
          category: "Documentation"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Optimize queries",
          description: "Improve performance of dashboard queries.",
          date: "2025-05-07",
          category: "Database"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Handle edge cases",
          description: "Edge cases not covered in validation logic.",
          date: "2025-05-02",
          category: "Development"
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Setup CI/CD",
          description: "Integrate with GitHub Actions and Docker.",
          date: "2025-05-07",
          category: "DevOps"
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Onboard new hires",
          description: "Walkthrough project setup and coding standards.",
          date: "2025-05-06",
          category: "HR"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Review merge requests",
          description: "Go through pending pull requests on frontend repo.",
          date: "2025-05-07",
          category: "Code Review"
        },
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          title: "Run end-to-end tests",
          description: "Test suite failed during nightly build.",
          date: "2025-05-03",
          category: "Testing"
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          title: "Create wireframes",
          description: "Design low-fidelity mockups for dashboard.",
          date: "2025-05-01",
          category: "Design"
        },
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "Add animations",
          description: "Use Framer Motion to enhance UX.",
          date: "2025-05-07",
          category: "Frontend"
        },
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          title: "Fix CSS bugs",
          description: "Resolve responsive issues in mobile view.",
          date: "2025-05-07",
          category: "Frontend"
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];

  
  export const setlocal=()=>{

    localStorage.setItem('employee',JSON.stringify(employee));
    localStorage.setItem('admin',JSON.stringify(admin));

        // localStorage.setItem('employee',employee);
  }
  export const getlocal=()=>{
    const employee=JSON.parse(localStorage.getItem('employee'));
    const admin=JSON.parse(localStorage.getItem('admin'));
    console.log("request")
  
    return ({employee,admin})
  }