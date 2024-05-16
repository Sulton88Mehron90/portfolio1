import Link from './Link';
import '../components/DetailedAbout.css'
import React, { useEffect } from 'react';

const DetailedAbout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id='detailed-about' className='detailed-about divider'>
      <h2>About Me</h2>
      <p>Hello, I hope this finds you well.</p>
      <p>
        I'd like to introduce myself, I aim to continue learning the craft of
        becoming a skilled Front-End Software Developer. I've worked in the
        software industry for 17 years, a period I do not regret. However, the
        work I truly enjoyed was when it was visually creative, involving the
        craft of code that brings visuals to the forefront, making people's
        moments spent on the web or app enjoyable and seamless.
      </p>
      <p>
        When I think of the question of what value I would bring to a team,
        along with my technical skills it's my honesty, loyalty, and dedication.
        I'm someone who will persevere to complete the task at hand. My journey
        has been shaped by life experiences as immigrating to the US with my two
        young sons to prioritizing family above all. Life's lessons have
        fortified my resilience, adaptability, profound empathy and balance
        between emotional intelligence and logical reasoning, which I infuse
        into every action I undertake, every decision I make, and every line of
        code I draft.
      </p>
      <p>
        Beyond the digital realm of zeroes and ones, I take immense pride in my
        heritage and am grateful for every opportunity the US has provided my
        sons and me. I find joy and valuable lessons in life's offerings.
      </p>
      <p>
        I'm hopeful for an opportunity to join a team where I can grow and
        contribute to achieving the team's goals. If my story resonates with
        what your company seeks in a team member, I would love to hear from you.
      </p>
      <p>Best regards, Parvin</p>
      <Link href="https://docs.google.com/document/d/1x-aw1oNwc8OdlhFadUd3JvFMhyebqlqM/export?format=docx" className="btn">
        Download my Resume
      </Link>


    </section>
  );
};

export default DetailedAbout;
