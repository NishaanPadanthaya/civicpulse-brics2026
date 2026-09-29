# CivicPulse User Flow & UI Mockups

## 1. User Flow Diagram

```
                    ┌─── CITIZEN JOURNEY ────────────────────────────────────┐
                    │                                                         │
                    ▼                                                         │
        ┌────────────────────────┐                                            │
        │   HOME PAGE            │                                            │
        │ "Shape Policy Together"│                                            │
        │  [Report Issue]        │                                            │
        │  [View Dashboard]      │                                            │
        └────────────────────────┘                                            │
                    │                                                         │
           ┌────────┴────────┐                                                │
           ▼                 ▼                                                │
      [Submit]         [Dashboard]                                           │
    "Report an          "Community                                           │
     Issue"             Insights"                                            │
           │                 │                                                │
           ▼                 ▼                                                │
    ┌────────────────┐ ┌──────────────────┐                                  │
    │ 1. Describe    │ │ Overview Stats   │                                  │
    │ 2. Select      │ │ - Total Issues   │                                  │
    │    Country/City│ │ - High Priority  │                                  │
    │ 3. Choose      │ │ - Resolved       │                                  │
    │    Channel     │ │ - Satisfaction   │                                  │
    │ 4. See         │ │                  │                                  │
    │    Assessment  │ │ Browse By:       │                                  │
    │ 5. Submit      │ │ ├─ Location      │                                  │
    │                │ │ ├─ Category      │                                  │
    │                │ │ ├─ Priority      │                                  │
    │                │ │ └─ Status        │                                  │
    └────────────────┘ └──────────────────┘                                  │
           │                 │                                                │
           ▼                 ▼                                                │
    ┌────────────────┐ ┌──────────────────┐                                  │
    │ SUCCESS        │ │ ISSUE DETAIL     │                                  │
    │ ✓ Submitted    │ │ ┌──────────────┐ │                                  │
    │                │ │ │ Water Supply │ │                                  │
    │ "Your issue    │ │ │ Mumbai       │ │                                  │
    │  joins 5,234   │ │ │ HIGH PRIORITY│ │                                  │
    │  citizens"     │ │ │ 347 reports  │ │                                  │
    │                │ │ │ Trend: ▲↑   │ │                                  │
    │ [View Similar] │ │ │              │ │                                  │
    │ [Report More]  │ │ │ Recent:      │ │                                  │
    │ [To Dashboard] │ │ │ • Sept 28    │ │                                  │
    └────────────────┘ │ │ • Sept 26    │ │                                  │
           │           │ │ • Sept 24    │ │                                  │
           │           │ │              │ │                                  │
           │           │ │ Status:      │ │                                  │
           │           │ │ ● Reported   │ │                                  │
           │           │ │ ● Reviewed   │ │                                  │
           │           │ │ ○ Planned    │ │                                  │
           │           │ │ ○ In Progress│ │                                  │
           │           │ │ ○ Complete   │ │                                  │
           │           │ │              │ │                                  │
           │           │ │ Action:      │ │                                  │
           │           │ │ [View Project]│ │                                  │
           │           │ └──────────────┘ │                                  │
           │           │                  │                                  │
           └───────────┴──────────────────┘                                  │
                    │                                                         │
                    ▼                                                         │
        ┌────────────────────────┐                                            │
        │ IMPLEMENTATION TRACKER │                                            │
        │ "Community Wins"       │                                            │
        │ Project: Road Repair   │                                            │
        │ - Initiated by: 892    │                                            │
        │   citizen reports      │                                            │
        │ - Status: In Progress  │                                            │
        │ - Est. Complete: Oct   │                                            │
        │                        │                                            │
        │ [Track My Issues]      │                                            │
        │ [Submit New Issue] ────┼────────────────────────────────────────────┘
        └────────────────────────┘
```

---

## 2. Page-by-Page Mockups

### 2.1 HOME PAGE (Updated)

