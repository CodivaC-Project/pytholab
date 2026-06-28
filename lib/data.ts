export const siteConfig = {
  name: "Trust Care Diagnostics",
  tagline: "Where Accuracy Meets Trust",
  description:
    "Your trusted partner in accurate diagnostics and health monitoring since 2016.",
  phone: "+91 9608759500",
  phone2: "+91 8676081636",
  email: "info@trustcarediagnostics.online",
  whatsapp: "919608759500",
  address: "Near Asarganj More, Shahkund, Bhagalpur, Bihar - 812001",
  hours: {
    weekday: "Mon-Sat: 7:00 AM - 9:00 PM",
    sunday: "Sun: 7:00 AM - 2:00 PM",
  },
  social: {
    facebook: "https://facebook.com/trustcarediagnostics",
    instagram: "https://instagram.com/trustcarediagnostics",
  },
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { label: "Happy Patients", value: 50000, suffix: "+" },
  { label: "Tests Available", value: 500, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Expert Staff", value: 20, suffix: "+" },
];

export const services = [
  {
    title: "Hematology",
    description:
      "Complete blood count, hemoglobin, WBC, platelet count, blood grouping and more.",
    icon: "Droplets",
    tests: ["CBC", "ESR", "Hemoglobin", "Blood Group & Rh", "Platelet Count"],
    color: "coral",
  },
  {
    title: "Diabetes Panel",
    description:
      "Comprehensive diabetes screening including fasting sugar, HbA1c, and glucose tolerance.",
    icon: "Activity",
    tests: ["Fasting Sugar", "PPBS", "Random Sugar", "HbA1c", "Glucose Tolerance"],
    color: "teal",
  },
  {
    title: "Thyroid Profile",
    description:
      "Complete thyroid function testing — T3, T4, TSH with high-precision analyzers.",
    icon: "Zap",
    tests: ["T3", "T4", "TSH", "Free T3", "Free T4"],
    color: "coral",
  },
  {
    title: "Liver Function",
    description:
      "Comprehensive liver health assessment with SGOT, SGPT, bilirubin, and protein levels.",
    icon: "Shield",
    tests: ["SGOT", "SGPT", "Bilirubin", "Albumin", "ALP", "GGT"],
    color: "teal",
  },
  {
    title: "Kidney Function",
    description:
      "Complete renal panel — creatinine, BUN, electrolytes, and urine analysis.",
    icon: "HeartPulse",
    tests: ["Creatinine", "BUN", "Uric Acid", "Electrolytes", "Urine Routine"],
    color: "coral",
  },
  {
    title: "Vitamins & Minerals",
    description:
      "Essential nutrient screening — Vitamin D, B12, calcium, iron studies.",
    icon: "Sun",
    tests: ["Vitamin D", "Vitamin B12", "Calcium", "Iron Studies", "Folate"],
    color: "teal",
  },
];

export const whyChooseUs = [
  {
    title: "Advanced Equipment",
    description:
      "Equipped with the latest automated analyzers for the most accurate results.",
    icon: "Microscope",
  },
  {
    title: "Expert Team",
    description:
      "Experienced pathologists and trained technicians ensure highest accuracy in every test.",
    icon: "Users",
  },
  {
    title: "Quick Results",
    description:
      "Get your test results on the same day. Most routine reports within 2-4 hours.",
    icon: "Clock",
  },
  {
    title: "Quality Standards",
    description:
      "Rigorous quality control protocols and certified processes meeting highest standards.",
    icon: "Award",
  },
  {
    title: "Affordable Prices",
    description:
      "Quality diagnostic services at competitive prices. Special discounts on health packages.",
    icon: "IndianRupee",
  },
  {
    title: "Home Collection",
    description:
      "Convenient free home sample collection service within Bhagalpur city limits.",
    icon: "Home",
  },
];

export const packages = [
  {
    id: "basic",
    name: "Basic Health Checkup",
    tests: 12,
    price: 899,
    originalPrice: 1499,
    popular: false,
    features: [
      "Complete Blood Count (CBC)",
      "Blood Sugar Fasting",
      "Urine Routine",
      "Lipid Profile",
      "Liver Function (LFT)",
      "Kidney Function (KFT)",
      "Thyroid (TSH)",
      "Iron Studies",
      "Vitamin D",
      "HbA1c",
      "Calcium",
      "ESR",
    ],
  },
  {
    id: "executive",
    name: "Executive Full Body",
    tests: 28,
    price: 1299,
    originalPrice: 2499,
    popular: true,
    features: [
      "Everything in Basic Health Checkup",
      "Thyroid Profile (T3, T4, TSH)",
      "Complete Diabetes Panel",
      "Cardiac Risk Markers",
      "Vitamin B12",
      "Folate",
      "PSA (for Men)",
      "CA-125 (for Women)",
      "Hepatitis B Screening",
      "Iron Studies Complete",
      "C-Reactive Protein",
      "Free Consultation",
    ],
  },
  {
    id: "premium",
    name: "Premium Wellness",
    tests: 45,
    price: 4999,
    originalPrice: 8999,
    popular: false,
    features: [
      "Everything in Executive Full Body",
      "Advanced Cardiac Panel",
      "Tumour Markers Panel",
      "Complete Hormone Panel",
      "Autoimmune Markers",
      "Advanced Liver Panel",
      "Pancreatic Function",
      "Heavy Metal Screening",
      "Genetic Risk Assessment",
      "Nutrient Profile",
      "Dietician Consultation",
      "Doctor Follow-up",
    ],
  },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Trust Care Diagnostics provides the most accurate and timely reports. The staff is very professional and caring. Highly recommended for all pathology needs!",
  },
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Best diagnostic centre in the area. Very clean and hygienic. The doctors and technicians are well-trained and courteous.",
  },
  {
    name: "Neha Gupta",
    rating: 4,
    text: "The team at Trust Care is amazing! They handled my pregnancy-related tests with utmost care and professionalism.",
  },
  {
    name: "Amit Singh",
    rating: 5,
    text: "Excellent laboratory with modern equipment. The home collection service is very convenient. Reports are always on time and accurate.",
  },
  {
    name: "Sunita Devi",
    rating: 5,
    text: "I have been getting my health checkups done here for the past 2 years. The quality of testing is comparable to big city labs.",
  },
  {
    name: "Mohammad Khan",
    rating: 4,
    text: "Very good diagnostic centre with affordable prices. The online report download feature is very helpful.",
  },
];

