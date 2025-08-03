# Supreme Court Case Website Template Guide

## Overview

This guide documents the creation of the Trump v. CASA, Inc. educational website as a template for building similar comprehensive legal case websites. The project demonstrates how to combine traditional web development with AI-assisted content generation and modern educational tools.

## Project Architecture

### Core Philosophy
- **Educational Focus**: Designed for law students, practitioners, and scholars
- **Primary Source Integration**: Direct access to court documents and materials
- **AI-Enhanced Analysis**: Expert-guided AI content generation for deeper insights
- **Modern UX**: Search functionality, interactive features, and mobile responsiveness
- **Brand Consistency**: Institutional branding throughout (University of Houston)

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Fonts**: Inter (Google Fonts)
- **AI Integration**: Zen MCP server for multi-model AI access
- **Search**: Client-side JavaScript search
- **Export**: NotebookLM preparation tools

## Required Inputs from Subject Matter Expert

### 1. Case Assets Manifest (`assets.json`)
```json
{
  "supreme_court": {
    "slip_opinion": {
      "title": "Case Name - Slip Opinion",
      "path": "supreme-court/slip_opinion.pdf",
      "url": "https://source-url.com/document.pdf",
      "description": "Complete court opinion with all writings"
    }
  },
  "executive_branch": { /* Executive materials */ },
  "precedent_cases": { /* Related precedent */ },
  "scholarship": { /* Academic articles */ }
}
```

**Essential Elements:**
- **Primary court documents**: Opinions, transcripts, orders
- **Executive materials**: Orders, agency guidance, implementation plans
- **Precedent cases**: Historical decisions that inform the current case
- **Scholarship**: Academic articles and commentary
- **Lower court materials**: District and appellate decisions

### 2. Expert Presentation
A comprehensive slide deck or document containing:
- **Case timeline**: Key dates and events
- **Legal holdings**: Main decisions and reasoning
- **Justice-by-justice breakdown**: Individual opinions and reasoning
- **Practical implications**: Real-world consequences
- **Historical context**: How this fits into broader legal doctrine
- **Practice pointers**: Guidance for future litigation

**Format Requirements:**
- PDF preferred for consistent access
- Clear section headers for easy parsing
- Factual accuracy essential (serves as source material)

### 3. Expert Domain Knowledge
The subject matter expert must provide:
- **Analytical guidance**: What aspects to emphasize in AI-generated content
- **Legal nuance**: Corrections to AI interpretations
- **Historical context**: Proper temporal anchoring (e.g., 1875 vs 1789 for equity powers)
- **Practical insights**: Real-world implications and consequences
- **Academic connections**: Links to relevant scholarship and commentary

## Directory Structure

```
case-website/
├── index.html                    # Main page with all sections
├── css/
│   └── style.css                # All styling with CSS custom properties
├── js/
│   ├── main.js                  # Core functionality
│   ├── search.js                # Search functionality
│   └── notebooklm.js           # NotebookLM preparation
├── analyses/                    # AI-generated expert analyses
│   ├── majority-analysis.html
│   ├── concurrence-analysis.html
│   └── dissent-analysis.html
├── supreme-court/              # Court documents
│   ├── slip_opinion.pdf
│   └── oral_argument_transcript.pdf
├── executive/                  # Executive branch materials
│   └── executive_order.pdf
├── precedent-cases/           # Related case law
│   ├── precedent_1.html
│   └── precedent_2.html
├── scholarship/               # Academic articles
│   ├── article_1.pdf
│   └── article_2.pdf
├── assets.json               # Document manifest
└── WEBSITE_TEMPLATE_GUIDE.md # This guide
```

### File Naming Conventions
- **Lowercase with underscores**: `slip_opinion.pdf`
- **Descriptive names**: `barrett_majority_analysis.html`
- **Consistent patterns**: `{justice}_{opinion_type}_analysis.html`
- **Version control friendly**: No spaces or special characters
- **Semantic organization**: Group by document type, not chronology

## Branding Implementation

### CSS Custom Properties Approach
```css
:root {
    /* Institution Primary Colors */
    --color-primary: #C8102E;        /* UH Red */
    --color-primary-dark: #960C22;   /* UH Brick */
    
    /* Institution Secondary Colors */
    --color-accent: #00B388;         /* UH Teal */
    --color-accent-alt: #F6BE00;     /* UH Gold */
    
    /* Neutral Colors */
    --color-text: #54585A;           /* UH Slate */
    --color-text-light: #888B8D;     /* UH Gray */
}
```

