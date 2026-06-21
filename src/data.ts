import { ExperienceItem, ProjectItem, PublicationItem, EducationItem, AwardItem } from './types';

export const personalInfo = {
  name: "Zi Xuan Lim",
  pronouns: "she/her",
  title: "AI Engineer & Research Specialist",
  location: "Subang Jaya, Selangor, Malaysia",
  phone: "+6010-898 5595",
  email: "lzx040921@gmail.com",
  linkedin: "https://www.linkedin.com/in/z-l-660b66188/", // standard URL based on name and context
  github: "https://github.com/l1m120",
  orcid: "https://orcid.org/0009-0003-7356-3912", // standard ORCID or link
  objective: "Results-driven AI Engineer and Computer Science researcher specializing in Computer Vision and Vision-Language Models (VLMs), with a proven track record of optimizing architectures for high-speed real-time deployment. Adept at engineering end-to-end MLOps pipelines, managing Docker containerization, and building scalable backends with FastAPI. Seeking to leverage hands-on experience in model quantization and edge optimization to build and ship highly efficient, production-ready AI solutions, while looking forward to pioneering innovative, scalable solutions through a Direct PhD in Computing at Sunway University.",
  tagline: "Engineering AI: From Local Datasets to Edge Deployment"
};

export const skillsData = {
  deepLearning: ["PyTorch", "TensorFlow", "Scikit-learn", "YOLO", "Faster R-CNN", "DETR", "MobileNet"],
  computerVision: ["OpenCV", "MediaPipe", "Roboflow", "LabelMe", "Image Augmentation", "Model Evaluation"],
  multimodalAI: ["Vision-Language Models (VLMs)", "Qwen-VL", "Qwen-Image-Edit"],
  deploymentDevOps: ["FastAPI", "Gradio", "Streamlit", "Quantization", "Docker", "Conda", "Git/GitHub", "Linux/Ubuntu"],
  programmingDatabases: ["Python", "Java", "Scala", "SQL (Oracle/MySQL)", "MongoDB"],
  hardware: ["UAV Assembly", "Circuit Integration"]
};

export const industryExperience: ExperienceItem[] = [
  {
    id: "wise-ai",
    role: "AI Engineer Intern",
    organization: "WISE AI Malaysia Sdn. Bhd.",
    location: "Bandar Sunway, Selangor",
    duration: "January 2026 – April 2026",
    imagePath: "/wise-ai-internship.jpg",
    metrics: [
      { label: "DOMAIN FOCUS", value: "eKYC & Anti-Fraud" },
      { label: "VISION ARCHITECTURES", value: "MobileNet & YOLO" },
      { label: "MLOPS & VISUALIZATION", value: "FastAPI & Gradio" }
    ],
    bullets: [
      "Face Quality & Eye-Closure Classification: Developed and fine-tuned an advanced face quality assessment model, engineering a robust eye-closing classifier utilizing MobileNet and MediaPipe. Spearheaded the systematic evaluation of these models alongside Qwen-VL and YOLO architectures.",
      "Interactive Deployment & Visualization: Deployed the eye-state classification model using Gradio, creating an interactive, real-time visualization interface to effectively monitor and validate user eye-closure behaviors.",
      "AutoML & MLOps Infrastructure: Designed a FastAPI-based backend for automated data ingestion and model preprocessing workflows specifically tailored for facial image datasets. Managed environment containerization and GPU resource allocation within Linux ecosystems using Docker.",
      "Edge Optimization & High-Speed Deployment: Implemented Post-Training Quantization (PTQ) using FP16 and INT8 formats to optimize heavy face quality models for deployment via ONNX and OpenVINO, achieving a 40% gain in inference speed.",
      "Team Mentorship & eKYC Pipelines: Supervised and mentored an incoming intern, providing comprehensive training and direction on complex data annotation pipelines for ID fraud detection, face liveness, and eKYC systems."
    ]
  }
];

