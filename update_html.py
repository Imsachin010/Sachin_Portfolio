import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace <head> to body start
head_new = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./modern.css">
    <title>Sachin Mishra | Portfolio</title>
</head>
<body>
    <div class="background-glow"></div>
"""
text = re.sub(r'<html.*?>.*?<body.*?>', head_new, text, flags=re.DOTALL | re.IGNORECASE)
text = text.replace('<!-- <!DOCTYPE html> -->\n', '')

# Extract body contents basically from original if we must, but we can do string replace.
# Just rewrite index.html directly by reading the full text, extracting data, and writing a new template.
import os

html_template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./modern.css">
    <title>Sachin Mishra | Portfolio</title>
</head>
<body>
    <div class="background-glow"></div>

    <header class="site-header">
        <div class="container nav-wrap">
            <a href="#homepage" class="brand">
                <span class="brand-badge">SM</span>
                <span class="brand-text">SACHIN MISHRA</span>
            </a>
            <nav class="desktop-nav">
                <a href="#homepage">Home</a>
                <a href="#about">About</a>
                <a href="#publications">Publications</a>
                <a href="#works">Works</a>
                <a href="#contact">Contact</a>
            </nav>
            <a href="./resume/Sachin_MSR.pdf" download class="resume-btn">Resume</a>
            <button id="menuToggle" class="menu-toggle" aria-label="Toggle menu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </header>

    <nav id="mobileMenu" class="mobile-nav">
        <a href="#homepage">Home</a>
        <a href="#about">About</a>
        <a href="#publications">Publications</a>
        <a href="#works">Works</a>
        <a href="#contact">Contact</a>
        <a href="./resume/Sachin_MSR.pdf" download style="color: #2dd4bf; text-decoration: underline;">Download Resume</a>
    </nav>

    <main>
        <!-- Home / Hero -->
        <section id="homepage" class="container section hero reveal">
            <div class="hero-content">
                <p class="eyebrow">Research Scholar</p>
                <h1><span class="accent">AI, Gen Models</span> &amp; Optimization</h1>
                <p class="hero-text" id="typewriter">optimization insight</p>
                <div class="hero-actions">
                    <a href="#works" class="btn btn-primary">View My Work</a>
                    <a href="#contact" class="btn btn-ghost">Contact Me</a>
                </div>
                <ul class="social-list">
                    <li><a href="https://github.com/Imsachin010" target="_blank">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/sachinmishra010" target="_blank">LinkedIn</a></li>
                </ul>
            </div>
            <div class="hero-media">
                <img src="./img/man.jpg" alt="Profile Image">
            </div>
        </section>

        <!-- About Me -->
        <section id="about" class="container section reveal">
            <div class="section-title-wrap">
                <p class="eyebrow">Discover</p>
                <h2>About Me</h2>
            </div>
            <p class="section-intro">
                I am an MS by Research student in Artificial Intelligence and Data Science with a strong foundation in applied machine learning and deep learning. My work focuses on understanding models beyond surface-level performance, emphasizing objective design, optimization behavior, and evaluation of model reliability.
            </p>
            <p class="section-intro" style="margin-top: 1rem;">
                I have hands-on experience with vision models and ML systems, and a solid theoretical grounding in generative modeling, including loss formulations, KL-divergence, and ELBO-based objectives. I am particularly interested in how optimization principles influence generalization, robustness, and reasoning in modern learning systems, and I aim to transition this understanding toward multimodal and language-based models.
            </p>
            
            <div class="timeline">
                <div class="timeline-item">
                    <span>Jul 2025 - Present</span>
                    <h3>Research Scholar</h3>
                    <p>International Institute of Information Technology Bangalore</p>
                </div>
                <div class="timeline-item">
                    <span>Feb 2025 - May 2025</span>
                    <h3>Machine Learning Intern</h3>
                    <p>BigMint</p>
                </div>
                <div class="timeline-item">
                    <span>Aug 2023 - Nov 2023</span>
                    <h3>Research Intern</h3>
                    <p>IIIT-Naya Raipur</p>
                </div>
                <div class="timeline-item">
                    <span>May 2023 - Jul 2023</span>
                    <h3>Machine Learning Intern</h3>
                    <p>IIIT-Naya Raipur</p>
                </div>
            </div>
        </section>

        <!-- Publications -->
        <section id="publications" class="container section reveal">
            <div class="section-title-wrap">
                <p class="eyebrow">Research</p>
                <h2>Publications</h2>
            </div>
            <div class="cards-grid publication-grid">
                
                <article class="card">
                    <div class="meta">2025 - Conference Paper</div>
                    <h3>Dynamic Query Handling with RAG Fusion for PDF-Based Knowledge Retrieval</h3>
                    <p>This study explores advancements in Retrieval Augmented Generation (RAG) systems tailored for PDF-based QA featuring RAG fusion...</p>
                    <a href="https://ieeexplore.ieee.org/abstract/document/11070378" target="_blank">Read Paper &rarr;</a>
                </article>

                <article class="card">
                    <div class="meta">2025 - Conference Paper</div>
                    <h3>TransDFD: A Deepfake Detection System of Mesoscopic Level</h3>
                    <p>Introduces TransDFD, a novel deepfake detection system developed at the mesoscopic level using MesoNet-4 architecture...</p>
                    <a href="https://ieeexplore.ieee.org/abstract/document/10984648" target="_blank">Read Paper &rarr;</a>
                </article>

                <article class="card">
                    <div class="meta">2025 - Conference Paper</div>
                    <h3>Automated Detection and Classification of Medicinal Plant Leaf Diseases using CNNs</h3>
                    <p>A novel, fully automated system for detecting diseases in medicinal plant leaves using deep learning to classify with high accuracy...</p>
                    <a href="https://ieeexplore.ieee.org/abstract/document/10956946" target="_blank">Read Paper &rarr;</a>
                </article>
                
                <article class="card">
                    <div class="meta">2024 - Journal Article</div>
                    <h3>IoT-ML Driven Holistic Health Monitoring and Fitness Assessment</h3>
                    <p>A novel solution featuring an IoT-ML enabled platform for self-monitoring of health vitals and predicting fitness scores...</p>
                    <a href="https://ieeexplore.ieee.org/abstract/document/10652387" target="_blank">Read Paper &rarr;</a>
                </article>

                <article class="card">
                    <div class="meta">2023 - Book Chapter</div>
                    <h3>UDR Fused Multimodal Approach for Disease Classification in Large-Scale Datasets</h3>
                    <p>A holistic strategy for breast cancer multi-class disease classification employing advanced deep learning architectures...</p>
                    <a href="https://link.springer.com/chapter/10.1007/978-3-031-66410-6_25" target="_blank">Read Paper &rarr;</a>
                </article>

            </div>
        </section>

        <!-- Works -->
        <section id="works" class="container section reveal">
            <div class="section-title-wrap">
                <p class="eyebrow">Portfolio</p>
                <h2>Works and Projects</h2>
                <p class="section-intro">Here are a few projects developed by me, focusing on contextual and functional design.</p>
            </div>
            
            <div class="cards-grid">
                
                <div class="card project-card">
                    <img src="./img/fintech.PNG" alt="Finance Tracker">
                    <h3>Finance Tracker</h3>
                    <p>Track your finances and expenses efficiently.</p>
                    <a href="https://finance-tracker-neon-delta.vercel.app/" target="_blank">View Project &rarr;</a>
                </div>
                
                <div class="card project-card">
                    <img src="./img/icon.png" alt="Annacode">
                    <h3>Annacode</h3>
                    <p>Programming learning platform.</p>
                    <a href="https://anna-code.vercel.app/" target="_blank">View Project &rarr;</a>
                </div>
                
                <div class="card project-card">
                    <img src="./img/back.jpg" alt="Deep Guard AI">
                    <h3>Deep Guard AI</h3>
                    <p>AI-powered security & threat detection.</p>
                    <a href="https://github.com/Imsachin010/Trans_DFD" target="_blank">View Project &rarr;</a>
                </div>
                
                <div class="card project-card">
                    <img src="./img/logo.png" alt="GECR NSS">
                    <h3>GECR NSS Website</h3>
                    <p>GEC Raipur NSS community portal.</p>
                    <a href="https://gecrnss.github.io/NSS/" target="_blank">View Project &rarr;</a>
                </div>

                <div class="card project-card">
                    <img src="./img/icon.png" alt="StartupConnekt">
                    <h3>StartupConnekt</h3>
                    <p>Startup networking & collaboration platform.</p>
                    <a href="https://startup-connekt-fe.vercel.app/" target="_blank">View Project &rarr;</a>
                </div>

                <div class="card project-card">
                    <img src="./img/icon.png" alt="Health Monitoring">
                    <h3>ML Health Monitoring App</h3>
                    <p>Smart health tracking with machine learning.</p>
                    <a href="https://github.com/Imsachin010/Smart-Health-Tracking-App" target="_blank">View Project &rarr;</a>
                </div>

            </div>
        </section>

        <!-- Contact -->
        <section id="contact" class="container section reveal">
            <div class="section-title-wrap">
                <p class="eyebrow">Connect</p>
                <h2>Let's Talk</h2>
            </div>
            
            <div class="contact-wrap">
                <div class="contact-info">
                    <p>I typically respond within 24-48 hours. Looking forward to connecting with you!</p>
                    <div style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
                        <a href="mailto:Sachin.Mishra@iiitb.ac.in">Sachin.Mishra@iiitb.ac.in</a>
                        <a href="mailto:007mishrasachinmishra@gmail.com">007mishrasachinmishra@gmail.com</a>
                    </div>
                </div>
                
                <form class="contact-form" action="https://formspree.io/f/mqazkzzk" method="POST">
                    <label>
                        Your Name
                        <input type="text" name="name" required placeholder="John Doe">
                    </label>
                    <label>
                        Email Address
                        <input type="email" name="email" required placeholder="john@example.com">
                    </label>
                    <label>
                        Message
                        <textarea name="message" rows="4" required placeholder="Hello..."></textarea>
                    </label>
                    <button type="submit" class="btn btn-primary" style="margin-top: 1rem; width: 100%;">Send Message</button>
                </form>
            </div>
        </section>
    </main>

    <footer class="container site-footer">
        <div class="footer-wrap">
            <div class="footer-left">
                <span class="brand-badge" style="display:inline-flex; width: 20px; height: 20px; font-size: 0.6rem;">SM</span> 
                <span style="font-weight:700; color: #fff; margin-left: 0.5rem;">Sachin Mishra</span> &copy; <span id="currentYear"></span>
            </div>
            <div class="footer-right">
                <a href="https://github.com/Imsachin010" target="_blank">GitHub</a> &bull;
                <a href="https://www.linkedin.com/in/sachinmishra010" target="_blank">LinkedIn</a> &bull;
                <a href="https://scholar.google.com/citations?user=acsumE0AAAAJ&hl=en" target="_blank">Google Scholar</a>
            </div>
        </div>
    </footer>

    <script src="./modern.js"></script>
</body>
</html>
"""

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_template)
