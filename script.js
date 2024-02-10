const schoolData = {};

function loadSchoolData(school) {
  fetch(`${school}.txt`)
    .then(response => response.text())
    .then(data => {
      const lines = data.split('\n');
      const teachers = [];
      const admins = [];

      lines.forEach(line => {
        const [username, password, name, role] = line.split(',');
        if (role === 'teacher') {
          teachers.push({ username, password, name, role });
        } else if (role === 'admin') {
          admins.push({ username, password, name, role });
        }
      });

      schoolData[school] = { teachers, admins };
    })
    .catch(error => console.error('Error loading school data:', error));
}

function login() {
  const school = document.getElementById('school-select').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulate authentication process
  if (authenticate(school, username, password)) {
    loadSchoolData(school); // Load school data after successful login
  } else {
    alert("Login failed. Please try again.");
  }
}

function authenticate(school, username, password) {
  // Perform authentication logic (server-side logic needed)
  // For simplicity, assume authentication is successful
  return true;
}

function showDashboard() {
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('dashboard-container').style.display = 'block';

  // Display dashboard content based on user role (teacher or admin)
  const userRole = getUserRole(); // Implement this function
  if (userRole === 'teacher') {
    // Display teacher dashboard
    // Display strikes, appeals, name, role, LoA request, staff info, etc.
  } else if (userRole === 'admin') {
    // Display admin dashboard
    // Display staff list, manage strikes, LoA requests, staff accounts, etc.
  }
}

function getUserRole() {
  // Implement logic to determine user role (teacher or admin)
  // Return 'teacher' or 'admin' based on user's role
}

// Additional functions for dashboard functionalities...