export const researchExperience: ExperienceItem[] = [
  {
    id: "humac",
    role: "Undergraduate Lab Assistant",
    organization: "Research Centre for Human-Machine Collaboration (HUMAC) | Sunway University",
    location: "Bandar Sunway, Selangor",
    duration: "June 2024 – January 2026",
    imagePath: "/HUMAC.jpeg",
    bullets: [
      "Academic Support: Assisted PhD candidate in research project integrating computer vision into UAVs for Malaysian flood rescue operations.",
      "UAV Integration: Designed and assembled a custom-built drone, including hardware setup, circuit integration, and flight software configuration to support data collection for research.",
      "Algorithm Benchmarking: Conducted comparative research on object detection architectures, including YOLO, Faster R-CNN, and Detection Transformers (DETR), to determine optimal accuracy-latency trade-offs for real-time UAV applications.",
      "Research Leadership & Publications: Co-led brainstorming, ideation, and task delegation for smart city traffic management research, resulting in a co-first authored publication in a Q2 journal (Journal of Electrical and Computer Engineering). Currently spearheading a second systematic review on flood response technologies targeting a Q1 journal (IEEE Access)."
    ]
  }
];

export const CVProjects: ProjectItem[] = [
  {
    id: "yolo-traffic",
    title: "Standalone and Open-Source Vehicle Detection Framework Using YOLO for Traffic Analysis",
    subtitle: "Bachelor's Degree Final Year / Capstone Project",
    duration: "April 2025 – January 2026",
    collaboration: "Malaysian Public Works Department (JKR)",
    bullets: [
      "Addressed critical gaps in Southeast Asian Intelligent Transportation Systems (ITS) caused by the lack of localized datasets and the failure of Western-centric models to generalize to local vehicle brands (e.g., Proton, Perodua) and tropical weather conditions.",
      "Fine-tuned and identified YOLO11s as the optimal architecture, achieving a mean Average Precision (mAP) of 0.774, an F1-score of 0.742, and a high-performance real-time inference speed of 666 FPS.",
      "Conducted in direct collaboration with the Malaysian Public Works Department (JKR) to establish a robust, open-source benchmark for future privacy-compliant ITS research in the region."
    ],
    technologies: ["YOLO11s", "PyTorch", "Intelligent Transportation Systems", "Local Datasets"]
  },
  {
    id: "my-vid-dataset",
    title: "MY-VID: An Open-Source Malaysian Vehicle Image Dataset",
    subtitle: "Research Project",
    duration: "December 2024 – December 2025",
    bullets: [
      "Developed the first open-source dataset of Malaysian road vehicles, addressing the lack of localized datasets for intelligent transportation academic research.",
      "Created 9,000 annotated images of Malaysian vehicles under diverse conditions, applying the dataset in traffic management and road safety applications including vehicle detection, congestion prediction, and accident analysis in Malaysia."
    ],
    technologies: ["Dataset Curation", "Annotation", "Traffic Management", "Road Safety"],
    links: {
      zenodo: "https://doi.org/10.5281/zenodo.16866508"
    }
  }
];

export const independentProjects: ProjectItem[] = [
  {
    id: "xuans-cozy-corner",
    title: "Xuan's Cozy Corner (Media Tracker)",
    subtitle: "Independent Engineering Project - Bilingual Media Tracker",
    duration: "Ongoing",
    bullets: [
      "Designed and built a bilingual web application using React/Next.js to track and review personal books, movies, and dramas in English and Mandarin.",
      "Engineered complex API integrations with third-party aggregators (TMDB, OMDb, Google Books) along with a bespoke live-search mechanism inspired by Douban's database.",
      "Deployed the service seamlessly on Google Cloud Run, utilizing Supabase for secure multi-device, real-time cloud synchronization."
    ],
    technologies: ["React", "Next.js", "Supabase", "Cloud Run", "TMDB API", "OMDb API", "Google Books API"]
  },
  {
    id: "homestay-yong-peng",
    title: "88 Homestay Yong Peng Commercial Platform",
    subtitle: "Independent Business Digitization - Small Business Hub",
    duration: "Completed",
    bullets: [
      "Designed, developed, and deployed a highly responsive, three-page commercial website to digitize the operations of her family's homestay business in Johor, Malaysia.",
      "Localized the site's copy entirely across three major languages (English, Mandarin, and Malay) to expand target market accessibility.",
      "Implemented beautiful interactive UI carousels, a real-time availability calendar, and integrated a robust, serverless custom email booking form hosted on GitHub Pages."
    ],
    technologies: ["HTML5/CSS3", "JavaScript", "Multilingual Localization", "Form-as-a-Service", "GitHub Pages"]
  }
];

