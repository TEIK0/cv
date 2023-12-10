import React from 'react'
import '../assets/css/progress_bar.css'

export default function ProgressBar({ percentage }) {
    return (
        <center>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${percentage}%` }}></div>
            </div>
        </center>
      );
}