### Brand Consistency Guidelines
1. **Primary colors** for headers, buttons, and key elements
2. **Accent colors** for highlights, borders, and secondary actions
3. **Consistent typography** throughout all generated content
4. **Logo placement** and institutional attribution
5. **Color accessibility** compliance (WCAG 2.1)

### Institutional Considerations
- Include appropriate disclaimers
- Respect institutional brand guidelines
- Maintain academic integrity in AI-generated content
- Provide proper attribution for all sources

## Zen MCP Integration

### Setup Requirements
1. **Install Zen MCP Server**:
   ```bash
   git clone https://github.com/BeehiveInnovations/zen-mcp-server.git
   cd zen-mcp-server
   ./run-server.sh
   ```

2. **Configure Claude Code**:
   ```bash
   claude mcp add zen /path/to/zen-mcp-server/.zen_venv/bin/python /path/to/zen-mcp-server/server.py --scope local
   ```

3. **API Key Configuration** (`.env` file):
   ```
   GEMINI_API_KEY=your_key_here
   OPENAI_API_KEY=your_key_here
   ANTHROPIC_API_KEY=your_key_here
   ```

### AI Content Generation Workflow

#### 1. Expert-Guided Analysis Generation
```
Pattern: For each major opinion/section:
1. Expert provides specific analytical focus points
2. AI generates initial content using expert guidance
3. Expert reviews and refines
4. AI regenerates with corrections
5. Final review and integration
```

#### 2. Content Quality Control
- **Word count targets**: Maintain consistency (400-500 words per analysis)
- **Tone consistency**: Professional, objective, educational
- **Factual accuracy**: Expert verification of all legal claims
- **Citation standards**: Proper legal citation format
- **Pedagogical elements**: Include fictional dialogues when helpful (clearly marked)

#### 3. Multi-Model Approach
- **GPT-4**: For analytical depth and clarity
- **Gemini**: For alternative perspectives and creative elements
- **Model comparison**: Use different models for cross-validation

### Example AI Prompt Structure
```
Analyze [Justice Name]'s [opinion type] in [Case Name] with emphasis on:
1. [Expert guidance point 1]
2. [Expert guidance point 2]
3. [Expert guidance point 3]

Target length: ~400 words
Tone: Professional, objective, educational
Include: [Specific elements requested by expert]
Context: [Relevant background from expert presentation]
```

## Overcoming Resource Discovery Obstacles

### Common Problems and Solutions

#### 1. PDF Access Issues
**Problem**: Many legal documents behind paywalls or have access restrictions
**Solutions**:
- Check multiple official sources (court websites, agency sites)
- Use institutional repository versions when available
- SSRN and academia.edu for scholarship
- Google Scholar for free versions
- Contact authors directly for working papers

#### 2. Document Format Problems
**Problem**: Downloaded "PDFs" are actually HTML error pages
**Solutions**:
- Always verify file type: `file document.pdf`
- Check file size (error pages are typically small)
- Use `curl` with proper headers instead of browser downloads
- Try alternative URLs from the same source

#### 3. Scholarship Access
**Problem**: Academic articles behind institutional paywalls
**Solutions**:
- Check author's personal/institutional page
- Look for working paper versions on SSRN
- Use institutional repositories
- Link to abstract pages when full text unavailable
- Consider fair use excerpts for educational purposes

#### 4. Government Document Availability
**Problem**: Executive branch documents may be removed or moved
**Solutions**:
- Archive.org for historical versions
- Multiple government source verification
- Academic mirrors and collections
- Contemporary news reports with document excerpts

### Quality Assurance Checklist
```
□ All PDFs verified as actual PDF format
□ File sizes reasonable (not error pages)
□ Links tested from multiple browsers
□ Mobile responsiveness verified
□ Search functionality works across all content
□ Brand colors consistent throughout
□ All analyses fact-checked by expert
□ Timeline accuracy verified
□ Citation formats standardized
□ Accessibility compliance checked
```

## Potential Pitfalls and Mitigation Strategies

### 1. AI Content Accuracy
**Risk**: AI hallucination or misinterpretation of legal concepts
**Mitigation**:
- Always require expert review before publication
- Use specific, factual prompts rather than open-ended requests
- Cross-reference AI output with primary sources
- Implement fact-checking workflows
- Mark AI-generated content clearly

### 2. Copyright and Fair Use
**Risk**: Inadvertent copyright violation with extensive quotations
**Mitigation**:
- Focus on analysis rather than reproduction
- Use proper attribution for all sources
- Consider fair use factors for educational purposes
- Obtain permissions when necessary
- Link to original sources rather than reproducing

