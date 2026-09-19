/**
 * SHREE DHARANI ESTATES - APPLICATION LOGIC
 * Dynamic Property Catalog, Filtering, Modal Gallery, WhatsApp Lead Redirection
 */

// Comprehensive Property Dataset
const propertiesData = [
  {
    id: 1,
    title: "Dharani Green Enclave - Premium Open Plots",
    category: "plots",
    location: "Visakhapatnam",
    subLocation: "Anandapuram - Tagarapuvalasa Highway",
    priceDisplay: "₹28 Lakhs - ₹65 Lakhs",
    priceMin: 28,
    priceMax: 65,
    area: "167 - 400 Sq. Yds",
    facing: "East & North Facing",
    approval: "VMRDA & RERA Approved",
    approvalType: "VMRDA / RERA",
    status: "Immediate Registration",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Nestled in the prime growth corridor of Greater Visakhapatnam, Dharani Green Enclave offers VMRDA approved residential open plots with 40ft blacktop roads, underground drainage, avenue plantations, and 100% clear title documentation.",
    highlights: [
      "100% Clear Title & Spot Registration",
      "40ft & 33ft Wide Blacktop Roads",
      "Underground Electricity & Drainage",
      "Compound Wall with Grand Entrance Arch",
      "Children's Play Area & Landscaped Parks",
      "5 Mins from 6-Lane National Highway"
    ]
  },
  {
    id: 2,
    title: "Shree Heights - Executive Luxury Apartments",
    category: "apartments",
    location: "Visakhapatnam",
    subLocation: "Madhurawada IT SEZ Corridor",
    priceDisplay: "₹58 Lakhs - ₹1.25 Cr",
    priceMin: 58,
    priceMax: 125,
    area: "1250 - 2400 Sq. Ft (2 & 3 BHK)",
    facing: "East, West & North",
    approval: "GVMC & RERA Approved",
    approvalType: "RERA Approved",
    status: "Ready for Handover",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Designed for modern families and IT professionals, Shree Heights delivers architectural grandeur, expansive balconies with panoramic hill views, state-of-the-art clubhouse amenities, and high rental yield potential.",
    highlights: [
      "RERA Registered Luxury Gated Community",
      "Designer Clubhouse & Infinity Swimming Pool",
      "100% Power Backup for Common Areas & Elevators",
      "Hi-tech 24/7 Multi-tier Security & CCTV",
      "EV Charging Stations in Car Parking",
      "Close to Premier Schools & IT Tech Parks"
    ]
  },
  {
    id: 3,
    title: "Dharani Commercial Plaza - Retail & Office Spaces",
    category: "commercial",
    location: "Vijayawada",
    subLocation: "MG Road - Benz Circle Arterial Zone",
    priceDisplay: "₹85 Lakhs - ₹3.2 Cr",
    priceMin: 85,
    priceMax: 320,
    area: "850 - 5200 Sq. Ft",
    facing: "North-East Corner",
    approval: "CRDA & RERA Approved",
    approvalType: "CRDA / RERA",
    status: "Under Construction",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A prestigious commercial destination situated at the heart of commercial activity in Vijayawada. Ideal for corporate headquarters, banking institutions, retail flagships, medical clinics, and upscale dining outlets.",
    highlights: [
      "Maximum Footfall & High Street Visibility",
      "Double Basement Dedicated Parking",
      "High-speed Passenger & Service Elevators",
      "Centralized HVAC Ducting & Fire Sprinklers",
      "Impressive Glass Facade & Double-height Lobby",
      "Estimated 8-10% Annual Rental Yield"
    ]
  },
  {
    id: 4,
    title: "Dharani Palm County - Gated Villa Plots",
    category: "plots",
    location: "Vijayawada",
    subLocation: "Kankipadu - Bandar Road Corridor",
    priceDisplay: "₹22 Lakhs - ₹52 Lakhs",
    priceMin: 22,
    priceMax: 52,
    area: "150 - 350 Sq. Yds",
    facing: "East & North Facing",
    approval: "CRDA Approved",
    approvalType: "CRDA Approved",
    status: "Ready for Construction",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Experience the epitome of serene living combined with rapid capital appreciation along the expanding Amaravati-Bandar corridor. Fully developed DTCP/CRDA compliant layout with bank loan approvals.",
    highlights: [
      "CRDA Approved Villa Layout with CC Roads",
      "Pre-approved Home Loans from SBI, HDFC & ICICI",
      "Overhead Water Tank with Dedicated Pipeline",
      "Solar Street Lighting & Green Buffer Zones",
      "24/7 Security Guard with Boom Barrier Entry"
    ]
  },
  {
    id: 5,
    title: "Shree Dharani Royal Palms - Ultra Luxury Villas",
    category: "villas",
    location: "Hyderabad",
    subLocation: "Kollur - Neopolis Extension (ORR Exit 2)",
    priceDisplay: "₹1.85 Cr - ₹3.6 Cr",
    priceMin: 185,
    priceMax: 360,
    area: "3200 - 4800 Sq. Ft (4 BHK Triplex)",
    facing: "100% Vaastu Compliant",
    approval: "HMDA & RERA Approved",
    approvalType: "HMDA / RERA",
    status: "Under Construction",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A premier enclave of bespoke triplex villas offering private elevators, rooftop terraces, home theatre rooms, and private plunge pools right next to the Hyderabad Financial District expressway.",
    highlights: [
      "Signature 4 BHK Triplex Mansions",
      "15,000 Sq. Ft Grand Club & Spa",
      "Private Deck & Sky Lounge in every villa",
      "10 Mins drive to Financial District & Wipro Circle",
      "Central Landscaped Courtyard & Amphitheatre"
    ]
  },
  {
    id: 6,
    title: "Dharani Aeropolis - Strategic Investment Plots",
    category: "plots",
    location: "Visakhapatnam",
    subLocation: "Bhogapuram International Airport Zone",
    priceDisplay: "₹18 Lakhs - ₹45 Lakhs",
    priceMin: 18,
    priceMax: 45,
    area: "133 - 300 Sq. Yds",
    facing: "East, West & North",
    approval: "VMRDA Final Approval",
    approvalType: "VMRDA Approved",
    status: "Fast Selling",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The most promising long-term land investment opportunity in Andhra Pradesh. Located directly on the approach to the Bhogapuram International Airport, assuring exponential capital multiplication.",
    highlights: [
      "Direct Proximity to Bhogapuram Greenfields Airport",
      "Surrounded by Upcoming Aerocity & Coastal Tourism",
      "Immediate Documentation & Encumbrance Free",
      "Bank Loan Facility up to 75%",
      "Rapidly developing 6-Lane Coastal Highway Access"
    ]
  }
];

