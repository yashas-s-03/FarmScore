export const mockData = {
  farmer: {
    name: "Rajesh Kumar",
    farmScore: 87,
    cluster: "Mysuru District",
    antimicrobialLog: [
      { 
        date: "2025-09-10", 
        antibiotic: "Amoxicillin", 
        dose: "500mg", 
        vet: "Dr. Priya Sharma", 
        compliance: "Good" 
      },
      { 
        date: "2025-09-05", 
        antibiotic: "Oxytetracycline", 
        dose: "250mg", 
        vet: "Dr. Priya Sharma", 
        compliance: "Good" 
      }
    ],
    prescriptions: [
      { 
        date: "2025-09-10", 
        vet: "Dr. Priya Sharma", 
        treatment: "Respiratory infection treatment", 
        status: "Active" 
      },
      { 
        date: "2025-08-28", 
        vet: "Dr. Kumar Reddy", 
        treatment: "Vaccination schedule", 
        status: "Completed" 
      }
    ]
  },
  prices: [
    { item: "Eggs (per dozen)", price: "₹65", trend: "+2%" },
    { item: "Broiler (per kg)", price: "₹185", trend: "-1%" },
    { item: "Milk (per liter)", price: "₹42", trend: "+3%" },
    { item: "Goat meat (per kg)", price: "₹650", trend: "+5%" }
  ],
  farms: [
    { 
      name: "Kumar Poultry Farm", 
      score: 92, 
      location: "Bangalore", 
      type: "Poultry", 
      contact: "+91-9876543210" 
    },
    { 
      name: "Shree Dairy Farm", 
      score: 88, 
      location: "Mysuru", 
      type: "Dairy", 
      contact: "+91-9876543211" 
    },
    { 
      name: "Organic Goat Farm", 
      score: 85, 
      location: "Hubli", 
      type: "Goat", 
      contact: "+91-9876543212" 
    },
    { 
      name: "Green Valley Farm", 
      score: 82, 
      location: "Mangalore", 
      type: "Mixed", 
      contact: "+91-9876543213" 
    }
  ]
};