### 3. Technical Complexity Creep
**Risk**: Feature bloat making maintenance difficult
**Mitigation**:
- Maintain clean, semantic HTML structure
- Use progressive enhancement for JavaScript features
- Keep dependencies minimal
- Document all custom code thoroughly
- Test across browsers and devices regularly

### 4. Content Maintenance
**Risk**: Links becoming outdated, information becoming stale
**Mitigation**:
- Regular link checking (quarterly)
- Version control for all changes
- Update logs for content modifications
- Contact information for reporting issues
- Clear maintenance responsibilities

### 5. Institutional Compliance
**Risk**: Violating institutional policies or brand guidelines
**Mitigation**:
- Review institutional web policies before launch
- Obtain proper approvals for logo/brand usage
- Include appropriate disclaimers
- Regular compliance reviews
- Clear content ownership documentation

## Scaling to Similar Cases

### Template Adaptation Process

#### 1. Case Assessment
- **Complexity level**: Simple ruling vs. multi-opinion landmark case
- **Document availability**: How many primary sources are accessible?
- **Timeline scope**: Single term vs. multi-year litigation
- **Academic interest**: How much scholarship exists?

#### 2. Content Planning
- **Opinion structure**: Map out all writings (majority, concurrences, dissents)
- **Historical context**: What precedents and background are essential?
- **Practical impact**: What are the real-world consequences?
- **Audience needs**: Law students, practitioners, or general public?

#### 3. Resource Allocation
- **Expert time required**: Plan for multiple review cycles
- **AI generation time**: Estimate based on content volume
- **Technical development**: Customize features for case specifics
- **Maintenance planning**: Long-term update responsibilities

### Customization Guidelines

#### For Different Case Types
- **Constitutional cases**: Emphasize constitutional interpretation evolution
- **Statutory interpretation**: Focus on legislative history and canons
- **Procedure cases**: Highlight practical litigation impacts
- **Criminal procedure**: Address law enforcement implications
- **Civil rights**: Consider broader social justice context

#### For Different Audiences
- **Law students**: More pedagogical elements, study aids
- **Practitioners**: Practical pointers, practice implications
- **Scholars**: Deeper theoretical analysis, research tools
- **General public**: Simplified explanations, real-world context

## Success Metrics and Evaluation

### Educational Effectiveness
- **User engagement**: Time on site, pages visited
- **Content utility**: Download rates, NotebookLM usage
- **Academic adoption**: Citations in scholarship, classroom use
- **Professional use**: Bar CLE credits, practitioner feedback

### Technical Performance
- **Page load speeds**: Optimize for mobile and slow connections
- **Search functionality**: Query success rates, user satisfaction
- **Accessibility compliance**: Screen reader compatibility, WCAG adherence
- **Cross-platform compatibility**: Browser and device testing

### Content Quality
- **Expert validation**: Regular accuracy reviews
- **User feedback**: Comment systems or feedback forms
- **Update currency**: How quickly new developments are incorporated
- **Comprehensive coverage**: Gaps in analysis or materials

## Future Enhancements

### Potential Advanced Features
1. **Interactive Timeline**: JavaScript-driven case progression
2. **Citation Network**: Visual connections between cases and scholarship
3. **Comparative Analysis**: Side-by-side opinion comparisons
4. **Multimedia Integration**: Video explanations, audio summaries
5. **Collaborative Annotation**: User-generated insights and commentary

### Integration Opportunities
1. **Legal Databases**: Westlaw/Lexis integration for authenticated users
2. **Educational Platforms**: LMS integration for classroom use
3. **Research Tools**: Zotero export, citation management
4. **Social Features**: Discussion boards, expert Q&A
5. **Analytics**: Advanced user behavior tracking for improvements

## Conclusion

This template provides a comprehensive framework for creating educational legal case websites that combine traditional web development with modern AI assistance. The key to success lies in:

1. **Expert guidance throughout**: Legal expertise must drive content decisions
2. **Quality control processes**: AI-generated content requires careful review
3. **User-focused design**: Educational goals should guide feature development
4. **Maintenance planning**: Long-term sustainability requires ongoing attention
5. **Technical simplicity**: Avoid unnecessary complexity that impedes updates

The integration of Zen MCP for AI content generation represents a significant advancement in legal educational resource creation, allowing experts to leverage AI capabilities while maintaining control over accuracy and educational value.

By following this template, legal educators and institutions can create comprehensive, engaging, and pedagogically sound resources that serve the needs of students, practitioners, and scholars while maintaining the highest standards of accuracy and educational integrity.

---

*This guide represents a collaborative effort between legal expertise and AI assistance, demonstrating the potential for human-AI collaboration in educational resource development.*