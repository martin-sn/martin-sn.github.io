import LOBVid from '../../../assets/LOBVid.mp4';

function MasterIntro() {
    return (
        <div> 
<h3>Introduction</h3>
<p>
For investors tradig at intra-day frequencies, 
or investors looking to optimize their order excecution, studying the limit order book (LOB)
has been of great interest. 
</p>
<h4 className='HighLight'>The Limit Order Book</h4>
<video src={LOBVid} autoPlay loop muted></video>
</div>
    )};

export default MasterIntro; 