export const blogPosts = [
  {
    slug: "understanding-cbc-report",
    title: "Understanding Your CBC Report: A Complete Guide",
    category: "Health Guide",
    date: "2026-04-18",
    readTime: "5 min read",
    excerpt:
      "A Complete Blood Count (CBC) is one of the most commonly ordered blood tests. Learn what each value means and when to consult your doctor.",
    content: `A Complete Blood Count (CBC) is one of the most commonly ordered blood tests. It provides valuable information about the cells in your blood, including red blood cells, white blood cells, and platelets.

**What Does a CBC Measure?**

The CBC measures several components:

- **Hemoglobin** — carries oxygen in your blood. Low levels may indicate anemia.
- **White Blood Cell (WBC) Count** — fights infections. High levels may indicate infection or inflammation.
- **Platelet Count** — helps blood clot. Low levels may cause bleeding problems.
- **Hematocrit** — percentage of blood volume that is red blood cells.

**When Should You Get a CBC?**

Your doctor may order a CBC to:
- Check for infections
- Diagnose anemia
- Monitor medication side effects
- Screen for blood disorders
- Prepare for surgery

**Understanding Your Results**

Results outside the normal range don't always mean you have a medical condition. Factors like diet, exercise, medications, and even time of day can affect results. Always discuss your results with your healthcare provider.

At Trust Care Diagnostics, our expert pathologists ensure accurate CBC analysis using state-of-the-art automated analyzers. Results are typically available within 2-4 hours.`,
  },
  {
    slug: "diabetes-management-testing",
    title: "Diabetes Management: The Role of Regular Testing",
    category: "Diabetes",
    date: "2026-04-15",
    readTime: "4 min read",
    excerpt:
      "Diabetes is a chronic condition that affects millions of people worldwide. Regular testing is crucial for effective management.",
    content: `Diabetes is a chronic condition that affects millions of people worldwide. Regular testing is crucial for effective management and prevention of complications.

**Key Tests for Diabetes Management**

- **Fasting Blood Sugar (FBS)** — Measures blood glucose after overnight fasting. Normal: below 100 mg/dL.
- **Post-Prandial Blood Sugar (PPBS)** — Measures blood glucose 2 hours after eating. Normal: below 140 mg/dL.
- **HbA1c** — Shows average blood sugar over 2-3 months. Target for most adults: below 7%.

**How Often Should You Test?**

- If you're at risk: annual screening
- If diagnosed with pre-diabetes: every 6 months
- If managing diabetes: as recommended by your doctor (often every 3 months for HbA1c)

**The Importance of Regular Monitoring**

Regular blood sugar monitoring helps:
- Track the effectiveness of treatment plans
- Detect dangerous high or low blood sugar levels
- Prevent long-term complications like nerve damage, kidney disease, and eye problems
- Make informed decisions about diet and exercise

Trust Care Diagnostics offers comprehensive diabetes panels with same-day results, helping you and your doctor make timely decisions about your health.`,
  },
  {
    slug: "heart-health-lipid-profile",
    title: "Heart Health: Importance of Lipid Profile Testing",
    category: "Heart Health",
    date: "2026-04-10",
    readTime: "6 min read",
    excerpt:
      "Cardiovascular diseases are the leading cause of death. Regular lipid testing can help detect risks early.",
    content: `Cardiovascular diseases are the leading cause of death globally. Regular lipid profile testing is one of the most effective ways to assess your heart disease risk.

**What is a Lipid Profile?**

A lipid profile measures the fats in your blood:
- **Total Cholesterol** — should be below 200 mg/dL
- **LDL Cholesterol** ("bad" cholesterol) — should be below 100 mg/dL
- **HDL Cholesterol** ("good" cholesterol) — should be above 40 mg/dL for men, 50 for women
- **Triglycerides** — should be below 150 mg/dL

**Why It Matters**

High cholesterol has no symptoms — the only way to know your levels is through testing. High LDL and low HDL increase your risk of heart attack and stroke.

**Who Should Get Tested?**
- Adults aged 20 and above: every 4-6 years
- Those with risk factors (family history, obesity, diabetes): more frequently
- After starting cholesterol medication: 4-8 weeks after, then every 3-12 months

**How to Improve Your Lipid Profile**
- Regular physical activity
- Heart-healthy diet low in saturated fats
- Maintain healthy weight
- Quit smoking
- Limit alcohol

Schedule your lipid profile test at Trust Care Diagnostics and take the first step toward better heart health.`,
  },
  {
    slug: "thyroid-disorders",
    title: "Thyroid Disorders: Signs, Symptoms, and Testing",
    category: "Thyroid",
    date: "2026-04-05",
    readTime: "5 min read",
    excerpt:
      "The thyroid gland plays a crucial role in regulating metabolism. Learn about common thyroid disorders and when to get tested.",
    content: `The thyroid gland, located in your neck, produces hormones that regulate metabolism, energy levels, and overall body function. When it malfunctions, it can affect nearly every organ system.

**Common Thyroid Disorders**

**Hypothyroidism (Underactive Thyroid)**
- Fatigue and weakness
- Weight gain
- Cold sensitivity
- Dry skin and hair
- Depression

**Hyperthyroidism (Overactive Thyroid)**
- Weight loss despite normal appetite
- Rapid heartbeat
- Anxiety and irritability
- Heat intolerance
- Tremors

**Key Thyroid Tests**
- **TSH** — most sensitive indicator of thyroid function. Normal: 0.4-4.0 mIU/L
- **Free T4** — measures active thyroid hormone. Normal: 0.8-1.8 ng/dL
- **Free T3** — sometimes tested for more complete picture

**When to Get Tested**
- If you experience symptoms of hypo- or hyperthyroidism
- Family history of thyroid problems
- Pregnancy or planning pregnancy
- Previous thyroid treatment

Trust Care Diagnostics offers comprehensive thyroid panels with quick turnaround, helping you get the answers you need.`,
  },
  {
    slug: "dengue-prevention",
    title: "Dengue Prevention: What You Need to Know",
    category: "Infectious Disease",
    date: "2026-03-28",
    readTime: "4 min read",
    excerpt:
      "Dengue fever is a mosquito-borne viral infection. Early detection through proper testing is critical for effective treatment.",
    content: `Dengue fever is a mosquito-borne viral infection that can range from mild to severe. Early detection through proper testing is critical for effective treatment.

**Understanding Dengue**

Dengue is transmitted by the Aedes mosquito, which bites during the day. Symptoms typically appear 4-10 days after the bite.

**Common Symptoms**
- High fever (104°F/40°C)
- Severe headache, especially behind the eyes
- Joint and muscle pain ("breakbone fever")
- Skin rash
- Nausea and vomiting

**Key Tests for Dengue**
- **NS1 Antigen Test** — detects the virus in the first 1-7 days of illness. Most useful for early diagnosis.
- **Dengue IgM Antibody** — appears after day 5 of illness
- **Dengue IgG Antibody** — indicates past infection or secondary infection
- **Platelet Count** — critically important as dengue causes platelet count to drop

**When to Get Tested**
- If you have fever with severe body ache
- During dengue season (monsoon and post-monsoon)
- If you've traveled to a dengue-endemic area

**Prevention is Key**
- Use mosquito repellent
- Wear full-sleeved clothing
- Eliminate standing water around your home
- Use window screens

Trust Care Diagnostics offers comprehensive dengue testing panels with rapid results to help with timely treatment decisions.`,
  },
  {
    slug: "kidney-health",
    title: "Kidney Health: When to Get Your Kidneys Tested",
    category: "Kidney Health",
    date: "2026-03-25",
    readTime: "5 min read",
    excerpt:
      "Your kidneys filter waste and excess fluids from your blood. Regular testing can catch problems early.",
    content: `Your kidneys filter waste and excess fluids from your blood, playing a vital role in maintaining overall health. Regular testing can catch kidney problems early, when they're most treatable.

**Signs of Kidney Problems**
- Swelling in feet, ankles, or face
- Changes in urination (frequency, color, foaming)
- Persistent fatigue
- Nausea and loss of appetite
- Muscle cramps
- High blood pressure

**Key Kidney Tests**
- **Serum Creatinine** — waste product filtered by kidneys. High levels may indicate kidney dysfunction.
- **Blood Urea Nitrogen (BUN)** — measures urea nitrogen in blood. High levels can indicate kidney problems.
- **GFR (Glomerular Filtration Rate)** — calculated from creatinine, age, and gender. Below 60 for 3+ months indicates chronic kidney disease.
- **Urine Albumin** — detects protein in urine, an early sign of kidney damage.
- **Urine Routine & Microscopy** — checks for abnormalities in urine.

**Risk Factors for Kidney Disease**
- Diabetes
- High blood pressure
- Family history of kidney disease
- Obesity
- Smoking
- Age over 60

**Prevention Tips**
- Stay hydrated
- Control blood sugar and blood pressure
- Reduce salt intake
- Exercise regularly
- Avoid excessive painkillers

Trust Care Diagnostics offers comprehensive kidney function panels to help monitor your renal health accurately.`,
  },
  {
    slug: "vitamin-d-deficiency",
    title: "Vitamin D Deficiency: Signs, Causes, and Testing",
    category: "Health Guide",
    date: "2026-03-20",
    readTime: "4 min read",
    excerpt:
      "Vitamin D is essential for bone health, immunity, and overall wellbeing. Learn about deficiency symptoms and when to get tested.",
    content: `Vitamin D, often called the "sunshine vitamin," plays a critical role in calcium absorption, bone health, immune function, and mood regulation. Despite abundant sunlight, Vitamin D deficiency is surprisingly common in India.

**Signs of Vitamin D Deficiency**
- Bone pain and muscle weakness
- Fatigue and tiredness
- Frequent illness and infections
- Slow wound healing
- Hair loss
- Depression or low mood
- Back pain

**Causes of Deficiency**
- Limited sun exposure (indoor lifestyle, sunscreen use)
- Darker skin tone (melanin reduces Vitamin D synthesis)
- Obesity (Vitamin D gets trapped in fat tissue)
- Aging (skin produces less Vitamin D)
- Certain medical conditions (Crohn's, celiac disease)
- Medications that affect Vitamin D absorption

**Key Test**
- **25-Hydroxy Vitamin D** — the most accurate measure of Vitamin D status
  - Deficient: below 20 ng/mL
  - Insufficient: 20-29 ng/mL
  - Sufficient: 30-100 ng/mL

**How to Maintain Healthy Levels**
- Get 15-20 minutes of sunlight daily
- Include fatty fish, egg yolks, and fortified foods
- Consider supplementation as advised by your doctor
- Get tested annually if at risk

At Trust Care Diagnostics, we offer accurate Vitamin D testing with quick results. Book your test today.`,
  },
  {
    slug: "blood-sugar-tips",
    title: "Blood Sugar Management: 7 Practical Tips",
    category: "Diabetes",
    date: "2026-03-15",
    readTime: "4 min read",
    excerpt:
      "Managing blood sugar levels doesn't have to be complicated. These practical tips can help you stay on track.",
    content: `Whether you have been diagnosed with diabetes or want to prevent it, managing blood sugar levels is essential for long-term health. Here are seven practical tips that make a real difference.

**1. Start Your Day with Protein**
Eating protein at breakfast helps stabilize blood sugar throughout the morning. Try eggs, sprouts, or paneer instead of just toast or paratha.

**2. Walk After Meals**
A 10-15 minute walk after meals can reduce post-meal blood sugar spikes by up to 30%. It's one of the simplest and most effective strategies.

**3. Stay Hydrated**
Dehydration can concentrate blood sugar levels. Drink water throughout the day and limit sugary drinks and packaged juices.

**4. Choose Whole Grains**
Replace white rice and maida with brown rice, millets (bajra, jowar, ragi), and whole wheat. These have a lower glycemic index.

**5. Monitor Portion Sizes**
Even healthy foods can raise blood sugar if eaten in excess. Use smaller plates and follow the balanced plate method: half vegetables, quarter protein, quarter carbs.

**6. Get Regular Testing**
Regular blood sugar monitoring helps you understand how your body responds to different foods and activities. Test fasting sugar and HbA1c as recommended by your doctor.

**7. Manage Stress**
Stress hormones directly raise blood sugar levels. Practice deep breathing, meditation, or yoga to keep stress in check.

**When to Test**
- Fasting Blood Sugar: first thing in the morning before eating
- Post-Prandial: 2 hours after a meal
- HbA1c: every 3 months for diabetics, annually for others

Trust Care Diagnostics offers comprehensive diabetes testing panels with same-day results.`,
  },
  {
    slug: "pregnancy-tests",
    title: "Essential Tests During Pregnancy: A Complete Guide",
    category: "Health Guide",
    date: "2026-03-10",
    readTime: "5 min read",
    excerpt:
      "Prenatal testing helps ensure the health of both mother and baby. Here's a guide to the essential tests during each trimester.",
    content: `Pregnancy is a journey that requires careful monitoring. Regular prenatal tests help detect potential complications early and ensure the health of both mother and baby.

**First Trimester (Weeks 1-12)**

- **Complete Blood Count (CBC)** — checks for anemia and infections
- **Blood Group & Rh Typing** — important for detecting Rh incompatibility
- **Urine Routine** — screens for urinary tract infections and protein
- **HIV, HBsAg, VDRL** — mandatory screening for infections
- **Thyroid Function (TSH)** — untreated thyroid problems can affect fetal development
- **Blood Sugar (FBS/PPBS)** — screens for gestational diabetes early
- **Rubella IgG** — checks immunity to rubella virus

**Second Trimester (Weeks 13-26)**

- **Double Marker / Triple Marker** — screens for chromosomal abnormalities
- **Anomaly Scan (18-22 weeks)** — detailed ultrasound to check baby's organs
- **Glucose Tolerance Test (GTT)** — screens for gestational diabetes (24-28 weeks)
- **Hemoglobin** — monitors for anemia which is common in pregnancy

**Third Trimester (Weeks 27-40)**

- **CBC** — repeat to monitor hemoglobin
- **Urine Culture** — screens for asymptomatic UTI
- **Blood Sugar** — recheck if previously abnormal
- **Antibody Screening** — for Rh-negative mothers
- **Non-Stress Test (NST)** — monitors baby's heart rate

**Why These Tests Matter**
- Early detection of complications
- Monitoring fetal growth and development
- Ensuring mother's health is optimal
- Planning safe delivery

At Trust Care Diagnostics, we offer comprehensive pregnancy test packages with accurate results and compassionate care.`,
  },
];

