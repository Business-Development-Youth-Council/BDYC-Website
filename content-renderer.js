function getSectorIcon(sectorName) {
    const sector = BDYC_DATA.sectors.find(s => s.name === sectorName);
    return sector ? sector.icon : 'fas fa-briefcase';
}

// Helper: derive a short summary from the fullDescription (first sentence)
function getSummaryFromFull(full) {
    if (!full) return '';
    const sentences = full.split('.').map(s => s.trim()).filter(Boolean);
    return sentences.length ? sentences[0] + (sentences[0].endsWith('.') ? '' : '.') : full;
}

function renderSectorCards() {
    const container = document.getElementById('sector-cards-container');
    if (!container) return;

    let html = '';
    BDYC_DATA.sectors.forEach((sector, index) => {
        html += `
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
                <div class="sector-card h-100">
                    <div class="sector-icon">
                        <i class="${sector.icon}"></i>
                    </div>
                    <h3 class="sector-title">${sector.name}</h3>
                    <p class="sector-description">
                        ${getSummaryFromFull(sector.fullDescription)}
                    </p>
                </div>
            </div>
        `;
    });


    html += `
        <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600">
            <div class="sector-card cta-card h-100">
                <div class="sector-icon">
                    <i class="fas fa-rocket"></i>
                </div>
                <h3 class="sector-title">Ready to Compete?</h3>
                <p class="sector-description mb-4">
                    Start building your business portfolio today.
                </p>
                <a href="competitions.html" class="btn btn-gold">View Competitions</a>
            </div>
        </div>
    `;

    container.innerHTML = html;
}


