import React from 'react'
import '../css/workex.css'
const Workex = () => {
    return (
        <div>
            <ul class="timeline">


<li>
    <div class="direction-r">
        <div class="flag-wrapper">
            <span class="flag">Freelancer</span>
            <span class="time-wrapper"><span class="time">2013 - present</span></span>
        </div>
        <div class="desc">My current employment. Way better than the position before!</div>
    </div>
</li>


<li>
    <div class="direction-l">
        <div class="flag-wrapper">
            <span class="flag">Apple Inc.</span>
            <span class="time-wrapper"><span class="time">2011 - 2013</span></span>
        </div>
        <div class="desc">My first employer. All the stuff I've learned and projects I've been working on.</div>
    </div>
</li>


<li>
    <div class="direction-r">
        <div class="flag-wrapper">
            <span class="flag">Harvard University</span>
            <span class="time-wrapper"><span class="time">2008 - 2011</span></span>
        </div>
        <div class="desc">A description of all the lectures and courses I have taken and my final degree?</div>
    </div>
</li>

</ul>

        </div>
    )
}

export default Workex