export const faqs = [
  {
    question: "How many hours of fasting are required before a blood test?",
    answer:
      "Most blood tests like Fasting Blood Sugar, Lipid Profile, and Iron Studies require 8-12 hours of fasting. However, many tests like CBC, Thyroid, and HbA1c do not require fasting. Please check with our staff when booking your test for specific instructions.",
  },
  {
    question: "When will I get my test report?",
    answer:
      "Most routine test results are available within 2-4 hours. Specialized tests like cultures, hormones, and tumor markers may take 24-48 hours. You will receive an SMS notification when your reports are ready for download.",
  },
  {
    question: "Is home sample collection available?",
    answer:
      "Yes, we offer free home sample collection within Bhagalpur city limits. You can book a home visit by calling us at 9608759500 or through our online appointment form. Our trained phlebotomist will visit your home at a scheduled time.",
  },
  {
    question: "How can I download my test reports online?",
    answer:
      "You can download your reports through our online portal. Simply visit our website, enter your Patient ID and registered mobile number to access and download your reports in PDF format. You can also request a WhatsApp delivery of your reports.",
  },
  {
    question: "What payment modes are accepted at Trust Care Diagnostics?",
    answer:
      "We accept cash, UPI (Google Pay, PhonePe, Paytm), debit/credit cards, and net banking. We also accept major insurance and TPA cards. For your convenience, payment can be made at the time of sample collection or after receiving your reports.",
  },
];

