import { useState, useEffect, useRef, type ReactNode } from 'react';
import { Link } from 'react-router';
import gcLogo from '../../assets/react.svg';
import newLogo from '../../imports/Screenshot_2026-05-07_at_5.04.27_PM.png';
import { Footer } from './Footer';
import { MaterialIcon } from './MaterialIcon';

// ── Nimbus Design System Tokens (inline constants) ────────────────────────────
const N = {
  textPrimary:   '#202124',
  textSecondary: '#5F6368',
  textDisabled:  '#9AA0A6',
  primary:       '#1A73E8',
  primaryHover:  '#1666CC',
  primaryActive: '#0F4FA8',
  error:         '#D93025',
  success:       '#1E8E3E',
  warning:       '#F9AB00',
  info:          '#0288D1',
  surface:       '#FFFFFF',
  surfaceSubtle: '#F8F9FA',
  border:        '#E0E3E7',
  shadowSm:      '0 1px 2px rgba(0,0,0,0.06)',
  shadowMd:      '0 2px 4px rgba(0,0,0,0.08)',
  shadowLg:      '0 4px 12px rgba(0,0,0,0.10)',
  motionFast:    '120ms ease-out',
  motionMedium:  '180ms ease',
  motionSlow:    '240ms ease-in-out',
};

const recentTabs = [
  { label: 'Vertex AI documentation overview', icon: gcLogo },
  { label: 'Gemini API in Vertex AI',          icon: gcLogo },
  { label: 'IAM roles for Vertex AI',          icon: gcLogo },
];