function renderCompetitionSectors() {
    const container = document.getElementById('competition-sectors-container');
    if (!container) return;

    let html = '';
    BDYC_DATA.sectors.forEach((sector, index) => {
        const colClass = index === BDYC_DATA.sectors.length - 1 ? 'col-lg-12' : 'col-lg-6';
        html += `
            <div class="${colClass}" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
                <div class="sector-card">
                    <div class="sector-icon">
                        <i class="${sector.icon}"></i>
                    </div>
                    <h3 class="sector-title">${sector.name}</h3>
                    <p class="sector-description mb-4">
                        ${sector.fullDescription}
                    </p>
                    <a href="${BDYC_DATA.links.submitForm}" target = "_blank" class="btn btn-primary">Submit Your Entry</a>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}


function renderCurrentMonth() {
    const elements = document.querySelectorAll('.current-month-display');
    elements.forEach(el => {
        el.textContent = BDYC_DATA.currentMonth;
    });
}


function renderProcessSteps() {
    const container = document.getElementById('process-steps-container');
    if (!container) return;

    let html = '';
    BDYC_DATA.processSteps.forEach((step, index) => {
        html += `
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
                <div class="process-step">
                    <div class="step-number">${step.number}</div>
                    <h4 class="fw-bold mb-3">${step.title}</h4>
                    <p>${step.description}</p>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}


function renderJudgingCriteria() {
    const container = document.getElementById('judging-criteria-container');
    if (!container) return;

    let html = '';
    BDYC_DATA.judgingCriteria.forEach(criteria => {
        html += `
            <div class="criteria-item">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h5 class="fw-bold mb-0">${criteria.title}</h5>
                    <span class="badge bg-primary">${criteria.percentage}</span>
                </div>
                <p class="mb-0">${criteria.description}</p>
            </div>
        `;
    });

    container.innerHTML = html;
}


function renderCurrentWinners() {
    const container = document.getElementById('current-winners-container');
    if (!container) return;

    let html = '';
    BDYC_DATA.currentWinners.forEach((winner, index) => {
        const buttonClass = winner.announced && winner.workLink ? 'btn btn-outline-primary' : 'btn btn-outline-primary disabled';
        const buttonText = winner.announced ? 'View Winning Work' : 'View Winning Work';

        html += `
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
                <div class="winner-card">
                    <div class="text-center mb-3">
                        <i class="fas fa-trophy trophy-icon"></i>
                    </div>
                    <div class="sector-badge">${winner.sector}</div>
                    <h3 class="fw-bold mt-3 mb-2">${winner.winnerName}</h3>
                    <p class="text-muted mb-3">${winner.school}</p>
                    <p class="mb-4">
                        ${winner.description}
                    </p>
                    <a href="${winner.workLink || '#'}" class="${buttonClass}">
                        <i class="fas fa-file-alt me-2"></i>${buttonText}
                    </a>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}


function renderBenefits() {
    const container = document.getElementById('benefits-container');
    if (!container) return;

    let html = '';
    BDYC_DATA.benefits.forEach((benefit, index) => {
        html += `
            <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
                <div class="benefit-card">
                    <div class="benefit-icon">
                        <i class="${benefit.icon}"></i>
                    </div>
                    <h4 class="fw-bold mb-3">${benefit.title}</h4>
                    <p>${benefit.description}</p>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}


function renderFAQ() {
    const container = document.getElementById('faq-container');
    if (!container) return;

    let html = '';
    BDYC_DATA.faq.forEach((item, index) => {
        const collapseClass = item.defaultOpen ? 'collapse show' : 'collapse';
        const buttonClass = item.defaultOpen ? 'accordion-button' : 'accordion-button collapsed';

        html += `
            <div class="accordion-item" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
                <h2 class="accordion-header" id="faq${index}">
                    <button class="${buttonClass}" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaq${index}">
                        ${item.question}
                    </button>
                </h2>
                <div id="collapseFaq${index}" class="${collapseClass}" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        ${item.answer}
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}


function renderSectorInfoCards() {
    const container = document.getElementById('sector-info-cards');
    if (!container) return;

    let html = '';
    BDYC_DATA.sectors.forEach(sector => {
        html += `
            <div class="col-md-6">
                <div class="d-flex align-items-start">
                    <i class="${sector.icon} fa-2x me-3" style="color: #E8C14E;"></i>
                    <div>
                        <h5 class="fw-bold mb-1">${sector.name}</h5>
                        <p class="mb-0">${getSummaryFromFull(sector.fullDescription)}</p>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}


function renderLeadership() {

    const founderContainer = document.getElementById('founder-container');
    if (founderContainer) {
        const founder = BDYC_DATA.leadership.founder;
        const imageHtml = founder.image
            ? `<img src="${founder.image}" alt="${founder.name}" class="founder-image">`
            : `<div class="placeholder-image"><i class="${founder.icon}"></i></div>`;

        founderContainer.innerHTML = `
            <div class="col-lg-8" data-aos="zoom-in">
                <div class="founder-card">
                    ${imageHtml}
                    <div class="d-flex justify-content-center align-items-center mb-2">
                        <h3 class="fw-bold mb-0">${founder.name}</h3>
                        <a href="${founder.linkedin}" target="_blank" class="social-icon ms-3"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <p class="text-gold fw-bold mb-4">${founder.title}</p>
                    <p class="lead mb-0">
                        ${founder.bio}
                    </p>
                </div>
            </div>
        `;
    }


    const devContainer = document.getElementById('lead-developer-container');
    if (devContainer) {
        const dev = BDYC_DATA.leadership.leadDeveloper;
        const imageHtml = dev.image
            ? `<img src="${dev.image}" alt="${dev.name}" class="founder-image" style="width: 150px; height: 150px;">`
            : `<div class="placeholder-image" style="width: 150px; height: 150px; margin: 0 auto 1rem;"><i class="${dev.icon}" style="font-size: 3rem;"></i></div>`;

        devContainer.innerHTML = `
            <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
                <div class="founder-card" style="padding: 1.5rem;">
                    ${imageHtml}
                    <div class="d-flex justify-content-center align-items-center mb-2">
                        <h4 class="fw-bold mb-0">${dev.name}</h4>
                        <a href="${dev.linkedin}" target="_blank" class="social-icon ms-3"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <p class="text-gold fw-bold mb-3">${dev.title}</p>
                    <p class="mb-0">
                        ${dev.bio}
                    </p>
                </div>
            </div>
        `;
    }

    const outreachContainer = document.getElementById('outreach-officer-container');
    if (outreachContainer) {
        const officer = BDYC_DATA.leadership.outreachOfficer;
        const imageHtml = officer.image
            ? `<img src="${officer.image}" alt="${officer.name}" class="founder-image" style="width: 150px; height: 150px;">`
            : `<div class="placeholder-image" style="width: 150px; height: 150px; margin: 0 auto 1rem;"><i class="${officer.icon}" style="font-size: 3rem;"></i></div>`;

        outreachContainer.innerHTML = `
            <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
                <div class="founder-card" style="padding: 1.5rem;">
                    ${imageHtml}
                    <div class="d-flex justify-content-center align-items-center mb-2">
                        <h4 class="fw-bold mb-0">${officer.name}</h4>
                        <a href="${officer.linkedin}" target="_blank" class="social-icon ms-3"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <p class="text-gold fw-bold mb-3">${officer.title}</p>
                    <p class="mb-0">
                        ${officer.bio}
                    </p>
                </div>
            </div>
        `;
    }


    const vpContainer = document.getElementById('vice-presidents-container');
    if (vpContainer) {
        let html = '';
        BDYC_DATA.leadership.vicePresidents.forEach((vp, index) => {
            const imageHtml = vp.image
                ? `<img src="${vp.image}" alt="${vp.name}" class="founder-image">`
                : `<div class="placeholder-image"><i class="${vp.icon}"></i></div>`;

            html += `
                <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
                    <div class="team-card">
                        ${imageHtml}
                    <div class="d-flex justify-content-center align-items-center mb-2">
                        <h4 class="fw-bold mb-0">${vp.name}</h4>
                        <a href="${vp.linkedin}" target="_blank" class="social-icon ms-3"><i class="fab fa-linkedin"></i></a>
                    </div>
                        <div class="role-badge">Vice President - ${vp.sector}</div>
                        <p class="mt-3 mb-0">
                            ${vp.bio}
                        </p>
                    </div>
                </div>
            `;
        });

        vpContainer.innerHTML = html;
    }
}


function renderArchive() {
    const container = document.getElementById('archive-container');
    if (!container) return;

    if (BDYC_DATA.archive.length === 0) {
        container.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-archive fa-4x mb-4" style="color: #014089;"></i>
                <h3 class="fw-bold mb-3">No Past Winners Yet</h3>
                <p class="lead">Check back after our first competition concludes to see our hall of fame!</p>
            </div>
        `;
        return;
    }

    let html = '';
    BDYC_DATA.archive.forEach((month, monthIndex) => {
        html += `
            <div class="accordion-item month-accordion">
                <h2 class="accordion-header" id="heading${monthIndex}">
                    <button class="accordion-button ${monthIndex === 0 ? '' : 'collapsed'}" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#collapse${monthIndex}">
                        ${month.month}
                    </button>
                </h2>
                <div id="collapse${monthIndex}" class="accordion-collapse collapse ${monthIndex === 0 ? 'show' : ''}" 
                     data-bs-parent="#archiveAccordion">
                    <div class="accordion-body">
        `;

        month.winners.forEach(winner => {
            html += `
                <div class="archive-winner-card">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <div>
                            <div class="sector-badge mb-2">${winner.sector}</div>
                            <h5 class="fw-bold mb-1">${winner.winnerName}</h5>
                            <p class="text-muted mb-2">${winner.school}</p>
                        </div>
                        <i class="fas fa-trophy" style="color: #FFD700; font-size: 2rem;"></i>
                    </div>
                    <p class="mb-3">${winner.description}</p>
                    ${winner.workLink ? `<a href="${winner.workLink}" class="btn btn-sm btn-outline-primary" target="_blank">
                        <i class="fas fa-file-alt me-2"></i>View Work
                    </a>` : ''}
                </div>
            `;
        });

        html += `
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}


function initializeDynamicContent() {

    renderCurrentMonth();


    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    switch(currentPage) {
        case 'index.html':
        case '':
            renderSectorCards();
            break;
        case 'competitions.html':
            renderProcessSteps();
            renderCompetitionSectors();
            renderJudgingCriteria();
            break;
        case 'results.html':
            renderCurrentWinners();
            break;
        case 'join.html':
            renderBenefits();
            renderFAQ();
            renderSectorInfoCards();
            break;
        case 'about.html':
            renderLeadership();
            break;
        case 'archive.html':
            renderArchive();
            break;
    }
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDynamicContent);
} else {
    initializeDynamicContent();
}
