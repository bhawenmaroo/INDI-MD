const fs = require('fs');

const indexContent = fs.readFileSync('index.html', 'utf-8');

const headMatch = indexContent.match(/(<head>[\s\S]*?<\/head>)/);
let headTemplate = headMatch ? headMatch[1] : '';

const headerMatch = indexContent.match(/(<header[\s\S]*?<\/header>)/);
const headerTemplate = headerMatch ? headerMatch[1] : '';

const footerMatch = indexContent.match(/(<footer[\s\S]*?<\/footer>)/);
const footerTemplate = footerMatch ? footerMatch[1] : '';

const whatsappMatch = indexContent.match(/(<a href="https:\/\/wa\.me\/918902052927"[\s\S]*?<\/a>)/);
const whatsappTemplate = whatsappMatch ? whatsappMatch[1] : '';

const scriptsMatch = indexContent.match(/(<!-- Scripts -->[\s\S]*?<\/body>)/);
const scriptsTemplate = scriptsMatch ? scriptsMatch[1] : '';

function generatePage(filename, title, metaDesc, contentHtml) {
    let head = headTemplate.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
    head = head.replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${metaDesc}">`);

    const html = `<!DOCTYPE html>
<html lang="en" data-theme="light">
${head}
<body>
    ${headerTemplate}
    
    <main>
${contentHtml}
    </main>

    ${footerTemplate}

    ${whatsappTemplate}

    ${scriptsTemplate}
</html>`;

    fs.writeFileSync(filename, html, 'utf-8');
    console.log(`Generated ${filename}`);
}