```
┌─────────────────────────────────────────────────────────────────────┐
│  CivicPulse          [Theme] [Logout]                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  HERO SECTION                                                       │
│  ┌────────────────────────┐       ┌──────────────────────────────┐ │
│  │ Every voice.           │       │ Infrastructure Priorities    │ │
│  │ Every need.            │       │ (Real-time updates)          │ │
│  │ Every nation.          │       │                              │ │
│  │                        │       │ [Stats showing impact]       │ │
│  │ CivicPulse aggregates  │       │ 5,234 citizens helped        │ │
│  │ citizen infrastructure │       │ 892 issues resolved          │ │
│  │ requests across BRICS  │       │ 47 projects in progress      │ │
│  │                        │       │                              │ │
│  │ [Report an Issue] [→] │       │ Updated 2 minutes ago        │ │
│  │ [View Dashboard]       │       │                              │ │
│  └────────────────────────┘       └──────────────────────────────┘ │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ IMPACT STORY                                                        │
│ ┌──────────┬──────────┬──────────┬──────────┐                       │
│ │ Citizens │ Issues   │ Policy   │ Projects │                       │
│ │ Heard    │ Tracked  │ Changes  │ Funded   │                       │
│ │ 15,234   │ 5,234    │ 47       │ 23       │                       │
│ └──────────┴──────────┴──────────┴──────────┘                       │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ HOW IT WORKS                                                        │
│                                                                     │
│ 01. You Speak          02. We Listen        03. Policy Responds     │
│ Voice, text, or        AI analyzes your     Your feedback shapes   │
│ messaging app          concern in any       infrastructure         │
│ in any language        language             spending               │
│                                                                     │
│ 04. Community Benefits                                              │
│ Infrastructure improves. Services expand. Lives improve.            │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ POPULAR ISSUES THIS WEEK                                            │
│ ┌──────────────┬──────────────┬──────────────────────┐              │
│ │ Water Supply │ Roads        │ Healthcare           │              │
│ │ 234 reports  │ 189 reports  │ 156 reports          │              │
│ │ Mumbai, India│ São Paulo    │ Johannesburg, SA      │              │
│ │ HIGH PRIORITY│ HIGH PRIORITY│ MEDIUM PRIORITY      │              │
│ │ [View] →     │ [View] →     │ [View] →             │              │
│ └──────────────┴──────────────┴──────────────────────┘              │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ [Have an issue to report? →]  [View All Issues →]                  │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.2 SUBMIT PAGE (Updated)

```
┌─────────────────────────────────────────────────────────────────────┐
│  CivicPulse / Home > Report an Issue                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ SHARE YOUR CONCERN                                                  │
│ Your voice shapes infrastructure policy                             │
│                                                                     │
│ ┌──────────────────────────────────────────────────────────────┐   │
│ │ DESCRIBE THE ISSUE                                           │   │
│ │                                                              │   │
│ │ [Multi-line text input]                                      │   │
│ │ "The roads in my neighborhood are damaged..."               │   │
│ │                                                              │   │
│ │ [🎙️ Voice input]  [Analyzing...]  234 chars                │   │
│ └──────────────────────────────────────────────────────────────┘   │
│                                                                     │
│ ┌──────────────────────────────────────────────────────────────┐   │
│ │ ASSESSMENT (Auto-generated)                                  │   │
│ │                                                              │   │
│ │ 🇮🇳 Hindi    | 🚗 Roads    | 😟 Concerned | ⚠️ Critical      │   │
│ │ (Language)   | (Category)  | (Tone)       | (Priority)     │   │
│ │                                                              │   │
│ └──────────────────────────────────────────────────────────────┘   │
│                                                                     │
│ WHERE IS THIS?                                                      │
│ ┌──────────────────────┐  ┌──────────────────────┐                 │
│ │ Country *            │  │ City                 │                 │
│ │ [India            ▼]│  │ [Mumbai           ▼]│                 │
│ └──────────────────────┘  └──────────────────────┘                 │
│                                                                     │
│ HOW DID YOU REPORT THIS?                                            │
│ [🌐 Web]  [📱 WhatsApp]  [📲 SMS]  [✈️ Telegram]                   │
│                                                                     │
│ ┌──────────────────────────────────────────────────────────────┐   │
│ │ [Submit Feedback]                                            │   │
│ │ (Your feedback is anonymized. No personal data stored.)      │   │
│ └──────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.3 SUCCESS PAGE (Updated)

