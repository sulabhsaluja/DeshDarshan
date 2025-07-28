document.addEventListener('DOMContentLoaded', function() {
  const regionInfo = {
    north: {
      tooltip: 'Explore Rajasthan, Punjab, Himachal, Haryana, Delhi, J&K, Uttarakhand',
      states: ['Rajasthan', 'Punjab', 'Himachal Pradesh', 'Haryana', 'Delhi', 'Jammu & Kashmir', 'Uttarakhand']
    },
    south: {
      tooltip: 'Explore Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, Telangana',
      states: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Andhra Pradesh', 'Telangana']
    },
    east: {
      tooltip: 'Explore West Bengal, Odisha, Bihar, Jharkhand',
      states: ['West Bengal', 'Odisha', 'Bihar', 'Jharkhand']
    },
    west: {
      tooltip: 'Explore Gujarat, Maharashtra, Goa, Dadra & Nagar Haveli, Daman & Diu',
      states: ['Gujarat', 'Maharashtra', 'Goa', 'Dadra & Nagar Haveli', 'Daman & Diu']
    },
    northeast: {
      tooltip: 'Explore Assam, Arunachal, Manipur, Meghalaya, Mizoram, Nagaland, Tripura, Sikkim',
      states: ['Assam', 'Arunachal Pradesh', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Tripura', 'Sikkim']
    },
    central: {
      tooltip: 'Explore Madhya Pradesh, Chhattisgarh, Uttar Pradesh',
      states: ['Madhya Pradesh', 'Chhattisgarh', 'Uttar Pradesh']
    }
  };

  const tooltip = document.getElementById('compass-tooltip');
  const statesContainer = document.getElementById('region-states-container');
  const regionMap = {
    'region-north': 'north',
    'region-south': 'south',
    'region-east': 'east',
    'region-west': 'west',
    'region-northeast': 'northeast',
    'region-central': 'central'
  };

  Object.keys(regionMap).forEach(regionId => {
    const regionEl = document.getElementById(regionId);
    if (!regionEl) return;
    const regionKey = regionMap[regionId];
    // Tooltip on hover
    regionEl.addEventListener('mouseenter', e => {
      tooltip.textContent = regionInfo[regionKey].tooltip;
      tooltip.style.display = 'block';
      const rect = e.target.getBoundingClientRect();
      tooltip.style.left = (rect.left + rect.width/2 - tooltip.offsetWidth/2 + window.scrollX) + 'px';
      tooltip.style.top = (rect.top - 40 + window.scrollY) + 'px';
      regionEl.classList.add('active');
    });
    regionEl.addEventListener('mousemove', e => {
      const rect = e.target.getBoundingClientRect();
      tooltip.style.left = (rect.left + rect.width/2 - tooltip.offsetWidth/2 + window.scrollX) + 'px';
      tooltip.style.top = (rect.top - 40 + window.scrollY) + 'px';
    });
    regionEl.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
      regionEl.classList.remove('active');
    });
    // Click to show states
    regionEl.addEventListener('click', () => {
      document.querySelectorAll('.compass-region').forEach(el => el.classList.remove('active'));
      regionEl.classList.add('active');
      showStates(regionKey);
    });
  });

  function showStates(regionKey) {
    const states = regionInfo[regionKey].states;
    statesContainer.innerHTML = `<div class="states-list"><h3>${regionKey.charAt(0).toUpperCase() + regionKey.slice(1)} Region States</h3><ul>` +
      states.map(state => `<li>${state}</li>`).join('') + '</ul></div>';
  }
}); 