const about_us = `
    <section class="page-hero bg-dynamic" style="padding-top: 150px; background-color: var(--color-bg);">
        <div class="section-header">
            <h1>We Are Building India's Biotechnology Future.</h1>
            <p style="font-size: 20px;">IndiBiotek Private Limited was founded with a simple but powerful idea: the tools that doctors use to diagnose disease, the inputs that farmers use to grow food, and the reagents that scientists use to drive discovery — these should be made in India, by Indians, for India.</p>
            <p>We were founded in 2024 and formally registered as a startup in August 2025. In a short time, we have filed a patent, secured BIRAC support through the E-YUVA programme at Adamas University, established an R&D facility at SRM University Delhi-NCR, and built a product portfolio across three divisions that addresses some of the most pressing needs in Indian healthcare, agriculture, and scientific research.</p>
        </div>
    </section>

    <section class="bg-dynamic" style="background-color: var(--color-surface);">
        <div class="container" style="max-width: 1000px; margin: 0 auto; padding: 0 5%;">
            <h2>Our Mission</h2>
            <p>IndiBiotek's mission is to use biotechnology to improve the health and well-being of people and the planet. We are committed to developing innovative solutions to some of the most pressing challenges of our time — and to proving that India can build, not just consume, world-class biotech products.</p>
            
            <h2 style="margin-top: 60px;">From Vision to Reality</h2>
            <p>India currently imports the vast majority of its diagnostic kits, bio-inputs, and scientific reagents from countries like China and Taiwan. This dependency is a vulnerability — for national health security, for farmers, and for the scientific community. IndiBiotek was founded to change that. We are building indigenous solutions that match and exceed international quality standards, developed right here on Indian soil, in partnership with India's finest research institutions.</p>
            
            <h2 style="margin-top: 60px;">Recognised, Certified, and Research-Backed</h2>
            <ul style="list-style-type: disc; margin-left: 20px; margin-bottom: 24px; color: var(--color-text-2);">
                <li>Patent Application No. 202511077832 filed with the Indian Patent Office</li>
                <li>Supported by BIRAC under the E-YUVA Centre programme at Adamas University</li>
                <li>Registered under Startup India, Government of India</li>
                <li>Recognised by the Ministry of MSME</li>
                <li>Make in India certified</li>
                <li>R&D at SRM University Delhi-NCR and Adamas University Kolkata</li>
            </ul>
        </div>
    </section>

    <section class="bg-dynamic" style="background-color: var(--color-bg);">
        <div class="container" style="max-width: 1000px; margin: 0 auto; padding: 0 5%;">
            <div class="section-header">
                <h2>The Team Behind IndiBiotek</h2>
            </div>
            
            <h3 style="color: var(--color-accent); border-bottom: 1px solid var(--color-border); padding-bottom: 10px; margin-bottom: 20px;">Leadership</h3>
            <div class="division-grid" style="margin-bottom: 60px;">
                <div class="division-card">
                    <h3>Dr. Subhadeep Mukherjee</h3>
                    <p>Chief Operating Officer & Director</p>
                </div>
                <div class="division-card">
                    <h3>Dr. Pritam Biswas</h3>
                    <p>Chief Scientific Officer (R&D)</p>
                </div>
                <div class="division-card">
                    <h3>Mr. Bhawen Maroo</h3>
                    <p>Chief Marketing Officer - (West & South Region)</p>
                </div>
                <div class="division-card">
                    <h3>Mr. Debjeet Saha</h3>
                    <p>International Business Head - Sales & Marketing Division</p>
                </div>
            </div>

            <h3 style="color: var(--color-accent); border-bottom: 1px solid var(--color-border); padding-bottom: 10px; margin-bottom: 20px;">Board of Advisors</h3>
            <div class="division-grid" style="margin-bottom: 60px;">
                <div class="division-card">
                    <h3>Mr. Ajjay Manohar Sharma</h3>
                    <p>Director, Zanith Transformers & Switchgears Pvt. Ltd.</p>
                </div>
                <div class="division-card">
                    <h3>Prof. V. Samuel Raj</h3>
                    <p>Registrar & Dean Academic Affairs & Director, Department of Microbiology & Biotechnology - SRM University, Delhi-NCR, Sonipat</p>
                </div>
                <div class="division-card">
                    <h3>Dr. Shounak Roy</h3>
                    <p>Scientist (PDR), Department of Biomedical Engineering, Texas A&M University, USA</p>
                </div>
                <div class="division-card">
                    <h3>Dr. Akhilesh Kumar</h3>
                    <p>Advocate & Legal Consultant - High Court</p>
                </div>
                <div class="division-card">
                    <h3>Dr. Rajendra Kumar Dubey</h3>
                    <p>Regulatory and Compliance Biocon, QA & QC Head</p>
                </div>
                <div class="division-card">
                    <h3>Dr. Subba Reddy</h3>
                    <p>Scientist</p>
                </div>
            </div>

            <h3 style="color: var(--color-accent); border-bottom: 1px solid var(--color-border); padding-bottom: 10px; margin-bottom: 20px;">Scientific Team</h3>
            <div class="division-grid" style="margin-bottom: 60px;">
                <div class="division-card">
                    <h3>Dr. Abhishek Mukherjee</h3>
                    <p>Antibody & Cell Culture</p>
                </div>
                <div class="division-card">
                    <h3>Dr. Suman Mukherjee</h3>
                    <p>Scientific Team</p>
                </div>
                <div class="division-card">
                    <h3>Dr. Abhijit Mandal</h3>
                    <p>Clinical / Molecular & Medical Device</p>
                </div>
                <div class="division-card">
                    <h3>Dr. Sudip Nag</h3>
                    <p>Scientific Team</p>
                </div>
            </div>

            <h3 style="color: var(--color-accent); border-bottom: 1px solid var(--color-border); padding-bottom: 10px; margin-bottom: 20px;">Sales and Marketing Team</h3>
            <div class="division-grid" style="margin-bottom: 60px;">
                <div class="division-card">
                    <h3>Mr. Rajnish Koiri</h3>
                    <p>North-East Region</p>
                </div>
                <div class="division-card">
                    <h3>Mr. Dipankar Das</h3>
                    <p>Andaman & Nicobar Island (UT)</p>
                </div>
                <div class="division-card">
                    <h3>Mr. Nabo Kumar Mandal</h3>
                    <p>East Region</p>
                </div>
                <div class="division-card">
                    <h3>Mr. Biswajit Basu Roy Choudhary</h3>
                    <p>Import & Export</p>
                </div>
            </div>
            
            <div class="section-header" style="margin-top: 80px;">
                <h2>Want to Know More?</h2>
                <a href="/contact-us.html" class="btn-primary">Get In Touch →</a>
            </div>
        </div>
    </section>
`;