export const publications: PublicationItem[] = [
  {
    id: "pub-drone-traffic",
    title: "Recent Advancements, Challenges, and Future Directions of Integrating Drones in Smart City Traffic Management: A Systematic Review",
    authors: "Teoh, J., Lim, Z. X. (Co-first authors), Chan, Y. H., Kabir, A. S., Yap, K. M.",
    journalOrConference: "Journal of Electrical and Computer Engineering, 2026, 7869329, 26 pages",
    type: "journal",
    year: "2026",
    doi: "10.1155/jece/7869329",
    doiUrl: "https://doi.org/10.1155/jece/7869329",
    pdfPath: "/primary-manuscript.pdf"
  },
  {
    id: "pub-flood-malaysia",
    title: "A Systematic Review on Flood Response in Malaysia: Technical Advancements, Challenges and Opportunities",
    authors: "Teoh, J., Lim, Z. X., Zulkoffli, Z. B., Chua, H. S., Lee, Y. L., and Yap, K. M.",
    journalOrConference: "Targeting IEEE Access",
    type: "journal",
    status: "In Preparation",
    year: "2026",
    pdfPath: "/iwait-abstract.pdf" // Using a placeholder PDF or abstraction
  },
  {
    id: "pub-wren-2025",
    title: "Advancing Smart Traffic Infrastructure with AI-based Vehicle Detection Across Computing Configurations",
    authors: "Lim, Z. X., Teoh, J. and Yap K. M.",
    journalOrConference: "Women Research Engineers Network (WREN) Symposium 2025, University of Wollongong (UoW), Australia",
    type: "conference",
    status: "Best Presentation Award",
    year: "2025",
    pdfPath: "/wren-manuscript.pdf",
    websiteUrl: "https://thewren.global/event/wren-symposium-2025/"
  },
  {
    id: "pub-iwait-2026",
    title: "MY-VID: An Open-Source Malaysian Vehicle Image Dataset for Intelligent Transportation System and Road Safety",
    authors: "Lim, Z. X., Teoh, J. and Yap K. M.",
    journalOrConference: "International Workshop on Advanced Image Technology (IWAIT) 2026",
    type: "conference",
    status: "Extended Abstract Accepted",
    year: "2026",
    pdfPath: "/iwait-abstract.pdf"
  },
  {
    id: "pub-zenodo-dataset",
    title: "MY-VID: An Open-Source Malaysian Vehicle Image Dataset for Intelligent Transportation System and Road Safety",
    authors: "Lim, Z. X., Teoh, J. and Yap K. M.",
    journalOrConference: "Zenodo Dataset Repository",
    type: "dataset",
    year: "2025",
    doi: "10.5281/zenodo.16866508",
    doiUrl: "https://doi.org/10.5281/zenodo.16866508",
    pdfPath: "/iwait-abstract.pdf" // Placeholder document download
  }
];

