import React from "react";
import '../styles/style2.css';

const PreMarital = () => {
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

      <h1 className="h1">Pre-Marital Counseling</h1>
      <p className="p">Your first step towards a strong and sustainable marriage.</p>

      <main className="container">
        <section className="content-box">
          <h2>What is Pre-Marital Counseling?</h2>
          <p>
            Pre-marital counseling helps couples better understand each other and prepare for marriage and post-married life.
          </p>
          <h2>Key Benefits of Pre-Marital Counseling:</h2>
          <ul>
            <li>
              <strong>Gain clarity and understanding:</strong> Discuss topics that provide insights into what lies ahead in married life.
            </li>
            <li>
              <strong>Address overlooked issues:</strong> Explore areas that couples might have missed during courtship.
            </li>
            <li>
              <strong>Prepare for unforeseen challenges:</strong> For couples unable to "live-in" together before marriage, it offers guidance on navigating married life.
            </li>
            <li>
              <strong>Prevent unexpected shocks:</strong> Helps couples align expectations and avoid surprises later in life.
            </li>
          </ul>
          <div className="header">
            <h1>Small Things Often</h1>
          </div>
          <div className="main-container">
            <div className="audio-container" id="audioPlayer1">
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/episode/1xKm8nTiBGUzE0ibkHVs3z?utm_source=generator"
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
      src="https://open.spotify.com/embed/episode/1xKm8nTiBGUzE0ibkHVs3z?utm_source=generator"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
  
  {/* New audio players */}
  <div className="audio-container" id="audioPlayer2">
    <iframe
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/episode/59W9UoQdafeHptLOuRNTkY?utm_source=generator"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>

  <div className="audio-container" id="audioPlayer3">
    <iframe
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/episode/7CmQBtap1zpT3sqKjwEeEI?utm_source=generator"
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
              <button className="dropdown-btn" onClick={() => toggleDropdown("physical-intimacy")}>
                Physical and Emotional Intimacy
              </button>
              <div className="dropdown-content" id="physical-intimacy">
                <h3>How to Build Intimacy in Relationships</h3>
                <p>No matter how long you have been together, it's always important to build your intimacy levels. Here are some easy, practical ways to strengthen your levels of intimacy in your relationship:</p>
                <h3>Improve Physical Intimacy</h3>
                <ul>
                  <li><strong>Communicate Openly</strong> Discuss your likes, dislikes, and boundaries with your partner.</li>
                  <li><strong>Ask and Listen</strong> Encourage your partner to share their preferences and needs, and actively listen without judgment.</li>
                  <li><strong>Create a Safe Environment</strong> Foster trust by respecting each other's comfort levels and vulnerabilities.</li>
                  <li><strong>Express Appreciation</strong> Acknowledge your partner’s willingness to share their thoughts and desires.</li>
                </ul>
                <h3>Increase Emotional Intimacy</h3>
                <ul>
                  <li><strong>Share Openly</strong> Be honest about your thoughts and feelings, fostering a safe space for mutual self-disclosure.</li>
                  <li><strong>Acknowledge Special Moments</strong> Take note of meaningful events or small gestures that remind you of your partner, and share them to show your care.</li>
                  <li><strong>Show Thoughtfulness</strong> Surprise your partner with kind gestures or words to let them know they are on your mind.</li>
                  <li><strong>Build Trust Through Consistency</strong> Follow through on promises and maintain open communication to strengthen your bond over time.</li>
                </ul>
              </div>
            </li>

            <li>
              <button className="dropdown-btn" onClick={() => toggleDropdown("positive-attitude")}>
                Positive Attitude
              </button>
              <div className="dropdown-content" id="positive-attitude">
                <h3>The Importance of Positive Thinking in Relationships</h3>
                <ul>
                  <li>Creates an environment of encouragement and mutual growth</li>
                  <li>Enables overcoming challenges together</li>
                  <li>Promotes experiencing joy even during tough times</li>
                </ul>
                <h4>Focus on Gratitude:</h4>
                <ul>
                  <li>Actively look for things to appreciate in yourself, your partner, and your relationship</li>
                  <li>Write these positive observations in a journal</li>
                  <li>Revisit the notes regularly to remind yourself of the positives</li>
                </ul>
                <h4>Practice Compliments:</h4>
                <ul>
                  <li>Sincerely compliment your partner daily.</li>
                  <li>This builds confidence and a sense of value within the relationship.</li>
                </ul>
                <h4>Take Control of Your Thoughts:</h4>
                <ul>
                  <li>Be mindful of negative thought patterns.</li>
                  <li>Consciously choose thoughts that bring life and hope to the relationship.</li>
                  <li>Transform your mindset, as suggested by Romans 12:2.</li>
                </ul>
              </div>
            </li>

            <li>
              <button className="dropdown-btn" onClick={() => toggleDropdown("accountability")}>
                Accountability
              </button>
              <div className="dropdown-content" id="accountability">
                <h3>What Is Accountability in Relationships?</h3>
                <ul>
                  <li>Accountability means taking responsibility for your actions and their impact.</li>
                  <li>It involves adjusting behavior to maintain a healthier relationship.</li>
                  <li>It’s essential in romantic, family, and friendship bonds.</li>
                </ul>
                <h3>How to Improve Accountability in Relationships</h3>
                <h4>Communicate Openly and Honestly:</h4>
                <ul>
                  <li>Share thoughts, feelings, and concerns openly and honestly.</li>
                  <li>Listen actively and encourage your partner's expression.</li>
                  <li>Be transparent about expectations and intentions to build trust and emotional intimacy.</li>
                </ul>
              </div>
            </li>

            <li>
              <button className="dropdown-btn" onClick={() => toggleDropdown("recognition")}>
                Recognition
              </button>
              <div className="dropdown-content" id="recognition">
                <h3>The Importance of Recognition in Relationships</h3>
                <ul>
                  <li>Recognition involves appreciating each other's efforts and contributions.</li>
                  <li>It boosts trust, self-esteem, and emotional connection.</li>
                  <li>Consistent recognition fosters mutual respect and love.</li>
                </ul>
                <h3>How to Improve Recognition in Relationships</h3>
                <h4>Express Appreciation Regularly:</h4>
                <ul>
                  <li>Make it a habit to express gratitude for your partner’s efforts.</li>
                  <li>A simple "thank you" can make a big impact.</li>
                  <li>Acknowledge both big and small achievements to make them feel recognized.</li>
                </ul>
                <h4>Celebrate Milestones and Achievements:</h4>
                <ul>
                  <li>Recognize and celebrate your partner's accomplishments in all areas of life.</li>
                  <li>Acknowledge their successes with a heartfelt message or small celebration.</li>
                  <li>Show that you value their growth and achievements.</li>
                </ul>
              </div>
            </li>

            <li>
              <button className="dropdown-btn" onClick={() => toggleDropdown("givers-gain")}>
                Givers Gain
              </button>
              <div className="dropdown-content" id="givers-gain">
                <h3>The Importance of "Givers Gain" in Relationships</h3>
                <ul>
                  <li>"Givers Gain" emphasizes the mutual exchange of love, support, and kindness.</li>
                  <li>This principle fosters trust, emotional intimacy, and cooperation in relationships.</li>
                  <li>Selfless giving creates a balanced, resilient relationship with deeper satisfaction.</li>
                </ul>
                <h3>How to Improve "Givers Gain" in Relationships</h3>
                <h4>Practice Empathy:</h4>
                <ul>
                  <li>Put yourself in your partner's shoes to understand their needs and emotions better.</li>
                  <li>Offer your time, attention, and love to support them emotionally and mentally.</li>
                </ul>
                <h4>Prioritize Mutual Respect:</h4>
                <ul>
                  <li>Respect your partner's boundaries, values, and preferences.</li>
                  <li>Encourage your partner to give without expecting anything in return.</li>
                </ul>
              </div>
            </li>
                        {/* Roles, Goals, and Life Dreams Section */}
                        <li>
              <button className="dropdown-btn" onClick={() => toggleDropdown("roles-goals")}>Roles, Goals, and Life Dreams</button>
              <div className="dropdown-content" id="roles-goals">
                <p>
                  <h3>The Importance of Roles, Goals, and Life Dreams in Relationships</h3>
                  <ul>
                    <li>Aligning roles, goals, and life dreams is essential for long-term harmony.</li>
                    <li>Acknowledge and respect each other’s aspirations, values, and responsibilities.</li>
                    <li>Clear communication prevents misunderstandings and strengthens the relationship.</li>
                  </ul>
                  <h4>Roles:</h4>
                  <ul>
                    <li>The roles partners play, such as emotional support or caregiver, impact the relationship dynamic.</li>
                    <li>Understanding these roles helps share responsibilities effectively.</li>
                    <li>Clarifying roles manages expectations and strengthens the partnership.</li>
                  </ul>
                  <h4>Goals:</h4>
                  <ul>
                    <li>Shared goals provide direction and help couples work together toward something meaningful.</li>
                    <li>Individual goals ensure both partners feel fulfilled and motivated in their own pursuits.</li>
                  </ul>
                  <h4>Life Dreams:</h4>
                  <ul>
                    <li>Life dreams represent each partner's vision for the future.</li>
                    <li>Aligning these dreams fosters long-term satisfaction and deeper connection.</li>
                    <li>Shared aspirations strengthen the partnership as both partners work toward them together.</li>
                  </ul>
                  <h3>How to Improve Roles, Goals, and Life Dreams in Relationships</h3>
                  <h4>Open Communication:</h4>
                  <ul>
                    <li>Regularly discuss roles, goals, and life dreams with your partner.</li>
                    <li>Talk about responsibilities (e.g., chores, emotional support) and broader aspirations (e.g., career, family plans).</li>
                    <li>Open dialogue ensures both partners are aligned and can support each other effectively.</li>
                  </ul>
                  <h4>Respect Individual Goals:</h4>
                  <ul>
                    <li>Respect each other's personal dreams and ambitions alongside shared goals.</li>
                    <li>Encourage your partner to pursue their individual goals and offer support.</li>
                    <li>This fosters trust and shows you value their personal growth.</li>
                  </ul>
                  <h4>Support Each Other's Growth:</h4>
                  <ul>
                    <li>Encourage your partner to pursue their passions and dreams.</li>
                    <li>Be their cheerleader, even if their goals differ from yours.</li>
                    <li>This creates a deeper connection and fosters mutual support in personal and shared endeavors.</li>
                  </ul>
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default PreMarital;