const research_and_development = `
    <section class="page-hero" style="padding-top: 150px; background: linear-gradient(135deg, #0A1628, #0A2030); color: #fff;">
        <div class="section-header" style="max-width: 1000px; margin: 0 auto; padding: 0 5%;">
            <h1 style="color: #fff;">Where Science Becomes Solution.</h1>
            <p style="color: #ccc; font-size: 20px;">Every product IndiBiotek brings to market begins as a question asked in a laboratory. Our research programme spans biotechnology, diagnostics, agricultural science, and materials — conducted in partnership with two of India's leading research universities, and supported by BIRAC, the government's dedicated biotech innovation body.</p>
        </div>
    </section>

    <section class="bg-dynamic" style="background-color: var(--color-surface);">
        <div class="container" style="max-width: 1000px; margin: 0 auto; padding: 0 5%;">
            <h2>Technology</h2>
            <p>We work at the frontier of biotechnology — applying AI and machine learning to diagnostics, developing CRISPR/Cas-based detection tools, and engineering microfluidic devices that bring lab-quality testing to the point of care.</p>
            
            <h2 style="margin-top: 60px;">Diseases</h2>
            <p>Our disease research focuses on detection — developing tools that identify infections earlier, more accurately, and more affordably than what is currently available on the Indian market.</p>
            
            <h2 style="margin-top: 60px;">Where Our Research Happens</h2>
            <div class="division-grid">
                <div class="division-card">
                    <h3>SRM University</h3>
                    <p>Centre for Drug Design Discovery & Development (C4D)<br>SRM University, Delhi-NCR, Sonipat, Haryana</p>
                </div>
                <div class="division-card">
                    <h3>Adamas University</h3>
                    <p>E-YUVA Centre (Supported by BIRAC)<br>Adamas University, Kolkata, West Bengal</p>
                </div>
            </div>

            <h2 style="margin-top: 60px;">Research in Progress</h2>
            <p>IndiBiotek is currently developing an autonomous system for biomedical waste classification and segregation — an area of significant national importance as India's healthcare infrastructure grows. Further details will be published as the project progresses.</p>
            
            <div class="section-header" style="margin-top: 80px;">
                <h2>Interested in Research Collaboration?</h2>
                <a href="/contact-us.html" class="btn-primary">Contact Our Team →</a>
            </div>
        </div>
    </section>
`;

const lifesciences = `
    <section class="page-hero lifesciences-bg" style="padding-top: 150px; color: #fff;">
        <div class="section-header" style="max-width: 1000px; margin: 0 auto; padding: 0 5%;">
            <h1 style="color: #fff;">Diagnostics Built for India. By India.</h1>
            <p style="color: #ccc; font-size: 20px;">IndiBiotek's Lifesciences division is developing the next generation of diagnostic tools — portable, intelligent, and priced for the Indian market. From AI-powered point-of-care devices to a complete range of diagnostic kits and indigenous reagents, we are replacing imports with solutions that perform better and cost less.</p>
        </div>
    </section>

    <section class="bg-dynamic" style="background-color: var(--color-surface);">
        <div class="container" style="max-width: 1000px; margin: 0 auto; padding: 0 5%;">
            <h2>Our Products</h2>
            
            <div class="division-card" style="margin-bottom: 30px; border-top-color: #1A6FA8;">
                <h3>ASSURED Device</h3>
                <p>Our flagship innovation — ASSURED is an AI/ML-based portable diagnostics platform combining LAMP, microfluidics, and CRISPR/Cas technology for singlex and multiplex combo testing. Designed for human health, food safety, dairy, veterinary, poultry, livestock, and aquaculture applications.</p>
            </div>
            
            <div class="division-card" style="margin-bottom: 30px; border-top-color: #1A6FA8;">
                <h3>Diagnostic Kits</h3>
                <p>A complete portfolio across Clinical Biochemistry, Molecular Diagnostics, Rapid Test, ELISA, CLIA, and Point-of-Care formats.</p>
            </div>
            
            <div class="division-card" style="margin-bottom: 30px; border-top-color: #1A6FA8;">
                <h3>Reagents, Buffers & Chemicals</h3>
                <p>Indigenous in-house reagents, buffers, and chemicals for academic institutions, research companies, industrial labs, and research institutes. Quality-matched to international standards.</p>
            </div>
            
            <div class="section-header" style="margin-top: 80px;">
                <h2>Browse the Lifesciences Catalogue</h2>
                <a href="https://indibiotek-catalogues.replit.app/" target="_blank" class="btn-primary" style="background: #1A6FA8; color: white;">View Lifesciences Catalogue →</a>
            </div>

            <div class="section-header" style="margin-top: 80px;">
                <h2>Ready to Make an Inquiry?</h2>
                <p>Our team responds personally to every inquiry from purchase officers, clinic owners, and pathology labs.</p>
                <a href="/contact-us.html" class="btn-primary">Contact Us →</a>
            </div>
        </div>
    </section>
`;

