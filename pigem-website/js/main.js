document.addEventListener('DOMContentLoaded', () => {
    // Centralized DOM element selectors for easier management
    const SELECTORS = {
        menuToggle: '.menu-toggle',
        mainNav: '.main-nav',
        navLink: '.main-nav a',
        hashLink: 'a[href^="#"]',
        animatedElement: `
            .overview-card, .solution-card, .leader-card, .researcher-card, 
            .partner-card, .methodology-timeline li, .validation-item, 
            .student-card, .data-table, .pull-quote`,
        tabsContainer: '.solution-tabs',
        tabButton: '.tab-button',
        tabPane: '.tab-pane',
        mermaidElement: '.mermaid',
        dataTable: '.data-table',
        lazyImage: 'img[data-src]',
        form: 'form',
        researchToggle: '.research-toggle',
        researchContent: '.research-content'
    };

    /**
     * Finds a single element in the DOM.
     * @param {string} selector - The CSS selector.
     * @param {Element} context - The context to search within.
     * @returns {Element|null} The found element or null.
     */
    const find = (selector, context = document) => context.querySelector(selector);

    /**
     * Finds all elements in the DOM matching the selector.
     * @param {string} selector - The CSS selector.
     * @param {Element} context - The context to search within.
     * @returns {NodeListOf<Element>} A NodeList of found elements.
     */
    const findAll = (selector, context = document) => context.querySelectorAll(selector);

    /**
     * Initializes the mobile menu functionality.
     */
    const initMobileMenu = () => {
        const menuToggle = find(SELECTORS.menuToggle);
        const mainNav = find(SELECTORS.mainNav);

        if (!menuToggle || !mainNav) return;

        menuToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        });
    };

    /**
     * Initializes the tabs functionality.
     */
    const initTabs = () => {
        const tabsContainer = find(SELECTORS.tabsContainer);
        if (!tabsContainer) return;

        const tabNav = find('.tab-nav', tabsContainer);
        const tabPanes = findAll(SELECTORS.tabPane, tabsContainer);

        tabNav.addEventListener('click', (e) => {
            if (e.target.matches(SELECTORS.tabButton)) {
                const targetId = e.target.dataset.target;
                
                findAll(SELECTORS.tabButton, tabNav).forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));
                
                e.target.classList.add('active');
                const targetPane = find(`#${targetId}`);
                if (targetPane) {
                    targetPane.classList.add('active');
                    // Re-initialize Mermaid diagrams in the active tab
                    if (window.mermaid) {
                        const mermaidElements = findAll(SELECTORS.mermaidElement, targetPane);
                        if (mermaidElements.length > 0) {
                            try {
                                mermaid.run({ nodes: mermaidElements });
                            } catch (error) {
                                console.error("Mermaid run error:", error);
                            }
                        }
                    }
                }
            }
        });
    };

    /**
     * Initializes the expandable research sections.
     */
    const initResearchSections = () => {
        const researchToggles = findAll(SELECTORS.researchToggle);
        researchToggles.forEach(toggle => {
            const content = toggle.nextElementSibling;
            if(content && content.matches(SELECTORS.researchContent)) {
                // Set initial ARIA attributes
                toggle.setAttribute('aria-expanded', 'false');
                content.setAttribute('aria-hidden', 'true');

                toggle.addEventListener('click', () => {
                    const isExpanded = content.classList.toggle('expanded');
                    toggle.setAttribute('aria-expanded', isExpanded);
                    content.setAttribute('aria-hidden', !isExpanded);
                    
                    // Update button text/icon
                    const buttonText = toggle.textContent.replace(/[▼▲]/, '').trim();
                    toggle.innerHTML = `${buttonText} ${isExpanded ? '▲' : '▼'}`;
                });
            }
        });
    };
    
    /**
     * Initializes scroll-triggered fade-in animations.
     */
    const initAnimations = () => {
        const animatedElements = findAll(SELECTORS.animatedElement);
        if (animatedElements.length === 0) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => {
            el.classList.add('fade-in-up');
            observer.observe(el);
        });
    };

    /**
     * Initializes Mermaid.js diagrams.
     */
    const initMermaid = () => {
        if (typeof mermaid !== 'undefined') {
            try {
                mermaid.initialize({
                    startOnLoad: true,
                    theme: 'default',
                    securityLevel: 'loose',
                    flowchart: { useMaxWidth: true, htmlLabels: true }
                });
                mermaid.run();
            } catch (error) {
                console.error("Mermaid initialization failed:", error);
            }
        }
    };

    /**
     * Main initialization function.
     */
    const init = () => {
        console.log('🚀 PIGEM Website Initializing...');
        initMobileMenu();
        initTabs();
        initResearchSections();
        initAnimations();
        initMermaid();
        console.log('✅ PIGEM Website fully loaded and interactive.');
    };

    // Run the initialization
    init();
}); 