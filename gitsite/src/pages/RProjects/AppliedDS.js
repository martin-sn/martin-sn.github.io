function AppliedDS() {
    return (
        <div> 
<h3 className="HighLight">Forecasting 1-day price Fluctations of Bitcoin using Sentiment Analysis</h3>
<p>Research conducted as a part of the Applied Data Science course at Aarhus University</p>
<p>Keywords</p>
<ul>
    <li>Python</li>
    <li>Natural Language Processing</li>
    <li>Sentiment Analysis</li>
    <li>Web Scraping</li>
    <li>XGBoost</li>
</ul>
<h4>Short summary</h4>

<p>
The goal of the project was to investage whether performing setiment analysis on Bitcoin related tweets and news articles, 
could aid a time-series model in terms of predicing the direction of the next day price moment. 
To acquire our data-set of tweets we used the Twitter API to collect a set of tweets from the past few months,
 and to acquire our news articles we scraped the subforum for news articles on <a href="https://bitcointalk.org/" className="HighLight">bitcointalk.org</a>.
  For our sentiment analysis we went for a lexicographic approach with the <a href="http://nlg.csie.ntu.edu.tw/nlpresource/NTUSD-Fin/" className="HighLight">NTUSD-Fin lexicon</a>, which is specifically crafted for tweets related to financial assets.
</p>

<p> 
When then created custom metrics for the Bitcoin sentiment for each day, where the sentiment scores was a weighted sum of the days corresponding tweets, and tweets where weighted by their impact in terms of likes, comments and retweets.
</p>


<p>
To conclude the project we created a XGBoost model with the goal of, in combination with features inspired by time-series econometrics, predict the direction of the next day price flucation of Bitcoin.
</p>



</div>
    )};

export default AppliedDS; 
