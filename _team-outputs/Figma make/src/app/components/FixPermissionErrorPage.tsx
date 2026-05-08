import React, { useState, useRef, useEffect } from 'react';
import { Footer } from './Footer';
import clsx from 'clsx';
import {
  ShieldAlert,
  Zap,
  Bot,
  Play,
  FileText,
  Search,
  CheckCircle2,
  ChevronDown,
  Copy,
  LayoutTemplate,
  MessageSquare,
  Sparkles,
  Link as LinkIcon,
  MousePointerClick,
  Terminal,
  RefreshCw,
  Box,
  Asterisk,
  FileType,
  Code2,
  Cable,
  X,
  Star,
  ChevronRight
} from 'lucide-react';

export function FixPermissionErrorPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [skillInstalled, setSkillInstalled] = useState(false);
  const [inputsConfirmed, setInputsConfirmed] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<string>('ai-assistant');
  const [skillExecuted, setSkillExecuted] = useState(false);
  const [executionSuccess, setExecutionSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <main className="flex-1 overflow-y-auto bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-24">
        
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center">
            <li className="inline-flex items-center">
              <a href="#" className="inline-flex items-center hover:text-blue-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-0.5" />
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Troubleshoot
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-0.5" />
                <span className="text-gray-900 font-medium">Fix a 403 Permission Error</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-8 relative items-stretch">
          <div className="flex-1 min-w-0">
            {/* Header Section */}
            <div className="mb-12 flex justify-between items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight mb-4">
                  Fix a 403 Permission Error
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A standardized way to give AI agents new capabilities.
                </p>
              </div>

              {/* Action Dropdown Menu */}
              <div className="relative" ref={dropdownRef}>
                <div className="flex rounded-lg border border-gray-200 shadow-sm overflow-hidden bg-white">
                  <button className="px-4 py-2 hover:bg-gray-50 text-sm font-medium text-gray-700 flex items-center gap-2 border-r border-gray-200">
                    <Copy className="w-4 h-4" /> Copy page
                  </button>
                  <button 
                    className="px-2 py-2 hover:bg-gray-50 text-gray-500"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-start gap-3">
                      <Copy className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">Copy page</div>
                        <div className="text-xs text-gray-500">Copy page as Markdown for LLMs</div>
                      </div>
                    </button>
                    
                    <div className="h-px bg-gray-100 my-1"></div>
                    
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-start gap-3">
                      <FileText className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-gray-900 flex items-center gap-1">View as Markdown <LinkIcon className="w-3 h-3 text-gray-400" /></div>
                        <div className="text-xs text-gray-500">View this page as plain text</div>
                      </div>
                    </button>
                    
                    <div className="h-px bg-gray-100 my-1"></div>
                    
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-start gap-3">
                      <Bot className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-gray-900 flex items-center gap-1">Open in ChatGPT <LinkIcon className="w-3 h-3 text-gray-400" /></div>
                        <div className="text-xs text-gray-500">Ask questions about this page</div>
                      </div>
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-start gap-3">
                      <Asterisk className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-gray-900 flex items-center gap-1">Open in Claude <LinkIcon className="w-3 h-3 text-gray-400" /></div>
                        <div className="text-xs text-gray-500">Ask questions about this page</div>
                      </div>
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-gray-900 flex items-center gap-1">Open in Gemini <LinkIcon className="w-3 h-3 text-gray-400" /></div>
                        <div className="text-xs text-gray-500">Ask questions about this page</div>
                      </div>
                    </button>
                    
                    <div className="h-px bg-gray-100 my-1"></div>
                    
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-start gap-3">
                      <Cable className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">Copy MCP Server</div>
                        <div className="text-xs text-gray-500">Copy MCP Server URL to clipboard</div>
                      </div>
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-start gap-3">
                      <Box className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-gray-900 flex items-center gap-1">Connect to Cursor <LinkIcon className="w-3 h-3 text-gray-400" /></div>
                        <div className="text-xs text-gray-500">Install MCP Server on Cursor</div>
                      </div>
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-start gap-3">
                      <Code2 className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-gray-900 flex items-center gap-1">Connect to VS Code <LinkIcon className="w-3 h-3 text-gray-400" /></div>
                        <div className="text-xs text-gray-500">Install MCP Server on VS Code</div>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Merged Recommended Fix Section */}
            <div className="bg-[#f8fafd] border border-[#d2e3fc] border-l-4 border-l-[#1a73e8] rounded-xl p-5 mb-12 relative flex flex-col sm:flex-row gap-5 shadow-sm">
              <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors">
                <X className="w-4 h-4" />
              </button>

              <div className="w-9 h-9 bg-[#1a73e8] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                <Star className="w-5 h-5 text-white fill-current" />
              </div>

              <div className="flex-1 pr-6">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-[11px] font-bold text-[#1a73e8] tracking-[0.08em]">RECOMMENDED FIX</span>
                  <span className="bg-[#4285f4] text-white text-[10px] font-bold px-2 py-[1px] rounded-full tracking-wide">Skill</span>
                </div>

                <h3 className="text-[18px] font-bold text-gray-900 mb-4">
                  Install Skill to Fix the 403 Error Automatically
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900 text-[14px] mb-1">Why this matters:</h4>
                    <p className="text-gray-600 text-[14px] leading-relaxed">This 403 error is caused by missing or incorrect permissions, which prevents your request from completing.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-[14px] mb-1">What this will do:</h4>
                    <p className="text-[14px] text-gray-600 leading-relaxed">This skill will automatically identify the required permissions, apply the correct IAM roles, and validate access—resolving the error for you in a guided, reliable way.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => setSkillInstalled(true)}
                    className="px-4 py-2 bg-[#1a73e8] hover:bg-blue-700 text-white rounded-md text-sm font-medium flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <Play className="w-4 h-4" /> {skillInstalled ? 'Skill Installed' : 'Install Skill'}
                  </button>
                  <button className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-[#1a73e8] rounded-md text-sm font-medium transition-colors shadow-sm">
                    View Steps Manually
                  </button>
                </div>
              </div>
            </div>

            {/* Configure Inputs Section */}
            {skillInstalled && !inputsConfirmed && (
              <div className="bg-white border-2 border-blue-500 rounded-xl p-6 mb-12 shadow-lg animate-in fade-in slide-in-from-top-2 duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Configure Inputs
                </h3>
                <p className="text-sm text-gray-600 mb-6">Review and confirm the pre-loaded information for your troubleshooting session.</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project ID</label>
                    <input
                      type="text"
                      defaultValue="my-gcp-project-12345"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Resource name</label>
                    <input
                      type="text"
                      defaultValue="vertex-ai-service-account"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                    <select
                      defaultValue="us-central1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                    >
                      <option value="us-central1">us-central1</option>
                      <option value="us-east1">us-east1</option>
                      <option value="us-west1">us-west1</option>
                      <option value="europe-west1">europe-west1</option>
                      <option value="asia-east1">asia-east1</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={() => setInputsConfirmed(true)}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Confirm Inputs
                </button>
              </div>
            )}

            {/* Select Execution Method Section */}
            {inputsConfirmed && (
              <div className="mb-12 animate-in fade-in slide-in-from-top-2 duration-300">
                <h2 className="text-2xl font-medium text-gray-900 mb-4">Select Execution Method</h2>
                <p className="text-gray-600 mb-8">Choose where you want this skill to run:</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {[
                    { id: 'cloud-shell', label: 'Cloud Shell', icon: Terminal, desc: 'Run in browser-based shell' },
                    { id: 'cli', label: 'CLI', icon: Code2, desc: 'Run locally with gcloud' },
                    { id: 'cloud-console', label: 'Cloud Console', icon: LayoutTemplate, desc: 'Use Google Cloud UI' },
                    { id: 'api', label: 'API', icon: Cable, desc: 'Execute via REST API' },
                    { id: 'ai-assistant', label: 'AI Assistant', icon: Sparkles, desc: 'Recommended - AI-guided fix', recommended: true }
                  ].map((method) => (
                    <div
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={clsx(
                        "border-2 rounded-xl p-4 cursor-pointer transition-all",
                        selectedMethod === method.id
                          ? "border-blue-600 bg-blue-50 shadow-md"
                          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm",
                        method.recommended && "ring-2 ring-purple-200"
                      )}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className={clsx(
                          "w-10 h-10 rounded-lg flex items-center justify-center",
                          selectedMethod === method.id ? "bg-blue-600" : "bg-gray-100"
                        )}>
                          <method.icon className={clsx(
                            "w-5 h-5",
                            selectedMethod === method.id ? "text-white" : "text-gray-600"
                          )} />
                        </div>
                        {method.recommended && (
                          <span className="bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                            AI PICK
                          </span>
                        )}
                      </div>
                      <h3 className={clsx(
                        "font-semibold mb-1",
                        selectedMethod === method.id ? "text-blue-900" : "text-gray-900"
                      )}>{method.label}</h3>
                      <p className="text-xs text-gray-600">{method.desc}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setSkillExecuted(true);
                    // Always show failure first for demonstration
                    setTimeout(() => {
                      setExecutionSuccess(false);
                    }, 2000);
                  }}
                  disabled={skillExecuted}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Play className="w-6 h-6" />
                  {skillExecuted ? 'Executing...' : 'Execute / Run Skill'}
                </button>
              </div>
            )}

            {/* Execution Result */}
            {skillExecuted && executionSuccess !== null && (
              <div className="mb-12 animate-in fade-in slide-in-from-top-2 duration-300">
                {executionSuccess ? (
                  <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-green-900">Success: Permissions Updated and Issue Resolved</h3>
                        <p className="text-sm text-green-700 mt-1">The 403 permission error has been fixed successfully.</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <p className="text-sm text-gray-700 mb-2">✅ Service account permissions updated</p>
                      <p className="text-sm text-gray-700 mb-2">✅ IAM role granted: roles/run.admin</p>
                      <p className="text-sm text-gray-700">✅ Changes propagated across all regions</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <ShieldAlert className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-red-900">Additional Steps Required</h3>
                        <p className="text-sm text-red-700 mt-1">The automated fix encountered an issue. Try one of these options:</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-5 border border-red-200">
                      <h4 className="font-semibold text-gray-900 mb-4">Next Steps:</h4>
                      <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-2 bg-white border-2 border-red-400 hover:bg-red-50 text-red-800 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                          <MousePointerClick className="w-4 h-4" /> Redeploy
                        </button>
                        <button className="px-4 py-2 bg-white border-2 border-red-400 hover:bg-red-50 text-red-800 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                          <Terminal className="w-4 h-4" /> Re-run command
                        </button>
                        <button
                          onClick={() => setExecutionSuccess(true)}
                          className="px-4 py-2 bg-white border-2 border-red-400 hover:bg-red-50 text-red-800 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
                        >
                          <RefreshCw className="w-4 h-4" /> Refresh access
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Manual Steps */}
            <div className="mb-16">
              <h2 className="text-2xl font-medium text-gray-900 mb-8 flex items-center gap-2">
                Step-by-Step Manual Fix
              </h2>

              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative pl-8 border-l-2 border-gray-200">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center border-2 border-white">1</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Identify the failing identity</h3>
                  <p className="text-gray-600 mb-4">Look for an error like:</p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 font-mono text-sm text-red-600 overflow-x-auto">
                    User does not have permission to access resource
                  </div>
                  <p className="text-gray-600 mb-4">Extract:</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                    <li>User email OR</li>
                    <li>Service account</li>
                  </ul>
                  <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                    <Bot className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <span className="font-medium text-blue-900 block mb-1">👉 Tip:</span>
                      <code className="bg-blue-100 px-2 py-1 rounded text-blue-800 text-sm">gcloud auth list</code>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative pl-8 border-l-2 border-gray-200">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center border-2 border-white">2</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Identify the missing permission</h3>
                  <p className="text-gray-600 mb-4">Look for:</p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 font-mono text-sm text-gray-800">
                    Permission denied: <span className="text-blue-600 font-semibold">resourcemanager.projects.get</span>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <span className="font-medium text-gray-900 block mb-2">👉 This tells you:</span>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>What permission is missing</li>
                      <li>What role might include it</li>
                    </ul>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative pl-8 border-l-2 border-gray-200">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center border-2 border-white">3</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Grant the appropriate role</h3>
                  
                  <div className="bg-white border border-gray-200 border-l-4 border-l-slate-500 rounded-xl p-5 mb-6 shadow-sm relative flex flex-col sm:flex-row gap-5">
                    <div className="w-9 h-9 bg-slate-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <LayoutTemplate className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 pr-2">
                      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                        <div>
                          <span className="text-gray-500 text-sm block mb-1">Go to:</span>
                          <div className="font-medium text-gray-900 flex items-center gap-2">
                            👉 IAM & Admin <ChevronDown className="w-4 h-4 rotate-[-90deg] text-gray-400" /> IAM
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                          <Play className="w-4 h-4" /> 👉 Run Skill instead
                          <span className="text-blue-500 font-normal">(Skips manual navigation)</span>
                        </button>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Add principal:</h4>
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm text-gray-600">
                            Enter user or service account
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Assign role:</h4>
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Viewer</li>
                              <li>• Editor</li>
                              <li>• Product-specific role (e.g., Cloud Run Admin)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative pl-8">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center border-2 border-white z-10">4</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Verify the fix</h3>
                  
                  <div className="bg-green-50 border border-green-200 border-l-4 border-l-green-600 rounded-xl p-5 shadow-sm relative flex flex-col sm:flex-row gap-5">
                    <div className="w-9 h-9 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 pr-2">
                      <h4 className="font-medium text-green-900 mb-3 text-[18px]">Retry your action:</h4>
                      <ul className="flex flex-wrap gap-4 text-sm text-green-800 mb-4">
                        <li className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-green-200 shadow-sm"><MousePointerClick className="w-4 h-4" /> Redeploy</li>
                        <li className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-green-200 shadow-sm"><Terminal className="w-4 h-4" /> Re-run command</li>
                        <li className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-green-200 shadow-sm"><RefreshCw className="w-4 h-4" /> Refresh access</li>
                      </ul>
                      <div className="flex items-center gap-2 text-sm text-green-700 border-t border-green-200/60 pt-4 mt-2 font-medium">
                        👉 Optional: Run verification check
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification & Trust */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-8">
              <h2 className="text-xl font-medium text-gray-900 mb-6 flex items-center gap-2">
                Verification & Trust
              </h2>
              
              <div className="bg-white border border-gray-200 border-l-4 border-l-slate-600 rounded-xl p-5 shadow-sm relative flex flex-col sm:flex-row gap-5">
                <div className="w-9 h-9 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 pr-2">
                  <h3 className="font-bold text-[18px] text-gray-900 mb-4">
                    Preview before applying (Skill)
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3">This action will:</p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-100">
                    <div className="flex flex-col gap-2 font-mono text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500">Grant</span>
                        <span className="text-green-600 font-semibold bg-green-50 px-1.5 rounded">roles/run.admin</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-500">To:</span>
                        <span className="text-blue-600 break-all bg-blue-50 px-1.5 rounded">service-account@project.iam.gserviceaccount.com</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
                    <span className="text-sm font-medium text-gray-700">👉 Confirm before proceeding</span>
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">Cancel</button>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">Apply Fix</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Outline Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="pl-4 border-l border-gray-200 sticky top-24 pt-2">
              <h2 className="font-semibold text-gray-900 mb-4 text-xs uppercase tracking-wider text-left">On this page</h2>
              <nav className="space-y-3 text-left">
                <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Quick Diagnosis
                </a>
                <a href="#" className="block text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Step-by-Step Manual Fix
                </a>
                <div className="pl-4 space-y-2.5">
                  <a href="#" className="block text-[13px] text-gray-500 hover:text-blue-600 transition-colors">
                    1. Identify the failing identity
                  </a>
                  <a href="#" className="block text-[13px] text-gray-500 hover:text-blue-600 transition-colors">
                    2. Identify the missing permission
                  </a>
                  <a href="#" className="block text-[13px] text-gray-500 hover:text-blue-600 transition-colors">
                    3. Grant the appropriate role
                  </a>
                  <a href="#" className="block text-[13px] text-gray-500 hover:text-blue-600 transition-colors">
                    4. Verify the fix
                  </a>
                </div>
                <a href="#" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Verification & Trust
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}