// Configuration
const WHATSAPP_PHONE = "919959427831";
const DEFAULT_PREFILL_MSG = "Hello Shree Dharani Estates, I am interested in exploring your properties.";

// State Management
let currentFilterCategory = "all";
let currentFilterLocation = "all";
let currentFilterPrice = "all";
let activeModalProperty = null;

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  renderProperties();
  setupEventListeners();
  setupScrollEffects();
});

/**
 * Render Properties Grid based on current filters
 */
function renderProperties() {
  const container = document.getElementById("propertiesGrid");
  if (!container) return;

  const filtered = propertiesData.filter(item => {
    // Category match
    const categoryMatch = (currentFilterCategory === "all" || item.category === currentFilterCategory);
    
    // Location match
    const locationMatch = (currentFilterLocation === "all" || item.location.toLowerCase() === currentFilterLocation.toLowerCase());

    // Price range match
    let priceMatch = true;
    if (currentFilterPrice === "under-30") {
      priceMatch = item.priceMin < 30;
    } else if (currentFilterPrice === "30-70") {
      priceMatch = (item.priceMin >= 25 && item.priceMin <= 70) || (item.priceMax >= 30 && item.priceMin <= 70);
    } else if (currentFilterPrice === "70-150") {
      priceMatch = (item.priceMin >= 50 && item.priceMin <= 150) || (item.priceMax >= 70 && item.priceMin <= 150);
    } else if (currentFilterPrice === "above-150") {
      priceMatch = item.priceMax >= 150 || item.priceMin >= 150;
    }

    return categoryMatch && locationMatch && priceMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <h3 style="color: var(--primary); font-size: 1.3rem; margin-bottom: 6px;">No Properties Found</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 16px;">We couldn't find properties matching your exact filter criteria.</p>
        <button class="btn-luxury" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(property => `
    <article class="property-card" data-id="${property.id}">
      <div class="property-card-media">
        <img src="${property.image}" alt="${property.title}" class="property-img" loading="lazy">
        
        <div class="property-badge-group">
          <span class="badge-tag badge-type">${property.category.toUpperCase()}</span>
          <span class="badge-tag badge-approval">${property.approvalType}</span>
        </div>

        <div class="property-location-tag">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          <span>${property.location}</span>
        </div>
      </div>

      <div class="property-card-body">
        <h3 class="property-title">${property.title}</h3>
        <p class="property-description">${property.description.substring(0, 95)}...</p>
        
        <div class="property-specs">
          <div class="spec-box">
            <span class="spec-title">Area</span>
            <span class="spec-val">${property.area.split('(')[0]}</span>
          </div>
          <div class="spec-box">
            <span class="spec-title">Facing</span>
            <span class="spec-val">${property.facing.split('&')[0]}</span>
          </div>
          <div class="spec-box">
            <span class="spec-title">Status</span>
            <span class="spec-val">${property.status}</span>
          </div>
        </div>

        <div class="property-card-footer">
          <div class="price-container">
            <span class="price-label">Price Range</span>
            <span class="price-val">${property.priceDisplay}</span>
          </div>
          <button class="btn-details" onclick="openPropertyModal(${property.id})" aria-label="View Details for ${property.title}">
            <span>View Details</span>
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

/**
 * Event Listeners & UI Binding
 */
function setupEventListeners() {
  // Category tabs
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilterCategory = tab.getAttribute("data-category");
      renderProperties();
    });
  });

  // Hero Search Form & Button
  const searchForm = document.getElementById("heroSearchForm");
  const searchBtn = document.getElementById("btnSearchFilter");

  const executeSearch = () => {
    const typeSelect = document.getElementById("searchType");
    const locationSelect = document.getElementById("searchLocation");
    const priceSelect = document.getElementById("searchPrice");

    if (typeSelect) currentFilterCategory = typeSelect.value;
    if (locationSelect) currentFilterLocation = locationSelect.value;
    if (priceSelect) currentFilterPrice = priceSelect.value;

    // sync tabs UI
    tabs.forEach(t => {
      if (t.getAttribute("data-category") === currentFilterCategory) {
        t.classList.add("active");
      } else {
        t.classList.remove("active");
      }
    });

    renderProperties();

    // Smooth scroll to listings
    const listingsEl = document.getElementById("listings");
    if (listingsEl) {
      listingsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      executeSearch();
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      executeSearch();
    });
  }

  // Quick Inquiry Form Submission
  const inquiryForm = document.getElementById("quickInquiryForm");
  if (inquiryForm) {
    inquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("inqName")?.value.trim() || "";
      const phone = document.getElementById("inqPhone")?.value.trim() || "";
      const interest = document.getElementById("inqInterest")?.value || "";
      const location = document.getElementById("inqLocation")?.value || "";
      const notes = document.getElementById("inqMessage")?.value.trim() || "";

      if (!name || !phone) {
        showToast("Please provide your name and contact phone number.");
        return;
      }

      // Generate WhatsApp lead text
      let msg = `*New Property Inquiry via Shree Dharani Estates App*\n\n`;
      msg += `👤 *Name:* ${name}\n`;
      msg += `📞 *Phone:* ${phone}\n`;
      msg += `🏡 *Interested In:* ${interest}\n`;
      msg += `📍 *Preferred Location:* ${location}\n`;
      if (notes) {
        msg += `💬 *Note:* ${notes}\n`;
      }
      msg += `\n_Submitted from Under Development Web Portal._`;

      const encodedMsg = encodeURIComponent(msg);
      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMsg}`;

      showToast("Redirecting directly to WhatsApp with your inquiry details...");

      setTimeout(() => {
        window.open(waUrl, "_blank");
        inquiryForm.reset();
      }, 1000);
    });
  }

  // Floating WhatsApp Popup toggle
  const waFab = document.getElementById("whatsappFabBtn");
  const waPopup = document.getElementById("whatsappPopup");
  const waPopupClose = document.getElementById("whatsappPopupClose");

  if (waFab && waPopup) {
    waFab.addEventListener("click", (e) => {
      e.stopPropagation();
      waPopup.classList.toggle("active");
    });
  }

  if (waPopupClose && waPopup) {
    waPopupClose.addEventListener("click", (e) => {
      e.stopPropagation();
      waPopup.classList.remove("active");
    });
  }

  // Close WhatsApp popup when clicking outside
  document.addEventListener("click", (e) => {
    if (waPopup && !waPopup.contains(e.target) && e.target !== waFab) {
      waPopup.classList.remove("active");
    }
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-open");
    });

    // Close menu when clicking nav items
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("mobile-open");
      });
    });
  }

  // Development banner dismiss
  const bannerCloseBtn = document.getElementById("bannerCloseBtn");
  const devBanner = document.getElementById("devBanner");
  if (bannerCloseBtn && devBanner) {
    bannerCloseBtn.addEventListener("click", () => {
      devBanner.style.display = "none";
      const header = document.querySelector(".main-header");
      if (header) header.style.top = "0px";
    });
  }
}