export function MainContent() {
  const [searchValue,    setSearchValue]    = useState('');
  const [showDropdown,   setShowDropdown]   = useState(false);
  const [showPlusMenu,   setShowPlusMenu]   = useState(false);
  const [showBottomSearch, setShowBottomSearch] = useState(false);
  const [selectedModel,  setSelectedModel]  = useState<'Auto' | 'Pro' | 'Flash'>('Auto');
  const mainRef = useRef<HTMLElement>(null);
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const plusMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    const target = searchBoxRef.current;
    if (!root || !target) return;

    const observer = new IntersectionObserver(([entry]) => {
      const rootTop = entry.rootBounds?.top ?? 0;
      setShowBottomSearch(!entry.isIntersecting && entry.boundingClientRect.bottom < rootTop);
    }, { root, threshold: 0 });

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (plusMenuRef.current && !plusMenuRef.current.contains(e.target as Node)) {
        setShowPlusMenu(false);
      }
    }
    if (showPlusMenu) document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [showPlusMenu]);

  return (
    <main ref={mainRef} style={{ flex: 1, background: N.surface, overflowY: 'auto', position: 'relative' }}>
      <div style={{ maxWidth: 1024, margin: '0 auto', padding: '64px 32px' }}>

        {/* ── Hero Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 40, maxWidth: 720, margin: '0 auto 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <img src={newLogo} alt="Google Cloud" style={{ height: 40, objectFit: 'contain' }} />
          </div>
          {/* Display M: 36/44/600 */}
          <h1 style={{
            fontSize: 36, lineHeight: '44px', fontWeight: 600,
            fontFamily: '"Google Sans", Inter, system-ui, sans-serif',
            color: N.textPrimary, marginBottom: 12,
            whiteSpace: 'nowrap',
          }}>
            Ask Gemini to build, scale, govern, and optimize
          </h1>
          {/* Body L: 16/24/400 */}
          <p style={{
            fontSize: 16, lineHeight: '24px', color: N.textSecondary,
            maxWidth: 560, margin: '0 auto',
            whiteSpace: 'nowrap',
          }}>
            Build with AI, set up infrastructure, or troubleshoot deployments on Google Cloud.
          </p>
        </div>

        {/* ── Search Box ── */}
        <div ref={searchBoxRef} style={{ maxWidth: 720, margin: '0 auto 48px', position: 'relative' }}>
          <div style={{ position: 'relative', borderRadius: 9999 }}>
            {/* Search pill */}
            <div style={{
              position: 'relative',
              background: N.surface,
              borderRadius: 9999,
              display: 'flex',
              alignItems: 'center',
              padding: '10px 16px',
              gap: 12,
              border: `1.5px solid ${N.border}`,
              boxShadow: N.shadowMd,
            }}>
              {/* + button with dropdown */}
              <div ref={plusMenuRef} style={{ position: 'relative', flexShrink: 0 }}>
                <button
                  onClick={() => setShowPlusMenu(v => !v)}
                  style={{
                    width: 32, height: 32, borderRadius: 9999,
                    border: `1px solid ${showPlusMenu ? N.textDisabled : N.border}`,
                    background: showPlusMenu ? N.surfaceSubtle : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: N.textSecondary, cursor: 'pointer',
                    transition: `background ${N.motionFast}`,
                  }}
                >
                  <MaterialIcon name="add" size={16} />
                </button>

                {/* Plus Dropdown */}
                {showPlusMenu && (
                  <div style={{
                    position: 'absolute', left: 0, top: 'calc(100% + 10px)',
                    width: 280, background: N.surface,
                    borderRadius: 12, border: `1px solid ${N.border}`,
                    boxShadow: N.shadowLg, zIndex: 50, overflow: 'hidden',
                    padding: '8px 0',
                  }}>
                    {/* Recent tabs */}
                    <div style={{ padding: '8px 16px 4px' }}>
                      <p style={{
                        fontSize: 11, fontWeight: 600, color: N.textDisabled,
                        textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6,
                      }}>Add recent tabs</p>
                      {recentTabs.map((tab, i) => (
                        <PlusMenuItem key={i} icon={<img src={tab.icon} alt="" style={{ width: 16, height: 16, objectFit: 'contain' }} />} label={tab.label} suffix={<MaterialIcon name="add" size={14} color={N.textDisabled} />} />
                      ))}
                    </div>

                    <div style={{ height: 1, background: N.border, margin: '4px 0' }} />

                    {/* Add content */}
                    <div style={{ padding: '4px 16px' }}>
                      <PlusMenuItem icon={<MaterialIcon name="image" size={16} color={N.textSecondary} />} label="Add images" />
                      <PlusMenuItem icon={<MaterialIcon name="attach_file" size={16} color={N.textSecondary} />} label="Add files" />
                    </div>

                    <div style={{ height: 1, background: N.border, margin: '4px 0' }} />

                    {/* Tools */}
                    <div style={{ padding: '4px 16px' }}>
                      <p style={{
                        fontSize: 11, fontWeight: 600, color: N.textDisabled,
                        textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6, paddingLeft: 8,
                      }}>Tools</p>
                      <PlusMenuItem icon={<MaterialIcon name="travel_explore" size={16} color={N.primary} />}   label="Deep Search" />
                      <PlusMenuItem icon={<MaterialIcon name="monitor" size={16} color="#7C3AED" />} label="Canvas" />
                      <PlusMenuItem icon={<MaterialIcon name="auto_awesome" size={16} color={N.warning} />} label="Create images" />
                    </div>

                    <div style={{ height: 1, background: N.border, margin: '4px 0' }} />

                    {/* Gemini models */}
                    <div style={{ padding: '4px 16px 8px' }}>
                      <p style={{
                        fontSize: 11, fontWeight: 600, color: N.textDisabled,
                        textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6, paddingLeft: 8,
                      }}>Gemini models</p>
                      {(['Auto', 'Pro', 'Flash'] as const).map(model => (
                        <button
                          key={model}
                          onClick={() => { setSelectedModel(model); setShowPlusMenu(false); }}
                          style={{
                            width: '100%', display: 'flex', alignItems: 'center',
                            justifyContent: 'space-between', padding: '6px 8px',
                            borderRadius: 6, border: 'none', cursor: 'pointer',
                            background: selectedModel === model ? '#EAF2FD' : 'transparent',
                            color: selectedModel === model ? N.primary : N.textPrimary,
                            transition: `background ${N.motionFast}`,
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            {model === 'Auto'  && <MaterialIcon name="sync" size={16} />}
                            {model === 'Pro'   && <MaterialIcon name="auto_awesome" size={16} />}
                            {model === 'Flash' && <MaterialIcon name="timer" size={16} />}
                            <span style={{ fontSize: 13, fontWeight: 500 }}>{model}</span>
                          </div>
                          {selectedModel === model && (
                            <span style={{ width: 8, height: 8, borderRadius: 9999, background: N.primary }} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Text input */}
              <input
                ref={searchInputRef}
                type="text"
                style={{
                  flex: 1, minWidth: 0, fontSize: 16, lineHeight: '24px',
                  color: N.textPrimary, background: 'transparent', border: 'none',
                  outline: 'none', fontFamily: 'Inter, system-ui, sans-serif',
                }}
                placeholder="Ask Docs AI"
                value={searchValue}
                onChange={e => { setSearchValue(e.target.value); setShowDropdown(e.target.value.length > 2); }}
                onFocus={() => { if (searchValue.length > 2) setShowDropdown(true); }}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              />

              {/* Right icons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                <IconBtn><MaterialIcon name="mic" size={20} color={N.textSecondary} /></IconBtn>
                <IconBtn><MaterialIcon name="document_scanner" size={20} color={N.textSecondary} /></IconBtn>
              </div>
            </div>
          </div>

          {/* AI Suggestion Dropdown */}
          {showDropdown && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0,
              background: N.surface, borderRadius: 12, border: `1px solid ${N.border}`,
              boxShadow: N.shadowLg, overflow: 'hidden', zIndex: 20,
            }}>
              <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Link
                  to="/skills/on-doc"
                  style={{
                    padding: 12,
                    borderRadius: 8,
                    background: 'transparent',
                    border: 'none',
                    textDecoration: 'none',
                    display: 'block',
                    color: 'inherit',
                  }}
                >
                  <span style={{
                    display: 'block',
                    fontSize: 17,
                    fontWeight: 400,
                    lineHeight: 1.35,
                    color: N.primary,
                    marginBottom: 6,
                  }}>
                    Agent Platform access control with IAM{' '}
                    <span style={{ color: N.primary }}>| Google Cloud Documentation</span>
                  </span>
                  <div style={{
                    color: '#137333',
                    fontSize: 12,
                    lineHeight: '18px',
                    marginBottom: 10,
                    wordBreak: 'break-word',
                  }}>
                    Google Cloud Documentation &gt; gemini-enterprise-agent-platform &gt; machine-learning &gt; general &gt; access-control
                  </div>
                  <p style={{
                    fontSize: 13,
                    color: N.textPrimary,
                    lineHeight: '22px',
                    marginBottom: 10,
                  }}>
                    <strong>Agent Platform</strong> uses <strong>IAM</strong> to manage <strong>access</strong> to your resources.
                    Plan <strong>access control</strong> at the project level or resource level — roles and permissions aligned with Gemini Enterprise workloads.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: N.textSecondary, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <MaterialIcon name="description" size={12} /> Skill on Doc prototype
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: N.primary }}>
                      Open Skill on Doc →
                    </span>
                  </div>
                </Link>
                <Link to="/fix-permission-error" style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{
                    padding: 16, borderRadius: 8, background: '#EAF2FD',
                    border: `1px solid #BDDAF9`,
                    transition: `box-shadow ${N.motionFast}`,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <MaterialIcon name="auto_awesome" size={16} color={N.primary} />
                        <span style={{ fontSize: 11, fontWeight: 600, color: N.primary, letterSpacing: '0.06em' }}>TROUBLESHOOTING SKILL</span>
                      </div>
                      <span style={{
                        fontSize: 10, fontWeight: 700, color: N.surface,
                        background: N.primary, padding: '3px 8px', borderRadius: 4,
                        letterSpacing: '0.06em',
                      }}>RECOMMENDED</span>
                    </div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: N.textPrimary, marginBottom: 4 }}>Fix 403 Error Message Skill</p>
                    <p style={{ fontSize: 12, color: N.textSecondary, lineHeight: '18px', marginBottom: 12 }}>
                      Automatically diagnose and resolve permission errors with guided troubleshooting.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          )}

        </div>

        {/* ── Filter bar ── */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center',
          justifyContent: 'space-between', marginBottom: 24,
          paddingBottom: 16, borderBottom: `1px solid ${N.border}`,
          gap: 12,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: N.textSecondary, fontWeight: 500 }}>
              <MaterialIcon name="filter_list" size={16} /> Filter by:
            </span>
            <div style={{ position: 'relative' }}>
              <select style={{
                appearance: 'none', background: N.surface,
                border: `1px solid ${N.border}`, borderRadius: 6,
                padding: '6px 32px 6px 12px', fontSize: 14,
                color: N.textPrimary, cursor: 'pointer', outline: 'none',
                minWidth: 140, boxShadow: N.shadowSm,
                transition: `border-color ${N.motionFast}`,
              }}>
                <option>All roles</option>
                <option>Beginner</option>
                <option>Developer</option>
                <option>Data Scientist</option>
                <option>IT Admin</option>
              </select>
              <MaterialIcon name="keyboard_arrow_down" size={16} color={N.textSecondary} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
            </div>
          </div>
          <span style={{ fontSize: 12, color: N.textDisabled, fontWeight: 500, letterSpacing: '0.02em' }}>
            Showing all tasks
          </span>
        </div>

        {/* ── Row 1: Get Started + Skills ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24, marginBottom: 24 }}>
          <TaskCard
            title="Get started with Google Cloud"
            titleLink="https://docs.cloud.google.com/docs/get-started?hl=en"
            description="Get $300 in free credits and free usage of 20+ products on signup to run, test, and deploy workloads."
            icon={<MaterialIcon name="play_arrow" size={20} color={N.textSecondary} />}
            links={['Create an Account', 'Google Cloud Overview', 'Start your platform setup']}
          />
          <TaskCard
            title="Skills"
            titleLink="/skills"
            description="Turn documentation into action with guided, step-by-step workflows that help you get things done faster."
            icon={<MaterialIcon name="account_tree" size={20} color={N.textSecondary} />}
            links={["What's a Skill", 'Example Skill.md', 'What Can you do with Skills', 'Create a Skill', 'Skills Library']}
            twoColumnLinks
          />
        </div>

        {/* ── Row 2: Build + Setup ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24, marginBottom: 24 }}>
          <TaskCard
            title="Build"
            description="Create conversational agents, document analysis pipelines, and fine-tune models with your data."
            icon={<MaterialIcon name="terminal" size={20} color={N.textSecondary} />}
            links={['Build a conversational agent', 'Build a document analysis pipeline', 'Fine-tune a model with your data']}
          />
          <TaskCard
            title="Setting Up Services & Initial Configuration"
            description="Configure projects, environments, and APIs to get your Google Cloud environment production-ready."
            icon={<MaterialIcon name="code" size={20} color={N.textSecondary} />}
            links={['Create a new cloud project', 'Enable APIs and services', 'Configure billing']}
          />
        </div>

        {/* ── Row 3: Free tier + Deploy ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24, marginBottom: 24 }}>
          <TaskCard
            title="Start your next project with 20+ free tier products"
            titleLink="https://console.cloud.google.com/welcome?facet_url=https:%2F%2Fdocs.cloud.google.com&project=project-c965a79a-8ccd-47cd-89c"
            description="Try more than 20 popular products with monthly free usage—AI, compute, data, and more—then scale when you need to."
            icon={<MaterialIcon name="rocket_launch" size={20} color={N.textSecondary} />}
            links={["See what's included in the free tier", 'Create or select a project', 'Enable APIs and start building']}
          />
          <TaskCard
            title="Deploy & Scale"
            description="Deploy your tuned models to endpoints, monitor their performance, and manage cloud costs and quotas."
            icon={<MaterialIcon name="dashboard_customize" size={20} color={N.textSecondary} />}
            links={['Launch web applications', 'Configure CI/CD pipelines', 'Create API endpoints']}
          />
        </div>

        {/* ── Prompt & Code Starters ── */}
        <div style={{
          background: N.surfaceSubtle, borderRadius: 12,
          border: `1px solid ${N.border}`, padding: 32, marginBottom: 24,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
            <div>
              <h2 style={{
                fontSize: 20, lineHeight: '28px', fontWeight: 600,
                color: N.textPrimary, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4,
              }}>
                <MaterialIcon name="code" size={20} color={N.textSecondary} /> Prompt & Code Starters
              </h2>
              <p style={{ fontSize: 14, color: N.textSecondary, lineHeight: '20px' }}>
                Copy, customize, and run ready-made prompts and code snippets for common Google Cloud tasks.
              </p>
            </div>
            <button style={{
              display: 'flex', alignItems: 'center', gap: 4,
              fontSize: 14, fontWeight: 600, color: N.primary,
              background: 'none', border: 'none', cursor: 'pointer',
              whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              View all templates <MaterialIcon name="arrow_forward" size={16} />
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
            <TemplateCard title="Deploy a model to an endpoint" description="Launch, configure, and test a production-ready model endpoint." />
            <TemplateCard title="Python: Basic Text Generation" description="Boilerplate python script to call the Gemini API using the Vertex AI SDK." />
          </div>
        </div>

      </div>
      {showBottomSearch && (
        <button
          type="button"
          onClick={() => {
            searchBoxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            window.setTimeout(() => searchInputRef.current?.focus(), 250);
          }}
          style={{
            position: 'fixed',
            left: '50%',
            bottom: 32,
            transform: 'translateX(-50%)',
            width: 'min(640px, calc(100vw - 64px))',
            height: 70,
            border: 'none',
            borderRadius: 9999,
            background: '#EDF3FE',
            boxShadow: '0 12px 30px rgba(60,64,67,0.18)',
            color: '#5F6368',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px 0 28px',
            fontSize: 16,
            fontWeight: 500,
            lineHeight: '24px',
            cursor: 'pointer',
            zIndex: 60,
          }}
        >
          <span>Continue conversation</span>
          <MaterialIcon name="open_in_full" size={20} color={N.textSecondary} />
        </button>
      )}
      <Footer />
    </main>
  );
}

// ── Tiny helpers ──────────────────────────────────────────────────────────────

function IconBtn({ children }: { children: React.ReactNode }) {
  return (
    <button style={{
      width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'none', border: 'none', borderRadius: 6, cursor: 'pointer',
    }}>
      {children}
    </button>
  );
}

function PlusMenuItem({ icon, label, suffix }: { icon: React.ReactNode; label: string; suffix?: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 8, padding: '6px 8px', borderRadius: 6, border: 'none', cursor: 'pointer',
        background: hovered ? '#F8F9FA' : 'transparent',
        transition: `background 120ms ease-out`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
        <span style={{ flexShrink: 0 }}>{icon}</span>
        <span style={{ fontSize: 13, color: '#202124', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
      </div>
      {suffix && <span style={{ flexShrink: 0, opacity: hovered ? 1 : 0, transition: 'opacity 120ms ease-out' }}>{suffix}</span>}
    </button>
  );
}

// ── TaskCard ──────────────────────────────────────────────────────────────────

type LinkItem = string | { label: string; path: string };

interface TaskCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  links: LinkItem[];
  titleLink?: string;
  twoColumnLinks?: boolean;
  popularResourcesLinks?: LinkItem[];
}

function TaskCard({ title, description, icon, links, titleLink, twoColumnLinks, popularResourcesLinks }: TaskCardProps) {
  const [hovered, setHovered] = useState(false);
  const resourceLinks = popularResourcesLinks || links;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: N.surface,
        border: `1px solid ${hovered ? '#C5CAD0' : N.border}`,
        borderRadius: 12,
        padding: 24,
        boxShadow: hovered ? N.shadowMd : N.shadowSm,
        transition: `box-shadow ${N.motionMedium}, border-color ${N.motionMedium}`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Icon */}
      <div style={{
        width: 40, height: 40, borderRadius: 8,
        background: hovered ? '#EAF2FD' : N.surfaceSubtle,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 16,
        transition: `background ${N.motionMedium}`,
      }}>
        <span style={{ color: hovered ? N.primary : N.textSecondary, display: 'flex', transition: `color ${N.motionMedium}` }}>
          {icon}
        </span>
      </div>

      {/* Title */}
      {titleLink ? (
        /^https?:\/\//.test(titleLink) ? (
          <a
            href={titleLink}
            target="_blank"
            rel="noreferrer noopener"
            style={{ textDecoration: 'none', marginBottom: 8, display: 'block' }}
          >
            <h3 style={{
              fontSize: 20, lineHeight: '28px', fontWeight: 600,
              color: hovered ? N.primary : N.textPrimary,
              transition: `color ${N.motionFast}`,
            }}>
              {title}
            </h3>
          </a>
        ) : (
          <Link to={titleLink} style={{ textDecoration: 'none', marginBottom: 8, display: 'block' }}>
            <h3 style={{
              fontSize: 20, lineHeight: '28px', fontWeight: 600,
              color: hovered ? N.primary : N.textPrimary,
              transition: `color ${N.motionFast}`,
            }}>
              {title}
            </h3>
          </Link>
        )
      ) : (
        <h3 style={{
          fontSize: 20, lineHeight: '28px', fontWeight: 600,
          color: hovered ? N.primary : N.textPrimary,
          marginBottom: 8,
          transition: `color ${N.motionFast}`,
        }}>
          {title}
        </h3>
      )}

      {/* Description — Body M */}
      <p style={{
        fontSize: 14, lineHeight: '20px', color: N.textSecondary,
        marginBottom: 20,
        display: '-webkit-box', WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical', overflow: 'hidden',
      }}>
        {description}
      </p>

      {/* Links */}
      <ul style={{
        listStyle: 'none', padding: 0, margin: 0,
        ...(twoColumnLinks
          ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px' }
          : { display: 'flex', flexDirection: 'column', gap: 10 }),
      }}>
        {links.map((link, idx) => {
          const isObj  = typeof link !== 'string';
          const label  = isObj ? link.label : link;
          const path   = isObj ? link.path  : '#';
          const inner  = (
            <LinkRow label={label} />
          );
          return (
            <li key={idx}>
              {isObj && path.startsWith('/')
                ? <Link to={path} style={{ textDecoration: 'none', display: 'block' }}>{inner}</Link>
                : <a href={path}  style={{ textDecoration: 'none', display: 'block' }}>{inner}</a>
              }
            </li>
          );
        })}
      </ul>

      {/* Popular Resources – expands on hover */}
      <div style={{
        overflow: 'hidden',
        maxHeight: hovered ? 320 : 0,
        opacity: hovered ? 1 : 0,
        marginTop: hovered ? 16 : 0,
        transition: `max-height ${N.motionSlow}, opacity ${N.motionMedium}, margin-top ${N.motionMedium}`,
      }}>
        <div style={{
          background: '#EAF2FD', borderRadius: 8, padding: 16,
          borderTop: `1px solid #BDDAF9`,
        }}>
          <p style={{
            fontSize: 12, lineHeight: '16px', fontWeight: 600,
            color: N.primary, marginBottom: 10, letterSpacing: '0.02em',
          }}>
            Popular Resources
          </p>
          <ul style={{
            listStyle: 'none', padding: 0, margin: 0,
            ...(twoColumnLinks
              ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 16px' }
              : { display: 'flex', flexDirection: 'column', gap: 8 }),
          }}>
            {resourceLinks.map((link, idx) => {
              const isObj = typeof link !== 'string';
              const label = isObj ? link.label : link;
              const path  = isObj ? link.path  : '#';
              const inner = <LinkRow label={label} size={13} />;
              return (
                <li key={idx}>
                  {isObj && path.startsWith('/')
                    ? <Link to={path} style={{ textDecoration: 'none', display: 'block' }}>{inner}</Link>
                    : <a href={path}  style={{ textDecoration: 'none', display: 'block' }}>{inner}</a>
                  }
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

function LinkRow({ label, size = 14 }: { label: string; size?: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: size, lineHeight: '20px', fontWeight: 500,
        color: hovered ? N.primary : N.textPrimary,
        transition: `color ${N.motionFast}`,
        cursor: 'pointer',
      }}
    >
      <span>{label}</span>
      <MaterialIcon
        name="open_in_new"
        size={14}
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translate(0,0)' : 'translate(-4px,4px)',
          transition: `opacity ${N.motionFast}, transform ${N.motionFast}`,
          color: N.primary,
          flexShrink: 0,
        }}
      />
    </div>
  );
}

// ── TemplateCard ──────────────────────────────────────────────────────────────

function TemplateCard({ title, description }: { title: string; description: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: N.surface,
        border: `1px solid ${hovered ? '#C5CAD0' : N.border}`,
        borderRadius: 12, padding: 20,
        boxShadow: hovered ? N.shadowMd : N.shadowSm,
        transition: `box-shadow ${N.motionMedium}, border-color ${N.motionMedium}`,
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12,
      }}
    >
      <div>
        <p style={{
          fontSize: 14, lineHeight: '20px', fontWeight: 600,
          color: hovered ? N.primary : N.textPrimary,
          marginBottom: 4,
          transition: `color ${N.motionFast}`,
        }}>
          {title}
        </p>
        <p style={{ fontSize: 12, lineHeight: '16px', color: N.textSecondary }}>
          {description}
        </p>
      </div>
      {/* Nimbus secondary ghost button */}
      <button style={{
        flexShrink: 0, fontSize: 11, fontWeight: 700,
        color: N.textSecondary, background: N.surfaceSubtle,
        border: `1px solid ${N.border}`, borderRadius: 6,
        padding: '4px 10px', cursor: 'pointer', letterSpacing: '0.06em',
        textTransform: 'uppercase', whiteSpace: 'nowrap',
        transition: `background ${N.motionFast}`,
      }}>
        Copy
      </button>
    </div>
  );
}