const agri = `
    <section class="page-hero agri-bg" style="padding-top: 150px; color: #fff;">
        <div class="section-header" style="max-width: 1000px; margin: 0 auto; padding: 0 5%;">
            <h1 style="color: #fff;">Healthier Crops. Healthier Soil. Healthier India.</h1>
            <p style="color: #ccc; font-size: 20px;">IndiBiotek's Agri division brings biotechnology to Indian farms — offering a range of biological inputs that improve yields, protect crops, and restore soil health without the long-term damage of chemical alternatives. Whether you are a smallholder farmer or an agribusiness sourcing at scale, our products work with Indian soil, Indian climate, and Indian conditions.</p>
        </div>
    </section>

    <section class="bg-dynamic" style="background-color: var(--color-surface);">
        <div class="container" style="max-width: 1000px; margin: 0 auto; padding: 0 5%;">
            <h2>Our Products</h2>
            
            <div class="division-grid">
                <div class="division-card" style="border-top-color: #2D7A3A;">
                    <h3>Biofertilizers</h3>
                    <p>Natural, science-backed fertilizers that improve soil nutrition and crop yield without chemical dependency. Ideal for building long-term soil health and qualifying for organic certification.</p>
                </div>
                <div class="division-card" style="border-top-color: #2D7A3A;">
                    <h3>Bioinsecticides</h3>
                    <p>Targeted biological insect control — effective against crop pests without harming beneficial insects, soil organisms, or the farmer's health.</p>
                </div>
                <div class="division-card" style="border-top-color: #2D7A3A;">
                    <h3>Biopesticides</h3>
                    <p>Broad-spectrum pest management using biological agents. Safer for the environment, the farm, and the food chain.</p>
                </div>
                <div class="division-card" style="border-top-color: #2D7A3A;">
                    <h3>Biofungicides</h3>
                    <p>Protection against crop fungal infections using natural microbial agents — particularly effective in the humid conditions common across many Indian growing regions.</p>
                </div>
                <div class="division-card" style="border-top-color: #2D7A3A;">
                    <h3>Plant Growth Stimulators & PGR</h3>
                    <p>Naturally derived compounds that enhance root development, flowering, and fruiting — improving crop quality and yield at critical growth stages.</p>
                </div>
                <div class="division-card" style="border-top-color: #2D7A3A;">
                    <h3>Bioherbicides & Bio-Organics</h3>
                    <p>Biological weed control that reduces labour costs, alongside organic-based formulations that improve soil biology, water retention, and overall crop resilience.</p>
                </div>
            </div>
            
            <div class="section-header" style="margin-top: 80px;">
                <h2>Full Product Range in Our Agri Catalogue</h2>
                <a href="https://indibiotek-catalogues.replit.app/" target="_blank" class="btn-primary" style="background: #2D7A3A; color: white;">View Agri Catalogue →</a>
            </div>

            <div class="section-header" style="margin-top: 80px;">
                <h2>Talk to Our Agri Team</h2>
                <p>Our specialists can recommend the right bioinputs for your crop type, soil, and region.</p>
                <a href="/contact-us.html" class="btn-primary">Get In Touch →</a>
            </div>
        </div>
    </section>
`;