```
┌─────────────────────────────────────────────────────────────────────┐
│  CivicPulse                                                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                    ✓ ISSUE REPORTED                                │
│                                                                     │
│        Your feedback has been received and analyzed.                │
│                                                                     │
│        ┌─────────────────────────────────────┐                     │
│        │ 🇮🇳 Hindi                            │                     │
│        │ Language Detected                   │                     │
│        │                                     │                     │
│        │ 🚗 Roads & Transportation           │                     │
│        │ Issue Category                      │                     │
│        │                                     │                     │
│        │ ⚠️ Critical (9/10)                  │                     │
│        │ Priority Level                      │                     │
│        │                                     │                     │
│        │ ⏳ Under Review                      │                     │
│        │ Status                              │                     │
│        └─────────────────────────────────────┘                     │
│                                                                     │
│        YOUR VOICE JOINS                                             │
│        5,234 citizens helping shape infrastructure policy            │
│                                                                     │
│        ┌──────────────────────────────────────┐                    │
│        │ [View Similar Issues in Mumbai] →    │                    │
│        │ [Report Another Issue] →             │                    │
│        │ [Go to Dashboard] →                  │                    │
│        └──────────────────────────────────────┘                    │
│                                                                     │
│        Next steps: Policy makers review your feedback within 7 days │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.4 DASHBOARD (Updated)

```
┌─────────────────────────────────────────────────────────────────────┐
│  CivicPulse / Home > Dashboard                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ COMMUNITY INSIGHTS                                                  │
│ Real-time infrastructure demand data                                │
│                                                                     │
│ Filter: [All nations ▼]  [All priorities ▼]  [↻ Refresh]          │
│ Updated 2 minutes ago                                               │
│                                                                     │
│ ┌──────────┬──────────┬──────────┬──────────┐                       │
│ │ 5,234    │ 892      │ 47       │ 89%      │                       │
│ │ Issues   │ Critical │ Resolved │ Helpful  │                       │
│ └──────────┴──────────┴──────────┴──────────┘                       │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────┐   │
│ │ BROWSE BY                        [Have an issue?] →          │   │
│ │ ├─ 🗺️  Location                                              │   │
│ │ ├─ 📋 Category                                              │   │
│ │ ├─ ⚡ Priority                                               │   │
│ │ └─ ✓ Status                                                 │   │
│ └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
├─ BROWSE ISSUES ─────────────────────────────────────────────────────┤
│                                                                     │
│ TOP ISSUES THIS MONTH                                               │
│                                                                     │
│ ┌────────────────────────────────────────────────────────────┐    │
│ │ 💧 Water Supply — Mumbai, India                            │    │
│ │ 347 reports | ⚠️ Critical | Trend: 📈 Rising               │    │
│ │ "No water supply for 3+ months in residential area"         │    │
│ │ [View Details] →                                            │    │
│ └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│ ┌────────────────────────────────────────────────────────────┐    │
│ │ 🚗 Roads & Transportation — São Paulo, Brazil              │    │
│ │ 289 reports | 🟠 High | Trend: → Stable                    │    │
│ │ "Potholes and poor road conditions affecting commutes"     │    │
│ │ [View Details] →                                            │    │
│ └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│ ┌────────────────────────────────────────────────────────────┐    │
│ │ 🏥 Healthcare — Johannesburg, South Africa                 │    │
│ │ 234 reports | 🟡 Medium | Trend: → Stable                  │    │
│ │ "Limited access to emergency medical services"              │    │
│ │ [View Details] →                                            │    │
│ └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│ [View All Issues] →                                                │
│                                                                     │
├─ TABS ────────────────────────────────────────────────────────────┤
│ Overview | Location Map | Categories | Implementation | Analytics│
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.5 ISSUE DETAIL PAGE (New)

