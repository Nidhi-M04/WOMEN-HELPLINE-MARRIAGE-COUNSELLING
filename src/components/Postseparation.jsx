import React from "react";
import "../styles/style2.css";

const PostSeparation = () => {
  const toggleDropdown = (id) => {
    const content = document.getElementById(id);

    // Check if the clicked dropdown is already open
    if (content.classList.contains('active')) {
      content.classList.remove('active');  // Close it
    } else {
      // Close all open dropdowns
      const allDropdowns = document.querySelectorAll('.dropdown-content');
      allDropdowns.forEach((dropdown) => dropdown.classList.remove('active'));
      
      // Open the clicked dropdown
      content.classList.add('active');
    }
  };


  return (
    <div>
      <header>
        <div className="header"><h1>Marriage Counseling</h1></div>
        <div className="pannel">
          <div className="pannel-opt">
          <a href="/">Home</a>
            <a href="about.html">About</a>
            <a href="blog.html">Blogs</a>
            <a href="questionnaire">Self Assessment</a>
            <a href="helpline.html">Helpline</a>
            <a href="feedback.html">Feedback</a>
          </div>
        </div>
      </header>

      <h1 className="h1">Post-Separation Counseling</h1>
      <p className="p">Every ending is the start of a new beginning.</p>

      <main className="container">
        <section className="content-box">
          <h2>What is Post-Separation Counseling?</h2>
          <p>
            Post-separation counseling provides therapeutic support and guidance to individuals and families after a separation or divorce. It aims to help navigate the emotional, psychological, and practical challenges that arise during this transition.
          </p>
          <h2>Key Objectives of Post-Separation Counseling:</h2>
          <ul>
            <li><strong>Emotional adjustment:</strong> Support individuals in processing the emotional and psychological impact of separation.</li>
            <li><strong>Co-parenting guidance:</strong> Help parents navigate co-parenting responsibilities and maintain a positive environment for children.</li>
            <li><strong>Conflict resolution:</strong> Address and manage conflicts constructively to reduce stress and promote healing.</li>
            <li><strong>Adaptation to life changes:</strong> Assist individuals in adjusting to significant life changes and establishing a new normal.</li>
            <li><strong>Family support:</strong> Provide tools to help families move forward in a healthy and constructive way.</li>
          </ul>
          <div className="header">
            <h1>Small Things Often</h1>
          </div>
          <div className="main-container">
            <div className="audio-container" id="audioPlayer1">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/episode/3VkwOGcHmIk42Y8pnPpfDg?utm_source=generator"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="main-container">
  <div className="audio-container" id="audioPlayer1">
    <iframe
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/episode/1XJdvjUw3QyozgZroPUgBo?utm_source=generator"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>

  <div className="audio-container" id="audioPlayer2">
    <iframe
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/episode/1XJdvjUw3QyozgZroPUgBo?utm_source=generator"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
</div>

        </section>

        <section className="benefits-box">
          <h2>Key Elements</h2>
          <ul id="benefits-list">
            <li>
              <button className="dropdown-btn" onClick={() => toggleDropdown("emotional-healing")}>
                Emotional Healing and Support
              </button>
              <div className="dropdown-content" id="emotional-healing">
                <h3>The Importance of Emotional Healing and Support in Relationships</h3>
                <ul>
                  <li>Emotional healing helps recover from past traumas, misunderstandings, or betrayals in romantic relationships.</li>
                  <li>It focuses on rebuilding trust, intimacy, and connection between partners.</li>
                  <li>Emotional healing is crucial for maintaining a healthy and enduring relationship through personal and relational challenges.</li>
                </ul>
                <h3>How to Improve Emotional Healing and Support in Relationships</h3>
                <ul>
                  <li>Recognize the need for emotional healing and initiate the process.</li>
                  <li>Seek therapy or counseling to address unresolved emotional wounds.</li>
                  <li>Foster open and honest communication with your partner.</li>
                  <li>Offer empathy and understanding to your partner during their emotional healing process.</li>
                </ul>
              </div>
            </li>
            <li>
              <button className="dropdown-btn" onClick={() => toggleDropdown("co-parenting")}>
                Co-parenting Skills
              </button>
              <div className="dropdown-content" id="co-parenting">
                <h3>The Importance of Co-parenting Skills in Relationships</h3>
                <ul>
                  <li>Co-parenting is crucial after separation or divorce when children are involved.</li>
                  <li>It requires collaboration and communication between parents to ensure the child’s well-being.</li>
                  <li>Strong co-parenting skills help children adjust to the changes and maintain a positive relationship with both parents.</li>
                </ul>
                <h3>How to Improve Co-parenting Skills</h3>
                <ul>
                  <li>Establish clear communication with your co-parent regarding the child’s needs.</li>
                  <li>Respect each other's boundaries and opinions for the sake of the child.</li>
                  <li>Work together to create a consistent routine for the children.</li>
                </ul>
              </div>
            </li>
  
            <li>
              <button className="dropdown-btn" onClick={() => toggleDropdown("adjustment")}>
                Adjustment to New Life
              </button>
              <div className="dropdown-content" id="adjustment">
                <h3>The Importance of Adjustment to New Life in Relationships</h3>
                <ul>
                  <li>Adjusting to new life helps build resilience and a healthy foundation for the future.</li>
                  <li>Smooth adjustment reduces stress and prevents feelings of isolation or resentment.</li>
                  <li>Positive adjustment promotes stability and emotional well-being.</li>
                </ul>

                <h3>How to Improve Adjustment to New Life in Relationships</h3>
                <h4>Give Yourself Time to Grieve and Heal:</h4>
                <ul>
                  <li>Significant life changes, like the end of a relationship, often bring a sense of loss.</li>
                  <li>Allowing yourself time to process emotions is crucial for healing.</li>
                  <li>Grieving the end of a chapter is a natural part of adjusting to a new life.</li>
                </ul>

                <h4>Establish New Routines:</h4>
                <ul>
                  <li>Change can feel overwhelming, especially when it disrupts established routines.</li>
                  <li>Creating new routines helps bring stability and ease the transition.</li>
                  <li>Adjusting to new work schedules or setting up your home can provide comfort.</li>
                </ul>

                <h4>Set New Goals and Personal Priorities:</h4>
                <ul>
                  <li>Life changes create opportunities to reassess values, goals, and priorities.</li>
                  <li>Take time to reflect on personal and relational aspirations for the future.</li>
                  <li>Setting new goals, whether for career, growth, or social connections, provides purpose.</li>
                </ul>
              </div>
            </li>
            <li>
              <button className="dropdown-btn" onClick={() => toggleDropdown("stability")}>
                Stability for Children
              </button>
              <div className="dropdown-content" id="stability">
                <h3>The Importance of Stability for Children in Relationships</h3>
                <ul>
                  <li>Stability helps children develop emotional resilience and cope better with transitions, such as family changes.</li>
                  <li>A stable environment fosters better social, academic, and behavioral outcomes.</li>
                  <li>It reduces stress and ensures children feel loved, supported, and grounded in a nurturing atmosphere.</li>
                </ul>

                <h3>How to Improve Stability for Children in Relationships</h3>
                <h4>Maintain Consistent Routines</h4>
                <ul>
                  <li>Children thrive on routines, which provide structure and predictability.</li>
                  <li>Consistent routines for meals, bedtime, homework, and family activities help children feel secure.</li>
                  <li>Parents, even in cases of separation or divorce, should maintain similar routines in both households.</li>
                </ul>

                <h4>Ensure Effective Co-Parenting Communication:</h4>
                <ul>
                  <li>Effective communication prevents misunderstandings and fosters a unified parenting approach.</li>
                  <li>A unified approach enhances stability and security for the child.</li>
                </ul>

                <h4>Create a Safe and Supportive Environment:</h4>
                <ul>
                  <li>Ensure the home environment is emotionally and physically safe for the child.</li>
                  <li>Provide a space where the child can express their feelings without judgment.</li>
                  <li>Offer reassurance during times of stress and ensure the home is free from conflict or instability.</li>
                </ul>

                <h4>Minimize Exposure to Adult Conflicts:</h4>
                <ul>
                  <li>Children should never be caught in the middle of adult conflicts, whether between parents or extended family members.</li>
                  <li>Avoid discussing sensitive topics like finances, relationship issues, or personal grievances in front of the child.</li>
                  <li>Shielding children from adult problems helps them feel secure and reduces unnecessary stress.</li>
                </ul>
              </div>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Marriage Counseling Services</p>
      </footer>
    </div>
  );
};

export default PostSeparation;