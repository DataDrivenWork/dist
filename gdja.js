document.addEventListener('DOMContentLoaded', () => {
    const articleText = `
    Last week I talked about how more clearly defining the goal of a job can help develop more accurate performance metrics, with the goal of reaching a state similar to sabermetrics in sports. This week, I want to build on that idea and talk about the “how”. Specifically, how can we better define the goals of a job to better understand what performance looks like in that job. To do this, I am proposing a new process that I like to call “Goal-Driven Job Analysis”. 
As any Work Psychologist worth their salt will tell you, Job Analysis is the foundation of practically everything we do, including designing performance management systems. As a brief refresher, Job Analysis is the process by which we identify the knowledge, skills, abilities, and other characteristics (or KSAOs as we like to call them) necessary to perform the job successfully. The problem with job analysis in my mind is that what success looks like in the job is not identified or clearly defined. This results in the information gathered from traditional job analysis being rather stale technical information that has little meaning for those outside of that specific job, making it more difficult to gain buy-in to actually conduct a job analysis in the first place! Put another way, Job Analysis does not draw a direct link between the KSAOs and the bottom line of the company.  Competency modeling attempts to address this issue by taking a top-down approach to job analysis where leaders determine what “competencies” are important for the success of the organization as a whole. But Competency Modeling tend to be too broad to be very impactful at the operational level, similar to overall ratings of performance. Goal-Driven Job Analysis helps solve these problems by connecting the tasks done on the job to the overall goals and purpose of the job, making the resulting information relevant to both leaders and people on the ground 
So what would a Goal-Driven Job Analysis look like in practice? As I described in last week’s article, the first step would be to identify what the main goals of the job are and how they tie into the overall success of the organization, either by making the company money or saving the company money. Once these goals are set up, the tasks that fit into these goals can be identified, which could include identifying any tasks that are outside of the immediate control of the specific job being evaluated. Depending on the ultimate purpose of the job analysis, the KSAOs required for these task can also be discussed. These goals and tasks would first be identified by groups of SMEs and then validated with a larger population via survey ratings of the importance and frequency of these goals and tasks. As part of this approach, leaders and job incumbents could rate the importance of goals for the job, providing an interesting datapoint on how these different groups perceive a specific job’s priorities and opening the door for a conversation that can lead to better aligning priorities for the overall success of an organization. 
I see a lot of potential with Goal-Driven Job Analysis. I believe this type of analysis could result in the creation of more accurate and actionable performance management systems, selection assessments, and training materials, just to name a few usage cases. Not to mention, in a world where job tasks often change at a rapid pace, shifting our focus to what are the specific goals of a job should allow for more flexibility in how those goals are achieved. Now before I move forward, I want to recognize that there are similarities between Goal-Driven Job Analysis and Strategic Job Analysis. However, Strategic Job Analysis focuses more broadly on the overall strategy of the organization and tends to be future-oriented. I believe Goal-Driven Job Analysis offers a lot of additional value in that it is focused on specific jobs and makes the outcomes much more actionable. 
If I have piqued your interest, I have outlined a more detailed process for how to actually conduct a Goal-Driven Job Analysis below. My ultimate hope is that this process can be used for the creation of better performance and criterion measures and help to simplify how we conceptualize individual jobs, which should in turn enable more advanced analyses of performance and optimization of work processes. I fully recognize there is still a lot of work left to be done here and a lot of questions still to be answered. Some questions that come to my mind: How can we standardized such a process to make it easy to use and adopt? Can we create a list of “common goals” that are consistent across jobs to make this easier and faster to implement (I’m looking at Campbell & Wiernik, 2015 as a possible model here)? All that being said, hopefully we can start a discussion around this topic that can lead to some meaningful research and advancements in performance management. Thanks for reading!
 
Process For Goal-Driven Job Analysis:
Step 1. Documentation Analysis
This step can be tricky, because unfortunately many organizations lack this critical information. In such cases, I would recommend more heavily focusing on relevant external information, such as O*Net and Job Descriptions for similar roles.
1. Gather relevant information and documentation
2. Identify potential KSAOs and goals
3. Create framework/materials for Focus Groups/Interviews
Step 2. Focus Groups/Interviews
1. Conduct Focus Groups and/or Interviews with Subject Matter Experts (SMEs) based on analysis needs and resource constraints. The exact number of Focus Groups and SME can vary quite a bit here. Be sure to carefully plan based on what makes sense for you!
2. Identify the goals of the job.
3. Identify the tasks performed on the job that fit into each goal
Step 3. Survey to a Larger Population
1. Based on the results of the Focus Groups/Interviews, put together a survey to send to a larger population of job incumbents.
2. Send survey to a representative sample of job incumbents.
Step 4. Analyze Results and Put into Practice
1. Analyze the results to confirm the goals, tasks, and KSAOs most relevant to the job
2. Identify discrepancies between supervisor and job incumbent ratings of goals to better align everyone on the goals of the organization.
3. Develop Performance Metrics based on the analysis.
4. Develop additional tools based on analysis (selection, training, etc.)

References
1. Campbell, J. P., & Wiernik, B. M. (2015). The modeling and assessment of work performance. Annu. Rev. Organ. Psychol. Organ. Behav., 2(1), 47-74.

Acknowledgements: Special thanks to Brandon Jordan for helping me to think through this idea!

    `;
  
    const formatArticleText = (text) => {
        const lines = text.split('\n').filter(line => line.trim() !== '');
        let html = '';
    
        lines.forEach(line => {
          if (line.trim().length === 0) return;
    
          if (line.match(/^\d/)) {
            // Lines starting with numbers
            html += `<p class="numbered-line">${line.trim()}</p>`;
          } else if (line.split(' ').every(word => /^[A-Z]/.test(word[0]))) {
            // Check if the first letter of every word in the line is capitalized
            html += `<h2>${line.trim()}</h2>`;
          } else if (line.startsWith('Step')) {
            // Lines starting with "Step"
            html += `<p><i>${line.trim()}</i></p>`;
          } else if (line.startsWith('-')) {
            // Lines starting with "-"
            html += `<p class="indented-line">${line.trim()}</p>`;
          } else {
            // Replace link placeholders with actual HTML links
            const formattedLine = line.replace(/\(see here\)/g, '<a href="https://www.linkedin.com/pulse/lessons-from-sports-analytics-jackson-roatch-mrlbc/" target="_blank">see here</a>');
            html += `<p>${formattedLine.trim()}</p>`;
          }
        });
  
      return html;
    };
  
    const formattedArticle = formatArticleText(articleText);
    document.getElementById('article-container').innerHTML = formattedArticle;
  });
  
  
  