```
┌─────────────────────────────────────────────────────────────────────┐
│  CivicPulse / Dashboard > Issues > Water Supply > Mumbai            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ WATER SUPPLY ISSUES — MUMBAI, INDIA                                │
│                                                                     │
│ ┌─────────────────────────┬───────────────────────────────────────┐│
│ │ Status Timeline         │ Key Metrics                          ││
│ │                         │ ┌──────────────────────────────────┐ ││
│ │ ● Sept 1 - Reported     │ │ 347 citizens reported            │ ││
│ │ ● Sept 15 - Under       │ │ Priority: ⚠️ Critical             │ ││
│ │   Review                │ │ Trend: 📈 Rising reports         │ ││
│ │ ○ Oct 1 - Planned       │ │ Last Update: 2 hours ago         │ ││
│ │ ○ Oct 15 - In Progress  │ │ Estimated Resolution: Nov        │ ││
│ │ ○ Dec 1 - Complete      │ │ Related Project: Water Mgmt      │ ││
│ │                         │ └──────────────────────────────────┘ ││
│ └─────────────────────────┴───────────────────────────────────────┘│
│                                                                     │
│ 📍 AFFECTED AREA                                                    │
│ ┌─────────────────────────────────────────────────────────────┐   │
│ │ [Leaflet Map showing heatmap of reports]                    │   │
│ │ 347 reports concentrated in Dharavi & Bandra regions        │   │
│ └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│ 💬 RECENT REPORTS (Anonymized)                                     │
│ ┌─────────────────────────────────────────────────────────────┐   │
│ │ "No water supply for 3+ months. Affecting 200+ families"    │   │
│ │ Sept 28 | Bandra | ⚠️ Critical                               │   │
│ └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────┐   │
│ │ "Scheduled water cuts increasing. 12h/day without water"    │   │
│ │ Sept 26 | Dharavi | ⚠️ Critical                              │   │
│ └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────┐   │
│ │ "Well water contaminated. Municipality not responding"      │   │
│ │ Sept 24 | Mahim | 🟠 High                                   │   │
│ └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│ 📋 RELATED PROJECT                                                  │
│ ┌─────────────────────────────────────────────────────────────┐   │
│ │ Mumbai Water Management Initiative                           │   │
│ │ Status: In Progress | Budget: ₹2.3 Cr | Timeline: Oct-Dec  │   │
│ │ [View Project Details] →                                    │   │
│ └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│ [Report Similar Issue] → [View All Issues] →                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.6 IMPLEMENTATION TRACKER (Updated)

```
┌─────────────────────────────────────────────────────────────────────┐
│  CivicPulse / Home > Implementation Tracker                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│ COMMUNITY WINS                                                      │
│ Projects addressing citizen feedback                               │
│                                                                     │
│ Filter: [All Regions ▼]  [All Status ▼]                            │
│                                                                     │
│ ┌──────────┬──────────┬──────────┬──────────┐                       │
│ │ 47       │ 23       │ 12       │ 12       │                       │
│ │ Projects │ In       │ Planning │ Complete │                       │
│ │ Tracked  │ Progress │          │          │                       │
│ └──────────┴──────────┴──────────┴──────────┘                       │
│                                                                     │
│ ACTIVE PROJECTS                                                     │
│                                                                     │
│ ┌────────────────────────────────────────────────────────────┐    │
│ │ 💧 Mumbai Water Management Initiative                       │    │
│ │ Addressing: 347 citizen reports on water supply            │    │
│ │ Budget: ₹2.3 Crores | Timeline: Oct - Dec 2026             │    │
│ │ Status: ● In Progress                                      │    │
│ │ ├─ Phase 1: Infrastructure audit (Sep-Oct)                │    │
│ │ ├─ Phase 2: Repairs begin (Oct-Nov)                       │    │
│ │ └─ Phase 3: Testing & validation (Nov-Dec)                │    │
│ │                                                             │    │
│ │ Citizens involved: 347 | Updates: 5 | [Follow] →           │    │
│ └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│ ┌────────────────────────────────────────────────────────────┐    │
│ │ 🚗 São Paulo Road Resurfacing Program                       │    │
│ │ Addressing: 289 citizen reports on road conditions         │    │
│ │ Budget: R$ 15.8 Million | Timeline: Sep - Nov 2026         │    │
│ │ Status: ● In Progress                                      │    │
│ │                                                             │    │
│ │ Citizens involved: 289 | Updates: 8 | [Follow] →           │    │
│ └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│ ┌────────────────────────────────────────────────────────────┐    │
│ │ ✅ Johannesburg Solar Clinic Network (COMPLETED)            │    │
│ │ Completed: 234 healthcare issues reported                  │    │
│ │ Budget: R 4.2 Million | Timeline: Jun - Sep 2026           │    │
│ │ Status: ○ Complete (Sep 2026)                              │    │
│ │                                                             │    │
│ │ Citizens helped: 234 | [View Results] →                    │    │
│ └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│ [View All Projects] →  [Report an Issue] →                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 3. Component Changes Reference