export const allTests = [
  { category: "Hematology", name: "Complete Blood Count (CBC)", price: 150 },
  { category: "Hematology", name: "ESR", price: 100 },
  { category: "Hematology", name: "Hemoglobin (Hb)", price: 100 },
  { category: "Hematology", name: "Total WBC Count", price: 120 },
  { category: "Hematology", name: "Platelet Count", price: 120 },
  { category: "Hematology", name: "Blood Group & Rh", price: 100 },
  { category: "Diabetes", name: "Blood Sugar (FBS)", price: 100 },
  { category: "Diabetes", name: "Blood Sugar (PPBS)", price: 100 },
  { category: "Diabetes", name: "Random Blood Sugar", price: 100 },
  { category: "Diabetes", name: "HbA1c", price: 400 },
  { category: "Liver", name: "Liver Function Test (LFT)", price: 400 },
  { category: "Kidney", name: "Kidney Function Test (KFT)", price: 400 },
  { category: "Lipid", name: "Lipid Profile", price: 250 },
  { category: "Thyroid", name: "T3", price: 200 },
  { category: "Thyroid", name: "T4", price: 200 },
  { category: "Thyroid", name: "TSH", price: 200 },
  { category: "Vitamins", name: "Vitamin D", price: 500 },
  { category: "Vitamins", name: "Vitamin B12", price: 500 },
  { category: "Minerals", name: "Calcium", price: 200 },
  { category: "Minerals", name: "Uric Acid", price: 120 },
  { category: "Iron", name: "ASO Titre", price: 200 },
  { category: "Hormones", name: "FSH", price: 300 },
  { category: "Hormones", name: "LH", price: 300 },
  { category: "Hormones", name: "Prolactin", price: 300 },
  { category: "Hormones", name: "Testosterone", price: 350 },
  { category: "Serology", name: "Dengue NS1", price: 600 },
  { category: "Serology", name: "Widal Test", price: 200 },
  { category: "Serology", name: "HIV I & II", price: 300 },
  { category: "Serology", name: "HBsAg", price: 300 },
  { category: "Serology", name: "HCV", price: 300 },
  { category: "Serology", name: "CRP", price: 200 },
  { category: "Serology", name: "RA Factor", price: 300 },
  { category: "Clinical", name: "Urine Routine & Microscopy", price: 120 },
  { category: "Clinical", name: "Stool Routine & Microscopy", price: 120 },
  { category: "Clinical", name: "Sputum Examination", price: 200 },
  { category: "Clinical", name: "Semen Analysis", price: 700 },
];