const scientific = `
    <section class="page-hero scientific-bg" style="padding-top: 150px; color: #fff;">
        <div class="section-header" style="max-width: 1000px; margin: 0 auto; padding: 0 5%;">
            <h1 style="color: #fff;">Precision Inputs for Indian Science.</h1>
            <p style="color: #ccc; font-size: 20px;">IndiBiotek's Scientific division serves the laboratories that drive Indian research — providing high-quality reagents, buffers, chemicals, and consumables that were previously available only through expensive international suppliers. Indigenous. Reliable. Competitively priced.</p>
        </div>
    </section>

    <section class="bg-dynamic" style="background-color: var(--color-surface);">
        <div class="container" style="max-width: 1000px; margin: 0 auto; padding: 0 5%;">
            <h2>Built for Every Kind of Lab</h2>
            <ul style="list-style-type: disc; margin-left: 20px; margin-bottom: 40px; color: var(--color-text-2);">
                <li>Academic institutions and universities</li>
                <li>Corporate and industrial R&D labs</li>
                <li>Hospital and diagnostic laboratories</li>
                <li>Government research institutes</li>
                <li>Quality control and testing facilities</li>
            </ul>

            <h2>What We Supply</h2>
            <div class="division-grid">
                <div class="division-card" style="border-top-color: #1A6A6A;">
                    <h3>Reagents & Buffers</h3>
                    <p>For molecular biology, biochemistry, and microbiology.</p>
                </div>
                <div class="division-card" style="border-top-color: #1A6A6A;">
                    <h3>Chemicals</h3>
                    <p>Analytical grade chemicals.</p>
                </div>
                <div class="division-card" style="border-top-color: #1A6A6A;">
                    <h3>Cell Culture</h3>
                    <p>Cell culture media and supplements.</p>
                </div>
                <div class="division-card" style="border-top-color: #1A6A6A;">
                    <h3>Lab Consumables & Instruments</h3>
                    <p>Tips, tubes, plates, filters and selected equipment range.</p>
                </div>
            </div>
            
            <div class="section-header" style="margin-top: 80px;">
                <h2>Browse the Scientific Catalogue</h2>
                <a href="https://indibiotek-catalogues.replit.app/" target="_blank" class="btn-primary" style="background: #1A6A6A; color: white;">View Scientific Catalogue →</a>
            </div>

            <div class="section-header" style="margin-top: 80px;">
                <h2>Need a Custom Quote?</h2>
                <p>Our team can prepare custom quotes for institutional or bulk orders.</p>
                <a href="/contact-us.html" class="btn-primary">Contact Us →</a>
            </div>
        </div>
    </section>
`;

