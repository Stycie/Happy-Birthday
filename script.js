// Function to handle the envelope opening animation
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const envelopeSection = document.getElementById('envelopeSection');
    const giftMenu = document.getElementById('giftMenu');

    envelope.classList.add('open');

    // Smooth transition to hide the envelope and reveal the main dashboard menu
    setTimeout(() => {
        envelopeSection.classList.add('hidden');
        giftMenu.classList.remove('hidden');
    }, 1200);
}

// Function to navigate from the main menu dashboard to a specific page card
function scrollToSection(sectionId) {
    const giftMenu = document.getElementById('giftMenu');
    const contentPages = document.getElementById('contentPages');
    const sections = document.querySelectorAll('.page');

    giftMenu.classList.add('hidden');
    contentPages.classList.remove('hidden');

    // First, make sure all other sub-pages are tucked away out of sight
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    
    // Unhide the single targeted section card
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
}

// Function to return from any open page section back to the main menu dashboard
function backToMenu() {
    const giftMenu = document.getElementById('giftMenu');
    const contentPages = document.getElementById('contentPages');

    contentPages.classList.add('hidden');
    giftMenu.classList.remove('hidden');
}

// FUNCTION TO LAUNCH EMOTICON CONFETTI NITRO BLAST
function launchNitroWish() {
    const emojis = ['🏎️', '🔥', '🎂', '🎉', '❤️', '💨', '✨', '👑', '🍾'];
    
    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement('div');
        confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.position = 'fixed';
        confetti.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        confetti.style.left = (Math.random() * 100) + 'vw';
        confetti.style.bottom = '-50px';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        confetti.style.transition = 'all ' + (Math.random() * 2 + 1.5) + 's ease-out';
        
        document.body.appendChild(confetti);
        
        // Trigger upward blast movement animation frame
        setTimeout(() => {
            confetti.style.transform = 'translateY(-110vh) rotate(' + (Math.random() * 360) + 'deg)';
            confetti.style.opacity = '0';
        }, 50);
        
        // Clean up the created elements afterward to keep memory clean
        setTimeout(() => {
            confetti.remove();
        }, 3500);
    }
}

// RUNTIME PIT-WALL TIMER LOGIC
// Set target to this coming Thursday Afternoon at 01:00pm for the weekend kickoff!
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + ((4 - targetDate.getDay() + 7) % 7)); 
targetDate.setHours(14, 45, 0, 0);

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference < 0) {
        document.getElementById('countdownClock').innerText = "🤩It's time to Make a wish🎂";
        //Add this line to show the flag
        document.getElementById('checkered-overlay').classList.remove('hidden');
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Format output string nicely with padding zeros
    const dStr = days.toString().padStart(2, '0') + 'd';
    const hStr = hours.toString().padStart(2, '0') + 'h';
    const mStr = minutes.toString().padStart(2, '0') + 'm';
    const sStr = seconds.toString().padStart(2, '0') + 's';

    document.getElementById('countdownClock').innerText = `${dStr} : ${hStr} : ${mStr} : ${sStr}`;
}

// Run timer update every second
setInterval(updateCountdown, 1000);
updateCountdown();