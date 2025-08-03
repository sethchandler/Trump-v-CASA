// NotebookLM Preparation Tool for Trump v. CASA website

class NotebookLMPreparer {
    constructor() {
        this.initializeUI();
    }

    initializeUI() {
        const buttonHTML = `
            <button onclick="prepareForNotebookLM()" style="
                position: fixed; 
                top: 80px; 
                right: 20px; 
                z-index: 998; 
                padding: 12px 20px; 
                background: var(--color-uh-red); 
                color: white; 
                border: none; 
                border-radius: 8px; 
                cursor: pointer; 
                font-weight: 600;
                box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                display: flex;
                align-items: center;
                gap: 8px;
            ">
                📚 Prepare for NotebookLM
            </button>
            
            <div id="notebooklm-modal" style="
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 2000;
                justify-content: center;
                align-items: center;
            ">
                <div style="
                    background: white;
                    padding: 30px;
                    border-radius: 12px;
                    max-width: 600px;
                    max-height: 80vh;
                    overflow-y: auto;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                ">
                    <h2 style="color: var(--color-uh-red); margin-bottom: 20px;">📚 Upload to NotebookLM</h2>
                    
                    <div id="preparation-status">
                        <p>Click "Generate Package" to create a comprehensive file package for NotebookLM upload:</p>
                        
                        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
                            <h4 style="color: var(--color-uh-red); margin-bottom: 10px;">📦 Package Contents:</h4>
                            <ul style="margin: 0; padding-left: 20px;">
                                <li>Supreme Court slip opinion (PDF)</li>
                                <li>Oral argument transcript (PDF)</li>
                                <li>Executive Order 14160 (PDF)</li>
                                <li>USCIS Implementation Plan (PDF)</li>
                                <li>All 5 opinion analyses (text files)</li>
                                <li>Case timeline & materials (text)</li>
                                <li>Scholarship articles (PDFs)</li>
                                <li>Upload instructions</li>
                            </ul>
                        </div>
                        
                        <button onclick="generateNotebookLMPackage()" style="
                            width: 100%;
                            padding: 15px;
                            background: var(--color-uh-red);
                            color: white;
                            border: none;
                            border-radius: 8px;
                            font-size: 16px;
                            font-weight: 600;
                            cursor: pointer;
                            margin-bottom: 15px;
                        ">
                            📦 Generate Package
                        </button>
                        
                        <div style="background: var(--color-uh-teal); color: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                            <h4 style="margin-bottom: 10px;">🚀 Quick Upload Instructions:</h4>
                            <ol style="margin: 0; padding-left: 20px;">
                                <li>Download the generated ZIP file</li>
                                <li>Go to <a href="https://notebooklm.google.com" target="_blank" style="color: white; text-decoration: underline;">NotebookLM</a></li>
                                <li>Create a new notebook</li>
                                <li>Upload all PDFs and text files from the ZIP</li>
                                <li>Start chatting with the materials!</li>
                            </ol>
                        </div>
                        
                        <button onclick="closeNotebookLMModal()" style="
                            width: 100%;
                            padding: 10px;
                            background: #6c757d;
                            color: white;
                            border: none;
                            border-radius: 8px;
                            cursor: pointer;
                        ">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', buttonHTML);
    }

    async generatePackage() {
        const statusDiv = document.getElementById('preparation-status');
        statusDiv.innerHTML = '<p style="text-align: center; font-size: 18px;">📦 Generating package... Please wait...</p>';
        
        try {
            // Create package content
            const packageContent = await this.createPackageContent();
            
            // Create download link
            const blob = new Blob([JSON.stringify(packageContent, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            statusDiv.innerHTML = `
                <div style="text-align: center;">
                    <h3 style="color: var(--color-uh-green); margin-bottom: 20px;">✅ Package Ready!</h3>
                    
                    <a href="${url}" download="trump-v-casa-notebooklm-package.json" style="
                        display: inline-block;
                        padding: 15px 30px;
                        background: var(--color-uh-red);
                        color: white;
                        text-decoration: none;
                        border-radius: 8px;
                        font-weight: 600;
                        margin-bottom: 20px;
                    ">
                        📥 Download Package
                    </a>
                    
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; text-align: left;">
                        <h4 style="color: var(--color-uh-green); margin-bottom: 10px;">📋 What's Included:</h4>
                        <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                            <li><strong>All website text content</strong> - Structured for easy upload</li>
                            <li><strong>PDF file list</strong> - Direct links to download each document</li>
                            <li><strong>Opinion analyses</strong> - All 5 justice analyses as text</li>
                            <li><strong>Timeline & materials</strong> - Complete case information</li>
                            <li><strong>Upload guide</strong> - Step-by-step NotebookLM instructions</li>
                        </ul>
                    </div>
                    
                    <div style="background: var(--color-uh-teal); color: white; padding: 15px; border-radius: 8px; margin-top: 15px; text-align: left;">
                        <h4 style="margin-bottom: 10px;">🎯 Pro Tips:</h4>
                        <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                            <li>Upload PDFs first, then the text content</li>
                            <li>Use descriptive names when uploading</li>
                            <li>Ask NotebookLM: "Create a study guide for this case"</li>
                            <li>Try: "What would Justice Sotomayor say about X?"</li>
                        </ul>
                    </div>
                </div>
            `;
            
            // Auto-open NotebookLM
            setTimeout(() => {
                window.open('https://notebooklm.google.com', '_blank');
            }, 1000);
            
        } catch (error) {
            statusDiv.innerHTML = `
                <div style="text-align: center; color: #d32f2f;">
                    <h3>❌ Error generating package</h3>
                    <p>${error.message}</p>
                    <button onclick="generateNotebookLMPackage()" style="padding: 10px 20px; background: var(--color-uh-red); color: white; border: none; border-radius: 4px; cursor: pointer;">
                        Try Again
                    </button>
                </div>
            `;
        }
    }

    async createPackageContent() {
        // Extract all text content from the website
        const content = {
            title: "Trump v. CASA, Inc. - Supreme Court Case Materials",
            generated: new Date().toISOString(),
            
            // Main case information
            overview: this.extractSectionText('overview'),
            timeline: this.extractSectionText('timeline'),
            
            // Opinion analyses
            analyses: {
                barrett_majority: await this.fetchAnalysisText('analyses/barrett-majority-analysis.html'),
                kavanaugh_concurrence: await this.fetchAnalysisText('analyses/kavanaugh-concurrence-analysis.html'),
                alito_thomas_concurrence: await this.fetchAnalysisText('analyses/alito-thomas-concurrence-analysis.html'),
                sotomayor_dissent: await this.fetchAnalysisText('analyses/sotomayor-dissent-analysis.html'),
                jackson_dissent: await this.fetchAnalysisText('analyses/jackson-dissent-analysis.html')
            },
            
            // Document links for manual download
            documents: {
                supreme_court_opinion: window.location.origin + '/supreme-court/24a884_slip_opinion.pdf',
                oral_argument_transcript: window.location.origin + '/supreme-court/24a884_oral_argument_transcript.pdf',
                executive_order: window.location.origin + '/executive/EO_14160.pdf',
                uscis_plan: window.location.origin + '/executive/IP-2025-0001-USCIS_Implementation_Plan_of_Executive_Order_14160 – Protecting_the_Meaning_and_Value_of_American_Citizenship.pdf',
                scholarship_bray: window.location.origin + '/scholarship/bray_multiple_chancellors.pdf',
                scholarship_coenen_davis: window.location.origin + '/scholarship/bray_coenen_percolation.pdf'
            },
            
            // Upload instructions
            instructions: `
NOTEBOOKLM UPLOAD INSTRUCTIONS
==============================

1. Go to https://notebooklm.google.com
2. Click "New notebook"
3. Upload these PDFs first:
   - Supreme Court slip opinion
   - Oral argument transcript  
   - Executive Order 14160
   - USCIS Implementation Plan
   - Lower court opinions (Washington v. Trump 9th Cir., New Jersey v. Trump D. Mass., CASA v. Trump D. Md., Barbara v. Trump D.N.H.)
   - Scholarship articles

4. Then add this text content as sources
5. Start chatting! Try these prompts:
   - "Summarize the key holdings"
   - "What are the practical implications?"
   - "Compare the different opinions"
   - "Create a timeline of events"
   - "What would Justice [Name] say about [topic]?"

HAVE FUN EXPLORING THE CASE!
            `
        };
        
        return content;
    }

    extractSectionText(sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) return '';
        
        return Array.from(section.querySelectorAll('h1, h2, h3, h4, p, li'))
            .map(el => el.textContent.trim())
            .filter(text => text.length > 0)
            .join('\\n\\n');
    }

    async fetchAnalysisText(url) {
        try {
            const response = await fetch(url);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            return Array.from(doc.querySelectorAll('.analysis-content h1, .analysis-content h2, .analysis-content h3, .analysis-content p'))
                .map(el => el.textContent.trim())
                .filter(text => text.length > 0)
                .join('\\n\\n');
        } catch (error) {
            return `Error loading analysis: ${url}`;
        }
    }
}

// Global functions
function prepareForNotebookLM() {
    document.getElementById('notebooklm-modal').style.display = 'flex';
}

function closeNotebookLMModal() {
    document.getElementById('notebooklm-modal').style.display = 'none';
}

function generateNotebookLMPackage() {
    if (window.notebookLMPreparer) {
        window.notebookLMPreparer.generatePackage();
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    window.notebookLMPreparer = new NotebookLMPreparer();
});