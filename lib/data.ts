export type Minister = {
  id: number;
  name: string;
  slug: string;
  designation: string;
  constituency: string;
  district: string;
  party: string;
  is_cm: boolean;
  key_departments: string;
  official_email: string;
  office_phone: string;
  notes: string;
};

export type Reform = {
  id: number;
  date: string;
  title: string;
  slug: string;
  category: string;
  department_tag: string;
  minister_tag: string;
  description: string;
  source: string;
  status: string;
};

export const ministers: Minister[] = [
  {
    "id": 1,
    "name": "V D Satheesan",
    "designation": "Chief Minister",
    "constituency": "Paravur",
    "district": "Ernakulam",
    "party": "INC",
    "is_cm": true,
    "key_departments": "Finance; Law; General Administration; Ports; Planning & Economic Affairs; Information & Public Relations; Airports; Metro Rail; Election; Science & Technology; Personnel & Administrative Reforms; Minority Welfare; Coastal Shipping (35 depts total)",
    "official_email": "chiefminister@kerala.gov.in",
    "office_phone": "VERIFY",
    "notes": "Retains largest department share; figure pending full gazette list",
    "slug": "v-d-satheesan"
  },
  {
    "id": 2,
    "name": "Ramesh Chennithala",
    "designation": "Minister for Home Vigilance and Coir",
    "constituency": "Haripad",
    "district": "Alappuzha",
    "party": "INC",
    "is_cm": false,
    "key_departments": "Home; Vigilance; Prisons; Fire & Rescue Services; Coir",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "ramesh-chennithala"
  },
  {
    "id": 3,
    "name": "K Muraleedharan",
    "designation": "Minister for Health Family Welfare and Devaswom",
    "constituency": "Vattiyoorkavu",
    "district": "Thiruvananthapuram",
    "party": "INC",
    "is_cm": false,
    "key_departments": "Health; Medical Education; Indigenous Medicine; Ayush",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "k-muraleedharan"
  },
  {
    "id": 4,
    "name": "Sunny Joseph",
    "designation": "Minister for Electricity Environment and Parliamentary Affairs",
    "constituency": "Peravoor",
    "district": "Kannur",
    "party": "INC",
    "is_cm": false,
    "key_departments": "Electricity; Environment; Parliamentary Affairs; ANERT",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "sunny-joseph"
  },
  {
    "id": 5,
    "name": "Shibu Baby John",
    "designation": "Minister for Forests Wildlife and Skill Development",
    "constituency": "Chavara",
    "district": "Kollam",
    "party": "RSP",
    "is_cm": false,
    "key_departments": "Forests & Wildlife Protection; Skill Development; Kerala Academy for Skills Excellence",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "shibu-baby-john"
  },
  {
    "id": 6,
    "name": "Mons Joseph",
    "designation": "Minister for Water Resources and Housing",
    "constituency": "Kaduthuruthy",
    "district": "Kottayam",
    "party": "KEC",
    "is_cm": false,
    "key_departments": "Irrigation; CADA; Ground Water Development; Housing",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "mons-joseph"
  },
  {
    "id": 7,
    "name": "Anoop Jacob",
    "designation": "Minister for Food Civil Supplies and Consumer Affairs",
    "constituency": "Piravom",
    "district": "Ernakulam",
    "party": "KC(J)",
    "is_cm": false,
    "key_departments": "Food & Civil Supplies; Consumer Affairs; Legal Metrology",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "anoop-jacob"
  },
  {
    "id": 8,
    "name": "P K Kunhalikutty",
    "designation": "Minister for Industries and Information Technology",
    "constituency": "Malappuram",
    "district": "Malappuram",
    "party": "IUML",
    "is_cm": false,
    "key_departments": "Industries & Commerce; IT; Artificial Intelligence; Startups",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "p-k-kunhalikutty"
  },
  {
    "id": 9,
    "name": "C P John",
    "designation": "Minister for Transport",
    "constituency": "Thiruvananthapuram",
    "district": "Thiruvananthapuram",
    "party": "CMP",
    "is_cm": false,
    "key_departments": "Road Transport; Motor Vehicles; Water Transport",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "c-p-john"
  },
  {
    "id": 10,
    "name": "A P Anil Kumar",
    "designation": "Minister for Revenue",
    "constituency": "Wandoor",
    "district": "Malappuram",
    "party": "INC",
    "is_cm": false,
    "key_departments": "Land Revenue; Survey & Land Records; Land Reforms",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "a-p-anil-kumar"
  },
  {
    "id": 11,
    "name": "N Samsudheen",
    "designation": "Minister for General Education and Minority Welfare",
    "constituency": "Mannarkkad",
    "district": "Palakkad",
    "party": "IUML",
    "is_cm": false,
    "key_departments": "General Education; Literacy Movement; Waqf/Hajj; Minority Welfare",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "n-samsudheen"
  },
  {
    "id": 12,
    "name": "Roji M John",
    "designation": "Minister for Higher Education",
    "constituency": "Angamaly",
    "district": "Ernakulam",
    "party": "INC",
    "is_cm": false,
    "key_departments": "Collegiate Education; Technical Education; Universities",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "roji-m-john"
  },
  {
    "id": 13,
    "name": "P C Vishnunadh",
    "designation": "Minister for Tourism and Culture",
    "constituency": "Kundara",
    "district": "Kollam",
    "party": "INC",
    "is_cm": false,
    "key_departments": "Tourism; Culture; Kerala State Film Development Corporation",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "p-c-vishnunadh"
  },
  {
    "id": 14,
    "name": "Bindhu Krishna",
    "designation": "Minister for Labour Dairy Development Women & Child Development and Animal Husbandry",
    "constituency": "Kollam",
    "district": "Kollam",
    "party": "INC",
    "is_cm": false,
    "key_departments": "Labour; Dairy Development; Women & Child Development; Animal Husbandry",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "bindhu-krishna"
  },
  {
    "id": 15,
    "name": "M Liju",
    "designation": "Minister for Excise and Co-operation",
    "constituency": "Kayamkulam",
    "district": "Alappuzha",
    "party": "INC",
    "is_cm": false,
    "key_departments": "Excise; Co-operation",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "m-liju"
  },
  {
    "id": 16,
    "name": "K M Shaji",
    "designation": "Minister for Local Self Governments",
    "constituency": "Vengara",
    "district": "Malappuram",
    "party": "IUML",
    "is_cm": false,
    "key_departments": "Panchayat; Municipalities; Corporation; Town Planning; Rural Development",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "k-m-shaji"
  },
  {
    "id": 17,
    "name": "P K Basheer",
    "designation": "Minister for Public Works",
    "constituency": "Eranad",
    "district": "Malappuram",
    "party": "IUML",
    "is_cm": false,
    "key_departments": "PWD",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "p-k-basheer"
  },
  {
    "id": 18,
    "name": "V E Abdul Gafoor",
    "designation": "Minister for Fisheries and Social Justice",
    "constituency": "Kalamassery",
    "district": "Ernakulam",
    "party": "IUML",
    "is_cm": false,
    "key_departments": "Fisheries; Harbour Engineering; Social Justice",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "v-e-abdul-gafoor"
  },
  {
    "id": 19,
    "name": "T Siddique",
    "designation": "Minister for Agriculture",
    "constituency": "Kalpetta",
    "district": "Wayanad",
    "party": "INC",
    "is_cm": false,
    "key_departments": "Agriculture; Soil Survey & Conservation; Kerala Agricultural University",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "t-siddique"
  },
  {
    "id": 20,
    "name": "K A Thulasi",
    "designation": "Minister for Welfare of SC ST and Backward Classes",
    "constituency": "Kongad",
    "district": "Palakkad",
    "party": "INC",
    "is_cm": false,
    "key_departments": "SC Development; ST Development; Backward Classes Welfare",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "k-a-thulasi"
  },
  {
    "id": 21,
    "name": "O J Janeesh",
    "designation": "Minister for Sports Youth Affairs and Archaeology",
    "constituency": "Kodungallur",
    "district": "Thrissur",
    "party": "INC",
    "is_cm": false,
    "key_departments": "Youth Affairs; Sports; Zoos; Museums; Registration; Archaeology; Archives",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "",
    "slug": "o-j-janeesh"
  },
  {
    "id": 22,
    "name": "Thiruvanchoor Radhakrishnan",
    "designation": "Speaker",
    "constituency": "Kottayam",
    "district": "Kottayam",
    "party": "INC",
    "is_cm": false,
    "key_departments": "Assembly presiding officer (non-cabinet)",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "Not a minister; include separately in UI",
    "slug": "thiruvanchoor-radhakrishnan"
  },
  {
    "id": 23,
    "name": "Shanimol Osman",
    "designation": "Deputy Speaker",
    "constituency": "Aroor",
    "district": "Alappuzha",
    "party": "INC",
    "is_cm": false,
    "key_departments": "Assembly presiding officer (non-cabinet)",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "Not a minister",
    "slug": "shanimol-osman"
  },
  {
    "id": 24,
    "name": "Apu John Joseph",
    "designation": "Chief Whip",
    "constituency": "Thodupuzha",
    "district": "Idukki",
    "party": "KEC",
    "is_cm": false,
    "key_departments": "Legislative whip (non-cabinet)",
    "official_email": "VERIFY",
    "office_phone": "VERIFY",
    "notes": "Not a minister",
    "slug": "apu-john-joseph"
  }
];

