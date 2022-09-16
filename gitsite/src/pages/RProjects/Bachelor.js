function Bachelor() {
    return (
        <div> 
<h3 className="HighLight"> CAPM inferences about Bitcoin and the Market Proxy Problem
</h3>
<p>This project served as my bachelor's thesis</p>
<p>Keywords</p>
<ul>
    <li>R</li>
    <li>Asset Pricing</li>
    <li>Capital Asset Pricing Model (CAMP)</li>
</ul>
<h4>Short summary</h4>

<p>
The main goal of this project was to investigate whether using a market proxy partly consisting of Bitcoin would increase the vailidy of CAPM when tested,
 compared to a market proxy without Bitcoin. As the baseline market portfolio i used <a href="https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/Data_Library/det_10_ind_port.html" className="HighLight">10 industry portfolios </a> 
   and then added Bitcoin with incrementally increasing weights, to see whether the signficant alpha which falisifies CAPM would become insignificant. 
  The alpha did indeed become insignifcant, but only at weights far larger than Bitcoins acual market cap and it seems more probable that adding Bitcoin to the market proxy merely served 
  as statistical noise.
</p>

</div>
    )};

export default Bachelor; 
