// Couple's names
const groomName = 'James Akpan';
const brideName = 'Ndidiamaka Onyiro';

// Special dates
const firstDate = new Date('2018-02-14');
const proposal = new Date('2024-08-05');
const weddingDay = new Date('2024-12-07');

// Display dates
document.getElementById('first-date').textContent = `September 21, 2023 - ${groomName} and ${brideName}'s first date!`;
document.getElementById('proposal').textContent = `August 05, 2024 - ${groomName} proposed to ${brideName}!`;
document.getElementById('introduction').textContent = `October 05, 2024 - ${groomName} went to introduce his parents to ${brideName}'s parents!`;
document.getElementById('wedding-day').textContent = `December 7, 2024 - ${groomName} and ${brideName} tied the knot!`;

// Add event listeners to each event
const events = document.querySelectorAll('.event');
events.forEach((event) => {
  event.addEventListener('click', () => {
    // Toggle event details
    event.classList.toggle('expanded');
  });
});
