# Martin Søgaard Nielsen
The purpose of this site is to share some of the projects i have previously worked on. 
The site is still heavily work in process, therefore mistakes may be present and sections might be missings. 

## About me 
MSc. Business Intelligence, Aarhus University
Linkedin: https://linkedin.com/in/martin-sn
Kaggle: https://www.kaggle.com/martinsn

## Research projects

##### Forecasting Cryptocurrencies in a High Frequency Setting using Deep Neural Networks
This project served as my Master's Thesis 

Keywords
-- Deep Neural Networks
-- High Frequency
-- Limit Order Book Data
-- Financial Econometrics

###### Short summary 
The goal of the project was to investiage the predice power of neural networks in terms of forecasting short term price movements of cryptocurrencies. To acquire my data set, i set up a server running Linux to record the limit order book of a select set of cryptocurrencies on [Coinbase](https://pro.coinbase.com/). To record the data i modifed an existing [crypto research toolkit](https://github.com/sadighian/crypto-rl) to fit my requirements and then stored the data in an [artic tick store](https://github.com/man-group/arctic). For feature engineering i relied upon findings from similar research, which amongs other things, included volatility estimators from high frequency financial econometrics. 

As neural networks can be made infinetly complex i opted for systematically increasing the complexy of the networks in terms of layers, neurons, and features. I then used [model confidence sets](https://pure.au.dk/portal/files/34269366/rp10_76.pdf) to determine whether difference in predicitve power in my models were sigificant. 

In conclusion my set of models failed to provide any predcitive power in terms of the direction of price movements, but some of the models, especially LSTM models, were able to accurately predit when a large price movement would occur, however not to which direction. 

The scope of the project was however severely limited in terms of available compitational resources, as the size of the raw data was above 100 gigabytes, and even simple models could take a significant amout of hours to train.  

##### Forecasting 1-day price Fluctations of Bitcoin using Sentiment Analysis
Research conducted as a part of the Applied Data Science course at Aarhus University

Keywords
-- Natural Language Processing
-- Sentiment Analysis
-- Web Scraping
-- XGBoost  

###### Short summary 
The goal of the project was to investage whether performing setiment analysis on Bitcoin related tweets and news articles, could aid a time-series model in terms of predicing the direction of the next day price moment. To acquire our data-set of tweets we used the Twitter API to collect a set of tweets from the past few months, and to acquire our news articles we scraped the subforum for news articles on [bitcointalk.org](https://bitcointalk.org/). For our sentiment analysis we went for a lexicographic approach with the [NTUSD-Fin lexicon](http://nlg.csie.ntu.edu.tw/nlpresource/NTUSD-Fin/), which is specifically crafted for tweets related to financial assets. 

When then created custom metrics for the Bitcoin sentiment for each day, where the sentiment scores was a weighted sum of the days corresponding tweets, and tweets where weighted by their impact in terms of likes, comments and retweets.  

To conclude the project we created a XGBoost model with the goal of, in combination with features inspired time-series econometrics, predic the direct of the next day price flucation of Bitcoin. 

##### CAPM inferences about Bitcoin and the Market Proxy Problem
This project served as my Bachelor's Thesis.

Keywords 
-- Asset Pricing
-- Captial Asset Pricing Model (CAPM)

###### Short summary
The main goal of this project was to investigate whether using a market proxy partly consisting of Bitcoin would increase the vailidy of CAPM when tested, compared to a market proxy without Bitcoin. As the baseline market portfolio i used [10 industry portfolios](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/Data_Library/det_10_ind_port.html) and then added Bitcoin with incrementally increasing weights, to see whether the signficant alpha which falisifies CAPM would become insignificant. The alpha did indeed become insignifcant, but only at weights far larger than Bitcoins acual market cap and it seems more probable that adding Bitcoin to the market proxy merely served as statistical noise. 

## Kaggle Projects

##### Optiver Realized Volatily Prediction 





##### Aarhus University Data Mining Competition 
In-class competition with the goal of predicting customer churn for a telecom. The dataset was a fairly straight forward tabular set, which featured a few challenges in terms of missing values and formatting. The winning solution was an ensemble of sevral gradient boosting algorithms. 







