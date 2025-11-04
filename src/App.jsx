import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight,
  Download
} from 'lucide-react';
import riverpodImg from './assets/riverpod.jpg';
import objectDetectionImg from './assets/object_detection.png';
import consensusImg from './assets/consensus.png';
import microservicesImg from './assets/microservices.png';
import PortfolioChatbot from './PortfolioChatbot';

const MosesBloggingSite = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      
      const sections = ['home', 'writing', 'publications'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "State Management in Flutter: Riverpod vs BLoC vs Provider",
      excerpt: "A comprehensive guide on building Responsive Flutter Applications with secure and memory efficient architecture.",
      category: "Flutter",
      date: "2025-01-15",
      image: riverpodImg,
      link: "https://medium.com/@mosesmanek7/state-management-in-flutter-riverpod-vs-bloc-vs-provider-47e9c568da58"
    },
    {
      id: 2,
      title: "3D Object Detection with YOLOv8: Concepts, Integration & Implementation",
      excerpt: "Exploring 3D Object Detection and its application in fields like Autonomous Vehicles.",
      category: "AI",
      date: "2025-01-10",
      image: objectDetectionImg,
      link: "https://medium.com/@mosesmanek7/3d-object-detection-with-yolov8-concepts-integration-implementation-bcc9da860d3a"
    },
    {
      id: 3,
      title: "Consensus Algorithms in Blockchain: A Developer-Focused Guide",
      excerpt: "Deep dive into Blockchain consensus mechanisms and their impact on the crypto ecosystem.",
      category: "Blockchain",
      date: "2025-01-05",
      image: consensusImg,
      link: "https://dev.to/mosesmmoisebidth/consensus-algorithms-in-blockchain-a-developer-focused-guide-65f"
    },
    {
      id: 4,
      title: "Spring Boot + Kafka vs RabbitMQ: Event-Driven Microservices",
      excerpt: "Building efficient, secure and scalable backend applications with microservices architecture.",
      category: "Java",
      date: "2024-12-28",
      image: microservicesImg,
      link: "https://dev.to/mosesmmoisebidth/spring-boot-kafka-vs-rabbitmq-a-deep-dive-into-event-driven-microservices-6gd"
    }
  ];

  const publications = [
    {
      id: 1,
      title: "Advancing Web Development - Enhancing Component-Based Software Engineering through HTML5",
      journal: "ResearchGate",
      date: "2024-11",
      abstract: "This paper explores contemporary web development patterns and their impact on application scalability through component-based architecture.",
      pdfUrl: "https://www.researchgate.net/publication/377564087_Advancing_Web_Development_-_Enhancing_Component-Based_Software_Engineering_and_Design_Systems_through_HTML5_Customized_Built-in_Elements"
    },
    {
      id: 2,
      title: "AI-Driven Code Generation: Opportunities and Challenges",
      journal: "ACM Computing Conference",
      date: "2024-09",
      abstract: "An analysis of AI-powered development tools and their implications for modern software engineering practices and productivity.",
      pdfUrl: "https://pure.tudelft.nl/ws/portalfiles/portal/185997435/3626252.3630958.pdf"
    },
    {
      id: 3,
      title: "Microservices Architecture in Practice: Lessons Learned",
      journal: "Semantic Scholar",
      date: "2024-06",
      abstract: "A comprehensive review of microservices implementation patterns based on real-world case studies and production deployments.",
      pdfUrl: "https://pdfs.semanticscholar.org/4394/917b1beebe0bde631319b73e0f988f136003.pdf"
    }
  ];

  const categories = ['all', 'Flutter', 'AI', 'Blockchain', 'Java'];

  const filteredBlogs = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(blog => blog.category === selectedCategory);

  return (
    <div className="bg-black text-white min-h-screen font-light">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center py-8">
            <div className="text-xl tracking-wider font-light">
              <span className="text-white">BLOG</span>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <button onClick={() => scrollToSection('home')} className={`text-xs tracking-widest uppercase transition-colors duration-300 ${activeSection === 'home' ? 'text-white' : 'text-white/40 hover:text-white'}`}>
                Home
              </button>
              <button onClick={() => scrollToSection('writing')} className={`text-xs tracking-widest uppercase transition-colors duration-300 ${activeSection === 'writing' ? 'text-white' : 'text-white/40 hover:text-white'}`}>
                Writing
              </button>
              <button onClick={() => scrollToSection('publications')} className={`text-xs tracking-widest uppercase transition-colors duration-300 ${activeSection === 'publications' ? 'text-white' : 'text-white/40 hover:text-white'}`}>
                Publications
              </button>
              <a href="https://moses.it.com" className="text-xs tracking-widest uppercase border border-white/20 hover:border-white/40 px-6 py-3 transition-all duration-300">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-32 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h1 className="text-7xl md:text-9xl font-extralight mb-8 tracking-tight">
              Thoughts &<br/>Ideas
            </h1>
            <div className="w-24 h-px bg-white/20 mb-12"></div>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              Writing about software engineering, artificial intelligence, and the intersection of technology and design.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-12 pb-20 border-b border-white/5">
            <div>
              <div className="text-5xl font-extralight mb-3">{blogPosts.length}</div>
              <div className="text-xs tracking-widest uppercase text-white/40">Articles</div>
            </div>
            <div>
              <div className="text-5xl font-extralight mb-3">{publications.length}</div>
              <div className="text-xs tracking-widest uppercase text-white/40">Publications</div>
            </div>
            <div>
              <div className="text-5xl font-extralight mb-3">4</div>
              <div className="text-xs tracking-widest uppercase text-white/40">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-28 bg-black/95 backdrop-blur-sm z-40 border-b border-white/5 px-8 lg:px-16 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/60'
                }`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-32 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-extralight mb-4 tracking-tight">Recent Writing</h2>
            <div className="w-16 h-px bg-white/20"></div>
          </div>

          <div className="space-y-20">
            {filteredBlogs.map((post, index) => (
              <article
                key={post.id}
                className="border-b border-white/5 pb-20 group cursor-pointer"
                onClick={() => window.open(post.link, '_blank')}
              >
                <div className="grid lg:grid-cols-12 gap-12">
                  {/* Left: Image */}
                  <div className="lg:col-span-5">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs tracking-widest uppercase text-white/40">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="h-px flex-1 bg-white/10"></div>
                        <span className="text-xs tracking-wider uppercase text-white/40">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-light mb-6 leading-tight group-hover:text-white/80 transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-lg text-white/60 leading-relaxed mb-8">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs tracking-wider uppercase text-white/40">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <div className="flex items-center gap-2 text-sm tracking-wider uppercase text-white/60 group-hover:text-white transition-colors">
                        Read Article
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-32 px-8 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-extralight mb-4 tracking-tight">Research</h2>
            <div className="w-16 h-px bg-white/20"></div>
          </div>

          <div className="space-y-16">
            {publications.map((pub, index) => (
              <article
                key={pub.id}
                className="border-l border-white/10 pl-12 group"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs tracking-widest uppercase text-white/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-white/10"></div>
                    <span className="text-xs tracking-wider uppercase text-white/40">
                      {pub.date}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-light mb-4 leading-tight">
                    {pub.title}
                  </h3>

                  <p className="text-sm tracking-wider uppercase text-white/40 mb-6">
                    {pub.journal}
                  </p>

                  <p className="text-base text-white/60 leading-relaxed mb-8 max-w-3xl">
                    {pub.abstract}
                  </p>
                </div>

                <a
                  href={pub.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm tracking-wider uppercase border border-white/20 hover:border-white/40 px-6 py-3 transition-all duration-300"
                >
                  <Download size={14} />
                  Download PDF
                  <ArrowUpRight size={14} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 px-8 lg:px-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight">
            Stay Updated
          </h2>
          <div className="w-16 h-px bg-white/20 mx-auto mb-12"></div>
          
          <p className="text-lg text-white/60 leading-relaxed mb-12">
            Subscribe to receive updates on new articles and publications. No spam, just quality content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-6 py-4 bg-transparent border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-all duration-300"
            />
            <button className="border border-white/20 hover:border-white/40 px-8 py-4 text-sm tracking-wider uppercase transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-white/40 tracking-widest uppercase">
              © 2025 Moses Mucyo
            </div>
            <div className="flex gap-8 text-xs tracking-widest uppercase">
              <a href="https://moses.it.com" className="text-white/40 hover:text-white transition-colors duration-300">
                Portfolio
              </a>
              <a href="https://github.com/mosesmmoisebidth" className="text-white/40 hover:text-white transition-colors duration-300">
                GitHub
              </a>
              <a href="https://linkedin.com/in/mosesmucyo" className="text-white/40 hover:text-white transition-colors duration-300">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 2px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>
      <PortfolioChatbot />
    </div>
  );
};

export default MosesBloggingSite;