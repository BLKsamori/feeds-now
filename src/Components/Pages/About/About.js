import useCurrentPage from "../../../Services/useCurrentPage";
import "./About.css";

function About() {
  useCurrentPage("About");

  return (
    <div className="About">
      <h2>what is actually Feed Now</h2>
      <p>
        There are a lot of new things happening on the All Times website this
        summer! We've got new feeds from all over the internet, so you can stay
        up-to-date on all the latest news. We've also got a brand new summery
        section, where you can find all the best articles from the past month.
        And of course, we've still got all the great features that you know and
        love, like our daily horoscopes and weekly horoscope videos. So make
        sure you check back often to see all the new things that we have in
        store for you!
      </p>
    </div>
  );
}

export default About;