/**
 * Open Property Details Modal
 */
function openPropertyModal(propertyId) {
  const property = propertiesData.find(p => p.id === propertyId);
  if (!property) return;

  activeModalProperty = property;
  const modal = document.getElementById("propertyModal");
  if (!modal) return;

  // Populate data
  document.getElementById("modalTitle").innerText = property.title;
  document.getElementById("modalLocation").innerText = `${property.subLocation}, ${property.location}`;
  document.getElementById("modalPrice").innerText = property.priceDisplay;
  document.getElementById("modalCategory").innerText = property.category.toUpperCase();
  document.getElementById("modalArea").innerText = property.area;
  document.getElementById("modalFacing").innerText = property.facing;
  document.getElementById("modalApproval").innerText = property.approval;
  document.getElementById("modalDescription").innerText = property.description;

  // Gallery
  const mainImage = document.getElementById("modalMainImage");
  mainImage.src = property.gallery[0];
  mainImage.alt = property.title;

  const thumbsContainer = document.getElementById("modalGalleryThumbs");
  thumbsContainer.innerHTML = property.gallery.map((img, idx) => `
    <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" onclick="switchModalGalleryImage('${img}', this)">
      <img src="${img}" alt="Thumbnail ${idx + 1}">
    </div>
  `).join("");

  // Highlights
  const highlightsContainer = document.getElementById("modalHighlights");
  highlightsContainer.innerHTML = property.highlights.map(h => `
    <li class="modal-feature-item">
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span>${h}</span>
    </li>
  `).join("");

  // Update Direct WhatsApp button
  const modalWaBtn = document.getElementById("modalWhatsAppBtn");
  if (modalWaBtn) {
    const waText = encodeURIComponent(`Hello Shree Dharani Estates, I would like to inquire more about "${property.title}" (${property.location}, ${property.priceDisplay}). Please share more details.`);
    modalWaBtn.href = `https://wa.me/${WHATSAPP_PHONE}?text=${waText}`;
  }

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

/**
 * Switch Image in Modal
 */
function switchModalGalleryImage(imgUrl, thumbEl) {
  const mainImage = document.getElementById("modalMainImage");
  if (mainImage) mainImage.src = imgUrl;

  document.querySelectorAll(".gallery-thumb").forEach(t => t.classList.remove("active"));
  if (thumbEl) thumbEl.classList.add("active");
}

/**
 * Close Property Modal
 */
function closePropertyModal() {
  const modal = document.getElementById("propertyModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

/**
 * Reset all filters back to default
 */
function resetFilters() {
  currentFilterCategory = "all";
  currentFilterLocation = "all";
  currentFilterPrice = "all";

  const typeSelect = document.getElementById("searchType");
  const locationSelect = document.getElementById("searchLocation");
  const priceSelect = document.getElementById("searchPrice");

  if (typeSelect) typeSelect.value = "all";
  if (locationSelect) locationSelect.value = "all";
  if (priceSelect) priceSelect.value = "all";

  document.querySelectorAll(".tab-btn").forEach(t => {
    if (t.getAttribute("data-category") === "all") t.classList.add("active");
    else t.classList.remove("active");
  });

  renderProperties();
}

/**
 * Helper: Quick Toast Feedback
 */
function showToast(message) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" style="color: var(--gold);">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

/**
 * Header shadow and scroll dynamics
 */
function setupScrollEffects() {
  const header = document.querySelector(".main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header?.classList.add("header-scrolled");
    } else {
      header?.classList.remove("header-scrolled");
    }
  });
}
