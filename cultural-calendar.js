// Festival dates and details
const festivalDates = {
    '2024-01-15': {
        name: 'Makar Sankranti',
        description: 'Harvest festival with traditional kite flying and special sweets.'
    },
    '2024-03-10': {
        name: 'Mallappa Temple Festival',
        description: 'Annual temple festival featuring religious ceremonies and cultural programs.'
    },
    '2024-04-09': {
        name: 'Ugadi',
        description: 'Telugu New Year celebrations with traditional festivities.'
    },
    '2024-05-21': {
        name: 'Gangamma Jathara',
        description: 'Three-day celebration honoring Goddess Gangamma with rituals and processions.'
    },
    '2024-09-07': {
        name: 'Vinayaka Chavithi',
        description: 'Celebration of Lord Ganesha with special prayers and cultural events.'
    },
    '2024-11-12': {
        name: 'Deepavali',
        description: 'Festival of Lights with traditional celebrations and fireworks.'
    }
};

let currentDate = new Date();
const monthDisplay = document.getElementById('monthDisplay');
const calendarDays = document.getElementById('calendarDays');
const eventPopup = document.getElementById('eventPopup');

function updateCalendar() {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    monthDisplay.textContent = firstDay.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    calendarDays.innerHTML = '';

    // Add empty cells for days before first of month
    for(let i = 0; i < firstDay.getDay(); i++) {
        calendarDays.appendChild(document.createElement('div'));
    }

    // Add days of month
    for(let day = 1; day <= lastDay.getDate(); day++) {
        const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;

        if(festivalDates[dateString]) {
            dayElement.classList.add('has-event');
            dayElement.addEventListener('mouseover', (e) => showEventDetails(e, dateString));
            dayElement.addEventListener('mouseout', hideEventDetails);
        }

        calendarDays.appendChild(dayElement);
    }
}

function showEventDetails(event, date) {
    const festival = festivalDates[date];
    eventPopup.innerHTML = `
        <h4>${festival.name}</h4>
        <p>${festival.description}</p>
    `;
    eventPopup.style.display = 'block';
    eventPopup.style.left = `${event.pageX + 10}px`;
    eventPopup.style.top = `${event.pageY + 10}px`;
}

function hideEventDetails() {
    eventPopup.style.display = 'none';
}

document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

// Initialize calendar
updateCalendar(); 