### 3.1 Urgency/Priority System

#### Old (Numeric)
```
Score: 1-10
Visual: Red dot, Orange dot, Blue dot
Label: "Urgency 9/10", "Urgency 5/10"
```

#### New (Named + Emoji)
```
⚠️ Critical (9-10)     — Red
🟠 High (7-8)         — Orange  
🟡 Medium (4-6)       — Amber
🟢 Low (1-3)          — Green
```

### 3.2 Navigation Pattern

#### Old
```
Home → Submit/Dashboard (isolated)
No breadcrumbs
Limited cross-linking
```

#### New
```
Home / Dashboard / Issue Type / Issue Detail
           ↓
Issue Detail / Related Project / Implementation Tracker
       ↓
[Report Issue] button always available in footer
```

### 3.3 Language Updates

```
Old terminology          → New terminology
──────────────────────────────────────────
"Live" indicator        → Removed
"Live analysis"         → "Initial Assessment"
"Urgency Score"         → "Priority Level"
"AI Policy Engine"      → "Policy Recommendations"
"Segments"              → Removed
"Category"              → "Issue Type"
"Sentiment"             → "Citizen Tone"
"Language detected"     → "Language"
"Infrastructure Demand" → "Infrastructure Priorities"
"-live" status badge    → "Updated X min ago"
```

---

## 4. Visual Hierarchy Changes

### Home Page
```
BEFORE:
- Emphasis: "Infrastructure Demand — Live"
- Secondary: Feature cards
- Tertiary: Stats

AFTER:
- Emphasis: "Every voice. Every need. Every nation." (human story)
- Secondary: Impact stats ("5,234 citizens helped")
- Tertiary: "How it works" process
- CTA: "Report an Issue" + "Popular This Week"
```

### Dashboard
```
BEFORE:
- Stats cards
- Tab bar with 6 options
- Content area

AFTER:
- Stats cards (same)
- Sidebar navigator (Location/Category/Priority/Status)
- Issue cards with trending info
- Clear "Browse" vs "Filter" distinction
```

---

## 5. Color & Icon Key

```
Priority Indicators:
🔴 ⚠️ Critical     #dc2626 (Red)
🟠 🟠 High        #d97706 (Orange)
🟡 🟡 Medium      #eab308 (Amber)
🟢 ✓ Low         #16a34a (Green)

Status Timeline:
● Reported      (Active/Complete)
● Under Review  (Active/Complete)
● Planned       (Active/Complete)
● In Progress   (Active/Complete)
○ Completed     (Complete)

Location Icons:
🗺️  Geographic view
📍 Specific location
🌍 National view
🌐 Cross-national
```

---

## 6. Flow Integration Points

### Sticky Footer (All Pages)
```
Have an issue to report?
[→ Report Now]

View all issues
[→ Go to Dashboard]
```

### Dashboard Sidebar (Persistent)
```
Quick Filters:
🔍 Browse Issues
📍 By Location
📋 By Category
⚡ High Priority
✓ Resolved Issues
```

### Issue Detail (New Page)
```
Connected Views:
- Back to Dashboard
- View Similar Issues
- Report Related Issue
- View Related Project
```

---

## Notes for Implementation

1. **No API Changes:** All data structures remain the same
2. **CSS-Only for Many Changes:** Logo removal, color updates via Tailwind
3. **New Routes:** Add `/issue/:id` route for Issue Detail page
4. **Responsive:** All mockups mobile-first
5. **Accessibility:** Use semantic HTML, ARIA labels for new components
6. **Performance:** Lazy-load large lists, pagination for many issues