export const reforms: Reform[] = [
  {
    "id": 1,
    "date": "2026-05-18",
    "title": "Free KSRTC bus travel for women",
    "category": "Major - Welfare (Indira Guarantee)",
    "department_tag": "Transport",
    "minister_tag": "C P John",
    "description": "Approved in first cabinet meeting; one of five UDF manifesto Indira Guarantees.",
    "source": "Wikipedia/The Hindu",
    "status": "Approved",
    "slug": "free-ksrtc-bus-travel-for-women"
  },
  {
    "id": 2,
    "date": "2026-05-18",
    "title": "Old Age Commission constituted",
    "category": "Major - Welfare (Indira Guarantee)",
    "department_tag": "Social Justice",
    "minister_tag": "V E Abdul Gafoor",
    "description": "Approved in first cabinet meeting alongside free bus scheme.",
    "source": "Wikipedia/The Hindu",
    "status": "Approved",
    "slug": "old-age-commission-constituted"
  },
  {
    "id": 3,
    "date": "2026-05-19",
    "title": "Department of Senior Citizens Welfare created",
    "category": "Major - New Department",
    "department_tag": "Social Justice",
    "minister_tag": "V E Abdul Gafoor",
    "description": "Described as first standalone senior citizens welfare department in India.",
    "source": "Outlook Money",
    "status": "Implemented",
    "slug": "department-of-senior-citizens-welfare-created"
  },
  {
    "id": 4,
    "date": "2026-05-20",
    "title": "Cabinet portfolio allocation announced",
    "category": "Administrative",
    "department_tag": "General Administration",
    "minister_tag": "V D Satheesan",
    "description": "CM retains Finance Law and 35 departments; Chennithala gets Home and Vigilance; full allocation followed days of coalition negotiation.",
    "source": "Sunday Guardian",
    "status": "Implemented",
    "slug": "cabinet-portfolio-allocation-announced"
  },
  {
    "id": 5,
    "date": "2026-05-29",
    "title": "Oommen Chandy Health Insurance Scheme proposed",
    "category": "Major - Welfare (Indira Guarantee)",
    "department_tag": "Health",
    "minister_tag": "K Muraleedharan",
    "description": "Proposes free health cover up to Rs 25 lakh per family; initial implementation steps confirmed in June Budget with Rs 10 crore initial allocation.",
    "source": "Mathrubhumi/Budget coverage",
    "status": "Announced",
    "slug": "oommen-chandy-health-insurance-scheme-proposed"
  },
  {
    "id": 6,
    "date": "2026-05-31",
    "title": "District in-charge ministers assigned",
    "category": "Administrative",
    "department_tag": "General Administration",
    "minister_tag": "V D Satheesan",
    "description": "Each district assigned a minister-in-charge for coordination; e.g. Roji M John for Ernakulam P K Basheer for Malappuram.",
    "source": "Times of India",
    "status": "Implemented",
    "slug": "district-in-charge-ministers-assigned"
  },
  {
    "id": 7,
    "date": "2026-06-01",
    "title": "Cabinet portfolio reshuffle - additional charges allocated",
    "category": "Administrative",
    "department_tag": "General Administration",
    "minister_tag": "V D Satheesan",
    "description": "Some ministers given additional portfolio responsibilities in early reshuffle; verify exact changes against Kerala Gazette notification.",
    "source": "Keralakaumudi",
    "status": "Implemented - NEEDS VERIFICATION OF DETAIL",
    "slug": "cabinet-portfolio-reshuffle-additional-charges-allocated"
  },
  {
    "id": 8,
    "date": "2026-06-19",
    "title": "State Budget 2026-27 presented",
    "category": "Major - Fiscal Policy",
    "department_tag": "Finance",
    "minister_tag": "V D Satheesan",
    "description": "First UDF budget; flagged Rs 20500 crore revenue shortfall vs Jan 2026 LDF estimates and Rs 87012 crore accumulated liabilities including KIIFB.",
    "source": "The Federal/ANI",
    "status": "Presented",
    "slug": "state-budget-2026-27-presented"
  },
  {
    "id": 9,
    "date": "2026-06-19",
    "title": "Mission Samudra maritime development programme",
    "category": "Major - Infrastructure",
    "department_tag": "Ports/Transport",
    "minister_tag": "C P John",
    "description": "Rs 400 crore maritime hub plan over five years; Vizhinjam green bunkering port dry ports Balaramapuram-Vizhinjam rail link Kerala Maritime Policy.",
    "source": "The Federal",
    "status": "Announced",
    "slug": "mission-samudra-maritime-development-programme"
  },
  {
    "id": 10,
    "date": "2026-06-19",
    "title": "Kerala MSME Growth Scheme",
    "category": "Major - Industry",
    "department_tag": "Industries",
    "minister_tag": "P K Kunhalikutty",
    "description": "Targets ~10000 new MSMEs with financial assistance and mentoring.",
    "source": "The Federal",
    "status": "Announced",
    "slug": "kerala-msme-growth-scheme"
  },
  {
    "id": 11,
    "date": "2026-06-19",
    "title": "Kerala Knowledge Valley",
    "category": "Major - Education",
    "department_tag": "Higher Education",
    "minister_tag": "Roji M John",
    "description": "Special legislation planned to attract foreign universities; revives semester-in-Kerala programme for international students; Global Job Watch Tower for employment trends.",
    "source": "Dailyhunt/ANI",
    "status": "Announced",
    "slug": "kerala-knowledge-valley"
  },
  {
    "id": 12,
    "date": "2026-06-19",
    "title": "KIIFB structural reform committee",
    "category": "Major - Fiscal Policy",
    "department_tag": "Finance",
    "minister_tag": "V D Satheesan",
    "description": "Expert Committee constituted to recommend overhaul of KIIFB borrowing framework after debt burden concerns.",
    "source": "The Federal",
    "status": "Announced",
    "slug": "kiifb-structural-reform-committee"
  },
  {
    "id": 13,
    "date": "2026-06-19",
    "title": "New medical college at Haripad + 2nd TVM medical college operationalised",
    "category": "Major - Health Infrastructure",
    "department_tag": "Health",
    "minister_tag": "K Muraleedharan",
    "description": "Part of Budget health infrastructure push; also upgrades to Kasaragod Idukki Wayanad Manjeri medical colleges.",
    "source": "The Federal",
    "status": "Announced",
    "slug": "new-medical-college-at-haripad-2nd-tvm-medical-college-operationalised"
  }
];

export const parties = Array.from(new Set(ministers.map((m) => m.party))).filter(Boolean);

export const departments = Array.from(
  new Set(
    ministers.flatMap((m) =>
      m.key_departments
        .split(";")
        .map((d) => d.trim())
        .filter(Boolean)
    )
  )
).sort();

export function getMinisterBySlug(slug: string) {
  return ministers.find((minister) => minister.slug === slug);
}

export function getReformsForMinister(name: string) {
  return reforms.filter((reform) =>
    reform.minister_tag.toLowerCase().includes(name.toLowerCase()) ||
    name.toLowerCase().includes(reform.minister_tag.toLowerCase())
  );
}

export function getMinisterDepartments(minister: Minister) {
  return minister.key_departments
    .split(";")
    .map((item) => item.trim())
    .filter(Boolean);
}

export const stats = {
  cabinetMembers: ministers.filter((m) => !["Speaker", "Deputy Speaker", "Chief Whip"].includes(m.designation)).length,
  totalPeople: ministers.length,
  reforms: reforms.length,
  verifiedEmails: ministers.filter((m) => m.official_email && m.official_email !== "VERIFY").length,
  unverifiedContacts: ministers.filter((m) => m.official_email === "VERIFY" || m.office_phone === "VERIFY").length,
};
