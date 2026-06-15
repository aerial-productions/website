function switchPricingTab(tabName) {
    // Hide all pricing groups
    const allGroups = document.querySelectorAll('.pricing-service-group');
    allGroups.forEach(group => group.classList.remove('active-pricing'));

    // Show selected pricing group
    const selectedGroup = document.getElementById(tabName + '-pricing');
    if (selectedGroup) {
        selectedGroup.classList.add('active-pricing');
    }

    // Update active tab
    const allTabs = document.querySelectorAll('.pricing-tab');
    allTabs.forEach(tab => tab.classList.remove('active'));
    
    const activeTab = document.querySelector(`[data-pricing="${tabName}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

function scrollToPricingTab(tabName) {
    // Switch to the pricing tab
    switchPricingTab(tabName);
    
    // Scroll to pricing section
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
        setTimeout(() => {
            pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}