const services = `
    <section class="page-hero bg-dynamic" style="padding-top: 150px; background-color: var(--color-bg);">
        <div class="section-header" style="max-width: 1000px; margin: 0 auto; padding: 0 5%;">
            <h1>Our Services</h1>
            <p style="font-size: 20px;">Solutions in Lifesciences, Biotechnology, Agriculture, Healthcare & Waste Management.</p>
        </div>
    </section>

    <section class="bg-dynamic" style="background-color: var(--color-surface);">
        <div class="container" style="max-width: 1000px; margin: 0 auto; padding: 0 5%;">
            <div class="division-grid" style="margin-bottom: 60px;">
                <div class="division-card">
                    <h3>Molecular & Genetic Services</h3>
                    <ul style="list-style-type: disc; margin-left: 20px; color: var(--color-text-2); font-size: 14px;">
                        <li>DNA/RNA Oligo Synthesis, DNA & RNA Purification, PCR Solutions</li>
                        <li>Gene Expression Analysis, Cloning & Subcloning, TA Cloning and Screening</li>
                        <li>Site-Directed Mutagenesis, Recombinant Protein Expression & Purification</li>
                    </ul>
                </div>
                <div class="division-card">
                    <h3>Omics & Bioinformatics</h3>
                    <ul style="list-style-type: disc; margin-left: 20px; color: var(--color-text-2); font-size: 14px;">
                        <li>Genomics & Epigenomics, Transcriptomics, Microbiome & Metagenomics</li>
                        <li>Proteomics & Metabolomics Integration Studies, Pharmacogenomics</li>
                        <li>Multi-Omics Integration, Bioinformatics & Data Analysis</li>
                    </ul>
                </div>
                <div class="division-card">
                    <h3>Custom Synthesis & Assays</h3>
                    <ul style="list-style-type: disc; margin-left: 20px; color: var(--color-text-2); font-size: 14px;">
                        <li>Gene & Peptide Synthesis</li>
                        <li>Custom Antibodies</li>
                        <li>Customised Reagents</li>
                        <li>Western Blot Analysis, Enzyme Kinetics</li>
                    </ul>
                </div>
                <div class="division-card">
                    <h3>Advanced Applications</h3>
                    <ul style="list-style-type: disc; margin-left: 20px; color: var(--color-text-2); font-size: 14px;">
                        <li>Oncology Genomics</li>
                        <li>CRISPR & Genome Editing Services</li>
                        <li>Agricultural & Environmental Omics</li>
                    </ul>
                </div>
            </div>

            <div class="section-header" style="margin-top: 80px;">
                <h2>Interested in Our Services?</h2>
                <a href="/contact-us.html" class="btn-primary">Contact Us →</a>
            </div>
        </div>
    </section>
`;

const contact_us = `
    <section class="page-hero bg-dynamic" style="padding-top: 150px; background-color: var(--color-bg);">
        <div class="section-header" style="max-width: 800px; margin: 0 auto; padding: 0 5%;">
            <h1>Let's Talk.</h1>
            <p style="font-size: 20px;">Whether you are a purchase officer, a researcher, an investor, or a grant body — we read every message and respond personally.</p>
        </div>
    </section>

    <section class="bg-dynamic" style="background-color: var(--color-surface);">
        <div class="container" style="max-width: 1000px; margin: 0 auto; padding: 0 5%; display: flex; flex-wrap: wrap; gap: 40px;">
            <div style="flex: 1; min-width: 300px;">
                <form action="https://formspree.io/f/xbjnrvqa" method="POST" id="contact-form" style="display: flex; flex-direction: column; gap: 20px;">
                    <div>
                        <label for="name" style="font-weight: 500; font-size: 14px; margin-bottom: 8px; display: block;">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required style="width: 100%; padding: 14px; border: 1.5px solid var(--color-border); border-radius: 8px; background: transparent; color: var(--color-text-1); outline: none;">
                    </div>
                    <div>
                        <label for="email" style="font-weight: 500; font-size: 14px; margin-bottom: 8px; display: block;">Your Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required style="width: 100%; padding: 14px; border: 1.5px solid var(--color-border); border-radius: 8px; background: transparent; color: var(--color-text-1); outline: none;">
                    </div>
                    <div>
                        <label for="query" style="font-weight: 500; font-size: 14px; margin-bottom: 8px; display: block;">Your Query</label>
                        <textarea id="query" name="query" placeholder="Your Query" required rows="5" style="width: 100%; padding: 14px; border: 1.5px solid var(--color-border); border-radius: 8px; background: transparent; color: var(--color-text-1); outline: none;"></textarea>
                    </div>
                    <button type="submit" class="btn-primary" style="align-self: flex-start;">Send Message →</button>
                </form>
            </div>
            <div style="flex: 1; min-width: 300px;">
                <div class="division-card" style="height: 100%;">
                    <h3 style="margin-bottom: 24px;">Contact Details</h3>
                    <p><strong>Registered Office:</strong><br>Kolkata, West Bengal, India</p>
                    <p><strong>Email:</strong><br><a href="mailto:info@indibiotek.com" style="color: var(--color-accent);">info@indibiotek.com</a></p>
                    <p><strong>Phone / WhatsApp:</strong><br><a href="tel:+918902052927" style="color: var(--color-accent);">+91 89020 52927</a></p>
                    
                    <hr style="border: none; border-top: 1px solid var(--color-border); margin: 24px 0;">
                    
                    <p><strong>Also present in:</strong><br>Bengaluru | Delhi-NCR | Guwahati | Andaman & Nicobar (UT)</p>
                    <p><strong>R&D Facilities:</strong><br>SRM University Delhi-NCR | Adamas University Kolkata (BIRAC Supported)</p>
                </div>
            </div>
        </div>
    </section>
`;