export const educationHistory: EducationItem[] = [
  {
    id: "edu-degree",
    institution: "Sunway University",
    location: "Bandar Sunway, Selangor, Malaysia",
    degree: "Bachelor of Science (Honours) in Computer Science",
    duration: "April 2023 - April 2026",
    cgpa: "3.98/4.00",
    coursework: ["Machine Learning", "Computer Vision", "Data Mining", "Predictive Modeling", "Model Evaluation"],
    honor: "Jeffrey Cheah Foundation (JCF) Scholarship (100% Tuition Fee Waiver for outstanding academic performance)",
    imagePath: "/jcf-ceremony.jpg"
  },
  {
    id: "edu-fist",
    institution: "Sunway College Kuala Lumpur",
    location: "Bandar Sunway, Selangor, Malaysia",
    degree: "Foundation in Science and Technology (FIST)",
    duration: "April 2022 - March 2023",
    cgpa: "4.00/4.00",
    coursework: ["Computer Science Track", "Algorithmic Foundations", "Technical Sciences"],
    honor: "Awarded Sunway University President’s Award to the highest scoring student",
    imagePath: "/foundation-cert.jpg"
  },
  {
    id: "edu-spm",
    institution: "Sekolah Menengah Kebangsaan Yong Peng",
    location: "Batu Pahat, Johor, Malaysia",
    degree: "Sijil Pelajaran Malaysia (SPM)",
    duration: "January 2017 - March 2022",
    cgpa: "10As (5A+, 2A, 3A-)",
    coursework: ["Computer Science", "Advanced Mathematics", "Physics", "Mathematics", "Chemistry"],
    honor: "Top Achiever Award for high academic standing among SPM 2021 cohort",
    imagePath: "/SPM cert.png"
  }
];

export const honorsAwards: AwardItem[] = [
  {
    id: "award-wren",
    title: "Best Presentation Award",
    event: "Women Research Engineers Network (WREN) Symposium 2025",
    issuer: "University of Wollongong (UoW), Australia",
    year: "2025",
    description: "Awarded for outstanding research presentation on 'Advancing Smart Traffic Infrastructure with AI-based Vehicle Detection Across Computing Configurations'. An exclusive one-on-one career development session with Dr. Shelda Debowski was conducted as recognition of the award. Dr. Debowski is a renowned expert in academic career development, leadership, and research strategy, and she offers valuable insights to help researchers effectively navigate their career pathways.",
    images: [
      { path: "/WREN cert.png", label: "Official Certificate" },
      { path: "/WREN preface.png", label: "Winner Announcement" }
    ]
  },
  {
    id: "award-jkr-collaboration",
    title: "National ITS Infrastructure Collaboration",
    event: "Bachelor's Degree Capstone Project Research Collaboration",
    issuer: "Malaysian Public Works Department (JKR) & Sunway University",
    year: "2025",
    description: "Conducted an official research visit with thesis supervisor Prof. Yap Kian Meng to the Malaysian Public Works Department (JKR). Fostered a productive strategic collaboration aimed at enhancing Malaysia's Intelligent Transportation System (ITS) infrastructure, local AI-based vehicle tracking benchmarks, and future deployment roadmaps.",
    images: [
      { path: "/JKR pic.jpeg", label: "Research Visitation & Group Photo" },
      { path: "/JKR present.png", label: "ITS Roadmap Presentation" }
    ]
  },
  {
    id: "award-jcf-scholarship",
    title: "Jeffrey Cheah Foundation (JCF) Scholarship",
    event: "Scholarship Award Ceremony 2023",
    issuer: "Jeffrey Cheah Foundation (JCF)",
    year: "2023",
    description: "Awarded the highly prestigious, fully-funded Jeffrey Cheah Foundation Scholarship (100% Tuition Fee Waiver) for pursuing a Bachelor of Science (Honours) in Computer Science at Sunway University. Selected based on outstanding academic excellence, leadership caliber, and potential to drive innovative technological advancements.",
    images: [
      { path: "/JCF ind.jpeg", label: "Jeffrey Cheah Scholarship Presentation" },
      { path: "/JCF grp.jpg", label: "Jeffrey Cheah Scholarship Presentation" }
    ]
  }
];
