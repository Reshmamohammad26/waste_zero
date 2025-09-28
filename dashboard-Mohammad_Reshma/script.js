let role = 'volunteer'; // default role

function renderDashboard() {
  const menu = document.getElementById('menu');
  const cards = document.getElementById('cards');
  const roleTitle = document.getElementById('roleTitle');
  menu.innerHTML = '';
  cards.innerHTML = '';

  if (role === 'volunteer') {
    roleTitle.innerText = 'Volunteer Dashboard';
    menu.innerHTML = `
      <li><i class="fas fa-home"></i> Dashboard</li>
      <li><i class="fas fa-calendar-check"></i> Schedule Pickup</li>
      <li><i class="fas fa-handshake"></i> Opportunities</li>
      <li><i class="fas fa-leaf"></i> My Impact</li>
      <li><i class="fas fa-envelope"></i> Messages</li>
      <li><i class="fas fa-user"></i> Profile</li>
      <li><i class="fas fa-cog"></i> Settings</li>`;
    cards.innerHTML = `
      <div class="card"><h3>Upcoming Pickups</h3><p>Next pickup: Tomorrow 10 AM</p></div>
      <div class="card"><h3>Pickup History</h3><p>5 pickups completed</p></div>`;
  } else {
    roleTitle.innerText = 'NGO Dashboard';
    menu.innerHTML = `
      <li><i class="fas fa-home"></i> Dashboard</li>
      <li><i class="fas fa-users"></i> Manage Volunteers</li>
      <li><i class="fas fa-tasks"></i> Requests</li>
      <li><i class="fas fa-chart-line"></i> Analytics</li>
      <li><i class="fas fa-user"></i> Profile</li>
      <li><i class="fas fa-cog"></i> Settings</li>`;
    cards.innerHTML = `
      <div class="card"><h3>Volunteer List</h3><p>24 Active Volunteers</p></div>
      <div class="card"><h3>Open Requests</h3><p>12 pending pickups</p></div>
      <div class="card"><h3>Statistics</h3><p>150kg waste recycled this month</p></div>`;
  }
}

function toggleRole() {
  role = role === 'volunteer' ? 'ngo' : 'volunteer';
  renderDashboard();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
}

renderDashboard();