const privacy_policy = `
    <section class="page-hero bg-dynamic" style="padding-top: 150px; background-color: var(--color-bg);">
        <div class="section-header" style="max-width: 800px; margin: 0 auto; padding: 0 5%; text-align: left;">
            <h1>Privacy Policy</h1>
            <p>Last updated: May 2026</p>
        </div>
    </section>

    <section class="bg-dynamic" style="background-color: var(--color-bg); padding-top: 0;">
        <div class="container" style="max-width: 800px; margin: 0 auto; padding: 0 5%;">
            <p>This privacy policy describes how IndiBiotek Private Limited collects, uses, and protects any information that you give us when you use this website.</p>
            <p>IndiBiotek Private Limited is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy statement.</p>
            <p>We may collect the following information:</p>
            <ul style="list-style-type: disc; margin-left: 20px; margin-bottom: 24px; color: var(--color-text-2);">
                <li>Name and job title</li>
                <li>Contact information including email address and phone number</li>
                <li>Demographic information such as postcode, preferences and interests</li>
                <li>Other information relevant to customer surveys and/or offers</li>
            </ul>
            <p>We require this information to understand your needs and provide you with a better service, and in particular for internal record keeping and improving our products and services.</p>
            <p>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
            <p>If you have any questions about this privacy policy, please contact us at info@indibiotek.com.</p>
        </div>
    </section>
`;

const pages = [
    { filename: 'about-us.html', title: "About IndiBiotek | India's Pioneer Biotech Startup", metaDesc: 'IndiBiotek Private Limited — founded to bring indigenous biotech manufacturing to India.', content: about_us },
    { filename: 'research-and-development.html', title: "Research & Development | IndiBiotek Biotech Innovation", metaDesc: "IndiBiotek's R&D spans AI diagnostics, CRISPR, microfluidics, and agri-biotech.", content: research_and_development },
    { filename: 'lifesciences.html', title: 'Lifesciences Division | Diagnostics, Kits & Reagents | IndiBiotek', metaDesc: 'AI-based diagnostics, molecular kits, ELISA, CLIA, rapid tests, POC devices.', content: lifesciences },
    { filename: 'agri.html', title: 'Agri Division | Biofertilizers, Biopesticides & Bioinputs | IndiBiotek', metaDesc: "IndiBiotek's Agri division offers biofertilizers, bioinsecticides, biopesticides.", content: agri },
    { filename: 'scientific.html', title: 'Scientific Division | Reagents, Chemicals & Lab Consumables | IndiBiotek', metaDesc: "IndiBiotek's Scientific division supplies indigenous reagents, buffers, chemicals.", content: scientific },
    { filename: 'services.html', title: 'Services | IndiBiotek Private Limited', metaDesc: 'IndiBiotek offers research collaboration, diagnostic development, reagent customisation.', content: services },
    { filename: 'contact-us.html', title: 'Contact IndiBiotek | Get In Touch', metaDesc: 'Contact IndiBiotek Private Limited — Kolkata headquarters.', content: contact_us },
    { filename: 'privacy-policy.html', title: 'Privacy Policy | IndiBiotek Private Limited', metaDesc: 'Privacy Policy of IndiBiotek Private Limited.', content: privacy_policy }
];

pages.forEach(p => generatePage(p.filename, p.title, p.metaDesc, p.content));
