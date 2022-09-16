import { Link } from 'react-router-dom';

function Master() {
    return (
        <div> 
<h3 className="HighLight"><Link to='/MastersThesis'>Forecasting Cryptocurrencies in a High Frequency Setting using Deep Neural Networks</Link></h3>
<p>This project served as my master's thesis</p>
<p>Keywords</p>
<ul>
    <li>Python</li>
    <li>Deep Neural Networks</li>
    <li>High Frequency</li>
    <li>Limit Order Book Data</li>
    <li>Financial Econometrics</li>
</ul>
<h4>Short summary</h4>

<p>
The goal of the project was to investigate the predictive power of neural networks in terms of forecasting short term price movements of cryptocurrencies.
To acquire my data set, i set up a server running Linux to record the limit order book of a select set of cryptocurrencies on <a href="https://pro.coinbase.com/" className="HighLight">Coinbase</a>. 
To record the data i modifed an existing <a href="https://github.com/sadighian/crypto-rl" className="HighLight">research toolkit for cryptocurrencies</a> to fit my requirements and then stored the data in an <a href="https://github.com/man-group/arctic" className="HighLight">artic tick store</a>.
For feature engineering i relied upon findings from similar research, which amongs other things, included volatility estimators from high frequency financial econometrics.
</p>

<p> 
As neural networks can be made infinitely complex i opted for systematically increasing the complexy of the networks in terms of layers, neurons, and features.
 I then used <a href="https://pure.au.dk/portal/files/34269366/rp10_76.pdf" className="HighLight">model confidence sets</a> to determine whether difference in predicitve power in my models were sigificant.
</p>


<p>
In conclusion my set of models failed to provide any predcitive power in terms of the direction of price movements,
 but some of the models, especially LSTM models, were able to accurately predit when a large price movement would occur,
  however not to which direction.
</p>


<p>
The scope of the project was however severely limited in terms of available compitational resources,
 as the size of the raw data was above 100 gigabytes, 
 and even simple models could take a significant amout of hours to train.
</p>


</div>
    )};

export default Master; 
