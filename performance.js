document.addEventListener('DOMContentLoaded', () => {
    const articleText = `
    Ever since I watched the movie Moneyball, starring Brad Pitt, I have been fascinated by the concept of sabermetrics. For those not familiar, sabermetrics is a relatively new field in professional sports that looks to go beyond traditional metrics to measure the true value of players by using advanced statistics. This approach has revolutionized the world of sports in numerous ways and revealed countless inefficiencies in how success was previously measured in sports. 
For example, in basketball sabermetrics determined that the 3 point shot was being undervalued, which led teams to try to shoot more 3 pointers. This approach had the unintended consequence of spreading out the defense more (in order to defend against all the 3 pointers), making it easier for players to score layups. This is just one example, and I would highly encourage you to check out Jackson Roatch’s excellent article on the value sabermetrics has added to sports (see here) for more examples. Now, this raises an interesting question: as a field that looks to evaluate success at work, would it not be beneficial to take a similar approach to improve work outcomes? Put another way, why can’t we develop new performance metrics to better measure the true value of work being done?  Just as sabermetrics highlighted the undervaluation of the 3-point shot, we might discover that traditional performance metrics undervalue critical but less visible contributions, like collaborative problem-solving or innovative thinking.
The Problem
Currently, the performance metrics I see most often take the form of manager ratings of “overall performance”. Now you don’t have to be a work psychologist to understand that such ratings are highly susceptible to bias. Not to mention, this broad categorization of “overall performance” makes it more difficult to find meaningful predictors, as it is difficult to pinpoint specifics when you are defining something so broadly. With this kind of data to work with, what we can do is quite frankly limited. Sure, we can run regressions and all that, but how confident can we be in these results with such poorly defined data? 
So given these problems with current performance data, it makes total sense to take a more “sabermetrics” approach to evaluating work performance in order to more accurately assess performance. “Ok great” you say, “If sabermetrics are so great, why aren’t more organizations taking this approach?” Well, there are a number of roadblocks but I want to start by discussing the differences between sports and normal work that make it easier for sports teams to evaluate performance. 
Namely, sports by their very nature are closed systems that have clearly defined goals. The goal is to win the game, and you win the game by scoring points and preventing your opponent from scoring points. Simple as that. Normal work, on the other hand, is an open system where the goals are often poorly defined, especially the higher up in an organization you go. For instance, a manager might be responsible for "improving team performance" or "increasing customer satisfaction." These goals are more open-ended and subjective compared to the straightforward objective of scoring points in a game. And they can be influenced by factors outside of the manager’s control. This makes it much harder to evaluate performance for a lot of jobs, leading many organizations to just apply a general “overall performance” metric that is rated by supervisors. If only evaluating employees was as straightforward as counting home runs, our jobs as work psychologists would be a whole lot easier, wouldn't they?
However, while it is certainly harder to measure performance for these roles, I don’t believe it is impossible. In fact, in my mind one of the primary objectives of work psychology is to measure these difficult work concepts. Finding ways to measure these work concepts where others can’t is an essential part of the value we bring. And performance should be no different.  Developing better ways to measure performance for complex jobs should be one of our primary goals, because not only does it add value to the organization, but it greatly increases our own capabilities. It does not matter how advanced our statistics become if the quality of our criterion data cannot keep up with those statistics.
Leveling The Playing Field
So how then do we go about measuring performance for these jobs in which it is hard to measure performance? Well, I think the first step should be to simplify the job. More specifically, I think we need to more clearly define the goals of each specific job. Why does this job exist in the first place? Does it work to increase the revenue of a company or to reduce its expenditures? More clearly defining what we are here for should allow us to better define how we “win the game” of our job and allow for easier exploration of what factors influence each individual goal. Take my job for example. Broadly speaking, my job might consist of 2 goals:
1. Assess clients in various situations on their capabilities based on a defined set of behaviors.
2. Conduct research to support the efficacy of the assessment process and identify areas for improvement.
The first goal brings in money for the company by providing a service to the client. The second goal can bring in money (if a client wants us to develop a new assessment process) but is primarily focused on reducing risk/expenditures for the organization. Once these goals are clearly defined, the various tasks that fall into each goal can be identified and what “performance” looks like can be simultaneously more nuanced and easier to understand. In addition, by focusing our goals on the concept of making and saving money, we can more easily draw links between what people do and what the organization cares about, namely making money. We can also begin to identify what outside factors might impact these goals and control for them. So going back to my example earlier, my ability to meet those goals might be impacted by how much time I am given for each goal, the number of clients we have, or even the level of importance my leaders attribute to each goal for the overall success of the company.
By breaking down a job to it’s essential elements, we can create a more “closed” system, where it becomes easier to evaluate performance. The key element here is tying everything to how the job contributes to the bottom line. Or put another way, why does this job exist in the first place? I plan to get into how this type of analysis could work, but that will have to wait until next week when I introduce what I am calling “Goal Driven Job Analysis”. Until then, thanks for reading.

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
  
  
  