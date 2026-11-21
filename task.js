const admins = [
  {
    id: 1,
    name: 'Admin One',
    email: 'admin1@example.com'
  },
  {
    id: 2,
    name: 'Admin Two',
    email: 'admin2@example.com'
  }
];

for (const admin of admins) {
  console.log(`Admin ID: ${admin.id}, Name: ${admin.name}, Email: ${admin.email}`);
}