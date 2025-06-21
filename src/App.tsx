import React, { useState } from 'react';
import { Twitter, Linkedin, Instagram, ExternalLink, Menu, X } from 'lucide-react';

type Section = 'about' | 'callbot' | 'npcs' | 'wayless' | 'bernie';

interface Experience {
  title: string;
  company: string;
  time: string;
  description: string;
}

function App() {
  const [activeSection, setActiveSection] = useState<Section>('about');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const experiences: Experience[] = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc",
      time: "2022 - Present",
      description: "Leading development of scalable web applications using React and Node.js. Mentoring junior developers and driving technical architecture decisions."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Co",
      time: "2020 - 2022",
      description: "Built responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver user-centric solutions."
    },
    {
      title: "Frontend Developer",
      company: "Creative Studio",
      time: "2018 - 2020",
      description: "Developed interactive user interfaces for client projects. Specialized in modern JavaScript frameworks and pixel-perfect designs."
    },
    {
      title: "Software Engineering Intern",
      company: "StartupXYZ",
      time: "Summer 2018",
      description: "Contributed to open-source projects and assisted in building MVP features. Gained experience in agile development practices."
    }
  ];

  const handleNavClick = (section: Section) => {
    setActiveSection(section);
    setSidebarOpen(false);
  };

  const renderAboutMe = () => (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-light text-gray-900 mb-4">Prateek Sane</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Software engineer passionate about creating meaningful digital experiences. 
          I build applications that solve real problems and tell compelling stories through code.
        </p>
        
        <div className="flex space-x-6">
          <a href="https://twitter.com/prateeksane" target="_blank" rel="noopener noreferrer" 
             className="text-gray-500 hover:text-blue-500 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com/in/prateeksane" target="_blank" rel="noopener noreferrer"
             className="text-gray-500 hover:text-blue-700 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://instagram.com/prateeksane" target="_blank" rel="noopener noreferrer"
             className="text-gray-500 hover:text-pink-500 transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-gray-900">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500">{exp.time}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCallBot = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-light text-gray-900">Call Bot</h1>
      
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-medium text-gray-900">AI-Powered Call Assistant</h2>
          <a
            href="https://github.com/prateeksane/callbot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          An intelligent call management system that uses natural language processing to handle 
          customer inquiries, schedule appointments, and provide automated responses. Built with 
          modern AI technologies to streamline business communications.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Key Features</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Natural language understanding for customer queries</li>
              <li>• Automated appointment scheduling and calendar integration</li>
              <li>• Real-time call transcription and sentiment analysis</li>
              <li>• Multi-language support for global businesses</li>
              <li>• Integration with popular CRM systems</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'OpenAI API', 'FastAPI', 'React', 'PostgreSQL', 'Docker'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNPCs = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-light text-gray-900">NPCs</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
{`The coffee shop was unusually quiet for a Tuesday morning. Maya sat in her usual corner, laptop open, pretending to work on her novel while actually people-watching. She had developed an elaborate backstory for each regular customer—the businessman was secretly writing poetry, the barista was studying quantum physics, the elderly woman by the window was a retired spy.

Today, something was different. A new person sat at the center table, someone who didn't fit into any of her carefully constructed narratives. They moved with purpose but seemed to be waiting for something, checking their phone every few minutes with the kind of nervous energy that suggested an important meeting.

Maya found herself creating a story: this person was a game developer, meeting with investors about their revolutionary new project. They had spent years crafting non-player characters so realistic that players forgot they weren't human. The irony wasn't lost on Maya—here she was, treating real people like NPCs in her own mental game.

The stranger looked up suddenly, catching Maya's gaze. For a moment, their eyes met, and Maya realized she had been caught in her own game of observation. The stranger smiled, a knowing look that suggested they understood exactly what Maya had been doing.

"Interesting story you're writing there," they said, nodding toward Maya's blank document. "Sometimes the best characters are the ones sitting right in front of us."

Maya blinked, unsure if this was coincidence or if somehow, impossibly, this person had read her mind. In that moment, she wondered: in this coffee shop full of stories, who was the player, and who were the NPCs?`}
        </p>
      </div>
    </div>
  );

  const renderWayless = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-light text-gray-900">Wayless</h1>
      
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-medium text-gray-900">Minimalist Navigation App</h2>
          <a
            href="https://github.com/prateeksane/wayless"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          A deliberately simple navigation app that encourages exploration and mindful travel. 
          Instead of turn-by-turn directions, Wayless provides gentle guidance through cardinal 
          directions and landmarks, helping users develop better spatial awareness and connection 
          with their environment.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Philosophy</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              In a world of constant digital guidance, Wayless encourages users to look up from 
              their phones and engage with the world around them. The app provides just enough 
              information to keep you oriented while leaving room for discovery and serendipity.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Features</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Compass-based navigation with cardinal directions</li>
              <li>• Landmark-based waypoints instead of street names</li>
              <li>• Offline functionality for remote exploration</li>
              <li>• Journey logging and reflection tools</li>
              <li>• Community-shared interesting routes and discoveries</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Built With</h3>
            <div className="flex flex-wrap gap-2">
              {['React Native', 'MapBox SDK', 'Node.js', 'MongoDB', 'Express'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBernie = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-light text-gray-900">Bernie</h1>
      
      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
{`Bernie had been the night security guard at the Meridian Office Complex for seventeen years, and in all that time, he had never seen anything quite like this.

It started with the elevators. They would arrive at floors where no one had called them, doors opening to empty hallways as if expecting passengers who never came. Then the lights began their dance—fluorescents flickering in patterns that seemed almost like morse code, though Bernie had never learned to read it.

Tonight was different, though. Tonight, Bernie had decided to investigate.

Armed with nothing but his flashlight and a thermos of coffee that had gone cold hours ago, he made his way to the thirty-second floor, where most of the strange activity seemed to originate. The elevator hummed as it climbed, and Bernie found himself humming along—a tune he didn't recognize but somehow knew by heart.

The doors opened to reveal a hallway that looked exactly as it should: beige carpet, white walls, the familiar smell of industrial cleaning supplies. But something was off. The emergency exit sign at the far end was glowing brighter than usual, casting long shadows that seemed to move independently of their sources.

Bernie stepped out of the elevator, and immediately felt it—a presence, not malevolent, but curious. Watching. Waiting.

"Hello?" he called out, feeling slightly foolish. His voice echoed down the empty corridor.

That's when he heard it: the soft sound of typing, coming from one of the offices. But Bernie knew for certain that everyone had left hours ago. He had watched them go, one by one, as he did every night.

He approached the sound, his footsteps muffled by the carpet. The typing grew louder, more urgent, as if whoever was behind the keyboard was racing against time to finish something important.

Bernie reached the office door and peered through the glass. Inside, he could see the glow of a computer screen, but the chair was empty. The keyboard was moving on its own, keys depressing in rapid succession, words appearing on the screen faster than any human could type.

He tried the door handle. Locked, as expected. But as his hand touched the metal, the typing stopped. The screen went dark. And in the sudden silence, Bernie heard something that made his blood run cold: the soft ding of the elevator arriving at the thirty-second floor.

But Bernie hadn't called the elevator. And he was the only one in the building.

Wasn't he?`}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="w-64 min-h-screen bg-white border-r border-gray-200 fixed lg:relative hidden lg:block">
          <div className="p-6">
            <h1 className="text-xl font-medium text-gray-900 mb-8">Prateek Sane</h1>
            
            <nav className="space-y-2">
              <button
                onClick={() => handleNavClick('about')}
                className={`w-full text-left px-3 py-2 rounded transition-colors ${
                  activeSection === 'about'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                About Me
              </button>
              
              <button
                onClick={() => handleNavClick('callbot')}
                className={`w-full text-left px-3 py-2 rounded transition-colors ${
                  activeSection === 'callbot'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Call Bot
              </button>
              
              <button
                onClick={() => handleNavClick('npcs')}
                className={`w-full text-left px-3 py-2 rounded transition-colors ${
                  activeSection === 'npcs'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                NPCs
              </button>
              
              <button
                onClick={() => handleNavClick('wayless')}
                className={`w-full text-left px-3 py-2 rounded transition-colors ${
                  activeSection === 'wayless'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Wayless
              </button>
              
              <button
                onClick={() => handleNavClick('bernie')}
                className={`w-full text-left px-3 py-2 rounded transition-colors ${
                  activeSection === 'bernie'
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Bernie
              </button>
            </nav>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <div className="lg:hidden">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md border border-gray-200"
          >
            <Menu size={20} className="text-gray-600" />
          </button>

          {/* Mobile Sidebar Overlay */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-40 flex">
              <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setSidebarOpen(false)} />
              <aside className="relative w-64 bg-white border-r border-gray-200 shadow-lg">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <h1 className="text-xl font-medium text-gray-900">Prateek Sane</h1>
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  <nav className="space-y-2">
                    <button
                      onClick={() => handleNavClick('about')}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        activeSection === 'about'
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      About Me
                    </button>
                    
                    <button
                      onClick={() => handleNavClick('callbot')}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        activeSection === 'callbot'
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      Call Bot
                    </button>
                    
                    <button
                      onClick={() => handleNavClick('npcs')}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        activeSection === 'npcs'
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      NPCs
                    </button>
                    
                    <button
                      onClick={() => handleNavClick('wayless')}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        activeSection === 'wayless'
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      Wayless
                    </button>
                    
                    <button
                      onClick={() => handleNavClick('bernie')}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        activeSection === 'bernie'
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      Bernie
                    </button>
                  </nav>
                </div>
              </aside>
            </div>
          )}
        </div>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="p-6 lg:p-12 lg:pt-12 pt-16">
            {activeSection === 'about' && renderAboutMe()}
            {activeSection === 'callbot' && renderCallBot()}
            {activeSection === 'npcs' && renderNPCs()}
            {activeSection === 'wayless' && renderWayless()}
            {activeSection === 'bernie' && renderBernie()}
          </div>
        </main>
      </div>
    </div>
</div>
  );
}

export default App;