export const galleryImages = [
  { alt: "Reception Area", category: "Reception" },
  { alt: "Waiting Lounge", category: "Reception" },
  { alt: "Sample Collection Room", category: "Sample Collection Room" },
  { alt: "Blood Collection Station", category: "Sample Collection Room" },
  { alt: "Main Laboratory", category: "Laboratory" },
  { alt: "Automated Analyzer", category: "Laboratory" },
  { alt: "Microscope Station", category: "Laboratory" },
  { alt: "Hematology Analyzer", category: "Instruments" },
  { alt: "Biochemistry Analyzer", category: "Instruments" },
  { alt: "Our Expert Team", category: "Staff" },
  { alt: "Lab Technicians", category: "Staff" },
  { alt: "Quality Control", category: "Laboratory" },
];

export const popularTests = [
  { name: "Complete Blood Count (CBC)", price: 150, category: "Hematology" },
  { name: "Blood Sugar (FBS)", price: 100, category: "Diabetes" },
  { name: "Thyroid Profile (T3, T4, TSH)", price: 400, category: "Thyroid" },
  { name: "Vitamin D", price: 500, category: "Vitamins" },
  { name: "HbA1c", price: 400, category: "Diabetes" },
  { name: "Liver Function Test (LFT)", price: 400, category: "Liver" },
  { name: "Kidney Function Test (KFT)", price: 400, category: "Kidney" },
  { name: "Lipid Profile", price: 250, category: "Lipid" },
];

export const timeline = [
  {
    year: "2016",
    title: "Foundation",
    description:
      "Trust Care Diagnostics was established with a vision to provide accurate and affordable diagnostic services.",
  },
  {
    year: "2019",
    title: "Expansion",
    description:
      "Expanded our test menu to 500+ tests and invested in advanced automated analyzers.",
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description:
      "Launched online report download and home sample collection services.",
  },
  {
    year: "2023",
    title: "Quality Certification",
    description:
      "Received quality certification for meeting the highest standards in laboratory testing.",
  },
  {
    year: "2025",
    title: "50K+ Patients",
    description:
      "Crossed the milestone of serving over 50,000 patients with 99.9% accuracy.",
  },
];
